import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, GraduationCap, ListChecks, Search } from "lucide-react";
import { IconTile, Pill, ProgressBar, SectionHeader, Surface } from "@/components/kit";
import { courses } from "@/lib/data";

export const Route = createFileRoute("/cursos/")({
  head: () => ({
    meta: [
      { title: "Cursos | Rumbo preuniversitario" },
      {
        name: "description",
        content:
          "Nueve materias del examen de admisión con progreso, docentes y lecciones: matemáticas, física, química, verbal, historia y más.",
      },
      { property: "og:title", content: "Cursos de preparación preuniversitaria" },
      {
        property: "og:description",
        content: "Avanza materia por materia con progreso y lecciones guiadas.",
      },
    ],
  }),
  component: Cursos,
});

function Cursos() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Mis cursos"
        subtitle="Todo el temario del examen de admisión"
      />

      <label className="surface flex items-center gap-3 p-3">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <span className="sr-only">Buscar curso</span>
        <input
          type="search"
          placeholder="Buscar curso o tema"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </label>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <li key={course.slug}>
            <Surface className="hover-lift flex h-full flex-col gap-4">
              <div className="flex items-start gap-3">
                <IconTile icon={course.icon} tone={course.tone} />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
              </div>
              <Pill tone={course.tone}>{course.level}</Pill>
              <dl className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="size-4 shrink-0" />
                  <dd className="truncate">{course.teacher}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-4 shrink-0" />
                  <dd>{course.hoursLeft} h restantes</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <ListChecks className="size-4 shrink-0" />
                  <dd>
                    {course.completedLessons}/{course.lessons} lecciones
                  </dd>
                </div>
              </dl>
              <div className="mt-auto space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Progreso</span>
                  <span>{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} tone={course.tone} />
                <Link
                  to="/cursos/$slug"
                  params={{ slug: course.slug }}
                  className="press mt-2 flex min-h-11 items-center justify-center rounded-[18px] bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Continuar
                </Link>
              </div>
            </Surface>
          </li>
        ))}
      </ul>
    </div>
  );
}
