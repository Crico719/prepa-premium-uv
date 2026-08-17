import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const SEARCH_KEYWORDS = ["quién es", "quien es", "presidente", "actual", "noticias", "último", "reciente", "2025", "2026", "2027", "hoy", "ayer", "semana", "mes", "elecciones", "gobierno", "ministro", "precio", "dólar", "clima", "terremoto", "copa", "fútbol", "liga", "perú", "capital", "moneda", "gobernador", "alcalde", "congreso", "ley", "constitución", "economía", "inflación", "pbi", "crecimiento", "población", "pobreza", "educación", "salud", "caso", "escándalo", "corrupción", "keiko", "dina", "boluarte", "fujimori", "castillo", "gobierno", "país", "mundial", "deporte", "fútbol", "liga", "champions", "copa", "clima", "temperatura", "lluvia", "terremoto", "sismo", "tsunami"];

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
      "Eres PrepaBot, un tutor IA experto para estudiantes de secundaria peruanos.",
      "",
      "IMPORTANTE: Tu conocimiento puede estar desactualizado. SIEMPRE confia en la informacion de busqueda web cuando esta disponible.",
      "",
      "RESPONDE COMO CHATGPT PERO PARA ESTUDIANTES DE SECUNDARIA:",
      "- Estilo profesional, claro y preciso",
      "- Usa markdown limpio: **negrita** para conceptos, ## para secciones",
      "- Explica paso a paso cuando sea necesario",
      "- NO uses tablas - usa listas o viñetas en su lugar",
      "- Incluye ejemplos praticos",
      "- Termina con un tip o pregunta util",
      "- Español peruano, directo y claro",
      "- Usa palabras que los estudiantes de 12-16 años entiendan",
      "- Puedes usar analogias pero mas sofisticadas que para niños pequeños",
      "- Explica todo de forma facil de entender",
      "",
      "FORMULAS MATEMATICAS:",
      "- NUNCA uses backslashes como \\( \\) \\[ \\] o LaTeX",
      "- Usa notacion simple: x², x³, √, ±, Δ",
      "- Explica cada formula con palabras ANTES de mostrarla",
      "",
      "REGLAS CRITICAS - SIEMPRE SIGUE ESTAS REGLAS:",
      "- SIEMPRE usa la informacion de busqueda web cuando este disponible - es MAS RECIENTE que tu entrenamiento",
      "- SI ves [Info actualizada] en el mensaje, ESA ES LA VERDAD - ignorar cualquier otro conocimiento",
      "- La informacion de busqueda web es MAS RECIENTE que tu entrenamiento",
      "- SI la busqueda dice Keiko Fujimori, la presidenta ES Keiko Fujimori",
      "- SI la busqueda dice Dina Boluarte, la presidenta ES Dina Boluarte",
      "- NUNCA contradigas la informacion de busqueda web",
      "- NUNCA inventes informacion - si no sabes algo, di 'no tengo esa informacion'",
      "- Responde DIRECTAMENTE lo que el usuario pregunta",
      "- NO preguntes 'de qué tema hablas' si ya te dio contexto",
      "- Respuestas claras, completas y bien estructuradas",
      "- Maximo 800 palabras",
      "",
      "ESTRUCTURA:",
      "1. Responde DIRECTAMENTE lo que el usuario pregunta",
      "2. Explica con detalle y precision",
      "3. Usa secciones con ## para organizar",
      "4. Usa listas o viñetas en lugar de tablas",
      "5. Termina con 💡 Tip o pregunta util",
      "",
      "Materias: Matematicas, Razonamiento, Fisica, Quimica, Biologia, Literatura, Historia, Geografia, Actualidad."
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
      const visionText = (message || "Describe detalladamente lo que ves en esta imagen. Si contiene texto, transcribelo. Si es un problema, resuelvelo paso a paso.") + (searchCtx ? "\n\n---\n[INFORMACION DE BUSQUEDA WEB - USA ESTA INFORMACION COMO RESPUESTA]: " + searchCtx : "");
      messages = [
        { role: "system", content: sys },
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
      const fileMsg = (message || "Analiza este documento y responde como tutor.") + (searchCtx ? "\n\n---\n[INFORMACION DE BUSQUEDA WEB - USA ESTA INFORMACION COMO RESPUESTA]: " + searchCtx : "");
      messages = [
        { role: "system", content: sys + docCtx },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: fileMsg }
      ];
    } else {
      const userMsg = searchCtx
        ? message + "\n\n---\n[INFORMACION DE BUSQUEDA WEB - USA ESTA INFORMACION COMO RESPUESTA]: " + searchCtx
        : message;
      messages = [
        { role: "system", content: sys },
        ...history.slice(-10).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: userMsg }
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
