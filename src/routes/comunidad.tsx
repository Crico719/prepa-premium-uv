import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { ranking } from "@/lib/data";
import { supabase } from "@/lib/supabase";

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
  likes_count: number;
  comments_count: number;
  created_at: string;
  user_has_liked?: boolean;
};

type Comment = {
  id: string;
  post_id: string;
  author: string;
  content: string;
  created_at: string;
};

const ALL_TAGS = ["Matemáticas", "Física", "Verbal", "Química", "Biología", "Historia", "Simulacro UNI", "Simulacro San Marcos", "Apuntes", "Racha", "General"];

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return "ahora mismo";
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} h`;
  if (diff < 604800) return `hace ${Math.floor(diff / 86400)} días`;
  return `hace ${Math.floor(diff / 604800)} sem`;
}

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
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loadingComments, setLoadingComments] = useState(false);

  const toggleComments = useCallback(async () => {
    if (showComments) {
      setShowComments(false);
      return;
    }
    setShowComments(true);
    setLoadingComments(true);
    const { data } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", post.id)
      .order("created_at", { ascending: true });
    setComments(data ?? []);
    setLoadingComments(false);
  }, [showComments, post.id]);

  const submitComment = useCallback(async () => {
    if (!newComment.trim()) return;
    const text = newComment.trim();
    setNewComment("");
    const { data } = await supabase
      .from("comments")
      .insert({ post_id: post.id, author: "Daniel", content: text })
      .select()
      .single();
    if (data) setComments((prev) => [...prev, data]);
    onComment(post.id, text);
  }, [newComment, post.id, onComment]);

  return (
    <li>
      <Surface className="hover-lift space-y-3">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {post.author.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{post.author}</p>
            <p className="text-xs text-muted-foreground">{timeAgo(post.created_at)}</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed">{post.content}</p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Pill key={t} tone="primary">
                {t}
              </Pill>
            ))}
          </div>
        )}

        <div className="flex gap-4 pt-1 text-xs font-semibold text-muted-foreground">
          <button
            type="button"
            onClick={() => onLike(post.id)}
            className={`press flex min-h-11 items-center gap-1.5 transition-colors ${
              post.user_has_liked ? "text-destructive" : "hover:text-destructive"
            }`}
          >
            <Heart
              className="size-4"
              fill={post.user_has_liked ? "currentColor" : "none"}
            />{" "}
            {post.likes_count}
          </button>
          <button
            type="button"
            onClick={toggleComments}
            className="press flex min-h-11 items-center gap-1.5 hover:text-primary"
          >
            <MessageCircle className="size-4" /> {post.comments_count}
          </button>
        </div>

        {showComments && (
          <div className="space-y-3 border-t border-border pt-3">
            {loadingComments && (
              <p className="text-xs text-muted-foreground">Cargando comentarios...</p>
            )}
            {!loadingComments && comments.length === 0 && (
              <p className="text-xs text-muted-foreground">Sé el primero en comentar</p>
            )}
            {comments.map((c) => (
              <div key={c.id} className="flex gap-2">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-[10px] font-bold text-muted-foreground">
                  {c.author.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold">{c.author}</p>
                  <p className="text-xs text-muted-foreground">{c.content}</p>
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [newPost, setNewPost] = useState("");
  const [newTags, setNewTags] = useState<string[]>([]);
  const [posting, setPosting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fetchPosts = useCallback(async () => {
    const { data: postsData } = await supabase
      .from("community_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!postsData) {
      setPosts([]);
      return;
    }

    const { data: likesData } = await supabase.from("likes").select("post_id");

    const likedPostIds = new Set(likesData?.map((l) => l.post_id) ?? []);

    const enriched = postsData.map((p) => ({
      ...p,
      user_has_liked: likedPostIds.has(p.id),
    }));

    setPosts(enriched);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleLike = useCallback(
    async (postId: string) => {
      const post = posts.find((p) => p.id === postId);
      if (!post) return;

      const alreadyLiked = post.user_has_liked;

      setPosts((prev) =>
        prev.map((p) =>
          p.id === postId
            ? {
                ...p,
                user_has_liked: !alreadyLiked,
                likes_count: p.likes_count + (alreadyLiked ? -1 : 1),
              }
            : p
        )
      );

      if (alreadyLiked) {
        await supabase.from("likes").delete().eq("post_id", postId);
        await supabase.rpc("decrement_likes", { pid: postId });
      } else {
        await supabase.from("likes").insert({ post_id: postId });
        await supabase.rpc("increment_likes", { pid: postId });
      }
    },
    [posts]
  );

  const handleComment = useCallback((_postId: string, _text: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === _postId ? { ...p, comments_count: p.comments_count + 1 } : p
      )
    );
  }, []);

  const handlePublish = useCallback(async () => {
    if (!newPost.trim()) return;
    setPosting(true);
    const { data } = await supabase
      .from("community_posts")
      .insert({
        author: "Daniel",
        content: newPost.trim(),
        tags: newTags,
      })
      .select()
      .single();
    if (data) setPosts((prev) [{ ...data, user_has_liked: false }, ...prev]);
    setNewPost("");
    setNewTags([]);
    setPosting(false);
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }, [newPost, newTags]);

  const toggleTag = useCallback((tag: string) => {
    setNewTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
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
                    <button
                      type="button"
                      onClick={() => toggleTag(t)}
                      className="ml-1 opacity-60 hover:opacity-100"
                    >
                      <X className="size-3" />
                    </button>
                  </Pill>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between pl-13">
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
                disabled={!newPost.trim() || posting}
                className="press min-h-10 rounded-[14px] bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-40"
              >
                {posting ? "Publicando..." : "Publicar"}
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
          {loading && (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Surface key={i} className="animate-pulse space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-muted" />
                    <div className="space-y-1.5">
                      <div className="h-3 w-24 rounded bg-muted" />
                      <div className="h-2.5 w-16 rounded bg-muted" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-3 w-full rounded bg-muted" />
                    <div className="h-3 w-3/4 rounded bg-muted" />
                  </div>
                </Surface>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <Surface className="py-12 text-center">
              <p className="text-sm text-muted-foreground">
                {posts.length === 0
                  ? "Aún no hay publicaciones. ¡Sé el primero!"
                  : "No se encontraron publicaciones con esos filtros."}
              </p>
            </Surface>
          )}

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
