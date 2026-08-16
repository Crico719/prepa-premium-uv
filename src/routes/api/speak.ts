import { createAPIFileRoute } from "@tanstack/start/api";

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

export const Route = createAPIFileRoute("/api/speak")({
  POST: async ({ request }) => {
    const ELEVEN_KEY = process.env.ELEVENLABS_API_KEY;

    if (!ELEVEN_KEY) {
      return Response.json({ error: "ElevenLabs no configurado en el servidor" }, { status: 500 });
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
      return Response.json({ error: err instanceof Error ? err.message : "Error desconocido" }, { status: 500 });
    }
  },
});
