import { createFileRoute } from "@tanstack/react-router";
import { Brain, Clock, Focus, HeartPulse, Sparkles } from "lucide-react";
import { IconTile, Pill, SectionHeader, Surface } from "@/components/kit";
import { strategies } from "@/lib/data";

export const Route = createFileRoute("/estrategias")({
  head: () => ({
    meta: [
      { title: "Estrategias y hábitos de estudio | Rumbo" },
      {
        name: "description",
        content:
          "Pomodoro, técnica Feynman, planificador semanal, control de ansiedad y gestión del tiempo para estudiar mejor cada día.",
      },
      { property: "og:title", content: "Hábitos y estrategias de estudio" },
      {
        property: "og:description",
        content: "Métodos probados para concentrarte, planificar y sostener tu rutina.",
      },
    ],
  }),
  component: Estrategias,
});

const tones: Array<"primary" | "success" | "warning" | "deep"> = [
  "primary",
  "success",
  "warning",
  "deep",
];
const icons = [Clock, Brain, Sparkles, HeartPulse];

function Estrategias() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Estrategias y hábitos"
        subtitle="Estudiar mejor importa más que estudiar más"
      />

      <Surface className="grid gap-6 border-none bg-primary text-primary-foreground sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <p className="text-sm opacity-90">Sesión Pomodoro sugerida</p>
          <p className="mt-2 text-4xl font-bold tracking-tight tabular-nums">25:00</p>
          <p className="mt-2 text-sm opacity-90">
            4 bloques de enfoque · descansos de 5 minutos
          </p>
          <button
            type="button"
            className="press mt-5 min-h-11 rounded-[18px] bg-white px-6 text-sm font-semibold text-primary"
          >
            Iniciar enfoque
          </button>
        </div>
        <span className="grid size-28 place-items-center justify-self-center rounded-full bg-white/15">
          <Focus className="size-12" strokeWidth={1.5} />
        </span>
      </Surface>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {strategies.map((s, i) => (
          <Surface key={s.title} className="hover-lift flex h-full flex-col gap-3">
            <IconTile
              icon={icons[i % 4]!}
              tone={tones[i % 4]!}
            />
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.detail}</p>
            <div className="mt-auto pt-2">
              <Pill tone={tones[i % 4]!}>{s.tag}</Pill>
            </div>
          </Surface>
        ))}
      </div>

      <Surface>
        <SectionHeader title="Planificador semanal" subtitle="Tu plan de estudio ideal" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((d, i) => (
            <div key={d} className="rounded-[18px] border border-border p-4">
              <p className="text-sm font-semibold">{d}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {["Matemáticas", "Verbal", "Física", "Química", "Historia", "Simulacro", "Repaso"][i]}
              </p>
              <p className="mt-2 text-xs font-semibold text-primary">
                {[3, 2, 3, 2, 2, 4, 1][i]} h
              </p>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  );
}
