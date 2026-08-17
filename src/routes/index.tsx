import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Flame,
  Medal,
  Newspaper,
  Rocket,
  Target,
  Timer,
  Trophy,
} from "lucide-react";
import {
  IconTile,
  Pill,
  ProgressBar,
  ProgressRing,
  SectionHeader,
  StatCard,
  Surface,
} from "@/components/kit";
import { courses, student, upcoming } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rumbo · Prepárate para tu examen de admisión" },
      {
        name: "description",
        content:
          "Plataforma peruana de preparación preuniversitaria: cursos, simulacros, hábitos de estudio y orientación universitaria en un solo lugar.",
      },
      { property: "og:title", content: "Rumbo · Prepárate para tu examen de admisión" },
      {
        property: "og:description",
        content:
          "Plataforma peruana de preparación preuniversitaria: cursos, simulacros, hábitos de estudio y orientación universitaria en un solo lugar.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const recent = courses.slice(0, 3);

  return (
    <div className="space-y-8">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
            ¡Hola, {student.name}! 👋
          </h1>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            Meta: {student.target}
          </p>
        </div>
        <Pill tone="warning">
          <Flame className="mr-1 size-4" /> {student.streak} días de racha
        </Pill>
      </header>

      <Surface className="overflow-hidden border-none bg-primary p-0 text-primary-foreground">
        <div className="grid gap-6 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8">
          <div className="min-w-0">
            <p className="text-sm font-medium opacity-90">Tu progreso general</p>
            <p className="mt-2 text-5xl font-bold tracking-tight">{student.overall}%</p>
            <div className="mt-4 h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/25">
              <span
                className="block h-full rounded-full bg-white transition-all duration-700"
                style={{ width: `${student.overall}%` }}
              />
            </div>
            <p className="mt-3 text-sm opacity-90">¡Vas por buen camino, sigue así!</p>
            <Link
              to="/cursos"
              className="press mt-6 inline-flex min-h-11 items-center gap-2 rounded-[18px] bg-white px-5 text-sm font-semibold text-primary"
            >
              Continuar estudiando <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid size-36 place-items-center justify-self-center rounded-full bg-white/15 sm:size-44">
            <Rocket className="size-16 sm:size-20" strokeWidth={1.5} />
          </div>
        </div>
      </Surface>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Timer} label="Tiempo estudiado" value="23 h" hint="Esta semana" />
        <StatCard
          icon={Target}
          label="Puntaje promedio"
          value="86 / 100"
          tone="success"
          hint="Últimos 4 simulacros"
        />
        <StatCard
          icon={Trophy}
          label="Ranking"
          value="#2"
          tone="warning"
          hint="Entre 1 240 estudiantes"
        />
        <StatCard icon={Medal} label="Nivel" value={`Nivel ${student.level}`} tone="deep" hint={`${student.xp} / ${student.xpGoal} XP`} />
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <section>
          <SectionHeader
            title="Continúa aprendiendo"
            subtitle="Retoma donde lo dejaste"
            action={
              <Link
                to="/cursos"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Ver todo
              </Link>
            }
          />
          <ul className="space-y-3">
            {recent.map((course) => (
              <li key={course.slug}>
                <Link
                  to="/cursos/$slug"
                  params={{ slug: course.slug }}
                  className="surface hover-lift press flex items-center gap-4 p-4"
                >
                  <IconTile icon={course.icon} tone={course.tone} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">{course.name}</span>
                    <span className="block truncate text-sm text-muted-foreground">
                      {course.description}
                    </span>
                    <span className="mt-2 flex items-center gap-3">
                      <ProgressBar value={course.progress} tone={course.tone} />
                      <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                        {course.progress}%
                      </span>
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <SectionHeader
              title="Próximas actividades"
              subtitle="Tu calendario de la semana"
              action={
                <Link to="/simulacros" className="text-sm font-semibold text-primary hover:underline">
                  Ver calendario
                </Link>
              }
            />
            <Surface className="divide-y divide-border p-0">
              {upcoming.map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-4">
                  <IconTile icon={CalendarDays} tone={item.tone} className="size-11" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">{item.when}</p>
                    <p className="truncate font-semibold">{item.title}</p>
                    <p className="truncate text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </Surface>
          </div>
        </section>

        <aside className="space-y-6">
          <Surface className="overflow-hidden border-none bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-0">
            <div className="p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-primary/15">
                  <Bot className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">PrepaBot</p>
                  <p className="text-xs text-muted-foreground">Tu tutor IA</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">¿Tienes dudas? Pregúntale a PrepaBot sobre cualquier materia.</p>
              <Link to="/asistente" className="press mt-4 inline-flex min-h-10 items-center gap-2 rounded-[14px] bg-primary px-4 text-sm font-semibold text-primary-foreground">
                Hablar con PrepaBot <ArrowRight className="size-4" />
              </Link>
            </div>
          </Surface>

          <Surface className="flex flex-col items-center gap-4 text-center">
            <ProgressRing value={student.overall} caption="general" />
            <p className="text-sm text-muted-foreground">
              Has completado 148 de 205 lecciones de tu plan.
            </p>
          </Surface>

          <Surface>
            <SectionHeader title="Accesos rápidos" />
            <div className="grid grid-cols-2 gap-3">
              {[
                { to: "/simulacros", label: "Simulacro", icon: Target },
                { to: "/estrategias", label: "Pomodoro", icon: Timer },
                { to: "/cursos", label: "Cursos", icon: BookOpen },
                { to: "/comunidad", label: "Foro", icon: Newspaper },
              ].map((q) => (
                <Link
                  key={q.label}
                  to={q.to}
                  className="press flex min-h-20 flex-col items-center justify-center gap-2 rounded-[18px] border border-border text-sm font-medium hover:bg-muted"
                >
                  <q.icon className="size-5 text-primary" />
                  {q.label}
                </Link>
              ))}
            </div>
          </Surface>

          <Surface>
            <SectionHeader title="Noticias" subtitle="Admisión 2026" />
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-semibold">UNMSM publica su prospecto</p>
                <p className="text-muted-foreground">Nuevas vacantes por facultad.</p>
              </li>
              <li>
                <p className="font-semibold">Cambios en el examen UNI</p>
                <p className="text-muted-foreground">Más peso en razonamiento matemático.</p>
              </li>
            </ul>
          </Surface>
        </aside>
      </div>
    </div>
  );
}
