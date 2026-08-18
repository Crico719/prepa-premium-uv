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
};
