import {
  Atom,
  BookOpen,
  Brain,
  Calculator,
  FlaskConical,
  Globe2,
  Landmark,
  Leaf,
  MessageSquareText,
  Triangle,
  type LucideIcon,
} from "lucide-react";

export type Course = {
  slug: string;
  name: string;
  description: string;
  teacher: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  progress: number;
  lessons: number;
  completedLessons: number;
  hoursLeft: number;
  icon: LucideIcon;
  tone: "primary" | "success" | "warning" | "deep";
};

export const courses: Course[] = [
  {
    slug: "matematicas",
    name: "Matemáticas",
    description: "Álgebra, aritmética y geometría analítica",
    teacher: "Prof. Elena Quispe",
    level: "Avanzado",
    progress: 75,
    lessons: 48,
    completedLessons: 36,
    hoursLeft: 9,
    icon: Calculator,
    tone: "primary",
  },
  {
    slug: "razonamiento-matematico",
    name: "Razonamiento Matemático",
    description: "Sucesiones, planteo de ecuaciones y conteo",
    teacher: "Prof. Iván Rojas",
    level: "Intermedio",
    progress: 62,
    lessons: 40,
    completedLessons: 25,
    hoursLeft: 12,
    icon: Brain,
    tone: "deep",
  },
  {
    slug: "razonamiento-verbal",
    name: "Razonamiento Verbal",
    description: "Comprensión lectora, sinónimos y analogías",
    teacher: "Prof. Lucía Ayala",
    level: "Intermedio",
    progress: 70,
    lessons: 34,
    completedLessons: 24,
    hoursLeft: 7,
    icon: MessageSquareText,
    tone: "success",
  },
  {
    slug: "fisica",
    name: "Física",
    description: "Dinámica, movimiento y termodinámica",
    teacher: "Prof. Marco Vera",
    level: "Avanzado",
    progress: 60,
    lessons: 36,
    completedLessons: 22,
    hoursLeft: 11,
    icon: Atom,
    tone: "primary",
  },
  {
    slug: "quimica",
    name: "Química",
    description: "Enlaces químicos y química orgánica",
    teacher: "Prof. Ana Salas",
    level: "Intermedio",
    progress: 40,
    lessons: 30,
    completedLessons: 12,
    hoursLeft: 14,
    icon: FlaskConical,
    tone: "warning",
  },
  {
    slug: "biologia",
    name: "Biología",
    description: "Biología celular, genética y ecología",
    teacher: "Prof. Rosa Meza",
    level: "Básico",
    progress: 30,
    lessons: 28,
    completedLessons: 8,
    hoursLeft: 16,
    icon: Leaf,
    tone: "success",
  },
  {
    slug: "literatura",
    name: "Literatura",
    description: "Corrientes literarias y obras clave",
    teacher: "Prof. Diego Ponce",
    level: "Básico",
    progress: 45,
    lessons: 22,
    completedLessons: 10,
    hoursLeft: 6,
    icon: BookOpen,
    tone: "deep",
  },
  {
    slug: "historia",
    name: "Historia",
    description: "Perú republicano y procesos mundiales",
    teacher: "Prof. Sofía Nieto",
    level: "Intermedio",
    progress: 80,
    lessons: 26,
    completedLessons: 21,
    hoursLeft: 4,
    icon: Landmark,
    tone: "warning",
  },
  {
    slug: "geografia",
    name: "Geografía",
    description: "Geografía del Perú y geografía general",
    teacher: "Prof. Hugo Lévano",
    level: "Básico",
    progress: 55,
    lessons: 20,
    completedLessons: 11,
    hoursLeft: 5,
    icon: Globe2,
    tone: "primary",
  },
  {
    slug: "cokito-rm",
    name: "Razonamiento Matemático - Cokito RM",
    description: "23 temas de razonamiento matemático para exámenes de admisión",
    teacher: "John Mamani M. (Academia GAUUS)",
    level: "Intermedio",
    progress: 0,
    lessons: 23,
    completedLessons: 0,
    hoursLeft: 45,
    icon: Brain,
    tone: "deep",
  },
  {
    slug: "geometria",
    name: "Geometría",
    description: "Geometría plana y del espacio para exámenes de admisión",
    teacher: "Didy Ricra Osorio (Ed. Cuzcano)",
    level: "Intermedio",
    progress: 0,
    lessons: 17,
    completedLessons: 0,
    hoursLeft: 35,
    icon: Triangle,
    tone: "primary",
  },
];

