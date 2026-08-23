const STORAGE_KEY = "prepa_gamification";

export type QuizResult = {
  course: string;
  score: number;
  correct: number;
  total: number;
  date: string;
  type: "curso" | "simulacro";
};

export type DailyStudy = {
  date: string;
  minutes: number;
};

export type GamificationData = {
  xp: number;
  level: number;
  totalTimeMinutes: number;
  dailyStudy: DailyStudy[];
  quizHistory: QuizResult[];
  totalQuizzes: number;
};

const DEFAULT: GamificationData = {
  xp: 0,
  level: 1,
  totalTimeMinutes: 0,
  dailyStudy: [],
  quizHistory: [],
  totalQuizzes: 0,
};

export function getGamification(): GamificationData {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT;
    return { ...DEFAULT, ...JSON.parse(raw) };
  } catch {
    return DEFAULT;
  }
}

export function saveGamification(data: GamificationData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addStudyTime(minutes: number) {
  if (minutes <= 0) return;
  const data = getGamification();
  const today = new Date().toISOString().slice(0, 10);
  const existing = data.dailyStudy.find((d) => d.date === today);
  if (existing) {
    existing.minutes += minutes;
  } else {
    data.dailyStudy.push({ date: today, minutes });
  }
  data.totalTimeMinutes += minutes;
  saveGamification(data);
}

export function recordQuizResult(result: QuizResult) {
  const data = getGamification();
  data.quizHistory.push(result);
  data.totalQuizzes += 1;

  const xpEarned = Math.round(result.score * 1.5 + (result.total * 0.5));
  data.xp += xpEarned;
  data.level = getLevelFromXP(data.xp);

  saveGamification(data);
  return xpEarned;
}

function getLevelFromXP(xp: number): number {
  if (xp < 100) return 1;
  if (xp < 300) return 2;
  if (xp < 600) return 3;
  if (xp < 1000) return 4;
  if (xp < 1500) return 5;
  if (xp < 2200) return 6;
  if (xp < 3000) return 7;
  if (xp < 4000) return 8;
  if (xp < 5200) return 9;
  if (xp < 6500) return 10;
  if (xp < 8000) return 11;
  if (xp < 10000) return 12;
  if (xp < 12500) return 13;
  if (xp < 15000) return 14;
  if (xp < 18000) return 15;
  return Math.floor(xp / 1200) + 1;
}

export function getXPForNextLevel(level: number): number {
  const thresholds = [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5200, 6500, 8000, 10000, 12500, 15000, 18000];
  if (level < thresholds.length) return thresholds[level]!;
  return level * 1200;
}

export function getXPForCurrentLevel(level: number): number {
  return getXPForNextLevel(level - 1);
}

export function getAverageScore(): number {
  const data = getGamification();
  if (data.quizHistory.length === 0) return 0;
  const sum = data.quizHistory.reduce((s, q) => s + q.score, 0);
  return Math.round(sum / data.quizHistory.length);
}

export function getWeeklyStudy(): DailyStudy[] {
  const data = getGamification();
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 86400000);
  return data.dailyStudy.filter((d) => new Date(d.date) >= weekAgo);
}

export function getTotalHours(): string {
  const data = getGamification();
  const hours = data.totalTimeMinutes / 60;
  return hours < 1 ? `${data.totalTimeMinutes} min` : `${hours.toFixed(1)} h`;
}

export function getWeeklyHours(): string {
  const weekly = getWeeklyStudy();
  const totalMin = weekly.reduce((s, d) => s + d.minutes, 0);
  const hours = totalMin / 60;
  return hours < 1 ? `${totalMin} min` : `${hours.toFixed(1)} h`;
}

export function getWeeklyMinutesByDay(): { day: string; horas: number }[] {
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const data = getGamification();
  const result: { day: string; horas: number }[] = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const entry = data.dailyStudy.find((x) => x.date === dateStr);
    result.push({ day: dayNames[d.getDay()]!, horas: Number(((entry?.minutes ?? 0) / 60).toFixed(1)) });
  }
  return result;
}

export function getSimulacroCount(): number {
  const data = getGamification();
  return data.quizHistory.filter((q) => q.type === "simulacro").length;
}

export function getRanking(): { name: string; xp: number; isUser: boolean }[] {
  const data = getGamification();
  const fakeUsers = [
    { name: "Camila Torres", xp: 4820 },
    { name: "Renzo Aguilar", xp: 3980 },
    { name: "María Fernanda", xp: 3720 },
    { name: "Juan Pablo", xp: 3510 },
    { name: "Sofía RAMÍREZ", xp: 3200 },
    { name: "Diego López", xp: 2900 },
    { name: "Valentina Cruz", xp: 2600 },
    { name: "Andrés Molina", xp: 2300 },
    { name: "Luciana Peña", xp: 2000 },
    { name: "Mateo Vargas", xp: 1700 },
  ];

  const all = [...fakeUsers.map((u) => ({ ...u, isUser: false })), { name: "Tú", xp: data.xp, isUser: true }];
  all.sort((a, b) => b.xp - a.xp);
  return all.slice(0, 10);
}

export function getUserRank(): number {
  const ranking = getRanking();
  const idx = ranking.findIndex((r) => r.isUser);
  return idx >= 0 ? idx + 1 : ranking.length + 1;
}
