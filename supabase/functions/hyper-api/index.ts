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

REGLAS DE RESPUESTA - OBLIGATORIO:
1. Usa estilo ChatGPT/Gemini: respuestas limpias y directas
2. Para organizar info usa NEGRITAS con **concepto:** seguido de explicacion
3. Usa ## solo para grandes secciones
4. Tablas markdown cuando compares opciones
5. NO uses listas con viñetas, usa NEGRITAS en su lugar
6. Termina con un tip o pregunta util
7. Espanol peruano, directo y preciso
8. Si el usuario envia una imagen, describe lo que ves y responde su pregunta
9. Si el usuario envia texto de un documento, analizalo como tutor

NOTACION MATEMATICA - OBLIGATORIO:
- Usa superindices Unicode: ⁰¹²³⁴⁵⁶⁷⁸⁹ (ej: x², x³, xⁿ)
- Usa subindices Unicode: ₀₁₂₃₄₅₆₇₈₉ (ej: a₁, x₂)
- Usa raiz: √ (ej: √2, √(x+1))
- Usa +/-: ± (ej: ±3)
- Usa ≠, ≤, ≥, ∞
- Usa fracciones con / o division lateral
- Ejemplos correctos: x² + 2x + 1, √(x² + y²), 3x³ - 2x + 5
- NUNCA uses asteriscos * para multiplicar, usa el signo de multiplicacion ×
- NUNCA uses ^ para elevar, usa superindices Unicode

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
            { type: "text", text: message || "Resuelve este ejercicio paso a paso. Identifica el problema, muestra cada paso de la solucion y la respuesta final. Si contiene texto, transcribelo primero." },
            { type: "image_url", image_url: { url: imageData } },
          ],
        },
      ];
    } else if (fileText) {
      const docCtx = "\n[Contenido del documento]:\n" + fileText;
      messages = [
        { role: "system", content: sys + searchCtx + docCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: message || "Analiza este documento y responde como tutor." },
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
        max_tokens: 1024,
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
