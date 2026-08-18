import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CalendarDays,
  Flame,
  Landmark,
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
import { AvatarSelector } from "@/components/kit/AvatarSelector";
import { courses, student, upcoming, weeklyStudy, universities } from "@/lib/data";
import { checkIn, getLast7Days } from "@/lib/streak";
import { getAvatarById, type AvatarId } from "@/lib/avatars";
import { getSelectedAvatar, setSelectedAvatar } from "@/lib/avatar-store";

const dailyTips = [
  "No estudies más de 2 horas seguidas. Tu cerebro necesita descansar para consolidar la memoria.",
  "Explica en voz alta lo que estudiaste. Si puedes enseñarlo, es que lo entendiste.",
  "Empieza por lo más difícil cuando tengas más energía, generalmente en la mañana.",
  "Usa la técnica Pomodoro: 25 min de estudio + 5 min de descanso.",
  "Resuelve simulacros sin ver la hora. La presión del tiempo es parte de la práctica.",
  "Duerme al menos 7 horas. La memoria se consolida durante el sueño.",
  "Haz resúmenes a mano. Escribir a mano mejora la retención un 30%.",
  "Estudia en un lugar libre de distracciones. El teléfono en modo avión es tu mejor aliado.",
  "Revisa lo que fallaste en el último simulacro. Tus errores son tu mejor guía.",
  "No compares tu progreso con el de otros. Cada uno tiene su ritmo.",
];

function getDailyTip(): string {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyTips[dayOfYear % dailyTips.length]!;
}

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
  const [streakCount, setStreakCount] = useState(0);
  const [streakDays, setStreakDays] = useState<{ day: string; active: boolean }[]>([]);
  const [currentAvatar, setCurrentAvatar] = useState<AvatarId>(getSelectedAvatar);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  useEffect(() => {
    const streak = checkIn();
    setStreakCount(streak.count);
    setStreakDays(getLast7Days());
  }, []);

  const handleAvatarChange = useCallback((id: AvatarId) => {
    setCurrentAvatar(id);
    setSelectedAvatar(id);
    setShowAvatarSelector(false);
  }, []);

  const avatar = getAvatarById(currentAvatar);

  const recent = courses.slice(0, 3);
  const weakCourses = courses
    .filter((c) => c.progress < 50)
    .sort((a, b) => a.progress - b.progress)
    .slice(0, 3);
  const tip = getDailyTip();

  const today = new Date();
  const monthMap: Record<string, number> = {
    Ene: 0, Feb: 1, Mar: 2, Abr: 3, May: 4, Jun: 5,
    Jul: 6, Ago: 7, Sep: 8, Oct: 9, Nov: 10, Dic: 11,
  };
  const examDates = universities
    .map((u) => {
      const [day = "1", month = ""] = u.date.split(" ");
      const examDate = new Date(today.getFullYear(), monthMap[month] ?? 0, parseInt(day));
      if (examDate < today) examDate.setFullYear(today.getFullYear() + 1);
      const daysLeft = Math.ceil((examDate.getTime() - today.getTime()) / 86400000);
      return { ...u, daysLeft };
    })
    .filter((u) => u.daysLeft > 0)
    .sort((a, b) => a.daysLeft - b.daysLeft);

  const maxHours = Math.max(...weeklyStudy.map((d) => d.horas));

  return (
    <div className="space-y-8">
      <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4">
        <button
          type="button"
          onClick={() => setShowAvatarSelector(!showAvatarSelector)}
          className="relative size-14 shrink-0 rounded-full transition-transform hover:scale-110"
          title="Cambiar avatar"
        >
          {avatar.svg}
        </button>
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
            ¡Hola, {student.name}! 👋
          </h1>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            Meta: {student.target}
          </p>
        </div>
        <Pill tone="warning">
          <Flame className="mr-1 size-4" /> {streakCount} días de racha
        </Pill>
      </header>

      {showAvatarSelector && (
        <Surface>
          <SectionHeader
            title="Elige tu avatar"
            subtitle="Selecciona un personaje"
            action={
              <button
                type="button"
                onClick={() => setShowAvatarSelector(false)}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                Cerrar
              </button>
            }
          />
          <AvatarSelector onSelect={handleAvatarChange} />
        </Surface>
      )}

      {/* Streak calendar */}
      {streakDays.length > 0 && (
        <Surface className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="size-5 text-warning" />
              <span className="text-sm font-semibold">Tu racha: {streakCount} días</span>
            </div>
            <span className="text-xs text-muted-foreground">Últimos 7 días</span>
          </div>
          <div className="mt-3 flex gap-2">
            {streakDays.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    d.active
                      ? "bg-warning text-warning-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {d.active ? "🔥" : "·"}
                </div>
                <span className="text-[10px] text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </Surface>
      )}

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

          {weakCourses.length > 0 && (
            <div className="mt-8">
              <SectionHeader title="Materias por reforzar" subtitle="Estas materias necesitan más atención" />
              <div className="grid gap-3 sm:grid-cols-3">
                {weakCourses.map((course) => (
                  <Link key={course.slug} to="/cursos/$slug" params={{ slug: course.slug }} className="surface hover-lift press p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <IconTile icon={course.icon} tone={course.tone} className="size-8" />
                      <span className="text-sm font-semibold">{course.name}</span>
                    </div>
                    <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{course.completedLessons}/{course.lessons} lecciones</span>
                      <span className="font-semibold text-destructive">{course.progress}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <span className="block h-full rounded-full bg-destructive transition-all duration-500" style={{ width: `${course.progress}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">Te quedan {course.hoursLeft}h de contenido</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <SectionHeader title="Tu semana de estudio" subtitle="Horas invertidas en aprender" />
            <Surface className="p-4">
              <div className="flex items-end gap-2 h-32">
                {weeklyStudy.map((d) => (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
                    <span className="text-[10px] font-semibold text-muted-foreground">{d.horas}h</span>
                    <div className="w-full rounded-t-lg bg-primary/80 transition-all duration-500" style={{ height: `${(d.horas / maxHours) * 100}%`, minHeight: "4px" }} />
                    <span className="text-xs font-medium text-muted-foreground">{d.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>Total: {weeklyStudy.reduce((s, d) => s + d.horas, 0).toFixed(1)}h</span>
                <span>Promedio: {(weeklyStudy.reduce((s, d) => s + d.horas, 0) / 7).toFixed(1)}h/día</span>
              </div>
            </Surface>
          </div>

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

          {examDates.length > 0 && (
            <Surface>
              <SectionHeader title="Cuenta regresiva" subtitle="Próximos exámenes" />
              <div className="space-y-3">
                {examDates.slice(0, 3).map((u) => (
                  <div key={u.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Landmark className="size-4 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">{u.name}</p>
                        <p className="text-xs text-muted-foreground">{u.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{u.daysLeft}</p>
                      <p className="text-[10px] text-muted-foreground">días</p>
                    </div>
                  </div>
                ))}
              </div>
            </Surface>
          )}

          <Surface className="border-l-4 border-l-primary">
            <SectionHeader title="Consejo del día" />
            <p className="text-sm leading-relaxed text-muted-foreground">{tip}</p>
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
