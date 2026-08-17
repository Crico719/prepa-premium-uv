import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  BookOpen,
  Bot,
  GraduationCap,
  Home,
  Moon,
  Search,
  Sun,
  Target,
  Timer,
  Users,
  User,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/cursos", label: "Cursos", icon: BookOpen },
  { to: "/simulacros", label: "Simulacros", icon: Target },
  { to: "/estrategias", label: "Hábitos", icon: Timer },
  { to: "/asistente", label: "PrepaBot", icon: Bot },
  { to: "/universidades", label: "Universidades", icon: GraduationCap },
  { to: "/comunidad", label: "Comunidad", icon: Users },
  { to: "/perfil", label: "Perfil", icon: User },
] as const;

const mobileNav = [nav[0], nav[1], nav[2], nav[4], nav[5]];

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function AppShell({ children }: { children: ReactNode }) {
  const { dark, toggle } = useTheme();
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-background">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-sidebar px-4 py-6 lg:flex">
        <Link to="/" className="mb-8 flex items-center gap-3 px-2">
          <span className="grid size-10 place-items-center rounded-[14px] bg-primary text-primary-foreground">
            <GraduationCap className="size-6" />
          </span>
          <span className="text-base leading-tight font-bold tracking-tight">
            Rumbo
            <span className="block text-xs font-medium text-muted-foreground">
              Preparación preuniversitaria
            </span>
          </span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {nav.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "press flex items-center gap-3 rounded-[16px] px-3 py-2.5 text-sm font-medium",
                  active
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                )}
              >
                <item.icon className="size-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="surface mt-6 bg-primary p-4 text-primary-foreground">
          <p className="text-sm font-semibold">Examen UNMSM</p>
          <p className="mt-1 text-xs opacity-90">Faltan 46 días. Sigue tu plan diario.</p>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
          <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
            <label className="flex min-w-0 items-center gap-2 rounded-[16px] border border-border bg-card px-3 py-2">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <span className="sr-only">Buscar en la plataforma</span>
              <input
                type="search"
                placeholder="Buscar cursos, simulacros o temas"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </label>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={toggle}
                aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
                className="press grid size-11 place-items-center rounded-[16px] border border-border bg-card text-muted-foreground hover:text-foreground"
              >
                {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
              </button>
              <button
                type="button"
                aria-label="Notificaciones"
                className="press relative grid size-11 place-items-center rounded-[16px] border border-border bg-card text-muted-foreground hover:text-foreground"
              >
                <Bell className="size-5" />
                <span className="absolute top-2.5 right-3 size-2 rounded-full bg-warning" />
              </button>
              <Link
                to="/perfil"
                aria-label="Ir a mi perfil"
                className="press grid size-11 place-items-center rounded-[16px] bg-primary text-sm font-bold text-primary-foreground"
              >
                D
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 pt-6 pb-28 sm:px-6 lg:pb-12">{children}</main>
      </div>

      <nav
        aria-label="Navegación principal"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 backdrop-blur lg:hidden"
      >
        <ul className="mx-auto flex max-w-lg items-stretch justify-between px-2 py-1.5">
          {mobileNav.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <li key={item.to} className="flex-1">
                <Link
                  to={item.to}
                  className={cn(
                    "press flex min-h-14 flex-col items-center justify-center gap-1 rounded-[16px] px-1 text-[11px] font-medium",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-8 place-items-center rounded-[12px]",
                      active && "bg-primary/10",
                    )}
                  >
                    <item.icon className="size-5" />
                  </span>
                  <span className="truncate">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
