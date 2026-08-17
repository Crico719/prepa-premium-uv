import type { ReactNode } from "react";

export type AvatarId =
  | "owl"
  | "fox"
  | "cat"
  | "dog"
  | "panda"
  | "rabbit"
  | "eagle"
  | "bear"
  | "lion"
  | "penguin";

export type AvatarDef = {
  id: AvatarId;
  name: string;
  svg: ReactNode;
  bg: string;
};

function OwlSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="50" r="48" fill="#8B5CF6" />
      <circle cx="35" cy="42" r="14" fill="white" />
      <circle cx="65" cy="42" r="14" fill="white" />
      <circle cx="35" cy="42" r="8" fill="#1e1b4b" />
      <circle cx="65" cy="42" r="8" fill="#1e1b4b" />
      <circle cx="37" cy="40" r="3" fill="white" />
      <circle cx="67" cy="40" r="3" fill="white" />
      <polygon points="50,50 44,58 56,58" fill="#f59e0b" />
      <path d="M20,30 Q35,10 50,25" fill="#7c3aed" />
      <path d="M80,30 Q65,10 50,25" fill="#7c3aed" />
      <ellipse cx="50" cy="75" rx="20" ry="12" fill="#7c3aed" />
    </svg>
  );
}

function FoxSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="55" r="42" fill="#f97316" />
      <polygon points="20,30 35,55 5,55" fill="#f97316" />
      <polygon points="80,30 65,55 95,55" fill="#f97316" />
      <polygon points="20,30 30,50 10,50" fill="white" />
      <polygon points="80,30 70,50 90,50" fill="white" />
      <ellipse cx="50" cy="65" rx="18" ry="14" fill="white" />
      <circle cx="38" cy="48" r="4" fill="#1e1b4b" />
      <circle cx="62" cy="48" r="4" fill="#1e1b4b" />
      <circle cx="39" cy="47" r="1.5" fill="white" />
      <circle cx="63" cy="47" r="1.5" fill="white" />
      <ellipse cx="50" cy="58" rx="4" ry="3" fill="#1e1b4b" />
      <path d="M46,62 Q50,66 54,62" fill="none" stroke="#1e1b4b" strokeWidth="1.5" />
    </svg>
  );
}

function CatSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="55" r="42" fill="#a3a3a3" />
      <polygon points="15,25 30,55 0,50" fill="#a3a3a3" />
      <polygon points="85,25 70,55 100,50" fill="#a3a3a3" />
      <polygon points="15,25 25,48 5,45" fill="#f9a8d4" />
      <polygon points="85,25 75,48 95,45" fill="#f9a8d4" />
      <ellipse cx="50" cy="65" rx="16" ry="10" fill="white" />
      <ellipse cx="38" cy="48" rx="6" ry="7" fill="#bbf7d0" />
      <ellipse cx="62" cy="48" rx="6" ry="7" fill="#bbf7d0" />
      <ellipse cx="38" cy="48" rx="2.5" ry="6" fill="#1e1b4b" />
      <ellipse cx="62" cy="48" rx="2.5" ry="6" fill="#1e1b4b" />
      <ellipse cx="50" cy="58" rx="3" ry="2" fill="#f9a8d4" />
      <line x1="15" y1="55" x2="35" y2="58" stroke="#737373" strokeWidth="1" />
      <line x1="15" y1="60" x2="35" y2="60" stroke="#737373" strokeWidth="1" />
      <line x1="85" y1="55" x2="65" y2="58" stroke="#737373" strokeWidth="1" />
      <line x1="85" y1="60" x2="65" y2="60" stroke="#737373" strokeWidth="1" />
    </svg>
  );
}

function DogSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="55" r="42" fill="#92400e" />
      <ellipse cx="22" cy="40" rx="12" ry="20" fill="#78350f" />
      <ellipse cx="78" cy="40" rx="12" ry="20" fill="#78350f" />
      <ellipse cx="50" cy="65" rx="18" ry="14" fill="#fef3c7" />
      <circle cx="38" cy="48" r="5" fill="#1e1b4b" />
      <circle cx="62" cy="48" r="5" fill="#1e1b4b" />
      <circle cx="39" cy="47" r="2" fill="white" />
      <circle cx="63" cy="47" r="2" fill="white" />
      <ellipse cx="50" cy="58" rx="5" ry="4" fill="#1e1b4b" />
      <path d="M44,64 Q50,70 56,64" fill="none" stroke="#1e1b4b" strokeWidth="2" />
      <circle cx="50" cy="55" r="40" fill="none" stroke="#78350f" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function PandaSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="50" r="48" fill="white" />
      <circle cx="25" cy="30" r="12" fill="#1e1b4b" />
      <circle cx="75" cy="30" r="12" fill="#1e1b4b" />
      <ellipse cx="35" cy="45" rx="12" ry="10" fill="#1e1b4b" />
      <ellipse cx="65" cy="45" rx="12" ry="10" fill="#1e1b4b" />
      <circle cx="35" cy="44" r="4" fill="white" />
      <circle cx="65" cy="44" r="4" fill="white" />
      <circle cx="36" cy="43" r="2" fill="#1e1b4b" />
      <circle cx="66" cy="43" r="2" fill="#1e1b4b" />
      <ellipse cx="50" cy="58" rx="4" ry="3" fill="#1e1b4b" />
      <path d="M44,63 Q50,67 56,63" fill="none" stroke="#1e1b4b" strokeWidth="1.5" />
      <circle cx="42" cy="52" r="4" fill="#fda4af" opacity="0.6" />
      <circle cx="58" cy="52" r="4" fill="#fda4af" opacity="0.6" />
    </svg>
  );
}

function RabbitSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="60" r="38" fill="#f5f5f4" />
      <ellipse cx="35" cy="20" rx="8" ry="22" fill="#f5f5f4" />
      <ellipse cx="65" cy="20" rx="8" ry="22" fill="#f5f5f4" />
      <ellipse cx="35" cy="20" rx="5" ry="18" fill="#fda4af" />
      <ellipse cx="65" cy="20" rx="5" ry="18" fill="#fda4af" />
      <circle cx="38" cy="55" r="4" fill="#1e1b4b" />
      <circle cx="62" cy="55" r="4" fill="#1e1b4b" />
      <circle cx="39" cy="54" r="1.5" fill="white" />
      <circle cx="63" cy="54" r="1.5" fill="white" />
      <ellipse cx="50" cy="65" rx="3" ry="2.5" fill="#fda4af" />
      <path d="M46,68 Q50,72 54,68" fill="none" stroke="#a3a3a3" strokeWidth="1.5" />
      <circle cx="44" cy="60" r="5" fill="#fda4af" opacity="0.4" />
      <circle cx="56" cy="60" r="5" fill="#fda4af" opacity="0.4" />
    </svg>
  );
}

function EagleSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="50" r="48" fill="#78350f" />
      <ellipse cx="50" cy="55" rx="22" ry="18" fill="#fef3c7" />
      <circle cx="38" cy="42" r="5" fill="white" />
      <circle cx="62" cy="42" r="5" fill="white" />
      <circle cx="38" cy="42" r="3" fill="#f59e0b" />
      <circle cx="62" cy="42" r="3" fill="#f59e0b" />
      <circle cx="38" cy="42" r="1.5" fill="#1e1b4b" />
      <circle cx="62" cy="42" r="1.5" fill="#1e1b4b" />
      <polygon points="50,50 44,56 56,56" fill="#f59e0b" />
      <path d="M15,50 Q30,30 50,40" fill="#92400e" />
      <path d="M85,50 Q70,30 50,40" fill="#92400e" />
      <path d="M10,55 Q25,45 45,50" fill="#78350f" />
      <path d="M90,55 Q75,45 55,50" fill="#78350f" />
    </svg>
  );
}

function BearSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="55" r="42" fill="#92400e" />
      <circle cx="22" cy="28" r="14" fill="#92400e" />
      <circle cx="78" cy="28" r="14" fill="#92400e" />
      <circle cx="22" cy="28" r="9" fill="#b45309" />
      <circle cx="78" cy="28" r="9" fill="#b45309" />
      <ellipse cx="50" cy="62" rx="18" ry="14" fill="#b45309" />
      <circle cx="38" cy="48" r="4" fill="#1e1b4b" />
      <circle cx="62" cy="48" r="4" fill="#1e1b4b" />
      <circle cx="39" cy="47" r="1.5" fill="white" />
      <circle cx="63" cy="47" r="1.5" fill="white" />
      <ellipse cx="50" cy="58" rx="5" ry="4" fill="#1e1b4b" />
      <path d="M44,64 Q50,68 56,64" fill="none" stroke="#1e1b4b" strokeWidth="2" />
    </svg>
  );
}

function LionSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="50" r="48" fill="#d97706" />
      <circle cx="50" cy="50" r="38" fill="#fbbf24" />
      <circle cx="38" cy="45" r="4" fill="#1e1b4b" />
      <circle cx="62" cy="45" r="4" fill="#1e1b4b" />
      <circle cx="39" cy="44" r="1.5" fill="white" />
      <circle cx="63" cy="44" r="1.5" fill="white" />
      <ellipse cx="50" cy="55" rx="5" ry="3.5" fill="#92400e" />
      <path d="M44,60 Q50,65 56,60" fill="none" stroke="#92400e" strokeWidth="2" />
      <circle cx="44" cy="52" r="4" fill="#f97316" opacity="0.5" />
      <circle cx="56" cy="52" r="4" fill="#f97316" opacity="0.5" />
      <path d="M50,10 Q55,20 50,28 Q45,20 50,10" fill="#f59e0b" />
    </svg>
  );
}

function PenguinSvg() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      <circle cx="50" cy="50" r="48" fill="#1e1b4b" />
      <ellipse cx="50" cy="58" rx="22" ry="28" fill="white" />
      <circle cx="38" cy="40" r="5" fill="white" />
      <circle cx="62" cy="40" r="5" fill="white" />
      <circle cx="38" cy="40" r="3" fill="#1e1b4b" />
      <circle cx="62" cy="40" r="3" fill="#1e1b4b" />
      <circle cx="39" cy="39" r="1.2" fill="white" />
      <circle cx="63" cy="39" r="1.2" fill="white" />
      <polygon points="50,48 44,54 56,54" fill="#f59e0b" />
      <ellipse cx="30" cy="55" rx="6" ry="14" fill="#1e1b4b" />
      <ellipse cx="70" cy="55" rx="6" ry="14" fill="#1e1b4b" />
      <circle cx="44" cy="50" r="3" fill="#fda4af" opacity="0.5" />
      <circle cx="56" cy="50" r="3" fill="#fda4af" opacity="0.5" />
    </svg>
  );
}

export const avatars: AvatarDef[] = [
  { id: "owl", name: "Búho", svg: <OwlSvg />, bg: "bg-violet-100" },
  { id: "fox", name: "Zorro", svg: <FoxSvg />, bg: "bg-orange-100" },
  { id: "cat", name: "Gato", svg: <CatSvg />, bg: "bg-gray-100" },
  { id: "dog", name: "Perro", svg: <DogSvg />, bg: "bg-amber-100" },
  { id: "panda", name: "Panda", svg: <PandaSvg />, bg: "bg-stone-100" },
  { id: "rabbit", name: "Conejo", svg: <RabbitSvg />, bg: "bg-pink-100" },
  { id: "eagle", name: "Águila", svg: <EagleSvg />, bg: "bg-yellow-100" },
  { id: "bear", name: "Oso", svg: <BearSvg />, bg: "bg-amber-100" },
  { id: "lion", name: "León", svg: <LionSvg />, bg: "bg-yellow-100" },
  { id: "penguin", name: "Pingüino", svg: <PenguinSvg />, bg: "bg-indigo-100" },
];

export function getAvatarById(id: AvatarId): AvatarDef {
  return avatars.find((a) => a.id === id) ?? avatars[0]!;
}
