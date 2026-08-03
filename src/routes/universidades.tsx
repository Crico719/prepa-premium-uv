import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Compass, GraduationCap, Users, Wallet } from "lucide-react";
import { IconTile, Pill, SectionHeader, Surface } from "@/components/kit";
import { universities } from "@/lib/data";

export const Route = createFileRoute("/universidades")({
  head: () => ({
    meta: [
      { title: "Orientación universitaria | Rumbo" },
      {
        name: "description",
        content:
          "Compara universidades del Perú: puntajes mínimos, vacantes, fechas de examen, costos y test vocacional para elegir tu carrera.",
      },
      { property: "og:title", content: "Universidades, carreras y puntajes mínimos" },
      {
        property: "og:description",
        content: "Toda la información de admisión de UNI, UNMSM, PUCP y UNSA en un solo lugar.",
      },
    ],
  }),
  component: Universidades,
});

const carreras = [
  "Ingeniería de Sistemas",
  "Medicina Humana",
  "Derecho",
  "Arquitectura",
  "Economía",
  "Psicología",
];

function Universidades() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Orientación universitaria"
        subtitle="Elige con información, no con suposiciones"
      />

      <ul className="grid gap-4 md:grid-cols-2">
        {universities.map((u) => (
          <li key={u.name}>
            <Surface className="hover-lift flex h-full flex-col gap-4">
              <div className="flex items-start gap-3">
                <IconTile icon={GraduationCap} tone="deep" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{u.name}</h3>
                  <p className="truncate text-sm text-muted-foreground">{u.full}</p>
                </div>
                <Pill tone="warning">{u.date}</Pill>
              </div>
              <dl className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-[16px] border border-border p-3">
                  <dt className="text-xs text-muted-foreground">Puntaje mín.</dt>
                  <dd className="text-base font-bold">{u.score}</dd>
                </div>
                <div className="rounded-[16px] border border-border p-3">
                  <dt className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Users className="size-3.5" /> Vacantes
                  </dt>
                  <dd className="text-base font-bold">{u.vacancies}</dd>
                </div>
                <div className="rounded-[16px] border border-border p-3">
                  <dt className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Wallet className="size-3.5" /> Costo
                  </dt>
                  <dd className="text-base font-bold">{u.cost}</dd>
                </div>
              </dl>
              <button
                type="button"
                className="press mt-auto min-h-11 rounded-[18px] border border-border text-sm font-semibold hover:bg-muted"
              >
                Ver carreras
              </button>
            </Surface>
          </li>
        ))}
      </ul>

      <div className="grid gap-6 lg:grid-cols-2">
        <Surface>
          <SectionHeader title="Carreras más buscadas" />
          <ul className="flex flex-wrap gap-2">
            {carreras.map((c) => (
              <li key={c}>
                <Pill tone="primary">{c}</Pill>
              </li>
            ))}
          </ul>
        </Surface>

        <Surface>
          <SectionHeader title="Fechas importantes" subtitle="Admisión 2026" />
          <ul className="space-y-3">
            {universities.map((u) => (
              <li key={u.name} className="flex items-center gap-3">
                <IconTile icon={CalendarDays} tone="warning" className="size-10 rounded-[14px]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">Examen {u.name}</p>
                  <p className="text-xs text-muted-foreground">{u.date} · inscripción abierta</p>
                </div>
              </li>
            ))}
          </ul>
        </Surface>
      </div>

      <Surface className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <IconTile icon={Compass} tone="success" className="size-14 rounded-[20px]" />
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">Test vocacional</h3>
          <p className="text-sm text-muted-foreground">
            15 minutos para descubrir qué carreras encajan con tus intereses y fortalezas.
          </p>
        </div>
        <button
          type="button"
          className="press min-h-11 w-full rounded-[18px] bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
        >
          Empezar test
        </button>
      </Surface>
    </div>
  );
}
