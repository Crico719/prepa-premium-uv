import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useRef, useState } from "react";
import {
  Flame,
  Heart,
  MessageCircle,
  Search,
  Send,
  Trophy,
  X,
} from "lucide-react";
import { IconTile, Pill, ProgressBar, SectionHeader, Surface } from "@/components/kit";
import { communityPosts as initialPosts, ranking } from "@/lib/data";

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

type Post = {
  id: string;
  author: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  liked: boolean;
  commentList: { author: string; text: string }[];
};

const ALL_TAGS = [
  "Matemáticas", "Física", "Verbal", "Química", "Biología",
  "Historia", "Simulacro UNI", "San Marcos", "Apuntes", "Racha", "General",
];

let nextId = 100;

function PostCard({
  post,
  onLike,
  onComment,
}: {
  post: Post;
  onLike: (id: string) => void;
  onComment: (id: string, text: string) => void;
}) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const submitComment = () => {
    if (!newComment.trim()) return;
    onComment(post.id, newComment.trim());
    setNewComment("");
  };

  return (
    <li>
      <Surface className="hover-lift space-y-3">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {post.author.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{post.author}</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed">{post.content}</p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Pill key={t} tone="primary">{t}</Pill>
            ))}
          </div>
        )}

        <div className="flex gap-4 pt-1 text-xs font-semibold text-muted-foreground">
          <button
            type="button"
            onClick={() => onLike(post.id)}
            className={`press flex min-h-11 items-center gap-1.5 transition-colors ${
              post.liked ? "text-destructive" : "hover:text-destructive"
            }`}
          >
            <Heart className="size-4" fill={post.liked ? "currentColor" : "none"} />{" "}
            {post.likes}
          </button>
          <button
            type="button"
            onClick={() => setShowComments(!showComments)}
            className="press flex min-h-11 items-center gap-1.5 hover:text-primary"
          >
            <MessageCircle className="size-4" /> {post.comments}
          </button>
        </div>

        {showComments && (
          <div className="space-y-3 border-t border-border pt-3">
            {post.commentList.length === 0 && (
              <p className="text-xs text-muted-foreground">Sé el primero en comentar</p>
            )}
            {post.commentList.map((c, i) => (
              <div key={i} className="flex gap-2">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                  {c.author.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold">{c.author}</p>
                  <p className="text-xs text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitComment()}
                placeholder="Escribe un comentario..."
                className="min-h-10 flex-1 rounded-[14px] border border-border bg-muted/50 px-3 text-xs outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={submitComment}
                disabled={!newComment.trim()}
                className="press grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-40"
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>
        )}
      </Surface>
    </li>
  );
}

function Comunidad() {
  const [posts, setPosts] = useState<Post[]>(() =>
    initialPosts.map((p, i) => ({
      id: String(i),
      author: p.author,
      content: p.text,
      tags: p.tags,
      likes: p.likes,
      comments: p.comments,
      liked: false,
      commentList: [],
    }))
  );
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [newPost, setNewPost] = useState("");
  const [newTags, setNewTags] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleLike = useCallback((id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) }
          : p
      )
    );
  }, []);

  const handleComment = useCallback((id: string, text: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              comments: p.comments + 1,
              commentList: [...p.commentList, { author: "Daniel", text }],
            }
          : p
      )
    );
  }, []);

  const handlePublish = useCallback(() => {
    if (!newPost.trim()) return;
    const post: Post = {
      id: String(nextId++),
      author: "Daniel",
      content: newPost.trim(),
      tags: newTags,
      likes: 0,
      comments: 0,
      liked: false,
      commentList: [],
    };
    setPosts((prev) => [post, ...prev]);
    setNewPost("");
    setNewTags([]);
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }, [newPost, newTags]);

  const toggleTag = useCallback((tag: string) => {
    setNewTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }, []);

  const filtered = posts.filter((p) => {
    const matchSearch =
      !search ||
      p.content.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase());
    const matchTag = !activeTag || p.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className="space-y-8">
      <SectionHeader title="Comunidad" subtitle="Nadie ingresa solo" />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          {/* Crear post */}
          <Surface className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                D
              </span>
              <textarea
                ref={textareaRef}
                value={newPost}
                onChange={(e) => {
                  setNewPost(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;
                }}
                placeholder="¿Qué quieres compartir con la comunidad?"
                rows={2}
                className="min-h-10 flex-1 resize-none rounded-[14px] border border-border bg-muted/50 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            {newTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pl-13">
                {newTags.map((t) => (
                  <Pill key={t} tone="primary">
                    {t}{" "}
                    <button type="button" onClick={() => toggleTag(t)} className="ml-1 opacity-60 hover:opacity-100">
                      <X className="size-3" />
                    </button>
                  </Pill>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between gap-2 pl-13">
              <div className="flex flex-wrap gap-1.5">
                {ALL_TAGS.slice(0, 5).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTag(t)}
                    className={`press rounded-full border px-2.5 py-1 text-[10px] font-semibold transition-colors ${
                      newTags.includes(t)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={handlePublish}
                disabled={!newPost.trim()}
                className="press min-h-10 shrink-0 rounded-[14px] bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-40"
              >
                Publicar
              </button>
            </div>
          </Surface>

          {/* Búsqueda */}
          <label className="surface flex items-center gap-3 p-3">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <span className="sr-only">Buscar en la comunidad</span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre o contenido..."
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="press text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </label>

          {/* Filtros por tag */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`press rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                !activeTag
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-muted"
              }`}
            >
              Todos
            </button>
            {ALL_TAGS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(activeTag === t ? null : t)}
                className={`press rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  activeTag === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:bg-muted"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Lista de posts */}
          <ul className="space-y-4">
            {filtered.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={handleLike}
                onComment={handleComment}
              />
            ))}
          </ul>

          {filtered.length === 0 && (
            <Surface className="py-12 text-center">
              <p className="text-sm text-muted-foreground">
                No se encontraron publicaciones con esos filtros.
              </p>
            </Surface>
          )}
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
