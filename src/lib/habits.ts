const HABITS_KEY = "prepa_habits";

export type DailyHabit = {
  id: string;
  label: string;
  icon: string;
  completedDates: string[];
};

export type HabitsData = {
  habits: DailyHabit[];
  weeklyGoalHours: number;
  pomodoroSessions: { date: string; count: number }[];
};

const DEFAULT_HABITS: DailyHabit[] = [
  { id: "study", label: "Estudiar 2 horas", icon: "📚", completedDates: [] },
  { id: "quiz", label: "Hacer un simulacro o quiz", icon: "🎯", completedDates: [] },
  { id: "review", label: "Revisar errores anteriores", icon: "🔄", completedDates: [] },
  { id: "notes", label: "Hacer resúmenes o apuntes", icon: "📝", completedDates: [] },
  { id: "sleep", label: "Dormir 7+ horas", icon: "😴", completedDates: [] },
  { id: "exercise", label: "Hacer ejercicio o caminar", icon: "🏃", completedDates: [] },
];

const DEFAULT: HabitsData = {
  habits: DEFAULT_HABITS,
  weeklyGoalHours: 20,
  pomodoroSessions: [],
};

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

export function getHabits(): HabitsData {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(HABITS_KEY);
    if (!raw) return DEFAULT;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT, ...parsed, habits: parsed.habits || DEFAULT_HABITS };
  } catch {
    return DEFAULT;
  }
}

export function saveHabits(data: HabitsData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(HABITS_KEY, JSON.stringify(data));
}

export function toggleHabit(habitId: string) {
  const data = getHabits();
  const today = getToday();
  const habit = data.habits.find((h) => h.id === habitId);
  if (!habit) return data;

  const idx = habit.completedDates.indexOf(today);
  if (idx >= 0) {
    habit.completedDates.splice(idx, 1);
  } else {
    habit.completedDates.push(today);
  }
  saveHabits(data);
  return data;
}

export function isHabitCompletedToday(habitId: string): boolean {
  const data = getHabits();
  const today = getToday();
  const habit = data.habits.find((h) => h.id === habitId);
  return habit?.completedDates.includes(today) ?? false;
}

export function getTodayCompletion(): number {
  const data = getHabits();
  const today = getToday();
  const completed = data.habits.filter((h) => h.completedDates.includes(today)).length;
  return Math.round((completed / data.habits.length) * 100);
}

export function getStreakForHabit(habitId: string): number {
  const data = getHabits();
  const habit = data.habits.find((h) => h.id === habitId);
  if (!habit) return 0;

  let streak = 0;
  const d = new Date();
  while (true) {
    const dateStr = d.toISOString().slice(0, 10);
    if (habit.completedDates.includes(dateStr)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

export function getWeeklyGoalProgress(): { current: number; goal: number; pct: number } {
  const data = getHabits();
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 86400000);
  const totalPomodoros = data.pomodoroSessions
    .filter((s) => new Date(s.date) >= weekAgo)
    .reduce((sum, s) => sum + s.count, 0);
  const studyHours = (totalPomodoros * 25) / 60;
  const pct = Math.min(Math.round((studyHours / data.weeklyGoalHours) * 100), 100);
  return { current: Number(studyHours.toFixed(1)), goal: data.weeklyGoalHours, pct };
}

export function recordPomodoroSession() {
  const data = getHabits();
  const today = getToday();
  const existing = data.pomodoroSessions.find((s) => s.date === today);
  if (existing) {
    existing.count += 1;
  } else {
    data.pomodoroSessions.push({ date: today, count: 1 });
  }
  saveHabits(data);
}

export function getDailyHistory(): { date: string; completed: number; total: number }[] {
  const data = getHabits();
  const result: { date: string; completed: number; total: number }[] = [];
  const total = data.habits.length;

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const completed = data.habits.filter((h) => h.completedDates.includes(dateStr)).length;
    result.push({ date: dateStr, completed, total });
  }
  return result;
}

export function setWeeklyGoal(hours: number) {
  const data = getHabits();
  data.weeklyGoalHours = hours;
  saveHabits(data);
}