export const lessons = [
  { title: "Introducción a las ecuaciones", state: "Completado" as const, minutes: 12 },
  { title: "Fórmula general", state: "En progreso" as const, minutes: 18 },
  { title: "Ejercicios prácticos", state: "Pendiente" as const, minutes: 25 },
  { title: "Aplicaciones en problemas", state: "Pendiente" as const, minutes: 22 },
  { title: "Repaso y autoevaluación", state: "Pendiente" as const, minutes: 30 },
];

export const courseLessons: Record<string, { title: string; state: "Completado" | "En progreso" | "Pendiente"; minutes: number }[]> = {
  "cokito-rm": [
    { title: "Relaciones de Parentesco", state: "Pendiente", minutes: 25 },
    { title: "Relaciones de Tiempo", state: "Pendiente", minutes: 20 },
    { title: "Verdades y Mentiras", state: "Pendiente", minutes: 22 },
    { title: "Orden de Información", state: "Pendiente", minutes: 18 },
    { title: "Razonamiento Inductivo", state: "Pendiente", minutes: 30 },
    { title: "Sistemas de Numeración", state: "Pendiente", minutes: 28 },
    { title: "Criptoaritmética", state: "Pendiente", minutes: 25 },
    { title: "Sucesiones", state: "Pendiente", minutes: 22 },
    { title: "Analogías y Distribuciones", state: "Pendiente", minutes: 20 },
    { title: "Series", state: "Pendiente", minutes: 35 },
    { title: "Sumatorias", state: "Pendiente", minutes: 30 },
    { title: "Cuatro Operaciones", state: "Pendiente", minutes: 20 },
    { title: "Métodos Prácticos", state: "Pendiente", minutes: 25 },
    { title: "Planteo de Ecuaciones", state: "Pendiente", minutes: 28 },
    { title: "Edades", state: "Pendiente", minutes: 22 },
    { title: "Cronometría", state: "Pendiente", minutes: 18 },
    { title: "Promedios", state: "Pendiente", minutes: 20 },
    { title: "Operadores Matemáticos", state: "Pendiente", minutes: 25 },
    { title: "Operadores Binarios", state: "Pendiente", minutes: 22 },
    { title: "Conteo de Figuras", state: "Pendiente", minutes: 20 },
    { title: "Áreas Sombreadas y Perímetros", state: "Pendiente", minutes: 28 },
    { title: "Análisis Combinatorio", state: "Pendiente", minutes: 30 },
    { title: "Probabilidades", state: "Pendiente", minutes: 25 },
  ],
  "geometria": [
    { title: "Línea Recta y Ángulos", state: "Pendiente", minutes: 20 },
    { title: "Triángulos", state: "Pendiente", minutes: 25 },
    { title: "Polígonos", state: "Pendiente", minutes: 22 },
    { title: "Cuadriláteros", state: "Pendiente", minutes: 20 },
    { title: "Circunferencia", state: "Pendiente", minutes: 28 },
    { title: "Puntos Notables", state: "Pendiente", minutes: 25 },
    { title: "Proporcionalidad y Semejanza", state: "Pendiente", minutes: 30 },
    { title: "Relaciones Métricas", state: "Pendiente", minutes: 22 },
    { title: "Polígonos Regulares", state: "Pendiente", minutes: 20 },
    { title: "Áreas", state: "Pendiente", minutes: 25 },
    { title: "Rectas y Planos", state: "Pendiente", minutes: 28 },
    { title: "Prisma y Cilindro", state: "Pendiente", minutes: 22 },
    { title: "Pirámide y Cono", state: "Pendiente", minutes: 22 },
    { title: "Esfera", state: "Pendiente", minutes: 18 },
    { title: "La Recta", state: "Pendiente", minutes: 15 },
    { title: "Circunferencia y Parábola", state: "Pendiente", minutes: 25 },
    { title: "Elipse e Hipérbola", state: "Pendiente", minutes: 25 },
  ],
};

