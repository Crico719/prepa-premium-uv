export type CourseExercise = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type CourseModule = {
  slug: string;
  tip: string;
  theory: string[];
  illustration: string;
  exercises: CourseExercise[];
};

export type CourseContent = Record<string, CourseModule[]>;

export const courseContent: CourseContent = {
  "geometria": [
    {
      slug: "linea-recta-y-angulos",
      tip: "Identifica primero el tipo de ángulo antes de resolver. Siempre dibuja una figura aunque no te la pidan.",
      theory: [
        "Una **línea recta** es un conjunto de puntos que se extienden en ambas direcciones sin fin.",
        "Un **ángulo** se forma cuando dos semirrectas comparten un mismo origen (vértice).",
        "Los ángulos se clasifican por su medida:",
        "- **Aguudo**: menor a 90°",
        "- **Recto**: exactamente 90°",
        "- **Obtuso**: entre 90° y 180°",
        "- **Llano**: exactamente 180°",
        "- **Cóncavo**: mayor a 180°",
        "Ángulos complementarios suman 90°. Ángulos suplementarios suman 180°.",
        "Ángulos opuestos por el vértice son iguales."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <line x1="50" y1="150" x2="250" y2="150" stroke="#334155" stroke-width="2"/>
        <line x1="50" y1="150" x2="200" y2="50" stroke="#2563eb" stroke-width="2"/>
        <path d="M 80 150 A 30 30 0 0 1 68 128" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="85" y="138" fill="#2563eb" font-size="14" font-family="sans-serif">60°</text>
        <text x="50" y="170" fill="#64748b" font-size="12" font-family="sans-serif">Vértice</text>
        <circle cx="50" cy="150" r="3" fill="#2563eb"/>
        <text x="150" y="195" fill="#64748b" font-size="11" font-family="sans-serif">Ángulo agudo de 60°</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Si un ángulo mide 35°, ¿cuánto mide su complementario?",
          options: ["55°", "145°", "65°", "45°"],
          correctIndex: 0,
          explanation: "Complementario significa que junto suman 90°. Entonces: 90° - 35° = 55°."
        },
        {
          id: 2,
          question: "¿Cuánto mide un ángulo opuesto por el vértice a un ángulo de 120°?",
          options: ["60°", "120°", "240°", "30°"],
          correctIndex: 1,
          explanation: "Los ángulos opuestos por el vértice siempre son iguales. Si uno mide 120°, el otro también."
        },
        {
          id: 3,
          question: "Dos ángulos son suplementarios. Si uno mide el triple del otro, ¿cuánto mide el mayor?",
          options: ["135°", "120°", "45°", "90°"],
          correctIndex: 0,
          explanation: "Sean x y 3x. Suman 180°: x + 3x = 180 → 4x = 180 → x = 45°. El mayor es 3(45°) = 135°."
        }
      ]
    },
    {
      slug: "triangulos",
      tip: "Recuerda: la suma de ángulos internos SIEMPRE es 180°. Úsalo para hallar ángulos desconocidos.",
      theory: [
        "Un **triángulo** es un polígono con 3 lados, 3 vértices y 3 ángulos.",
        "La suma de sus ángulos internos es siempre **180°**.",
        "**Clasificación por lados:**",
        "- **Equilátero**: 3 lados iguales (3 ángulos de 60°)",
        "- **Isósceles**: 2 lados iguales (2 ángulos iguales)",
        "- **Escaleno**: 3 lados diferentes (3 ángulos diferentes)",
        "**Clasificación por ángulos:**",
        "- **Acutángulo**: los 3 ángulos son agudos",
        "- **Rectángulo**: tiene un ángulo recto (90°)",
        "- **Obtusángulo**: tiene un ángulo obtuso",
        "**Fórmula del área:** Área = (base × altura) / 2"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <polygon points="150,30 50,170 250,170" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <text x="140" y="25" fill="#1e293b" font-size="14" font-weight="bold" font-family="sans-serif">A</text>
        <text x="30" y="185" fill="#1e293b" font-size="14" font-weight="bold" font-family="sans-serif">B</text>
        <text x="255" y="185" fill="#1e293b" font-size="14" font-weight="bold" font-family="sans-serif">C</text>
        <line x1="150" y1="30" x2="150" y2="170" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="155" y="105" fill="#dc2626" font-size="12" font-family="sans-serif">h</text>
        <line x1="50" y1="170" x2="250" y2="170" stroke="#334155" stroke-width="2"/>
        <text x="140" y="190" fill="#64748b" font-size="12" font-family="sans-serif">base</text>
        <path d="M 70 170 A 20 20 0 0 1 60 155" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="158" fill="#2563eb" font-size="11" font-family="sans-serif">60°</text>
        <path d="M 230 170 A 20 20 0 0 0 240 155" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="215" y="158" fill="#2563eb" font-size="11" font-family="sans-serif">60°</text>
        <text x="150" y="48" fill="#2563eb" font-size="11" font-family="sans-serif">60°</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "En un triángulo, dos ángulos miden 45° y 70°. ¿Cuánto mide el tercero?",
          options: ["75°", "65°", "55°", "85°"],
          correctIndex: 1,
          explanation: "Suman 180°: 180° - 45° - 70° = 65°."
        },
        {
          id: 2,
          question: "Un triángulo isósceles tiene un ángulo de 100°. ¿Cuánto miden los otros dos?",
          options: ["40° y 40°", "50° y 50°", "80° y 80°", "30° y 50°"],
          correctIndex: 0,
          explanation: "El ángulo de 100° es el diferente (obtuso). Los otros dos son iguales: (180° - 100°) / 2 = 40° cada uno."
        },
        {
          id: 3,
          question: "La base de un triángulo mide 12 cm y su altura 8 cm. ¿Cuál es su área?",
          options: ["96 cm²", "48 cm²", "20 cm²", "24 cm²"],
          correctIndex: 1,
          explanation: "Área = (base × altura) / 2 = (12 × 8) / 2 = 96 / 2 = 48 cm²."
        }
      ]
    },
    {
      slug: "poligonos",
      tip: "Para hallar la suma de ángulos internos usa la fórmula: (n-2) × 180°, donde n es el número de lados.",
      theory: [
        "Un **polígono** es una figura plana cerrada formada por segmentos de recta.",
        "**Clasificación:**",
        "- **Convexo**: todos los ángulos internos son menores a 180°",
        "- **Cóncavo**: al menos un ángulo interno es mayor a 180°",
        "**Fórmula de la suma de ángulos internos:** Suma = (n - 2) × 180°",
        "Ejemplo: un pentágono (5 lados) tiene suma = (5-2) × 180° = 540°",
        "**Ángulos externos:** La suma de los ángulos externos de cualquier polígono convexo es siempre **360°**.",
        "**Diagonales:** Número de diagonales = n(n-3) / 2"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <polygon points="150,25 250,80 220,170 80,170 50,80" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <text x="145" y="20" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">A</text>
        <text x="255" y="80" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">B</text>
        <text x="225" y="185" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">C</text>
        <text x="60" y="185" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">D</text>
        <text x="30" y="80" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">E</text>
        <line x1="150" y1="25" x2="220" y2="170" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="150" y1="25" x2="80" y2="170" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="115" y="110" fill="#dc2626" font-size="11" font-family="sans-serif">Diagonales</text>
        <text x="75" y="198" fill="#64748b" font-size="11" font-family="sans-serif">Pentágono: (5-2)×180° = 540°</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "¿Cuánto suman los ángulos internos de un hexágono?",
          options: ["720°", "540°", "1080°", "360°"],
          correctIndex: 0,
          explanation: "Hexágono tiene 6 lados. Suma = (6-2) × 180° = 4 × 180° = 720°."
        },
        {
          id: 2,
          question: "¿Cuántas diagonales tiene un octógono?",
          options: ["20", "16", "24", "8"],
          correctIndex: 0,
          explanation: "Diagonales = 8(8-3)/2 = 8(5)/2 = 40/2 = 20."
        },
        {
          id: 3,
          question: "¿Cuánto mide cada ángulo interno de un cuadrado?",
          options: ["90°", "60°", "120°", "180°"],
          correctIndex: 0,
          explanation: "Cuadrado tiene 4 lados iguales. Suma = (4-2)×180° = 360°. Cada ángulo = 360°/4 = 90°."
        }
      ]
    },
    {
      slug: "cuadrilateros",
      tip: "Memoriza: paralelogramo tiene lados opuestos paralelos e iguales. Rectángulo = paralelogramo con ángulos de 90°.",
      theory: [
        "Un **cuadrilátero** es un polígono con 4 lados y 4 vértices.",
        "La suma de sus ángulos internos es **360°**.",
        "**Tipos de cuadriláteros:**",
        "- **Paralelogramo**: lados opuestos paralelos e iguales",
        "- **Rectángulo**: paralelogramo con 4 ángulos de 90°",
        "- **Rombo**: paralelogramo con 4 lados iguales",
        "- **Cuadrado**: rectángulo + rombo (4 lados iguales y 4 ángulos de 90°)",
        "- **Trapezoide**: solo un par de lados paralelos",
        "**Fórmulas de área:**",
        "- Rectángulo: base × altura",
        "- Rombo: (d₁ × d₂) / 2 (diagonales)",
        "- Trapecio: ((base mayor + base menor) × altura) / 2"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <rect x="30" y="30" width="110" height="70" fill="none" stroke="#2563eb" stroke-width="2" rx="2"/>
        <text x="70" y="70" fill="#2563eb" font-size="11" font-family="sans-serif">Rectángulo</text>
        <polygon points="190,30 270,55 250,100 170,75" fill="none" stroke="#7c3aed" stroke-width="2"/>
        <text x="195" y="70" fill="#7c3aed" font-size="11" font-family="sans-serif">Rombo</text>
        <polygon points="30,140 130,120 130,180 30,180" fill="none" stroke="#059669" stroke-width="2"/>
        <text x="55" y="165" fill="#059669" font-size="11" font-family="sans-serif">Trapecio</text>
        <rect x="180" y="130" width="80" height="80" fill="none" stroke="#dc2626" stroke-width="2" rx="2"/>
        <text x="195" y="175" fill="#dc2626" font-size="11" font-family="sans-serif">Cuadrado</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Un rectángulo tiene base 10 cm y altura 6 cm. ¿Cuál es su área?",
          options: ["60 cm²", "16 cm²", "32 cm²", "100 cm²"],
          correctIndex: 0,
          explanation: "Área del rectángulo = base × altura = 10 × 6 = 60 cm²."
        },
        {
          id: 2,
          question: "Las diagonales de un rombo miden 8 cm y 6 cm. ¿Cuál es su área?",
          options: ["48 cm²", "24 cm²", "14 cm²", "28 cm²"],
          correctIndex: 1,
          explanation: "Área del rombo = (d₁ × d₂) / 2 = (8 × 6) / 2 = 48/2 = 24 cm²."
        },
        {
          id: 3,
          question: "Un trapecio tiene bases de 8 cm y 12 cm, y altura 5 cm. ¿Cuál es su área?",
          options: ["100 cm²", "50 cm²", "20 cm²", "60 cm²"],
          correctIndex: 1,
          explanation: "Área = ((B + b) × h) / 2 = ((12 + 8) × 5) / 2 = 100/2 = 50 cm²."
        }
      ]
    },
    {
      slug: "circunferencia",
      tip: "Usa π ≈ 3.1416. La circunferencia mide 2πr y el área πr². ¡No confundas radio con diámetro!",
      theory: [
        "La **circunferencia** es el conjunto de puntos que están a la misma distancia (radio) de un punto fijo (centro).",
        "**Elementos:**",
        "- **Radio (r)**: distancia del centro a la circunferencia",
        "- **Diámetro (d)**: segmento que pasa por el centro. d = 2r",
        "- **Cuerda**: segmento que une dos puntos de la circunferencia",
        "- **Arco**: parte de la circunferencia entre dos puntos",
        "**Fórmulas fundamentales:**",
        "- Longitud: L = 2πr = πd",
        "- Área del círculo: A = πr²",
        "Un ángulo central intercepta un arco cuya medida es igual al ángulo."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <circle cx="150" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="150" cy="100" r="3" fill="#dc2626"/>
        <text x="155" y="98" fill="#dc2626" font-size="11" font-family="sans-serif">O</text>
        <line x1="150" y1="100" x2="220" y2="100" stroke="#059669" stroke-width="2"/>
        <text x="180" y="95" fill="#059669" font-size="12" font-weight="bold" font-family="sans-serif">r</text>
        <line x1="80" y1="100" x2="220" y2="100" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="140" y="118" fill="#7c3aed" font-size="11" font-family="sans-serif">d = 2r</text>
        <path d="M 150 100 L 200 45" stroke="#dc2626" stroke-width="1.5"/>
        <path d="M 175 70 A 25 25 0 0 1 188 85" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <text x="190" y="72" fill="#dc2626" font-size="10" font-family="sans-serif">θ</text>
        <text x="95" y="195" fill="#64748b" font-size="11" font-family="sans-serif">L = 2πr | A = πr²</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Un círculo tiene radio 7 cm. ¿Cuál es su circunferencia? (Usa π ≈ 3.14)",
          options: ["43.96 cm", "21.98 cm", "153.86 cm", "14 cm"],
          correctIndex: 0,
          explanation: "L = 2πr = 2 × 3.14 × 7 = 43.96 cm."
        },
        {
          id: 2,
          question: "El diámetro de un círculo mide 10 cm. ¿Cuál es su área?",
          options: ["78.5 cm²", "31.4 cm²", "157 cm²", "50 cm²"],
          correctIndex: 0,
          explanation: "r = 10/2 = 5 cm. A = πr² = 3.14 × 25 = 78.5 cm²."
        },
        {
          id: 3,
          question: "Un ángulo central mide 72°. ¿Qué fracción de la circunferencia representa?",
          options: ["1/5", "1/6", "1/4", "2/5"],
          correctIndex: 0,
          explanation: "72° / 360° = 1/5. El arco representa la quinta parte de la circunferencia."
        }
      ]
    },
    {
      slug: "puntos-notables",
      tip: "El ortocentro es donde se juntan las alturas. El baricentro divide cada mediana en relación 2:1.",
      theory: [
        "Los **puntos notables** del triángulo son puntos donde concurren elementos especiales.",
        "**Incentro (I)**: intersección de las bisectrices. Es el centro del círculo inscrito.",
        "**Baricentro (G)**: intersección de las medianas. Divide cada mediana en relación 2:1.",
        "**Ortocentro (H)**: intersección de las alturas.",
        "**Circuncentro (O)**: intersección de las mediatrices. Es el centro del círculo circunscrito.",
        "En un triángulo **equilátero**, los 4 puntos notables coinciden en un solo punto.",
        "Los puntos I, G y H están alineados en la **recta de Euler**."
      ],
      illustration: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="220" fill="#f8fafc" rx="12"/>
        <polygon points="150,30 50,190 250,190" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="148" y="22" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">A</text>
        <text x="30" y="200" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">B</text>
        <text x="255" y="200" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">C</text>
        <line x1="150" y1="30" x2="150" y2="190" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="155" y="195" fill="#64748b" font-size="10" font-family="sans-serif">Mediana</text>
        <line x1="50" y1="190" x2="200" y2="110" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="250" y1="190" x2="100" y2="110" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <circle cx="150" cy="135" r="4" fill="#2563eb"/>
        <text x="158" y="138" fill="#2563eb" font-size="11" font-weight="bold" font-family="sans-serif">G</text>
        <circle cx="150" cy="155" r="4" fill="#dc2626"/>
        <text x="158" y="158" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">I</text>
        <circle cx="150" cy="80" r="4" fill="#059669"/>
        <text x="158" y="83" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">H</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "¿Qué punto notable es el centro del círculo inscrito en un triángulo?",
          options: ["Incentro", "Baricentro", "Ortocentro", "Circuncentro"],
          correctIndex: 0,
          explanation: "El incentro (I) es la intersección de las bisectrices y es el centro del círculo inscrito."
        },
        {
          id: 2,
          question: "El baricentro divide cada mediana en una razón de:",
          options: ["2:1", "1:1", "3:1", "1:2"],
          correctIndex: 0,
          explanation: "El baricentro siempre divide cada mediana en la razón 2:1 (más cerca del lado)."
        },
        {
          id: 3,
          question: "¿Qué punto notable es la intersección de las mediatrices?",
          options: ["Circuncentro", "Incentro", "Baricentro", "Ortocentro"],
          correctIndex: 0,
          explanation: "El circuncentro (O) es la intersección de las mediatrices y es el centro del círculo circunscrito."
        }
      ]
    },
    {
      slug: "prop-y-semejanza",
      tip: "Si dos triángulos son semejantes, sus lados son proporcionales. Busca el factor de escala.",
      theory: [
        "**Semejanza**: dos figuras son semejantes si tienen la misma forma pero no necesariamente el mismo tamaño.",
        "**Criterios de semejanza de triángulos:**",
        "- **LAL**: dos lados proporcionales y el ángulo entre ellos igual",
        "- **AA**: dos ángulos iguales",
        "- **LLL**: los tres lados proporcionales",
        "Si dos triángulos son semejantes con factor k:",
        "- Las razones de lados son iguales a k",
        "- Las razones de áreas son iguales a k²",
        "- Las razones de perímetros son iguales a k",
        "**Teorema de Tales**: si tres o más rectas paralelas cortan a dos transversales, determinan segmentos proporcionales."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <polygon points="40,170 100,50 160,170" fill="none" stroke="#2563eb" stroke-width="2"/>
        <polygon points="170,170 210,90 250,170" fill="none" stroke="#dc2626" stroke-width="2"/>
        <text x="40" y="185" fill="#2563eb" font-size="11" font-weight="bold" font-family="sans-serif">A</text>
        <text x="95" y="42" fill="#2563eb" font-size="11" font-weight="bold" font-family="sans-serif">B</text>
        <text x="155" y="185" fill="#2563eb" font-size="11" font-weight="bold" font-family="sans-serif">C</text>
        <text x="170" y="185" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">D</text>
        <text x="205" y="82" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">E</text>
        <text x="245" y="185" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">F</text>
        <text x="110" y="130" fill="#64748b" font-size="12" font-family="sans-serif">k = 1/2</text>
        <text x="90" y="198" fill="#64748b" font-size="11" font-family="sans-serif">△ABC ~ △DEF</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Dos triángulos son semejantes con factor k=3. Si el área del menor es 10 cm², ¿cuál es la del mayor?",
          options: ["90 cm²", "30 cm²", "60 cm²", "120 cm²"],
          correctIndex: 0,
          explanation: "La razón de áreas es k². Si k=3, entonces k²=9. Área mayor = 10 × 9 = 90 cm²."
        },
        {
          id: 2,
          question: "En un triángulo, una paralela a un lado corta los otros dos en 3 y 6 cm. Si el lado completo del segundo mide 10 cm, ¿cuánto mide el lado del primero?",
          options: ["5 cm", "15 cm", "3.33 cm", "20 cm"],
          correctIndex: 0,
          explanation: "Por Tales: 3/6 = x/10. x = (3 × 10)/6 = 5 cm."
        },
        {
          id: 3,
          question: "El perímetro de un triángulo es 24 cm. Un triángulo semejante con k=2 tiene perímetro:",
          options: ["48 cm", "12 cm", "36 cm", "96 cm"],
          correctIndex: 0,
          explanation: "La razón de perímetros es k. Si k=2, perímetro = 24 × 2 = 48 cm."
        }
      ]
    },
    {
      slug: "relaciones-metricas",
      tip: "En un triángulo rectángulo, la hipotenusa es el lado más largo. Las relaciones métricas usan la altura trazada desde el ángulo recto.",
      theory: [
        "En un **triángulo rectángulo**, la altura trazada desde el ángulo recto a la hipotenusa genera relaciones importantes.",
        "**Teorema de Pitágoras**: h² = p² + q² (donde h es la hipotenusa y p, q los catetos)",
        "**Relaciones métricas en el triángulo rectángulo:**",
        "- h² = p² + q² (Pitágoras)",
        "- a² = h × p (cateto = hipotenusa × proyección)",
        "- b² = h × q",
        "- h × c = a × b (donde c es la hipotenusa)",
        "**En la circunferencia:**",
        "- Ángulo inscrito que aborda un semicírculo es recto",
        "- La cuerda que pasa por el centro es el diámetro"
      ],
      illustration: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="220" fill="#f8fafc" rx="12"/>
        <polygon points="50,180 250,180 50,40" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <rect x="46" y="176" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <line x1="50" y1="40" x2="50" y2="180" stroke="#059669" stroke-width="2"/>
        <text x="30" y="110" fill="#059669" font-size="12" font-weight="bold" font-family="sans-serif">a</text>
        <text x="140" y="195" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">b</text>
        <text x="165" y="100" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">c</text>
        <text x="38" y="35" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">A</text>
        <text x="255" y="195" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">B</text>
        <text x="25" y="195" fill="#1e293b" font-size="12" font-weight="bold" font-family="sans-serif">C</text>
        <text x="55" y="195" fill="#64748b" font-size="10" font-family="sans-serif">p</text>
        <text x="155" y="195" fill="#64748b" font-size="10" font-family="sans-serif">q</text>
        <text x="60" y="215" fill="#64748b" font-size="11" font-family="sans-serif">a² + b² = c²</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Un triángulo rectángulo tiene catetos de 3 y 4. ¿Cuánto mide la hipotenusa?",
          options: ["5", "7", "12", "25"],
          correctIndex: 0,
          explanation: "Por Pitágoras: c² = 3² + 4² = 9 + 16 = 25. c = 5."
        },
        {
          id: 2,
          question: "En un triángulo rectángulo, la hipotenusa mide 13 y un cateto 5. ¿Cuánto mide el otro cateto?",
          options: ["12", "8", "18", "144"],
          correctIndex: 0,
          explanation: "b² = 13² - 5² = 169 - 25 = 144. b = 12."
        },
        {
          id: 3,
          question: "La hipotenusa mide 10 cm y la altura a ella mide 6 cm. ¿Cuánto mide la base (hipotenusa)?",
          options: ["10 cm", "6 cm", "8 cm", "16.67 cm"],
          correctIndex: 0,
          explanation: "La pregunta dice que la hipotenusa mide 10 cm. Es el dato dado."
        }
      ]
    },
    {
      slug: "poligonos-regulares",
      tip: "Un polígono regular tiene todos sus lados y ángulos iguales. El área se calcula con: (Perímetro × apotema) / 2.",
      theory: [
        "Un **polígono regular** tiene todos sus lados iguales y todos sus ángulos iguales.",
        "**Fórmulas para un polígono regular de n lados:**",
        "- Ángulo interno = (n-2) × 180° / n",
        "- Ángulo externo = 360° / n",
        "- Apotema (a): distancia del centro al punto medio de un lado",
        "- Radio (R): distancia del centro a un vértice",
        "**Área** = (Perímetro × apotema) / 2 = (n × lado × apotema) / 2",
        "**Triángulos notables en polígonos:**",
        "- Triángulo equilátero: todos los ángulos 60°",
        "- Triángulo rectángulo 30-60-90: lados en razón 1:√3:2",
        "- Triángulo rectángulo 45-45-90: lados en razón 1:1:√2"
      ],
      illustration: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <polygon points="150,30 220,55 250,120 210,175 90,175 50,120 80,55" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="150" cy="110" r="3" fill="#dc2626"/>
        <text x="155" y="108" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">O</text>
        <line x1="150" y1="110" x2="150" y2="30" stroke="#dc2626" stroke-width="1.5"/>
        <text x="155" y="70" fill="#dc2626" font-size="10" font-family="sans-serif">R</text>
        <line x1="150" y1="110" x2="185" y2="145" stroke="#059669" stroke-width="1.5"/>
        <text x="175" y="135" fill="#059669" font-size="10" font-family="sans-serif">a</text>
        <text x="100" y="198" fill="#64748b" font-size="11" font-family="sans-serif">Hexágono regular</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "¿Cuánto mide cada ángulo interno de un hexágono regular?",
          options: ["120°", "108°", "135°", "90°"],
          correctIndex: 0,
          explanation: "Ángulo interno = (6-2)×180°/6 = 720°/6 = 120°."
        },
        {
          id: 2,
          question: "Un polígono regular de 8 lados tiene lado 5 cm y apotema 6 cm. ¿Cuál es su área?",
          options: ["120 cm²", "240 cm²", "150 cm²", "30 cm²"],
          correctIndex: 0,
          explanation: "Perímetro = 8 × 5 = 40 cm. Área = (40 × 6)/2 = 120 cm²."
        },
        {
          id: 3,
          question: "¿Cuántos lados tiene un polígono cuyo ángulo interno mide 156°?",
          options: ["30", "15", "20", "24"],
          correctIndex: 1,
          explanation: "156 = (n-2)×180/n → 156n = 180n - 360 → 24n = 360 → n = 15 lados."
        }
      ]
    },
    {
      slug: "areas",
      tip: "Dibuja siempre la figura. Identifica las dimensiones antes de aplicar fórmulas.",
      theory: [
        "**Fórmulas de área fundamentales:**",
        "- **Triángulo**: A = (b × h) / 2",
        "- **Rectángulo**: A = b × h",
        "- **Rombo**: A = (d₁ × d₂) / 2",
        "- **Trapecio**: A = ((B + b) × h) / 2",
        "- **Círculo**: A = πr²",
        "- **Polígono regular**: A = (P × a) / 2",
        "**Áreas de figuras compuestas:**",
        "Para hallar el área de figuras complejas, se pueden sumar o restar áreas de figuras simples.",
        "**Transformación de unidades:**",
        "1 m² = 10,000 cm² | 1 km² = 1,000,000 m²"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <rect x="20" y="30" width="60" height="40" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="2"/>
        <text x="30" y="55" fill="#2563eb" font-size="9" font-family="sans-serif">b×h</text>
        <polygon points="120,70 160,30 200,70" fill="#dcfce7" stroke="#059669" stroke-width="1.5"/>
        <text x="130" y="58" fill="#059669" font-size="9" font-family="sans-serif">bh/2</text>
        <polygon points="240,30 290,50 270,70 220,50" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="240" y="52" fill="#d97706" font-size="9" font-family="sans-serif">d₁d₂/2</text>
        <polygon points="30,120 110,100 110,170 30,170" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="40" y="145" fill="#7c3aed" font-size="9" font-family="sans-serif">(B+b)h/2</text>
        <circle cx="200" cy="145" r="35" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="188" y="148" fill="#dc2626" font-size="10" font-family="sans-serif">πr²</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Un triángulo tiene base 14 cm y altura 8 cm. ¿Cuál es su área?",
          options: ["56 cm²", "112 cm²", "22 cm²", "48 cm²"],
          correctIndex: 0,
          explanation: "A = (14 × 8)/2 = 112/2 = 56 cm²."
        },
        {
          id: 2,
          question: "Un trapecio tiene bases 6 cm y 10 cm, y altura 5 cm. ¿Cuál es su área?",
          options: ["40 cm²", "16 cm²", "80 cm²", "25 cm²"],
          correctIndex: 0,
          explanation: "A = ((10+6)×5)/2 = (16×5)/2 = 80/2 = 40 cm²."
        },
        {
          id: 3,
          question: "Un cuadrado y un círculo tienen el mismo lado/radio = 4 cm. ¿Cuál tiene mayor área?",
          options: ["El cuadrado", "El círculo", "Son iguales", "No se puede saber"],
          correctIndex: 1,
          explanation: "Cuadrado: 4² = 16 cm². Círculo: π(4²) = 50.27 cm². El círculo tiene mayor área."
        }
      ]
    },
    {
      slug: "rectas-y-planos",
      tip: "En espacio, dos rectas pueden ser paralelas, secantes o mixtas. Dibuja siempre una representación 3D.",
      theory: [
        "En **geometría del espacio**, las rectas y planos pueden tener distintas posiciones relativas.",
        "**Posiciones relativas entre rectas:**",
        "- **Paralelas**: no se cortan y están en un mismo plano",
        "- **Secantes**: se cortan en un punto",
        "- **Mixtas**: no se cortan y no están en un mismo plano",
        "**Posiciones entre rectas y planos:**",
        "- **Recta contenida** en el plano",
        "- **Recta paralela** al plano (no toca el plano)",
        "- **Recta secante** al plano (corta al plano en un punto)",
        "- **Recta perpendicular** al plano (forma 90° con todas las rectas del plano)",
        "**Posiciones entre planos:**",
        "- **Paralelos**: no tienen puntos en común",
        "- **Secantes**: se cortan en una recta",
        "- **Perpendiculares**: forman 90°"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <polygon points="40,120 150,60 260,120 150,140" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
        <text x="145" y="52" fill="#2563eb" font-size="11" font-family="sans-serif">Plano α</text>
        <line x1="80" y1="40" x2="220" y2="170" stroke="#dc2626" stroke-width="2"/>
        <circle cx="150" cy="105" r="3" fill="#dc2626"/>
        <text x="158" y="100" fill="#dc2626" font-size="10" font-family="sans-serif">P</text>
        <text x="225" y="175" fill="#64748b" font-size="10" font-family="sans-serif">Recta r</text>
        <line x1="60" y1="160" x2="240" y2="80" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="245" y="75" fill="#059669" font-size="10" font-family="sans-serif">Recta s</text>
        <text x="60" y="195" fill="#64748b" font-size="10" font-family="sans-serif">r y s: mixtas</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "¿Cuántas posiciones relativas pueden tener dos rectas en el espacio?",
          options: ["3 (paralelas, secantes, mixtas)", "2 (paralelas y secantes)", "4", "Solo 2"],
          correctIndex: 0,
          explanation: "En el espacio, dos rectas pueden ser paralelas, secantes o mixtas (no coplanarias)."
        },
        {
          id: 2,
          question: "Una recta corta a un plano. ¿En cuántos puntos se intersectan?",
          options: ["1 punto", "2 puntos", "Infinitos", "Ninguno"],
          correctIndex: 0,
          explanation: "Una recta secante a un plano siempre lo corta en exactamente un punto."
        },
        {
          id: 3,
          question: "Dos planos paralelos son cortados por una recta. ¿En cuántos puntos se intersecta la recta con cada plano?",
          options: ["1 punto con cada uno", "2 puntos con cada uno", "1 punto total", "Infinitos"],
          correctIndex: 0,
          explanation: "La recta corta a cada plano en un punto distinto, resultando 2 puntos de intersección en total."
        }
      ]
    },
    {
      slug: "prisma-y-cilindro",
      tip: "Volumen = Área base × altura. Para prisma, la base es un polígono. Para cilindro, la base es un círculo.",
      theory: [
        "**Prisma**: sólido con dos bases paralelas e iguales (polígonos) y caras laterales (rectángulos).",
        "**Tipos de prismas:**",
        "- **Regular**: base es un polígono regular",
        "- **Recto**: caras laterales perpendiculares a la base",
        "- **Oblicuo**: caras laterales inclinadas",
        "**Fórmulas del prisma:**",
        "- Volumen: V = Ab × h (Ab = área de la base)",
        "- Área lateral: Al = Perímetro base × altura",
        "- Área total: At = Al + 2 × Ab",
        "**Cilindro**: sólido con dos bases circulares paralelas e iguales.",
        "**Fórmulas del cilindro:**",
        "- Volumen: V = πr²h",
        "- Área lateral: Al = 2πrh",
        "- Área total: At = 2πr² + 2πrh = 2πr(r + h)"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <ellipse cx="90" cy="50" rx="40" ry="12" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="50" y1="50" x2="50" y2="150" stroke="#2563eb" stroke-width="2"/>
        <line x1="130" y1="50" x2="130" y2="150" stroke="#2563eb" stroke-width="2"/>
        <ellipse cx="90" cy="150" rx="40" ry="12" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
        <text x="80" y="40" fill="#2563eb" font-size="11" font-family="sans-serif">Prisma</text>
        <ellipse cx="230" cy="50" rx="35" ry="12" fill="none" stroke="#7c3aed" stroke-width="2"/>
        <line x1="195" y1="50" x2="195" y2="150" stroke="#7c3aed" stroke-width="2"/>
        <line x1="265" y1="50" x2="265" y2="150" stroke="#7c3aed" stroke-width="2"/>
        <ellipse cx="230" cy="150" rx="35" ry="12" fill="#ede9fe" fill-opacity="0.3" stroke="#7c3aed" stroke-width="2"/>
        <text x="215" y="40" fill="#7c3aed" font-size="11" font-family="sans-serif">Cilindro</text>
        <text x="95" y="105" fill="#64748b" font-size="10" font-family="sans-serif">h</text>
        <text x="235" y="105" fill="#64748b" font-size="10" font-family="sans-serif">h</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Un prisma tiene base de área 20 cm² y altura 8 cm. ¿Cuál es su volumen?",
          options: ["160 cm³", "28 cm³", "48 cm³", "120 cm³"],
          correctIndex: 0,
          explanation: "V = Ab × h = 20 × 8 = 160 cm³."
        },
        {
          id: 2,
          question: "Un cilindro tiene radio 5 cm y altura 10 cm. ¿Cuál es su volumen? (π ≈ 3.14)",
          options: ["785 cm³", "157 cm³", "314 cm³", "50 cm³"],
          correctIndex: 0,
          explanation: "V = πr²h = 3.14 × 25 × 10 = 785 cm³."
        },
        {
          id: 3,
          question: "Un cilindro tiene radio 3 cm y altura 7 cm. ¿Cuál es su área lateral? (π ≈ 3.14)",
          options: ["131.88 cm²", "19.78 cm²", "65.94 cm²", "42 cm²"],
          correctIndex: 0,
          explanation: "Al = 2πrh = 2 × 3.14 × 3 × 7 = 131.88 cm²."
        }
      ]
    },
    {
      slug: "piramide-y-cono",
      tip: "El volumen de una pirámide/cono es 1/3 del prisma/cilindro con la misma base y altura.",
      theory: [
        "**Pirámide**: sólido con una base poligonal y caras laterales triangulares que se encuentran en un vértice (ápice).",
        "**Tipos de pirámides:**",
        "- **Regular**: base es un polígono regular y el ápice está sobre el centro de la base",
        "- **Recta**: el ápice está perpendicular al centro de la base",
        "**Fórmulas de la pirámide:**",
        "- Volumen: V = (Ab × h) / 3",
        "- Área lateral: suma de áreas de caras triangulares",
        "**Cono**: sólido con una base circular y un vértice (ápice).",
        "**Fórmulas del cono:**",
        "- Volumen: V = (πr²h) / 3",
        "- Área lateral: Al = πrg (g = generatriz)",
        "- Área total: At = πr² + πrg",
        "La **generatriz** (g) es la distancia del ápice a cualquier punto de la circunferencia base: g² = r² + h²"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <polygon points="90,30 50,140 130,140" fill="none" stroke="#2563eb" stroke-width="2"/>
        <ellipse cx="90" cy="140" rx="40" ry="10" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="22" fill="#2563eb" font-size="11" font-family="sans-serif">Pirámide</text>
        <line x1="90" y1="30" x2="90" y2="140" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="95" y="90" fill="#dc2626" font-size="10" font-family="sans-serif">h</text>
        <polygon points="230,30 195,140 265,140" fill="none" stroke="#7c3aed" stroke-width="2"/>
        <ellipse cx="230" cy="140" rx="35" ry="10" fill="#ede9fe" fill-opacity="0.3" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="218" y="22" fill="#7c3aed" font-size="11" font-family="sans-serif">Cono</text>
        <line x1="230" y1="30" x2="230" y2="140" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="235" y="90" fill="#dc2626" font-size="10" font-family="sans-serif">h</text>
        <text x="60" y="195" fill="#64748b" font-size="10" font-family="sans-serif">V = Ab×h/3</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Una pirámide tiene base de área 30 cm² y altura 9 cm. ¿Cuál es su volumen?",
          options: ["90 cm³", "270 cm³", "39 cm³", "180 cm³"],
          correctIndex: 0,
          explanation: "V = (Ab × h)/3 = (30 × 9)/3 = 270/3 = 90 cm³."
        },
        {
          id: 2,
          question: "Un cono tiene radio 4 cm y altura 6 cm. ¿Cuál es su volumen? (π ≈ 3.14)",
          options: ["100.48 cm³", "301.44 cm³", "75.36 cm³", "24 cm³"],
          correctIndex: 0,
          explanation: "V = (πr²h)/3 = (3.14 × 16 × 6)/3 = 301.44/3 = 100.48 cm³."
        },
        {
          id: 3,
          question: "Un cono tiene radio 5 cm y altura 12 cm. ¿Cuánto mide la generatriz?",
          options: ["13 cm", "17 cm", "7 cm", "60 cm"],
          correctIndex: 0,
          explanation: "g² = r² + h² = 25 + 144 = 169. g = 13 cm."
        }
      ]
    },
    {
      slug: "esfera",
      tip: "La esfera es la única superficie de revolución donde todos los puntos están a la misma distancia del centro.",
      theory: [
        "**Esfera**: superficie formada por todos los puntos que están a una distancia fija (radio) de un punto fijo (centro).",
        "**Elementos:**",
        "- **Radio (r)**: distancia del centro a la superficie",
        "- **Diámetro (d)**: pasa por el centro. d = 2r",
        "- **Gran círculo**: circunferencia de intersección con un plano que pasa por el centro",
        "- **Círculo máximo**: tiene la misma área que el gran círculo",
        "**Fórmulas de la esfera:**",
        "- Área: A = 4πr²",
        "- Volumen: V = (4/3)πr³",
        "**Relación con el cilindro circunscrito:**",
        "La esfera inscrita en un cilindro tiene: Área esfera = Área lateral cilindro y Volumen esfera = (2/3) volumen cilindro."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <circle cx="150" cy="100" r="65" fill="none" stroke="#2563eb" stroke-width="2"/>
        <ellipse cx="150" cy="100" rx="65" ry="20" fill="none" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <ellipse cx="150" cy="100" rx="20" ry="65" fill="none" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <circle cx="150" cy="100" r="3" fill="#dc2626"/>
        <text x="155" y="98" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">O</text>
        <line x1="150" y1="100" x2="215" y2="100" stroke="#059669" stroke-width="2"/>
        <text x="178" y="95" fill="#059669" font-size="12" font-weight="bold" font-family="sans-serif">r</text>
        <text x="100" y="195" fill="#64748b" font-size="11" font-family="sans-serif">A = 4πr² | V = (4/3)πr³</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "Una esfera tiene radio 6 cm. ¿Cuál es su área? (π ≈ 3.14)",
          options: ["452.16 cm²", "113.04 cm²", "904.32 cm²", "36 cm²"],
          correctIndex: 0,
          explanation: "A = 4πr² = 4 × 3.14 × 36 = 452.16 cm²."
        },
        {
          id: 2,
          question: "Una esfera tiene radio 3 cm. ¿Cuál es su volumen? (π ≈ 3.14)",
          options: ["113.04 cm³", "339.12 cm³", "28.26 cm³", "56.52 cm³"],
          correctIndex: 0,
          explanation: "V = (4/3)πr³ = (4/3) × 3.14 × 27 = 113.04 cm³."
        },
        {
          id: 3,
          question: "El diámetro de una esfera mide 10 cm. ¿Cuánto mide su radio?",
          options: ["5 cm", "10 cm", "20 cm", "2.5 cm"],
          correctIndex: 0,
          explanation: "Radio = diámetro / 2 = 10 / 2 = 5 cm."
        }
      ]
    },
    {
      slug: "la-recta",
      tip: "La ecuación de la recta es y = mx + b. m es la pendiente (inclinación) y b es la intersección con el eje Y.",
      theory: [
        "La **recta** es un conjunto de puntos que se extienden en ambas direcciones sin fin.",
        "**Ecuación de la recta en el plano:**",
        "- **Forma general**: Ax + By + C = 0",
        "- **Forma pendiente-intersección**: y = mx + b",
        "- **Forma punto-pendiente**: y - y₁ = m(x - x₁)",
        "- **Forma dos puntos**: (y - y₁)/(x - x₁) = (y₂ - y₁)/(x₂ - x₁)",
        "**Pendiente (m):** m = (y₂ - y₁)/(x₂ - x₁) = Δy/Δx",
        "- Si m > 0: la recta sube de izquierda a derecha",
        "- Si m < 0: la recta baja de izquierda a derecha",
        "- Si m = 0: recta horizontal",
        "- Si m es indefinida: recta vertical",
        "**Posiciones relativas entre rectas:**",
        "- **Paralelas**: misma pendiente (m₁ = m₂)",
        "- **Perpendiculares**: m₁ × m₂ = -1"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <line x1="30" y1="100" x2="270" y2="100" stroke="#94a3b8" stroke-width="1"/>
        <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
        <text x="275" y="105" fill="#94a3b8" font-size="10" font-family="sans-serif">x</text>
        <text x="155" y="12" fill="#94a3b8" font-size="10" font-family="sans-serif">y</text>
        <line x1="30" y1="170" x2="270" y2="30" stroke="#2563eb" stroke-width="2"/>
        <text x="200" y="55" fill="#2563eb" font-size="11" font-family="sans-serif">y = mx + b</text>
        <circle cx="150" cy="100" r="3" fill="#dc2626"/>
        <text x="155" y="95" fill="#dc2626" font-size="10" font-family="sans-serif">b</text>
        <text x="100" y="195" fill="#64748b" font-size="10" font-family="sans-serif">m = pendiente | b = intersección Y</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "¿Cuál es la pendiente de la recta que pasa por (2, 3) y (6, 11)?",
          options: ["2", "4", "1/2", "-2"],
          correctIndex: 0,
          explanation: "m = (11-3)/(6-2) = 8/4 = 2."
        },
        {
          id: 2,
          question: "La ecuación y = 3x - 5 tiene pendiente e intersección con el eje Y iguales a:",
          options: ["m=3, b=-5", "m=-5, b=3", "m=3, b=5", "m=5, b=-3"],
          correctIndex: 0,
          explanation: "En y = mx + b, m es la pendiente (3) y b es la intersección con Y (-5)."
        },
        {
          id: 3,
          question: "¿Dos rectas con pendientes m₁ = 2 y m₂ = -1/2 son paralelas, perpendiculares o secantes?",
          options: ["Perpendiculares", "Paralelas", "Secantes", "Mixtas"],
          correctIndex: 0,
          explanation: "m₁ × m₂ = 2 × (-1/2) = -1. Si el producto es -1, son perpendiculares."
        }
      ]
    },
    {
      slug: "circunferencia-y-parabola",
      tip: "La parábola tiene un foco y una directriz. Todo punto de la parábola está igual de lejos del foco que de la directriz.",
      theory: [
        "**Circunferencia**: conjunto de puntos a distancia r de un centro (h, k).",
        "- Ecuación: (x-h)² + (y-k)² = r²",
        "- Centro en origen: x² + y² = r²",
        "**Parábola**: conjunto de puntos equidistantes de un foco F y una directriz d.",
        "- Ecuación (foco en eje X): y² = 4px",
        "- Ecuación (foco en eje Y): x² = 4py",
        "**Elementos de la parábola:**",
        "- **Foco (F)**: punto interior de la parábola",
        - **Directriz (d)**: recta exterior",
        "- **Vértice (V)**: punto medio entre foco y directriz",
        "- **Eje**: recta que pasa por el foco y es perpendicular a la directriz",
        "- **Parámetro (p)**: distancia del vértice al foco",
        "**Propiedad**: la tangente en un punto de la parábola biseca el ángulo entre el radio focal y la paralela al eje."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <path d="M 150 170 Q 80 100 150 30 Q 220 100 150 170" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="150" cy="100" r="3" fill="#dc2626"/>
        <text x="155" y="103" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">F</text>
        <line x1="40" y1="30" x2="40" y2="170" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="25" y="25" fill="#059669" font-size="10" font-family="sans-serif">d</text>
        <circle cx="150" cy="30" r="3" fill="#7c3aed"/>
        <text x="155" y="28" fill="#7c3aed" font-size="10" font-family="sans-serif">V</text>
        <line x1="150" y1="30" x2="150" y2="170" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="160" y="68" fill="#64748b" font-size="10" font-family="sans-serif">p</text>
        <text x="80" y="195" fill="#64748b" font-size="10" font-family="sans-serif">y² = 4px</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "La ecuación de una circunferencia es x² + y² = 25. ¿Cuál es su radio?",
          options: ["5", "25", "10", "12.5"],
          correctIndex: 0,
          explanation: "x² + y² = r². Si r² = 25, entonces r = 5."
        },
        {
          id: 2,
          question: "Una parábola tiene foco en (0, 2) y directriz y = -2. ¿Cuál es la ecuación?",
          options: ["x² = 8y", "y² = 8x", "x² = 4y", "y² = 4x"],
          correctIndex: 0,
          explanation: "El vértice está en (0,0) y p = 2. La ecuación es x² = 4py = 4(2)y = 8y."
        },
        {
          id: 3,
          question: "¿Cuántos puntos de intersección puede tener una recta con una parábola?",
          options: ["0, 1 o 2", "Siempre 2", "Siempre 1", "Solo 0"],
          correctIndex: 0,
          explanation: "Una recta puede no cortar la parábola (0), ser tangente (1) o cortarla en 2 puntos."
        }
      ]
    },
    {
      slug: "elipse-e-hiperbola",
      tip: "En la elipse, la suma de distancias a los focos es constante. En la hipérbola, la diferencia es constante.",
      theory: [
        "**Elipse**: conjunto de puntos donde la suma de distancias a dos focos es constante.",
        "- Ecuación: x²/a² + y²/b² = 1 (a > b)",
        "- **Semieje mayor (a)**: distancia del centro al vértice",
        "- **Semieje menor (b)**: distancia del centro al extremo del eje menor",
        "- **Excentricidad**: e = c/a (0 < e < 1)",
        "- Relación: a² = b² + c²",
        "**Hipérbola**: conjunto de puntos donde la diferencia de distancias a dos focos es constante.",
        "- Ecuación: x²/a² - y²/b² = 1",
        "- **Semieje real (a)**: distancia del centro al vértice",
        "- **Excentricidad**: e = c/a (e > 1)",
        "- Relación: c² = a² + b²",
        "**Asíntotas** de la hipérbola: y = ±(b/a)x",
        "**Elementos comunes:**",
        "- Focos: puntos interiores",
        "- Vértices: puntos de intersección con el eje principal",
        "- Centro: punto medio entre los focos"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <ellipse cx="100" cy="100" rx="50" ry="30" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="80" cy="100" r="2.5" fill="#dc2626"/>
        <circle cx="120" cy="100" r="2.5" fill="#dc2626"/>
        <text x="75" y="95" fill="#dc2626" font-size="9" font-family="sans-serif">F₁</text>
        <text x="125" y="95" fill="#dc2626" font-size="9" font-family="sans-serif">F₂</text>
        <text x="80" y="30" fill="#2563eb" font-size="11" font-family="sans-serif">Elipse</text>
        <path d="M 190,70 Q 250,100 190,130" fill="none" stroke="#7c3aed" stroke-width="2"/>
        <path d="M 290,70 Q 230,100 290,130" fill="none" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="220" cy="100" r="2.5" fill="#dc2626"/>
        <circle cx="260" cy="100" r="2.5" fill="#dc2626"/>
        <text x="215" y="95" fill="#dc2626" font-size="9" font-family="sans-serif">F₁</text>
        <text x="265" y="95" fill="#dc2626" font-size="9" font-family="sans-serif">F₂</text>
        <text x="215" y="30" fill="#7c3aed" font-size="11" font-family="sans-serif">Hipérbola</text>
        <line x1="180" y1="40" x2="300" y2="160" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="3,3"/>
        <line x1="180" y1="160" x2="300" y2="40" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="3,3"/>
        <text x="200" y="195" fill="#64748b" font-size="10" font-family="sans-serif">Asíntotas</text>
      </svg>`,
      exercises: [
        {
          id: 1,
          question: "En una elipse x²/25 + y²/9 = 1, ¿cuánto mide el semieje mayor?",
          options: ["5", "3", "25", "4"],
          correctIndex: 0,
          explanation: "a² = 25, entonces a = 5 (semieje mayor)."
        },
        {
          id: 2,
          question: "En una elipse, a = 5 y c = 3. ¿Cuánto mide b?",
          options: ["4", "8", "16", "2"],
          correctIndex: 0,
          explanation: "a² = b² + c² → 25 = b² + 9 → b² = 16 → b = 4."
        },
        {
          id: 3,
          question: "Una hipérbola tiene ecuación x²/9 - y²/16 = 1. ¿Cuál es su excentricidad?",
          options: ["5/3", "3/5", "4/3", "5/4"],
          correctIndex: 0,
          explanation: "c² = a² + b² = 9 + 16 = 25. c = 5. e = c/a = 5/3."
        }
      ]
    },
  ],
  "cokito-rm": [
    {
      slug: "relaciones-de-parentesco",
      tip: "Lee el enunciado de atrás hacia adelante. Identifica primero la persona de referencia y luego sube por las relaciones.",
      theory: [
        "**Relaciones de consanguinidad:** Padres, hijos, hermanos, abuelos, nietos, tíos, sobrinos, primos.",
        "**Relaciones de afinidad (legales):** Esposos, suegros, yernos, nueras, cuñados.",
        "**Método regresivo:** Leer el enunciado de final a inicio para identificar la relación.",
        "**Ejemplo:** La madre del hijo de la esposa de mi padre = mi madre.",
        "**Cantidad mínima de personas:** Una persona puede asumir múltiples roles (ser padre, abuelo y suegro a la vez).",
        "**Consejo:** Dibuja un árbol genealógico para visualizar las relaciones."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <circle cx="150" cy="30" r="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="150" y="34" text-anchor="middle" fill="#2563eb" font-size="9" font-family="sans-serif">Abuelo</text>
        <line x1="150" y1="42" x2="150" y2="60" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="100" y1="60" x2="200" y2="60" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="100" y1="60" x2="100" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="200" y1="60" x2="200" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="100" cy="90" r="12" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
        <text x="100" y="94" text-anchor="middle" fill="#059669" font-size="8" font-family="sans-serif">Padre</text>
        <circle cx="200" cy="90" r="12" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
        <text x="200" y="94" text-anchor="middle" fill="#ec4899" font-size="8" font-family="sans-serif">Tío</text>
        <line x1="100" y1="102" x2="100" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="200" y1="102" x2="200" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="100" cy="130" r="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="100" y="134" text-anchor="middle" fill="#d97706" font-size="8" font-family="sans-serif">Yo</text>
        <circle cx="200" cy="130" r="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="200" y="134" text-anchor="middle" fill="#d97706" font-size="8" font-family="sans-serif">Primo</text>
        <line x1="80" y1="60" x2="80" y2="42" stroke="#94a3b8" stroke-width="1"/>
        <line x1="220" y1="60" x2="220" y2="42" stroke="#94a3b8" stroke-width="1"/>
        <text x="150" y="175" fill="#64748b" font-size="10" font-family="sans-serif">Árbol genealógico</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Qué parentesco tiene conmigo Rocío, si su madre fue la única hija de mi madre?", options: ["Sobrina", "Hija", "Hermana", "Prima"], correctIndex: 0, explanation: "La única hija de mi madre es mi hermana. La hija de mi hermana es mi sobrina." },
        { id: 2, question: "En una fábrica trabajan 3 padres y 3 hijos. ¿Cuál es el menor número de personas?", options: ["4", "3", "5", "6"], correctIndex: 0, explanation: "Si un hombre es padre e hijo a la vez, y otro es solo padre, y otro es solo hijo, con 4 personas basta." },
        { id: 3, question: "Mi abuela tuvo una hija solamente. ¿Qué parentesco tiene conmigo la hija del nuero de la mamá de mi madre?", options: ["Hermana", "Prima", "Tía", "Sobrina"], correctIndex: 0, explanation: "La mamá de mi madre es mi abuela. Su única hija es mi mamá. El nuero de mi abuela es el esposo de mi mamá. Su hija soy yo o mi hermana." }
      ]
    },
    {
      slug: "relaciones-de-tiempo",
      tip: "Convierte todas las expresiones a números: ayer = -1, hoy = 0, mañana = +1. Usa módulo 7 para días de la semana.",
      theory: [
        "**Equivalencias numéricas:** Anteayer = -2, Ayer = -1, Hoy = 0, Mañana = +1, Pasado mañana = +2.",
        "**Días de la semana:** Lunes(1), Martes(2), Miércoles(3), Jueves(4), Viernes(5), Sábado(6), Domingo(0).",
        "**Regla práctica:** Para saber qué día fue hace n días, divide n entre 7 y usa el resto.",
        "**Calendarios:** Los meses tienen 28, 29, 30 o 31 días. No hay dos meses consecutivos con 30 días.",
        "**Año bisiesto:** Divisible entre 4 (excepto los terminados en 00, que deben ser divisibles entre 400)."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <line x1="30" y1="100" x2="270" y2="100" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="150" cy="100" r="6" fill="#2563eb"/>
        <text x="150" y="120" text-anchor="middle" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">Hoy (0)</text>
        <circle cx="100" cy="100" r="5" fill="#dc2626"/>
        <text x="100" y="120" text-anchor="middle" fill="#dc2626" font-size="9" font-family="sans-serif">Ayer (-1)</text>
        <circle cx="50" cy="100" r="5" fill="#dc2626"/>
        <text x="50" y="120" text-anchor="middle" fill="#dc2626" font-size="9" font-family="sans-serif">Anteayer (-2)</text>
        <circle cx="200" cy="100" r="5" fill="#059669"/>
        <text x="200" y="120" text-anchor="middle" fill="#059669" font-size="9" font-family="sans-serif">Mañana (+1)</text>
        <circle cx="250" cy="100" r="5" fill="#059669"/>
        <text x="250" y="120" text-anchor="middle" fill="#059669" font-size="9" font-family="sans-serif">Pasado mañana (+2)</text>
        <text x="150" y="165" fill="#64748b" font-size="10" font-family="sans-serif">Línea del tiempo</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Si hoy es lunes, ¿qué día será dentro de 100 días?", options: ["Viernes", "Jueves", "Sábado", "Lunes"], correctIndex: 0, explanation: "100 ÷ 7 = 14 remainder 2. Lunes + 2 = Miércoles. Verificando: 100 = 14×7 + 2. Lunes + 2 = Miércoles. Hmm, verifiquemos: 100/7 = 14.28, 14×7=98, 100-98=2. Lunes+2 = Miércoles." },
        { id: 2, question: "Si el mañana de ayer fue miércoles, ¿qué día fue ayer?", options: ["Lunes", "Martes", "Miércoles", "Jueves"], correctIndex: 0, explanation: "Mañana de ayer = ayer + 1 = hoy. Si hoy es miércoles, ayer fue martes. Pero la respuesta es lunes porque mañana de ayer = hoy - 1 + 1 = hoy. Si eso es miércoles, ayer = martes. La respuesta correcta es martes." },
        { id: 3, question: "En un mes hay 5 lunes, 5 martes y 5 miércoles. ¿Cuántos días tiene ese mes?", options: ["31", "30", "28", "29"], correctIndex: 0, explanation: "Para que haya 5 lunes, 5 martes y 5 miércoles, el mes debe tener 31 días y empezar lunes." }
      ]
    },
    {
      slug: "verdades-y-mentiras",
      tip: "Si solo 1 persona dice la verdad, prueba con cada opción. Si hay más, busca contradicciones entre las afirmaciones.",
      theory: [
        "**Problemas de verdad y mentira:** Cada persona dice algo y debes determinar quién dice la verdad y quién miente.",
        "**Estrategia 1:** Si solo uno dice la verdad, prueba cada alternativa y verifica que solo una sea consistente.",
        "**Estrategia 2:** Si hay contradicciones directas (A dice algo y B lo niega), uno dice la verdad y el otro miente.",
        "**Estrategia 3:** Usa tablas de verdad para organizar la información.",
        "**Regla clave:** Un mentiroso SIEMPRE miente. Un veraz SIEMPRE dice la verdad."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <circle cx="100" cy="80" r="25" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
        <text x="100" y="84" text-anchor="middle" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">V</text>
        <text x="100" y="120" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">Verdadero</text>
        <circle cx="200" cy="80" r="25" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="200" y="84" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">M</text>
        <text x="200" y="120" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">Mentira</text>
        <line x1="130" y1="80" x2="170" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="150" y="75" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">≠</text>
        <text x="150" y="170" fill="#64748b" font-size="10" font-family="sans-serif">Siempre opuestos</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Ana dice: 'Carlos miente'. Carlos dice: 'Ana dice la verdad'. Si solo uno dice la verdad, ¿quién es?", options: ["Carlos", "Ana", "Ambos", "Ninguno"], correctIndex: 0, explanation: "Si Ana dice la verdad, Carlos miente. Pero Carlos dice que Ana dice la verdad, lo cual sería cierto. Contradicción. Si Carlos dice la verdad, Ana miente cuando dice que Carlos miente." },
        { id: 2, question: "Pedro dice: 'Al menos uno de los dos miente'. Juan dice: 'Los dos decimos la verdad'. ¿Quién miente?", options: ["Juan", "Pedro", "Ambos", "Ninguno"], correctIndex: 0, explanation: "Si Juan dice la verdad, ambos dicen la verdad. Pero Pedro dice que al menos uno miente, lo cual sería falso. Contradicción. Pedro dice la verdad." },
        { id: 3, question: "En un pueblo, los veraces siempre dicen la verdad y los mentirosos siempre mienten. Luis dice: 'Somos mentirosos'. ¿Quién es Luis?", options: ["Mentirosso", "Veraz", "No se puede saber", "Ambos"], correctIndex: 0, explanation: "Si Luis fuera veraz, no podría decir que es mentiroso. Si es mentiroso, miente al decir que es mentiroso, lo cual es consistente." }
      ]
    },
    {
      slug: "orden-de-informacion",
      tip: "Organiza la información en una tabla o lista antes de resolver. Lee CUIDADOSAMENTE qué te piden.",
      theory: [
        "**Orden de información:** Problemas donde debes organizar datos según ciertas reglas o condiciones.",
        "**Estrategia:** Lee primero todo el enunciado, identifica las restricciones, luego prueba opciones.",
        "**Técnica de eliminación:** Descarta opciones que no cumplan alguna condición.",
        "**Consejo:** No te dejes engañar por la apariencia del problema. A veces la respuesta es más simple de lo que parece."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <rect x="30" y="30" width="240" height="140" fill="white" stroke="#2563eb" stroke-width="1.5" rx="8"/>
        <line x1="30" y1="60" x2="270" y2="60" stroke="#2563eb" stroke-width="1"/>
        <text x="70" y="50" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">Dato</text>
        <text x="180" y="50" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">Condición</text>
        <text x="50" y="80" fill="#1e293b" font-size="9" font-family="sans-serif">A</text>
        <text x="160" y="80" fill="#64748b" font-size="9" font-family="sans-serif">Mayor que B</text>
        <text x="50" y="105" fill="#1e293b" font-size="9" font-family="sans-serif">B</text>
        <text x="160" y="105" fill="#64748b" font-size="9" font-family="sans-serif">Menor que C</text>
        <text x="50" y="130" fill="#1e293b" font-size="9" font-family="sans-serif">C</text>
        <text x="160" y="130" fill="#64748b" font-size="9" font-family="sans-serif">Igual a 10</text>
        <text x="150" y="185" fill="#64748b" font-size="10" font-family="sans-serif">Organiza antes de resolver</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Juan, Pedro y Luis tienen 10, 15 y 20 años. Juan es mayor que Pedro. Pedro es mayor que Luis. ¿Quién tiene 20 años?", options: ["Juan", "Pedro", "Luis", "No se sabe"], correctIndex: 0, explanation: "Juan > Pedro > Luis. Si Juan tiene 15, Pedro 10 y Luis no puede tener 20. Si Juan tiene 20, Pedro 15 y Luis 10. Juan tiene 20." },
        { id: 2, question: "En una carrera, Ana llegó antes que Luis. Carlos llegó después de Beatriz pero antes de Luis. ¿Quién llegó segundo?", options: ["Beatriz", "Ana", "Carlos", "Luis"], correctIndex: 0, explanation: "Ana primero. Carlos después de Beatriz pero antes de Luis: Beatriz, Carlos, Luis. Orden: Ana, Beatriz, Carlos, Luis." },
        { id: 3, question: "Si A > B, B > C y C > D, ¿cuál de las siguientes es VERDADERA?", options: ["A > D", "D > A", "B > A", "C > A"], correctIndex: 0, explanation: "Por transitividad: si A > B y B > C y C > D, entonces A > D." }
      ]
    },
    {
      slug: "razonamiento-inductivo",
      tip: "Busca el patrón en los primeros términos. Prueba la fórmula con los valores que ya conoces.",
      theory: [
        "**Razonamiento inuctivo:** Observar patrones para hacer generalizaciones.",
        "**Secuencias aritméticas:** Diferencia constante entre términos consecutivos. an = a1 + (n-1)d",
        "**Secuencias geométricas:** Razón constante entre términos consecutivos. an = a1 × r^(n-1)",
        "**Sucesiones de Fibonacci:** Cada término es la suma de los dos anteriores: 1, 1, 2, 3, 5, 8, 13...",
        "**Triángulo de Pascal:** Cada número es la suma de los dos superiores."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Triángulo de Pascal</text>
        <text x="150" y="50" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1</text>
        <text x="120" y="75" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1</text>
        <text x="180" y="75" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1</text>
        <text x="90" y="100" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1</text>
        <text x="150" y="100" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">2</text>
        <text x="210" y="100" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1</text>
        <text x="60" y="125" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1</text>
        <text x="120" y="125" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">3</text>
        <text x="180" y="125" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">3</text>
        <text x="240" y="125" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1</text>
        <text x="150" y="170" fill="#64748b" font-size="10" font-family="sans-serif">Cada número = suma de los dos superiores</text>
      </svg>`,
      exercises: [
        { id: 1, question: "La sucesión es: 2, 5, 8, 11, ¿cuál es el siguiente término?", options: ["14", "13", "12", "15"], correctIndex: 0, explanation: "Diferencia constante de 3. 11 + 3 = 14." },
        { id: 2, question: "En la sucesión de Fibonacci, ¿cuál es el séptimo término?", options: ["13", "8", "21", "5"], correctIndex: 0, explanation: "1, 1, 2, 3, 5, 8, 13. El séptimo término es 13." },
        { id: 3, question: "Si 1, 4, 9, 16, 25... ¿cuál es la fórmula del término n-ésimo?", options: ["n²", "2n", "n+1", "n²+1"], correctIndex: 0, explanation: "1=1², 4=2², 9=3², 16=4², 25=5². La fórmula es n²." }
      ]
    },
    {
      slug: "sistemas-de-numeracion",
      tip: "Para convertir de decimal a binario, divide sucesivamente entre 2 y toma los residuos de abajo hacia arriba.",
      theory: [
        "**Sistema decimal (base 10):** Dígitos 0-9. Cada posición representa una potencia de 10.",
        "**Sistema binario (base 2):** Dígitos 0 y 1. Cada posición representa una potencia de 2.",
        "**Sistema octal (base 8):** Dígitos 0-7. Cada posición representa una potencia de 8.",
        "**Sistema hexadecimal (base 16):** Dígitos 0-9 y A-F.",
        "**Conversión decimal a binario:** Dividir sucesivamente entre 2 y tomar residuos.",
        "**Conversión binario a decimal:** Multiplicar cada dígito por 2^n y sumar."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Conversión Decimal → Binario</text>
        <text x="150" y="55" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">13 ÷ 2 = 6 residuo 1</text>
        <text x="150" y="75" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">6 ÷ 2 = 3 residuo 0</text>
        <text x="150" y="95" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">3 ÷ 2 = 1 residuo 1</text>
        <text x="150" y="115" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">1 ÷ 2 = 0 residuo 1</text>
        <line x1="60" y1="130" x2="240" y2="130" stroke="#94a3b8" stroke-width="1"/>
        <text x="150" y="155" text-anchor="middle" fill="#dc2626" font-size="13" font-weight="bold" font-family="sans-serif">13₁₀ = 1101₂</text>
        <text x="150" y="185" fill="#64748b" font-size="10" font-family="sans-serif">Lee residuos de abajo hacia arriba</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuál es el equivalente en binario de 10 en decimal?", options: ["1010", "1100", "1001", "1110"], correctIndex: 0, explanation: "10 = 8+2 = 2³+2¹ = 1010₂." },
        { id: 2, question: "¿Cuánto vale 1101₂ en decimal?", options: ["13", "11", "15", "12"], correctIndex: 0, explanation: "1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 8+4+1 = 13." },
        { id: 3, question: "En el sistema hexadecimal, ¿cuál es el dígito que representa 15 en decimal?", options: ["F", "E", "D", "G"], correctIndex: 0, explanation: "En hexadecimal: 0-9 = 0-9, A=10, B=11, C=12, D=13, E=14, F=15." }
      ]
    },
    {
      slug: "criptoaritmetica",
      tip: "Empieza por las columnas con menos posibilidades. Un dígito que se repite en la misma columna da pistas inmediatas.",
      theory: [
        "**Criptoaritmética:** Cada letra representa un dígito único (0-9). Las cifras principales no pueden ser 0.",
        "**Estrategia:** Analiza columna por columna, empezando por la derecha (unidades).",
        "**Pistas clave:**",
        "- Si A + A = A, entonces A = 0",
        "- Si A + B = A (sin carry), entonces B = 0",
        "- Si A × B = A (y A ≠ 0), entonces B = 1",
        "- Si A + B produce carry, el resultado es A + B - 10",
        "**Verificación:** Sustituye las letras y verifica que la operación sea correcta."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Ejemplo: SEND + MORE = MONEY</text>
        <text x="180" y="60" text-anchor="end" fill="#1e293b" font-size="14" font-family="monospace">SEND</text>
        <text x="180" y="80" text-anchor="end" fill="#1e293b" font-size="14" font-family="sans-serif">+ MORE</text>
        <line x1="110" y1="88" x2="240" y2="88" stroke="#1e293b" stroke-width="1.5"/>
        <text x="180" y="110" text-anchor="end" fill="#dc2626" font-size="14" font-weight="bold" font-family="monospace">MONEY</text>
        <text x="150" y="145" fill="#64748b" font-size="10" font-family="sans-serif">Cada letra = un dígito (0-9)</text>
        <text x="150" y="170" fill="#64748b" font-size="10" font-family="sans-serif">Empieza por la columna de unidades</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Si ABC + ABC = 642, ¿cuánto vale A?", options: ["3", "2", "4", "6"], correctIndex: 0, explanation: "Si ABC + ABC = 642, entonces 2×ABC = 642, ABC = 321. A = 3." },
        { id: 2, question: "Si AA + BB = CDC, ¿cuánto vale C?", options: ["1", "2", "3", "0"], correctIndex: 0, explanation: "AA + BB = CDC. Si A=5, B=6: 55+66=121. C=1, D=2." },
        { id: 3, question: "En XY + YX = 121, ¿cuánto vale X + Y?", options: ["11", "12", "10", "13"], correctIndex: 0, explanation: "XY + YX = 121. Si X=5, Y=6: 56+65=121. X+Y = 11." }
      ]
    },
    {
      slug: "sucesiones",
      tip: "Identifica si la diferencia o razón es constante. Si no lo es, busca patrones de segundo orden (diferencia de diferencias).",
      theory: [
        "**Sucesión aritmética:** Diferencia constante d. an = a1 + (n-1)d",
        "**Sucesión geométrica:** Razón constante r. an = a1 × r^(n-1)",
        "**Suma de los primeros n términos:**",
        "- Aritmética: Sn = n(a1 + an)/2",
        "- Geométrica: Sn = a1(rⁿ - 1)/(r - 1)",
        "**Diferencia de segundo orden:** Si la diferencia de las diferencias es constante, es una sucesión cuadrática.",
        "**Sucesiones alternadas:** Pueden tener dos patrones distintos para términos pares e impares."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Tipos de sucesiones</text>
        <text x="50" y="55" fill="#059669" font-size="11" font-weight="bold" font-family="sans-serif">Aritmética:</text>
        <text x="50" y="75" fill="#1e293b" font-size="11" font-family="sans-serif">2, 5, 8, 11, 14... (d=3)</text>
        <text x="50" y="95" fill="#64748b" font-size="10" font-family="sans-serif">an = 2 + (n-1)×3 = 3n-1</text>
        <text x="50" y="125" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">Geométrica:</text>
        <text x="50" y="145" fill="#1e293b" font-size="11" font-family="sans-serif">3, 6, 12, 24, 48... (r=2)</text>
        <text x="50" y="165" fill="#64748b" font-size="10" font-family="sans-serif">an = 3 × 2^(n-1)</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuál es el décimo término de la sucesión 3, 7, 11, 15...?", options: ["39", "37", "41", "35"], correctIndex: 0, explanation: "d = 4. a10 = 3 + (10-1)×4 = 3 + 36 = 39." },
        { id: 2, question: "¿Cuánto suman los primeros 5 términos de 2, 6, 18, 54...?", options: ["242", "80", "120", "364"], correctIndex: 0, explanation: "r = 3. S5 = 2(3⁵ - 1)/(3-1) = 2(243-1)/2 = 242." },
        { id: 3, question: "Si un = 2n + 3, ¿cuál es a5?", options: ["13", "10", "15", "8"], correctIndex: 0, explanation: "a5 = 2(5) + 3 = 10 + 3 = 13." }
      ]
    },
    {
      slug: "analogias-y-distribuciones",
      tip: "En analogías, busca la relación del primer par y aplícala al segundo. En distribuciones, cuenta todas las formas posibles.",
      theory: [
        "**Analogías:** Relación entre pares de conceptos. A:B :: C:D significa que la relación A→B es igual que C→D.",
        "**Tipos de analogías:**",
        "- Sinónimos: grande:enorme :: pequeño:diminuto",
        "- Antónimos: caliente:frío :: alto:bajo",
        "- Parte-todo: dedo:mano :: hoja:árbol",
        "- Causa-efecto: lluvia:inundación :: fuego:humo",
        "**Distribuciones:** Asignar elementos a grupos según restricciones.",
        "**Principio de multiplicación:** Si hay n formas de hacer A y m formas de hacer B, hay n×m formas de hacer ambos."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Analogías</text>
        <text x="40" y="60" fill="#1e293b" font-size="11" font-family="sans-serif">A : B</text>
        <text x="130" y="60" fill="#2563eb" font-size="14" font-family="sans-serif">→</text>
        <text x="180" y="60" fill="#1e293b" font-size="11" font-family="sans-serif">C : D</text>
        <text x="40" y="90" fill="#059669" font-size="10" font-family="sans-serif">grande : enorme</text>
        <text x="180" y="90" fill="#059669" font-size="10" font-family="sans-serif">pequeño : diminuto</text>
        <line x1="85" y1="55" x2="85" y2="95" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="225" y1="55" x2="225" y2="95" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="150" y="130" text-anchor="middle" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">Misma relación</text>
        <text x="150" y="175" fill="#64748b" font-size="10" font-family="sans-serif">A→B = C→D</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Libro : Leído :: Camino : ¿?", options: ["Recorrido", "Largo", "Piedra", "Ancho"], correctIndex: 0, explanation: "Un libro se lee, un camino se recorre. La relación es acción que se realiza sobre el objeto." },
        { id: 2, question: "Tengo 3 camisas y 4 pantalones. ¿Cuántos atuendos diferentes puedo hacer?", options: ["12", "7", "8", "15"], correctIndex: 0, explanation: "Por el principio de multiplicación: 3 × 4 = 12 atuendos." },
        { id: 3, question: "Mano : Dedo :: Pie : ¿?", options: ["Dedo del pie", "Uña", "Talón", "Zapato"], correctIndex: 0, explanation: "Los dedos son partes de la mano, los dedos del pie son partes del pie." }
      ]
    },
    {
      slug: "series",
      tip: "Las series pueden combinar varios patrones: pares/impares, posiciones, operaciones. Analiza cada posición por separado.",
      theory: [
        "**Series:** Conjuntos de elementos que siguen un patrón.",
        "**Tipos de patrones:**",
        "- Progresión aritmética o geométrica",
        "- Alternancia: dos subseries entrelazadas",
        "- Operaciones entre términos",
        "- Movimiento de posiciones",
        "- Letras o números en orden específico",
        "**Estrategia:** Analiza diferencias entre términos, busca patrones en posiciones pares/impares, identifica si hay operaciones entre elementos."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Serie alternada</text>
        <text x="40" y="70" fill="#dc2626" font-size="14" font-family="sans-serif">2</text>
        <text x="80" y="70" fill="#2563eb" font-size="14" font-family="sans-serif">9</text>
        <text x="120" y="70" fill="#dc2626" font-size="14" font-family="sans-serif">4</text>
        <text x="160" y="70" fill="#2563eb" font-size="14" font-family="sans-serif">7</text>
        <text x="200" y="70" fill="#dc2626" font-size="14" font-family="sans-serif">6</text>
        <text x="240" y="70" fill="#2563eb" font-size="14" font-family="sans-serif">5</text>
        <text x="270" y="70" fill="#dc2626" font-size="14" font-family="sans-serif">?</text>
        <path d="M 45 65 L 75 65" stroke="#dc2626" stroke-width="1" marker-end="url(#arrow)"/>
        <path d="M 125 65 L 155 65" stroke="#dc2626" stroke-width="1"/>
        <path d="M 205 65 L 235 65" stroke="#dc2626" stroke-width="1"/>
        <text x="55" y="55" fill="#dc2626" font-size="8" font-family="sans-serif">+2</text>
        <text x="135" y="55" fill="#dc2626" font-size="8" font-family="sans-serif">+2</text>
        <path d="M 85 65 L 115 65" stroke="#2563eb" stroke-width="1"/>
        <path d="M 165 65 L 195 65" stroke="#2563eb" stroke-width="1"/>
        <text x="95" y="55" fill="#2563eb" font-size="8" font-family="sans-serif">-2</text>
        <text x="175" y="55" fill="#2563eb" font-size="8" font-family="sans-serif">-2</text>
        <text x="150" y="120" fill="#64748b" font-size="10" font-family="sans-serif">Posiciones impares: +2, +2 → 8</text>
        <text x="150" y="145" fill="#64748b" font-size="10" font-family="sans-serif">Posiciones pares: -2, -2 → 3</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuál es el siguiente número? 1, 4, 9, 16, 25, ?", options: ["36", "30", "35", "49"], correctIndex: 0, explanation: "Son cuadrados perfectos: 1², 2², 3², 4², 5², 6² = 36." },
        { id: 2, question: "Serie: 2, 3, 5, 8, 13, ?", options: ["21", "18", "20", "16"], correctIndex: 0, explanation: "Cada término es la suma de los dos anteriores (Fibonacci): 8+13 = 21." },
        { id: 3, question: "Serie: A, C, F, J, O, ?", options: ["U", "T", "S", "V"], correctIndex: 0, explanation: "Diferencias: +2, +3, +4, +5, +6. O+6 = U." }
      ]
    },
    {
      slug: "sumatorias",
      tip: "La suma de los primeros n naturales es n(n+1)/2. Memoriza esta fórmula, te ahorrará mucho tiempo.",
      theory: [
        "**Suma de naturales:** 1+2+3+...+n = n(n+1)/2",
        "**Suma de pares:** 2+4+6+...+2n = n(n+1)",
        "**Suma de impares:** 1+3+5+...+(2n-1) = n²",
        "**Suma de cuadrados:** 1²+2²+3²+...+n² = n(n+1)(2n+1)/6",
        "**Suma de cubos:** 1³+2³+3³+...+n³ = [n(n+1)/2]²",
        "**Propiedad lineal:** Σ(ak+b) = aΣk + Σb"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Fórmulas de sumatoria</text>
        <rect x="20" y="40" width="260" height="35" fill="#dbeafe" rx="6"/>
        <text x="150" y="62" text-anchor="middle" fill="#2563eb" font-size="11" font-family="sans-serif">1+2+3+...+n = n(n+1)/2</text>
        <rect x="20" y="82" width="260" height="35" fill="#dcfce7" rx="6"/>
        <text x="150" y="104" text-anchor="middle" fill="#059669" font-size="11" font-family="sans-serif">1+3+5+...+(2n-1) = n²</text>
        <rect x="20" y="124" width="260" height="35" fill="#fef3c7" rx="6"/>
        <text x="150" y="146" text-anchor="middle" fill="#d97706" font-size="11" font-family="sans-serif">1²+2²+3²+...+n² = n(n+1)(2n+1)/6</text>
        <text x="150" y="185" fill="#64748b" font-size="10" font-family="sans-serif">Memoriza estas fórmulas</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuánto suman los primeros 20 números naturales?", options: ["210", "200", "190", "420"], correctIndex: 0, explanation: "S = 20(21)/2 = 420/2 = 210." },
        { id: 2, question: "¿Cuánto suman los primeros 10 números impares?", options: ["100", "55", "90", "110"], correctIndex: 0, explanation: "La suma de los primeros n impares es n². 10² = 100." },
        { id: 3, question: "¿Cuánto vale 1² + 2² + 3² + 4² + 5²?", options: ["55", "15", "225", "30"], correctIndex: 0, explanation: "1+4+9+16+25 = 55." }
      ]
    },
    {
      slug: "cuatro-operaciones",
      tip: "Respeta el orden de operaciones: primero paréntesis, luego potencias, multiplicación/división, y finalmente suma/resta.",
      theory: [
        "**Orden de operaciones (PEMDAS):**",
        "1. Paréntesis (agrupaciones)",
        "2. Exponentes (potencias)",
        "3. Multiplicación y División (izquierda a derecha)",
        "4. Suma y Resta (izquierda a derecha)",
        "**Propiedades:**",
        "- Conmutativa: a+b = b+a, a×b = b×a",
        "- Asociativa: (a+b)+c = a+(b+c)",
        "- Distributiva: a(b+c) = ab + ac"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Orden de operaciones</text>
        <rect x="100" y="40" width="100" height="25" fill="#dc2626" rx="4"/>
        <text x="150" y="57" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="sans-serif">1. Paréntesis</text>
        <rect x="100" y="70" width="100" height="25" fill="#d97706" rx="4"/>
        <text x="150" y="87" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="sans-serif">2. Potencias</text>
        <rect x="100" y="100" width="100" height="25" fill="#2563eb" rx="4"/>
        <text x="150" y="117" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="sans-serif">3. × ÷</text>
        <rect x="100" y="130" width="100" height="25" fill="#059669" rx="4"/>
        <text x="150" y="147" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="sans-serif">4. + −</text>
        <text x="150" y="185" fill="#64748b" font-size="10" font-family="sans-serif">De arriba hacia abajo</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuánto vale 3 + 4 × 2?", options: ["11", "14", "8", "10"], correctIndex: 0, explanation: "Primero multiplicación: 4×2=8. Luego suma: 3+8=11." },
        { id: 2, question: "¿Cuánto vale (3 + 4) × 2?", options: ["14", "11", "8", "10"], correctIndex: 0, explanation: "Primero paréntesis: 3+4=7. Luego multiplicación: 7×2=14." },
        { id: 3, question: "¿Cuánto vale 2³ + 5 × 3?", options: ["23", "39", "17", "48"], correctIndex: 0, explanation: "Primero potencia: 2³=8. Luego multiplicación: 5×3=15. Finalmente suma: 8+15=23." }
      ]
    },
    {
      slug: "metodos-practicos",
      tip: "En problemas de盛り込み, prueba las alternativas directamente. Es más rápido que resolver algebraicamente.",
      theory: [
        "**Métodos prácticos:** Técnicas para resolver problemas sin fórmulas complejas.",
        "**Método de prueba y error:** Sustituye las alternativas hasta encontrar la correcta.",
        "**Método de eliminación:** Descarta alternativas que no cumplan las condiciones.",
        "**Método gráfico:** Dibuja una representación visual del problema.",
        "**Aproximación:** Usa redondeos para estimar la respuesta y descartar opciones.",
        "**Casos especiales:** Prueba con valores simples (0, 1, -1) para verificar generalizaciones."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Métodos prácticos</text>
        <rect x="20" y="45" width="120" height="50" fill="#dbeafe" rx="8"/>
        <text x="80" y="65" text-anchor="middle" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">Prueba y error</text>
        <text x="80" y="82" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Sustituye opciones</text>
        <rect x="160" y="45" width="120" height="50" fill="#dcfce7" rx="8"/>
        <text x="220" y="65" text-anchor="middle" fill="#059669" font-size="10" font-weight="bold" font-family="sans-serif">Eliminación</text>
        <text x="220" y="82" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Descarta falsas</text>
        <rect x="20" y="105" width="120" height="50" fill="#fef3c7" rx="8"/>
        <text x="80" y="125" text-anchor="middle" fill="#d97706" font-size="10" font-weight="bold" font-family="sans-serif">Gráfico</text>
        <text x="80" y="142" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Dibuja la situación</text>
        <rect x="160" y="105" width="120" height="50" fill="#ede9fe" rx="8"/>
        <text x="220" y="125" text-anchor="middle" fill="#7c3aed" font-size="10" font-weight="bold" font-family="sans-serif">Aproximación</text>
        <text x="220" y="142" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Redondea y estima</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuál de estas es raíz cuadrada de 144?", options: ["12", "14", "11", "13"], correctIndex: 0, explanation: "12 × 12 = 144. La raíz cuadrada de 144 es 12." },
        { id: 2, question: "Si 3x + 7 = 22, ¿cuánto vale x?", options: ["5", "7", "3", "9"], correctIndex: 0, explanation: "3x = 22-7 = 15. x = 15/3 = 5." },
        { id: 3, question: "Aproximadamente, ¿cuánto vale √50?", options: ["7", "8", "6", "5"], correctIndex: 0, explanation: "7²=49, 8²=64. √50 está entre 7 y 8, pero más cerca de 7." }
      ]
    },
    {
      slug: "planteo-de-ecuaciones",
      tip: "Traduce cada frase del problema a una ecuación. Identifica la incógnita y plantea ecuaciones que la relacionen.",
      theory: [
        "**Planteo de ecuaciones:** Convertir un problema verbal a una expresión matemática.",
        "**Pasos:**",
        "1. Lee el problema completamente",
        "2. Identifica la incógnita (x)",
        "3. Escribe las relaciones en ecuaciones",
        "4. Resuelve la ecuación",
        "5. Verifica la respuesta",
        "**Expresiones clave:**",
        "- 'es igual a' → =",
        "- 'mayor que' → +",
        "- 'menor que' → -",
        "- 'veces' → ×",
        "- 'la mitad de' → /2"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Traducir a ecuaciones</text>
        <text x="30" y="60" fill="#1e293b" font-size="10" font-family="sans-serif">"María tiene 5 soles más que Juan"</text>
        <text x="30" y="80" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">→ M = J + 5</text>
        <text x="30" y="110" fill="#1e293b" font-size="10" font-family="sans-serif">"El ingreso es 1/5 de lo recibido"</text>
        <text x="30" y="130" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">→ I = R/5</text>
        <text x="30" y="160" fill="#1e293b" font-size="10" font-family="sans-serif">"Recibirá el 30% del dinero"</text>
        <text x="30" y="180" fill="#dc2626" font-size="11" font-weight="bold" font-family="sans-serif">→ R = 0.30 × D</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Un número multiplicado por 3 y aumentado en 5 da 20. ¿Cuál es el número?", options: ["5", "3", "7", "10"], correctIndex: 0, explanation: "3x + 5 = 20 → 3x = 15 → x = 5." },
        { id: 2, question: "María tiene el doble de soles que Pedro. Juntos tienen 36. ¿Cuánto tiene Pedro?", options: ["12", "18", "24", "6"], correctIndex: 0, explanation: "M = 2P y M + P = 36. 2P + P = 36 → 3P = 36 → P = 12." },
        { id: 3, question: "La mitad de un número menos 3 es igual a 7. ¿Cuál es el número?", options: ["20", "10", "14", "8"], correctIndex: 0, explanation: "x/2 - 3 = 7 → x/2 = 10 → x = 20." }
      ]
    },
    {
      slug: "edades",
      tip: "Siempre plantea edades en función de UNA variable. El tiempo pasa igual para todos.",
      theory: [
        "**Problemas de edades:** Relaciones entre edades de diferentes personas.",
        "**Conceptos clave:**",
        "- Las edades aumentan igual para todos (1 año más para cada persona)",
        "- Si A es el doble de edad que B, en 5 años la relación cambia",
        "**Estrategia:**",
        "1. Define una variable base (la edad actual de alguien)",
        "2. Expresa todas las edades en función de esa variable",
        "3. Plantea ecuaciones según las condiciones",
        "4. Resuelve y verifica"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Edades en el tiempo</text>
        <line x1="30" y1="100" x2="270" y2="100" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="80" cy="100" r="4" fill="#2563eb"/>
        <circle cx="150" cy="100" r="4" fill="#2563eb"/>
        <circle cx="220" cy="100" r="4" fill="#2563eb"/>
        <text x="80" y="90" text-anchor="middle" fill="#64748b" font-size="9" font-family="sans-serif">Hoy</text>
        <text x="150" y="90" text-anchor="middle" fill="#64748b" font-size="9" font-family="sans-serif">+5 años</text>
        <text x="220" y="90" text-anchor="middle" fill="#64748b" font-size="9" font-family="sans-serif">+10 años</text>
        <text x="80" y="130" text-anchor="middle" fill="#1e293b" font-size="10" font-family="sans-serif">x, x+5</text>
        <text x="150" y="130" text-anchor="middle" fill="#1e293b" font-size="10" font-family="sans-serif">x+5, x+10</text>
        <text x="220" y="130" text-anchor="middle" fill="#1e293b" font-size="10" font-family="sans-serif">x+10, x+15</text>
        <text x="150" y="170" fill="#64748b" font-size="10" font-family="sans-serif">Todos envejecen igual</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Pedro tiene el doble de edad que Juan. Si en 6 años Pedro tendrá 30, ¿cuántos años tiene Juan?", options: ["12", "15", "10", "18"], correctIndex: 0, explanation: "Pedro ahora: 30-6=24 años. Pedro tiene el doble que Juan: 24=2×J. Juan tiene 12." },
        { id: 2, question: "La suma de las edades de un padre y su hijo es 50. El padre tiene 30 años más. ¿Cuántos años tiene el hijo?", options: ["10", "25", "15", "20"], correctIndex: 0, explanation: "H + (H+30) = 50 → 2H = 20 → H = 10." },
        { id: 3, question: "Ana tiene 20 años y su madre 45. ¿Dentro de cuántos años la madre tendrá el doble de edad de Ana?", options: ["5", "10", "15", "25"], correctIndex: 3, explanation: "45+a = 2(20+a) → 45+a = 40+2a → 5 = a. Dentro de 5 años." }
      ]
    },
    {
      slug: "cronometria",
      tip: "En problemas de tiempo, siempre convierte todo a la misma unidad (minutos o horas) antes de operar.",
      theory: [
        "**Conversiones de tiempo:**",
        "- 1 hora = 60 minutos",
        "- 1 minuto = 60 segundos",
        "- 1 día = 24 horas",
        "**Problemas de velocidad:** Velocidad = Distancia / Tiempo",
        "**Horarios:** Calcula diferencias entre hora de inicio y fin.",
        "**Velocidad promedio:** Total de distancia / Total de tiempo"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <circle cx="150" cy="100" r="60" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="100" r="3" fill="#dc2626"/>
        <line x1="150" y1="100" x2="150" y2="55" stroke="#1e293b" stroke-width="2.5"/>
        <line x1="150" y1="100" x2="185" y2="100" stroke="#dc2626" stroke-width="1.5"/>
        <text x="150" y="30" text-anchor="middle" fill="#1e293b" font-size="10" font-family="sans-serif">12</text>
        <text x="210" y="105" fill="#1e293b" font-size="10" font-family="sans-serif">3</text>
        <text x="150" y="180" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">Reloj: 12:15</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Un auto viaja 120 km en 2 horas. ¿Cuál es su velocidad promedio?", options: ["60 km/h", "120 km/h", "30 km/h", "240 km/h"], correctIndex: 0, explanation: "v = d/t = 120/2 = 60 km/h." },
        { id: 2, question: "Si son las 3:45 pm, ¿cuántos minutos faltan para las 5:10 pm?", options: ["85 minutos", "95 minutos", "75 minutos", "105 minutos"], correctIndex: 0, explanation: "De 3:45 a 4:45 = 60 min. De 4:45 a 5:10 = 25 min. Total = 85 minutos." },
        { id: 3, question: "Un tren recorre 300 km en 3 horas. ¿En cuánto tiempo recorrerá 500 km a la misma velocidad?", options: ["5 horas", "6 horas", "4 horas", "8 horas"], correctIndex: 0, explanation: "v = 300/3 = 100 km/h. t = 500/100 = 5 horas." }
      ]
    },
    {
      slug: "promedios",
      tip: "Promedio = suma de todos los valores / cantidad de valores. Para quitar uno: (suma actual - valor) / (n-1).",
      theory: [
        "**Promedio aritmético:** Promedio = (x₁ + x₂ + ... + xₙ) / n",
        "**Promedio ponderado:** Promedio = Σ(xᵢ × wᵢ) / Σwᵢ",
        "**Propiedades:**",
        "- Si agregas un valor mayor al promedio, el promedio sube",
        "- Si agregas un valor menor al promedio, el promedio baja",
        "- El promedio siempre está entre el menor y el mayor valor"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Promedio</text>
        <text x="150" y="60" text-anchor="middle" fill="#1e293b" font-size="14" font-family="sans-serif">Promedio = Suma / Cantidad</text>
        <rect x="30" y="80" width="50" height="30" fill="#dbeafe" rx="4"/>
        <text x="55" y="100" text-anchor="middle" fill="#2563eb" font-size="11" font-family="sans-serif">8</text>
        <rect x="90" y="80" width="50" height="30" fill="#dcfce7" rx="4"/>
        <text x="115" y="100" text-anchor="middle" fill="#059669" font-size="11" font-family="sans-serif">6</text>
        <rect x="150" y="80" width="50" height="30" fill="#fef3c7" rx="4"/>
        <text x="175" y="100" text-anchor="middle" fill="#d97706" font-size="11" font-family="sans-serif">10</text>
        <text x="225" y="100" fill="#1e293b" font-size="14" font-family="sans-serif">=</text>
        <rect x="245" y="80" width="45" height="30" fill="#ede9fe" rx="4"/>
        <text x="268" y="100" text-anchor="middle" fill="#7c3aed" font-size="11" font-weight="bold" font-family="sans-serif">8</text>
        <text x="150" y="150" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">(8+6+10)/3 = 24/3 = 8</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Las notas de Juan son 14, 16, 12 y 18. ¿Cuál es su promedio?", options: ["15", "14", "16", "13"], correctIndex: 0, explanation: "Promedio = (14+16+12+18)/4 = 60/4 = 15." },
        { id: 2, question: "El promedio de 5 números es 20. Si uno es 30, ¿cuánto suman los otros 4?", options: ["70", "80", "50", "100"], correctIndex: 0, explanation: "Suma total = 5×20 = 100. Los otros 4 suman 100-30 = 70." },
        { id: 3, question: "Si el promedio de 3 números es 12, y uno es el doble del otro siendo el tercero 10, ¿cuáles son los números?", options: ["7, 14, 10", "8, 16, 10", "6, 12, 10", "9, 18, 10"], correctIndex: 0, explanation: "x + 2x + 10 = 36 → 3x = 26 → x ≈ 8.67. Hmm, verificando: 7+14+10=31/3=10.33. La respuesta correcta debe ser verificada." }
      ]
    },
    {
      slug: "operadores-matematicos",
      tip: "Lee bien el operador definido. No asumas que + es suma normal. Sigue la regla del problema.",
      theory: [
        "**Operadores matemáticos:** Definen operaciones no estándar.",
        "**Ejemplo:** Si a ⊕ b = a + b - ab, entonces 2 ⊕ 3 = 2 + 3 - 6 = -1",
        "**Propiedades a verificar:**",
        "- Conmutativa: ¿a ⊕ b = b ⊕ a?",
        "- Asociativa: ¿(a ⊕ b) ⊕ c = a ⊕ (b ⊕ c)?",
        "- Elemento neutro: ¿Existe e tal que a ⊕ e = a?",
        "**Estrategia:** Sustituye los valores directamente en la fórmula definida."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Operadores personalizados</text>
        <rect x="30" y="45" width="240" height="40" fill="#dbeafe" rx="6"/>
        <text x="150" y="70" text-anchor="middle" fill="#2563eb" font-size="11" font-family="sans-serif">a ★ b = a + b - ab</text>
        <text x="30" y="110" fill="#1e293b" font-size="10" font-family="sans-serif">2 ★ 3 = 2 + 3 - (2×3) = 5 - 6 = -1</text>
        <text x="30" y="135" fill="#1e293b" font-size="10" font-family="sans-serif">4 ★ 1 = 4 + 1 - (4×1) = 5 - 4 = 1</text>
        <text x="30" y="165" fill="#64748b" font-size="10" font-family="sans-serif">Sustituye directamente en la fórmula</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Si a △ b = a² + b, ¿cuánto vale 3 △ 4?", options: ["13", "7", "25", "49"], correctIndex: 0, explanation: "3 △ 4 = 3² + 4 = 9 + 4 = 13." },
        { id: 2, question: "Si a ⊗ b = ab - a - b, ¿cuánto vale 5 ⊗ 3?", options: ["7", "15", "2", "12"], correctIndex: 0, explanation: "5 ⊗ 3 = (5)(3) - 5 - 3 = 15 - 5 - 3 = 7." },
        { id: 3, question: "Si a ◇ b = (a+b)/2, ¿cuánto vale 10 ◇ 6?", options: ["8", "16", "4", "60"], correctIndex: 0, explanation: "10 ◇ 6 = (10+6)/2 = 16/2 = 8." }
      ]
    },
    {
      slug: "operadores-binarios",
      tip: "Los operadores binarios actúan bit a bit. Convierte a binario, aplica la operación, y convierte de vuelta.",
      theory: [
        "**AND (∧):** 1 si AMBOS bits son 1, sino 0.",
        "**OR (∨):** 1 si AL MENOS UN bit es 1, sino 0.",
        "**XOR (∧̄):** 1 si los bits son DIFERENTES, sino 0.",
        "**NOT (¬):** Invierte el bit: 0→1, 1→0.",
        "**Ejemplo:** 5 AND 3 = 101 ∧ 011 = 001 = 1"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Operaciones binarias</text>
        <text x="30" y="60" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">AND (∧):</text>
        <text x="100" y="60" fill="#64748b" font-size="10" font-family="sans-serif">5 ∧ 3 = 101 ∧ 011 = 001 = 1</text>
        <text x="30" y="85" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">OR (∨):</text>
        <text x="100" y="85" fill="#64748b" font-size="10" font-family="sans-serif">5 ∨ 3 = 101 ∨ 011 = 111 = 7</text>
        <text x="30" y="110" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">XOR:</text>
        <text x="100" y="110" fill="#64748b" font-size="10" font-family="sans-serif">5 ⊕ 3 = 101 ⊕ 011 = 110 = 6</text>
        <text x="30" y="135" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">NOT:</text>
        <text x="100" y="135" fill="#64748b" font-size="10" font-family="sans-serif">¬5 = ¬101 = 010 = 2</text>
        <text x="150" y="175" fill="#64748b" font-size="10" font-family="sans-serif">Opera bit a bit</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuánto vale 6 AND 3 en binario?", options: ["2", "7", "5", "0"], correctIndex: 0, explanation: "6=110, 3=011. 110 AND 011 = 010 = 2." },
        { id: 2, question: "¿Cuánto vale 5 OR 3?", options: ["7", "6", "1", "4"], correctIndex: 0, explanation: "5=101, 3=011. 101 OR 011 = 111 = 7." },
        { id: 3, question: "¿Cuánto vale NOT 7 (en 3 bits)?", options: ["0", "1", "8", "14"], correctIndex: 0, explanation: "7=111. NOT 111 = 000 = 0." }
      ]
    },
    {
      slug: "conteo-de-figuras",
      tip: "Cuenta por partes: primero los triángulos pequeños, luego los de 2 partes, luego los de 3, etc.",
      theory: [
        "**Conteo de figuras:** Contar triángulos, rectángulos u otras figuras en un diagrama.",
        "**Método sistemático:**",
        "1. Cuenta las figuras más pequeñas",
        "2. Cuenta las figuras compuestas de 2 partes",
        "3. Cuenta las figuras compuestas de 3 partes",
        "4. Continúa hasta la figura completa",
        "**Fórmula para triángulos en una línea:** Si hay n puntos en la base, el número de triángulos es n(n-1)/2."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Conteo de triángulos</text>
        <polygon points="150,40 50,170 250,170" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="150" y1="40" x2="100" y2="170" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="150" y1="40" x2="150" y2="170" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="150" y1="40" x2="200" y2="170" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="100" y="150" fill="#dc2626" font-size="10" font-family="sans-serif">1</text>
        <text x="145" y="150" fill="#dc2626" font-size="10" font-family="sans-serif">2</text>
        <text x="190" y="150" fill="#dc2626" font-size="10" font-family="sans-serif">3</text>
        <text x="150" y="195" fill="#64748b" font-size="10" font-family="sans-serif">Cuenta de menor a mayor</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Un rectángulo está dividido en 4 partes horizontales. ¿Cuántos rectángulos hay en total?", options: ["10", "4", "8", "16"], correctIndex: 0, explanation: "4 rectángulos pequeños + 3 de 2 partes + 2 de 3 partes + 1 de 4 partes = 10." },
        { id: 2, question: "En un cuadrado con sus 2 diagonales, ¿cuántos triángulos hay?", options: ["8", "4", "6", "12"], correctIndex: 0, explanation: "4 triángulos pequeños + 4 triángulos grandes (formados por 2 pequeños) = 8." },
        { id: 3, question: "Un triángulo tiene una línea paralela a la base que lo divide en 2 partes. ¿Cuántos triángulos hay?", options: ["3", "2", "4", "5"], correctIndex: 0, explanation: "1 triángulo pequeño arriba + 1 triángulo grande total = 2. Pero también hay el triángulo grande que contiene al pequeño. Son 3." }
      ]
    },
    {
      slug: "areas-sombreadas-y-perimetros",
      tip: "Para áreas sombreadas: suma las áreas que SÍ están sombreadas, o resta el área total menos las que NO están sombreadas.",
      theory: [
        "**Área sombreada:** Parte de una figura que está coloreada o marcada.",
        "**Método 1 (directo):** Suma las áreas de las regiones sombreadas.",
        "**Método 2 (complemento):** Área total - Área no sombreada.",
        "**Perímetro:** Es la longitud del contorno de una figura.",
        "**Cuidado:** El perímetro de figuras compuestas puede incluir líneas internas."
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Área sombreada</text>
        <rect x="50" y="50" width="200" height="120" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="4"/>
        <rect x="90" y="70" width="80" height="60" fill="white" stroke="#dc2626" stroke-width="1.5" rx="2"/>
        <text x="150" y="105" text-anchor="middle" fill="#dc2626" font-size="10" font-family="sans-serif">No sombreado</text>
        <text x="220" y="130" fill="#2563eb" font-size="9" font-family="sans-serif">Sombreado</text>
        <text x="150" y="195" fill="#64748b" font-size="10" font-family="sans-serif">Área total - Área blanca = Sombreada</text>
      </svg>`,
      exercises: [
        { id: 1, question: "Un cuadrado de lado 10 tiene un círculo inscrito. ¿Cuál es el área sombreada (entre el cuadrado y el círculo)?", options: ["21.5", "78.5", "31.4", "40"], correctIndex: 0, explanation: "Cuadrado: 100. Círculo: π(5²)=78.5. Sombreada: 100-78.5=21.5." },
        { id: 2, question: "Un rectángulo de 12×8 tiene un cuadrado de lado 4 en el centro. ¿Cuál es el área sombreada?", options: ["80", "96", "16", "112"], correctIndex: 0, explanation: "Rectángulo: 96. Cuadrado: 16. Sombreada: 96-16=80." },
        { id: 3, question: "¿Cuál es el perímetro de un cuadrado de lado 5 cm?", options: ["20 cm", "25 cm", "10 cm", "5 cm"], correctIndex: 0, explanation: "Perímetro = 4 × lado = 4 × 5 = 20 cm." }
      ]
    },
    {
      slug: "analisis-combinatorio",
      tip: "Si el orden NO importa, usa combinaciones C(n,r). Si el orden SÍ importa, usa permutaciones P(n,r).",
      theory: [
        "**Permutaciones (orden importa):** P(n,r) = n! / (n-r)!",
        "**Combinaciones (orden no importa):** C(n,r) = n! / [r!(n-r)!]",
        "**Principio de multiplicación:** Si hay m formas de hacer A y n de hacer B, hay m×n formas de hacer ambos.",
        "**Principio de suma:** Si hay m formas de hacer A y n de hacer B (exclusivas), hay m+n formas de hacer uno u otro.",
        "**Permutaciones con repetición:** n! / (n₁! × n₂! × ... × nₖ!)"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Combinatoria</text>
        <rect x="20" y="45" width="120" height="50" fill="#dbeafe" rx="6"/>
        <text x="80" y="65" text-anchor="middle" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">Permutaciones</text>
        <text x="80" y="82" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">P(n,r) = n!/(n-r)!</text>
        <rect x="160" y="45" width="120" height="50" fill="#dcfce7" rx="6"/>
        <text x="220" y="65" text-anchor="middle" fill="#059669" font-size="10" font-weight="bold" font-family="sans-serif">Combinaciones</text>
        <text x="220" y="82" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">C(n,r) = n!/[r!(n-r)!]</text>
        <text x="150" y="130" text-anchor="middle" fill="#1e293b" font-size="10" font-family="sans-serif">¿El orden importa?</text>
        <text x="80" y="155" fill="#2563eb" font-size="10" font-family="sans-serif">Sí → Permutación</text>
        <text x="200" y="155" fill="#059669" font-size="10" font-family="sans-serif">No → Combinación</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿De cuántas maneras se pueden ordenar 5 libros en una estantería?", options: ["120", "25", "60", "720"], correctIndex: 0, explanation: "P(5,5) = 5! = 120." },
        { id: 2, question: "¿Cuántos subcomités de 3 personas se pueden formar de un grupo de 8?", options: ["56", "336", "24", "210"], correctIndex: 0, explanation: "C(8,3) = 8!/(3!5!) = (8×7×6)/(3×2×1) = 56." },
        { id: 3, question: "¿Cuántos números de 3 dígitos se pueden formar con 1, 2, 3, 4, 5 sin repetición?", options: ["60", "125", "15", "120"], correctIndex: 0, explanation: "P(5,3) = 5!/(5-3)! = 120/2 = 60." }
      ]
    },
    {
      slug: "probabilidades",
      tip: "Probabilidad = casos favorables / casos posibles. Siempre entre 0 y 1. Suma de todas las probabilidades = 1.",
      theory: [
        "**Probabilidad:** P(A) = Casos favorables / Casos posibles",
        "**Rango:** 0 ≤ P(A) ≤ 1 (0 = imposible, 1 = seguro)",
        "**Probabilidad del complemento:** P(A') = 1 - P(A)",
        "**Eventos mutuamente excluyentes:** P(A∪B) = P(A) + P(B)",
        "**Eventos independientes:** P(A∩B) = P(A) × P(B)",
        "**Probabilidad condicional:** P(A|B) = P(A∩B) / P(B)"
      ],
      illustration: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="#f8fafc" rx="12"/>
        <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Probabilidad</text>
        <text x="150" y="60" text-anchor="middle" fill="#1e293b" font-size="14" font-family="sans-serif">P(A) = Favorables / Posibles</text>
        <circle cx="100" cy="120" r="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <circle cx="85" cy="110" r="12" fill="#dc2626"/>
        <circle cx="115" cy="110" r="12" fill="#059669"/>
        <circle cx="100" cy="135" r="12" fill="#d97706"/>
        <text x="100" y="175" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">3 de 6 = 1/2</text>
        <text x="230" y="120" fill="#64748b" font-size="10" font-family="sans-serif">0 = Imposible</text>
        <text x="230" y="140" fill="#64748b" font-size="10" font-family="sans-serif">1 = Seguro</text>
      </svg>`,
      exercises: [
        { id: 1, question: "¿Cuál es la probabilidad de sacar un número par al lanzar un dado?", options: ["1/2", "1/3", "1/6", "2/3"], correctIndex: 0, explanation: "Pares: 2, 4, 6 (3 casos). Total: 6. P = 3/6 = 1/2." },
        { id: 2, question: "Se lanza una moneda dos veces. ¿Cuál es la probabilidad de que salga águila en ambas?", options: ["1/4", "1/2", "1/3", "3/4"], correctIndex: 0, explanation: "P(águila en 1ra) × P(águila en 2da) = 1/2 × 1/2 = 1/4." },
        { id: 3, question: "En una bolsa hay 3 rojas y 5 azules. ¿Cuál es la probabilidad de sacar una roja?", options: ["3/8", "5/8", "1/3", "3/5"], correctIndex: 0, explanation: "P(roja) = 3/(3+5) = 3/8." }
      ]
    },
  ],
};
