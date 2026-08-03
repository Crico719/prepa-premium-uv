import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, History, Timer, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IconTile, Pill, ProgressBar, ProgressRing, SectionHeader, StatCard, Surface } from "@/components/kit";
import { mocks } from "@/lib/data";

export const Route = createFileRoute("/simulacros")({
  head: () => ({
    meta: [
      { title: "Simulacros cronometrados | Rumbo" },
      {
        name: "description",
        content:
          "Rinde simulacros tipo UNI, San Marcos y Católica con cronómetro, resultados por área, explicaciones y errores frecuentes.",
      },
      { property: "og:title", content: "Simulacros de admisión con resultados detallados" },
      {
        property: "og:description",
        content: "Practica bajo presión real y compara tus puntajes históricos.",
      },
    ],
  }),
  component: Simulacros,
});

const areas = [
  { area: "Matemáticas", score: 92 },
  { area: "Física", score: 78 },
  { area: "Química", score: 65 },
  { area: "Verbal", score: 85 },
  { area: "Biología", score: 71 },
];

function Simulacros() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Simulacros" subtitle="Pon a prueba tus conocimientos" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={TrendingUp} label="Último puntaje" value="86 / 100" tone="success" />
        <StatCard icon={Timer} label="Tiempo promedio" value="2 h 41 min" />
        <StatCard icon={History} label="Simulacros rendidos" value="15" tone="deep" />
        <StatCard icon={AlertTriangle} label="Errores frecuentes" value="Química" tone="warning" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <Surface className="flex flex-col items-center gap-4 text-center">
          <h2 className="self-start text-lg font-semibold">Tu último resultado</h2>
          <ProgressRing value={86} size={160} caption="de 100" />
          <p className="text-sm text-muted-foreground">¡Excelente trabajo! Subiste 8 puntos.</p>
          <dl className="grid w-full grid-cols-3 gap-3 pt-2 text-center">
            {[
              ["Correctas", "86", "success"],
              ["Incorrectas", "14", "warning"],
              ["En blanco", "0", "primary"],
            ].map(([label, value, tone]) => (
              <div key={label} className="rounded-[16px] border border-border p-3">
                <dt className="text-xs text-muted-foreground">{label}</dt>
                <dd className="text-lg font-bold">
                  <Pill tone={tone as "success"}>{value}</Pill>
                </dd>
              </div>
            ))}
          </dl>
        </Surface>

        <Surface>
          <h2 className="mb-4 text-lg font-semibold">Desempeño por área</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={areas} margin={{ left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="area" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} domain={[0, 100]} />
                <Tooltip
                  cursor={{ fill: "var(--color-muted)" }}
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-card)",
                  }}
                />
                <Bar dataKey="score" radius={[10, 10, 10, 10]} barSize={26}>
                  {areas.map((a) => (
                    <Cell
                      key={a.area}
                      fill={a.score >= 80 ? "var(--color-success)" : a.score >= 70 ? "var(--color-primary)" : "var(--color-warning)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Surface>
      </div>

      <section>
        <SectionHeader title="Banco de simulacros" subtitle="Elige tu próximo reto" />
        <ul className="grid gap-4 md:grid-cols-2">
          {mocks.map((m) => (
            <li key={m.name}>
              <Surface className="hover-lift flex h-full flex-col gap-3">
                <div className="flex items-start gap-3">
                  <IconTile icon={Timer} tone={m.level === "Difícil" ? "warning" : "primary"} />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold">{m.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {m.questions} preguntas · {m.minutes} min
                    </p>
                  </div>
                  <Pill tone={m.level === "Difícil" ? "warning" : m.level === "Medio" ? "primary" : "success"}>
                    {m.level}
                  </Pill>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs font-semibold text-muted-foreground">
                    <span>Mejor puntaje</span>
                    <span>{m.score}/100</span>
                  </div>
                  <ProgressBar value={m.score} tone="success" />
                </div>
                <button
                  type="button"
                  className="press mt-auto min-h-11 rounded-[18px] bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Comenzar
                </button>
              </Surface>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
