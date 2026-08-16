import { json, type APIEvent } from "@tanstack/start/api";
import { getEvent } from "vinxi/http";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
const ELEVEN_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY || process.env.ELEVENLABS_API_KEY;

const systemInstruction = `Eres MaChat, un tutor de inteligencia artificial especializado en ayudar a estudiantes peruanos a prepararse para exámenes de admisión universitaria (UNI, UNMSM, PUCP, UNSA, etc.).

Reglas:
- Respondes SIEMPRE en español
- Eres amigable, motivador y paciente
- Usas emojis para hacer la conversación amena
- Explicas de forma sencilla y con ejemplos prácticos
- Cuando resuelves problemas, muestras los pasos detallados
- Fomentas la confianza del estudiante

Materias que dominas:
1. Matemáticas (Álgebra, geometría, aritmética)
2. Razonamiento Matemático (Sucesiones, ecuaciones, conteo, lógica)
3. Razonamiento Verbal (Comprensión lectora, sinónimos, analogías)
4. Física (Dinámica, movimiento, termodinámica, electricidad)
5. Química (Enlaces, orgánica, inorgánica, estequiometría)
6. Biología (Celular, genética, ecología, evolución)
7. Literatura (Corrientes, obras, autores peruanos y mundiales)
8. Historia (Perú antiguo, colonial, republicano, mundial)
9. Geografía (Perú y general)

Si te preguntan algo que no es de estudio, redirige amablemente al tema académico.`;

function cleanTextForSpeech(text: string): string {
  return text
    .replace(/#{1,6}\s/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`{1,3}[^`]*`{1,3}/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[📌📐🎯💡📚✏️🧠🔄💪🎉🎓]/g, "")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, " ")
    .trim();
}

export const POST = async ({ request }: APIEvent) => {
  const event = getEvent();
  const url = new URL(event.request.url);

  if (url.pathname === "/api/chat") {
    if (!GEMINI_KEY) {
      return json({ error: "API key no configurada en el servidor" }, { status: 500 });
    }

    try {
      const body = await request.json();
      const { message, history } = body;

      const contents = [];
      for (const msg of history || []) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      }
      contents.push({ role: "user", parts: [{ text: message }] });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: {
              temperature: 0.7,
              topP: 0.95,
              topK: 40,
              maxOutputTokens: 2048,
            },
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error?.error?.message || "Error al conectar con Gemini");
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) throw new Error("No se obtuvo respuesta de Gemini");

      return json({ text });
    } catch (err) {
      return json({ error: err instanceof Error ? err.message : "Error desconocido" }, { status: 500 });
    }
  }

  if (url.pathname === "/api/speak") {
    if (!ELEVEN_KEY) {
      return json({ error: "ElevenLabs no configurado en el servidor" }, { status: 500 });
    }

    try {
      const body = await request.json();
      const { text } = body;
      const cleanText = cleanTextForSpeech(text).substring(0, 5000);

      const response = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": ELEVEN_KEY,
          },
          body: JSON.stringify({
            text: cleanText,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
              style: 0.5,
              use_speaker_boost: true,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Error al generar audio");

      const audioBuffer = await response.arrayBuffer();
      return new Response(audioBuffer, {
        headers: {
          "Content-Type": "audio/mpeg",
          "Content-Length": String(audioBuffer.byteLength),
        },
      });
    } catch (err) {
      return json({ error: err instanceof Error ? err.message : "Error desconocido" }, { status: 500 });
    }
  }

  return json({ error: "Ruta no encontrada" }, { status: 404 });
};
