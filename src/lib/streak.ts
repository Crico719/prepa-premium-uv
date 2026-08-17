const STREAK_KEY = "prepa_streak";

type StreakData = {
  count: number;
  lastDate: string;
};

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function getStreak(): StreakData {
  if (typeof window === "undefined") return { count: 12, lastDate: getToday() };
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { count: 0, lastDate: "" };
    return JSON.parse(raw);
  } catch {
    return { count: 0, lastDate: "" };
  }
}

export function saveStreak(data: StreakData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

export function checkIn(): StreakData {
  const today = getToday();
  const current = getStreak();

  if (current.lastDate === today) {
    return current;
  }

  if (current.lastDate === getYesterday()) {
    const updated = { count: current.count + 1, lastDate: today };
    saveStreak(updated);
    return updated;
  }

  const updated = { count: 1, lastDate: today };
  saveStreak(updated);
  return updated;
}

export function getLast7Days(): { day: string; active: boolean }[] {
  const streak = getStreak();
  const days = [];
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    days.push({
      day: dayNames[d.getDay()],
      active: streak.lastDate === dateStr,
    });
  }

  return days;
}
