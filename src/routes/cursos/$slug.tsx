import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CirclePlay,
  FileText,
  Lock,
  MessageCircle,
  NotebookPen,
  Play,
} from "lucide-react";
import { IconTile, Pill, ProgressBar, Surface } from "@/components/kit";
import { courses, lessons, courseLessons } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/cursos/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { name: course.name, description: course.description };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Curso"} | Rumbo preuniversitario` },
      {
        name: "description",
        content: `${loaderData?.description ?? "Lecciones del curso"} — video, teoría, recursos y ejercicios para el examen de admisión.`,
      },
      { property: "og:title", content: `${loaderData?.name ?? "Curso"} · Rumbo` },
      {
        property: "og:description",
        content: loaderData?.description ?? "Lecciones guiadas de preparación preuniversitaria.",
      },
    ],
  }),
  component: Leccion,
});

function Leccion() {
  const { slug } = Route.useParams();
  const course = courses.find((c) => c.slug === slug)!;
  const courseSpecificLessons = courseLessons[slug] || lessons;

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
              Lección {course.completedLessons} de {course.lessons} · {course.teacher}
            </p>
          </div>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/25">
          <span
            className="block h-full rounded-full bg-white"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </Surface>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <Surface className="p-0">
            <div className="grid aspect-video place-items-center rounded-t-[24px] bg-primary-deep/90">
              <button
                type="button"
                aria-label="Reproducir video de la lección"
                className="press grid size-16 place-items-center rounded-full bg-white/90 text-primary-deep"
              >
                <Play className="size-7" />
              </button>
            </div>
            <Tabs defaultValue="teoria" className="p-6">
              <TabsList className="rounded-[16px]">
                <TabsTrigger value="teoria">Teoría</TabsTrigger>
                <TabsTrigger value="ejercicios">Ejercicios</TabsTrigger>
                <TabsTrigger value="recursos">Recursos</TabsTrigger>
                <TabsTrigger value="notas">Notas</TabsTrigger>
              </TabsList>
              <TabsContent value="teoria" className="pt-4 text-sm leading-relaxed">
                <p>
                  En esta lección revisamos los conceptos clave de {course.description.toLowerCase()}
                  , con ejemplos tomados de exámenes de admisión reales de los últimos cinco años.
                </p>
                <div className="mt-4 rounded-[16px] bg-muted p-4 font-medium">
                  Idea clave: identifica primero el tipo de problema, luego elige el método más
                  corto. La velocidad se entrena.
                </div>
              </TabsContent>
              <TabsContent value="ejercicios" className="space-y-3 pt-4">
                {["Ejercicio guiado", "Práctica dirigida", "Reto cronometrado"].map((e, i) => (
                  <div
                    key={e}
                    className="flex items-center justify-between rounded-[16px] border border-border p-4 text-sm"
                  >
                    <span className="font-medium">{e}</span>
                    <Pill tone={i === 0 ? "success" : "primary"}>{i === 0 ? "Hecho" : "Abrir"}</Pill>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="recursos" className="space-y-3 pt-4">
                {["Separata en PDF", "Formulario resumen", "Banco de preguntas"].map((r) => (
                  <div
                    key={r}
                    className="flex items-center gap-3 rounded-[16px] border border-border p-4 text-sm font-medium"
                  >
                    <FileText className="size-5 text-primary" /> {r}
                  </div>
                ))}
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

          <Surface>
            <h2 className="mb-4 flex items-center gap-2 font-semibold">
              <MessageCircle className="size-5 text-primary" /> Comentarios
            </h2>
            <div className="space-y-4 text-sm">
              <div className="rounded-[16px] bg-muted p-4">
                <p className="font-semibold">Camila Torres</p>
                <p className="text-muted-foreground">
                  El truco del minuto 6:20 me sirvió muchísimo, gracias profe.
                </p>
              </div>
              <div className="rounded-[16px] bg-muted p-4">
                <p className="font-semibold">Renzo Aguilar</p>
                <p className="text-muted-foreground">¿Habrá práctica extra de este tema?</p>
              </div>
            </div>
          </Surface>
        </div>

        <aside className="space-y-6">
          <Surface className="p-0">
            <h2 className="p-6 pb-3 font-semibold">Lecciones</h2>
            <ul className="divide-y divide-border">
              {courseSpecificLessons.map((l, i) => (
                <li key={l.title} className="flex items-center gap-3 p-4">
                  <IconTile
                    icon={
                      l.state === "Completado"
                        ? CheckCircle2
                        : l.state === "En progreso"
                          ? CirclePlay
                          : Lock
                    }
                    tone={
                      l.state === "Completado"
                        ? "success"
                        : l.state === "En progreso"
                          ? "primary"
                          : "deep"
                    }
                    className="size-10 rounded-[14px]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {i + 1}. {l.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {l.state} · {l.minutes} min
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Surface>

          <Surface>
            <h2 className="mb-3 flex items-center gap-2 font-semibold">
              <NotebookPen className="size-5 text-primary" /> Tu avance
            </h2>
            <ProgressBar value={course.progress} tone={course.tone} />
            <p className="mt-2 text-sm text-muted-foreground">
              {course.progress}% completado · {course.hoursLeft} h restantes
            </p>
            <button
              type="button"
              className="press mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-[18px] bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Siguiente lección <ArrowRight className="size-4" />
            </button>
          </Surface>
        </aside>
      </div>
    </div>
  );
}
