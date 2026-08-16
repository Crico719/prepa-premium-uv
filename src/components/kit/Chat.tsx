import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, BookOpen, Brain, Calculator, Settings, X, Key, Volume2, VolumeX, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

type Suggestion = {
  icon: typeof BookOpen;
  label: string;
  prompt: string;
};

const suggestions: Suggestion[] = [
  { icon: Calculator, label: "Explica ecuaciones cuadráticas", prompt: "Explícame las ecuaciones cuadráticas de forma sencilla" },
  { icon: Brain, label: "Dame un ejercicio de razonamiento", prompt: "Dame un ejercicio de razonamiento matemático para practicar" },
  { icon: BookOpen, label: "Resumen de Historia del Perú", prompt: "Hazme un resumen de la historia del Perú republicano" },
  { icon: Sparkles, label: "Técnicas de estudio", prompt: "¿Cuáles son las mejores técnicas de estudio para un examen de admisión?" },
];

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

function getGeminiKey(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("machat_gemini_key");
  }
  return null;
}

function setGeminiKey(key: string) {
  localStorage.setItem("machat_gemini_key", key);
}

function getElevenLabsKey(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("machat_elevenlabs_key");
  }
  return null;
}

function setElevenLabsKey(key: string) {
  localStorage.setItem("machat_elevenlabs_key", key);
}

function getVoiceEnabled(): boolean {
  if (typeof window !== "undefined") {
    return localStorage.getItem("machat_voice_enabled") !== "false";
  }
  return true;
}

function setVoiceEnabled(enabled: boolean) {
  localStorage.setItem("machat_voice_enabled", String(enabled));
}

async function callGemini(userMessage: string, history: Message[], apiKey: string): Promise<string> {
  const contents = [];

  for (const msg of history) {
    contents.push({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    });
  }

  contents.push({
    role: "user",
    parts: [{ text: userMessage }],
  });

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
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

  if (!text) {
    throw new Error("No se obtuvo respuesta de Gemini");
  }

  return text;
}

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

