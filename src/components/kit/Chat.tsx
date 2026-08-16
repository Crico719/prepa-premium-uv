import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, BookOpen, Brain, Calculator, Settings, X, Key } from "lucide-react";
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

function getApiKey(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("machat_api_key");
  }
  return null;
}

function setApiKey(key: string) {
  localStorage.setItem("machat_api_key", key);
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
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
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

function SettingsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [key, setKey] = useState(getApiKey() || "");
  const [saved, setSaved] = useState(false);

  if (!open) return null;

  const handleSave = () => {
    setApiKey(key.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-[24px] bg-card p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Configurar API Key</h2>
          <button onClick={onClose} className="press grid size-8 place-items-center rounded-full hover:bg-muted">
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-[16px] bg-muted/50 p-4 text-sm">
            <p className="font-semibold">Obtén tu API Key gratis de Google:</p>
            <ol className="mt-2 list-inside list-decimal space-y-1 text-muted-foreground">
              <li>Ve a <a href="https://aistudio.google.com/apikey" target="_blank" className="text-primary underline">aistudio.google.com/apikey</a></li>
              <li>Inicia sesión con tu cuenta de Google</li>
              <li>Haz clic en "Create API Key"</li>
              <li>Copia la key y pégala aquí</li>
            </ol>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">API Key de Gemini</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Key className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="AIza..."
                  className="w-full rounded-[16px] border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button
                onClick={handleSave}
                disabled={!key.trim()}
                className="press rounded-[16px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-50"
              >
                {saved ? "Guardado ✓" : "Guardar"}
              </button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Tu API key se guarda localmente en tu navegador. Nunca se envía a nuestros servidores.
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
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setApiKeyState(getApiKey());
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const currentKey = getApiKey();
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
      <SettingsModal open={showSettings} onClose={() => { setShowSettings(false); setApiKeyState(getApiKey()); }} />

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="grid size-10 place-items-center rounded-full bg-primary/10">
          <Bot className="size-5 text-primary" />
        </div>
        <div>
          <h1 className="font-semibold">MaChat</h1>
          <p className="text-xs text-muted-foreground">
            {apiKey ? "Powered by Gemini · En línea" : "Configura tu API key para comenzar"}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {apiKey && (
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs text-muted-foreground">En línea</span>
            </span>
          )}
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

            {!apiKey && (
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
                  <p
                    className={cn(
                      "mt-2 text-xs opacity-70",
                      message.role === "user" ? "text-primary-foreground" : "text-muted-foreground"
                    )}
                  >
                    {message.timestamp.toLocaleTimeString("es-PE", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
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
            placeholder={apiKey ? "Escribe tu pregunta..." : "Primero configura tu API key..."}
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
          {apiKey ? "Presiona Enter para enviar · Shift+Enter para nueva línea" : "Haz clic en ⚙️ para configurar tu API key"}
        </p>
      </form>
    </div>
  );
}
