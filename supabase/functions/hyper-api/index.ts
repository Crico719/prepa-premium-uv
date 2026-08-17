import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SEARCH_KEYWORDS = ["quién es", "presidente", "actual", "noticias", "último", "reciente", "2025", "2026", "2027", "hoy", "ayer", "semana", "mes", "elecciones", "gobierno", "ministro", "precio", "dólar", "clima", "terremoto", "copa", "fútbol", "liga"];

function needsSearch(query: string): boolean {
  const q = query.toLowerCase();
  return SEARCH_KEYWORDS.some((k) => q.includes(k));
}

const cache = new Map<string, { answer: string; time: number }>();
const CACHE_TTL = 10 * 60 * 1000;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const GROQ_KEY = Deno.env.get("GROQ_API_KEY");
    const TAVILY_KEY = Deno.env.get("TAVILY_API_KEY");
    const { message, history, imageData, fileText } = await req.json();

    const sys = `Eres PrepaBot, un tutor IA experto para estudiantes peruanos que se preparan para examenes de admision universitaria (UNI, UNMSM, PUCP, UNSA).

ESTILO DE RESPUESTA - GUIA DE ESTUDIO ORGANIZADA:
Debes responder como una guia de estudio profesional, NO como un chat casual.

ESTRUCTURA OBLIGATORIA:
1. Titulo principal con emoji: 📘 Nombre del Tema
2. Numerar cada concepto importante (1., 2., 3., etc.)
3. Explicar cada concepto con negrita: **Concepto:** explicacion
4. Incluir formulas con notacion Unicode: x², √, ±, Δ
5. Agregar tablas markdown para comparar opciones o listar datos
6. Incluir seccion 💡 Importante o 💡 Tip despues de cada concepto clave
7. Incluir ejemplos resueltos paso a paso
8. Terminar con ⭐ Resumen rapido y 🧠 Para recordar

FORMATO DE EJEMPLO:
📘 Nombre del Tema

1. **Concepto base:**
   Definicion clara y directa.

   **Discriminante:** formula con Unicode

   💡 **Tip:** consejo util para el examen

2. **Siguiente concepto:**
   Explicacion.

   **Ejemplo:**
   [pasos resueltos]

   💡 **Importante:** nota clave

**Tabla de metodos:**
| Metodo | Cuando usarlo | Ventaja |
|--------|---------------|---------|
| ... | ... | ... |

⭐ **Resumen rapido:**
- punto 1
- punto 2

🧠 **Para recordar:**
- concepto clave 1
- concepto clave 2

REGLAS ADICIONALES:
- NO uses listas con viñetas normales, usa NEGRITAS para cada punto
- Usa ## para secciones grandes (ej: ## Fórmula General)
- Las formulas deben ser legibles con Unicode: x², √, ±, Δ, ², ³
- Incluye ejemplos praticos peruanos cuando sea posible
- Responde en espanol peruano, directo y preciso
- Si el usuario envia imagen, resuelve el ejercicio paso a paso
- Si el usuario envia documento, analizalo como tutor

Materias: Matematicas, Razonamiento Matematico/Verbal, Fisica, Quimica, Biologia, Literatura, Historia, Geografia.`;

    let searchCtx = "";
    if (TAVILY_KEY && needsSearch(message)) {
      const cacheKey = message.toLowerCase().trim();
      const cached = cache.get(cacheKey);
      if (cached && Date.now() - cached.time < CACHE_TTL) {
        searchCtx = "\n[Info actualizada]: " + cached.answer;
      } else {
        try {
          const sr = await fetch("https://api.tavily.com/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              api_key: TAVILY_KEY,
              query: message,
              search_depth: "basic",
              max_results: 3,
              include_answer: true,
            }),
          });
          if (sr.ok) {
            const sd = await sr.json();
            if (sd.answer) {
              searchCtx = "\n[Info actualizada]: " + sd.answer;
              cache.set(cacheKey, { answer: sd.answer, time: Date.now() });
            }
          }
        } catch (_) {}
      }
    }

    let messages: any[];

    if (imageData) {
      messages = [
        { role: "system", content: sys + searchCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        {
          role: "user",
          content: [
            { type: "text", text: message || "Resuelve este ejercicio paso a paso. Muestra cada paso con explicacion clara, usa negritas para los resultados intermedios y la respuesta final." },
            { type: "image_url", image_url: { url: imageData } },
          ],
        },
      ];
    } else if (fileText) {
      const docCtx = "\n[Contenido del documento]:\n" + fileText;
      messages = [
        { role: "system", content: sys + searchCtx + docCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: message || "Analiza este documento y crea una guia de estudio organizada." },
      ];
    } else {
      messages = [
        { role: "system", content: sys + searchCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: message },
      ];
    }

    const isVision = !!imageData;
    const model = isVision ? "meta-llama/llama-4-scout-17b-16e-instruct" : "openai/gpt-oss-20b";

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      const e = await response.json().catch(() => ({}));
      throw new Error(e?.error?.message || "Error");
    }

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;
    if (!text) throw new Error("Sin respuesta");

    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
