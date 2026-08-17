import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const SEARCH_KEYWORDS = ["quién es", "presidente", "actual", "noticias", "último", "reciente", "2025", "2026", "2027", "hoy", "ayer", "semana", "mes", "elecciones", "gobierno", "ministro", "precio", "dólar", "clima", "terremoto", "copa", "fútbol", "liga", "perú", "capital", "moneda", "gobernador", "alcalde", "congreso", "ley", "constitución", "economía", "inflación", "pbi", "crecimiento", "población", "pobreza", "educación", "salud"];

function needsSearch(query: string): boolean {
  const q = query.toLowerCase();
  return SEARCH_KEYWORDS.some((k) => q.includes(k));
}

const cache = new Map<string, { answer: string; time: number }>();
const CACHE_TTL = 10 * 60 * 1000;

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const GROQ_KEY = Deno.env.get("GROQ_API_KEY");
    const TAVILY_KEY = Deno.env.get("TAVILY_API_KEY");
    const { message, history, imageData, fileText } = await req.json();

    const sys = [
      "Eres PrepaBot, un tutor amigable para estudiantes peruanos.",
      "",
      "ESTILO: Explica como si fueras un profesor que le habla a un niño de 10 años.",
      "- Usa palabras simples y cortas",
      "- Usa analogias de la vida diaria (dulces, canicas, pizza, etc.)",
      "- Usa emojis para hacerlo divertido",
      "- NO uses palabras complicadas",
      "- Las oraciones deben ser cortas (maximo 2 lineas)",
      "- Incluye ejemplos con cosas que el niño conoce",
      "",
      "FORMULAS MATEMATICAS:",
      "- NUNCA uses backslashes como \\( \\) \\[ \\] o LaTeX",
      "- Usa notacion simple: x², x³, √, ±, Δ",
      "- Explica cada formula con palabras ANTES de mostrarla",
      "- Ejemplo: x = (-b ± √Δ) / 2a significa 'x es igual a b negativo mas o menos raiz de delta, todo dividido entre 2a'",
      "",
      "REGLAS IMPORTANTES:",
      "- SI el usuario te da un contexto o tema, RESPONDE directamente sobre ese tema",
      "- NUNCA preguntes 'de qué tema hablas' si el usuario ya te dio contexto",
      "- SIEMPRE responde con la mejor informacion que tengas",
      "- Si la informacion viene de la busqueda web (dice [Info actualizada]), USA ESA INFORMACION - es la mas reciente",
      "- NUNCA digas Dina Boluarte si la busqueda dice Keiko Fujimori - USA LO QUE DIGA LA BUSQUEDA",
      "- NUNCA inventes informacion - si no sabes, di 'no estoy seguro'",
      "- Respuestas CORTAS y DIRECTAS (maximo 500 palabras)",
      "- Responde en español peruano simple",
      "",
      "ESTRUCTURA:",
      "1. Responde DIRECTAMENTE lo que el usuario pregunta",
      "2. Explica de forma simple y clara",
      "3. Da un ejemplo si es posible",
      "4. Termina con un 💡 TIP",
      "",
      "Materias: Matematicas, Razonamiento, Fisica, Quimica, Biologia, Literatura, Historia."
    ].join("\n");

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
              include_answer: true
            })
          });
          if (sr.ok) {
            const sd = await sr.json();
            if (sd.answer) {
              searchCtx = "\n[Info actualizada]: " + sd.answer;
              cache.set(cacheKey, { answer: sd.answer, time: Date.now() });
            }
          }
        } catch (_e) {
          // ignore search errors
        }
      }
    }

    let messages: any[] = [];

    if (imageData) {
      const visionText = message || "Describe detalladamente lo que ves en esta imagen. Si contiene texto, transcribelo. Si es un problema, resuelvelo paso a paso.";
      messages = [
        { role: "system", content: sys + searchCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        {
          role: "user",
          content: [
            { type: "text", text: visionText },
            { type: "image_url", image_url: { url: imageData } }
          ]
        }
      ];
    } else if (fileText) {
      const docCtx = "\n[Contenido del documento]:\n" + fileText;
      messages = [
        { role: "system", content: sys + searchCtx + docCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: message || "Analiza este documento y responde como tutor." }
      ];
    } else {
      messages = [
        { role: "system", content: sys + searchCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: message }
      ];
    }

    const isVision = !!imageData;
    const model = isVision ? "meta-llama/llama-4-scout-17b-16e-instruct" : "openai/gpt-oss-20b";

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + GROQ_KEY
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    if (!groqResponse.ok) {
      const e = await groqResponse.json().catch(() => ({}));
      throw new Error((e && e.error && e.error.message) || "Error");
    }

    const data = await groqResponse.json();
    const text = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    if (!text) throw new Error("Sin respuesta");

    return new Response(JSON.stringify({ text: text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
