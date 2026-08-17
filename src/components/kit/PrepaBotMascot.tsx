import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type MascotState = "idle" | "thinking" | "happy" | "confused" | "waving" | "explaining";

interface PrepaBotMascotProps {
  state?: MascotState;
  size?: number;
  className?: string;
}

export function PrepaBotMascot({ state = "idle", size = 120, className }: PrepaBotMascotProps) {
  const [currentState, setCurrentState] = useState<MascotState>(state);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    setCurrentState(state);
  }, [state]);

  useEffect(() => {
    if (currentState !== "idle") return;
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [currentState]);

  const animationClass = {
    idle: "animate-idle",
    thinking: "animate-thinking",
    happy: "animate-happy",
    confused: "animate-confused",
    waving: "animate-waving",
    explaining: "animate-explaining",
  }[currentState];

  return (
    <div className={cn("relative inline-block", className)}>
      <svg
        viewBox="0 0 120 160"
        width={size}
        height={size * 1.33}
        className={cn("drop-shadow-lg", animationClass)}
      >
        {/* Antenna */}
        <g className="animate-antenna">
          <line x1="60" y1="25" x2="60" y2="8" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="6" r="4" fill="#ef4444" className="animate-antenna-glow" />
        </g>

        {/* Head */}
        <rect x="25" y="25" width="70" height="55" rx="18" fill="#a1a1aa" />
        <rect x="28" y="28" width="64" height="49" rx="15" fill="#d4d4d8" />

        {/* Eyes */}
        <g>
          {blink ? (
            <>
              <line x1="40" y1="50" x2="50" y2="50" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="70" y1="50" x2="80" y2="50" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="45" cy="48" r="8" fill="white" />
              <circle cx="75" cy="48" r="8" fill="white" />
              <circle cx={currentState === "confused" ? "43" : "46"} cy="48" r="4.5" fill="#18181b" />
              <circle cx={currentState === "confused" ? "73" : "76"} cy="48" r="4.5" fill="#18181b" />
              <circle cx="47.5" cy="46" r="1.5" fill="white" />
              <circle cx="77.5" cy="46" r="1.5" fill="white" />
            </>
          )}
        </g>

        {/* Eyebrows */}
        {currentState === "thinking" && (
          <>
            <line x1="38" y1="38" x2="52" y2="36" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
            <line x1="68" y1="36" x2="82" y2="38" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
        {currentState === "confused" && (
          <>
            <line x1="38" y1="36" x2="52" y2="39" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
            <line x1="68" y1="39" x2="82" y2="36" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
          </>
        )}

        {/* Mouth */}
        {currentState === "happy" ? (
          <path d="M 45 62 Q 60 75 75 62" fill="none" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
        ) : currentState === "confused" ? (
          <path d="M 48 65 Q 55 62 60 65 Q 65 68 72 65" fill="none" stroke="#18181b" strokeWidth="2" strokeLinecap="round" />
        ) : currentState === "thinking" ? (
          <ellipse cx="60" cy="64" rx="5" ry="3" fill="#18181b" />
        ) : (
          <path d="M 48 63 Q 60 70 72 63" fill="none" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
        )}

        {/* Body */}
        <rect x="30" y="82" width="60" height="45" rx="10" fill="#a1a1aa" />
        <rect x="33" y="85" width="54" height="39" rx="8" fill="#d4d4d8" />

        {/* Chest panel */}
        <rect x="42" y="90" width="36" height="16" rx="4" fill="#e4e4e7" />
        <circle cx="52" cy="98" r="3" fill="#22c55e" className="animate-pulse-dot" />
        <circle cx="60" cy="98" r="3" fill="#3b82f6" />
        <circle cx="68" cy="98" r="3" fill="#ef4444" />

        {/* Red Tie */}
        <polygon points="60,82 54,95 60,105 66,95" fill="#dc2626" />
        <polygon points="60,82 56,90 60,95 64,90" fill="#ef4444" />

        {/* Arms */}
        <g className={currentState === "waving" ? "animate-wave-right" : ""}>
          <rect x="10" y="88" width="20" height="10" rx="5" fill="#a1a1aa" />
          <circle cx="12" cy="93" r="7" fill="#d4d4d8" />
        </g>
        <g className={currentState === "waving" ? "animate-wave-left" : currentState === "explaining" ? "animate-explain-left" : ""}>
          <rect x="90" y="88" width="20" height="10" rx="5" fill="#a1a1aa" />
          <circle cx="108" cy="93" r="7" fill="#d4d4d8" />
        </g>

        {/* Legs */}
        <rect x="40" y="127" width="14" height="22" rx="5" fill="#a1a1aa" />
        <rect x="66" y="127" width="14" height="22" rx="5" fill="#a1a1aa" />
        <rect x="38" y="145" width="18" height="8" rx="4" fill="#71717a" />
        <rect x="64" y="145" width="18" height="8" rx="4" fill="#71717a" />

        {/* Ear pieces */}
        <circle cx="22" cy="50" r="6" fill="#71717a" />
        <circle cx="98" cy="50" r="6" fill="#71717a" />
      </svg>

      {/* Floating reactions */}
      {currentState === "happy" && (
        <div className="absolute -right-2 -top-2 animate-float-up">
          <span className="text-2xl">✨</span>
        </div>
      )}
      {currentState === "thinking" && (
        <div className="absolute -right-1 top-0 animate-float-dots">
          <span className="text-lg">💭</span>
        </div>
      )}
      {currentState === "confused" && (
        <div className="absolute -right-1 top-0 animate-bounce">
          <span className="text-lg">❓</span>
        </div>
      )}
      {currentState === "waving" && (
        <div className="absolute -right-2 top-2 animate-float-up">
          <span className="text-lg">👋</span>
        </div>
      )}
    </div>
  );
}
