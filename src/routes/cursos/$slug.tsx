import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Lightbulb,
  Lock,
  MessageCircle,
  NotebookPen,
  Sparkles,
  XCircle,
} from "lucide-react";
import { IconTile, ProgressBar, Surface } from "@/components/kit";
import { courses, lessons, courseLessons } from "@/lib/data";
import { courseContent, type CourseExercise } from "@/lib/course-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [exerciseState, setExerciseState] = useState<Record<number, number | null>>({});

  const currentContent = content[activeLesson] || null;
  const exercises = currentContent?.exercises || [];

  const handleAnswer = (exerciseId: number, optionIndex: number) => {
    if (exerciseState[exerciseId] !== undefined) return;
    setExerciseState({ ...exerciseState, [exerciseId]: optionIndex });
  };

  const resetExercises = () => setExerciseState({});

  const correctCount = exercises.filter((e) => exerciseState[e.id] === e.correctIndex).length;
  const answeredCount = exercises.filter((e) => exerciseState[e.id] !== undefined).length;
  const allDone = answeredCount === exercises.length && exercises.length > 0;

  return (
    <div className="space-y-6">
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
                <div
                  className="flex aspect-video items-center justify-center rounded-t-[24px] bg-gradient-to-br from-primary-deep/90 to-primary/90 p-6"
                  dangerouslySetInnerHTML={{ __html: currentContent.illustration }}
                />
                <Tabs defaultValue="teoria" className="p-6">
                  <TabsList className="rounded-[16px]">
                    <TabsTrigger value="teoria">Teoría</TabsTrigger>
                    <TabsTrigger value="ejercicios">Ejercicios</TabsTrigger>
                    <TabsTrigger value="notas">Notas</TabsTrigger>
                  </TabsList>

                  <TabsContent value="teoria" className="pt-4 text-sm leading-relaxed space-y-3">
                    <div className="flex items-start gap-3 rounded-[16px] bg-yellow-50 p-4 dark:bg-yellow-950/50">
                      <Lightbulb className="mt-0.5 size-5 shrink-0 text-yellow-600" />
                      <div>
                        <p className="font-semibold text-yellow-700 dark:text-yellow-300">Tip del profesor</p>
                        <p className="mt-1 text-yellow-600 dark:text-yellow-400">{currentContent.tip}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {currentContent.theory.map((line, i) => (
                        <p key={i} className="text-sm">
                          {line.startsWith("- ") ? (
                            <span className="ml-4 block text-muted-foreground">{line.slice(2)}</span>
                          ) : (
                            <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                          )}
                        </p>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="ejercicios" className="pt-4 space-y-4">
                    {exercises.length === 0 ? (
                      <div className="rounded-[16px] bg-muted p-6 text-center text-sm text-muted-foreground">
                        <Sparkles className="mx-auto mb-2 size-8 text-primary" />
                        Próximamente habrá ejercicios para este tema.
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {answeredCount}/{exercises.length} respondidas
                          </span>
                          {allDone && (
                            <span className={correctCount === exercises.length ? "font-semibold text-green-600" : "text-muted-foreground"}>
                              {correctCount}/{exercises.length} correctas
                            </span>
                          )}
                        </div>
                        {exercises.map((ex) => {
                          const selected = exerciseState[ex.id];
                          const answered = selected !== undefined;
                          const isCorrect = answered && selected === ex.correctIndex;
                          return (
                            <div key={ex.id} className="rounded-[16px] border border-border p-4 space-y-3">
                              <p className="font-medium">{ex.question}</p>
                              <div className="space-y-2">
                                {ex.options.map((opt, oi) => {
                                  const isSelected = selected === oi;
                                  const isCorrectOpt = oi === ex.correctIndex;
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
                                      onClick={() => handleAnswer(ex.id, oi)}
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
                                <div className={`rounded-xl p-3 text-xs ${isCorrect ? "bg-green-50 dark:bg-green-950/50" : "bg-red-50 dark:bg-red-950/50"}`}>
                                  <p className={`font-semibold ${isCorrect ? "text-green-700 dark:text-green-300" : "text-red-600 dark:text-red-400"}`}>
                                    {isCorrect ? "Correcto" : "Incorrecto"}
                                  </p>
                                  <p className="mt-1 text-muted-foreground">{ex.explanation}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                        {allDone && (
                          <button
                            type="button"
                            onClick={resetExercises}
                            className="press flex min-h-11 w-full items-center justify-center gap-2 rounded-[18px] border border-border text-sm font-semibold hover:bg-muted"
                          >
                            Repetir ejercicios
                          </button>
                        )}
                      </>
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
                  onClick={() => { setActiveLesson(Math.max(0, activeLesson - 1)); resetExercises(); }}
                  disabled={activeLesson === 0}
                  className="press flex min-h-10 items-center gap-1 rounded-[18px] border border-border px-4 text-sm font-semibold disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" /> Anterior
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveLesson(Math.min(courseSpecificLessons.length - 1, activeLesson + 1)); resetExercises(); }}
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
                    onClick={() => { setActiveLesson(i); resetExercises(); }}
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
