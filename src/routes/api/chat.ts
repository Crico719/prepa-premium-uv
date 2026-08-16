import { createAPIFileRoute } from "@tanstack/start/api";

export const Route = createAPIFileRoute("/api/chat")({
  POST: async ({ request }) => {
    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    const ELEVEN_KEY = process.env.ELEVENLABS_API_KEY;

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

    if (!GEMINI_KEY) {
      return Response.json({ error: "API key no configurada en el servidor" }, { status: 500 });
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

      return Response.json({ text });
    } catch (err) {
      return Response.json({ error: err instanceof Error ? err.message : "Error desconocido" }, { status: 500 });
    }
  },
});
