import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, BookOpen, Brain, Calculator, Volume2, VolumeX, Paperclip, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrepaBotMascot } from "./PrepaBotMascot";

const SUPABASE_URL = "https://jvyrgsxbzlzokotyzepw.supabase.co";
const SUPABASE_KEY = "sb_publishable_i80Lpj4bEIGTUX1_j5vlGQ_4cTESJ2D";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  imagePreview?: string;
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
  let t = text
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}\u{2702}-\u{27B0}\u{2934}-\u{2935}\u{25AA}-\u{25FE}\u{2B05}-\u{2B55}\u{231A}-\u{23FA}\u{2328}\u{23CF}\u{23E9}-\u{23F3}\u{23F8}-\u{23FA}\u{25FB}-\u{25FE}]/gu, "")
    .replace(/#{1,6}\s/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`{1,3}[^`]*`{1,3}/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, " ");

  t = t.replace(/(\d)([a-zA-Z])/g, "$1 por $2");
  t = t.replace(/([a-zA-Z])(\d)/g, "$1 por $2");
  t = t.replace(/(?<![a-zA-Z])([abcxyzABCXYZ])([abcxyzABCXYZ])(?![a-zA-Z])/g, "$1 por $2");
  t = t.replace(/([abcxyzABCXYZ])\^(\d+)/g, "$1 elevado a $2");
  t = t.replace(/\+/g, " más ");
  t = t.replace(/-(?!\d)/g, " menos ");
  t = t.replace(/=/g, " igual ");
  t = t.replace(/\*/g, " por ");
  t = t.replace(/\//g, " entre ");
  t = t.replace(/>=/g, " mayor o igual que ");
  t = t.replace(/<=/g, " menor o igual que ");
  t = t.replace(/(?<!\d)>(?!\d)/g, " mayor que ");
  t = t.replace(/(?<!\d)<(?!\d)/g, " menor que ");
  t = t.replace(/\^/g, " elevado a ");

  return t.trim();
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

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = 400;
        let { width, height } = img;
        if (width > maxSize || height > maxSize) {
          if (width > height) {
            height = Math.round((height * maxSize) / width);
            width = maxSize;
          } else {
            width = Math.round((width * maxSize) / height);
            height = maxSize;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.5));
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function extractPdfText(file: File): Promise<string> {
  const pdfjsLib = await import("pdfjs-dist");
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages: string[] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map((item: any) => item.str).join(" ");
    pages.push(`--- Pagina ${i} ---\n${text}`);
  }
  return pages.join("\n\n");
}

async function callChatAPI(userMessage: string, history: Message[], imageData?: string, fileText?: string): Promise<string> {
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
      imageData,
      fileText,
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
  const [pendingFile, setPendingFile] = useState<{ file: File; preview: string; type: "image" | "pdf" } | null>(null);
  const [mascotState, setMascotState] = useState<"idle" | "thinking" | "happy" | "confused" | "waving" | "explaining">("waving");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setVoiceEnabledState(getVoiceEnabled());
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
    const timer = setTimeout(() => setMascotState("idle"), 3000);
    return () => clearTimeout(timer);
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

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const isPdf = file.type === "application/pdf";

    if (!isImage && !isPdf) {
      alert("Solo se admiten imagenes (JPG, PNG, GIF, WEBP) y documentos PDF.");
      return;
    }

    if (isImage) {
      const base64 = await fileToBase64(file);
      setPendingFile({ file, preview: base64, type: "image" });
    } else if (isPdf) {
      setPendingFile({ file, preview: "", type: "pdf" });
    }

    e.target.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !pendingFile) || isTyping) return;

    let imageData: string | undefined;
    let fileText: string | undefined;
    let displayContent = input.trim();
    let imagePreview: string | undefined;

    if (pendingFile) {
      if (pendingFile.type === "image") {
        imageData = pendingFile.preview;
        imagePreview = pendingFile.preview;
        if (!displayContent) displayContent = "Resuelve este ejercicio paso a paso. Explica cada paso con detalle.";
      } else if (pendingFile.type === "pdf") {
        try {
          fileText = await extractPdfText(pendingFile.file);
        } catch {
          fileText = "[No se pudo extraer el texto del PDF]";
        }
        if (!displayContent) displayContent = "Analiza este documento PDF";
      }
      setPendingFile(null);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: displayContent || "Adjunto",
      timestamp: new Date(),
      imagePreview,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setMascotState("thinking");

    try {
      const response = await callChatAPI(displayContent, messages, imageData, fileText);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setMascotState("happy");
      setTimeout(() => setMascotState("idle"), 3000);

      if (voiceEnabled) {
        setTimeout(() => handleSpeak(response, assistantMessage.id), 300);
      }
    } catch (err) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Lo siento, hubo un error: ${err instanceof Error ? err.message : "Error desconocido"}. Intenta de nuevo.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setMascotState("confused");
      setTimeout(() => setMascotState("idle"), 3000);
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
        <PrepaBotMascot state={mascotState} size={36} />
        <div>
          <h1 className="font-semibold">PrepaBot</h1>
          <p className="text-xs text-muted-foreground">Vision + Busqueda web</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-muted-foreground">En linea</span>
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
            <PrepaBotMascot state={mascotState} size={100} className="mb-4" />
            <h2 className="text-lg font-semibold">Hola! Soy PrepaBot</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Tu tutor IA para el examen de admision.
              Preguntame sobre cualquier materia, pide ejercicios o adjunta una imagen/PDF.
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
                  <PrepaBotMascot state="idle" size={28} className="shrink-0" />
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-[16px] px-4 py-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  )}
                >
                  {message.imagePreview && (
                    <img
                      src={message.imagePreview}
                      alt="Imagen adjunta"
                      className="mb-2 max-h-48 rounded-lg object-cover"
                    />
                  )}
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
                <PrepaBotMascot state="thinking" size={32} className="shrink-0" />
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

      {pendingFile && (
        <div className="border-t border-border bg-card px-4 py-2">
          <div className="flex items-center gap-2">
            {pendingFile.type === "image" ? (
              <img src={pendingFile.preview} alt="Preview" className="size-10 rounded-lg object-cover" />
            ) : (
              <div className="grid size-10 place-items-center rounded-lg bg-destructive/10">
                <FileText className="size-5 text-destructive" />
              </div>
            )}
            <div className="flex-1 truncate text-sm">
              {pendingFile.file.name}
              <span className="ml-1 text-muted-foreground">
                ({pendingFile.type === "pdf" ? "PDF" : "Imagen"})
              </span>
            </div>
            <button
              onClick={() => setPendingFile(null)}
              className="press grid size-7 place-items-center rounded-full hover:bg-muted"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t border-border bg-card px-4 py-3">
        <div className="flex items-end gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isTyping}
            className="press grid size-11 shrink-0 place-items-center rounded-[16px] border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-primary disabled:opacity-50"
            title="Adjuntar imagen o PDF"
          >
            <Paperclip className="size-5" />
          </button>
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
            placeholder={pendingFile ? "Escribe un mensaje sobre el archivo..." : "Escribe tu pregunta..."}
            rows={1}
            className="min-h-11 flex-1 resize-none rounded-[16px] border border-border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            disabled={(!input.trim() && !pendingFile) || isTyping}
            className="press grid size-11 place-items-center rounded-[16px] bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <Send className="size-5" />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Adjunta imagenes (JPG, PNG) o PDFs + escribe tu pregunta
        </p>
        <p className="text-center text-[10px] text-muted-foreground/50">
          Vision: Llama 4 Scout · Texto: GPT-OSS 20B · Busqueda web incluida
        </p>
      </form>
    </div>
  );
}
