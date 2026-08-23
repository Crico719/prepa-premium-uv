export type CareerArea = {
  id: string;
  name: string;
  icon: string;
  description: string;
  careers: string[];
  skills: string[];
};

export type TestQuestion = {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
};

export const careerAreas: CareerArea[] = [
  {
    id: "salud",
    name: "Ciencias de la Salud",
    icon: "🏥",
    description: "Cuidar la salud de las personas, diagnosticar enfermedades y mejorar la calidad de vida.",
    careers: ["Medicina Humana", "Enfermería", "Odontología", "Psicología", "Nutrición", "Farmacia y Bioquímica", "Obstetricia", "Terapia Física"],
    skills: ["Empatía", "Responsabilidad", "Resistencia al estrés", "Manos firmes", "Memoria clínica"],
  },
  {
    id: "ingenieria",
    name: "Ingenierías",
    icon: "⚙️",
    description: "Diseñar, construir y optimizar soluciones técnicas, infraestructura y tecnología.",
    careers: ["Ingeniería de Sistemas", "Ingeniería Civil", "Ingeniería Industrial", "Ingeniería Electrónica", "Ingeniería Mecánica", "Arquitectura", "Ciencia de la Computación"],
    skills: ["Pensamiento lógico", "Matemáticas", "Resolución de problemas", "Creatividad técnica", "Trabajo en equipo"],
  },
  {
    id: "economicas",
    name: "Ciencias Económicas",
    icon: "📊",
    description: "Gestionar empresas, analizar mercados, manejar finanzas y liderar organizaciones.",
    careers: ["Administración", "Contabilidad", "Economía", "Marketing", "Negocios Internacionales", "Criminalística Financiera"],
    skills: ["Análisis numérico", "Liderazgo", "Organización", "Comunicación", "Pensamiento estratégico"],
  },
  {
    id: "juridicas",
    name: "Derecho y Ciencias Políticas",
    icon: "⚖️",
    description: "Defender derechos, impartir justicia, crear leyes y entender la sociedad.",
    careers: ["Derecho", "Ciencia Política", "Criminología", "Relaciones Internacionales"],
    skills: ["Oratoria", "Lectura crítica", "Argumentación", "Ética", "Análisis social"],
  },
  {
    id: "humanidades",
    name: "Humanidades y Comunicación",
    icon: "📚",
    description: "Crear contenido, comunicar ideas, educar y preservar la cultura.",
    careers: ["Comunicación Social", "Periodismo", "Publicidad", "Educación", "Literatura", "Filosofía", "Historia"],
    skills: ["Escritura", "Creatividad", "Empatía", "Expresión oral", "Pensamiento crítico"],
  },
  {
    id: "ciencias",
    name: "Ciencias Básicas",
    icon: "🔬",
    description: "Investigar la naturaleza, el universo y los fenómenos científicos.",
    careers: ["Física", "Matemática", "Química", "Biología", "Genética", "Biotecnología"],
    skills: ["Curiosidad", "Experimentación", "Matemáticas avanzadas", "Pensamiento abstracto", "Investigación"],
  },
];

