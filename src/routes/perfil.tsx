import { createFileRoute } from "@tanstack/react-router";
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
import { student, weeklyStudy } from "@/lib/data";

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
  const xpPct = Math.round((student.xp / student.xpGoal) * 100);

  return (
    <div className="space-y-8">
      <Surface className="border-none bg-primary text-primary-foreground">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
          <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white/20 text-xl font-bold">
            DA
          </span>
          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold sm:text-2xl">{student.fullName}</h1>
            <p className="text-sm opacity-90">
              Nivel {student.level} · {student.target}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-1 flex justify-between text-xs font-semibold opacity-90">
            <span>XP</span>
            <span>
              {student.xp} / {student.xpGoal}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/25">
            <span className="block h-full rounded-full bg-white" style={{ width: `${xpPct}%` }} />
          </div>
        </div>
      </Surface>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Flame} label="Racha" value={`${student.streak} días`} tone="warning" />
        <StatCard icon={Target} label="Simulacros" value="15" />
        <StatCard icon={Star} label="Puntaje promedio" value="82%" tone="success" />
        <StatCard icon={Timer} label="Tiempo total" value="148 h" tone="deep" />
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
          <ProgressRing value={student.overall} caption="del plan" />
          <ProgressBar value={student.overall} />
          <p className="text-sm text-muted-foreground">
            Mantén 3 horas diarias para llegar al 90% antes del examen.
          </p>
        </Surface>
      </div>

      <Surface>
        <SectionHeader title="Logros e insignias" subtitle="Lo que has conquistado" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Trophy, label: "Top 10 nacional", tone: "warning" as const },
            { icon: Medal, label: "30 días de racha", tone: "success" as const },
            { icon: Award, label: "100 lecciones", tone: "primary" as const },
            { icon: Star, label: "Simulacro 90+", tone: "deep" as const },
          ].map((a) => (
            <div key={a.label} className="flex items-center gap-3 rounded-[18px] border border-border p-4">
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
