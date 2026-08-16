import { createFileRoute } from "@tanstack/react-router";
import { Chat } from "@/components/kit/Chat";

export const Route = createFileRoute("/asistente")({
  head: () => ({
    meta: [
      { title: "MaChat · Rumbo" },
      {
        name: "description",
        content: "MaChat - Tu tutor IA para estudiar y prepararte para el examen de admisión.",
      },
    ],
  }),
  component: AsistentePage,
});

function AsistentePage() {
  return <Chat />;
}
