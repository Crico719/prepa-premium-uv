import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Brain,
  CheckCircle2,
  Clock,
  Flame,
  Focus,
  Plus,
  RotateCcw,
  Target,
  Pause,
  Play,
  Sparkles,
  Trophy,
} from "lucide-react";
import { IconTile, Pill, ProgressBar, SectionHeader, StatCard, Surface } from "@/components/kit";
import {
  getHabits,
  toggleHabit,
  getTodayCompletion,
  getStreakForHabit,
  getWeeklyGoalProgress,
  recordPomodoroSession,
  getDailyHistory,
  setWeeklyGoal,
  type DailyHabit,
} from "@/lib/habits";
import { getStreak } from "@/lib/streak";

export const Route = createFileRoute("/estrategias")({
  head: () => ({
    meta: [
      { title: "Hábitos y estrategias | Rumbo" },
      {
        name: "description",
        content:
          "Pomodoro, hábitos diarios, planificador semanal y tracking de estudio para prepararte mejor.",
      },
    ],
  }),
  component: Estrategias,
});

function PomodoroTimer({ onSessionComplete }: { onSessionComplete: () => void }) {
  const [isBreak, setIsBreak] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSeconds = isBreak ? 5 * 60 : 25 * 60;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const pct = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (!isBreak) {
        setSessions((s) => s + 1);
        recordPomodoroSession();
        onSessionComplete();
        setIsBreak(true);
        setSecondsLeft(5 * 60);
      } else {
        setIsBreak(false);
        setSecondsLeft(25 * 60);
      }
      setIsRunning(false);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, secondsLeft, isBreak, onSessionComplete]);

  const toggle = () => setIsRunning(!isRunning);
  const reset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setSecondsLeft(25 * 60);
  };

  return (
    <Surface className="border-none bg-primary text-primary-foreground">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Pill tone={isBreak ? "success" : "primary"}>
              {isBreak ? "Descanso" : "Enfoque"}
            </Pill>
            <span className="text-xs opacity-80">Sesión {sessions + 1}</span>
          </div>
          <p className="mt-4 text-6xl font-bold tracking-tight tabular-nums">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </p>
          <div className="mt-3 h-2 w-full max-w-xs overflow-hidden rounded-full bg-white/25">
            <span
              className="block h-full rounded-full bg-white transition-all duration-1000"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={toggle}
              className="press flex min-h-11 items-center gap-2 rounded-[18px] bg-white px-6 text-sm font-semibold text-primary"
            >
              {isRunning ? <Pause className="size-4" /> : <Play className="size-4" />}
              {isRunning ? "Pausar" : isBreak ? "Saltar" : "Iniciar"}
            </button>
            <button
              type="button"
              onClick={reset}
              className="press flex min-h-11 items-center gap-2 rounded-[18px] bg-white/20 px-5 text-sm font-semibold"
            >
              <RotateCcw className="size-4" /> Reiniciar
            </button>
          </div>
        </div>
        <div className="grid size-28 place-items-center justify-self-center rounded-full bg-white/15">
          <div className="text-center">
            <Focus className="mx-auto size-10" strokeWidth={1.5} />
            <p className="mt-1 text-xs font-semibold">{sessions} sesiones</p>
          </div>
        </div>
      </div>
    </Surface>
  );
}

function HabitChecklist({
  habits,
  onToggle,
}: {
  habits: DailyHabit[];
  onToggle: (id: string) => void;
}) {
  const todayPct = getTodayCompletion();

  return (
    <Surface>
      <SectionHeader
        title=" Hábitos de hoy"
        subtitle={`${todayPct}% completado`}
      />
      <div className="space-y-2">
        {habits.map((h) => {
          const completed = h.completedDates.includes(new Date().toISOString().slice(0, 10));
          const streak = getStreakForHabit(h.id);
          return (
            <button
              key={h.id}
              type="button"
              onClick={() => onToggle(h.id)}
              className={`press flex w-full items-center gap-3 rounded-[14px] border px-4 py-3 text-left text-sm transition-colors ${
                completed
                  ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950"
                  : "border-border hover:bg-muted"
              }`}
            >
              <span className="text-xl">{h.icon}</span>
              <span className={`min-w-0 flex-1 font-medium ${completed ? "line-through opacity-60" : ""}`}>
                {h.label}
              </span>
              {streak > 0 && (
                <span className="flex items-center gap-1 text-xs text-warning">
                  <Flame className="size-3" /> {streak}
                </span>
              )}
              <CheckCircle2
                className={`size-5 shrink-0 ${completed ? "text-green-500" : "text-muted-foreground"}`}
              />
            </button>
          );
        })}
      </div>
    </Surface>
  );
}

