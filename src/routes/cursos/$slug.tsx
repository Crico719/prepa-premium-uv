import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CirclePlay,
  Lightbulb,
  Lock,
  MessageCircle,
  NotebookPen,
  Sparkles,
  BookOpen,
  Zap,
  Trophy,
  ImageIcon,
  Calculator,
  Target,
  Info,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";
import { IconTile, ProgressBar, Surface } from "@/components/kit";
import { courses, lessons, courseLessons } from "@/lib/data";
import { courseContent, type DifficultyLevel, type TheorySection, type CourseExercise } from "@/lib/course-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const difficultyConfig: Record<DifficultyLevel, { label: string; color: string; bg: string; border: string; icon: typeof BookOpen }> = {
  basico: { label: "Básico", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/50", border: "border-emerald-200 dark:border-emerald-800", icon: BookOpen },
  basic: { label: "Básico", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/50", border: "border-emerald-200 dark:border-emerald-800", icon: BookOpen },
  intermedio: { label: "Intermedio", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/50", border: "border-amber-200 dark:border-amber-800", icon: Zap },
  intermediate: { label: "Intermedio", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/50", border: "border-amber-200 dark:border-amber-800", icon: Zap },
  avanzado: { label: "Avanzado", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-950/50", border: "border-red-200 dark:border-red-800", icon: Trophy },
  advanced: { label: "Avanzado", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-950/50", border: "border-red-200 dark:border-red-800", icon: Trophy },
};

function DifficultyBadge({ level }: { level: DifficultyLevel }) {
  const cfg = difficultyConfig[level];
  const Icon = cfg.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${cfg.color} ${cfg.bg} border ${cfg.border}`}>
      <Icon className="size-3.5" />
      {cfg.label}
    </span>
  );
}

function TheorySectionBlock({ section }: { section: TheorySection }) {
  const cfg = difficultyConfig[section.level];
  const Icon = cfg.icon;
  return (
    <div className={`rounded-[16px] border p-4 space-y-2 ${cfg.border} ${cfg.bg}`}>
      <div className="flex items-center gap-2">
        <Icon className={`size-4 ${cfg.color}`} />
        <h3 className={`text-sm font-bold ${cfg.color}`}>{section.title}</h3>
      </div>
      <div className="space-y-1.5">
        {section.lines.map((line, i) => (
          <p key={i} className="text-sm">
            {line.startsWith("- ") ? (
              <span className="ml-4 block text-muted-foreground">{line.slice(2)}</span>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

type IllustrationPanelProps = {
  svg: string;
  index: number;
  summary?: string;
  isOpen: boolean;
  onToggle: () => void;
};

function IllustrationPanel({ svg, index, summary, isOpen, onToggle }: IllustrationPanelProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const el = containerRef.current;

    function handleMove(e: MouseEvent) {
      if (!innerRef.current || !el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      innerRef.current.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    }

    function handleLeave() {
      if (!innerRef.current) return;
      innerRef.current.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`rounded-[16px] border overflow-hidden transition-all duration-300 ${isOpen ? "border-primary shadow-lg shadow-primary/10" : "border-border hover:border-primary/50"}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center gap-3 p-4 text-left transition-colors ${isOpen ? "bg-primary/5" : "hover:bg-muted"}`}
      >
        <div
          className="size-12 shrink-0 rounded-xl bg-gradient-to-br from-primary-deep/90 to-primary/90 flex items-center justify-center overflow-hidden [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">Ilustración {index + 1}</p>
          <p className="text-xs text-muted-foreground truncate">{summary || "Ver detalles"}</p>
        </div>
        <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="border-t border-border bg-gradient-to-b from-card to-background animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="p-4">
            <div
              className="relative flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-primary-deep/90 to-primary/90 p-4 overflow-hidden"
              style={{ perspective: "1200px" }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />
              <div
                ref={innerRef}
                className="relative z-10 w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.15s ease-out",
                  animation: "float 4s ease-in-out infinite",
                }}
                dangerouslySetInnerHTML={{ __html: svg }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const Route = createFileRoute("/cursos/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { name: course.name, description: course.description };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Curso"} | Prepa Premium UV` },
      {
        name: "description",
        content: `${loaderData?.description ?? "Lecciones del curso"} — teoría, tips y ejercicios interactivos para el examen de admisión.`,
      },
    ],
  }),
  component: Leccion,
});

