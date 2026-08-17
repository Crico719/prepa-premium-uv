import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, BookOpen, Brain, Calculator, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const SUPABASE_URL = "https://jvyrgsxbzlzokotyzepw.supabase.co";
const SUPABASE_KEY = "sb_publishable_i80Lpj4bEIGTUX1_j5vlGQ_4cTESJ2D";

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

function getVoiceEnabled(): boolean {
  if (typeof window !== "undefined") {
    return localStorage.getItem("machat_voice_enabled") !== "false";
  }
  return true;
}

function setVoiceEnabled(enabled: boolean) {
  localStorage.setItem("machat_voice_enabled", String(enabled));
}

function cleanForSpeech(text: string): string {
  return text
    .replace(/#{1,6}\s/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`{1,3}[^`]*`{1,3}/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, " ")
    .trim();
}

function speak(text: string): Promise<void> {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanForSpeech(text));
    utterance.lang = "es-PE";
    utterance.rate = 1;
    utterance.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find((v) => v.lang.startsWith("es")) || voices[0];
    if (esVoice) utterance.voice = esVoice;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

async function callChatAPI(userMessage: string, history: Message[]): Promise<string> {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/hyper-api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_KEY}`,
      apikey: SUPABASE_KEY,
    },
    body: JSON.stringify({
      message: userMessage,
      history: history.map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Error al conectar con el servidor");
  return data.text;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabledState] = useState(true);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setVoiceEnabledState(getVoiceEnabled());
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSpeak = async (text: string, messageId: string) => {
    setSpeakingId(messageId);
    await speak(text);
    setSpeakingId(null);
  };

  const handleToggleVoice = () => {
    const newValue = !voiceEnabled;
    setVoiceEnabledState(newValue);
    setVoiceEnabled(newValue);
    if (!newValue && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

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
      const response = await callChatAPI(userMessage.content, messages);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);

      if (voiceEnabled) {
        setTimeout(() => handleSpeak(response, assistantMessage.id), 300);
      }
    } catch (err) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Lo siento, hubo un error: ${err instanceof Error ? err.message : "Error desconocido"}. Intenta de nuevo. 🔄`,
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
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="grid size-10 place-items-center rounded-full bg-primary/10">
          <Bot className="size-5 text-primary" />
        </div>
        <div>
          <h1 className="font-semibold">MaChat</h1>
          <p className="text-xs text-muted-foreground">Gemini + ElevenLabs · En línea</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-muted-foreground">En línea</span>
          </span>
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
        </div>
      </div>

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
                    {message.role === "assistant" && voiceEnabled && (
                      <button
                        onClick={() => handleSpeak(message.content, message.id)}
                        disabled={speakingId === message.id}
                        className="press ml-2 grid size-6 place-items-center rounded-full hover:bg-muted"
                      >
                        {speakingId === message.id ? (
                          <span className="size-3 animate-pulse rounded-full bg-primary" />
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

      <form onSubmit={handleSubmit} className="border-t border-border bg-card px-4 py-3">
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
            placeholder="Escribe tu pregunta..."
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
          Presiona Enter para enviar · Shift+Enter para nueva línea
        </p>
        <p className="text-center text-[10px] text-muted-foreground/50">
          Límite: ~700 mensajes/día · Búsqueda web incluida
        </p>
      </form>
    </div>
  );
}