function WeeklyGoalCard() {
  const { current, goal, pct } = getWeeklyGoalProgress();
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(`${goal}`);

  const save = () => {
    const n = parseInt(val, 10);
    if (n > 0 && n <= 60) setWeeklyGoal(n);
    setEditing(false);
  };

  return (
    <Surface>
      <SectionHeader title="Meta semanal" subtitle="Horas de estudio" />
      <div className="flex items-center gap-4">
        <div className="relative size-20">
          <svg className="size-20 -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="35" fill="none" stroke="var(--color-muted)" strokeWidth="6" />
            <circle
              cx="40"
              cy="40"
              r="35"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 35}`}
              strokeDashoffset={`${2 * Math.PI * 35 * (1 - pct / 100)}`}
              className="transition-all duration-700"
            />
          </svg>
          <span className="absolute inset-0 grid place-items-center text-lg font-bold">{pct}%</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">
            {current} / {editing ? (
              <span className="inline-flex items-center gap-1">
                <input
                  type="number"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  onBlur={save}
                  onKeyDown={(e) => e.key === "Enter" && save()}
                  className="w-12 rounded border border-white/30 bg-white/20 px-1 text-center text-sm"
                  min={1}
                  max={60}
                />
              </span>
            ) : (
              <button type="button" onClick={() => setEditing(true)} className="underline decoration-dotted">
                {goal}h
              </button>
            )} esta semana
          </p>
          <ProgressBar value={pct} className="mt-2" />
          <p className="mt-2 text-xs text-muted-foreground">
            {pct >= 100
              ? "¡Meta alcanzada! Sigue así"
              : `Te faltan ${(goal - current).toFixed(1)}h para tu meta`}
          </p>
        </div>
      </div>
    </Surface>
  );
}

function WeekCalendar() {
  const history = getDailyHistory();
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  return (
    <Surface>
      <SectionHeader title="Tu semana" subtitle="Hábitos completados por día" />
      <div className="grid grid-cols-7 gap-2">
        {history.map((d) => {
          const date = new Date(d.date + "T12:00:00");
          const dayName = dayNames[date.getDay()];
          const pct = d.total > 0 ? (d.completed / d.total) * 100 : 0;
          return (
            <div key={d.date} className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-semibold text-muted-foreground">{dayName}</span>
              <div
                className={`size-10 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  pct >= 80
                    ? "bg-green-500 text-white"
                    : pct >= 40
                    ? "bg-yellow-400 text-yellow-900"
                    : pct > 0
                    ? "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {d.completed}/{d.total}
              </div>
            </div>
          );
        })}
      </div>
    </Surface>
  );
}

function Estrategias() {
  const [habits, setHabits] = useState<DailyHabit[]>(() => getHabits().habits);
  const streak = useMemo(() => getStreak(), []);
  const todayPct = getTodayCompletion();

  const handleToggle = useCallback((id: string) => {
    const updated = toggleHabit(id);
    setHabits([...updated.habits]);
  }, []);

  const handleSessionComplete = useCallback(() => {
    // Force re-render of weekly goal
    setHabits((prev) => [...prev]);
  }, []);

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Hábitos y estrategias"
        subtitle="Constancia > intensidad"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Flame}
          label="Racha global"
          value={`${streak.count} días`}
          tone="warning"
        />
        <StatCard
          icon={Target}
          label="Hoy"
          value={`${todayPct}%`}
          tone={todayPct >= 80 ? "success" : "primary"}
        />
        <StatCard
          icon={Trophy}
          label="Pomodoros hoy"
          value={`${getHabits().pomodoroSessions.find((s) => s.date === new Date().toISOString().slice(0, 10))?.count ?? 0}`}
          tone="deep"
        />
        <StatCard
          icon={Brain}
          label="Mejor hábito"
          value={habits.reduce((best, h) => {
            const streak = getStreakForHabit(h.id);
            const bestStreak = getStreakForHabit(best.id);
            return streak > bestStreak ? h : best;
          }, habits[0])?.label?.slice(0, 15) || "—"}
          tone="success"
        />
      </div>

      <PomodoroTimer onSessionComplete={handleSessionComplete} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <HabitChecklist habits={habits} onToggle={handleToggle} />
        <div className="space-y-6">
          <WeeklyGoalCard />
          <WeekCalendar />
        </div>
      </div>

      <Surface>
        <SectionHeader title="Estrategias de estudio" subtitle="Métodos probados" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Brain, title: "Técnica Feynman", desc: "Explica el tema como si le enseñaras a alguien. Si no puedes, no lo entiendes.", tag: "Memoria" },
            { icon: Focus, title: "Bloques de enfoque", desc: "25 min de concentración total + 5 min de descanso. Repite 4 veces.", tag: "Enfoque" },
            { icon: Sparkles, title: "Repaso espaciado", desc: "Revisa lo aprendido en intervalos: 1 día, 3 días, 7 días, 30 días.", tag: "Memoria" },
            { icon: Clock, title: "Matriz de Eisenhower", desc: "Prioriza por urgencia e importancia. No todo es urgente.", tag: "Orden" },
            { icon: Target, title: "Simulacros cronometrados", desc: "Practica con presión de tiempo. El examen real tiene límite.", tag: "Práctica" },
            { icon: Trophy, title: "Revisión de errores", desc: "Después de cada quiz, revisa cada error. Tus errores son tu guía.", tag: "Mejora" },
          ].map((s) => (
            <div key={s.title} className="rounded-[14px] border border-border p-4">
              <div className="mb-2 flex items-center gap-2">
                <IconTile icon={s.icon} tone="primary" className="size-8" />
                <span className="text-sm font-semibold">{s.title}</span>
              </div>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
              <div className="mt-2">
                <Pill tone="primary">{s.tag}</Pill>
              </div>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