async function textToSpeech(text: string, apiKey: string): Promise<ArrayBuffer> {
  const cleanText = cleanTextForSpeech(text);
  const truncatedText = cleanText.substring(0, 5000);

  const response = await fetch(
    "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text: truncatedText,
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

  if (!response.ok) {
    throw new Error("Error al generar audio con ElevenLabs");
  }

  return response.arrayBuffer();
}

async function playAudio(audioBuffer: ArrayBuffer) {
  const audioContext = new AudioContext();
  const audioBufferDecoded = await audioContext.decodeAudioData(audioBuffer);
  const source = audioContext.createBufferSource();
  source.buffer = audioBufferDecoded;
  source.connect(audioContext.destination);
  source.start();
  return new Promise<void>((resolve) => {
    source.onended = () => resolve();
  });
}

function SettingsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [geminiKey, setGeminiKeyState] = useState(getGeminiKey() || "");
  const [elevenKey, setElevenKeyState] = useState(getElevenLabsKey() || "");
  const [saved, setSaved] = useState(false);

  if (!open) return null;

  const handleSave = () => {
    if (geminiKey.trim()) setGeminiKey(geminiKey.trim());
    if (elevenKey.trim()) setElevenLabsKey(elevenKey.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-[24px] bg-card p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Configurar MaChat</h2>
          <button onClick={onClose} className="press grid size-8 place-items-center rounded-full hover:bg-muted">
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Gemini Key */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="grid size-6 place-items-center rounded bg-primary/10">
                <Bot className="size-3 text-primary" />
              </div>
              <span className="text-sm font-semibold">Gemini (IA)</span>
            </div>
            <div className="rounded-[16px] bg-muted/50 p-3 text-xs">
              <p className="font-medium">Obtén tu API Key gratis:</p>
              <ol className="mt-1 list-inside list-decimal space-y-0.5 text-muted-foreground">
                <li>Ve a <a href="https://aistudio.google.com/apikey" target="_blank" className="text-primary underline">aistudio.google.com/apikey</a></li>
                <li>Inicia sesión con Google</li>
                <li>Haz clic en "Create API Key"</li>
              </ol>
            </div>
            <div className="mt-2 flex gap-2">
              <div className="relative flex-1">
                <Key className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={geminiKey}
                  onChange={(e) => setGeminiKeyState(e.target.value)}
                  placeholder="AIza..."
                  className="w-full rounded-[16px] border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>

          {/* ElevenLabs Key */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="grid size-6 place-items-center rounded bg-success/10">
                <Volume2 className="size-3 text-success" />
              </div>
              <span className="text-sm font-semibold">ElevenLabs (Voz)</span>
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">Opcional</span>
            </div>
            <div className="rounded-[16px] bg-muted/50 p-3 text-xs">
              <p className="font-medium">Para que MaChat hable en voz alta:</p>
              <ol className="mt-1 list-inside list-decimal space-y-0.5 text-muted-foreground">
                <li>Ve a <a href="https://elevenlabs.io" target="_blank" className="text-primary underline">elevenlabs.io</a></li>
                <li>Crea cuenta (tier gratis incluido)</li>
                <li>Ve a Profile → API Keys</li>
                <li>Copia tu API Key</li>
              </ol>
            </div>
            <div className="mt-2 flex gap-2">
              <div className="relative flex-1">
                <Key className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={elevenKey}
                  onChange={(e) => setElevenKeyState(e.target.value)}
                  placeholder="sk_..."
                  className="w-full rounded-[16px] border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="press w-full rounded-[16px] bg-primary py-3 text-sm font-semibold text-primary-foreground"
          >
            {saved ? "Guardado ✓" : "Guardar configuración"}
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Las keys se guardan solo en tu navegador. Nunca se envían a servidores externos.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [geminiKey, setGeminiKeyState] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [voiceEnabled, setVoiceEnabledState] = useState(true);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setGeminiKeyState(getGeminiKey());
    setVoiceEnabledState(getVoiceEnabled());
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSpeak = async (text: string, messageId: string) => {
    const elevenKey = getElevenLabsKey();
    if (!elevenKey) {
      setShowSettings(true);
      return;
    }

    setSpeakingId(messageId);
    try {
      const audioBuffer = await textToSpeech(text, elevenKey);
      await playAudio(audioBuffer);
    } catch (err) {
      console.error("Error al reproducir audio:", err);
    } finally {
      setSpeakingId(null);
    }
  };

  const handleToggleVoice = () => {
    const newValue = !voiceEnabled;
    setVoiceEnabledState(newValue);
    setVoiceEnabled(newValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const currentKey = getGeminiKey();
    if (!currentKey) {
      setShowSettings(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await callGemini(userMessage.content, messages, currentKey);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);

      if (voiceEnabled && getElevenLabsKey()) {
        setTimeout(() => handleSpeak(response, assistantMessage.id), 500);
      }
    } catch (err) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Lo siento, hubo un error: ${err instanceof Error ? err.message : "Error desconocido"}. Verifica tu API key en configuración. 🔄`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  return (
    <div className="flex h-[calc(100dvh-14rem)] flex-col">
      <SettingsModal open={showSettings} onClose={() => { setShowSettings(false); setGeminiKeyState(getGeminiKey()); }} />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="grid size-10 place-items-center rounded-full bg-primary/10">
          <Bot className="size-5 text-primary" />
        </div>
        <div>
          <h1 className="font-semibold">MaChat</h1>
          <p className="text-xs text-muted-foreground">
            {geminiKey ? "Gemini + ElevenLabs · En línea" : "Configura tu API key para comenzar"}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {geminiKey && (
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs text-muted-foreground">En línea</span>
            </span>
          )}
          <button
            onClick={handleToggleVoice}
            className={cn(
              "press grid size-9 place-items-center rounded-[12px] border transition-colors",
              voiceEnabled ? "border-success bg-success/10 text-success" : "border-border hover:bg-muted"
            )}
            title={voiceEnabled ? "Voz activada" : "Voz desactivada"}
          >
            {voiceEnabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="press grid size-9 place-items-center rounded-[12px] border border-border hover:bg-muted"
          >
            <Settings className="size-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-4 grid size-16 place-items-center rounded-full bg-primary/10">
              <Sparkles className="size-8 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">¡Hola! Soy MaChat 🎓</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Tu tutor IA para el examen de admisión.
              Pregúntame sobre cualquier materia, pide ejercicios o solicita explicaciones.
            </p>

            {!geminiKey && (
              <button
                onClick={() => setShowSettings(true)}
                className="press mt-6 inline-flex items-center gap-2 rounded-[16px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
              >
                <Key className="size-4" />
                Configurar API Key para comenzar
              </button>
            )}

            {/* Suggestions */}
            <div className="mt-8 grid w-full max-w-lg gap-3 sm:grid-cols-2">
              {suggestions.map((s) => (
                <button
                  key={s.label}
                  onClick={() => handleSuggestionClick(s.prompt)}
                  className="press flex items-center gap-3 rounded-[16px] border border-border bg-card p-4 text-left transition-colors hover:bg-muted"
                >
                  <s.icon className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Bot className="size-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-[16px] px-4 py-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  )}
                >
                  <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                    {message.content}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p
                      className={cn(
                        "text-xs opacity-70",
                        message.role === "user" ? "text-primary-foreground" : "text-muted-foreground"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString("es-PE", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    {message.role === "assistant" && voiceEnabled && getElevenLabsKey() && (
                      <button
                        onClick={() => handleSpeak(message.content, message.id)}
                        disabled={speakingId === message.id}
                        className="press ml-2 grid size-6 place-items-center rounded-full hover:bg-muted"
                      >
                        {speakingId === message.id ? (
                          <Loader2 className="size-3 animate-spin text-primary" />
                        ) : (
                          <Volume2 className="size-3 text-muted-foreground hover:text-primary" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
                {message.role === "user" && (
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-muted">
                    <User className="size-4" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10">
                  <Bot className="size-4 text-primary" />
                </div>
                <div className="rounded-[16px] border border-border bg-card px-4 py-3">
                  <div className="flex gap-1">
                    <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
                    <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
                    <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-border bg-card px-4 py-3"
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder={geminiKey ? "Escribe tu pregunta..." : "Primero configura tu API key..."}
            rows={1}
            className="min-h-11 flex-1 resize-none rounded-[16px] border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="press grid size-11 place-items-center rounded-[16px] bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <Send className="size-5" />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {geminiKey ? "Presiona Enter para enviar · Shift+Enter para nueva línea" : "Haz clic en ⚙️ para configurar tu API key"}
        </p>
      </form>
    </div>
  );
}
