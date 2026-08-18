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
          correctIndex: 3,
          explanation: "156 = (n-2)×180/n → 156n = 180n - 360 → 24n = 360 → n = 15. Pero verificando: (15-2)×180/15 = 156°. La respuesta correcta es 15. Hmm, verifiquemos: 156n = 180(n-2) = 180n - 360 → 360 = 24n → n = 15."
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
  ],
};
