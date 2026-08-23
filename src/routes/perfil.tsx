import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  Award,
  Bell,
  Flame,
  LogOut,
  Medal,
  Settings,
  Star,
  Target,
  Timer,
  Trophy,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  IconTile,
  Pill,
  ProgressBar,
  ProgressRing,
  SectionHeader,
  StatCard,
  Surface,
} from "@/components/kit";
import {
  getGamification,
  getAverageScore,
  getTotalHours,
  getWeeklyMinutesByDay,
  getXPForCurrentLevel,
  getXPForNextLevel,
  getRanking,
  getUserRank,
  getSimulacroCount,
} from "@/lib/gamification";
import { getStreak } from "@/lib/streak";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Mi perfil y estadísticas | Rumbo" },
      {
        name: "description",
        content:
          "Revisa tu nivel, XP, racha, logros, tiempo estudiado y estadísticas semanales; ajusta el tema y tus preferencias.",
      },
      { property: "og:title", content: "Perfil del estudiante · Rumbo" },
      {
        property: "og:description",
        content: "Nivel, XP, racha y estadísticas de tu preparación preuniversitaria.",
      },
    ],
  }),
  component: Perfil,
});

function Perfil() {
  const gamification = useMemo(() => getGamification(), []);
  const streak = useMemo(() => getStreak(), []);
  const averageScore = useMemo(() => getAverageScore(), []);
  const totalHours = useMemo(() => getTotalHours(), []);
  const weeklyStudy = useMemo(() => getWeeklyMinutesByDay(), []);
  const ranking = useMemo(() => getRanking(), []);
  const userRank = useMemo(() => getUserRank(), []);
  const simulacroCount = useMemo(() => getSimulacroCount(), []);

  const xpPct = Math.round(
    ((gamification.xp - getXPForCurrentLevel(gamification.level)) /
      (getXPForNextLevel(gamification.level) - getXPForCurrentLevel(gamification.level))) *
      100
  );
  const maxHours = Math.max(...weeklyStudy.map((d) => d.horas), 1);

  return (
    <div className="space-y-8">
      <Surface className="border-none bg-primary text-primary-foreground">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white/20 text-xl font-bold">
            DA
          </span>
          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold sm:text-2xl">Daniel Asturrizaga</h1>
            <p className="text-sm opacity-90">
              Nivel {gamification.level} · UNMSM · Ingeniería de Sistemas
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-1 flex justify-between text-xs font-semibold opacity-90">
            <span>XP</span>
            <span>
              {gamification.xp} / {getXPForNextLevel(gamification.level)}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/25">
            <span className="block h-full rounded-full bg-white" style={{ width: `${xpPct}%` }} />
          </div>
        </div>
      </Surface>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Flame} label="Racha" value={`${streak.count} días`} tone="warning" />
        <StatCard icon={Target} label="Simulacros" value={`${simulacroCount}`} />
        <StatCard icon={Star} label="Puntaje promedio" value={`${averageScore}%`} tone="success" />
        <StatCard icon={Timer} label="Tiempo total" value={totalHours} tone="deep" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Surface>
          <SectionHeader title="Horas de estudio" subtitle="Últimos 7 días" />
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyStudy} margin={{ left: -22 }}>
                <defs>
                  <linearGradient id="fillHoras" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="horas"
                  stroke="var(--color-primary)"
                  strokeWidth={3}
                  fill="url(#fillHoras)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Surface>

        <Surface className="flex flex-col items-center gap-4 text-center">
          <SectionHeader title="Progreso general" />
          <ProgressRing
            value={Math.min(Math.round((gamification.xp / getXPForNextLevel(gamification.level)) * 100), 100)}
            caption="del plan"
          />
          <ProgressBar value={Math.min(Math.round((gamification.xp / getXPForNextLevel(gamification.level)) * 100), 100)} />
          <p className="text-sm text-muted-foreground">
            Mantén 3 horas diarias para llegar al 90% antes del examen.
          </p>
        </Surface>
      </div>

      <Surface>
        <SectionHeader title="Ranking semanal" subtitle="Top estudiantes" />
        <ol className="space-y-2">
          {ranking.map((r, i) => (
            <li
              key={r.name}
              className={`flex items-center gap-3 rounded-[14px] border px-4 py-3 text-sm font-medium ${
                r.isUser
                  ? "border-primary/40 bg-primary/5"
                  : "border-border"
              }`}
            >
              <span className={`grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold ${
                i === 0 ? "bg-warning text-warning-foreground" :
                i === 1 ? "bg-muted text-muted-foreground" :
                i === 2 ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300" :
                "bg-muted text-muted-foreground"
              }`}>
                {i + 1}
              </span>
              <span className="min-w-0 flex-1 truncate">{r.name}</span>
              <span className="shrink-0 text-xs font-semibold text-primary">{r.xp} XP</span>
            </li>
          ))}
        </ol>
        <div className="mt-3 text-center text-xs text-muted-foreground">
          Tu posición: #{userRank}
        </div>
      </Surface>

      <Surface>
        <SectionHeader title="Logros e insignias" subtitle="Lo que has conquistado" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Trophy, label: "Top 10 nacional", tone: "warning" as const, unlocked: userRank <= 10 },
            { icon: Medal, label: "30 días de racha", tone: "success" as const, unlocked: streak.count >= 30 },
            { icon: Award, label: "100 lecciones", tone: "primary" as const, unlocked: gamification.totalQuizzes >= 5 },
            { icon: Star, label: "Simulacro 90+", tone: "deep" as const, unlocked: averageScore >= 90 },
          ].map((a) => (
            <div
              key={a.label}
              className={`flex items-center gap-3 rounded-[18px] border p-4 ${
                a.unlocked ? "border-border" : "border-border opacity-40"
              }`}
            >
              <IconTile icon={a.icon} tone={a.tone} className="size-10 rounded-[14px]" />
              <span className="min-w-0 truncate text-sm font-semibold">{a.label}</span>
            </div>
          ))}
        </div>
      </Surface>

      <Surface className="p-0">
        <SectionHeader title="Configuración" />
        <ul className="divide-y divide-border">
          {[
            { icon: Settings, label: "Preferencias de estudio" },
            { icon: Bell, label: "Notificaciones" },
          ].map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className="press flex min-h-14 w-full items-center gap-3 px-6 text-left text-sm font-medium hover:bg-muted"
              >
                <item.icon className="size-5 text-muted-foreground" />
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="press flex min-h-14 w-full items-center gap-3 px-6 text-left text-sm font-semibold text-destructive hover:bg-destructive/10"
            >
              <LogOut className="size-5" /> Cerrar sesión
            </button>
          </li>
        </ul>
        <div className="p-6 pt-3">
          <Pill tone="primary">El tema oscuro se cambia desde la barra superior</Pill>
        </div>
      </Surface>
    </div>
  );
}
