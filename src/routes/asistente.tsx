import { createFileRoute } from "@tanstack/react-router";
import { Chat } from "@/components/kit/Chat";

export const Route = createFileRoute("/asistente")({
  head: () => ({
    meta: [
      { title: "PrepaBot · Rumbo" },
      {
        name: "description",
        content: "PrepaBot - Tu tutor IA para estudiar y prepararte para el examen de admisión.",
      },
    ],
  }),
  component: AsistentePage,
});

function AsistentePage() {
  return <Chat />;
}
