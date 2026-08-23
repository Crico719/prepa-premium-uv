import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
  ExternalLink,
  GraduationCap,
  MapPin,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import { IconTile, Pill, SectionHeader, Surface } from "@/components/kit";
import { universities, type University } from "@/lib/data";

export const Route = createFileRoute("/universidades")({
  head: () => ({
    meta: [
      { title: "Universidades y admisión | Rumbo" },
      {
        name: "description",
        content:
          "Información real de admisión: fechas, costos, vacantes, áreas y puntajes de las principales universidades del Perú.",
      },
    ],
  }),
  component: Universidades,
});

function UniversityCard({ u }: { u: University }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <Surface className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <IconTile icon={GraduationCap} tone="deep" />
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold">{u.name}</h3>
            <p className="truncate text-sm text-muted-foreground">{u.full}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="size-3" /> {u.location}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Target className="size-3" /> {u.score} pts mín.</span>
            </div>
          </div>
          <Pill tone="warning">{u.date}</Pill>
        </div>

        <dl className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-[14px] border border-border p-2.5">
            <dt className="text-[10px] text-muted-foreground">Vacantes</dt>
            <dd className="text-sm font-bold">{u.vacancies.toLocaleString()}</dd>
          </div>
          <div className="rounded-[14px] border border-border p-2.5">
            <dt className="text-[10px] text-muted-foreground">Examen</dt>
            <dd className="text-xs font-bold">{u.examDate.split(" ")[0]} {u.examDate.split(" ")[1]}</dd>
          </div>
          <div className="rounded-[14px] border border-border p-2.5">
            <dt className="text-[10px] text-muted-foreground">Costo</dt>
            <dd className="text-xs font-bold">{u.cost}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="press flex min-h-10 items-center justify-center gap-1 rounded-[14px] border border-border text-sm font-semibold hover:bg-muted"
        >
          {expanded ? "Ocultar detalle" : "Ver detalle completo"}
          {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </button>

        {expanded && (
          <div className="space-y-4 rounded-[14px] border border-border bg-muted/50 p-4 text-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Examen</p>
                <p>{u.examDate}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Inscripción</p>
                <p>{u.inscriptionDate}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Costo de inscripción</p>
                <p>{u.inscriptionCost}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">Ubicación</p>
                <p>{u.location}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1">Formato del examen</p>
              <p>{u.examFormat}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1">Sistema de puntaje</p>
              <p>{u.scoring}</p>
            </div>

            {u.areas && u.areas.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">Áreas y carreras</p>
                <div className="space-y-2">
                  {u.areas.map((area) => (
                    <div key={area.name} className="rounded-xl border border-border bg-background p-3">
                      <p className="font-semibold text-xs">{area.name}</p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {area.careers.map((c) => (
                          <span key={c} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {u.url && (
              <a
                href={u.url}
                target="_blank"
                rel="noopener noreferrer"
                className="press flex min-h-10 items-center justify-center gap-2 rounded-[14px] bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Sitio oficial de admisión <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        )}
      </Surface>
    </li>
  );
}

function Universidades() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Universidades y admisión"
        subtitle="Información real del proceso de admisión 2026"
      />

      <ul className="grid gap-4 md:grid-cols-2">
        {universities.map((u) => (
          <UniversityCard key={u.name} u={u} />
        ))}
      </ul>

      <Surface>
        <SectionHeader title="Cronograma general" subtitle="Fechas clave admisión 2026" />
        <div className="space-y-3">
          {universities
            .filter((u) => u.name !== "UNH" && u.name !== "UNCA")
            .sort((a, b) => {
              const parseDate = (s: string) => {
                const months: Record<string, number> = { Ene: 0, Feb: 1, Mar: 2, Abr: 3, May: 4, Jun: 5, Jul: 6, Ago: 7, Sep: 8, Oct: 9, Nov: 10, Dic: 11 };
                const parts = s.replace(/\d+/, "").trim().split(" ");
                const month = months[parts[0] || ""] ?? 0;
                return month;
              };
              return parseDate(a.date) - parseDate(b.date);
            })
            .map((u) => (
              <div key={u.name} className="flex items-center gap-3">
                <IconTile icon={CalendarDays} tone="warning" className="size-10 rounded-[14px]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{u.name}</p>
                  <p className="text-xs text-muted-foreground">{u.examDate}</p>
                </div>
                <Pill tone="primary">{u.cost.split(" ")[0]} {u.cost.split(" ")[1]}</Pill>
              </div>
            ))}
        </div>
      </Surface>

      <Surface className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <IconTile icon={Compass} tone="success" className="size-14 rounded-[20px]" />
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold">¿No sabes qué carrera elegir?</h3>
          <p className="text-sm text-muted-foreground">
            Responde 15 preguntas y descubre qué carreras encajan con tus intereses y fortalezas.
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