export const upcoming = [
  {
    title: "Simulacro UNI",
    detail: "180 min · 100 preguntas",
    when: "Hoy, 16:00",
    tone: "warning" as const,
  },
  {
    title: "Entrega de tarea",
    detail: "Historia: La República Aristocrática",
    when: "Mañana, 10:00",
    tone: "primary" as const,
  },
  {
    title: "Clase en vivo: Física",
    detail: "Dinámica y movimiento",
    when: "25 Ago, 14:00",
    tone: "success" as const,
  },
];

export const mocks = [
  { name: "Simulacro UNI", questions: 100, minutes: 180, level: "Difícil", score: 86 },
  { name: "Simulacro San Marcos", questions: 100, minutes: 180, level: "Difícil", score: 78 },
  { name: "Simulacro Católica", questions: 80, minutes: 150, level: "Medio", score: 81 },
  { name: "Simulacro Ordinario", questions: 60, minutes: 120, level: "Fácil", score: 90 },
];

export const universities = [
  {
    name: "UNI",
    full: "Universidad Nacional de Ingeniería",
    score: 13.5,
    vacancies: 1200,
    date: "24 Sep",
    cost: "S/ 550",
  },
  {
    name: "UNMSM",
    full: "Universidad Nacional Mayor de San Marcos",
    score: 12.8,
    vacancies: 1450,
    date: "18 Sep",
    cost: "S/ 480",
  },
  {
    name: "PUCP",
    full: "Pontificia Universidad Católica del Perú",
    score: 14.2,
    vacancies: 900,
    date: "02 Oct",
    cost: "S/ 620",
  },
  {
    name: "UNSA",
    full: "Universidad Nacional de San Agustín",
    score: 12.1,
    vacancies: 1100,
    date: "11 Oct",
    cost: "S/ 400",
  },
];

export const strategies = [
  { title: "Pomodoro", detail: "Bloques de 25 min con descansos guiados", tag: "Enfoque" },
  { title: "Técnica Feynman", detail: "Explica el tema como si enseñaras", tag: "Memoria" },
  { title: "Hábitos", detail: "Construye tu rutina diaria de estudio", tag: "Constancia" },
  { title: "Planificador semanal", detail: "Organiza tus materias por bloques", tag: "Orden" },
  { title: "Control de ansiedad", detail: "Respiración y manejo de presión", tag: "Bienestar" },
  { title: "Gestión del tiempo", detail: "Prioriza con la matriz de Eisenhower", tag: "Orden" },
  { title: "Distracciones", detail: "Diseña un entorno libre de ruido", tag: "Enfoque" },
  { title: "Horarios", detail: "Encuentra tus horas de mayor rendimiento", tag: "Rutina" },
];

export const communityPosts = [
  {
    author: "Juan Pablo",
    ago: "hace 2 horas",
    text: "¿Alguien me explica el problema 18 del simulacro UNI 2023-II?",
    tags: ["Matemáticas", "Simulacro UNI"],
    likes: 24,
    comments: 12,
  },
  {
    author: "María Fernanda",
    ago: "hace 4 horas",
    text: "Comparto mis apuntes de Física. ¡Espero que les sirvan!",
    tags: ["Física", "Apuntes"],
    likes: 58,
    comments: 21,
  },
  {
    author: "Renzo Aguilar",
    ago: "hace 8 horas",
    text: "Racha de 30 días estudiando Razonamiento Verbal. Se puede 💪",
    tags: ["Racha", "Verbal"],
    likes: 96,
    comments: 34,
  },
];

export const ranking = [
  { name: "Camila Torres", xp: 4820 },
  { name: "Daniel Asturrizaga", xp: 4310 },
  { name: "Renzo Aguilar", xp: 3980 },
  { name: "María Fernanda", xp: 3720 },
  { name: "Juan Pablo", xp: 3510 },
];

export const weeklyStudy = [
  { day: "Lun", horas: 2.5 },
  { day: "Mar", horas: 3.2 },
  { day: "Mié", horas: 1.8 },
  { day: "Jue", horas: 4.1 },
  { day: "Vie", horas: 2.9 },
  { day: "Sáb", horas: 5.0 },
  { day: "Dom", horas: 3.4 },
];

export const student = {
  name: "Daniel",
  fullName: "Daniel Asturrizaga",
  level: 12,
  xp: 1500,
  xpGoal: 2000,
  streak: 12,
  overall: 72,
  target: "UNMSM · Ingeniería de Sistemas",
};