export const testQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "¿Qué actividades disfrutas más en tu tiempo libre?",
    options: [
      { text: "Leer, escribir o debatear sobre temas sociales", scores: { juridicas: 3, humanidades: 3 } },
      { text: "Armar cosas, programar o experimentar con tecnología", scores: { ingenieria: 3, ciencias: 1 } },
      { text: "Ayudar a otros,志愿服务 o cuidar personas", scores: { salud: 3, humanidades: 1 } },
      { text: "Organizar eventos, vender o planificar negocios", scores: { economicas: 3, juridicas: 1 } },
    ],
  },
  {
    id: 2,
    question: "¿En qué materia te va mejor?",
    options: [
      { text: "Matemática y Física", scores: { ingenieria: 3, ciencias: 2 } },
      { text: "Comunicación y Literatura", scores: { humanidades: 3, juridicas: 1 } },
      { text: "Química y Biología", scores: { salud: 3, ciencias: 2 } },
      { text: "Economía y Contabilidad", scores: { economicas: 3, ingenieria: 1 } },
    ],
  },
  {
    id: 3,
    question: "¿Cómo prefieres trabajar?",
    options: [
      { text: "En equipo, liderando proyectos", scores: { economicas: 3, ingenieria: 1 } },
      { text: "De forma independiente, investigando", scores: { ciencias: 3, humanidades: 1 } },
      { text: "Directamente con personas, ayudándolas", scores: { salud: 3, juridicas: 1 } },
      { text: "Creando algo nuevo con mis propias manos", scores: { ingenieria: 3, humanidades: 1 } },
    ],
  },
  {
    id: 4,
    question: "¿Qué tipo de problemas te gustaría resolver?",
    options: [
      { text: "Enfermedades y problemas de salud", scores: { salud: 3 } },
      { text: "Problemas técnicos y de infraestructura", scores: { ingenieria: 3 } },
      { text: "Problemas sociales y de justicia", scores: { juridicas: 3, humanidades: 1 } },
      { text: "Problemas financieros y empresariales", scores: { economicas: 3 } },
    ],
  },
  {
    id: 5,
    question: "¿Qué te motiva más?",
    options: [
      { text: "Ayudar a que las personas sanen", scores: { salud: 3 } },
      { text: "Construir algo que funcione", scores: { ingenieria: 3 } },
      { text: "Tener éxito económico y liderar", scores: { economicas: 3 } },
      { text: "Defender causas justas", scores: { juridicas: 3, humanidades: 1 } },
    ],
  },
  {
    id: 6,
    question: "¿Cuál es tu habilidad más fuerte?",
    options: [
      { text: "Memorizar datos y detalles", scores: { salud: 2, ciencias: 2 } },
      { text: "Razonamiento lógico y matemático", scores: { ingenieria: 3, ciencias: 2 } },
      { text: "Comunicación y persuasión", scores: { juridicas: 2, humanidades: 3, economicas: 1 } },
      { text: "Creatividad y expresión artística", scores: { humanidades: 2, ingenieria: 1 } },
    ],
  },
  {
    id: 7,
    question: "¿Dónde te imaginas trabajando?",
    options: [
      { text: "Hospital o clínica", scores: { salud: 3 } },
      { text: "Oficina moderna o laboratorio tech", scores: { ingenieria: 2, economicas: 2 } },
      { text: "Juzgado o institución pública", scores: { juridicas: 3 } },
      { text: "Estudio creativo o redacción", scores: { humanidades: 3 } },
    ],
  },
  {
    id: 8,
    question: "¿Qué tipo de contenido consumes?",
    options: [
      { text: "Documentales científicos y de salud", scores: { salud: 2, ciencias: 2 } },
      { text: "Tecnología, innovación y negocios", scores: { ingenieria: 2, economicas: 2 } },
      { text: "Noticias, política y debates", scores: { juridicas: 3, humanidades: 1 } },
      { text: "Películas, series y contenido cultural", scores: { humanidades: 3 } },
    ],
  },
  {
    id: 9,
    question: "¿Cómo reaccionas ante un conflicto?",
    options: [
      { text: "Busco la solución práctica y rápida", scores: { ingenieria: 2, economicas: 2 } },
      { text: "Escucho a ambos lados y busco justicia", scores: { juridicas: 3 } },
      { text: "Me preocupo por el bienestar de todos", scores: { salud: 2, humanidades: 2 } },
      { text: "Analizo las causas profundas", scores: { ciencias: 3, humanidades: 1 } },
    ],
  },
  {
    id: 10,
    question: "¿Qué prefieres: ¿saber por qué ocurren las cosas o saber cómo funcionan?",
    options: [
      { text: "Por qué ocurren (causas, origen)", scores: { ciencias: 3, humanidades: 1 } },
      { text: "Cómo funcionan (mecanismos, diseño)", scores: { ingenieria: 3 } },
      { text: "Cómo afectan a las personas", scores: { salud: 2, juridicas: 2 } },
      { text: "Cómo se pueden explotar comercialmente", scores: { economicas: 3 } },
    ],
  },
  {
    id: 11,
    question: "Si pudieras elegir una superpoder, ¿cuál sería?",
    options: [
      { text: "Curar cualquier enfermedad", scores: { salud: 3 } },
      { text: "Construir cualquier máquina o invento", scores: { ingenieria: 3 } },
      { text: "Leer la mente para ganar cualquier juicio", scores: { juridicas: 2, economicas: 2 } },
      { text: "Conocer todos los idiomas y culturas", scores: { humanidades: 3, ciencias: 1 } },
    ],
  },
  {
    id: 12,
    question: "¿Qué te gustaría lograr en tu vida?",
    options: [
      { text: "Salvar vidas o mejorar la salud pública", scores: { salud: 3 } },
      { text: "Crear una empresa exitosa o un gran invento", scores: { economicas: 2, ingenieria: 2 } },
      { text: "Cambiar leyes o influir en la política", scores: { juridicas: 3 } },
      { text: "Escribir un libro, enseñar o dejar huella cultural", scores: { humanidades: 3 } },
    ],
  },
  {
    id: 13,
    question: "¿Qué asignatura elegirías como optativa?",
    options: [
      { text: "Anatomía o Primeros Auxilios", scores: { salud: 3 } },
      { text: "Programación o Robótica", scores: { ingenieria: 3 } },
      { text: "Derecho o Debate", scores: { juridicas: 3 } },
      { text: "Emprendimiento o Marketing Digital", scores: { economicas: 3 } },
    ],
  },
  {
    id: 14,
    question: "¿Cómo te describirían tus amigos?",
    options: [
      { text: "El que siempre ayuda y escucha", scores: { salud: 2, humanidades: 2 } },
      { text: "El resolutivo, que arregla todo", scores: { ingenieria: 3 } },
      { text: "El que argumenta y no se deja", scores: { juridicas: 3 } },
      { text: "El organizador y ambicioso", scores: { economicas: 3 } },
    ],
  },
  {
    id: 15,
    question: "¿Cuál de estos retos te emocionaría más?",
    options: [
      { text: "Diseñar un hospital para una comunidad remota", scores: { salud: 2, ingenieria: 2 } },
      { text: "Crear una app que cambie la vida de millones", scores: { ingenieria: 3, economicas: 1 } },
      { text: "Defender un caso histórico ante la Corte Suprema", scores: { juridicas: 3 } },
      { text: "Escribir la historia de tu región", scores: { humanidades: 3, ciencias: 1 } },
    ],
  },
];
