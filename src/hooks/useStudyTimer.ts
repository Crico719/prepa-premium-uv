import { useEffect, useRef } from "react";
import { addStudyTime } from "@/lib/gamification";

export function useStudyTimer() {
  const lastTick = useRef<number>(Date.now());
  const savedRef = useRef(false);

  useEffect(() => {
    lastTick.current = Date.now();

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastTick.current;
      if (elapsed >= 30_000) {
        const minutes = Math.floor(elapsed / 60_000);
        if (minutes > 0) {
          addStudyTime(minutes);
          lastTick.current = now;
        }
      }
    }, 30_000);

    const handleVisibility = () => {
      if (document.visibilityState === "hidden" && !savedRef.current) {
        const now = Date.now();
        const elapsed = now - lastTick.current;
        const minutes = Math.floor(elapsed / 60_000);
        if (minutes > 0) {
          addStudyTime(minutes);
        }
        savedRef.current = true;
      } else if (document.visibilityState === "visible") {
        lastTick.current = Date.now();
        savedRef.current = false;
      }
    };

    const handleBeforeUnload = () => {
      const now = Date.now();
      const elapsed = now - lastTick.current;
      const minutes = Math.floor(elapsed / 60_000);
      if (minutes > 0) {
        addStudyTime(minutes);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
}
