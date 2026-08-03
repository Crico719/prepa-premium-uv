import { createFileRoute } from "@tanstack/react-router";
import { Flame, Heart, MessageCircle, Search, Trophy } from "lucide-react";
import { IconTile, Pill, ProgressBar, SectionHeader, Surface } from "@/components/kit";
import { communityPosts, ranking } from "@/lib/data";

export const Route = createFileRoute("/comunidad")({
  head: () => ({
    meta: [
      { title: "Comunidad de postulantes | Rumbo" },
      {
        name: "description",
        content:
          "Foro de estudiantes, grupos de estudio, ranking semanal, medallas y retos diarios para mantener tu racha.",
      },
      { property: "og:title", content: "Comunidad de postulantes del Perú" },
      {
        property: "og:description",
        content: "Resuelve dudas, comparte apuntes y compite sanamente en el ranking.",
      },
    ],
  }),
  component: Comunidad,
});

function Comunidad() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Comunidad" subtitle="Nadie ingresa solo" />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <label className="surface flex items-center gap-3 p-3">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <span className="sr-only">Buscar en la comunidad</span>
            <input
              type="search"
              placeholder="Buscar en la comunidad"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>

          <ul className="space-y-4">
            {communityPosts.map((post) => (
              <li key={post.author}>
                <Surface className="hover-lift space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {post.author.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.ago}</p>
                    </div>
                  </div>
                  <p className="text-sm">{post.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <Pill key={t} tone="primary">
                        {t}
                      </Pill>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-1 text-xs font-semibold text-muted-foreground">
                    <button type="button" className="press flex min-h-11 items-center gap-1.5 hover:text-primary">
                      <Heart className="size-4" /> {post.likes}
                    </button>
                    <button type="button" className="press flex min-h-11 items-center gap-1.5 hover:text-primary">
                      <MessageCircle className="size-4" /> {post.comments}
                    </button>
                  </div>
                </Surface>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6">
          <Surface>
            <SectionHeader title="Ranking semanal" />
            <ol className="space-y-3">
              {ranking.map((r, i) => (
                <li key={r.name} className="flex items-center gap-3">
                  <span
                    className={
                      i === 0
                        ? "grid size-8 shrink-0 place-items-center rounded-[12px] bg-warning/15 text-sm font-bold text-warning"
                        : "grid size-8 shrink-0 place-items-center rounded-[12px] bg-muted text-sm font-bold text-muted-foreground"
                    }
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">{r.name}</span>
                  <span className="shrink-0 text-sm font-semibold text-primary">{r.xp} XP</span>
                </li>
              ))}
            </ol>
          </Surface>

          <Surface>
            <SectionHeader title="Reto diario" />
            <div className="flex items-center gap-3">
              <IconTile icon={Flame} tone="warning" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">Resuelve 20 preguntas de RM</p>
                <p className="text-xs text-muted-foreground">14 de 20 completadas</p>
              </div>
            </div>
            <ProgressBar value={70} tone="warning" className="mt-4" />
          </Surface>

          <Surface>
            <SectionHeader title="Medallas" />
            <div className="flex flex-wrap gap-3">
              {["Racha 30", "Top 10", "100 lecciones", "Simulacro 90+"].map((m) => (
                <span
                  key={m}
                  className="flex items-center gap-2 rounded-[16px] border border-border px-3 py-2 text-xs font-semibold"
                >
                  <Trophy className="size-4 text-warning" /> {m}
                </span>
              ))}
            </div>
          </Surface>
        </aside>
      </div>
    </div>
  );
}