function Leccion() {
  const { slug } = Route.useParams();
  const course = courses.find((c) => c.slug === slug)!;
  const courseSpecificLessons = courseLessons[slug] || lessons;
  const content = courseContent[slug] || [];

  const [activeLesson, setActiveLesson] = useState(0);
  const [activeIllustration, setActiveIllustration] = useState(0);
  const [openPanel, setOpenPanel] = useState<number | null>(0);
  const [exerciseState, setExerciseState] = useState<Record<number, number | null>>({});
  const [exerciseQueue, setExerciseQueue] = useState<CourseExercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentContent = content[activeLesson] || null;
  const allExercises = currentContent?.exercises || [];
  const illustrations = currentContent?.illustrations || [];
  const theorySections = currentContent?.theory || [];
  const QUESTIONS_PER_SESSION = 10;

  const pickRandom = (arr: CourseExercise[], count: number) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
    }
    return shuffled.slice(0, Math.min(count, shuffled.length));
  };

  const startExercises = (filter?: DifficultyLevel | "all") => {
    const f = filter || "all";
    const pool = f === "all" ? allExercises : allExercises.filter((e) => {
      const d = e.difficulty;
      if (f === "basico" || f === "basic") return d === "basico" || d === "basic";
      if (f === "intermedio" || f === "intermediate") return d === "intermedio" || d === "intermediate";
      if (f === "avanzado" || f === "advanced") return d === "avanzado" || d === "advanced";
      return d === f;
    });
    const selected = pickRandom(pool, QUESTIONS_PER_SESSION);
    setExerciseQueue([...selected]);
    setCurrentExerciseIndex(0);
    setExerciseState({});
    setShowScore(false);
  };

  if (exerciseQueue.length === 0 && allExercises.length > 0 && !showScore) {
    startExercises();
  }

  const queue = exerciseQueue;
  const currentQ = queue[currentExerciseIndex] || null;
  const totalOriginal = Math.min(QUESTIONS_PER_SESSION, allExercises.length);
  const totalQueue = queue.length;
  const answeredCount = Object.keys(exerciseState).length;
  const correctCount = queue.filter((e) => exerciseState[e.id] === e.correctIndex).length;
  const progressPct = totalOriginal > 0 ? (Math.min(currentExerciseIndex + 1, totalOriginal) / totalOriginal) * 100 : 0;

  const handleAnswer = (optionIndex: number) => {
    if (!currentQ || exerciseState[currentQ.id] !== undefined) return;
    const isCorrect = optionIndex === currentQ.correctIndex;
    const newExerciseState = { ...exerciseState, [currentQ.id]: optionIndex };
    setExerciseState(newExerciseState);

    setTimeout(() => {
      if (!isCorrect) {
        const newQueue = [...queue];
        newQueue.push(currentQ);
        setExerciseQueue(newQueue);
      }
      const retryCount = queue.length - totalOriginal;
      if (currentExerciseIndex >= totalOriginal - 1 && isCorrect) {
        const allRetryAnswered = queue.slice(totalOriginal).every((e) => newExerciseState[e.id] !== undefined);
        if (retryCount === 0 || allRetryAnswered) {
          setShowScore(true);
          return;
        }
      }
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }, 800);
  };

  const resetExercises = (filter?: DifficultyLevel | "all") => {
    startExercises(filter);
  };

  return (
    <div className="space-y-6">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-4px) rotateX(1deg) rotateY(0.5deg); }
          50% { transform: translateY(-2px) rotateX(-0.5deg) rotateY(-0.5deg); }
          75% { transform: translateY(-6px) rotateX(0.5deg) rotateY(0.3deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      <Link
        to="/cursos"
        className="press inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Volver a cursos
      </Link>

      <Surface className="border-none bg-primary text-primary-foreground">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-[16px] bg-white/20">
            <course.icon className="size-6" />
          </span>
          <div className="min-w-0">
            <p className="text-sm opacity-90">{course.name}</p>
            <h1 className="truncate text-xl font-bold sm:text-2xl">{course.description}</h1>
            <p className="mt-1 text-sm opacity-90">
              Lección {activeLesson + 1} de {courseSpecificLessons.length} · {course.teacher}
            </p>
          </div>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/25">
          <span
            className="block h-full rounded-full bg-white"
            style={{ width: `${((activeLesson + 1) / courseSpecificLessons.length) * 100}%` }}
          />
        </div>
      </Surface>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          {currentContent ? (
            <>
              <Surface className="p-0 overflow-hidden">
                {illustrations.length > 0 && (
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 px-2">
                      <ImageIcon className="size-4 text-primary" />
                      <p className="text-sm font-semibold">Ilustraciones del Tema</p>
                      <span className="text-xs text-muted-foreground">({illustrations.length})</span>
                    </div>
                    {illustrations.map((svg, i) => (
                      <IllustrationPanel
                        key={`${currentContent?.slug}-ill-${i}`}
                        svg={svg}
                        index={i}
                        summary={i === 0 ? currentContent?.illustrationSummary : undefined}
                        isOpen={openPanel === i}
                        onToggle={() => setOpenPanel(openPanel === i ? null : i)}
                      />
                    ))}
                  </div>
                )}
                <Tabs defaultValue="teoria" className="p-6">
                  <TabsList className="rounded-[16px]">
                    <TabsTrigger value="teoria">Teoría</TabsTrigger>
                    <TabsTrigger value="ejercicios">Ejercicios</TabsTrigger>
                    <TabsTrigger value="descargas">Descargas</TabsTrigger>
                    <TabsTrigger value="notas">Notas</TabsTrigger>
                  </TabsList>

                  <TabsContent value="teoria" className="pt-4 text-sm leading-relaxed space-y-4">
                    <div className="flex items-start gap-3 rounded-[16px] bg-yellow-50 p-4 dark:bg-yellow-950/50">
                      <Lightbulb className="mt-0.5 size-5 shrink-0 text-yellow-600" />
                      <div>
                        <p className="font-semibold text-yellow-700 dark:text-yellow-300">Tip del profesor</p>
                        <p className="mt-1 text-yellow-600 dark:text-yellow-400">{currentContent.tip}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {theorySections.map((section, i) => (
                        <TheorySectionBlock key={i} section={section} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="ejercicios" className="pt-4 space-y-4">
                    {allExercises.length === 0 ? (
                      <div className="rounded-[16px] bg-muted p-6 text-center text-sm text-muted-foreground">
                        <Sparkles className="mx-auto mb-2 size-8 text-primary" />
                        Próximamente habrá ejercicios para este tema.
                      </div>
                    ) : showScore ? (
                      <div className="rounded-[16px] border border-primary/20 bg-gradient-to-b from-primary/5 to-background p-6 space-y-6 text-center">
                        <div className="size-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                          <Trophy className="size-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">¡Completado!</h3>
                          <p className="text-muted-foreground mt-1">
                            Respondiste {totalOriginal} preguntas de este tema
                            {allExercises.length > totalOriginal && (
                              <span className="block text-xs mt-1">Hay {allExercises.length} preguntas en total — la próxima vez serán diferentes</span>
                            )}
                          </p>
                        </div>
                        <div className="flex justify-center gap-8">
                          <div>
                            <p className="text-3xl font-bold text-green-600">{correctCount}</p>
                            <p className="text-xs text-muted-foreground">Correctas</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-red-500">{totalQueue - correctCount}</p>
                            <p className="text-xs text-muted-foreground">Incorrectas</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-primary">{Math.round((correctCount / totalOriginal) * 100)}%</p>
                            <p className="text-xs text-muted-foreground">Score</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {(["basico", "intermedio", "avanzado"] as const).map((level) => {
                            const levelExercises = allExercises.filter((e) => e.difficulty === level || (level === "basico" && e.difficulty === "basic") || (level === "intermedio" && e.difficulty === "intermediate") || (level === "avanzado" && e.difficulty === "advanced"));
                            const levelCorrect = levelExercises.filter((e) => exerciseState[e.id] === e.correctIndex).length;
                            if (levelExercises.length === 0) return null;
                            const labels: Record<string, string> = { basico: "Básico", intermedio: "Intermedio", avanzado: "Avanzado" };
                            return (
                              <div key={level} className="rounded-xl border border-border px-4 py-2 text-sm">
                                <span className="font-semibold">{labels[level]}:</span> {levelCorrect}/{levelExercises.length}
                              </div>
                            );
                          })}
                        </div>
                        <button
                          type="button"
                          onClick={() => resetExercises()}
                          className="press flex min-h-11 mx-auto w-full max-w-xs items-center justify-center gap-2 rounded-[18px] bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                        >
                          <Sparkles className="size-4" /> Volver a intentar
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Pregunta {currentExerciseIndex + 1} de {totalOriginal}
                              {totalQueue > totalOriginal && (
                                <span className="text-amber-600 ml-1">(+{totalQueue - totalOriginal} repeticiones)</span>
                              )}
                            </span>
                            {answeredCount > 0 && (
                              <span className={correctCount === answeredCount ? "font-semibold text-green-600" : "text-muted-foreground"}>
                                {correctCount}/{answeredCount} correctas
                              </span>
                            )}
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-all duration-500"
                              style={{ width: `${progressPct}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {(["basico", "intermedio", "avanzado"] as const).map((level) => {
                            const labels: Record<string, string> = { basico: "Básico", intermedio: "Intermedio", avanzado: "Avanzado" };
                            const colors: Record<string, string> = { basico: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800", intermedio: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800", avanzado: "bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800" };
                            const d = level === "basico" ? "basic" : level === "intermedio" ? "intermediate" : "advanced";
                            return (
                              <button
                                key={level}
                                type="button"
                                onClick={() => resetExercises(level)}
                                className={`rounded-full px-3 py-1 text-xs font-semibold border transition-colors ${colors[level]}`}
                              >
                                {labels[level]}
                              </button>
                            );
                          })}
                        </div>

                        {currentQ && (
                          <div className="rounded-[16px] border border-border p-4 space-y-3">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-medium">{currentQ.question}</p>
                              <DifficultyBadge level={currentQ.difficulty} />
                            </div>
                            <div className="space-y-2">
                              {currentQ.options.map((opt, oi) => {
                                const selected = exerciseState[currentQ.id];
                                const answered = selected !== undefined;
                                const isSelected = answered && selected === oi;
                                const isCorrectOpt = oi === currentQ.correctIndex;
                                let borderClass = "border-border";
                                let bgClass = "";
                                if (answered) {
                                  if (isCorrectOpt) {
                                    borderClass = "border-green-500";
                                    bgClass = "bg-green-50 dark:bg-green-950/50";
                                  } else if (isSelected && !isCorrectOpt) {
                                    borderClass = "border-red-400";
                                    bgClass = "bg-red-50 dark:bg-red-950/50";
                                  }
                                }
                                return (
                                  <button
                                    key={oi}
                                    type="button"
                                    onClick={() => handleAnswer(oi)}
                                    disabled={answered}
                                    className={`w-full rounded-xl border p-3 text-left text-sm transition-colors ${borderClass} ${bgClass} ${answered ? "cursor-default" : "hover:bg-muted cursor-pointer"}`}
                                  >
                                    <span className="mr-2 font-semibold text-muted-foreground">
                                      {String.fromCharCode(65 + oi)}.
                                    </span>
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                            {answered && (
                              <div className={`rounded-xl p-3 text-xs ${(exerciseState[currentQ.id] === currentQ.correctIndex) ? "bg-green-50 dark:bg-green-950/50" : "bg-red-50 dark:bg-red-950/50"}`}>
                                <p className={`font-semibold ${(exerciseState[currentQ.id] === currentQ.correctIndex) ? "text-green-700 dark:text-green-300" : "text-red-600 dark:text-red-400"}`}>
                                  {(exerciseState[currentQ.id] === currentQ.correctIndex) ? "Correcto" : "Incorrecto"}
                                </p>
                                <p className="mt-1 text-muted-foreground">{currentQ.explanation}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </TabsContent>

                  <TabsContent value="descargas" className="pt-4 space-y-4">
                    {currentContent?.studyGuide ? (
                      <div className="space-y-4">
                        <div className="rounded-[16px] border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <FileText className="size-5 text-emerald-600" />
                            <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-300">Guía de Estudio Avanzada</h3>
                          </div>
                          <div className="prose prose-sm dark:prose-invert max-w-none text-sm leading-relaxed space-y-3">
                            {currentContent.studyGuide.split("\n").map((paragraph, i) => {
                              if (paragraph.startsWith("## ")) {
                                return <h4 key={i} className="text-base font-bold text-emerald-800 dark:text-emerald-200 mt-4 mb-2">{paragraph.replace("## ", "")}</h4>;
                              }
                              if (paragraph.startsWith("### ")) {
                                return <h5 key={i} className="text-sm font-bold text-emerald-700 dark:text-emerald-300 mt-3 mb-1">{paragraph.replace("### ", "")}</h5>;
                              }
                              if (paragraph.startsWith("- ")) {
                                return <li key={i} className="text-emerald-700 dark:text-emerald-300 ml-4">{paragraph.slice(2)}</li>;
                              }
                              if (paragraph.startsWith("**")) {
                                return <p key={i} className="font-semibold text-emerald-800 dark:text-emerald-200" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                              }
                              if (paragraph.trim() === "") return <div key={i} className="h-2" />;
                              return <p key={i} className="text-emerald-700 dark:text-emerald-300" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                            })}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const content = currentContent.studyGuide || "";
                            const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = `${currentContent.slug}-guia-avanzada.txt`;
                            a.click();
                            URL.revokeObjectURL(url);
                          }}
                          className="flex min-h-11 w-full items-center justify-center gap-2 rounded-[18px] bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                        >
                          <Download className="size-4" />
                          Descargar Guía de Estudio (.txt)
                        </button>
                      </div>
                    ) : (
                      <div className="rounded-[16px] bg-muted p-6 text-center text-sm text-muted-foreground">
                        <Download className="mx-auto mb-2 size-8 text-primary" />
                        <p className="font-semibold">Guía de estudio no disponible</p>
                        <p className="mt-1">La guía avanzada para este tema próximamente estará disponible.</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="notas" className="pt-4">
                    <label className="block text-sm font-medium" htmlFor="notas">
                      Tus notas
                    </label>
                    <textarea
                      id="notas"
                      rows={5}
                      placeholder="Escribe lo que no quieres olvidar…"
                      className="mt-2 w-full rounded-[16px] border border-border bg-card p-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                    />
                  </TabsContent>
                </Tabs>
              </Surface>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => { setActiveLesson(Math.max(0, activeLesson - 1)); resetExercises(); setActiveIllustration(0); setOpenPanel(0);; }}
                  disabled={activeLesson === 0}
                  className="press flex min-h-10 items-center gap-1 rounded-[18px] border border-border px-4 text-sm font-semibold disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" /> Anterior
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveLesson(Math.min(courseSpecificLessons.length - 1, activeLesson + 1)); resetExercises(); setActiveIllustration(0); setOpenPanel(0);; }}
                  disabled={activeLesson === courseSpecificLessons.length - 1}
                  className="press flex min-h-10 items-center gap-1 rounded-[18px] bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-40"
                >
                  Siguiente <ChevronRight className="size-4" />
                </button>
              </div>
            </>
          ) : (
            <Surface className="p-0 overflow-hidden">
              <div className="grid aspect-video place-items-center rounded-t-[24px] bg-primary-deep/90">
                <div className="text-center text-white/80">
                  <Sparkles className="mx-auto mb-2 size-10" />
                  <p className="font-semibold">Selecciona un tema</p>
                  <p className="mt-1 text-sm">Elige una lección del panel lateral</p>
                </div>
              </div>
              <div className="p-6 text-sm text-muted-foreground">
                <p>Este curso aún no tiene contenido detallado.</p>
              </div>
            </Surface>
          )}

          <Surface>
            <h2 className="mb-4 flex items-center gap-2 font-semibold">
              <MessageCircle className="size-5 text-primary" /> Comentarios
            </h2>
            <div className="space-y-4 text-sm">
              <div className="rounded-[16px] bg-muted p-4">
                <p className="font-semibold">Sistema de comentarios</p>
                <p className="text-muted-foreground">
                  Próximamente podrás comentar y resolver dudas con otros estudiantes.
                </p>
              </div>
            </div>
          </Surface>
        </div>

        <aside className="space-y-6">
          <Surface className="p-0">
            <h2 className="p-6 pb-3 font-semibold">Lecciones</h2>
            <ul className="divide-y divide-border">
              {courseSpecificLessons.map((l, i) => (
                <li key={l.title}>
                  <button
                    type="button"
                    onClick={() => { setActiveLesson(i); resetExercises(); setActiveIllustration(0); setOpenPanel(0);; }}
                    className={`flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-muted ${i === activeLesson ? "bg-primary/5" : ""}`}
                  >
                    <IconTile
                      icon={i === activeLesson ? CirclePlay : i < activeLesson ? CheckCircle2 : Lock}
                      tone={i === activeLesson ? "primary" : i < activeLesson ? "success" : "deep"}
                      className="size-10 rounded-[14px]"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {i + 1}. {l.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {i === activeLesson ? "En progreso" : i < activeLesson ? "Completado" : "Pendiente"} · {l.minutes} min
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </Surface>

          <Surface>
            <h2 className="mb-3 flex items-center gap-2 font-semibold">
              <NotebookPen className="size-5 text-primary" /> Tu avance
            </h2>
            <ProgressBar value={Math.round(((activeLesson + 1) / courseSpecificLessons.length) * 100)} tone={course.tone} />
            <p className="mt-2 text-sm text-muted-foreground">
              {activeLesson + 1} de {courseSpecificLessons.length} lecciones · {course.hoursLeft} h restantes
            </p>
          </Surface>
        </aside>
      </div>
    </div>
  );
}
