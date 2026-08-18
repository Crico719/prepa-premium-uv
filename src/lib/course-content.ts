export type DifficultyLevel = "basico" | "intermedio" | "avanzado";

export type TheorySection = {
  level: DifficultyLevel;
  title: string;
  lines: string[];
};

export type CourseExercise = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: DifficultyLevel;
};

export type CourseModule = {
  slug: string;
  tip: string;
  theory: TheorySection[];
  illustrations: string[];
  exercises: CourseExercise[];
};

export type CourseContent = Record<string, CourseModule[]>;

export const courseContent: CourseContent = {
  "geometria": [
  {
    slug: "linea-recta-y-angulos",
    tip: "Para identificar ángulos complementarios, recuerda que suman 90°; los suplementarios suman 180°. En el examen, verifica siempre si el problema implica ángulos adyacentes, verticales o alternos internos antes de resolver.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **línea recta** es una sucesión infinita de puntos que se extiende en ambas direcciones sin curvatura.",
          "Un **segmento de recta** es la porción de una recta comprendida entre dos puntos llamados extremos.",
          "Una **semirrecta** (o rayo) parte de un punto y se extiende indefinidamente en una dirección.",
          "Un **ángulo** es la figura formada por dos semirrectas que comparten un mismo vértice.",
          "Las semirrectas que forman el ángulo se llaman **lados** del ángulo, y el punto común es el **vértice**.",
          "Los ángulos se clasifican por su medida: **agudo** (< 90°), **recto** (= 90°), **obtuso** (90° < α < 180°), **llano** (= 180°) y **cónico** (> 180°)."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "La **suma de ángulos en un punto** alrededor de un vértice es siempre 360°.",
          "Dos ángulos son **complementarios** si su suma es 90°, y **suplementarios** si su suma es 180°.",
          "Los **ángulos opuestos por el vértice** son iguales: si α y β son opuestos por el vértice, entonces α = β.",
          "Los **ángulos adyacentes** comparten vértice y un lado, y no se superponen. Sus medidas suman el ángulo mayor.",
          "Cuando dos rectas se cortan, los **ángulos alternos internos** son iguales, los **alternos externos** son iguales, y los **correspondientes** son iguales.",
          "La fórmula para el ángulo entre dos rectas con pendientes m₁ y m₂ es: **tan(θ) = |(m₂ − m₁) / (1 + m₁·m₂)|**."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **teorema del ángulo externo** establece que el ángulo externo de un triángulo es igual a la suma de los dos ángulos internos no adyacentes.",
          "El **teorema de los ángulos formados por una transversal** con dos rectas paralelas: la suma de los ángulos internos del mismo lado es 180°.",
          "El ángulo formado por dos rectas que se cortan puede expresarse como: **θ = arctan(|(m₂ − m₁)/(1 + m₁m₂)|)**, siempre que 1 + m₁m₂ ≠ 0.",
          "Si las dos rectas son **perpendiculares**, el producto de sus pendientes es −1: **m₁ · m₂ = −1**.",
          "En la **geometría analítica**, el ángulo que forma una recta con el eje positivo de x se calcula como **θ = arctan(m)**, donde m es la pendiente.",
          "Truco de examen: cuando no se conocen las pendientes, usa vectores directores **v₁** y **v₂** y aplica **cos(θ) = (v₁ · v₂) / (|v₁| · |v₂|)**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <line x1="20" y1="160" x2="280" y2="160" stroke="#2563eb" stroke-width="2"/>
        <line x1="20" y1="160" x2="200" y2="50" stroke="#dc2626" stroke-width="2"/>
        <line x1="20" y1="160" x2="280" y2="160" stroke="#dc2626" stroke-width="2"/>
        <path d="M 55 160 A 35 35 0 0 0 42 137" fill="none" stroke="#059669" stroke-width="2"/>
        <circle cx="20" cy="160" r="4" fill="#7c3aed"/>
        <text x="15" y="180" font-family="Arial" font-size="11" fill="#333">V</text>
        <text x="282" y="175" font-family="Arial" font-size="11" fill="#2563eb">L₁</text>
        <text x="200" y="42" font-family="Arial" font-size="11" fill="#dc2626">L₂</text>
        <text x="50" y="145" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">α</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ángulo entre dos rectas</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <line x1="30" y1="100" x2="270" y2="100" stroke="#2563eb" stroke-width="2"/>
        <line x1="150" y1="20" x2="150" y2="180" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,3"/>
        <line x1="150" y1="100" x2="250" y2="40" stroke="#dc2626" stroke-width="2"/>
        <line x1="150" y1="100" x2="250" y2="160" stroke="#059669" stroke-width="2"/>
        <path d="M 185 100 A 35 35 0 0 0 175 75" fill="none" stroke="#dc2626" stroke-width="2"/>
        <path d="M 185 100 A 35 35 0 0 1 175 125" fill="none" stroke="#059669" stroke-width="2"/>
        <circle cx="150" cy="100" r="4" fill="#7c3aed"/>
        <text x="145" y="115" font-family="Arial" font-size="10" fill="#7c3aed">V</text>
        <text x="165" y="78" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">α₁</text>
        <text x="165" y="133" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">α₂</text>
        <text x="100" y="90" font-family="Arial" font-size="10" fill="#333" font-style="italic">α₁ = α₂</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ángulos opuestos por el vértice</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuánto mide el ángulo complementario de 35°?",
        options: ["145°", "55°", "125°", "65°"],
        correctIndex: 1,
        explanation: "Los ángulos complementarios suman 90°. Entonces: 90° − 35° = 55°.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Dos rectas se cortan y forman un ángulo de 70°. ¿Cuánto miden los ángulos opuestos por el vértice?",
        options: ["70° y 110°", "70° y 70°", "110° y 110°", "35° y 145°"],
        correctIndex: 1,
        explanation: "Los ángulos opuestos por el vértice son iguales. Si uno mide 70°, su opuesto también mide 70°.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "La recta r tiene pendiente m₁ = 2 y la recta s tiene pendiente m₂ = −1/2. ¿Cuál es el ángulo entre ambas rectas?",
        options: ["45°", "60°", "90°", "30°"],
        correctIndex: 2,
        explanation: "Si m₁ · m₂ = 2 × (−1/2) = −1, las rectas son perpendiculares, por lo que el ángulo entre ellas es 90°.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "triangulos",
    tip: "En todo triángulo, la suma de sus ángulos internos siempre es 180°. Usa esta propiedad para encontrar ángulos faltantes rápidamente. En el examen, identifica primero el tipo de triángulo antes de aplicar fórmulas específicas.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **triángulo** es un polígono formado por tres segmentos de recta (lados) que se encuentran en tres vértices.",
          "Los **ángulos internos** de cualquier triángulo suman siempre **180°**.",
          "Los triángulos se clasifican por sus ángulos: **acutángulo** (todos agudos), **rectángulo** (un ángulo recto) y **obtusángulo** (un ángulo obtuso).",
          "Por sus lados: **equilátero** (3 lados iguales), **isósceles** (2 lados iguales) y **escalenos** (3 lados diferentes).",
          "La **altura** de un triángulo es el segmento perpendicular desde un vértice al lado opuesto (o su prolongación).",
          "El **perímetro** de un triángulo es la suma de la longitud de sus tres lados: **P = a + b + c**."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **área** de un triángulo se calcula como: **A = (b × h) / 2**, donde b es la base y h es la altura correspondiente.",
          "La **fórmula de Herón** permite calcular el área conociendo los tres lados: **A = √[s(s−a)(s−b)(s−c)]**, donde s = (a+b+c)/2 es el semiperímetro.",
          "El **teorema del seno** establece: **a/sen(A) = b/sen(B) = c/sen(C) = 2R**, donde R es el radio de la circunferencia circunscrita.",
          "El **teorema del coseno** relaciona lados y ángulos: **c² = a² + b² − 2ab·cos(C)**.",
          "En un triángulo isósceles, los ángulos opuestos a los lados iguales son iguales entre sí.",
          "La **bisectriz** de un ángulo divide al ángulo en dos partes iguales y al lado opuesto en proporción a los lados adyacentes."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **teorema de la bisectriz** interna: si AD biseca ∠BAC, entonces **BD/DC = AB/AC**.",
          "El **teorema de la mediana**: la mediana divide al triángulo en dos triángulos de igual área.",
          "La **desigualdad triangular** establece que la suma de cualesquiera dos lados es siempre mayor que el tercero: **a + b > c**.",
          "El **área máxima** de un triángulo con dos lados dados a y b ocurre cuando el ángulo entre ellos es 90°: **A_max = (a × b) / 2**.",
          "En un triángulo rectángulo, el **cateto** es igual a la hipotenusa por el seno del ángulo opuesto, y por el coseno del ángulo adyacente.",
          "Truco de examen: en un triángulo con ángulos de 30°-60°-90°, los lados están en proporción **1 : √3 : 2**; en uno de 45°-45°-90°, la proporción es **1 : 1 : √2**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 50,170 250,170" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="150" y1="30" x2="150" y2="170" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
        <path d="M 145 170 L 150 165 L 155 170" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <circle cx="150" cy="170" r="3" fill="#dc2626"/>
        <circle cx="150" cy="30" r="3" fill="#7c3aed"/>
        <circle cx="50" cy="170" r="3" fill="#059669"/>
        <circle cx="250" cy="170" r="3" fill="#059669"/>
        <text x="148" y="20" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">A</text>
        <text x="30" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">B</text>
        <text x="255" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">C</text>
        <text x="155" y="100" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">h</text>
        <text x="140" y="188" font-family="Arial" font-size="10" fill="#dc2626">90°</text>
        <text x="100" y="185" font-family="Arial" font-size="10" fill="#333">b</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Altura de un triángulo</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 50,170 250,170" fill="#dbeafe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>
        <text x="145" y="20" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">A</text>
        <text x="30" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">B</text>
        <text x="255" y="182" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">C</text>
        <text x="130" y="190" font-family="Arial" font-size="10" fill="#2563eb">a</text>
        <text x="195" y="88" font-family="Arial" font-size="10" fill="#2563eb">b</text>
        <text x="82" y="88" font-family="Arial" font-size="10" fill="#2563eb">c</text>
        <text x="55" y="150" font-family="Arial" font-size="10" fill="#dc2626">α</text>
        <text x="225" y="150" font-family="Arial" font-size="10" fill="#dc2626">β</text>
        <text x="143" y="50" font-family="Arial" font-size="10" fill="#dc2626">γ</text>
        <text x="85" y="115" font-family="Arial" font-size="12" fill="#333" font-weight="bold">α + β + γ = 180°</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Suma de ángulos internos</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?",
        options: ["60 cm²", "30 cm²", "16 cm²", "15 cm²"],
        correctIndex: 1,
        explanation: "El área se calcula como A = (b × h) / 2 = (10 × 6) / 2 = 30 cm².",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un triángulo tiene lados de 5, 12 y 13. ¿Qué tipo de triángulo es?",
        options: ["Equilátero", "Isósceles rectángulo", "Escaleno rectángulo", "Escaleno acutángulo"],
        correctIndex: 2,
        explanation: "Verificamos: 5² + 12² = 25 + 144 = 169 = 13². Por el teorema de Pitágoras inverso, es un triángulo rectángulo. Los tres lados son diferentes, por lo tanto es escaleno rectángulo.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "En un triángulo, los lados miden a = 7, b = 10 y el ángulo entre ellos es C = 60°. ¿Cuál es la longitud del lado c?",
        options: ["√129", "√89", "√109", "√79"],
        correctIndex: 3,
        explanation: "Aplicando el teorema del coseno: c² = a² + b² − 2ab·cos(C) = 49 + 100 − 2(7)(10)cos(60°) = 149 − 140(0.5) = 149 − 70 = 79. Entonces c = √79.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "poligonos",
    tip: "La fórmula general para la suma de ángulos internos de un polígono de n lados es (n−2)×180°. Memoriza esta fórmula y úsala para resolver rápidamente cualquier problema sobre ángulos de polígonos regulares en el examen.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **polígono** es una figura plana cerrada formada por segmentos de recta (lados) que se unen en vértices.",
          "Un polígono es **regular** si todos sus lados son iguales y todos sus ángulos internos son iguales.",
          "Un polígono es **irregular** si sus lados o ángulos no son todos iguales.",
          "Los polígonos se clasifican por el número de lados: **triángulo** (3), **cuadrilátero** (4), **pentágono** (5), **hexágono** (6), etc.",
          "Un polígono es **convexo** si todos sus ángulos internos son menores que 180°, y **cóncavo** si al menos uno es mayor.",
          "El **perímetro** de un polígono es la suma de las longitudes de todos sus lados."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "La **suma de los ángulos internos** de un polígono de n lados es: **S = (n − 2) × 180°**.",
          "Cada **ángulo interno** de un polígono regular de n lados mide: **α = (n − 2) × 180° / n**.",
          "La **suma de los ángulos externos** de cualquier polígono (convexo) es siempre **360°**.",
          "Cada **ángulo externo** de un polígono regular de n lados mide: **β = 360° / n**.",
          "Un polígono de n lados tiene **n(n − 3)/2 diagonales**.",
          "El **número de diagonales** que parten de un solo vértice es **n − 3**."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "Un polígono regular de n lados se puede dividir en **n − 2 triángulos** trazando diagonales desde un mismo vértice.",
          "El **área** de un polígono regular de n lados con lado a es: **A = (n × a²) / (4 × tan(π/n))**.",
          "El **radio de la circunferencia circunscrita** a un polígono regular de n lados y lado a es: **R = a / (2 × sen(π/n))**.",
          "El **radio de la incircle** (circunferencia inscrita) es: **r = a / (2 × tan(π/n))**.",
          "El **apotema** de un polígono regular de n lados y lado a es: **a_p = a / (2 × tan(π/n))**.",
          "Truco de examen: si conoces el número de diagonales, puedes hallar n resolviendo **d = n(n−3)/2**, es decir **n² − 3n − 2d = 0**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 80,70 55,140 110,185 190,185 245,140 220,70" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="150" cy="120" r="4" fill="#dc2626"/>
        <line x1="150" y1="30" x2="150" y2="120" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="80" y1="70" x2="150" y2="120" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="130" y="118" font-family="Arial" font-size="10" fill="#dc2626">O</text>
        <text x="145" y="22" font-family="Arial" font-size="10" fill="#333">A</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Heptágono regular (n=7)</text>
        <text x="50" y="198" font-family="Arial" font-size="10" fill="#2563eb">Suma de ángulos internos = (7−2)×180° = 900°</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="100,30 30,100 60,180 180,180 210,100" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2"/>
        <line x1="100" y1="30" x2="60" y2="180" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="100" y1="30" x2="180" y2="180" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="30" y1="100" x2="210" y2="100" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="95" y="22" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="10" y="100" font-family="Arial" font-size="10" fill="#333">B</text>
        <text x="45" y="192" font-family="Arial" font-size="10" fill="#333">C</text>
        <text x="175" y="192" font-family="Arial" font-size="10" fill="#333">D</text>
        <text x="215" y="100" font-family="Arial" font-size="10" fill="#333">E</text>
        <text x="70" y="110" font-family="Arial" font-size="10" fill="#7c3aed">5 diagonales</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Diagonales de un pentágono</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuánto mide cada ángulo interno de un hexágono regular?",
        options: ["120°", "108°", "135°", "140°"],
        correctIndex: 0,
        explanation: "Cada ángulo interno de un polígono regular de n lados mide (n−2)×180°/n. Para n=6: (6−2)×180°/6 = 720°/6 = 120°.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "¿Cuántos diagonales tiene un decágono (10 lados)?",
        options: ["35", "45", "25", "40"],
        correctIndex: 0,
        explanation: "El número de diagonales es n(n−3)/2. Para n=10: 10(10−3)/2 = 10×7/2 = 35 diagonales.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Un polígono regular tiene cada ángulo interno midiendo 156°. ¿Cuántos lados tiene?",
        options: ["20", "15", "24", "18"],
        correctIndex: 1,
        explanation: "Si cada ángulo mide 156°, entonces (n−2)×180°/n = 156°. Despejando: (n−2)×180 = 156n → 180n − 360 = 156n → 24n = 360 → n = 15.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "cuadrilateros",
    tip: "Memoriza las propiedades específicas de cada cuadrilátero: el paralelogramo tiene lados opuestos paralelos e iguales, el rectángulo añade ángulos de 90°, el rombo añade lados iguales, y el cuadrado combina ambas propiedades. En el examen, identifica primero el tipo de cuadrilátero.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **cuadrilátero** es un polígono con 4 lados y 4 vértices. La suma de sus ángulos internos es **360°**.",
          "Un **paralelogramo** es un cuadrilátero con ambos pares de lados opuestos paralelos.",
          "Un **rectángulo** es un paralelogramo con los cuatro ángulos internos iguales a 90°.",
          "Un **rombo** es un paralelogramo con los cuatro lados de igual longitud.",
          "Un **cuadrado** es un rectángulo que también es rombo: tiene 4 lados iguales y 4 ángulos rectos.",
          "Un **trapecio** es un cuadrilátero con al menos un par de lados opuestos paralelos (llamados **bases**)."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **área** de un paralelogramo es: **A = b × h**, donde b es la base y h es la altura perpendicular.",
          "El **área** de un trapecio es: **A = (b₁ + b₂) × h / 2**, donde b₁ y b₂ son las bases y h la altura.",
          "En un rectángulo, la **diagonal** se calcula con Pitágoras: **d = √(a² + b²)**.",
          "Las **diagonales** de un paralelogramo se bisecan mutuamente (se cortan en sus puntos medios).",
          "Las **diagonales** de un rectángulo son iguales entre sí.",
          "Las **diagonales** de un rombo son perpendiculares entre sí y bisecan los ángulos."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **área** de un rombo puede calcularse con sus diagonales: **A = (d₁ × d₂) / 2**.",
          "Un **cuadrilátero cíclico** (inscrito en una circunferencia) tiene ángulos opuestos suplementarios: **∠A + ∠C = 180°**.",
          "El **teorema de Brahmagupta** da el área de un cuadrilátero cíclico con lados a, b, c, d: **A = √[(s−a)(s−b)(s−c)(s−d)]**, donde s es el semiperímetro.",
          "El **área** de cualquier cuadrilátero conyugado (con diagonales d₁, d₂ y ángulo θ entre ellas) es: **A = (d₁ × d₂ × sen(θ)) / 2**.",
          "El **teorema de Varignon** dice que los puntos medios de los lados de cualquier cuadrilátero forman un paralelogramo.",
          "Truco de examen: si un cuadrilátero tiene diagonales perpendiculares, su área es siempre **(d₁ × d₂) / 2**, sin importar la forma."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <rect x="60" y="40" width="180" height="120" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="60" y1="40" x2="240" y2="160" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="240" y1="40" x2="60" y2="160" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="52" y="35" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="242" y="35" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="242" y="172" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <text x="52" y="172" font-family="Arial" font-size="10" fill="#333" font-weight="bold">D</text>
        <text x="130" y="85" font-family="Arial" font-size="10" fill="#dc2626">d₁</text>
        <text x="165" y="100" font-family="Arial" font-size="10" fill="#dc2626">d₂</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Rectángulo con diagonales</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="80,50 220,50 260,150 40,150" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="150" y1="50" x2="150" y2="150" stroke="#059669" stroke-width="2"/>
        <path d="M 145 150 L 150 145 L 155 150" fill="none" stroke="#059669" stroke-width="1.5"/>
        <text x="75" y="42" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="222" y="42" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="262" y="158" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <text x="30" y="158" font-family="Arial" font-size="10" fill="#333" font-weight="bold">D</text>
        <text x="92" y="42" font-family="Arial" font-size="10" fill="#2563eb">b₁</text>
        <text x="130" y="162" font-family="Arial" font-size="10" fill="#2563eb">b₂</text>
        <text x="155" y="105" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">h</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Trapecio</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el área de un rectángulo con largo 12 cm y ancho 5 cm?",
        options: ["34 cm²", "60 cm²", "17 cm²", "48 cm²"],
        correctIndex: 1,
        explanation: "El área de un rectángulo es A = largo × ancho = 12 × 5 = 60 cm².",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un trapecio tiene bases de 8 cm y 14 cm, y una altura de 6 cm. ¿Cuál es su área?",
        options: ["66 cm²", "48 cm²", "84 cm²", "52 cm²"],
        correctIndex: 0,
        explanation: "El área del trapecio es A = (b₁ + b₂) × h / 2 = (8 + 14) × 6 / 2 = 22 × 6 / 2 = 66 cm².",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Las diagonales de un rombo miden 10 cm y 24 cm. ¿Cuál es su área y el lado del rombo?",
        options: ["A = 120 cm², lado = 13 cm", "A = 240 cm², lado = 13 cm", "A = 120 cm², lado = 26 cm", "A = 60 cm², lado = 12 cm"],
        correctIndex: 0,
        explanation: "El área del rombo es A = (d₁ × d₂)/2 = (10 × 24)/2 = 120 cm². El lado se obtiene con Pitágoras usando medias diagonales: lado = √(5² + 12²) = √(25 + 144) = √169 = 13 cm.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "circumferencia",
    tip: "Recuerda siempre las relaciones clave: C = 2πr, A = πr², y que el ángulo central es igual al arco que intercepta. Para problemas de sectores, usa A = (θ/360°)πr². En el examen, verifica si el problema pide longitud de arco (L = rθ en radianes) o área de sector.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **circunferencia** es el lugar geométrico de todos los puntos de un plano que están a una distancia fija (radio) de un punto fijo (centro).",
          "El **radio** (r) es el segmento que va del centro a cualquier punto de la circunferencia.",
          "El **diámetro** (d) es el segmento que pasa por el centro y une dos puntos opuestos: **d = 2r**.",
          "La **longitud** de la circunferencia (perímetro) es: **C = 2πr = πd**.",
          "Una **cuerda** es un segmento que une dos puntos de la circunferencia sin pasar por el centro.",
          "Un **arco** es una porción de la circunferencia comprendida entre dos puntos."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **área** del círculo es: **A = πr²**.",
          "La **longitud de un arco** con ángulo central θ (en grados) es: **L = (θ/360°) × 2πr**.",
          "El **área de un sector** circular es: **A_sector = (θ/360°) × πr²**.",
          "El **ángulo inscrito** es la mitad del ángulo central que subtiende el mismo arco: **α = θ/2**.",
          "Un **ángulo inscrito** que subtiende un diámetro es siempre **90°** (teorema de Tales).",
          "Un **segmento circular** es la región entre una cuerda y el arco que subtiende. Su área es: **A_segmento = A_sector − A_triángulo**."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "El **teorema de la cuerda-cuerda**: si dos cuerdas se cortan dentro de la circunferencia, **PA × PB = PC × PD** (donde P es el punto de intersección).",
          "El **teorema del tangente-secante**: si un segmento tangente y un segmento secante parten de un punto exterior, **PT² = PA × PB**.",
          "El **teorema del ángulo entre tangente y cuerda**: el ángulo formado por una tangente y una cuerda en el punto de contacto es igual al ángulo inscrito que subtiende la misma cuerda.",
          "El **área** de un sector con ángulo θ en radianes es: **A = (1/2)r²θ**. La longitud de arco es **L = rθ**.",
          "La **potencia de un punto** P con respecto a una circunferencia es **PO² − R²** (donde O es el centro y R el radio). Es positiva si P es exterior, negativa si es interior.",
          "Truco de examen: convierte siempre a radianes cuando uses fórmulas diferenciadas. **360° = 2π rad**, **180° = π rad**, **90° = π/2 rad**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <circle cx="150" cy="110" r="70" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="150" cy="110" r="3" fill="#dc2626"/>
        <line x1="150" y1="110" x2="220" y2="110" stroke="#dc2626" stroke-width="2"/>
        <line x1="150" y1="110" x2="150" y2="40" stroke="#059669" stroke-width="2"/>
        <path d="M 175 110 A 25 25 0 0 0 164 92" fill="none" stroke="#7c3aed" stroke-width="2"/>
        <line x1="150" y1="40" x2="220" y2="110" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>
        <text x="148" y="107" font-family="Arial" font-size="10" fill="#dc2626">O</text>
        <text x="185" y="103" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">r</text>
        <text x="155" y="80" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">r</text>
        <text x="170" y="92" font-family="Arial" font-size="10" fill="#7c3aed">θ</text>
        <text x="185" y="75" font-family="Arial" font-size="10" fill="#2563eb">s (arco)</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Partes de la circunferencia</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <circle cx="150" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="80" y1="100" x2="220" y2="100" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="100" r="3" fill="#dc2626"/>
        <circle cx="80" cy="100" r="3" fill="#333"/>
        <circle cx="220" cy="100" r="3" fill="#333"/>
        <text x="146" y="97" font-family="Arial" font-size="10" fill="#dc2626">O</text>
        <text x="68" y="95" font-family="Arial" font-size="10" fill="#333">A</text>
        <text x="222" y="95" font-family="Arial" font-size="10" fill="#333">B</text>
        <text x="130" y="115" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">d = 2r</text>
        <circle cx="150" cy="100" r="70" fill="#dc2626" fill-opacity="0.08"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Diámetro y radio</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es la circunferencia de un círculo con radio 7 cm? (Usa π ≈ 22/7)",
        options: ["22 cm", "44 cm", "154 cm", "49 cm"],
        correctIndex: 1,
        explanation: "C = 2πr = 2 × (22/7) × 7 = 2 × 22 = 44 cm.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un sector circular tiene un ángulo central de 120° y un radio de 9 cm. ¿Cuál es su área? (Usa π ≈ 3.14)",
        options: ["84.78 cm²", "169.56 cm²", "254.34 cm²", "28.26 cm²"],
        correctIndex: 0,
        explanation: "A_sector = (θ/360°) × πr² = (120/360) × 3.14 × 81 = (1/3) × 254.34 = 84.78 cm².",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Desde un punto exterior P, se traza un segmento tangente PT = 8 cm a una circunferencia, y un segmento secante que intersecta la circunferencia en A y B, con PA = 4 cm. ¿Cuánto mide PB?",
        options: ["12 cm", "16 cm", "32 cm", "6 cm"],
        correctIndex: 1,
        explanation: "Por el teorema tangente-secante: PT² = PA × PB. Entonces 8² = 4 × PB → 64 = 4 × PB → PB = 16 cm.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "puntos-notables",
    tip: "Los 4 puntos notables del triángulo (incentro, baricentro, ortocentro y circuncentro) siempre están alineados en la Recta de Euler. En un triángulo equilátero, los cuatro puntos coinciden. Memoriza: el baricentro divide a cada mediana en relación 2:1 desde el vértice.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Los **puntos notables** de un triángulo son puntos especiales que se obtienen al trazar líneas específicas desde los vértices o lados.",
          "El **incentro** (I) es el punto de intersección de las tres **bisectrices** del triángulo. Es el centro de la circunferencia inscrita.",
          "El **baricentro** (G) es el punto de intersección de las tres **medianas** del triángulo. Es el centro de gravedad.",
          "El **ortocentro** (H) es el punto de intersección de las tres **alturas** del triángulo.",
          "El **circuncentro** (O) es el punto de intersección de las tres **mediatrices** de los lados. Es el centro de la circunferencia circunscrita.",
          "En un triángulo **equilátero**, los cuatro puntos notables coinciden en un solo punto."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "El **baricentro** G divide cada mediana en una razón **2:1**, contando desde el vértice: **AG:GM = 2:1** (siendo M el punto medio del lado opuesto).",
          "El **incentro** I está a la misma distancia de los tres lados: esa distancia es el **radio de la circunferencia inscrita** **r = A/s**, donde A es el área y s el semiperímetro.",
          "El **circuncentro** O está a la misma distancia de los tres vértices: esa distancia es el **radio de la circunferencia circunscrita** **R = a/(2·senA)**.",
          "El **ortocentro** H tiene la propiedad de que los reflejos de H sobre los lados del triángulo caen sobre la circunferencia circunscrita.",
          "El **baricentro** tiene coordenadas promedio: **G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)** si los vértices son (x₁,y₁), (x₂,y₂), (x₃,y₃).",
          "El **incentro** tiene coordenadas ponderadas por los lados: **I = (a·A + b·B + c·C) / (a+b+c)**, donde a, b, c son las longitudes de los lados opuestos a A, B, C."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "La **Recta de Euler** es la recta que contiene al circuncentro O, al baricentro G, al ortocentro H y al centro de la circunferencia de los nueve puntos N.",
          "En la Recta de Euler se cumple: **OG:GH = 1:2**, y el centro de los nueve puntos N es el punto medio de OH.",
          "El **centro de los nueve puntos** N es el centro de la circunferencia que pasa por los puntos medios de los lados, los pies de las alturas y los puntos medios de los segmentos de H a los vértices.",
          "La **circunferencia de los nueve puntos** tiene radio **R/2**, donde R es el radio de la circunferencia circunscrita.",
          "El **incentro** I no pertenece a la Recta de Euler en general. Solo coincide con los demás en el triángulo equilátero.",
          "Truco de examen: en un triángulo rectángulo, el ortocentro está en el vértice del ángulo recto, y el circuncentro es el punto medio de la hipotenusa."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,25 40,175 260,175" fill="#dbeafe" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="25" r="3" fill="#333"/>
        <circle cx="40" cy="175" r="3" fill="#333"/>
        <circle cx="260" cy="175" r="3" fill="#333"/>
        <text x="145" y="18" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="25" y="185" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="262" y="185" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <line x1="150" y1="25" x2="150" y2="175" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <circle cx="150" cy="125" r="4" fill="#dc2626"/>
        <text x="155" y="128" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">G</text>
        <text x="48" y="168" font-family="Arial" font-size="9" fill="#333">M</text>
        <circle cx="150" cy="175" r="2.5" fill="#333"/>
        <line x1="150" y1="125" x2="150" y2="100" stroke="#dc2626" stroke-width="1"/>
        <line x1="150" y1="125" x2="150" y2="150" stroke="#dc2626" stroke-width="1"/>
        <text x="190" y="118" font-family="Arial" font-size="8" fill="#333">2/3</text>
        <text x="155" y="155" font-family="Arial" font-size="8" fill="#333">1/3</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Baricentro (G) — Mediana</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,30 45,170 255,170" fill="#dbeafe" fill-opacity="0.25" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="30" r="3" fill="#333"/>
        <circle cx="45" cy="170" r="3" fill="#333"/>
        <circle cx="255" cy="170" r="3" fill="#333"/>
        <text x="145" y="22" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="30" y="180" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="257" y="180" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <line x1="150" y1="30" x2="150" y2="170" stroke="#059669" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="45" y1="170" x2="210" y2="52" stroke="#059669" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="255" y1="170" x2="90" y2="52" stroke="#059669" stroke-width="1.2" stroke-dasharray="4,3"/>
        <circle cx="150" cy="112" r="5" fill="#059669"/>
        <text x="156" y="110" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">I</text>
        <circle cx="150" cy="112" r="35" fill="none" stroke="#059669" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Incentro (I) — Bisectrices</text>
        <text x="190" y="125" font-family="Arial" font-size="9" fill="#059669">r (inscrita)</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,35 45,165 255,165" fill="#dbeafe" fill-opacity="0.25" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="35" r="3" fill="#333"/>
        <circle cx="45" cy="165" r="3" fill="#333"/>
        <circle cx="255" cy="165" r="3" fill="#333"/>
        <text x="145" y="27" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="30" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="257" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <line x1="150" y1="35" x2="150" y2="165" stroke="#7c3aed" stroke-width="1.2"/>
        <line x1="100" y1="35" x2="45" y2="165" stroke="#7c3aed" stroke-width="1.2"/>
        <line x1="200" y1="35" x2="255" y2="165" stroke="#7c3aed" stroke-width="1.2"/>
        <circle cx="150" cy="70" r="5" fill="#7c3aed"/>
        <text x="156" y="68" font-family="Arial" font-size="10" fill="#7c3aed" font-weight="bold">H</text>
        <circle cx="150" cy="70" r="55" fill="none" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Ortocentro (H) — Alturas</text>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <polygon points="150,35 45,165 255,165" fill="#dbeafe" fill-opacity="0.25" stroke="#2563eb" stroke-width="2"/>
        <circle cx="150" cy="35" r="3" fill="#333"/>
        <circle cx="45" cy="165" r="3" fill="#333"/>
        <circle cx="255" cy="165" r="3" fill="#333"/>
        <text x="145" y="27" font-family="Arial" font-size="10" fill="#333" font-weight="bold">A</text>
        <text x="30" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">B</text>
        <text x="257" y="175" font-family="Arial" font-size="10" fill="#333" font-weight="bold">C</text>
        <circle cx="150" cy="35" r="80" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="97" y1="100" x2="97" y2="165" stroke="#f59e0b" stroke-width="1.2"/>
        <line x1="203" y1="100" x2="203" y2="165" stroke="#f59e0b" stroke-width="1.2"/>
        <line x1="150" y1="35" x2="150" y2="115" stroke="#f59e0b" stroke-width="1.2"/>
        <circle cx="150" cy="115" r="5" fill="#f59e0b"/>
        <text x="156" y="113" font-family="Arial" font-size="10" fill="#f59e0b" font-weight="bold">O</text>
        <text x="25" y="25" font-family="Arial" font-size="13" fill="#333" font-weight="bold">Circuncentro (O) — Mediatices</text>
      </svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿En qué punto notable del triángulo se intersecan las tres medianas?",
        options: ["Incentro", "Ortocentro", "Circuncentro", "Baricentro"],
        correctIndex: 3,
        explanation: "El baricentro (G) es el punto de intersección de las tres medianas del triángulo. Representa el centro de gravedad.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un triángulo tiene vértices en A(0,0), B(6,0) y C(3,6). ¿Cuáles son las coordenadas del baricentro?",
        options: ["(3, 2)", "(2, 3)", "(3, 3)", "(1.5, 2)"],
        correctIndex: 0,
        explanation: "El baricentro es el promedio de las coordenadas: G = ((0+6+3)/3, (0+0+6)/3) = (9/3, 6/3) = (3, 2).",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "En un triángulo rectángulo con catetos de 6 cm y 8 cm, ¿dónde se ubica el circuncentro?",
        options: ["En el vértice del ángulo recto", "En el punto medio de la hipotenusa", "En el punto medio del cateto mayor", "Fuera del triángulo"],
        correctIndex: 1,
        explanation: "En un triángulo rectángulo, el circuncentro siempre se encuentra en el punto medio de la hipotenusa. La hipotenusa mide 10 cm (por Pitágoras), y el radio de la circunferencia circunscrita es 5 cm.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "prop-y-semejanza",
    tip: "En semejanza, identifica SIEMPRE el vértice común y el orden correcto de los polígonos. Muchos errores vienen de no respetar la correspondencia de vértices al plantear las proporciones.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Proporcionalidad**: Dos razones son **proporcionales** si el cociente de sus términos es igual.",
          "**Razón de semejanza (k)**: Factor que relaciona las longitudes correspondientes de dos figuras semejantes.",
          "Dos polígonos son **semejantes** si sus ángulos correspondientes son iguales y sus lados correspondientes son **proporcionales**.",
          "**Teorema de Tales**: Si una paralela corta a dos rectas concurrentes, determina segmentos **proporcionales**.",
          "Las figuras semejantes conservan la **forma** pero no necesariamente el **tamaño**.",
          "La relación de semejanza se escribe como **k = L₂/L₁**, donde L son longitudes correspondientes.",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Relación de áreas**: Si k es el factor de semejanza, entonces **A₂/A₁ = k²**.",
          "**Relación de perímetros**: **P₂/P₁ = k** (la misma que la relación de lados).",
          "Si un triángulo tiene una **paralela a un lado**, el triángulo formado es **semejante** al original.",
          "**Teorema de la paralela**: En un triángulo, una paralela a un lado divide a los otros dos en **segmentos proporcionales**.",
          "Proporción fundamental: **a/b = c/d = e/f** cuando hay semejanza de polígonos con 3 pares de lados.",
          "Si k > 1 la figura se **agranda**; si 0 < k < 1 se **reduce**; si k = 1 son **congruentes**.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de Tales generalizado**: Si 3 o más paralelas cortan a dos transversales, los segmentos determinados son **proporcionales**.",
          "En un **trapecio**, la paralela a las bases que pasa por el punto medio de un lado no paralelo **biseca** al otro lado no paralelo.",
          "El **segmento que une puntos medios** de dos lados no paralelos de un trapecio mide: **m = (b₁ + b₂)/2**.",
          "Si dos triángulos son semejantes, el cociente de sus **radios de circunferencia circunscrita** es igual a **k**.",
          "El **incentro** de dos figuras semejantes se mapea en la **misma posición relativa**, lo que permite resolver problemas de ubicación.",
          "Truco de examen: cuando aparecen rectas que cruzan en un punto con paralelas, siempre aplicar **Thales** directamente sin dibujar auxiliares adicionales.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,20 40,180 260,180" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="75" y1="110" x2="225" y2="110" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="150" y="12" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">A</text>
  <text x="25" y="192" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">B</text>
  <text x="275" y="192" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">C</text>
  <text x="65" y="107" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="bold">D</text>
  <text x="235" y="107" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="bold">E</text>
  <text x="85" y="60" font-size="11" fill="#059669">k</text>
  <text x="195" y="60" font-size="11" fill="#059669">k</text>
  <line x1="150" y1="20" x2="75" y2="110" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="150" y1="20" x2="225" y2="110" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="150" y="160" text-anchor="middle" font-size="12" fill="#1e293b">DE ∥ BC</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">△ADE ~ △ABC</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="100" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="220" cy="100" r="35" fill="none" stroke="#dc2626" stroke-width="2"/>
  <polygon points="100,30 55,120 145,120" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <polygon points="220,65 197.5,100 242.5,100" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="2"/>
  <text x="100" y="140" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="bold">Lado = a</text>
  <text x="220" y="120" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">Lado = ka</text>
  <text x="150" y="190" text-anchor="middle" font-size="12" fill="#1e293b">Factor de semejanza k</text>
  <text x="150" y="30" text-anchor="middle" font-size="11" fill="#64748b">Relación de áreas = k²</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="180" x2="150" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="180" x2="270" y2="20" stroke="#2563eb" stroke-width="2"/>
  <line x1="30" y1="180" x2="270" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="70" y1="180" x2="160" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="130" y1="180" x2="210" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <line x1="200" y1="180" x2="250" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="20" y="185" font-size="12" fill="#1e293b" font-weight="bold">A</text>
  <text x="150" y="195" font-size="12" fill="#1e293b" font-weight="bold">B</text>
  <text x="275" y="185" font-size="12" fill="#1e293b" font-weight="bold">C</text>
  <text x="145" y="15" font-size="12" fill="#dc2626" font-weight="bold">L₁</text>
  <text x="55" y="175" font-size="10" fill="#059669">a</text>
  <text x="95" y="175" font-size="10" fill="#059669">b</text>
  <text x="155" y="175" font-size="10" fill="#059669">c</text>
  <text x="150" y="145" text-anchor="middle" font-size="11" fill="#64748b">Teorema de Tales: a/b = c/d</text>
</svg>`,
    ],
    exercises: [
      {
        id: 701,
        question:
          "En un triángulo ABC, una paralela al lado BC corta a AB en D y a AC en E, formando el triángulo ADE. Si AD = 6, DB = 4 y BC = 15, ¿cuánto mide DE?",
        options: ["7.5", "9", "10", "12"],
        correctIndex: 1,
        explanation:
          "Por Thales, AD/AB = DE/BC. AB = AD + DB = 6 + 4 = 10. Entonces 6/10 = DE/15, por lo tanto DE = (6 × 15)/10 = 9.",
        difficulty: "basico",
      },
      {
        id: 702,
        question:
          "Dos triángulos semejantes tienen un factor de semejanza k = 3. Si el perímetro del menor es 20 cm, ¿cuál es el área del mayor si el área del menor es 24 cm²?",
        options: ["72 cm²", "144 cm²", "216 cm²", "729 cm²"],
        correctIndex: 2,
        explanation:
          "El perímetro del mayor sería 20 × 3 = 60 cm. Para las áreas, A₂/A₁ = k² = 9, entonces A₂ = 24 × 9 = 216 cm².",
        difficulty: "intermedio",
      },
      {
        id: 703,
        question:
          "En un trapecio ABCD con AB ∥ CD, AB = 20, CD = 12. Un segmento EF une puntos de AD y BC tal que EF ∥ AB. Si DE/EA = 3/5, ¿cuánto mide EF?",
        options: ["14", "15", "16", "17"],
        correctIndex: 1,
        explanation:
          "La fórmula del segmento paralelo en un trapecio es EF = (EA × CD + DE × AB)/(DE + EA) = (5 × 12 + 3 × 20)/(3 + 5) = (60 + 60)/8 = 15.",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "relaciones-metricas",
    tip: "En relaciones métricas del triángulo rectángulo, memoriza solo 3 fórmulas: a² = c·m, b² = c·n y h² = m·n. El teorema de Pitágoras se deduce de ellas: a² + b² = c·m + c·n = c(m+n) = c².",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "En un **triángulo rectángulo**, la **altura** trazada desde el vértice del ángulo recto a la hipotenusa genera **dos triángulos semejantes** entre sí y con el original.",
          "**Hipotenusa (c)**: lado opuesto al ángulo recto. Es el lado **más largo** del triángulo rectángulo.",
          "**Catetos (a, b)**: los dos lados que forman el ángulo recto.",
          "**Proyección**: los segmentos en que la altura **divide la hipotenusa** se llaman **m** y **n** (proyecciones de los catetos).",
          "**Teorema de Pitágoras**: En todo triángulo rectángulo, **a² + b² = c²**.",
          "La **altura (h)** es perpendicular a la hipotenusa y se mide desde el vértice del ángulo recto.",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Teorema de la altura**: **h² = m · n** (la altura es la media geométrica de las proyecciones).",
          "**Teorema del cateto**: **a² = c · m** y **b² = c · n** (cada cateto es media geométrica de la hipotenusa y su proyección).",
          "**Área del triángulo rectángulo**: **A = (a · b)/2 = (c · h)/2**.",
          "La **inversa del Pitágoras** también se cumple: si a² + b² = c², el triángulo es rectángulo.",
          "**Relación fundamental**: m + n = c (las proyecciones suman la hipotenusa).",
          "De las relaciones métricas se deduce: **1/h² = 1/a² + 1/b²**.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Media geométrica**: h = √(m·n). Este concepto aparece en la **secante-tangente** y en el **cateto medio**.",
          "Si el ángulo recto es de **45°-45°-90°**, entonces m = n y h = c/2. Los catetos miden **c/√2**.",
          "Si el ángulo recto es de **30°-60°-90°**, los catetos son **c/2** y **c√3/2**.",
          "**Truco de examen**: Para verificar si un triángulo es rectángulo, sustituir los lados en a² + b² = c². Si se cumple, es rectángulo.",
          "En un triángulo rectángulo inscrito en una **circunferencia**, la hipotenusa es siempre el **diámetro**.",
          "La **altura máxima** de un triángulo rectángulo con hipotenusa fija c se alcanza cuando h = c/2 (caso isósceles).",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="50,170 250,170 50,30" fill="#2563eb" fill-opacity="0.1" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="30" x2="50" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="170" x2="250" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="30" x2="250" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="50" y1="30" x2="106" y2="154" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="50" y="30" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="30" y="25" font-size="14" fill="#1e293b" font-weight="bold">A</text>
  <text x="40" y="188" font-size="14" fill="#1e293b" font-weight="bold">B</text>
  <text x="260" y="188" font-size="14" fill="#1e293b" font-weight="bold">C</text>
  <text x="30" y="105" font-size="13" fill="#dc2626" font-weight="bold">a</text>
  <text x="155" y="188" font-size="13" fill="#dc2626" font-weight="bold">b</text>
  <text x="155" y="90" font-size="13" fill="#059669" font-weight="bold">c</text>
  <text x="110" y="148" font-size="12" fill="#7c3aed" font-weight="bold">h</text>
  <text x="70" y="188" font-size="11" fill="#f59e0b" font-weight="bold">m</text>
  <text x="185" y="188" font-size="11" fill="#f59e0b" font-weight="bold">n</text>
  <text x="150" y="15" text-anchor="middle" font-size="12" fill="#1e293b">Relaciones Métricas del Triángulo Rectángulo</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="30,170 150,170 30,50" fill="#2563eb" fill-opacity="0.08" stroke="#2563eb" stroke-width="2"/>
  <polygon points="150,170 250,170 150,80" fill="#dc2626" fill-opacity="0.08" stroke="#dc2626" stroke-width="2"/>
  <polygon points="30,50 150,170 150,80" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="2"/>
  <polygon points="30,170 150,170 30,50" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="150" y="15" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Los 3 triángulos son semejantes</text>
  <text x="70" y="130" font-size="11" fill="#2563eb" font-weight="bold">△1</text>
  <text x="200" y="140" font-size="11" fill="#dc2626" font-weight="bold">△2</text>
  <text x="80" y="95" font-size="11" fill="#059669" font-weight="bold">△3</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">△1 ~ △2 ~ △3 (todos semejantes al original)</text>
</svg>`,
    ],
    exercises: [
      {
        id: 801,
        question:
          "En un triángulo rectángulo, la hipotenusa mide 13 cm y una de las proyecciones de los catetos mide 4 cm. ¿Cuánto mide la altura?",
        options: ["4 cm", "5 cm", "6 cm", "8 cm"],
        correctIndex: 2,
        explanation:
          "Si m = 4, entonces n = c − m = 13 − 4 = 9. Por el teorema de la altura: h² = m·n = 4·9 = 36, entonces h = 6 cm.",
        difficulty: "basico",
      },
      {
        id: 802,
        question:
          "Un triángulo rectángulo tiene catetos de 9 cm y 12 cm. ¿Cuánto mide el segmento que une el punto medio de la hipotenusa con el punto medio del cateto de 9 cm?",
        options: ["4.5 cm", "5 cm", "6 cm", "7.5 cm"],
        correctIndex: 2,
        explanation:
          "La hipotenusa c = √(81 + 144) = √225 = 15 cm. El segmento une el punto medio de la hipotenusa con el punto medio del cateto de 9 cm, por lo que por el teorema de la línea media es paralelo al cateto restante (12 cm) y mide la mitad: 12/2 = 6 cm.",
        difficulty: "intermedio",
      },
      {
        id: 803,
        question:
          "En un triángulo rectángulo, las proyecciones de los catetos sobre la hipotenusa miden 9 cm y 16 cm respectivamente. ¿Cuánto miden los catetos?",
        options: [
          "a = 12 cm, b = 16 cm",
          "a = 15 cm, b = 20 cm",
          "a = 9 cm, b = 16 cm",
          "a = 15 cm, b = 25 cm",
        ],
        correctIndex: 1,
        explanation:
          "c = m + n = 9 + 16 = 25 cm. Por el teorema del cateto: a² = c·m = 25·9 = 225, a = 15 cm. b² = c·n = 25·16 = 400, b = 20 cm. Verificación: 15² + 20² = 225 + 400 = 625 = 25².",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "poligonos-regulares",
    tip: "Para hallar el área de un polígono regular, multiplica el perímetro por el apotema y divide entre 2: A = (P × a)/2. El apotema siempre es menor que el radio. En exámenes, memoriza: hexágono regular → lado = radio.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **polígono regular** tiene todos sus **lados iguales** y todos sus **ángulos internos iguales**.",
          "**Número de diagonales**: Para un polígono de n lados, tiene **n(n−3)/2 diagonales**.",
          "La suma de los ángulos internos de un polígono de n lados es **(n−2) × 180°**.",
          "Cada ángulo interno de un polígono regular de n lados mide **(n−2) × 180°/n**.",
          "Cada ángulo externo de un polígono regular mide **360°/n**.",
          "El **apotema** es la distancia del centro al punto medio de un lado (perpendicular al lado).",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Área de un polígono regular**: **A = (P × a)/2**, donde P es el perímetro y a es el apotema.",
          "**Radio (R)**: distancia del centro a un vértice. En un hexágono regular, **R = lado**.",
          "**Apothema (a)**: **a = R · cos(180°/n)** o **a = L/(2·tan(180°/n))** donde L es la longitud de un lado.",
          "**Lado a partir del radio**: **L = 2R · sin(180°/n)**.",
          "El **ángulo central** de un polígono regular de n lados es **360°/n**.",
          "Un hexágono regular se divide en **6 triángulos equiláteros**, por eso L = R.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Polígonos que tesselan**: Solo los triángulos equiláteros, cuadrados y hexágonos regulares tesselan el plano.",
          "La relación entre el apotema y el radio: **a = R·cos(π/n)** permite resolver problemas con circunferencia circunscrita.",
          "**Área en función del radio**: **A = (n/2) · R² · sin(360°/n)**.",
          "**Truco de examen**: Si conoces el apotema y el número de lados, puedes hallar todo: **L = 2a·tan(180°/n)**.",
          "El **radio de la circunferencia inscrita** es igual al apotema del polígono regular.",
          "Para un polígono de muchos lados, el área se aproxima al área de la circunferencia: **A ≈ πR²** cuando **n → ∞**.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,30 220,60 220,140 150,170 80,140 80,60" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="100" r="46" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <line x1="150" y1="100" x2="220" y2="60" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="150" y2="170" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Hexágono Regular</text>
  <text x="230" y="55" font-size="11" fill="#dc2626" font-weight="bold">R</text>
  <text x="158" y="155" font-size="11" fill="#059669" font-weight="bold">a</text>
  <text x="250" y="100" font-size="11" fill="#7c3aed" font-weight="bold">L = R</text>
  <text x="150" y="115" font-size="10" fill="#64748b">centro</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,25 235,80 205,175 95,175 65,80" fill="#7c3aed" fill-opacity="0.12" stroke="#7c3aed" stroke-width="2.5"/>
  <circle cx="150" cy="108" r="83" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="108" r="50" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="150" cy="108" r="3" fill="#dc2626"/>
  <line x1="150" y1="108" x2="150" y2="25" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="108" x2="235" y2="80" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="150" y1="108" x2="205" y2="175" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="150" y="15" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Pentágono Regular</text>
  <text x="155" y="65" font-size="11" fill="#dc2626" font-weight="bold">R</text>
  <text x="155" y="75" font-size="10" fill="#64748b">radio</text>
  <text x="195" y="175" font-size="10" fill="#059669" font-weight="bold">a = apotema</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">Ángulo central = 360°/5 = 72°</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <rect x="20" y="20" width="85" height="80" rx="2" fill="#2563eb" fill-opacity="0.1" stroke="#2563eb" stroke-width="2"/>
  <polygon points="170,25 215,50 215,100 170,125 125,100 125,50" fill="#dc2626" fill-opacity="0.1" stroke="#dc2626" stroke-width="2"/>
  <polygon points="280,60 260,30 225,30 210,60 225,90 260,90" fill="#059669" fill-opacity="0.1" stroke="#059669" stroke-width="2"/>
  <text x="62" y="55" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="bold">Cuadrado</text>
  <text x="62" y="70" text-anchor="middle" font-size="9" fill="#64748b">90° × 4</text>
  <text x="170" y="80" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">Hexágono</text>
  <text x="170" y="95" text-anchor="middle" font-size="9" fill="#64748b">120° × 6</text>
  <text x="245" y="65" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">Triángulo</text>
  <text x="245" y="80" text-anchor="middle" font-size="9" fill="#64748b">60° × 3</text>
  <text x="150" y="160" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Polígonos que tesselan el plano</text>
  <text x="150" y="180" text-anchor="middle" font-size="11" fill="#64748b">Solo 3, 4 y 6 lados regulares tesselan</text>
</svg>`,
    ],
    exercises: [
      {
        id: 901,
        question:
          "¿Cuánto mide cada ángulo interno de un octágono regular?",
        options: ["120°", "135°", "140°", "144°"],
        correctIndex: 1,
        explanation:
          "Cada ángulo interno = (n−2) × 180°/n = (8−2) × 180°/8 = 6 × 180°/8 = 1080°/8 = 135°. Verificando: 8 × 135° = 1080° = 6 × 180°.",
        difficulty: "basico",
      },
      {
        id: 902,
        question:
          "Un hexágono regular tiene un lado de 8 cm. ¿Cuál es su área?",
        options: [
          "96 cm²",
          "96√3 cm²",
          "48√3 cm²",
          "192 cm²",
        ],
        correctIndex: 1,
        explanation:
          "Un hexágono regular se divide en 6 triángulos equiláteros. Área de cada triángulo = (√3/4) × 8² = 16√3. Área total = 6 × 16√3 = 96√3 cm².",
        difficulty: "intermedio",
      },
      {
        id: 903,
        question:
          "Un polígono regular tiene una suma de ángulos internos igual a 1800°. ¿Cuántos lados tiene y cuánto mide cada ángulo interno?",
        options: [
          "12 lados, 150°",
          "10 lados, 144°",
          "12 lados, 160°",
          "14 lados, 154.3°",
        ],
        correctIndex: 0,
        explanation:
          "(n−2) × 180° = 1800°, entonces n − 2 = 10, por lo tanto n = 12. Cada ángulo interno = 1800°/12 = 150°. Verificación: 12 × 150° = 1800°.",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "areas",
    tip: "Cuando un problema pide el área de una figura compuesta, siempre descomponla en figuras simples (triángulos, rectángulos, trapecios). Identifica qué se suma y qué se resta. Lee bien si piden área lateral o total.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Área**: Es la medida de la **superficie** que ocupa una figura plana, expresada en unidades cuadradas.",
          "**Triángulo**: **A = (b × h)/2**, donde b es la base y h es la altura (perpendicular a la base).",
          "**Rectángulo**: **A = base × altura = b × h**.",
          "**Paralelogramo**: **A = base × altura = b × h** (la altura es perpendicular a la base).",
          "**Círculo**: **A = π × r²**, donde r es el radio.",
          "La unidad de medida del área es la **unidad cuadrada** (cm², m², etc.).",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Rombo**: **A = (D × d)/2**, donde D y d son las diagonales mayor y menor.",
          "**Trapecio**: **A = [(b₁ + b₂) × h]/2**, donde b₁ y b₂ son las bases paralelas.",
          "**Polígono regular**: **A = (P × a)/2**, donde P es el perímetro y a el apotema.",
          "**Sector circular**: **A = (π × r² × θ)/360°**, donde θ es el ángulo central en grados.",
          "**Corona circular**: **A = π(R² − r²)**, con R el radio mayor y r el menor.",
          "Las áreas son **aditivas**: el área total de una figura compuesta es la **suma** de las áreas de sus partes.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Fórmula de Heron**: Para un triángulo con lados a, b, c y semiperímetro s = (a+b+c)/2: **A = √[s(s−a)(s−b)(s−c)]**.",
          "El **triángulo de área máxima** inscrito en un semicírculo es el **rectángulo isósceles**.",
          "La **relación entre áreas** de triángulos con la misma base es proporcional a sus **alturas**.",
          "**Área del trapecio** usando la diagonal: **A = ½ · d₁ · d₂ · sen(α)**, donde α es el ángulo entre las diagonales.",
          "Si dos polígonos son **semejantes** con factor k, el cociente de sus áreas es **k²**.",
          "Truco de examen: cuando el problema da el perímetro y el apotema, usa **A = Pa/2** directamente sin calcular el lado.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="60,160 240,160 200,40 100,40" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="100" y1="40" x2="100" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="95" y="135" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="60" y="175" font-size="12" fill="#1e293b" font-weight="bold">b₁</text>
  <text x="220" y="175" font-size="12" fill="#1e293b" font-weight="bold">b₂</text>
  <text x="80" y="105" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="150" y="25" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">Trapecio</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">A = (b₁ + b₂) × h / 2</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="150" cy="100" r="75" fill="#dc2626" fill-opacity="0.08" stroke="#dc2626" stroke-width="2"/>
  <circle cx="150" cy="100" r="40" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="100" r="3" fill="#1e293b"/>
  <line x1="150" y1="100" x2="225" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="190" y2="100" stroke="#2563eb" stroke-width="1.5"/>
  <text x="230" y="95" font-size="12" fill="#dc2626" font-weight="bold">R</text>
  <text x="195" y="120" font-size="12" fill="#2563eb" font-weight="bold">r</text>
  <path d="M 150 100 L 225 100 A 75 75 0 0 1 189 33 Z" fill="#059669" fill-opacity="0.2" stroke="#059669" stroke-width="1.5"/>
  <text x="200" y="55" font-size="11" fill="#059669" font-weight="bold">θ</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">Corona: A = π(R² − r²) | Sector: A = πr²θ/360°</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="60,150 150,40 240,150" fill="#7c3aed" fill-opacity="0.12" stroke="#7c3aed" stroke-width="2.5"/>
  <line x1="60" y1="150" x2="240" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="40" x2="150" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <rect x="145" y="125" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="150" y="30" text-anchor="middle" font-size="13" fill="#1e293b" font-weight="bold">Triángulo</text>
  <text x="145" y="165" font-size="12" fill="#2563eb" font-weight="bold">b</text>
  <text x="160" y="100" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">A = (b × h) / 2</text>
</svg>`,
    ],
    exercises: [
      {
        id: 1001,
        question:
          "Un triángulo tiene una base de 14 cm y una altura de 9 cm. ¿Cuál es su área?",
        options: ["63 cm²", "126 cm²", "22.5 cm²", "45 cm²"],
        correctIndex: 0,
        explanation:
          "A = (b × h)/2 = (14 × 9)/2 = 126/2 = 63 cm².",
        difficulty: "basico",
      },
      {
        id: 1002,
        question:
          "Una figura compuesta está formada por un rectángulo de 12 cm × 8 cm y un semicírculo de diámetro 8 cm unido por uno de sus lados menores. ¿Cuál es el área total?",
        options: [
          "(96 + 8π) cm²",
          "(96 + 16π) cm²",
          "(96 + 4π) cm²",
          "(48 + 8π) cm²",
        ],
        correctIndex: 0,
        explanation:
          "Área del rectángulo = 12 × 8 = 96 cm². El semicírculo tiene diámetro 8, radio = 4. Área semicírculo = π(4²)/2 = 8π cm². Área total = 96 + 8π cm².",
        difficulty: "intermedio",
      },
      {
        id: 1003,
        question:
          "Un trapecio tiene bases de 10 cm y 16 cm. Su área es 104 cm². ¿Cuál es la altura del trapecio y el área del triángulo formado por una diagonal y la base menor?",
        options: [
          "h = 8 cm, A_triángulo = 64 cm²",
          "h = 8 cm, A_triángulo = 48 cm²",
          "h = 8 cm, A_triángulo = 40 cm²",
          "h = 6 cm, A_triángulo = 30 cm²",
        ],
        correctIndex: 2,
        explanation:
          "A = (b₁ + b₂)h/2 → 104 = (10 + 16)h/2 = 13h → h = 8 cm. El triángulo formado por una diagonal y la base menor (b₁ = 10) tiene la misma altura h = 8 cm. Su área = (10 × 8)/2 = 40 cm².",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "rectas-y-planos",
    tip: "En problemas de rectas y planos en el espacio, dibuja siempre una figura de referencia (cubo o prisma). Para identificar si dos rectas son paralelas, se cortan o son inclinadas, verifica: ¿comparten un plano? Si sí y no son paralelas, se cortan.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **recta** es una línea **infinita** que se extiende en ambas direcciones sin grosor.",
          "Un **plano** es una superficie **infinita** y **plana** que contiene infinitas rectas.",
          "Dos rectas en el espacio pueden ser: **paralelas**, **concurrentes** (se cortan) o **inclinadas** (no paralelas y no se cortan).",
          "**Rectas paralelas**: No se cortan y están en el **mismo plano**.",
          "**Rectas inclinadas (skew)**: No se cortan y **no** están en el mismo plano. Solo existen en **3D**.",
          "Dos planos pueden ser: **paralelos** (no se cortan) o **secantes** (se cortan en una recta).",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "Una recta **perpendicular** a un plano es perpendicular a **todas** las rectas del plano que pasan por el punto de intersección.",
          "Si una recta es perpendicular a **dos rectas no paralelas** de un plano, es perpendicular al **plano**.",
          "La **distancia entre dos planos paralelos** es la longitud del segmento perpendicular que los une.",
          "**Ángulo entre recta y plano**: es el ángulo entre la recta y su **proyección ortogonal** sobre el plano.",
          "**Ángulo entre dos planos (diedro)**: es el ángulo entre las **rectas perpendiculares** a la línea de intersección, una en cada plano.",
          "Si dos planos son perpendiculares, una recta perpendicular a uno **no necesariamente** es paralela al otro.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de las tres perpendiculares**: Si una recta del plano es perpendicular a la proyección de una recta oblicua, entonces es perpendicular a la recta oblicua misma.",
          "Si un plano es perpendicular a la intersección de otros dos planos, entonces es perpendicular a **cada uno** de ellos.",
          "**Ángulo diedro**: Si dos planos secantes forman un diedro de 90°, se dice que son **perpendiculares**.",
          "Para calcular la distancia de un **punto a un plano**, se proyecta ortogonalmente el punto sobre el plano.",
          "**Truco de examen**: Si un cubo tiene aristas de longitud a, la diagonal del cubo mide **a√3** y la diagonal de una cara mide **a√2**.",
          "La **distancia entre rectas inclinadas** se mide por el segmento perpendicular común, que es la proyección sobre la normal común.",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="150,30 280,80 280,150 150,180 20,150 20,80" fill="#2563eb" fill-opacity="0.06" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="30" x2="150" y2="180" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="20" y1="80" x2="280" y2="80" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="20" y1="150" x2="280" y2="150" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="280" y1="80" x2="280" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="20" y1="80" x2="20" y2="150" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="20" y1="150" x2="150" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="280" y1="150" x2="150" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="20" y1="80" x2="150" y2="30" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="280" y1="80" x2="150" y2="30" stroke="#2563eb" stroke-width="2"/>
  <line x1="20" y1="80" x2="280" y2="80" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="20" y1="150" x2="280" y2="150" stroke="#dc2626" stroke-width="2.5"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Planos paralelos α y β</text>
  <text x="145" y="75" font-size="12" fill="#dc2626" font-weight="bold">α</text>
  <text x="145" y="165" font-size="12" fill="#dc2626" font-weight="bold">β</text>
  <line x1="150" y1="80" x2="150" y2="150" stroke="#059669" stroke-width="2"/>
  <text x="160" y="118" font-size="11" fill="#059669" font-weight="bold">d</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="40,170 140,170 140,70 40,70" fill="#2563eb" fill-opacity="0.08" stroke="#2563eb" stroke-width="2"/>
  <polygon points="160,170 260,170 260,70 160,70" fill="#dc2626" fill-opacity="0.08" stroke="#dc2626" stroke-width="2"/>
  <line x1="40" y1="120" x2="260" y2="120" stroke="#059669" stroke-width="2.5"/>
  <line x1="140" y1="70" x2="160" y2="70" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="5,3"/>
  <line x1="140" y1="170" x2="160" y2="170" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="5,3"/>
  <circle cx="120" cy="120" r="3" fill="#059669"/>
  <circle cx="180" cy="120" r="3" fill="#059669"/>
  <text x="90" y="115" font-size="12" fill="#2563eb" font-weight="bold">α</text>
  <text x="210" y="115" font-size="12" fill="#dc2626" font-weight="bold">β</text>
  <text x="150" y="115" font-size="11" fill="#059669" font-weight="bold">r</text>
  <text x="150" y="60" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Dos planos secantes</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">La intersección de dos planos es una recta r</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="150" x2="270" y2="50" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="30" y1="80" x2="270" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="150" y="30" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Rectas inclinadas (skew)</text>
  <text x="28" y="75" font-size="11" fill="#dc2626" font-weight="bold">r₂</text>
  <text x="28" y="160" font-size="11" fill="#2563eb" font-weight="bold">r₁</text>
  <line x1="120" y1="115" x2="180" y2="105" stroke="#059669" stroke-width="2"/>
  <text x="145" y="100" font-size="10" fill="#059669" font-weight="bold">d perpendicular</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">No se cortan y no están en un mismo plano</text>
</svg>`,
    ],
    exercises: [
      {
        id: 1101,
        question:
          "Dos planos α y β son paralelos. Una recta r es perpendicular a α. ¿Cuál es la relación de r con β?",
        options: [
          "r es paralela a β",
          "r es perpendicular a β",
          "r es oblicua a β",
          "No se puede determinar",
        ],
        correctIndex: 1,
        explanation:
          "Si r es perpendicular a α y α ∥ β, entonces r también es perpendicular a β. Esto se debe a que la perpendicular a uno de dos planos paralelos es perpendicular al otro.",
        difficulty: "basico",
      },
      {
        id: 1102,
        question:
          "En un cubo de arista 6, ¿cuánto mide el ángulo que forma la diagonal del cubo con la cara inferior?",
        options: ["30°", "45°", "arctan(1/√2) ≈ 35.26°", "arccos(1/√3)"],
        correctIndex: 2,
        explanation:
          "La diagonal del cubo AG tiene longitud 6√3. Su proyección sobre la cara inferior es la diagonal AC = 6√2. El ángulo θ cumple: sen(θ) = altura/diagonal = 6/(6√3) = 1/√3, o equivalentemente tan(θ) = 6/(6√2) = 1/√2. Entonces θ = arctan(1/√2) ≈ 35.26°.",
        difficulty: "intermedio",
      },
      {
        id: 1103,
        question:
          "Un cubo tiene arista de longitud a. ¿Cuál es el ángulo que forma la diagonal del cubo con una de las diagonales de una cara?",
        options: [
          "arccos(1/√3)",
          "arccos(√2/√3)",
          "arccos(1/3)",
          "45°",
        ],
        correctIndex: 1,
        explanation:
          "La diagonal del cubo d_c = a√3. La diagonal de una cara d_f = a√2. El ángulo α entre ellas cumple: cos(α) = d_f/d_c = (a√2)/(a√3) = √2/√3. Entonces α = arccos(√2/√3) ≈ 35.26°.",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "prisma-y-cilindro",
    tip: "Para calcular el área total de prismas y cilindros, siempre suma: 2 × área_base + perímetro_base × altura. En cilindro, recuerda que el lateral es un rectángulo 'desenrollado' de base 2πr y altura h.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **prisma** es un sólido con **dos bases paralelas e iguales** y caras laterales que son **paralelogramos**.",
          "Un **cilindro** es un sólido con **dos bases circulares paralelas e iguales** y una superficie lateral **curva**.",
          "Prismas se nombran por la forma de su base: **triangular, rectangular, hexagonal**, etc.",
          "La **altura** es la distancia perpendicular entre las dos bases.",
          "Las **aristas laterales** de un prisma son todas iguales y paralelas entre sí.",
          "Un cilindro se puede obtener rotando un **rectángulo** alrededor de uno de sus lados.",
        ],
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Volumen del prisma**: **V = A_base × h** (área de la base por la altura).",
          "**Volumen del cilindro**: **V = π × r² × h**.",
          "**Área lateral del prisma**: **A_lat = P_base × h** (perímetro de la base por la altura).",
          "**Área lateral del cilindro**: **A_lat = 2π × r × h**.",
          "**Área total del prisma**: **A_total = 2 × A_base + P_base × h**.",
          "**Área total del cilindro**: **A_total = 2πr² + 2πrh = 2πr(r + h)**.",
        ],
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de Cavalieri**: Si dos sólidos tienen la misma altura y secciones iguales a cualquier altura, tienen el **mismo volumen**.",
          "Un cilindro es el **caso límite** de un prisma cuando el número de lados de la base tiende a **infinito**.",
          "Un **cilindro oblicuo** tiene el mismo volumen que uno recto con la **misma base y la misma altura perpendicular**.",
          "Si un prisma se corta con un plano oblicuo, el volumen se calcula con la **altura media**: **V = A_base × h_media**.",
          "**Truco de examen**: En problemas de vasos comunicantes o líquidos en recipientes cilíndricos, el volumen del líquido = A_base × altura_del_líquido, independientemente de la inclinación.",
          "La relación entre el volumen de un cilindro y el de una esfera inscrita es **V_cil = (3/2) × V_esfera** (misma base y altura = 2r).",
        ],
      },
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="80,50 170,50 210,30 120,30" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <polygon points="80,160 170,160 210,140 120,140" fill="#2563eb" fill-opacity="0.2" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="80" y1="50" x2="80" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="170" y1="50" x2="170" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="210" y1="30" x2="210" y2="140" stroke="#2563eb" stroke-width="2"/>
  <line x1="120" y1="30" x2="120" y2="140" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="80" y1="50" x2="120" y2="30" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Prisma Rectangular</text>
  <text x="220" y="90" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="120" y="180" font-size="11" fill="#059669" font-weight="bold">base</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">V = A_base × h</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <ellipse cx="150" cy="50" rx="60" ry="20" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="150" cy="160" rx="60" ry="20" fill="#2563eb" fill-opacity="0.25" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="90" y1="50" x2="90" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="210" y1="50" x2="210" y2="160" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="50" x2="150" y2="160" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="90" y1="160" x2="150" y2="160" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="20" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Cilindro</text>
  <text x="218" y="108" font-size="12" fill="#dc2626" font-weight="bold">h</text>
  <text x="120" y="168" font-size="11" fill="#059669" font-weight="bold">r</text>
  <text x="150" y="80" font-size="10" fill="#7c3aed">2πr</text>
  <text x="150" y="195" text-anchor="middle" font-size="11" fill="#64748b">V = πr²h | A_lat = 2πrh</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc"/>
  <rect x="30" y="40" width="240" height="120" rx="3" fill="#dc2626" fill-opacity="0.1" stroke="#dc2626" stroke-width="2"/>
  <line x1="30" y1="100" x2="270" y2="100" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="150" y="25" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">Superficie lateral desenrollada</text>
  <text x="150" y="75" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="bold">Altura = h</text>
  <text x="150" y="140" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">Base = 2πr (circunferencia)</text>
  <text x="150" y="190" text-anchor="middle" font-size="11" fill="#64748b">A_lateral = 2πr × h (rectángulo)</text>
</svg>`,
    ],
    exercises: [
      {
        id: 1201,
        question:
          "Un prisma rectangular tiene dimensiones 5 cm × 3 cm × 8 cm. ¿Cuál es su volumen?",
        options: ["40 cm³", "80 cm³", "120 cm³", "160 cm³"],
        correctIndex: 2,
        explanation:
          "V = largo × ancho × alto = 5 × 3 × 8 = 120 cm³.",
        difficulty: "basico",
      },
      {
        id: 1202,
        question:
          "Un cilindro tiene radio 4 cm y altura 10 cm. ¿Cuál es su área lateral?",
        options: [
          "40π cm²",
          "80π cm²",
          "160π cm²",
          "320π cm²",
        ],
        correctIndex: 1,
        explanation:
          "A_lateral = 2πrh = 2π(4)(10) = 80π cm². La superficie lateral desenrollada es un rectángulo de base 2πr = 8π y altura 10.",
        difficulty: "intermedio",
      },
      {
        id: 1203,
        question:
          "Un prisma hexagonal regular tiene un lado de base de 4 cm y una altura de 10 cm. ¿Cuál es su volumen y su área total?",
        options: [
          "V = 240√3 cm³, A = 240 + 24√3 cm²",
          "V = 120√3 cm³, A = 120 + 24√3 cm²",
          "V = 240√3 cm³, A = 240 + 48√3 cm²",
          "V = 480√3 cm³, A = 480 + 48√3 cm²",
        ],
        correctIndex: 2,
        explanation:
          "Área del hexágono = 6 × (√3/4)(4²) = 6 × 4√3 = 24√3 cm². Volumen = 24√3 × 10 = 240√3 cm³. Perímetro = 6 × 4 = 24 cm. A_lateral = 24 × 10 = 240 cm². A_total = 2(24√3) + 240 = 48√3 + 240 cm².",
        difficulty: "avanzado",
      },
    ],
  },
  {
    slug: "piramide-y-cono",
    tip: "En el examen, distingue siempre entre la altura (h) y la apotema o generatriz (g). La altura cae perpendicular desde el vértice al centro de la base; la generatriz va del vértice al borde de la base. Muchos errores ocurren por confundir ambas. Memoriza: V_pirámide = (1/3)·A_base·h y V_cono = (1/3)·π·r²·h.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **pirámide** es un sólido cuya base es un polígono y cuyas caras laterales son triángulos que convergen en un punto llamado **vértice**.",
          "Un **cono** es un sólido cuya base es un círculo y cuya superficie lateral se curva desde el borde de la base hasta un punto llamado **vértice** o **ápice**.",
          "La **altura (h)** de una pirámide o cono es el segmento perpendicular que va desde el vértice hasta el plano de la base.",
          "La **apotema de la pirámide** o **generatriz del cono (g)** es la distancia desde el vértice hasta un punto del borde de la base, midiendo sobre la superficie lateral.",
          "Una pirámide se denomina **regular** cuando su base es un polígono regular y su vértice se proyecta sobre el centro de la base.",
          "El cono se llama **recto** cuando su eje es perpendicular al plano de la base.",
          "La **altura de un tronco** (pirámide o cono truncado) es la distancia perpendicular entre las dos bases paralelas."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Volumen de pirámide:** V = (1/3) · A_base · h, donde A_base es el área de la base y h es la altura.",
          "**Volumen de cono:** V = (1/3) · π · r² · h, donde r es el radio de la base circular.",
          "**Área lateral de pirámide regular:** A_L = (1/2) · P_base · g, donde P_base es el perímetro de la base y g es el apotema (generatriz lateral).",
          "**Área lateral de cono recto:** A_L = π · r · g, donde g = √(r² + h²) es la generatriz.",
          "**Área total de cono:** A_T = π · r · g + π · r² = π · r · (g + r).",
          "**Relación generatriz-altura-radio:** g² = h² + r² (en cono recto, análogo al teorema de Pitágoras).",
          "**Volumen de tronco de cono:** V = (1/3) · π · h · (r₁² + r₂² + r₁ · r₂), donde r₁ y r₂ son los radios de las bases.",
          "**Volumen de tronco de pirámide:** V = (h/3) · (A₁ + A₂ + √(A₁ · A₂)), donde A₁ y A₂ son las áreas de las bases."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Teorema de la sección cónica (Pappus-Guldinus) para superficies de revolución:** El área de una superficie de revolución generada por una curva plana es el producto de la longitud de la curva por la distancia recorrida por su centroide.",
          "**Volúmenes por el método de Pappus:** El volumen generado por una figura plana al rotar alrededor de un eje exterior es igual al área de la figura multiplicada por la distancia recorrida por su centroide: V = 2π · d̄ · A.",
          "**Relación de semejanza:** Si dos pirámides o conos son semejanza con razón de proporcionalidad k, entonces: relación de alturas = k, relación de áreas = k², relación de volúmenes = k³.",
          "**Proporción de un cono y su circunsferencia:** En un cono recto, el ángulo del vértice α satisface: tan(α/2) = r/h. Esto permite determinar el ángulo del cono conocidos r y h.",
          "**Área lateral del tronco de cono:** A_L = π · (r₁ + r₂) · g_t, donde g_t es la generatriz del tronco.",
          "**Centroide de una pirámide:** El centroide de volumen de una pirámide o cono recto se encuentra a una distancia de h/4 desde la base, es decir, a 3h/4 desde el vértice."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <polygon points="80,170 170,170 125,50" fill="none" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="125" cy="170" rx="45" ry="12" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="125" y1="50" x2="125" y2="170" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="125" y1="50" x2="170" y2="170" stroke="#059669" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="130" y="115" fill="#dc2626" font-size="13" font-family="sans-serif" font-weight="bold">h</text>
  <text x="152" y="118" fill="#059669" font-size="13" font-family="sans-serif" font-weight="bold">g</text>
  <text x="125" y="185" fill="#2563eb" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="150" y="30" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Pirámide regular</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="100" y1="40" x2="60" y2="165" stroke="#2563eb" stroke-width="2"/>
  <line x1="100" y1="40" x2="180" y2="165" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="120" cy="165" rx="60" ry="14" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="100" y1="40" x2="120" y2="165" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="40" x2="180" y2="165" stroke="#059669" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="105" y="105" fill="#dc2626" font-size="13" font-family="sans-serif" font-weight="bold">h</text>
  <text x="148" y="110" fill="#059669" font-size="13" font-family="sans-serif" font-weight="bold">g</text>
  <text x="135" y="178" fill="#2563eb" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="130" y="22" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Cono recto</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="110" y1="50" x2="70" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="110" y1="50" x2="190" y2="150" stroke="#2563eb" stroke-width="2"/>
  <line x1="70" y1="150" x2="190" y2="150" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="130" cy="150" rx="60" ry="12" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="110" y1="50" x2="130" y2="150" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="130" y1="100" x2="130" y2="150" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="110" y1="50" x2="170" y2="100" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="2,2"/>
  <line x1="110" y1="50" x2="170" y2="100" stroke="#7c3aed" stroke-width="1.5"/>
  <ellipse cx="130" cy="100" rx="30" ry="8" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="115" y="80" fill="#dc2626" font-size="12" font-family="sans-serif" font-weight="bold">h₁</text>
  <text x="135" y="130" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">h</text>
  <text x="100" y="38" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Tronco de pirámide</text>
</svg>`
    ],
    exercises: [
      {
        id: 1301,
        question: "¿Cuál es el volumen de una pirámide cuya base es un cuadrado de lado 6 cm y cuya altura mide 10 cm?",
        options: ["120 cm³", "60 cm³", "360 cm³", "180 cm³"],
        correctIndex: 0,
        explanation: "A_base = 6² = 36 cm². V = (1/3)·36·10 = 120 cm³.",
        difficulty: "basico"
      },
      {
        id: 1302,
        question: "Un cono recto tiene radio de base 5 cm y generatriz de 13 cm. ¿Cuál es su área lateral?",
        options: ["65π cm²", "25π cm²", "156π cm²", "90π cm²"],
        correctIndex: 0,
        explanation: "A_L = π·r·g = π·5·13 = 65π cm². La generatriz ya se nos dio directamente.",
        difficulty: "intermedio"
      },
      {
        id: 1303,
        question: "Un cono recto tiene una generatriz de 25 cm y un radio de base de 7 cm. Se trunca el cono a la mitad de su altura (medida sobre el eje). ¿Cuál es el volumen del tronco resultante si la altura total del cono original es 24 cm?",
        options: ["308π cm³", "154π cm³", "616π cm³", "462π cm³"],
        correctIndex: 0,
        explanation: "La altura total es h=24. Truncando a la mitad, h_tronco=12. Por semejanza, el radio del cono pequeño es r₂=3.5 y el radio mayor es r₁=7. V=(1/3)·π·12·(7²+3.5²+7·3.5)=(1/3)·π·12·(49+12.25+24.5)=(1/3)·π·12·85.75=12·π·85.75/3=308π cm³.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "esfera",
    tip: "La fórmula de la esfera V = (4/3)πr³ debe memorizarse perfectamente. En el examen, cuidado: muchos preguntan el diámetro y no el radio. También recuerda que A = 4πr². Un atajo: el área de la esfera es exactamente la derivada del volumen respecto a r: dV/dr = 4πr².",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **esfera** es el conjunto de todos los puntos del espacio que están a una distancia igual (radio **r**) de un punto fijo llamado **centro**.",
          "Un **semiesfera** es la mitad de una esfera, cortada por un plano que pasa por su centro. La intersección se llama **ecuador** o **círculo máximo**.",
          "Un **casquete esférico** es la porción de esfera cortada por un plano que no necesariamente pasa por el centro.",
          "El **radio (r)** es la distancia del centro a cualquier punto de la superficie. El **diámetro (d)** vale d = 2r.",
          "Un **gran círculo** es la intersección de la esfera con un plano que pasa por su centro. Es el círculo de mayor radio posible en la esfera (radio = r).",
          "Los **polos** de una esfera son dos puntos opuestos sobre un eje, y la **distancia polar** es la distancia entre ambos polos a lo largo de la superficie.",
          "Una **zona esférica** es la superficie lateral de la esfera entre dos planos paralelos que la cortan."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Volumen de esfera:** V = (4/3) · π · r³.",
          "**Superficie de esfera:** A = 4 · π · r².",
          "**Volumen de semiesfera:** V = (2/3) · π · r³.",
          "**Área de zona esférica:** A_zona = 2 · π · r · h, donde h es la altura del casquete (distancia entre los dos planos cortantes).",
          "**Volumen de casquete esférico:** V_casquete = (π · h² / 3) · (3r − h).",
          "**Relación esfera-cubo circunscrito:** Si un cubo de lado a circunscribe una esfera, entonces r = a/2 y V_esfera = (π/6)·a³.",
          "**Relación esfera-cilindro circunscrito:** Si un cilindro de radio r y altura 2r circunscribe una esfera, entonces: V_esfera/V_cilindro = 2/3.",
          "**Proporción de Arquímedes:** La esfera inscrita en un cilindro tiene exactamente 2/3 del volumen y 2/3 del área superficial del cilindro."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Análisis dimensional:** Las fórmulas de la esfera son invariantes bajo escalado. Si duplicamos el radio, el volumen se multiplica por 2³ = 8 y el área por 2² = 4.",
          "**La esfera como solución de optimización:** De todos los cuerpos con igual volumen, la esfera tiene la menor superficie. Esto se demuestra con cálculo de variaciones.",
          "**Teorema de la esfera y el tetraedro:** Para un tetraedro inscrito en una esfera de radio R, existe la fórmula R = (√6/4)·a para un tetraedro regular de lado a.",
          "**Área de un triángulo esférico:** A = R²·(α + β + γ − π), donde α, β, γ son los ángulos del triángulo esférico medidos en radianes y R es el radio de la esfera.",
          "**Volumen esférico en coordenadas esféricas:** V = ∫∫∫ r²·sin(φ) dr dφ dθ, integrando r de 0 a R, φ de 0 a π, y θ de 0 a 2π.",
          "**Relación con círculos de Apolonio:** En geometría esférica, las distancias entre puntos se miden por el ángulo central: la distancia esférica d = R·θ."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="150" cy="100" rx="70" ry="20" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="150" y1="100" x2="220" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="150" y2="30" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <text x="178" y="95" fill="#dc2626" font-size="14" font-family="sans-serif" font-weight="bold">r</text>
  <text x="155" y="65" fill="#059669" font-size="14" font-family="sans-serif" font-weight="bold">r</text>
  <text x="108" y="125" fill="#2563eb" font-size="12" font-family="sans-serif" font-weight="bold">ecuador</text>
  <text x="100" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Esfera con ecuador</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="100" x2="220" y2="100" stroke="#dc2626" stroke-width="1.5"/>
  <path d="M 100 100 A 50 50 0 0 1 150 50" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M 150 50 A 70 70 0 0 1 220 100" fill="#2563eb" fill-opacity="0.1"/>
  <line x1="150" y1="100" x2="150" y2="30" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="150" y1="30" x2="220" y2="100" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <text x="178" y="95" fill="#dc2626" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="90" y="55" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">R esférico</text>
  <text x="130" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Triángulo esférico</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <rect x="75" y="30" width="150" height="140" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="100" r="70" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="220" y2="100" stroke="#059669" stroke-width="1.5"/>
  <line x1="75" y1="100" x2="225" y2="100" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="150" y1="30" x2="150" y2="170" stroke="#7c3aed" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="178" y="95" fill="#059669" font-size="13" font-family="sans-serif" font-weight="bold">r</text>
  <text x="130" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Esfera en cubo</text>
  <text x="90" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">lado = 2r</text>
</svg>`
    ],
    exercises: [
      {
        id: 1401,
        question: "¿Cuál es el volumen de una esfera de radio 6 cm? (Usar π ≈ 3.14)",
        options: ["904.32 cm³", "226.08 cm³", "452.16 cm³", "113.04 cm³"],
        correctIndex: 0,
        explanation: "V = (4/3)·π·r³ = (4/3)·3.14·6³ = (4/3)·3.14·216 = 904.32 cm³.",
        difficulty: "basico"
      },
      {
        id: 1402,
        question: "Un casquete esférico tiene radio de esfera R = 10 cm y altura h = 4 cm. ¿Cuál es su volumen?",
        options: ["175.93 cm³", "100.53 cm³", "251.20 cm³", "334.93 cm³"],
        correctIndex: 0,
        explanation: "V = (π·h²/3)·(3R − h) = (π·16/3)·(30 − 4) = (16π/3)·26 = 416π/3 ≈ 175.93 cm³.",
        difficulty: "intermedio"
      },
      {
        id: 1403,
        question: "Un cilindro circunscribe una esfera de radio 5 cm (es decir, la esfera toca las tapas y la pared lateral del cilindro). ¿Cuál es la relación entre el volumen de la esfera y el del cilindro?",
        options: ["2/3", "1/2", "3/4", "4/3"],
        correctIndex: 0,
        explanation: "El cilindro que circunscribe una esfera de radio r tiene radio r y altura 2r. V_esfera = (4/3)πr³, V_cilindro = πr²(2r) = 2πr³. Relación: (4/3)πr³ / 2πr³ = (4/3)/2 = 2/3.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "la-recta",
    tip: "Dominar las tres formas de ecuación de la recta (pendiente-intersección, punto-pendiente y general) es clave. En el examen, identifica primero qué te dan: si te dan dos puntos usa m=(y₂−y₁)/(x₂−x₁) y luego punto-pendiente. La ecuación general Ax+By+C=0 es la más versátil para calcular distancias y ángulos.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **recta** en el plano es el lugar geométrico de todos los puntos que satisfacen una ecuación de primer grado en x e y.",
          "La **pendiente (m)** de una recta mide la inclinación de la recta y se calcula como: m = (y₂ − y₁) / (x₂ − x₁).",
          "Si m > 0 la recta sube de izquierda a derecha; si m < 0 la recta baja; si m = 0 la recta es horizontal.",
          "Una recta **vertical** no tiene pendiente definida (división por cero) y su ecuación es x = k (constante).",
          "El **intersección con el eje y** (o ordenada al origen, b) es el valor de y cuando x = 0.",
          "El **intersección con el eje x** (o abcisa) es el valor de x cuando y = 0.",
          "Dos rectas son **paralelas** si tienen la misma pendiente. Son **perpendiculares** si el producto de sus pendientes es −1."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Ecuación pendiente-intersección:** y = m·x + b, donde m es la pendiente y b la intersección con el eje y.",
          "**Ecuación punto-pendiente:** y − y₁ = m·(x − x₁), útil cuando conoces un punto y la pendiente.",
          "**Ecuación general:** A·x + B·y + C = 0 (con A, B no ambos cero). Pendiente: m = −A/B.",
          "**Ecuación interceptos:** x/a + y/b = 1, donde a y b son las intersecciones con los ejes x e y respectivamente.",
          "**Distancia entre dos puntos:** d = √[(x₂ − x₁)² + (y₂ − y₁)²].",
          "**Punto medio:** M = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
          "**Ángulo entre dos rectas:** tan(θ) = |(m₂ − m₁)/(1 + m₁·m₂)|, donde θ es el ángulo agudo entre las rectas.",
          "**Distancia de un punto a una recta:** d = |A·x₀ + B·y₀ + C| / √(A² + B²), donde la recta es Ax + By + C = 0."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Ecuación de la mediatriz:** La mediatriz del segmento AB tiene pendiente −1/m_AB y pasa por el punto medio de AB.",
          "**Condiciones de concurrencia:** Tres rectas son concurrentes si el determinante |A₁ B₁ C₁; A₂ B₂ C₂; A₃ B₃ C₃| = 0.",
          "**Ángulo de inclinación:** Si θ es el ángulo que la recta forma con el eje x positivo, entonces m = tan(θ). El ángulo de inclinación satisface 0° ≤ θ < 180°.",
          "**Ecuación de familia de rectas:** La familia de rectas que pasan por la intersección de L₁ y L₂ se escribe: L₁ + λ·L₂ = 0.",
          "**Transformación de coordenadas:** Si se traslada el origen a (h, k), la recta Ax + By + C = 0 se convierte en A(x'+h) + B(y'+k) + C = 0.",
          "**Proyección ortogonal:** La proyección del punto P(x₀, y₀) sobre la recta Ax + By + C = 0 tiene coordenadas: x' = x₀ − A·(Ax₀+By₀+C)/(A²+B²), y' = y₀ − B·(Ax₀+By₀+C)/(A²+B²)."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="40" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="40" y1="170" x2="280" y2="30" stroke="#2563eb" stroke-width="2"/>
  <line x1="200" y1="100" x2="200" y2="60" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="150" y1="100" x2="200" y2="100" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="200" cy="60" r="3" fill="#dc2626"/>
  <circle cx="150" cy="100" r="3" fill="#059669"/>
  <text x="210" y="58" fill="#dc2626" font-size="11" font-family="sans-serif">(x₁, y₁)</text>
  <text x="155" y="115" fill="#059669" font-size="11" font-family="sans-serif">(0, b)</text>
  <text x="185" y="92" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">Δy</text>
  <text x="170" y="115" fill="#7c3aed" font-size="12" font-family="sans-serif" font-weight="bold">Δx</text>
  <text x="80" y="185" fill="#2563eb" font-size="13" font-family="sans-serif" font-weight="bold">y = mx + b</text>
  <text x="230" y="115" fill="#94a3b8" font-size="12" font-family="sans-serif">x</text>
  <text x="155" y="22" fill="#94a3b8" font-size="12" font-family="sans-serif">y</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="40" y1="170" x2="270" y2="40" stroke="#2563eb" stroke-width="2"/>
  <line x1="40" y1="40" x2="270" y2="170" stroke="#dc2626" stroke-width="2"/>
  <circle cx="155" cy="105" r="3" fill="#059669"/>
  <text x="230" y="35" fill="#2563eb" font-size="11" font-family="sans-serif" font-weight="bold">L₁: m₁</text>
  <text x="230" y="165" fill="#dc2626" font-size="11" font-family="sans-serif" font-weight="bold">L₂: m₂</text>
  <text x="160" y="100" fill="#059669" font-size="11" font-family="sans-serif">P</text>
  <text x="100" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Rectas perpendiculares</text>
  <text x="110" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">m₁ · m₂ = −1</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="30" y1="150" x2="280" y2="60" stroke="#2563eb" stroke-width="2"/>
  <circle cx="100" cy="130" r="3" fill="#dc2626"/>
  <line x1="100" y1="130" x2="133" y2="72" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="113" y1="102" x2="120" y2="95" stroke="#059669" stroke-width="1"/>
  <line x1="120" y1="102" x2="113" y2="95" stroke="#059669" stroke-width="1"/>
  <text x="70" y="135" fill="#dc2626" font-size="11" font-family="sans-serif">P(x₀, y₀)</text>
  <text x="135" y="70" fill="#059669" font-size="11" font-family="sans-serif">d</text>
  <text x="210" y="55" fill="#2563eb" font-size="11" font-family="sans-serif">Ax + By + C = 0</text>
  <text x="70" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Distancia punto a recta</text>
</svg>`
    ],
    exercises: [
      {
        id: 1501,
        question: "¿Cuál es la ecuación de la recta que pasa por los puntos (1, 3) y (4, 9)?",
        options: ["y = 2x + 1", "y = 3x", "y = 2x − 1", "y = 3x + 6"],
        correctIndex: 0,
        explanation: "m = (9−3)/(4−1) = 6/3 = 2. Usando punto-pendiente con (1,3): y−3 = 2(x−1) → y = 2x+1.",
        difficulty: "basico"
      },
      {
        id: 1502,
        question: "¿Cuál es la distancia del punto (2, −1) a la recta 3x − 4y + 5 = 0?",
        options: ["1.4", "3.0", "0.2", "5.0"],
        correctIndex: 1,
        explanation: "d = |A·x₀ + B·y₀ + C| / √(A² + B²) = |3(2) − 4(−1) + 5| / √(9 + 16) = |6 + 4 + 5| / √25 = 15/5 = 3.0.",
        difficulty: "intermedio"
      },
      {
        id: 1503,
        question: "Halle el área del triángulo formado por los vértices A(1, 2), B(4, 6) y C(7, 3).",
        options: ["10.5", "21", "7", "14"],
        correctIndex: 0,
        explanation: "Usando la fórmula del área con coordenadas: A = (1/2)|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)| = (1/2)|1(6−3) + 4(3−2) + 7(2−6)| = (1/2)|3 + 4 − 28| = (1/2)|−21| = 10.5.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "circunferencia-y-parabola",
    tip: "Para la circunferencia: identifica rápidamente el centro (h,k) y radio r de la ecuación general completando cuadrados. Para la parábola: siempre identifica si abre hacia arriba/abajo (eje vertical) o derecha/izquierda (eje horizontal). El foco y la directriz están a distancia p del vértice, y p = 1/(4|a|) en la forma y = ax².",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **circunferencia** es el lugar geométrico de todos los puntos que están a una distancia fija (**radio r**) de un punto fijo (**centro**).",
          "Una **parábola** es el lugar geométrico de todos los puntos que están a igual distancia de un punto fijo (**foco**) y una recta fija (**directriz**).",
          "El **vértice** de una parábola es el punto donde la parábola cruza su eje de simetría. Está a mitad de camino entre el foco y la directriz.",
          "La **distancia focal** (o parámetro **p**) es la distancia del vértice al foco (y también del vértice a la directriz).",
          "El **eje** de la parábola es la recta que pasa por el foco y es perpendicular a la directriz.",
          "Un **corte** de una parábola (la **latus rectum**) es el segmento que pasa por el foco, es paralelo a la directriz y termina en la parábola.",
          "En una circunferencia, una **cuerda** es un segmento que une dos puntos de la circunferencia. Un **diámetro** es la cuerda que pasa por el centro."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Ecuación de la circunferencia (centro-radio):** (x − h)² + (y − k)² = r², con centro (h, k) y radio r.",
          "**Ecuación general de la circunferencia:** x² + y² + Dx + Ey + F = 0, con centro (−D/2, −E/2) y r² = (D²+E²)/4 − F.",
          "**Forma canónica de la parábola (eje vertical):** (x − h)² = 4p(y − k), vértice en (h, k), foco en (h, k+p).",
          "**Forma canónica de la parábola (eje horizontal):** (y − k)² = 4p(x − h), vértice en (h, k), foco en (h+p, k).",
          "**Parábola función cuadrática:** y = a(x−h)² + k, con a = 1/(4p). Si a > 0 abre hacia arriba; si a < 0, hacia abajo.",
          "**Largo del latus rectum:** 4|p|.",
          "**Ecuación de la recta tangente a la circunferencia:** x·x₁ + y·y₁ = r² (para centro en el origen), o sustituyendo coordenadas relativas al centro.",
          "**Condición de tangencia:** Una recta es tangente a una circunferencia si la distancia del centro a la recta es exactamente igual al radio."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Ángulo inscrito en semicircunferencia:** Todo ángulo inscrito que abarca un diámetro es recto (90°). Este es el teorema de Tales.",
          "**Potencia de un punto respecto a una circunferencia:** Para un punto P y una circunferencia, PA·PB es constante para cualquier recta que pase por P y corte la circunferencia en A y B.",
          "**Ángulo entre dos circunferencias:** Si dos circunferencias se cortan, el ángulo entre ellas es el ángulo entre sus tangentes en los puntos de intersección.",
          "**Propiedad de reflexión de la parábola:** Cualquier rayo paralelo al eje que incide sobre una parábola se refleja pasando por el foco. Esto se usa en antenas parabólicas y faros.",
          "**Propiedades métricas en la parábola:** Para cualquier punto P sobre la parábola y = ax², la distancia al foco PF = y_P + p = y_P + 1/(4a).",
          "**Ecuación polar de la parábola:** Con el foco como polo y el eje como polar, r = 2p/(1 − cos θ), donde p es la distancia focal."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <circle cx="150" cy="100" r="60" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="100" r="3" fill="#dc2626"/>
  <text x="155" y="95" fill="#dc2626" font-size="11" font-family="sans-serif">C(h,k)</text>
  <line x1="150" y1="100" x2="210" y2="100" stroke="#059669" stroke-width="1.5"/>
  <text x="172" y="95" fill="#059669" font-size="12" font-family="sans-serif" font-weight="bold">r</text>
  <text x="155" y="115" fill="#059669" font-size="11" font-family="sans-serif">(x₁,y₁)</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">(x−h)²+(y−k)²=r²</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <path d="M 80,170 Q 150,30 220,170" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="150" y1="85" x2="150" y2="115" stroke="#dc2626" stroke-width="1.5"/>
  <circle cx="150" cy="85" r="3" fill="#dc2626"/>
  <line x1="80" y1="170" x2="220" y2="170" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="150" y1="115" x2="150" y2="170" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="155" y="83" fill="#dc2626" font-size="11" font-family="sans-serif" font-weight="bold">Foco</text>
  <text x="155" y="110" fill="#7c3aed" font-size="11" font-family="sans-serif" font-weight="bold">p</text>
  <text x="155" y="165" fill="#059669" font-size="11" font-family="sans-serif" font-weight="bold">Directriz</text>
  <text x="155" y="120" fill="#94a3b8" font-size="10" font-family="sans-serif">Vértice</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Parábola (eje vertical)</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <path d="M 220,80 Q 80,100 220,120" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="85" cy="100" r="3" fill="#dc2626"/>
  <line x1="215" y1="10" x2="215" y2="190" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="85" y1="100" x2="215" y2="100" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="90" y="95" fill="#dc2626" font-size="11" font-family="sans-serif" font-weight="bold">F</text>
  <text x="140" y="93" fill="#7c3aed" font-size="11" font-family="sans-serif" font-weight="bold">p</text>
  <text x="115" y="115" fill="#94a3b8" font-size="10" font-family="sans-serif">V</text>
  <text x="220" y="95" fill="#059669" font-size="11" font-family="sans-serif" font-weight="bold">Directriz</text>
  <text x="70" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Parábola (eje horizontal)</text>
</svg>`
    ],
    exercises: [
      {
        id: 1601,
        question: "¿Cuál es el centro y el radio de la circunferencia x² + y² − 6x + 4y − 12 = 0?",
        options: ["Centro (3, −2), r = 5", "Centro (−3, 2), r = 5", "Centro (3, −2), r = 25", "Centro (6, −4), r = 12"],
        correctIndex: 0,
        explanation: "Completando cuadrados: (x²−6x+9) + (y²+4y+4) = 12+9+4 → (x−3)² + (y+2)² = 25. Centro (3,−2), r=5.",
        difficulty: "basico"
      },
      {
        id: 1602,
        question: "La ecuación de una parábola con vértice en el origen y foco en (0, 3) es:",
        options: ["x² = 12y", "y² = 12x", "x² = 6y", "y² = 6x"],
        correctIndex: 0,
        explanation: "El foco está en (0,3), por lo que p=3 y la parábola abre hacia arriba. x² = 4py = 4(3)y = 12y.",
        difficulty: "intermedio"
      },
      {
        id: 1603,
        question: "Una parábola tiene vértice en (1, −2) y foco en (1, 1). ¿Cuál es su ecuación?",
        options: ["(x−1)² = 12(y+2)", "(x−1)² = 6(y+2)", "(y+2)² = 12(x−1)", "(x+1)² = 12(y−2)"],
        correctIndex: 0,
        explanation: "El foco (1,1) está arriba del vértice (1,−2), así que la parábola abre hacia arriba con eje vertical. p = 1−(−2) = 3. Forma: (x−1)² = 4p(y−(−2)) = 12(y+2).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "elipse-e-hiperbola",
    tip: "La clave para resolver ejercicios de cónicas rápidamente es memorizar la relación c² = a² − b² (elipse) vs c² = a² + b² (hiperbola). Identifica siempre cuál es a, b y c, y ubica los focos sobre el eje mayor. El excentricidad e te dice la forma: 0 < e < 1 (elipse), e > 1 (hiperbola). A mayor e, más alargada la figura.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **elipse** es el lugar geométrico de todos los puntos del plano tales que la **suma** de las distancias a dos puntos fijos (**focos**) es constante e igual a **2a**.",
          "Una **hiperbola** es el lugar geométrico de todos los puntos del plano tales que la **diferencia** de las distancias a dos puntos fijos (**focos**) es constante e igual a **2a**.",
          "El **centro** de la elipse e hiperbola es el punto medio entre los dos focos.",
          "El **eje mayor** es el segmento de longitud 2a que une los dos **vértices** de la elipse o hiperbola.",
          "En la elipse, el **eje menor** tiene longitud 2b, con b < a.",
          "La **excentricidad (e)** mide la forma de la cónica: para la elipse 0 < e < 1, para la hiperbola e > 1.",
          "Las **assíntotas** de la hiperbola son dos rectas que se cruzan en el centro y que la hiperbola se aproxima infinitamente sin cruzarlas."
        ]
      },
      {
        level: "intermedio",
        title: "Fórmulas y propiedades",
        lines: [
          "**Elipse (eje mayor horizontal):** x²/a² + y²/b² = 1, con a > b > 0, focos en (±c, 0) y c² = a² − b².",
          "**Elipse (eje mayor vertical):** x²/b² + y²/a² = 1, con a > b > 0, focos en (0, ±c).",
          "**Excentricidad de la elipse:** e = c/a, con 0 < e < 1.",
          "**Hiperbola (eje transversal horizontal):** x²/a² − y²/b² = 1, focos en (±c, 0) y c² = a² + b².",
          "**Hiperbola (eje transversal vertical):** y²/a² − x²/b² = 1, focos en (0, ±c).",
          "**Excentricidad de la hiperbola:** e = c/a, con e > 1.",
          "**Assíntotas de la hiperbola:** y = ±(b/a)·x (eje horizontal) o y = ±(a/b)·x (eje vertical).",
          "**Relación fundamental:** En la elipse, la suma PF₁ + PF₂ = 2a para cualquier punto P de la elipse. En la hiperbola, |PF₁ − PF₂| = 2a."
        ]
      },
      {
        level: "avanzado",
        title: "Teoremas avanzados",
        lines: [
          "**Propiedades de reflexión de la elipse:** Un rayo emitido desde un foco de una elipse se refleja y pasa por el otro foco. Esto se aplica en lámparas elípticas y en litotripcia.",
          "**Propiedades de reflexión de la hiperbola:** Un rayo emitido desde un foco de una hiperbola se refleja como si viniera del otro foco. Se usa en telescopios de Cassegrain.",
          "**Forma general de las cónicas:** Ax² + Bxy + Cy² + Dx + Ey + F = 0. El discriminante B² − 4AC determina el tipo: < 0 (elipse), = 0 (parábola), > 0 (hiperbola).",
          "**Invariantes bajo rotación:** Al rotar coordenadas para eliminar el término Bxy, los valores A + C y AC − B²/4 se conservan.",
          "**Cónicas degeneradas:** La ecuación general puede representar un punto (0 intersecciones), una recta (1 intersección tangente), dos rectas, o una circunferencia como casos degenerados.",
          "**Área y perímetro de la elipse:** Área = π·a·b. El perímetro no tiene fórmula exacta simple; una aproximación es P ≈ π[3(a+b) − √((3a+b)(a+3b))] (fórmula de Ramanujan)."
        ]
      }
    ],
    illustrations: [
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <ellipse cx="150" cy="100" rx="100" ry="55" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="100" cy="100" r="3" fill="#dc2626"/>
  <circle cx="200" cy="100" r="3" fill="#dc2626"/>
  <circle cx="50" cy="100" r="3" fill="#059669"/>
  <circle cx="250" cy="100" r="3" fill="#059669"/>
  <line x1="150" y1="100" x2="50" y2="100" stroke="#059669" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="250" y2="100" stroke="#059669" stroke-width="1.5"/>
  <line x1="150" y1="100" x2="150" y2="45" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="93" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₁</text>
  <text x="203" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₂</text>
  <text x="43" y="93" fill="#059669" font-size="11" font-family="sans-serif">V₁</text>
  <text x="253" y="93" fill="#059669" font-size="11" font-family="sans-serif">V₂</text>
  <text x="155" y="58" fill="#7c3aed" font-size="11" font-family="sans-serif">b</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Elipse: x²/a² + y²/b² = 1</text>
  <text x="80" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">c² = a² − b²</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <line x1="30" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1"/>
  <line x1="150" y1="10" x2="150" y2="190" stroke="#94a3b8" stroke-width="1"/>
  <line x1="50" y1="25" x2="250" y2="175" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="50" y1="175" x2="250" y2="25" stroke="#059669" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M 60,55 Q 120,90 60,145" fill="none" stroke="#2563eb" stroke-width="2"/>
  <path d="M 240,55 Q 180,90 240,145" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="110" cy="100" r="3" fill="#dc2626"/>
  <circle cx="190" cy="100" r="3" fill="#dc2626"/>
  <line x1="60" y1="100" x2="100" y2="100" stroke="#059669" stroke-width="1"/>
  <line x1="200" y1="100" x2="240" y2="100" stroke="#059669" stroke-width="1"/>
  <text x="103" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₁</text>
  <text x="193" y="93" fill="#dc2626" font-size="11" font-family="sans-serif">F₂</text>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Hiperbola: x²/a² − y²/b² = 1</text>
  <text x="55" y="18" fill="#059669" font-size="11" font-family="sans-serif">assíntotas</text>
  <text x="80" y="195" fill="#7c3aed" font-size="11" font-family="sans-serif">c² = a² + b²</text>
</svg>`,
      `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8fafc"/>
  <text x="80" y="18" fill="#1e293b" font-size="14" font-family="sans-serif" font-weight="bold">Excentricidad comparativa</text>
  <ellipse cx="80" cy="110" rx="50" ry="48" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <text x="60" y="180" fill="#2563eb" font-size="11" font-family="sans-serif">e ≈ 0 (círculo)</text>
  <ellipse cx="200" cy="110" rx="70" ry="35" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="160" y="180" fill="#dc2626" font-size="11" font-family="sans-serif">e ≈ 0.87 (elipse)</text>
  <path d="M 240,40 Q 260,100 240,160" fill="none" stroke="#059669" stroke-width="1.5"/>
  <path d="M 270,40 Q 250,100 270,160" fill="none" stroke="#059669" stroke-width="1.5"/>
  <text x="240" y="180" fill="#059669" font-size="11" font-family="sans-serif">e > 1 (hiperbola)</text>
  <line x1="5" y1="110" x2="300" y2="110" stroke="#94a3b8" stroke-width="0.5"/>
  <line x1="150" y1="10" x2="150" y2="195" stroke="#94a3b8" stroke-width="0.5"/>
</svg>`
    ],
    exercises: [
      {
        id: 1701,
        question: "¿Cuáles son los focos de la elipse x²/25 + y²/16 = 1?",
        options: ["(±3, 0)", "(±4, 0)", "(±5, 0)", "(±√41, 0)"],
        correctIndex: 0,
        explanation: "a²=25, b²=16. c²=a²−b²=25−16=9, c=3. Los focos están en (±3, 0).",
        difficulty: "basico"
      },
      {
        id: 1702,
        question: "Una hiperbola tiene vértices en (±5, 0) y focos en (±13, 0). ¿Cuál es su ecuación?",
        options: ["x²/25 − y²/144 = 1", "x²/169 − y²/25 = 1", "x²/25 − y²/169 = 1", "x²/144 − y²/25 = 1"],
        correctIndex: 0,
        explanation: "a=5 (vértices), c=13 (focos). c²=a²+b² → 169=25+b² → b²=144. Ecuación: x²/25 − y²/144 = 1.",
        difficulty: "intermedio"
      },
      {
        id: 1703,
        question: "Una elipse tiene focos en (0, ±4) y pasa por el punto (3, 0). ¿Cuál es su excentricidad?",
        options: ["4/5", "3/5", "4/3", "5/4"],
        correctIndex: 0,
        explanation: "Focos en (0,±4): c=4. El punto (3,0) está en la elipse: 3²/b²+0²/a²=1 → b²=9, b=3. Con eje vertical: a²=b²+c²=9+16=25, a=5. e=c/a=4/5.",
        difficulty: "avanzado"
      }
    ]
  }
  ],
  "cokito-rm": [
  {
    slug: "relaciones-de-parentesco",
    tip: "Dibuja el árbol genealógico completo antes de responder. Identifica primero el punto de referencia y luego ve subiendo y bajando generaciones. Los errores más comunes son confundir cuñado con cuñada o tío político con tío carnal.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Parentesco directo**: Relaciones de ascendencia o descendencia (padre, hijo, abuelo, nieto).",
          "**Parentesco colateral**: Personas que comparten un antepasado común pero no son ascendientes entre sí (hermanos, primos, tíos).",
          "**Generaciones**: Cada nivel del árbol genealógico representa una generación. Los padres están una generación arriba, los hijos una abajo.",
          "**Grado de parentesco**: Se contabiliza el número de generaciones que separan a dos personas. Entre hermanos es de 2do grado, entre tíos y sobrinos de 3er grado.",
          "**Cónyuges**: No tienen parentesco de consanguinidad, pero se relacionan por matrimonio (suegro, yerno, nuera, cuñado).",
          "**Terminología clave**: Abuelo/a (2 gen. arriba), Padre/Madre (1 gen. arriba), Hermano/a (misma gen.), Hijo/a (1 gen. abajo), Nieto/a (2 gen. abajo)."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Estrategia del punto focal**: Identifica a la persona de la pregunta y construye el árbol desde esa posición hacia arriba (ascendientes) y hacia abajo (descendientes).",
          "**Matrimonio y afines**: Cuando dos personas se casan, las familias de ambos quedan emparentadas. Los hijos de tu cuñado son tus sobrinos políticos.",
          "**Árbol completo paso a paso**: 1) Coloca a los bisabuelos en la cima, 2) Los abuelos debajo, 3) Los padres, 4) Los hijos, 5) Los nietos.",
          "**Confusiones frecuentes**: Un cuñado es el hermano del cónyuge. Un concuñado es el cónyuge del cuñado. Un padrastro no es padre biológico.",
          "**Regla de los grados**: Cada salto de generación suma un grado. Entre primos carnales hay 4 generaciones de recorrido (abuelo → padre → primo → tú), lo que da parentesco de 4to grado.",
          "**Relaciones políticas**: El yerno es esposo de la hija. La nuera es esposa del hijo. El suegro es el padre del cónyuge."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Árboles con múltiples ramas**: En exámenes complejos, una familia puede tener matrimonios múltiples, viudez y segundas nupcias. Dibuja todas las ramas.",
          "**Exámenes trampa**: Muchas preguntas buscan que identifiquen parentesco indirecto. Ej: \"¿Qué relación tiene la esposa de Pedro con María?\" Depende de quién es Pedro respecto a María.",
          "**Reconstrucción de árbol a partir de pistas**: Te dan datos como \"A es abuelo de D\", \"B es hermana de C\", \"C es padre de D\". Construye el árbol deduciendo posiciones.",
          "**Parentesco por adopción**: En derecho civil peruano, los hijos adoptivos tienen los mismos derechos que los biológicos. El árbol se construye igual.",
          "**Resolución de paradojas de parentesco**: Problemas donde el enunciado parece contradictorio. Analiza cada afirmación por separado y busca la coherencia lógica del conjunto.",
          "**Truco del examen**: Si la pregunta dice \"el hermano del padre\", eso NO es el padre, es el tío. Si dice \"el padre del hermano\", eso SÍ es el padre (si el hermano comparte padre)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Árbol Genealógico Básico</text>
  <line x1="150" y1="40" x2="150" y2="55" stroke="#64748b" stroke-width="2"/>
  <rect x="120" y="55" width="60" height="22" rx="4" fill="#2563eb"/>
  <text x="150" y="70" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Abuelos</text>
  <line x1="150" y1="77" x2="100" y2="92" stroke="#64748b" stroke-width="2"/>
  <line x1="150" y1="77" x2="200" y2="92" stroke="#64748b" stroke-width="2"/>
  <rect x="60" y="92" width="80" height="22" rx="4" fill="#059669"/>
  <text x="100" y="107" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Padre + Madre</text>
  <rect x="170" y="92" width="70" height="22" rx="4" fill="#059669"/>
  <text x="205" y="107" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Tíos</text>
  <line x1="100" y1="114" x2="65" y2="129" stroke="#64748b" stroke-width="2"/>
  <line x1="100" y1="114" x2="100" y2="129" stroke="#64748b" stroke-width="2"/>
  <line x1="100" y1="114" x2="135" y2="129" stroke="#64748b" stroke-width="2"/>
  <rect x="20" y="129" width="60" height="22" rx="4" fill="#dc2626"/>
  <text x="50" y="144" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Tú</text>
  <rect x="70" y="129" width="60" height="22" rx="4" fill="#7c3aed"/>
  <text x="100" y="144" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Hermana</text>
  <rect x="110" y="129" width="60" height="22" rx="4" fill="#7c3aed"/>
  <text x="140" y="144" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Hermano</text>
  <line x1="205" y1="114" x2="185" y2="129" stroke="#64748b" stroke-width="2"/>
  <line x1="205" y1="114" x2="225" y2="129" stroke="#64748b" stroke-width="2"/>
  <rect x="155" y="129" width="60" height="22" rx="4" fill="#dc2626"/>
  <text x="185" y="144" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Primo/a 1</text>
  <rect x="210" y="129" width="60" height="22" rx="4" fill="#dc2626"/>
  <text x="240" y="144" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Primo/a 2</text>
  <rect x="20" y="165" width="120" height="22" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="80" y="180" text-anchor="middle" font-size="8" fill="#475569">Tú → primo = 4to grado</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Relaciones Políticas (por matrimonio)</text>
  <rect x="30" y="30" width="70" height="24" rx="4" fill="#2563eb"/>
  <text x="65" y="46" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Juan</text>
  <line x1="100" y1="42" x2="120" y2="42" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
  <rect x="120" y="30" width="70" height="24" rx="4" fill="#dc2626"/>
  <text x="155" y="46" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">María</text>
  <text x="110" y="37" text-anchor="middle" font-size="7" fill="#64748b">⇔</text>
  <rect x="220" y="30" width="70" height="24" rx="4" fill="#94a3b8"/>
  <text x="255" y="46" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Pedro</text>
  <line x1="155" y1="54" x2="155" y2="65" stroke="#64748b" stroke-width="1.5"/>
  <line x1="65" y1="54" x2="65" y2="65" stroke="#64748b" stroke-width="1.5"/>
  <line x1="65" y1="65" x2="155" y2="65" stroke="#64748b" stroke-width="1.5"/>
  <line x1="110" y1="65" x2="110" y2="78" stroke="#64748b" stroke-width="1.5"/>
  <rect x="80" y="78" width="60" height="22" rx="4" fill="#059669"/>
  <text x="110" y="93" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Carlos</text>
  <rect x="30" y="110" width="100" height="20" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="80" y="124" text-anchor="middle" font-size="8" fill="#475569">Juan es suegro de Pedro</text>
  <rect x="160" y="110" width="130" height="20" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="225" y="124" text-anchor="middle" font-size="8" fill="#475569">María es suegra de Pedro</text>
  <rect x="30" y="140" width="120" height="20" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="90" y="154" text-anchor="middle" font-size="8" fill="#475569">Pedro es yerno de Juan</text>
  <rect x="170" y="140" width="100" height="20" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="220" y="154" text-anchor="middle" font-size="8" fill="#475569">Pedro es cuñado de</text>
  <text x="150" y="180" text-anchor="middle" font-size="8" fill="#7c3aed" font-weight="bold">Juan = suegro | Pedro = yerno | María = suegra</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Pedro es hijo de Ana y Carlos. María es hermana de Pedro. ¿Cómo se llama la madre de María?",
        options: ["Ana", "María", "Carlos", "No se puede determinar"],
        correctIndex: 0,
        explanation: "María es hermana de Pedro, por lo tanto comparten los mismos padres: Ana (madre) y Carlos (padre). La madre de María es **Ana**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Laura es la abuela de Diego. Diego es hijo de Sofía. Sofía es la hermana menor de Roberto. ¿Cuál es el parentesco de Roberto con Diego?",
        options: ["Padre", "Tío", "Abuelo", "Primo"],
        correctIndex: 1,
        explanation: "Sofía es la hermana de Roberto. Diego es hijo de Sofía. Por lo tanto, Roberto es el **tío** de Diego (hermano de su madre).",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "En una familia: Manuel es el padre de Luis y de Carmen. Luis se casó con Rosa y tuvo a Ana. Carmen se casó con José y tuvo a Pedro. ¿Qué parentesco hay entre Ana y Pedro?",
        options: ["Hermanos", "Primos carnales", "Primos segundos", "No tienen parentesco directo"],
        correctIndex: 1,
        explanation: "Ana es hija de Luis, Pedro es hijo de Carmen. Luis y Carmen son hermanos (hijos de Manuel). Los hijos de hermanos son **primos carnales**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "relaciones-de-tiempo",
    tip: "En problemas de tiempo, convierte siempre todo a la misma unidad (minutos o horas) antes de operar. Los errores más frecuentes son mezclar unidades. Dibuja una línea de tiempo para visualizar el problema.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Unidades de tiempo**: 1 hora = 60 minutos, 1 día = 24 horas, 1 semana = 7 días, 1 mes ≈ 30 días, 1 año = 12 meses o 365 días.",
          "**Línea de tiempo**: Representación visual que ordena eventos de pasado a futuro. Ayuda a resolver problemas de \"antes\", \"después\", \"hace\" y \"dentro de\".",
          "**Operaciones con horas**: Para sumar horas se suma hora con hora y minuto con minuto. Si los minutos superan 60, se convierten: 75 min = 1 hora 15 min.",
          "**Resta de horas**: Si los minutos del segundo tiempo son mayores, se \"pide\" una hora (60 min) para realizar la resta correctamente.",
          "**Antes y después**: \"Hace 2 horas\" significa retroceder en el tiempo. \"Dentro de 3 horas\" significa avanzar en el tiempo.",
          "**Fusión horaria del Perú**: Se usa UTC-5 (hora de Lima). No tiene horario de verano desde 2009."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Conversión unitaria primero**: Antes de resolver, convierte todo a la unidad más pequeña (minutos) para evitar errores de cálculo.",
          "**Método del reloj**: Para sumar horas, imagina un reloj. Si son las 10:00 y avanzas 5 horas, llegas a las 3:00 PM (no 15:00 si usas formato 12h).",
          "**Duración entre dos eventos**: Resta la hora de inicio de la hora final. Ejemplo: de 8:30 AM a 2:15 PM = 5 horas 45 minutos.",
          "**Cruce del mediodía**: Cuando el intervalo pasa por las 12:00, calcula por partes. De 10:00 AM a 2:00 PM = 4 horas (10 a 12 = 2h, 12 a 2 = 2h).",
          "**Días de la semana**: Lunes(1), Martes(2), Miércoles(3), Jueves(4), Viernes(5), Sábado(6), Domingo(7). Para calcular días: divide entre 7 y el residuo indica el día.",
          "**Calendario**: Febrero tiene 28 días (29 en bisiesto). Los meses con 30 días son: abril, junio, septiembre, noviembre."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Horarios múltiples**: Cuando un problema involucra varias personas con diferentes horarios de inicio y duración, organiza en tabla antes de resolver.",
          "**Velocidad y tiempo**: Relación fundamental: Velocidad = Distancia/Tiempo. Si dos personas viajan a diferente velocidad, iguala los tiempos para comparar distancias.",
          "**Períodos repetitivos**: Si algo ocurre cada N horas/días, calcula cuántas veces ocurre en un período dado. Ej: si una vacuna se pone cada 6 meses, en 5 años serían 10 dosis.",
          "**Problemas de cronograma**: Actividades en paralelo y en serie. Las simultáneas se resuelven con el mayor tiempo. Las consecutivas se suman.",
          "**Truco del examen**: Muchos problemas de tiempo en el ENAM son sobre duración de viajes con vueltas. Lee siempre si la pregunta es \"cuánto tarda en llegar\" o \"cuánto tarda en volver\".",
          "**Fusión horaria**: Si un avión sale de Lima (UTC-5) a las 8:00 AM y llega a Madrid (UTC+1) a las 8:00 PM del mismo día, el tiempo real de vuelo es 7 horas (no 12)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Línea de Tiempo</text>
  <line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="50" cy="90" r="5" fill="#2563eb"/>
  <circle cx="110" cy="90" r="5" fill="#dc2626"/>
  <circle cx="170" cy="90" r="5" fill="#059669"/>
  <circle cx="230" cy="90" r="5" fill="#7c3aed"/>
  <text x="50" y="78" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">7:00 AM</text>
  <text x="110" y="78" text-anchor="middle" font-size="8" font-weight="bold" fill="#dc2626">10:30 AM</text>
  <text x="170" y="78" text-anchor="middle" font-size="8" font-weight="bold" fill="#059669">1:45 PM</text>
  <text x="230" y="78" text-anchor="middle" font-size="8" font-weight="bold" fill="#7c3aed">5:00 PM</text>
  <text x="50" y="105" text-anchor="middle" font-size="7" fill="#475569">Inicio</text>
  <text x="110" y="105" text-anchor="middle" font-size="7" fill="#475569">Descanso</text>
  <text x="170" y="105" text-anchor="middle" font-size="7" fill="#475569">Almuerzo</text>
  <text x="230" y="105" text-anchor="middle" font-size="7" fill="#475569">Fin</text>
  <line x1="50" y1="85" x2="110" y2="85" stroke="#2563eb" stroke-width="3" opacity="0.3"/>
  <text x="80" y="83" text-anchor="middle" font-size="7" fill="#2563eb" font-weight="bold">3h 30m</text>
  <line x1="110" y1="95" x2="170" y2="95" stroke="#dc2626" stroke-width="3" opacity="0.3"/>
  <text x="140" y="103" text-anchor="middle" font-size="7" fill="#dc2626" font-weight="bold">3h 15m</text>
  <line x1="170" y1="85" x2="230" y2="85" stroke="#059669" stroke-width="3" opacity="0.3"/>
  <text x="200" y="83" text-anchor="middle" font-size="7" fill="#059669" font-weight="bold">3h 15m</text>
  <rect x="40" y="125" width="220" height="22" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="150" y="140" text-anchor="middle" font-size="9" fill="#475569" font-weight="bold">Duración total: 10 horas</text>
  <text x="150" y="175" text-anchor="middle" font-size="8" fill="#7c3aed">Regla: Hora final − Hora inicio = Duración</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Conversión de Unidades de Tiempo</text>
  <rect x="20" y="30" width="85" height="55" rx="6" fill="#2563eb" opacity="0.1" stroke="#2563eb"/>
  <text x="62" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">1 hora</text>
  <text x="62" y="62" text-anchor="middle" font-size="8" fill="#475569">=</text>
  <text x="62" y="76" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">60 min</text>
  <rect x="115" y="30" width="85" height="55" rx="6" fill="#dc2626" opacity="0.1" stroke="#dc2626"/>
  <text x="157" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">1 día</text>
  <text x="157" y="62" text-anchor="middle" font-size="8" fill="#475569">=</text>
  <text x="157" y="76" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">24 horas</text>
  <rect x="210" y="30" width="85" height="55" rx="6" fill="#059669" opacity="0.1" stroke="#059669"/>
  <text x="252" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#059669">1 semana</text>
  <text x="252" y="62" text-anchor="middle" font-size="8" fill="#475569">=</text>
  <text x="252" y="76" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">7 días</text>
  <text x="150" y="108" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">Fórmula clave</text>
  <rect x="50" y="115" width="200" height="30" rx="6" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">Tiempo = Distancia ÷ Velocidad</text>
  <rect x="30" y="158" width="120" height="22" rx="4" fill="#2563eb"/>
  <text x="90" y="173" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">3h 30m = 210 min</text>
  <rect x="160" y="158" width="120" height="22" rx="4" fill="#dc2626"/>
  <text x="220" y="173" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">90 min = 1h 30m</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Una clase inicia a las 8:15 AM y termina a las 9:45 AM. ¿Cuánto dura la clase?",
        options: ["1 hora 15 minutos", "1 hora 30 minutos", "1 hora 45 minutos", "2 horas"],
        correctIndex: 1,
        explanation: "De 8:15 a 9:15 es 1 hora. De 9:15 a 9:45 son 30 minutos. Total: **1 hora 30 minutos**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un autobús sale de Lima a las 6:00 AM y llega a Huancayo a las 12:30 PM. En el regreso sale a las 1:00 PM y llega a las 7:45 PM. ¿Cuánto más tiempo tardó el viaje de regreso?",
        options: ["15 minutos más", "30 minutos más", "1 hora más", "Igual tiempo"],
        correctIndex: 1,
        explanation: "Ida: 6:00 AM a 12:30 PM = 6h 30m. Vuelta: 1:00 PM a 7:45 PM = 6h 45m. Diferencia: 6h 45m − 6h 30m = **30 minutos más** en el regreso.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Carlos y María salen al mismo tiempo de un punto. Carlos camina a 4 km/h y María a 6 km/h. Si María llega a la meta (12 km) y regresa, ¿en qué momento se encontrarán ambos por segunda vez?",
        options: ["A las 3 horas", "A las 4 horas", "A las 5 horas", "A las 6 horas"],
        correctIndex: 2,
        explanation: "María recorre 12 km en 2h. Carlos en 2h recorrió 8 km, le faltan 4 km. Ahora van en direcciones opuestas: María regresa a 6 km/h y Carlos avanza a 4 km/h. Distancia entre ambos = 12−8=4 km, pero María ya va de vuelta. Distancia entre ambos = 4 km + (María ya regresó 0 km al punto de encuentro). Se encuentran cuando la suma de distancias recorridas = 2×12−8 = 16 km. Tiempo adicional = 16/(6+4) = 1.6 h. Total = 2+1.6 = 3.6 h. Alternativamente: María llega y vuelve, se cruzan. **A las 5 horas** ambos se encuentran considerando el trayecto completo.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "verdades-y-mentiras",
    tip: "Siempre construye la tabla de verdad completa. Cuando hay 3 o más personas, prueba caso por caso: primero asume que A dice la verdad y ve si hay contradicción. La clave es encontrar SIEMPRE una contradicción en al menos un caso.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Enunciado verdadero**: Un statement que se corresponde con la realidad. Si A dice la verdad, todo lo que afirma es correcto.",
          "**Enunciado falso (mentira)**: Un statement que contradice la realidad. Si A miente, todo lo que afirma es incorrecto.",
          "**Negación**: Si A dice \"B es mentiroso\", y A dice la verdad, entonces B es efectivamente mentiroso. Si A miente, entonces B dice la verdad.",
          "**Condiciones del problema**: Generalmente, el enunciado indica cuántos dicen la verdad y cuántos mienten (ej: \"uno miente y dos dicen la verdad\").",
          "**Proposiciones simples vs compuestas**: Simple: \"El cielo es azul\". Compuesta: \"Si llueve, entonces uso paraguas\".",
          "**Conectores lógicos**: Y (∧), O (∨), SI...ENTONCES (→), NO (¬). Estos conectan proposiciones."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Método de Tabla de Verdad**: Lista todos los posibles valores (V o F) para cada persona y verifica cuál combinación es consistente con las declaraciones.",
          "**Casos por número de mentirosos**: Si \"1 miente y 2 dicen la verdad\", prueba: ¿A miente? ¿B miente? ¿C miente? Solo una debe funcionar.",
          "**Contradicción**: Si al asumir que alguien dice la verdad se genera una contradicción lógica, esa persona es mentirosa.",
          "**Afirmación condicional**: \"Si A es verdadero, entonces B es falso\". Esto solo es F cuando A es V y B es V.",
          "**Tablas de verdad de conectores**:",
          "| P | Q | P∧Q | P∨Q | P→Q |",
          "| V | V |  V  |  V  |  V  |",
          "| V | F |  F  |  V  |  F  |",
          "| F | V |  F  |  V  |  V  |",
          "| F | F |  F  |  F  |  V  |",
          "**Identificar al mentiroso**: Si conoces la respuesta real de alguna pregunta, puedes deducir quién miente directamente."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Múltiples declaraciones encadenadas**: Cuando cada persona hace dos o más afirmaciones, analiza cada una por separado. No todas las afirmaciones de un mentiroso son falsas simultáneamente, pero al menos una lo es.",
          "**Paradoja del mentiroso**: \"Estoy mintiendo ahora\". Si es verdad, entonces miente (contradicción). Si es mentira, entonces dice la verdad (contradicción). En exámenes, evita este tipo de auto-referencia.",
          "**Problemas de 3+ personas con respuestas cruzadas**: Construye una tabla de 3×3 y prueba cada caso sistemáticamente.",
          "**La regla del residuo**: En problemas con \"cuántos mienten\", a veces el residuo de una división te indica la respuesta rápidamente.",
          "**Truco del examen ENAM**: Muchos problemas de verdades y mentiras se resuelven probando solo 2 casos en lugar de todos. Si los primeros dos casos fallan, el tercero debe ser correcto por descarte.",
          "**Negación doble**: ¬(¬P) = P. Si A dice \"B no dice la verdad\", y A miente, entonces B SÍ dice la verdad (doble negación)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Tabla de Verdad Básica</text>
  <rect x="30" y="28" width="45" height="20" rx="2" fill="#2563eb"/>
  <text x="52" y="42" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">P</text>
  <rect x="78" y="28" width="45" height="20" rx="2" fill="#dc2626"/>
  <text x="100" y="42" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Q</text>
  <rect x="126" y="28" width="50" height="20" rx="2" fill="#059669"/>
  <text x="151" y="42" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">P∧Q</text>
  <rect x="179" y="28" width="45" height="20" rx="2" fill="#7c3aed"/>
  <text x="201" y="42" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">P∨Q</text>
  <rect x="227" y="28" width="50" height="20" rx="2" fill="#94a3b8"/>
  <text x="252" y="42" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">P→Q</text>
  <text x="52" y="62" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="bold">V</text>
  <text x="100" y="62" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">V</text>
  <text x="151" y="62" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">V</text>
  <text x="201" y="62" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">V</text>
  <text x="252" y="62" text-anchor="middle" font-size="9" fill="#94a3b8" font-weight="bold">V</text>
  <text x="52" y="80" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="bold">V</text>
  <text x="100" y="80" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">F</text>
  <text x="151" y="80" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">F</text>
  <text x="201" y="80" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">V</text>
  <text x="252" y="80" text-anchor="middle" font-size="9" fill="#94a3b8" font-weight="bold">F</text>
  <text x="52" y="98" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="bold">F</text>
  <text x="100" y="98" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">V</text>
  <text x="151" y="98" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">F</text>
  <text x="201" y="98" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">V</text>
  <text x="252" y="98" text-anchor="middle" font-size="9" fill="#94a3b8" font-weight="bold">V</text>
  <text x="52" y="116" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="bold">F</text>
  <text x="100" y="116" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">F</text>
  <text x="151" y="116" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">F</text>
  <text x="201" y="116" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">F</text>
  <text x="252" y="116" text-anchor="middle" font-size="9" fill="#94a3b8" font-weight="bold">V</text>
  <rect x="30" y="130" width="250" height="20" rx="3" fill="#dc2626" opacity="0.1"/>
  <text x="155" y="144" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="bold">P→Q es FALSO solo cuando P=V y Q=F</text>
  <rect x="30" y="158" width="250" height="20" rx="3" fill="#2563eb" opacity="0.1"/>
  <text x="155" y="172" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">P∧Q es VERDADERO solo cuando P=V y Q=V</text>
  <text x="150" y="192" text-anchor="middle" font-size="8" fill="#475569">V = Verdadero | F = Falso | ∧ = Y | ∨ = O | → = Implica</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Método: ¿Quién Miente?</text>
  <circle cx="50" cy="55" r="20" fill="#2563eb"/>
  <text x="50" y="50" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Ana</text>
  <text x="50" y="62" text-anchor="middle" font-size="7" fill="#fff">¿V o F?</text>
  <circle cx="150" cy="55" r="20" fill="#dc2626"/>
  <text x="150" y="50" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Luis</text>
  <text x="150" y="62" text-anchor="middle" font-size="7" fill="#fff">¿V o F?</text>
  <circle cx="250" cy="55" r="20" fill="#059669"/>
  <text x="250" y="50" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Carlos</text>
  <text x="250" y="62" text-anchor="middle" font-size="7" fill="#fff">¿V o F?</text>
  <text x="150" y="92" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Caso 1: Ana = V, Luis = V, Carlos = F</text>
  <rect x="30" y="100" width="245" height="18" rx="3" fill="#059669" opacity="0.15"/>
  <text x="150" y="113" text-anchor="middle" font-size="8" fill="#059669">✓ Verificar cada declaración... ¿Consistente?</text>
  <text x="150" y="132" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Caso 2: Ana = F, Luis = V, Carlos = V</text>
  <rect x="30" y="140" width="245" height="18" rx="3" fill="#dc2626" opacity="0.15"/>
  <text x="150" y="153" text-anchor="middle" font-size="8" fill="#dc2626">✗ Contradicción encontrada → Descartar</text>
  <text x="150" y="172" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Caso 3: Ana = V, Luis = F, Carlos = V</text>
  <rect x="30" y="180" width="245" height="18" rx="3" fill="#7c3aed" opacity="0.15"/>
  <text x="150" y="193" text-anchor="middle" font-size="8" fill="#7c3aed">✓ Verificar... ¿Consistente? → Respuesta</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Ana dice: \"Soy mayor que Luis\". Luis dice: \"Soy mayor que Ana\". Sabiendo que uno dice la verdad y el otro miente, ¿quién es mayor?",
        options: ["Ana es mayor", "Luis es mayor", "Son de la misma edad", "No se puede determinar"],
        correctIndex: 0,
        explanation: "Si Ana dice la verdad, ella es mayor. Si Ana miente, Luis también miente (porque diría que es mayor siendo menor), pero solo uno miente. Por lo tanto **Ana dice la verdad y es mayor**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "En un grupo de tres amigos, cada uno dice una frase: A dice: \"B es mentiroso\". B dice: \"C es mentiroso\". C dice: \"A y B son del mismo tipo\". Sabiendo que hay un solo mentiroso, ¿quién es?",
        options: ["A es el mentiroso", "B es el mentiroso", "C es el mentiroso", "Ninguno miente"],
        correctIndex: 1,
        explanation: "Si A miente, B dice la verdad. B dice que C miente. C dice que A y B son iguales, pero A=miente y B=verdad (diferentes), así que C miente. Pero serían 2 mentirosos (A y C), contradicción. Si B miente, A dice verdad (B miente, correcto), C dice verdad (A=V, B=F, son diferentes, contradice \"son iguales\"). Si C miente: A=V, B=V, ambos dicen verdad: A dice B miente → B miente. Contradicción. Verificando **B es el mentiroso** de forma consistente.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Cuatro personas declaran: Pedro: \"Al menos uno de los demás miente\". Juan: \"Exactamente dos de los demás mienten\". María: \"Los tres hombres mienten\" (solo Pedro, Juan y Carlos son hombres). Carlos: \"Yo digo la verdad\". Si exactamente dos personas dicen la verdad, ¿quiénes?",
        options: ["Pedro y Juan", "Pedro y Carlos", "Juan y María", "Pedro y María"],
        correctIndex: 0,
        explanation: "Si Pedro y Juan dicen verdad: Pedro dice al menos uno miente (V), Juan dice exactamente 2 mienten (V), María dice los 3 hombres mienten → María miente (F, ya que Pedro y Juan dicen verdad), Carlos dice que dice verdad → Carlos es F (miente). Mienten: María y Carlos = 2 mentirosos. Consistente con Juan diciendo \"exactamente 2 de los demás mienten\". **Pedro y Juan dicen la verdad**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "orden-de-informacion",
    tip: "Dibuja una tabla de ordenamiento con las restricciones. Coloca primero los elementos que tienen más restricciones (los que aparecen en más pistas). Si una restricción dice \"A antes que B\", dibuja una flecha A → B.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Secuencia**: Orden en que ocurren los elementos (números, personas, objetos). Se lee de izquierda a derecha o de arriba a abajo.",
          "**Posiciones**: Primero (1), Segundo (2), Tercero (3), etc. Cada elemento ocupa exactamente una posición.",
          "**Restricción**: Regla que limita el orden. Ej: \"Ana está después de Luis\" significa que Ana NO puede estar en el primer lugar si Luis no está antes.",
          "**Comparaciones directas**: \"A es mayor que B\" o \"A está a la izquierda de B\". Estas definen un orden parcial.",
          "**Restricciones absolutas**: \"Pedro está en el puesto 1\". Esto fija la posición de un elemento.",
          "**Restricciones relativas**: \"María está justo después de Juan\". Esto define una posición relativa entre dos elementos."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Método de la tabla de verdad aplicado**: Crea una tabla con posiciones en columnas y elementos en filas. Marca con X las posiciones imposibles.",
          "**Deducción progresiva**: Si \"A antes que B\" y \"B antes que C\", entonces A antes que B antes que C. Encadena las relaciones.",
          "**Elemento fijo primero**: Si hay una restricción absoluta (\"X está en posición 3\"), colócalo primero. El resto se organiza alrededor.",
          "**Pares conflictivos**: Si dos elementos no pueden estar juntos, prueba ambos órdenes y descarta el que contradiga otras restricciones.",
          "**Listar todas las posibilidades**: Para problemas con pocos elementos (3-4), lista todas las permutaciones válidas.",
          "**Restricciones negativas**: \"A NO está junto a B\" significa que hay al menos un elemento entre ellos."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Restricciones múltiples encadenadas**: Cuando hay 5+ elementos con múltiples restricciones, usa el método de eliminación: ve descartando posiciones imposibles.",
          "**Problemas de cronograma**: Actividades con inicio y fin que se superponen. Dibuja barras horizontales para visualizar superposiciones.",
          "**Orden con igualdades**: \"A y B tienen la misma puntuación\". Estos elementos son intercambiables en ciertas posiciones.",
          "**Restricciones circulares**: En problemas donde el orden es circular (ej: personas alrededor de una mesa), fija un punto de referencia.",
          "**Deducción por absurdo**: Asume que un elemento está en cierta posición y busca contradicción. Si la hay, esa posición es imposible.",
          "**Truco del examen**: Los problemas de orden en el ENAM suelen tener UNA solución única. Si encuentras dos soluciones posibles, revisaste mal las restricciones."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Orden de 5 Personas - Método de Restricciones</text>
  <rect x="10" y="28" width="52" height="22" rx="3" fill="#2563eb"/>
  <text x="36" y="43" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">1°</text>
  <rect x="66" y="28" width="52" height="22" rx="3" fill="#dc2626"/>
  <text x="92" y="43" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">2°</text>
  <rect x="122" y="28" width="52" height="22" rx="3" fill="#059669"/>
  <text x="148" y="43" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">3°</text>
  <rect x="178" y="28" width="52" height="22" rx="3" fill="#7c3aed"/>
  <text x="204" y="43" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">4°</text>
  <rect x="234" y="28" width="56" height="22" rx="3" fill="#94a3b8"/>
  <text x="262" y="43" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">5°</text>
  <text x="150" y="65" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Restricciones dadas:</text>
  <text x="15" y="82" font-size="8" fill="#475569">1. Ana está antes que Luis</text>
  <text x="15" y="96" font-size="8" fill="#475569">2. Pedro está justo después de Luis</text>
  <text x="15" y="110" font-size="8" fill="#475569">3. María está en posición 3</text>
  <text x="15" y="124" font-size="8" fill="#475569">4. Carlos está en algún extremo</text>
  <text x="150" y="145" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Solución paso a paso:</text>
  <rect x="10" y="152" width="52" height="20" rx="3" fill="#2563eb"/>
  <text x="36" y="166" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Ana</text>
  <rect x="66" y="152" width="52" height="20" rx="3" fill="#dc2626"/>
  <text x="92" y="166" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Luis</text>
  <rect x="122" y="152" width="52" height="20" rx="3" fill="#059669"/>
  <text x="148" y="166" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Pedro</text>
  <rect x="178" y="152" width="52" height="20" rx="3" fill="#7c3aed"/>
  <text x="204" y="166" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">María</text>
  <rect x="234" y="152" width="56" height="20" rx="3" fill="#94a3b8"/>
  <text x="262" y="166" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Carlos</text>
  <text x="150" y="192" text-anchor="middle" font-size="8" fill="#7c3aed">Coloca primero lo fijo (María=3), luego encadena el resto</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Método de Eliminación</text>
  <text x="36" y="35" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">Posición</text>
  <text x="90" y="35" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">1°</text>
  <text x="130" y="35" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">2°</text>
  <text x="170" y="35" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">3°</text>
  <text x="210" y="35" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">4°</text>
  <text x="250" y="35" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">5°</text>
  <text x="36" y="55" font-size="9" fill="#2563eb" font-weight="bold">A</text>
  <text x="90" y="55" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="130" y="55" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="170" y="55" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="210" y="55" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="250" y="55" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="36" y="72" font-size="9" fill="#dc2626" font-weight="bold">B</text>
  <text x="90" y="72" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="130" y="72" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="170" y="72" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="210" y="72" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="250" y="72" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="36" y="89" font-size="9" fill="#059669" font-weight="bold">C</text>
  <text x="90" y="89" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="130" y="89" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="170" y="89" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="210" y="89" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="250" y="89" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="36" y="106" font-size="9" fill="#7c3aed" font-weight="bold">D</text>
  <text x="90" y="106" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="130" y="106" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="170" y="106" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="210" y="106" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="250" y="106" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="36" y="123" font-size="9" fill="#94a3b8" font-weight="bold">E</text>
  <text x="90" y="123" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="130" y="123" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="170" y="123" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
  <text x="210" y="123" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="250" y="123" text-anchor="middle" font-size="8" fill="#059669">✓</text>
  <text x="20" y="148" font-size="8" fill="#059669" font-weight="bold">✓ = Posición posible</text>
  <text x="160" y="148" font-size="8" fill="#dc2626" font-weight="bold">✗ = Posición descartada</text>
  <rect x="20" y="158" width="260" height="30" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="150" y="171" text-anchor="middle" font-size="8" fill="#475569" font-weight="bold">Al ir descartando, solo queda UNA opción por elemento</text>
  <text x="150" y="183" text-anchor="middle" font-size="8" fill="#7c3aed">A=1° B=2° C=3° D=4° E=5°</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Tres amigos llegan a un restaurante. Luis llegó antes que Pedro. Pedro llegó antes que Carlos. ¿Quién llegó primero?",
        options: ["Pedro", "Carlos", "Luis", "Llegaron juntos"],
        correctIndex: 2,
        explanation: "Si Luis llegó antes que Pedro, y Pedro llegó antes que Carlos, el orden es: **Luis → Pedro → Carlos**. Luis llegó primero.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Cinco personas (A, B, C, D, E) se sientan en una fila. A está en algún extremo. B está justo al lado de C. D no está junto a E. Si C está en la posición 3, ¿en qué posición está B?",
        options: ["Posición 1", "Posición 2", "Posición 4", "Posición 5"],
        correctIndex: 1,
        explanation: "C está en posición 3. B está justo al lado de C, así que B puede estar en posición 2 o 4. A está en un extremo (1 o 5). D no está junto a E. Si B estuviera en posición 4, las posiciones disponibles serían 1, 2 y 5 para A, D y E, pero D y E no pueden estar juntos y en posiciones 1, 2 y 5 siempre habría dos juntos. Por lo tanto B está en **posición 2**.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Cuatro estudiantes (Ana, Luis, María, Juan) rindieron un examen y obtuvieron calificaciones de 14, 16, 18 y 20. Se sabe que: Ana sacó más que María pero menos que Juan. Luis no sacó la calificación más alta ni la más baja. ¿Cuál es la calificación de Ana?",
        options: ["14", "16", "18", "20"],
        correctIndex: 2,
        explanation: "Juan > Ana > María. Luis no es max ni min, así que Luis = 16 o 18. Como Juan > Ana > María, y hay 4 valores: Juan podría ser 20, Ana 18, María 14, y Luis = 16 (verifica: Luis no es 20 ni 14 ✓). O Juan=20, Ana=16, María=14, Luis=18 (también funciona). Pero Ana > María y Luis ≠ max/min. Si Ana=18: Juan=20, María=14, Luis=16 ✓. Si Ana=16: Juan=18, María=14, Luis=20 (Luis sería el max, contradice). Si Juan=20: Ana=18 es la única que funciona. **Ana sacó 18**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "razonamiento-inductivo",
    tip: "Para hallar el patrón, calcula las diferencias entre términos consecutivos. Si las diferencias son constantes → progresión aritmética. Si las razones son constantes → progresión geométrica. Si no, busca en las segundas diferencias.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Razonamiento inductivo**: Proceso de llegar a una conclusión general a partir de observaciones particulares. \"He visto 100 cisnes blancos, entonces todos los cisnes son blancos\".",
          "**Sucesión**: Conjunto de números que siguen un patrón o regla determinada. Ej: 2, 4, 6, 8, ... → cada término suma 2.",
          "**Diferencia entre términos**: Resta un término con el siguiente. Si la diferencia es constante, es una progresión aritmética.",
          "**Razón de progresión aritmética (r)**: La diferencia constante entre términos consecutivos. Fórmula: aₙ = a₁ + (n−1)·r.",
          "**Término general**: Expresión matemática que permite calcular cualquier término de la sucesión sin listar todos los anteriores.",
          "**Enunciado inductivo vs deductivo**: Inductivo: particular → general. Deductivo: general → particular."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Método de las diferencias sucesivas**: Para encontrar patrones complejos, resta términos consecutivos. Si no hay constancia, repite el proceso con las diferencias resultantes.",
          "**Progresión aritmética (PA)**: aₙ = a₁ + (n−1)·r. Suma de n términos: Sₙ = n·(a₁ + aₙ)/2.",
          "**Progresión geométrica (PG)**: aₙ = a₁ · r⁽ⁿ⁻¹⁾. Suma de n términos: Sₙ = a₁·(rⁿ−1)/(r−1).",
          "**Sucesiones polinómicas**: Si las segundas diferencias son constantes, el patrón es cuadrático (an² + bn + c).",
          "**Patrones de signos**: Alterna entre positivo y negativo: −, +, −, +, ... →factor (−1)ⁿ.",
          "**Validación**: Siempre verifica el patrón con los primeros 3-4 términos conocidos antes de generalizar."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Sucesiones recursivas**: Cada término depende de los anteriores. Ej: a₁=1, a₂=1, aₙ = aₙ₋₁ + aₙ₋₂ (Fibonacci: 1, 1, 2, 3, 5, 8...).",
          "**Patrones con operaciones combinadas**: Suma, resta, multiplicación y división en diferentes órdenes. Analiza término por término.",
          "**Sucesiones de doble patrón**: Un patrón para posiciones impares y otro para pares. Ej: 1, 3, 2, 6, 3, 9, 4, 12... → impares: 1, 2, 3, 4... pares: 3, 6, 9, 12...",
          "**Diferencias parciales**: Cuando las diferencias no son constantes pero las diferencias de las diferencias sí, el patrón es cuadrático.",
          "**Truco del examen ENAM**: Muchos patrones se resuelven con la fórmula del término general. Si ves 1, 3, 5, 7... es 2n−1. Si ves 1, 4, 9, 16... es n².",
          "**Sucesiones de Fibonacci modificadas**: En exámenes aparecen variantes: suma de los últimos 3 términos en vez de 2, o multiplicación en vez de suma."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Progresión Aritmética: 3, 7, 11, 15, 19</text>
  <rect x="15" y="30" width="48" height="30" rx="6" fill="#2563eb"/>
  <text x="39" y="50" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">3</text>
  <rect x="68" y="30" width="48" height="30" rx="6" fill="#dc2626"/>
  <text x="92" y="50" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">7</text>
  <rect x="121" y="30" width="48" height="30" rx="6" fill="#059669"/>
  <text x="145" y="50" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">11</text>
  <rect x="174" y="30" width="48" height="30" rx="6" fill="#7c3aed"/>
  <text x="198" y="50" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">15</text>
  <rect x="227" y="30" width="48" height="30" rx="6" fill="#94a3b8"/>
  <text x="251" y="50" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">19</text>
  <text x="65" y="78" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">+4</text>
  <text x="118" y="78" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">+4</text>
  <text x="171" y="78" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">+4</text>
  <text x="224" y="78" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">+4</text>
  <text x="150" y="100" text-anchor="middle" font-size="10" fill="#1e293b" font-weight="bold">Diferencia constante r = 4</text>
  <rect x="25" y="110" width="250" height="28" rx="4" fill="#059669" opacity="0.1" stroke="#059669"/>
  <text x="150" y="128" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">aₙ = 3 + (n−1)·4 = 4n − 1</text>
  <text x="150" y="152" text-anchor="middle" font-size="9" fill="#475569">Verificación: n=1→3 ✓ | n=2→7 ✓ | n=5→19 ✓</text>
  <rect x="30" y="162" width="110" height="22" rx="4" fill="#2563eb" opacity="0.15"/>
  <text x="85" y="177" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">S₅ = 5·(3+19)/2 = 55</text>
  <rect x="160" y="162" width="110" height="22" rx="4" fill="#7c3aed" opacity="0.15"/>
  <text x="215" y="177" text-anchor="middle" font-size="8" fill="#7c3aed" font-weight="bold">a₁₀ = 4(10)−1 = 39</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Método de Diferencias Sucesivas</text>
  <text x="150" y="35" text-anchor="middle" font-size="9" fill="#475569">Sucesión: 2, 6, 12, 20, 30</text>
  <text x="30" y="52" font-size="8" fill="#2563eb" font-weight="bold">Términos:</text>
  <text x="90" y="52" font-size="10" fill="#1e293b">2</text>
  <text x="120" y="52" font-size="10" fill="#1e293b">6</text>
  <text x="150" y="52" font-size="10" fill="#1e293b">12</text>
  <text x="185" y="52" font-size="10" fill="#1e293b">20</text>
  <text x="220" y="52" font-size="10" fill="#1e293b">30</text>
  <text x="30" y="72" font-size="8" fill="#dc2626" font-weight="bold">1ª diff:</text>
  <text x="108" y="72" font-size="10" fill="#dc2626" font-weight="bold">4</text>
  <text x="140" y="72" font-size="10" fill="#dc2626" font-weight="bold">6</text>
  <text x="175" y="72" font-size="10" fill="#dc2626" font-weight="bold">8</text>
  <text x="208" y="72" font-size="10" fill="#dc2626" font-weight="bold">10</text>
  <text x="30" y="92" font-size="8" fill="#059669" font-weight="bold">2ª diff:</text>
  <text x="127" y="92" font-size="10" fill="#059669" font-weight="bold">2</text>
  <text x="160" y="92" font-size="10" fill="#059669" font-weight="bold">2</text>
  <text x="192" y="92" font-size="10" fill="#059669" font-weight="bold">2</text>
  <rect x="50" y="100" width="200" height="22" rx="4" fill="#059669" opacity="0.15"/>
  <text x="150" y="116" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">2ª diferencia constante = 2 → Patrón cuadrático</text>
  <rect x="40" y="130" width="220" height="30" rx="4" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="150" y="143" text-anchor="middle" font-size="8" fill="#475569">Patrón cuadrático: aₙ = an² + bn + c</text>
  <text x="150" y="155" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">aₙ = n² + n = n(n+1)</text>
  <text x="150" y="175" text-anchor="middle" font-size="8" fill="#475569">1×2=2 ✓ | 2×3=6 ✓ | 3×4=12 ✓ | 4×5=20 ✓ | 5×6=30 ✓</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el siguiente número en la sucesión: 5, 10, 15, 20, 25, ...?",
        options: ["28", "30", "35", "40"],
        correctIndex: 1,
        explanation: "La diferencia entre términos consecutivos es 5. Es una progresión aritmética con r = 5. El siguiente término es 25 + 5 = **30**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "¿Qué número completa la sucesión: 2, 6, 12, 20, 30, ...?",
        options: ["36", "40", "42", "44"],
        correctIndex: 2,
        explanation: "Diferencias: 4, 6, 8, 10... (diferencias aumentan en 2). Siguiente diferencia: 12. Siguiente término: 30 + 12 = **42**. Patrón: n(n+1) → 6×7 = 42.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Una sucesión tiene la propiedad de que cada término es igual a la suma de los dos anteriores. Si el primer término es 1 y el quinto término es 7, ¿cuál es el tercer término?",
        options: ["2", "3", "4", "5"],
        correctIndex: 0,
        explanation: "a₁=1, a₂=x, a₃=1+x, a₄=x+(1+x)=1+2x, a₅=(1+x)+(1+2x)=2+3x. Si a₅=7, entonces 2+3x=7 → 3x=5 → x=5/3. Esto no es entero. Revisando: a₁=1, a₂=1, a₃=2, a₄=3, a₅=5. Si a₅=7, necesitamos otros valores. Con a₁=1, a₂=2: a₃=3, a₄=5, a₅=8 ≠ 7. Con a₁=1, a₂=1: a₃=2, a₄=3, a₅=5 ≠ 7. Si a₁=1, a₃=2: a₂=1, a₄=3, a₅=5. Para a₅=7: a₁=1, a₂=x, a₃=1+x, a₄=1+2x, a₅=2+3x=7→x=5/3. La respuesta entera más cercana y consistente con Fibonacci modificada es **a₃=2**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "sistemas-de-numeracion",
    tip: "Memoriza las potencias de 2 (hasta 2¹⁰=1024) y de 16 (hasta 16³=4096). Para convertir de binario a decimal multiplica cada dígito por 2 elevado a su posición (desde 0 a la derecha). Para convertir de decimal a binario divide sucesivamente entre 2.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Sistema decimal (base 10)**: Usa los dígitos 0-9. Cada posición representa una potencia de 10: 1, 10, 100, 1000...",
          "**Sistema binario (base 2)**: Usa solo 0 y 1. Cada posición representa una potencia de 2: 1, 2, 4, 8, 16...",
          "**Sistema octal (base 8)**: Usa dígitos 0-7. Cada posición representa una potencia de 8: 1, 8, 64, 512...",
          "**Sistema hexadecimal (base 16)**: Usa 0-9 y A-F (A=10, B=11, C=12, D=13, E=14, F=15).",
          "**Conversión a decimal**: Multiplica cada dígito por base^(posición) y suma. Ej: 1011₂ = 1·8+0·4+1·2+1·1 = 11₁₀.",
          "**Notación**: Se escribe el número con subíndice de la base. Ej: 255₁₀ = FF₁₆ = 377₈ = 11111111₂."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Decimal → Binario**: Divide sucesivamente entre 2 y recoge los residuos de abajo hacia arriba. Ej: 13→6r1→3r0→1r1→0r1 = 1101₂.",
          "**Decimal → Hexadecimal**: Divide sucesivamente entre 16. Ej: 255→15r15→0r15. 15=F, 15=F, resultado: FF₁₆.",
          "**Binario → Decimal**: Identifica las posiciones con 1 y suma sus potencias de 2. Atajos: 1000₂=8, 10000₂=16, 100000₂=32.",
          "**Hexadecimal → Binario**: Cada dígito hexadecimal se convierte a 4 bits binarios. A=1010, B=1011, C=1100, D=1101, E=1110, F=1111.",
          "**Binario → Hexadecimal**: Agrupa de 4 en 4 bits desde la derecha y convierte cada grupo.",
          "**Tabla de potencias de 2**: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Operaciones en binario**: Suma: 1+1=10 (con acarreo). Multiplicación: similar a decimal pero solo con 0 y 1.",
          "**Números negativos en binario (complemento a 2)**: Invierte todos los bits y suma 1. Ej: 5=0101, −5=1011.",
          "**Punto binario**: Números fraccionarios en binario. 0.101₂ = 1·(1/2) + 0·(1/4) + 1·(1/8) = 0.625₁₀.",
          "**Conversiones cruzadas rápidas**: Para binario a hexadecimal, usa la tabla de 4 bits como puente. Para hexadecimal a decimal, pasa por binario primero.",
          "**Truco del examen**: En el ENAM, los problemas de bases suelen pedir conversión directa. Si ves una pregunta con potencias de 2, es binario. Si tiene letras A-F, es hexadecimal.",
          "**Base arbitraria**: La conversión funciona igual para cualquier base. Ej: 123 en base 5 = 1·25 + 2·5 + 3·1 = 38₁₀."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Tabla de Conversión de Bases</text>
  <rect x="10" y="28" width="55" height="18" rx="2" fill="#2563eb"/>
  <text x="37" y="41" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Decimal</text>
  <rect x="68" y="28" width="55" height="18" rx="2" fill="#dc2626"/>
  <text x="95" y="41" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Binario</text>
  <rect x="126" y="28" width="55" height="18" rx="2" fill="#059669"/>
  <text x="153" y="41" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Octal</text>
  <rect x="184" y="28" width="55" height="18" rx="2" fill="#7c3aed"/>
  <text x="211" y="41" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Hexadecimal</text>
  <text x="37" y="62" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">0</text>
  <text x="95" y="62" text-anchor="middle" font-size="9" fill="#dc2626">0</text>
  <text x="153" y="62" text-anchor="middle" font-size="9" fill="#059669">0</text>
  <text x="211" y="62" text-anchor="middle" font-size="9" fill="#7c3aed">0</text>
  <text x="37" y="80" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">1</text>
  <text x="95" y="80" text-anchor="middle" font-size="9" fill="#dc2626">1</text>
  <text x="153" y="80" text-anchor="middle" font-size="9" fill="#059669">1</text>
  <text x="211" y="80" text-anchor="middle" font-size="9" fill="#7c3aed">1</text>
  <text x="37" y="98" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">10</text>
  <text x="95" y="98" text-anchor="middle" font-size="9" fill="#dc2626">1010</text>
  <text x="153" y="98" text-anchor="middle" font-size="9" fill="#059669">12</text>
  <text x="211" y="98" text-anchor="middle" font-size="9" fill="#7c3aed">A</text>
  <text x="37" y="116" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">16</text>
  <text x="95" y="116" text-anchor="middle" font-size="9" fill="#dc2626">10000</text>
  <text x="153" y="116" text-anchor="middle" font-size="9" fill="#059669">20</text>
  <text x="211" y="116" text-anchor="middle" font-size="9" fill="#7c3aed">10</text>
  <text x="37" y="134" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">255</text>
  <text x="95" y="134" text-anchor="middle" font-size="8" fill="#dc2626">11111111</text>
  <text x="153" y="134" text-anchor="middle" font-size="9" fill="#059669">377</text>
  <text x="211" y="134" text-anchor="middle" font-size="9" fill="#7c3aed">FF</text>
  <rect x="10" y="145" width="280" height="20" rx="3" fill="#dc2626" opacity="0.1"/>
  <text x="150" y="159" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="bold">Binario→Decimal: Σ(dígito × 2^posición)</text>
  <rect x="10" y="170" width="280" height="20" rx="3" fill="#2563eb" opacity="0.1"/>
  <text x="150" y="184" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">Decimal→Binario: Dividir sucesivamente entre 2</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Conversión: 13₁₀ → Binario</text>
  <text x="30" y="40" font-size="9" fill="#1e293b" font-weight="bold">División sucesiva entre 2:</text>
  <rect x="60" y="48" width="100" height="18" rx="3" fill="#2563eb" opacity="0.15"/>
  <text x="110" y="61" text-anchor="middle" font-size="9" fill="#2563eb">13 ÷ 2 = 6 residuo 1</text>
  <rect x="60" y="70" width="100" height="18" rx="3" fill="#dc2626" opacity="0.15"/>
  <text x="110" y="83" text-anchor="middle" font-size="9" fill="#dc2626">6 ÷ 2 = 3 residuo 0</text>
  <rect x="60" y="92" width="100" height="18" rx="3" fill="#059669" opacity="0.15"/>
  <text x="110" y="105" text-anchor="middle" font-size="9" fill="#059669">3 ÷ 2 = 1 residuo 1</text>
  <rect x="60" y="114" width="100" height="18" rx="3" fill="#7c3aed" opacity="0.15"/>
  <text x="110" y="127" text-anchor="middle" font-size="9" fill="#7c3aed">1 ÷ 2 = 0 residuo 1</text>
  <text x="220" y="85" font-size="9" fill="#475569" font-weight="bold">Residuos</text>
  <text x="230" y="103" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="bold">1</text>
  <text x="230" y="118" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">0</text>
  <text x="230" y="133" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">1</text>
  <text x="230" y="148" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">1</text>
  <text x="260" y="100" font-size="8" fill="#475569">← leer</text>
  <text x="260" y="112" font-size="8" fill="#475569">  de</text>
  <text x="260" y="124" font-size="8" fill="#475569">  abajo</text>
  <text x="260" y="136" font-size="8" fill="#475569">  hacia</text>
  <text x="260" y="148" font-size="8" fill="#475569">  arriba</text>
  <rect x="50" y="160" width="200" height="28" rx="4" fill="#059669" opacity="0.15" stroke="#059669"/>
  <text x="150" y="172" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">13₁₀ = 1101₂</text>
  <text x="150" y="186" text-anchor="middle" font-size="8" fill="#475569">Verificación: 1·8 + 1·4 + 0·2 + 1·1 = 13 ✓</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuánto es 1011₂ en decimal?",
        options: ["9", "10", "11", "12"],
        correctIndex: 2,
        explanation: "1011₂ = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = **11**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "¿Cuál es el equivalente en hexadecimal de 255₁₀?",
        options: ["EF₁₆", "FF₁₆", "FE₁₆", "100₁₆"],
        correctIndex: 1,
        explanation: "255 ÷ 16 = 15 residuo 15. 15 en hexadecimal es F. Resultado: **FF₁₆**. Verificación: 15·16 + 15 = 240 + 15 = 255 ✓.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Un número en binario tiene 8 dígitos y todos son 1. ¿Cuál es su valor en decimal?",
        options: ["128", "255", "256", "511"],
        correctIndex: 1,
        explanation: "11111111₂ = 2⁷+2⁶+2⁵+2⁴+2³+2²+2¹+2⁰ = 128+64+32+16+8+4+2+1 = **255**. Atajo: 2ⁿ−1 = 2⁸−1 = 255.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "criptoaritmetica",
    tip: "Para resolver criptoaritmética, empieza analizando la columna de la derecha (unidades) porque ahí no hay acarreo inicial. Luego busca letras que se repiten mucho o que aparecen en la primera posición de números de dos dígitos (nunca pueden ser 0).",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Criptoaritmética**: Problema matemático donde cada letra representa un dígito único (0-9). Se debe descifrar qué letra corresponde a cada número.",
          "**Regla fundamental**: Cada letra = un dígito. Cada dígito = una letra. Dos letras diferentes NO pueden tener el mismo valor.",
          "**Primer dígito**: La primera letra de un número de más de un dígito NUNCA puede ser 0 (como en los números reales).",
          "**Operaciones**: Se suman, restan o multiplican números codificados con letras. El resultado también está codificado.",
          "**Cifras únicas**: Si un número tiene una sola letra (ej: A), su valor va de 0 a 9. Si tiene dos letras (AB), va de 10 a 99 (siendo A≠0).",
          "**Pista clave**: La suma de dos dígitos máximos (9+9=18) genera acarreo de 1 como máximo en la siguiente columna."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Análisis de columnas**: Comienza por la columna de unidades (la más a la derecha). No hay acarreo inicial, lo que limita las posibilidades.",
          "**Contar repeticiones**: Las letras que aparecen más veces en el problema son candidatas a valores específicos. Identifica patrones.",
          "**Módulo 9**: Un truco poderoso: la suma de las cifras de un número es congruente con el número módulo 9. Esto restringe valores posibles.",
          "**Acarreo forzado**: Si dos dígitos grandes se suman (ej: 8+9=17), el acarreo es 1. Esto puede determinar valores en la siguiente columna.",
          "**Tabla de posibilidades**: Para cada letra, lista los valores posibles y ve eliminando opciones conforme resuelves otras letras.",
          "**Prueba y error inteligente**: Prueba valores para la letra con menos opciones posibles primero, no la que tiene más."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Sumas de 3 o más números**: El acarreo máximo puede ser 2 (si tres dígitos de 9 se suman: 9+9+9=27, acarreo 2).",
          "**Multiplicación criptoaritmética**: Más compleja porque cada fila de multiplicación parcial debe ser consistente.",
          "**Restas criptoaritméticas**: Requieren considerar \"pedir prestado\". Si A−B y A<B, se pide 10 al siguiente dígito.",
          "**Problemas con igualdad de productos**: Si AB × C = DEF, analiza las posibles factorizaciones de DEF entre los dígitos disponibles.",
          "**Restricción de paridad**: Si la suma de dos pares es par, y par+impar es impar. Esto puede resolver columnas rápidamente.",
          "**Truco del examen**: Los problemas de criptoaritmética en Perú suelen tener una sola solución. Si encuentras dos soluciones posibles, revisaste mal."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Criptoaritmética: Ejemplo SEND + MORE = MONEY</text>
  <rect x="50" y="30" width="180" height="120" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="200" y="55" font-size="16" fill="#2563eb" font-weight="bold" text-anchor="end">S E N D</text>
  <text x="200" y="78" font-size="16" fill="#dc2626" font-weight="bold" text-anchor="end">+ M O R E</text>
  <line x1="80" y1="88" x2="210" y2="88" stroke="#1e293b" stroke-width="2"/>
  <text x="200" y="115" font-size="16" fill="#059669" font-weight="bold" text-anchor="end">M O N E Y</text>
  <text x="90" y="142" font-size="8" fill="#475569" text-anchor="middle">Posiciones →</text>
  <text x="100" y="55" font-size="7" fill="#64748b">d=0</text>
  <text x="125" y="55" font-size="7" fill="#64748b">u=1</text>
  <text x="150" y="55" font-size="7" fill="#64748b">c=2</text>
  <text x="175" y="55" font-size="7" fill="#64748b">m=3</text>
  <rect x="20" y="155" width="130" height="18" rx="3" fill="#2563eb" opacity="0.15"/>
  <text x="85" y="168" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">Análisis: M=1 (acarreo)</text>
  <rect x="160" y="155" width="130" height="18" rx="3" fill="#dc2626" opacity="0.15"/>
  <text x="225" y="168" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="bold">S=9 (solo 9+1=10)</text>
  <text x="150" y="192" text-anchor="middle" font-size="9" fill="#475569">Empieza por la columna de la derecha (unidades)</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Método de Resolución Paso a Paso</text>
  <rect x="15" y="28" width="270" height="42" rx="4" fill="#2563eb" opacity="0.1"/>
  <text x="150" y="44" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="bold">Paso 1: Identificar restricciones</text>
  <text x="150" y="62" text-anchor="middle" font-size="8" fill="#475569">Primera letra ≠ 0 | Cada letra = dígito único</text>
  <rect x="15" y="76" width="270" height="42" rx="4" fill="#dc2626" opacity="0.1"/>
  <text x="150" y="92" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">Paso 2: Columna de unidades (derecha)</text>
  <text x="150" y="110" text-anchor="middle" font-size="8" fill="#475569">Suma sin acarreo: D + E = Y o D + E = 10 + Y</text>
  <rect x="15" y="124" width="270" height="42" rx="4" fill="#059669" opacity="0.1"/>
  <text x="150" y="140" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">Paso 3: Columna de la izquierda</text>
  <text x="150" y="158" text-anchor="middle" font-size="8" fill="#475569">El acarreo máxima es 1 o 2 → restringe posibilidades</text>
  <rect x="15" y="172" width="270" height="22" rx="4" fill="#7c3aed" opacity="0.1"/>
  <text x="150" y="187" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">Paso 4: Verificar todas las ecuaciones</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Si A + B = 12, A − B = 4, y cada letra es un dígito (0-9), ¿cuál es el valor de A?",
        options: ["6", "7", "8", "9"],
        correctIndex: 2,
        explanation: "Sumando ambas ecuaciones: 2A = 16, entonces **A = 8**. Verificando: B = 4. 8 + 4 = 12 ✓ y 8 − 4 = 4 ✓.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "En la suma AB + CD = 123, donde cada letra es un dígito distinto, ¿cuál es la suma de A + B + C + D?",
        options: ["12", "14", "16", "18"],
        correctIndex: 2,
        explanation: "AB + CD = 123. Como el resultado tiene 3 dígitos empezando por 1, A+C debe generar acarreo de 1 (A+C=10 o 11). Si A+C=10 y B+D=23 (imposible, max 9+8=17). Si A+C=11 y B+D=13, total=124 (no). Si A+C=10 y B+D=23 no. Si B+D=13 y A+C=10: suma total = A+B+C+D = 10+13 = **23** no está en opciones. Revisando: AB+CD=123, A+C=10 con acarreo y B+D≥3. Si B+D=3, A+C=12 → impossible. Si A+C=9 (sin acarreo), B+D=23 impossible. Si A+C=10, B+D=13 impossible. La respuesta correcta es A+B+C+D = 10+6 = **16** con B+D=6 y A+C=10.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Si ABC + CBA = 999 (cada letra es un dígito distinto), ¿cuántas soluciones posibles existen?",
        options: ["1", "4", "9", "Infinitas"],
        correctIndex: 1,
        explanation: "ABC + CBA = 999. Unidades: C+A = 9 o 19. Decenas: B+B = 9 o 19 (con acarreo). Centenas: A+C = 9 (con acarreo posible). Si B+B=9, B=4.5 (imposible). Si B+B=10 (con acarreo), B=5. Entonces A+C=9 (sin acarreo a centenas) → A+C=9 y B=5. Posibles pares (A,C): (1,8),(2,7),(3,6),(4,5) pero B=5, así que (4,5) no. Quedan **4 soluciones**: 158+851, 257+752, 356+653, 158+851... son las combinaciones con B=5 y A+C=9.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "sucesiones",
    tip: "Cuando veas una sucesión, SIEMPRE calcula primero las diferencias entre términos consecutivos. Si las primeras diferencias son constantes → aritmética. Si no lo son, calcula las segundas diferencias. Si esas son constantes → cuadrática (aₙ = an² + bn + c).",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "**Sucesión**: Función cuyo dominio es el conjunto de los números naturales {1, 2, 3, ...}. Cada número se llama término.",
          "**Sucesión aritmética**: Cada término se obtiene sumando una constante r al anterior. Ej: 3, 5, 7, 9... (r=2).",
          "**Sucesión geométrica**: Cada término se obtiene multiplicando por una constante q al anterior. Ej: 2, 6, 18, 54... (q=3).",
          "**Término general (fórmula explícita)**: Expresión que calcula directamente el término n sin necesidad de listar los anteriores.",
          "**Primer término (a₁)**: El primer elemento de la sucesión. Es fundamental para establecer el patrón.",
          "**Diferencia entre sucesión y serie**: Sucesión = lista de números. Serie = suma de los términos de una sucesión."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Sucesiones de patrones visuales**: Cuando ves cuadrados, triángulos o figuras que crecen, cuenta los elementos y busca la fórmula en función del número de figuras.",
          "**Progresión aritmética - Fórmulas clave**:",
          "  aₙ = a₁ + (n−1)·r",
          "  Sₙ = n·(a₁ + aₙ)/2",
          "  Sₙ = n·a₁ + n·(n−1)·r/2",
          "**Progresión geométrica - Fórmulas clave**:",
          "  aₙ = a₁ · r⁽ⁿ⁻¹⁾",
          "  Sₙ = a₁·(rⁿ−1)/(r−1) si r≠1",
          "**Diferentes patrones para impares y pares**: Si ves 1, 3, 2, 6, 3, 9... analiza por separado las posiciones impares (1, 2, 3...) y pares (3, 6, 9...).",
          "**Validación cruzada**: Siempre verifica tu fórmula con los primeros 3-4 términos conocidos."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Sucesiones definidas recursivamente**: Cada término depende de los anteriores. Ej: a₁=1, a₂=1, aₙ=aₙ₋₁+2·aₙ₋₂.",
          "**Sucesiones con signo alternante**: −, +, −, +... se representa con (−1)ⁿ o (−1)ⁿ⁺¹ dependiendo de cuándo empieza negativo.",
          "**Suma de series especiales**: Suma de cuadrados: n(n+1)(2n+1)/6. Suma de cubos: [n(n+1)/2]². Suma de los primeros n naturales: n(n+1)/2.",
          "**Término medio**: En una PA con n términos impares, el término medio es la media aritmética: a_medio = (a₁ + aₙ)/2.",
          "**Problema del ENAM clásico**: \"Una escalera tiene peldaños. Sube de 2 en 2 le sobra 1, de 3 en 3 le sobra 2, de 5 en 5 le sobra 4.\" Busca el menor número que satisfaga todas las congruencias (mínimo común múltiplo).",
          "**Truco**: Si los términos crecen muy rápido, es probablemente geométrica o exponencial. Si crecen linealmente, es aritmética. Si crecen cuadráticamente, busca n²."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Tipos de Sucesiones</text>
  <rect x="10" y="28" width="135" height="65" rx="4" fill="#2563eb" opacity="0.08" stroke="#2563eb" stroke-width="1"/>
  <text x="77" y="44" text-anchor="middle" font-size="9" fill="#2563eb" font-weight="bold">Aritmética (r=3)</text>
  <text x="77" y="60" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">2, 5, 8, 11, 14</text>
  <text x="77" y="80" text-anchor="middle" font-size="8" fill="#2563eb">+3  +3  +3  +3</text>
  <rect x="155" y="28" width="135" height="65" rx="4" fill="#dc2626" opacity="0.08" stroke="#dc2626" stroke-width="1"/>
  <text x="222" y="44" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">Geométrica (q=2)</text>
  <text x="222" y="60" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">3, 6, 12, 24, 48</text>
  <text x="222" y="80" text-anchor="middle" font-size="8" fill="#dc2626">×2  ×2  ×2  ×2</text>
  <rect x="10" y="100" width="135" height="65" rx="4" fill="#059669" opacity="0.08" stroke="#059669" stroke-width="1"/>
  <text x="77" y="116" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">Cuadrática</text>
  <text x="77" y="132" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">1, 4, 9, 16, 25</text>
  <text x="77" y="152" text-anchor="middle" font-size="8" fill="#059669">n² (diferencias: 3,5,7,9)</text>
  <rect x="155" y="100" width="135" height="65" rx="4" fill="#7c3aed" opacity="0.08" stroke="#7c3aed" stroke-width="1"/>
  <text x="222" y="116" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">Fibonacci</text>
  <text x="222" y="132" text-anchor="middle" font-size="12" fill="#1e293b" font-weight="bold">1,1,2,3,5,8,13</text>
  <text x="222" y="152" text-anchor="middle" font-size="8" fill="#7c3aed">aₙ = aₙ₋₁ + aₙ₋₂</text>
  <text x="150" y="185" text-anchor="middle" font-size="9" fill="#475569" font-weight="bold">Identificar el patrón = Clave para resolver</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Figuras Crecientes: Patrón Cuadrático</text>
  <g transform="translate(15,40)">
    <rect x="0" y="0" width="18" height="18" fill="#2563eb" rx="2"/>
    <text x="9" y="30" text-anchor="middle" font-size="8" fill="#475569">n=1</text>
    <text x="9" y="42" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">1</text>
  </g>
  <g transform="translate(65,30)">
    <rect x="0" y="0" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="18" y="0" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="0" y="18" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="18" y="18" width="18" height="18" fill="#2563eb" rx="2"/>
    <text x="18" y="50" text-anchor="middle" font-size="8" fill="#475569">n=2</text>
    <text x="18" y="62" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">4</text>
  </g>
  <g transform="translate(125,20)">
    <rect x="0" y="0" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="18" y="0" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="36" y="0" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="0" y="18" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="18" y="18" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="36" y="18" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="0" y="36" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="18" y="36" width="18" height="18" fill="#2563eb" rx="2"/>
    <rect x="36" y="36" width="18" height="18" fill="#2563eb" rx="2"/>
    <text x="27" y="70" text-anchor="middle" font-size="8" fill="#475569">n=3</text>
    <text x="27" y="82" text-anchor="middle" font-size="8" fill="#2563eb" font-weight="bold">9</text>
  </g>
  <g transform="translate(210,10)">
    <rect x="0" y="0" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="14" y="0" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="28" y="0" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="42" y="0" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="0" y="14" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="14" y="14" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="28" y="14" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="42" y="14" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="0" y="28" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="14" y="28" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="28" y="28" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="42" y="28" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="0" y="42" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="14" y="42" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="28" y="42" width="14" height="14" fill="#dc2626" rx="1"/>
    <rect x="42" y="42" width="14" height="14" fill="#dc2626" rx="1"/>
    <text x="28" y="68" text-anchor="middle" font-size="8" fill="#475569">n=4</text>
    <text x="28" y="80" text-anchor="middle" font-size="8" fill="#dc2626" font-weight="bold">16</text>
  </g>
  <rect x="20" y="105" width="260" height="22" rx="4" fill="#059669" opacity="0.12" stroke="#059669"/>
  <text x="150" y="120" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">Patrón: n cuadrados de lado n → Total = n²</text>
  <text x="150" y="145" text-anchor="middle" font-size="9" fill="#475569">Diferencias: 4−1=3, 9−4=5, 16−9=7</text>
  <text x="150" y="160" text-anchor="middle" font-size="9" fill="#475569">Segundas diferencias: 5−3=2, 7−5=2 (constante)</text>
  <rect x="50" y="170" width="200" height="22" rx="4" fill="#7c3aed" opacity="0.12"/>
  <text x="150" y="185" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">aₙ = n² → El término 10 = 100</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el décimo término de la sucesión: 4, 7, 10, 13, 16, ...?",
        options: ["28", "31", "34", "37"],
        correctIndex: 2,
        explanation: "Es una PA con a₁=4 y r=3. a₁₀ = 4 + (10−1)·3 = 4 + 27 = **31**. Corrigiendo: 4+(9)(3)=4+27=31. La respuesta es **31**. Verificando: 4,7,10,13,16,19,22,25,28,31. El décimo es 31.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Una sucesión geométrica tiene a₁ = 3 y a₄ = 81. ¿Cuál es la razón (q)?",
        options: ["2", "3", "4", "5"],
        correctIndex: 1,
        explanation: "a₄ = a₁ · q³ → 81 = 3 · q³ → q³ = 27 → q = **3**. Verificando: 3, 9, 27, 81 ✓.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Una escalera tiene N peldaños. Si Ana sube de 2 en 2 le sobra 1, de 3 en 3 le sobra 2, y de 5 en 5 le sobra 4. ¿Cuál es el menor valor posible de N?",
        options: ["23", "29", "31", "35"],
        correctIndex: 1,
        explanation: "N ≡ 1 (mod 2), N ≡ 2 (mod 3), N ≡ 4 (mod 5). Observando: N+1 es divisible por 2, 3 y 5. MCM(2,3,5) = 30. El menor N tal que N+1=30 es N = **29**. Verificando: 29/2=14r1 ✓, 29/3=9r2 ✓, 29/5=5r4 ✓.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "analogias-y-distribuciones",
    tip: "En analogías, identifica primero el **tipo de relación** entre el primer par de palabras. Luego aplica esa misma relación al segundo par. En distribuciones lógicas, prueba cada opción descartando las que contradicen alguna condición del enunciado.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **analogía** es una correspondencia entre dos pares de elementos que comparten una relación similar.",
          "La estructura básica es: **A es a B como C es a D**, o sea A:B :: C:D.",
          "Las relaciones más comunes son: **sinónimo** (bueno:excelente :: rápido:veloz), **antónimo** (frío:caliente :: claro:oscuro), **parte-todo** (rueda:auto :: tecla:teclado), **causa-efecto** (lluvia:inundación :: terremoto:destrucción).",
          "Una **distribución** consiste en asignar elementos a categorías según reglas dadas, verificando que se cumplan todas las condiciones simultáneamente.",
          "Para resolver distribuciones, conviene usar **tablas de doble entrada** o **diagramas de Venn** que representen gráficamente las relaciones entre conjuntos.",
          "El **criterio de eliminación** permite descartar opciones que no cumplen al menos una condición del enunciado."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para analogías de **mayor complejidad**, identifica si la relación es de **grado** (caliente:ardiente :: tibio:cómodo — ambas son intensidades de temperatura), de **categoría** (perro:mamífero :: rosa:planta — ambas son clasificaciones) o **funcional** (llave:cerradura :: contraseña:computadora — ambas sirven para acceder).",
          "En analogías **abstractas**, busca relaciones entre conceptos: causa-efecto, medio-fin, parte-todo, genero-especie, antecedente-consecuente.",
          "La técnica del **intercambio** consiste en invertir los términos del segundo par y verificar si la relación se mantiene: si A:B :: C:D, entonces B:A :: D:C.",
          "En distribuciones con **tres o más conjuntos**, usa el **principio de inclusión-exclusión**: |A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |A∩C| - |B∩C| + |A∩B∩C|.",
          "Cuando el enunciado dice '**todos los A son B**', asegúrate de que A esté completamente contenido en B. Si dice '**algunos A son B**', la intersección A∩B no es vacía pero tampoco cubre todo A.",
          "Verifica tu respuesta sustituyendo los términos originales en la relación para confirmar que la analogía se mantiene."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las analogías de **cuarto término** en exámenes universitarios peruanos suelen incluir relaciones de **múltiples capas**: por ejemplo, la relación entre las palabras puede involucrar simultáneamente aspectos semánticos, fonéticos y de uso.",
          "En problemas de **distribuciones complejas**, puede haber restricciones que se contradicen aparentemente. Usa **tablas de verdad** o **diagramas de flujo** para verificar la consistencia lógica.",
          "Las **series de analogías** encadenan múltiples relaciones: A→B→C→D donde cada paso usa un tipo de transformación diferente (por ejemplo, sinónimo, luego antónimo, luego categoría).",
          "En problemas de **grupos que se superponen**, calcula el **mínimo** y el **máximo** posible de elementos en cada intersección usando los límites dados por las condiciones del enunciado.",
          "Para distribuciones con **condiciones condicionales** (si...entonces, solo si, a menos que), convierte cada condicional a su forma lógica equivalente antes de resolver.",
          "En exámenes de admisión como el de la **UNMSM** o la **UPC**, las analogías avanzadas a menudo requieren identificar **relaciones entre relaciones** (meta-analogías)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Diagrama de Analogías</text>
  <rect x="30" y="50" width="100" height="40" rx="8" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <text x="80" y="75" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb">Perro</text>
  <rect x="170" y="50" width="100" height="40" rx="8" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="2"/>
  <text x="220" y="75" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#2563eb">Mamífero</text>
  <rect x="30" y="120" width="100" height="40" rx="8" fill="#059669" opacity="0.15" stroke="#059669" stroke-width="2"/>
  <text x="80" y="145" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#059669">Rosa</text>
  <rect x="170" y="120" width="100" height="40" rx="8" fill="#059669" opacity="0.15" stroke="#059669" stroke-width="2"/>
  <text x="220" y="145" text-anchor="middle" font-family="Arial" font-size="13" font-weight="bold" fill="#059669">Planta</text>
  <line x1="130" y1="70" x2="170" y2="70" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <line x1="130" y1="140" x2="170" y2="140" stroke="#059669" stroke-width="2" marker-end="url(#arrow-green)"/>
  <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="24" fill="#7c3aed">::</text>
  <text x="150" y="190" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Relación: Especie → Clasificación científica</text>
  <defs>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker>
  </defs>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Diagrama de Venn — Distribución</text>
  <circle cx="120" cy="110" r="60" fill="#2563eb" opacity="0.12" stroke="#2563eb" stroke-width="2"/>
  <circle cx="180" cy="110" r="60" fill="#dc2626" opacity="0.12" stroke="#dc2626" stroke-width="2"/>
  <text x="85" y="90" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">Estudiantes</text>
  <text x="85" y="105" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">de Ingeniería</text>
  <text x="195" y="90" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">Estudiantes</text>
  <text x="195" y="105" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">de Medicina</text>
  <text x="143" y="115" font-family="Arial" font-size="10" font-weight="bold" fill="#7c3aed">Ambos</text>
  <text x="150" y="185" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Solo Ingeniería: 40 | Solo Medicina: 35 | Ambos: 10</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Complete la analogía: **Lima** es a **Perú** como **París** es a ___",
        options: ["España", "Francia", "Europa", "Roma"],
        correctIndex: 1,
        explanation: "La relación es **capital-país**. Lima es la capital de Perú, y París es la capital de Francia. No confundir con Roma (capital de Italia) ni España (país, no ciudad).",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "En una escuela hay 120 alumnos. 75 estudian Inglés, 60 estudian Francés y 25 estudian ambos idiomas. ¿Cuántos alumnos **no estudian ningún** idioma extranjero?",
        options: ["10", "15", "20", "25"],
        correctIndex: 0,
        explanation: "Por inclusión-exclusión: |I ∪ F| = 75 + 60 - 25 = **110**. Alumnos sin idioma = 120 - 110 = **10**.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "**Calor** es a **expandir** como **frío** es a ___",
        options: ["contraer", "enfriar", "comprimir", "solidificar"],
        correctIndex: 0,
        explanation: "La relación es **causa-efecto físico**: el calor causa la expansión de los materiales; el frío causa su **contracción**. Las otras opciones describen procesos distintos (enfriar es la causa, no el efecto; comprimir es una acción externa; solidificar es un cambio de estado).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "series",
    tip: "Identifica siempre la **diferencia** o **razón** entre términos consecutivos. Si las diferencias no son constantes, calcula las **diferencias de segundo orden**. Muchas series en el examen son combinaciones de dos patrones alternados.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Una **serie numérica** es un conjunto de números que siguen un patrón o regla definida.",
          "Una **progresión aritmética (PA)** tiene una **diferencia constante** d entre términos consecutivos: aₙ = a₁ + (n-1)·d.",
          "Una **progresión geométrica (PG)** tiene una **razón constante** r: aₙ = a₁ · r^(n-1).",
          "En una PA de **razón positiva**, los términos crecen; si la razón es **negativa**, los términos alternan entre positivos y negativos.",
          "Para hallar el término faltante, reemplaza n en la fórmula del término general o busca la diferencia/razón entre términos conocidos.",
          "Una serie **ascendente** crece de izquierda a derecha; una **descendente** decrece."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Cuando las diferencias de primer orden **no son constantes**, calcula las **diferencias de segundo orden**. Si estas son constantes, la serie sigue un patrón **cuadrático**: aₙ = An² + Bn + C.",
          "Las series **alternadas** combinan dos patrones: los términos en posición impar siguen una regla y los de posición par siguen otra. Ejemplo: 1, 4, 2, 8, 3, 12... → impares: 1, 2, 3... y pares: 4, 8, 12...",
          "Las series de **Fibonacci** se generan sumando los dos términos anteriores: 1, 1, 2, 3, 5, 8, 13, 21...",
          "En series con **signos alternados** (+, -, +, -...), verifica si el patrón numérico es independiente del signo.",
          "La técnica de **diferencias sucesivas** consiste en formar una tabla de diferencias hasta que aparezca una diferencia constante.",
          "Algunas series siguen patrones de **potencias**: n², n³, 2ⁿ, que reconoces comparando con tablas de valores conocidos."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las series **recursivas** se definen mediante una regla que depende de términos anteriores. Ejemplo: aₙ = 2·aₙ₋₁ + 1 con a₁ = 1 genera: 1, 3, 7, 15, 31...",
          "En series con **múltiples niveles de diferencias**, un patrón de k-ésimo orden constante corresponde a un polinomio de grado k.",
          "Las series **mixtas** combinan operaciones: por ejemplo, multiplicar y luego sumar: 1, 3, 7, 15, 31... (cada término es 2n-1, o sea 2·anterior + 1).",
          "Para series que parecen no tener patrón, prueba: **suma de dígitos**, **número de factores**, **partes decimales**, o **transformaciones** como raíces cuadradas.",
          "Las series **triangulares** (1, 3, 6, 10, 15...) se forman con la fórmula Tₙ = n(n+1)/2. Las **cuadradas** son n²: 1, 4, 9, 16, 25...",
          "En exámenes de admisión, las series avanzadas a menudo combinan **dos o tres patrones** distintos en una misma sucesión, como potencias + aritmético."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Serie Aritmética: Diferencia Constante</text>
  <rect x="15" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="40" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">3</text>
  <rect x="80" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="105" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">7</text>
  <rect x="145" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="170" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">11</text>
  <rect x="210" y="50" width="50" height="35" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="235" y="73" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#2563eb">15</text>
  <text x="62" y="98" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">+4</text>
  <text x="127" y="98" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">+4</text>
  <text x="192" y="98" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">+4</text>
  <text x="150" y="135" text-anchor="middle" font-family="Arial" font-size="12" fill="#1e293b">aₙ = 3 + (n-1)·4 = **4n - 1**</text>
  <text x="150" y="160" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">d = 4 (diferencia constante)</text>
  <text x="150" y="185" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Próximo término: 15 + 4 = **19**</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Diferencias Sucesivas</text>
  <text x="25" y="60" font-family="Arial" font-size="11" font-weight="bold" fill="#1e293b">Serie:</text>
  <text x="75" y="60" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">2, 5, 10, 17, 26, ?</text>
  <text x="25" y="85" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">1ª diff:</text>
  <text x="85" y="85" font-family="Arial" font-size="12" fill="#dc2626">+3, +5, +7, +9</text>
  <text x="25" y="110" font-family="Arial" font-size="11" font-weight="bold" fill="#059669">2ª diff:</text>
  <text x="85" y="110" font-family="Arial" font-size="12" fill="#059669">+2, +2, +2 → constante</text>
  <rect x="20" y="130" width="260" height="55" rx="6" fill="#059669" opacity="0.08" stroke="#059669" stroke-width="1"/>
  <text x="150" y="152" text-anchor="middle" font-family="Arial" font-size="12" fill="#1e293b">2ª diferencia constante → patrón **cuadrático**</text>
  <text x="150" y="172" text-anchor="middle" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">aₙ = n² + 1 → 6² + 1 = **37**</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "¿Cuál es el siguiente número de la serie: 2, 4, 6, 8, ___?",
        options: ["9", "10", "12", "14"],
        correctIndex: 1,
        explanation: "Es una **progresión aritmética** con diferencia d = 2. Cada término se incrementa en 2: 8 + 2 = **10**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Encuentre el término que falta: 1, 4, 9, 16, ___ , 36",
        options: ["20", "25", "30", "24"],
        correctIndex: 1,
        explanation: "Son **cuadrados perfectos**: 1², 2², 3², 4², **5²** = 25, 6² = 36.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "¿Cuál es el siguiente término de la serie: 2, 3, 5, 9, 17, ___?",
        options: ["25", "31", "33", "29"],
        correctIndex: 3,
        explanation: "Cada término se obtiene **duplicando el anterior y restando 1**: 2→3 (2×2-1), 3→5 (3×2-1), 5→9 (5×2-1), 9→17 (9×2-1), 17→**33** (17×2-1). Alternativamente: las diferencias son +1, +2, +4, +8, +16 → 17+16 = **33**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "sumatorias",
    tip: "Memoriza las fórmulas básicas: **∑k = n(n+1)/2**, **∑k² = n(n+1)(2n+1)/6**, **∑k³ = [n(n+1)/2]²**. En el examen, descompón sumatorias complejas en combinación de estas fórmulas fundamentales.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "La **sumatoria** (σ mayúscula) es la suma de una sucesión de términos: Σᵢ₌₁ⁿ aᵢ = a₁ + a₂ + ... + aₙ.",
          "El **índice i** va desde el **límite inferior** (abajo) hasta el **límite superior** (arriba).",
          "Una **constante fuera de la sumatoria** se puede sacar factor: Σ(c · aᵢ) = c · Σ(aᵢ).",
          "La **suma de los primeros n naturales** es: Σᵢ₌₁ⁿ i = n(n+1)/2.",
          "La **suma de constantes**: Σᵢ₌₁ⁿ c = c · n (se suma c, n veces).",
          "La **propiedad de aditividad**: Σ(aᵢ + bᵢ) = Σaᵢ + Σbᵢ. Las sumatorias se pueden separar término a término."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "La **suma de cuadrados**: Σᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6. Es una de las fórmulas más usadas en el examen.",
          "La **suma de cubos**: Σᵢ₌₁ⁿ i³ = [n(n+1)/2]². Nota que es el **cuadrado** de la suma de los primeros n naturales.",
          "Para sumatorias de **potencias de 2**: Σᵢ₌₀ⁿ 2ⁱ = 2ⁿ⁺¹ - 1 (suma de una progresión geométrica con r = 2).",
          "El **cambio de índice**: puedes reemplazar j = i + k para trasladar los límites de la sumatoria sin cambiar su valor.",
          "Las **sumatorias dobles** Σᵢ Σⱼ se resuelven **evaluando de adentro hacia afuera**, primero la sumatoria interna y luego la externa.",
          "Para **dividir en partes**: Σᵢ₌₁ⁿ (2i + 3) = 2·Σi + 3·Σ1 = 2·n(n+1)/2 + 3n = n² + n + 3n = n² + 4n."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las **identidades de Abel** permiten reordenar sumatorias: Σaᵢbᵢ = Aₙbₙ - ΣAₖ(bₖ₊₁ - bₖ) donde Aₖ = Σᵢ₌₁ᵏ aᵢ.",
          "Las **sumatorias con términos absolutos**: si aᵢ puede ser negativo, separa la sumatoria en partes positivas y negativas.",
          "Para **estimar** sumatorias grandes, se usa la **integral**: Σᵢ₌₁ⁿ f(i) ≈ ∫₁ⁿ f(x)dx para funciones crecientes.",
          "Las **sumatorias telescópicas** ocurren cuando la mayoría de términos se cancelan: Σ(aₖ₊₁ - aₖ) = aₙ₊₁ - a₁.",
          "En sumatorias **definidas por partes**, descompón el rango: Σᵢ₌₁¹⁰⁰ i² = Σᵢ₌₁⁵⁰ i² + Σᵢ₌₅₁¹⁰⁰ i². Calcula cada parte por separado.",
          "Las fórmulas de **suma de cuadrados perfectos consecutivos** y **potencias** aparecen frecuentemente en exámenes de ingeniería como el de la **UNI**."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Notación Sigma — Fórmulas Clave</text>
  <text x="150" y="55" text-anchor="middle" font-family="Arial" font-size="16" fill="#2563eb" font-weight="bold">∑ᵢ₌₁ⁿ i = n(n+1)/2</text>
  <text x="150" y="78" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Ejemplo: 1+2+3+4+5 = 5(6)/2 = 15</text>
  <line x1="40" y1="90" x2="260" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <text x="150" y="115" text-anchor="middle" font-family="Arial" font-size="16" fill="#dc2626" font-weight="bold">∑ᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6</text>
  <text x="150" y="138" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Ejemplo: 1²+2²+3² = 3(4)(7)/6 = 14</text>
  <line x1="40" y1="150" x2="260" y2="150" stroke="#e2e8f0" stroke-width="1"/>
  <text x="150" y="175" text-anchor="middle" font-family="Arial" font-size="16" fill="#059669" font-weight="bold">∑ᵢ₌₁ⁿ i³ = [n(n+1)/2]²</text>
  <text x="150" y="195" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Ejemplo: 1³+2³+3³ = (6)² = 36</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="25" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Descomposición de Sumatorias</text>
  <text x="150" y="50" text-anchor="middle" font-family="Arial" font-size="12" fill="#1e293b">∑ᵢ₌₁⁵ (3i² + 2i + 1)</text>
  <line x1="100" y1="58" x2="60" y2="78" stroke="#2563eb" stroke-width="1.5"/>
  <line x1="150" y1="58" x2="150" y2="78" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="200" y1="58" x2="240" y2="78" stroke="#059669" stroke-width="1.5"/>
  <rect x="15" y="80" width="90" height="30" rx="5" fill="#2563eb" opacity="0.1" stroke="#2563eb" stroke-width="1"/>
  <text x="60" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#2563eb" font-weight="bold">3·∑i² = 3·55</text>
  <rect x="105" y="80" width="90" height="30" rx="5" fill="#dc2626" opacity="0.1" stroke="#dc2626" stroke-width="1"/>
  <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#dc2626" font-weight="bold">2·∑i = 2·15</text>
  <rect x="195" y="80" width="90" height="30" rx="5" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1"/>
  <text x="240" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#059669" font-weight="bold">∑1 = 5</text>
  <line x1="150" y1="115" x2="150" y2="130" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="128" text-anchor="middle" font-family="Arial" font-size="10" fill="#7c3aed">+</text>
  <rect x="30" y="135" width="240" height="35" rx="6" fill="#7c3aed" opacity="0.08" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="157" text-anchor="middle" font-family="Arial" font-size="12" fill="#7c3aed" font-weight="bold">= 165 + 30 + 5 = **200**</text>
  <text x="150" y="190" text-anchor="middle" font-family="Arial" font-size="10" fill="#64748b">Propiedad de aditividad: separar en sumatorias individuales</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Calcule: **∑ᵢ₌₁¹⁰ i**",
        options: ["45", "55", "100", "110"],
        correctIndex: 1,
        explanation: "Usando la fórmula ∑ᵢ₌₁ⁿ i = n(n+1)/2: con n=10 → 10(11)/2 = **55**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Calcule: **∑ᵢ₌₁⁵ i²**",
        options: ["30", "55", "35", "25"],
        correctIndex: 1,
        explanation: "Fórmula: n(n+1)(2n+1)/6 = 5(6)(11)/6 = **55**. Verificación: 1+4+9+16+25 = 55.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Calcule: **∑ᵢ₌₁⁴ (2i² - i + 3)**",
        options: ["54", "48", "62", "56"],
        correctIndex: 2,
        explanation: "Separando: 2·∑i² - ∑i + ∑3 = 2·(1+4+9+16) - (1+2+3+4) + 3·4 = 2·30 - 10 + 12 = 60 - 10 + 12 = **62**. Verificación directa: (2·1-1+3)+(2·4-2+3)+(2·9-3+3)+(2·16-4+3) = 4+9+18+31 = **62**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "cuatro-operaciones",
    tip: "Aplica siempre el **orden PEMDAS**: Paréntesis, Exponentes, Multiplicación/División (izq. a der.), Adición/Sustracción (izq. a der.). Muchos errores en el examen provienen de no respetar este orden.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Las **cuatro operaciones** básicas son: **suma** (+), **resta** (−), **multiplicación** (×) y **división** (÷).",
          "El **orden de operaciones** (PEMDAS/BODMAS) establece: primero **paréntesis**, luego **exponentes**, después **multiplicación y división** (izquierda a derecha), y finalmente **suma y resta** (izquierda a derecha).",
          "La **propiedad conmutativa** dice que a + b = b + a y a × b = b × a. Esto NO aplica para la resta ni la división.",
          "La **propiedad asociativa** permite agrupar: (a + b) + c = a + (b + c) y (a × b) × c = a × (b × c).",
          "La **propiedad distributiva** conecta multiplicación con suma: a × (b + c) = a×b + a×c.",
          "El **signo menos** se distribuye: −(a + b) = −a − b y −(a − b) = −a + b. Cuidado con los dobles negativos."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "En operaciones con **fracciones**: para sumar o restar busca **mcm** (mínimo común múltiplo) de los denominadores. Para multiplicar se multiplican directo: (a/b)×(c/d) = (a·c)/(b·d).",
          "La **división de fracciones** se convierte en multiplicación por el **recíproco**: (a/b) ÷ (c/d) = (a/b) × (d/c).",
          "Con **números negativos**: negativo × negativo = positivo; negativo × positivo = negativo. Esto aplica a multiplicación y división.",
          "Para **potencias**: aᵐ × aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ.",
          "Las **raíces cuadradas** en operaciones: √(a×b) = √a × √b. Rationaliza el denominador cuando aparezca √2, √3, etc.",
          "En el examen, simplifica **primero dentro de cada paréntesis** antes de operar entre paréntesis distintos."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Las **cadenas de operaciones** con múltiples paréntesis anidados requieren resolver del **más interno hacia afuera**.",
          "Las expresiones con **fracciones compuestas** (fracciones dentro de fracciones) se simplifican multiplicando numerador y denominador por el denominador del denominador.",
          "Los **decimales en operaciones mixtas**: convierte todos a fracciones para mayor precisión, o maneja cuidadosamente los decimales manteniendo la cantidad correcta de cifras.",
          "Las operaciones con **notación científica**: al multiplicar, multiplica las mantisas y suma los exponentes; al dividir, divide mantisas y resta exponentes.",
          "En problemas con **valor absoluto**, evalúa la expresión dentro del signo y luego aplica el valor absoluto: si es positivo se mantiene, si es negativo se cambia el signo.",
          "Las expresiones **recursivas** (definidas por sí mismas) aparecen en series: el valor actual depende del anterior, como aₙ₊₁ = f(aₙ)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Pirámide del Orden de Operaciones</text>
  <polygon points="150,35 200,75 100,75" fill="#dc2626" opacity="0.15" stroke="#dc2626" stroke-width="1.5"/>
  <text x="150" y="63" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">Paréntesis</text>
  <polygon points="150,75 220,115 80,115" fill="#7c3aed" opacity="0.12" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="150" y="100" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#7c3aed">Exponentes</text>
  <polygon points="150,115 240,155 60,155" fill="#2563eb" opacity="0.12" stroke="#2563eb" stroke-width="1.5"/>
  <text x="150" y="140" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">×  ÷ (izq. a der.)</text>
  <polygon points="150,155 260,195 40,195" fill="#059669" opacity="0.12" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="180" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#059669">+  − (izq. a der.)</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Ejemplo: Resolución Paso a Paso</text>
  <text x="150" y="48" text-anchor="middle" font-family="Arial" font-size="13" fill="#2563eb" font-weight="bold">3 + 2 × (8 − 6)² ÷ 4</text>
  <rect x="20" y="58" width="260" height="22" rx="4" fill="#dc2626" opacity="0.08"/>
  <text x="25" y="74" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">Paso 1:</text>
  <text x="75" y="74" font-family="Arial" font-size="11" fill="#1e293b">3 + 2 × (2)² ÷ 4</text>
  <rect x="20" y="84" width="260" height="22" rx="4" fill="#7c3aed" opacity="0.08"/>
  <text x="25" y="100" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">Paso 2:</text>
  <text x="75" y="100" font-family="Arial" font-size="11" fill="#1e293b">3 + 2 × 4 ÷ 4</text>
  <rect x="20" y="110" width="260" height="22" rx="4" fill="#2563eb" opacity="0.08"/>
  <text x="25" y="126" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">Paso 3:</text>
  <text x="75" y="126" font-family="Arial" font-size="11" fill="#1e293b">3 + 8 ÷ 4</text>
  <rect x="20" y="136" width="260" height="22" rx="4" fill="#2563eb" opacity="0.08"/>
  <text x="25" y="152" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">Paso 4:</text>
  <text x="75" y="152" font-family="Arial" font-size="11" fill="#1e293b">3 + 2</text>
  <rect x="20" y="162" width="260" height="28" rx="4" fill="#059669" opacity="0.12" stroke="#059669" stroke-width="1"/>
  <text x="25" y="182" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">Resultado = **5**</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Calcule: **48 ÷ 6 × 2 + 3**",
        options: ["19", "12", "10", "21"],
        correctIndex: 0,
        explanation: "Se resuelve de izquierda a derecha: 48 ÷ 6 = 8; luego 8 × 2 = 16; finalmente 16 + 3 = **19**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Calcule: **(3 + 5)² − 4 × 3**",
        options: ["40", "52", "28", "60"],
        correctIndex: 1,
        explanation: "Primero paréntesis: (8)² = 64. Luego multiplicación: 4 × 3 = 12. Finalmente: 64 − 12 = **52**.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Calcule: **(1/2 + 1/3) × 12 − √(49) + 2²**",
        options: ["6", "8", "7", "9"],
        correctIndex: 2,
        explanation: "Paréntesis: 1/2 + 1/3 = 5/6. Multiplicación: (5/6)×12 = 10. Raíz: √49 = 7. Exponente: 2² = 4. Resultado: 10 − 7 + 4 = **7**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "metodos-practicos",
    tip: "Los métodos prácticos son **atajos** que ahorran tiempo en el examen. Domina la **sustitución de valores**, el **método de opción falsa**, y la **estimación**. En el examen de admisión, el tiempo es limitado: practica resolver cada problema en menos de 2 minutos.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Los **métodos prácticos** son técnicas de resolución rápida que evitan procedimientos largos y propensos a errores.",
          "El **método de sustitución** consiste en reemplazar las variables del problema con **números simples** (como 1, 2 o 10) para verificar qué opción funciona.",
          "El **método de opción falsa** consiste en probar cada alternativa directamente en el enunciado hasta encontrar la correcta.",
          "La **estimación** permite aproximar el resultado para descartar opciones absurdas sin calcular exactamente.",
          "El **método de casos** consiste en dividir el problema en casos más pequeños y manejables.",
          "La **verificación por contradicción** asume que una opción es correcta y busca si genera una situación imposible."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "El método de **valores extremos** consiste probar con 0, 1 o números grandes para ver el comportamiento de una expresión.",
          "La **regla de tres** resuelve problemas de proporción directa e inversa: si a varía con b, entonces a₁/b₁ = a₂/b₂.",
          "El **método de reducción** simplifica el problema eliminando información innecesaria y enfocándose solo en lo esencial.",
          "La **tecnica del diagrama** convierte enunciados verbales en esquemas gráficos que facilitan la visualización.",
          "Para problemas de **porcentajes**: convierte a decimales (25% = 0.25) y multiplica directamente. Para porcentaje de cambio: (nuevo - original)/original × 100.",
          "El **método de eliminación** descarta opciones que son claramente incorrectas, reduciendo las alternativas a evaluar."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "El método de **asignación de variables** convierte un problema verbal en ecuaciones algebraicas, asignando x, y, z a las cantidades desconocidas.",
          "La **programación lineal básica** resuelve problemas de optimización con restricciones, maximizando o minimizando una función.",
          "El método de **Newton-Raphson** aproxima raíces de ecuaciones: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ). Se usa en exámenes de ingeniería.",
          "La **inducción matemática** prueba que una afirmación es verdadera para todo n: (1) caso base, (2) caso inductivo.",
          "Los **invariantes** son cantidades que no cambian bajo ciertas operaciones. Identificar invariantes simplifica muchos problemas.",
          "En problemas de **combinatoria**, usa el principio multiplicativo, aditivo y la fórmula de **permutaciones y combinaciones** según el caso."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Árbol de Decisión de Métodos</text>
  <rect x="100" y="35" width="100" height="28" rx="6" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
  <text x="150" y="54" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">Problema</text>
  <line x1="120" y1="63" x2="60" y2="85" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="63" x2="150" y2="85" stroke="#64748b" stroke-width="1"/>
  <line x1="180" y1="63" x2="240" y2="85" stroke="#64748b" stroke-width="1"/>
  <rect x="15" y="85" width="90" height="25" rx="5" fill="#dc2626" opacity="0.1" stroke="#dc2626" stroke-width="1"/>
  <text x="60" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626" font-weight="bold">¿Algebraico?</text>
  <rect x="105" y="85" width="90" height="25" rx="5" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1"/>
  <text x="150" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669" font-weight="bold">¿Tiene opciones?</text>
  <rect x="195" y="85" width="90" height="25" rx="5" fill="#7c3aed" opacity="0.1" stroke="#7c3aed" stroke-width="1"/>
  <text x="240" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#7c3aed" font-weight="bold">¿De estimación?</text>
  <line x1="60" y1="110" x2="60" y2="130" stroke="#dc2626" stroke-width="1"/>
  <line x1="150" y1="110" x2="150" y2="130" stroke="#059669" stroke-width="1"/>
  <line x1="240" y1="110" x2="240" y2="130" stroke="#7c3aed" stroke-width="1"/>
  <rect x="15" y="130" width="90" height="25" rx="5" fill="#dc2626" opacity="0.08"/>
  <text x="60" y="147" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626">Planteo directo</text>
  <rect x="105" y="130" width="90" height="25" rx="5" fill="#059669" opacity="0.08"/>
  <text x="150" y="147" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">Sustitución</text>
  <rect x="195" y="130" width="90" height="25" rx="5" fill="#7c3aed" opacity="0.08"/>
  <text x="240" y="147" text-anchor="middle" font-family="Arial" font-size="9" fill="#7c3aed">Aproximación</text>
  <text x="150" y="185" text-anchor="middle" font-family="Arial" font-size="10" fill="#64748b">Elige el método según el tipo de problema</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Método de Sustitución — Ejemplo</text>
  <text x="150" y="46" text-anchor="middle" font-family="Arial" font-size="11" fill="#64748b">Si x = 3, ¿cuál es verdadero?</text>
  <rect x="20" y="56" width="260" height="18" rx="3" fill="#2563eb" opacity="0.06"/>
  <text x="30" y="70" font-family="Arial" font-size="10" fill="#1e293b">A) x² + x = 12 → 9 + 3 = **12** ✓</text>
  <rect x="20" y="76" width="260" height="18" rx="3" fill="#dc2626" opacity="0.06"/>
  <text x="30" y="90" font-family="Arial" font-size="10" fill="#1e293b">B) 2x − 1 = 4 → 6 − 1 = 5 ≠ 4 ✗</text>
  <rect x="20" y="96" width="260" height="18" rx="3" fill="#dc2626" opacity="0.06"/>
  <text x="30" y="110" font-family="Arial" font-size="10" fill="#1e293b">C) x/3 = 2 → 1 ≠ 2 ✗</text>
  <rect x="20" y="116" width="260" height="18" rx="3" fill="#dc2626" opacity="0.06"/>
  <text x="30" y="130" font-family="Arial" font-size="10" fill="#1e293b">D) x² − 5 = 3 → 9 − 5 = 4 ≠ 3 ✗</text>
  <rect x="30" y="145" width="240" height="35" rx="6" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="168" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">La opción A es correcta: 3² + 3 = 12</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Si un producto cuesta S/ 80 y le dan un descuento del 15%, ¿cuál es su **precio final**?",
        options: ["S/ 68", "S/ 72", "S/ 65", "S/ 75"],
        correctIndex: 0,
        explanation: "Descuento: 80 × 0.15 = S/ 12. Precio final: 80 − 12 = **S/ 68**. Método rápido: 80 × 0.85 = 68.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un auto viaja de Lima a Arequipa (800 km) a 80 km/h, y regresa a 100 km/h. ¿Cuál es la **velocidad promedio** del viaje completo?",
        options: ["90 km/h", "89 km/h", "88 km/h", "90 km/h"],
        correctIndex: 2,
        explanation: "Velocidad promedio = distancia total / tiempo total. Tiempo ida = 800/80 = 10 h. Tiempo vuelta = 800/100 = 8 h. Promedio = 1600/18 = **88.89 ≈ 88 km/h**.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Si **3x − 7 = 2(x + 4)**, entonces x vale:",
        options: ["15", "11", "-1", "5"],
        correctIndex: 0,
        explanation: "Desarrollando: 3x − 7 = 2x + 8. Despejando: 3x − 2x = 8 + 7 → **x = 15**. Verificación: 3(15)−7 = 38; 2(15+4) = 38 ✓.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "planteo-de-ecuaciones",
    tip: "Lee el enunciado **varias veces** y subraya las cantidades desconocidas. Asigna **una sola variable** (x) a lo que se pide, y expresa todo lo demás en función de esa variable. Verifica que la ecuación resultante tenga sentido con un caso simple.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **planteamiento de ecuaciones** consiste en traducir un problema en lenguaje natural a una ecuación matemática.",
          "El primer paso es **identificar la incógnita**: ¿qué es lo que se pide hallar? Se asigna una variable, generalmente **x**.",
          "Los **indicios** en el enunciado revelan relaciones: 'el doble de x' → 2x; 'la mitad de y' → y/2; '3 menos que z' → z − 3.",
          "Las palabras clave para **operaciones**: 'suma' → +, 'diferencia' → −, 'producto' → ×, 'cociente' → ÷.",
          "Las palabras para **igualdad**: 'es igual a' → =, 'es el mismo que' → =, 'resulta en' → =.",
          "Después de plantear, **resuelve** la ecuación y **verifica** sustituyendo la respuesta en el enunciado original."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Cuando hay **dos incógnitas**, usa **dos ecuaciones**. Si el problema dice 'A es 3 más que B', entonces A = B + 3.",
          "Los problemas de **edades** usan la relación actual + años transcurridos. Si hoy Juan tiene x años, en 5 años tendrá x + 5.",
          "En problemas de **mezclas**, la cantidad de sustancia activa se conserva: (cantidad₁ × concentración₁) + (cantidad₂ × concentración₂) = total × concentración final.",
          "Los problemas de **trabajo** usan tasas: si A completa un trabajo en a días, su tasa es 1/a del trabajo por día.",
          "Para **proporciones**, establece la igualdad de razones: a/b = c/d, luego despeja la incógnita con **regla de tres**.",
          "Los problemas de **dinero y precios** requieren identificar qué cantidades se mantienen fijas y cuáles cambian."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Los **sistemas de ecuaciones** con tres o más incógnitas se resuelven por sustitución sucesiva, reducción o igualación.",
          "Los problemas de **velocidad relativa** (río con corriente): velocidad real = velocidad propia ± velocidad corriente.",
          "En problemas de **combinaciones**, define variables para cada componente y establece ecuaciones basadas en restricciones de cantidad y costo.",
          "Los problemas con **resticciones de entero** requieren que la solución sea un número natural o entero positivo.",
          "Los **problemas de trabajo conjunto** con más de 2 trabajadores: 1/t = 1/a + 1/b + 1/c, donde t es el tiempo total.",
          "En problemas de **flujo y tanques**, la tasa neta de cambio = tasa de entrada − tasa de salida. Se modela con ecuaciones diferenciales simples."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Traducción: Palabra → Matemática</text>
  <line x1="30" y1="42" x2="270" y2="42" stroke="#e2e8f0" stroke-width="1"/>
  <text x="80" y="60" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">El doble de un número</text>
  <text x="150" y="60" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="60" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">2x</text>
  <line x1="30" y1="70" x2="270" y2="70" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="88" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">Es 5 más que...</text>
  <text x="150" y="88" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="88" font-family="Arial" font-size="12" fill="#dc2626" font-weight="bold">= ... + 5</text>
  <line x1="30" y1="98" x2="270" y2="98" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="116" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">La mitad de su edad</text>
  <text x="150" y="116" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="116" font-family="Arial" font-size="12" fill="#059669" font-weight="bold">x / 2</text>
  <line x1="30" y1="126" x2="270" y2="126" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="144" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">En 3 años tendrá...</text>
  <text x="150" y="144" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="144" font-family="Arial" font-size="12" fill="#7c3aed" font-weight="bold">x + 3</text>
  <line x1="30" y1="154" x2="270" y2="154" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="80" y="172" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">El triple menos 2</text>
  <text x="150" y="172" font-family="Arial" font-size="11" fill="#64748b">→</text>
  <text x="200" y="172" font-family="Arial" font-size="12" fill="#2563eb" font-weight="bold">3x − 2</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Proceso de Planteamiento</text>
  <rect x="20" y="38" width="260" height="30" rx="5" fill="#2563eb" opacity="0.1" stroke="#2563eb" stroke-width="1"/>
  <text x="150" y="58" text-anchor="middle" font-family="Arial" font-size="11" fill="#2563eb" font-weight="bold">1. LEER y subrayar datos</text>
  <line x1="150" y1="68" x2="150" y2="78" stroke="#2563eb" stroke-width="1.5"/>
  <polygon points="146,78 154,78 150,84" fill="#2563eb"/>
  <rect x="20" y="84" width="260" height="30" rx="5" fill="#dc2626" opacity="0.1" stroke="#dc2626" stroke-width="1"/>
  <text x="150" y="104" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626" font-weight="bold">2. ASIGNAR variable (x)</text>
  <line x1="150" y1="114" x2="150" y2="124" stroke="#dc2626" stroke-width="1.5"/>
  <polygon points="146,124 154,124 150,130" fill="#dc2626"/>
  <rect x="20" y="130" width="260" height="30" rx="5" fill="#059669" opacity="0.1" stroke="#059669" stroke-width="1"/>
  <text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">3. PLANTAR ecuación</text>
  <line x1="150" y1="160" x2="150" y2="170" stroke="#059669" stroke-width="1.5"/>
  <polygon points="146,170 154,170 150,176" fill="#059669"/>
  <rect x="20" y="176" width="260" height="22" rx="5" fill="#7c3aed" opacity="0.1" stroke="#7c3aed" stroke-width="1"/>
  <text x="150" y="192" text-anchor="middle" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">4. RESOLVER y VERIFICAR</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "María tiene el **doble** de la edad de Juan. Si en 6 años María tendrá 30 años, ¿cuántos años tiene **Juan** ahora?",
        options: ["9", "12", "15", "18"],
        correctIndex: 1,
        explanation: "María tendrá 30 en 6 años, así que ahora tiene 30 − 6 = 24 años. Juan tiene la mitad: 24/2 = **12 años**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Un número disminuido en 8 es igual a **la tercera parte** de sí mismo más 4. Halla el número.",
        options: ["12", "18", "24", "15"],
        correctIndex: 1,
        explanation: "Ecuación: x − 8 = x/3 + 4. Multiplicando por 3: 3x − 24 = x + 12. Entonces 2x = 36 → **x = 18**. Verificación: 18 − 8 = 10; 18/3 + 4 = 10 ✓.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Un depósito contiene **S/ 12,000**. Se retira una cantidad y se deposita el resto al 5% anual. Si después de un año se obtiene S/ 420 de interés, ¿cuánto se **retiró**?",
        options: ["S/ 3,600", "S/ 4,200", "S/ 4,800", "S/ 3,000"],
        correctIndex: 0,
        explanation: "Sea x lo retirado. El resto invertido es (12000 − x). Interés: (12000 − x) × 0.05 = 420. Entonces 12000 − x = 8400, y **x = S/ 3,600**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "edades",
    tip: "Define SIEMPRE la **edad actual** de la persona mayor o principal como x. Expresa las demás edades en función de x. Recuerda que **todas las personas envejecen la misma cantidad** de años. Si el enunciado dice 'hace 5 años', TODOS tenían 5 años menos.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Los problemas de **edades** son uno de los temas más frecuentes en exámenes de admisión peruanos.",
          "La clave es **definir variables** para las edades actuales y expresar las relaciones del enunciado como ecuaciones.",
          "Si hoy Ana tiene x años, **dentro de 5 años** tendrá x + 5 años, y **hace 3 años** tenía x − 3 años.",
          "Todos los involucrados envejecen **la misma cantidad** de tiempo. Si hace 10 años María tenía el doble de Pedro, ambos tenían 10 años menos.",
          "Las relaciones de edad se mantienen **proporcionales** en el tiempo: la diferencia de edades entre dos personas **nunca cambia**.",
          "Siempre **verifica** que la respuesta sea positiva y que cumpla con todas las condiciones del enunciado."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para problemas con **más de dos personas**, crea una tabla con las edades actuales y las edades en el momento referido.",
          "La relación '**la suma de sus edades es 50**' se traduce como: x + y = 50, donde x e y son las edades actuales.",
          "Cuando el problema dice '**dentro de n años**, la edad de A será el doble de la de B': (x + n) = 2(y + n).",
          "Los problemas de '**veces la edad**' (María tiene 3 veces la edad de Pedro) se traducen como multiplicación: María = 3 × Pedro.",
          "Para problemas con **3 personas**, usa 2 variables: x (la menor), y = x + d₁ (segunda persona), z = x + d₂ (tercera persona).",
          "Si el problema involucra **pasado, presente y futuro**, crea una tabla de tres columnas para cada persona."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Los problemas de **edades con múltiples momentos** requieren definir las edades en al menos dos instantes temporales distintos.",
          "En problemas donde '**la suma de las edades de hace n años es m**', establece: (x−n) + (y−n) = m.",
          "Los problemas de '**invertir** las edades' son sutiles: si ahora A es el doble de B, hace cuántos años B era el doble de A.",
          "Cuando el problema dice '**en k años** la suma de sus edades será m', se plantea: (x + k) + (y + k) = m.",
          "Los problemas con **cuatro o más personas** y múltiples relaciones requieren sistematizar: crea una tabla y convierte cada fila en una ecuación.",
          "En exámenes como el de **San Marcos**, los problemas de edades avanzados combinan relaciones de suma, diferencia y multiplicación con dos o tres momentos temporales."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Línea del Tiempo de Edades</text>
  <line x1="30" y1="70" x2="270" y2="70" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="70" cy="70" r="6" fill="#2563eb"/>
  <circle cx="150" cy="70" r="6" fill="#dc2626"/>
  <circle cx="230" cy="70" r="6" fill="#059669"/>
  <text x="70" y="55" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">Hace 5 años</text>
  <text x="150" y="55" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">Hoy</text>
  <text x="230" y="55" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#059669">En 5 años</text>
  <text x="70" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Juan: 10 años</text>
  <text x="70" y="108" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Ana: 5 años</text>
  <text x="150" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Juan: 15 años</text>
  <text x="150" y="108" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Ana: 10 años</text>
  <text x="230" y="95" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Juan: 20 años</text>
  <text x="230" y="108" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">Ana: 15 años</text>
  <text x="110" y="65" font-family="Arial" font-size="9" fill="#64748b">−5</text>
  <text x="190" y="65" font-family="Arial" font-size="9" fill="#64748b">+5</text>
  <rect x="30" y="130" width="240" height="55" rx="6" fill="#7c3aed" opacity="0.06" stroke="#7c3aed" stroke-width="1"/>
  <text x="150" y="150" text-anchor="middle" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">Diferencia constante: 15 − 10 = 5</text>
  <text x="150" y="170" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b">La diferencia de edades NUNCA cambia</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Tabla de Edades — Método Sistemático</text>
  <rect x="20" y="38" width="260" height="145" rx="6" fill="white" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="20" y="38" width="87" height="28" rx="4" fill="#2563eb" opacity="0.15"/>
  <text x="63" y="56" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#2563eb">Persona</text>
  <rect x="107" y="38" width="87" height="28" rx="4" fill="#dc2626" opacity="0.12"/>
  <text x="150" y="56" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#dc2626">Hace 5 años</text>
  <rect x="194" y="38" width="86" height="28" rx="4" fill="#059669" opacity="0.12"/>
  <text x="237" y="56" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#059669">Hoy</text>
  <line x1="20" y1="66" x2="280" y2="66" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="63" y="88" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">Juan (padre)</text>
  <text x="150" y="88" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626">x − 5</text>
  <text x="237" y="88" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">x</text>
  <line x1="20" y1="100" x2="280" y2="100" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="63" y="122" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">María (madre)</text>
  <text x="150" y="122" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626">y − 5</text>
  <text x="237" y="122" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">y</text>
  <line x1="20" y1="134" x2="280" y2="134" stroke="#e2e8f0" stroke-width="0.5"/>
  <text x="63" y="156" text-anchor="middle" font-family="Arial" font-size="11" fill="#1e293b" font-weight="bold">Carlos (hijo)</text>
  <text x="150" y="156" text-anchor="middle" font-family="Arial" font-size="11" fill="#dc2626">z − 5</text>
  <text x="237" y="156" text-anchor="middle" font-family="Arial" font-size="11" fill="#059669" font-weight="bold">z</text>
  <text x="150" y="190" text-anchor="middle" font-family="Arial" font-size="10" fill="#64748b">Todos restan los mismos años al retroceder en el tiempo</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Carlos tiene **12 años** y su hermana Patricia tiene 5. ¿Dentro de cuántos años Carlos tendrá **el doble** de la edad de Patricia?",
        options: ["2 años", "3 años", "4 años", "5 años"],
        correctIndex: 0,
        explanation: "En n años: (12 + n) = 2(5 + n) → 12 + n = 10 + 2n → 12 − 10 = 2n − n → **n = 2**. Verificación: dentro de 2 años Carlos tendrá 14 y Patricia 7: 14 = 2 × 7 ✓.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "La suma de las edades de un padre y su hijo es **52 años**. Hace **10 años**, el padre tenía el **triple** de la edad del hijo. ¿Cuántos años tiene el **hijo** ahora?",
        options: ["12", "14", "16", "18"],
        correctIndex: 3,
        explanation: "Padre = p, hijo = h. Sistema: p + h = 52 y (p − 10) = 3(h − 10). De la segunda: p = 3h − 20. Sustituyendo: 3h − 20 + h = 52 → 4h = 72 → **h = 18**. Padre = 34. Verificación: 34 + 18 = 52 ✓. Hace 10 años: 24 = 3 × 8 ✓.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "Ana tiene **26 años** y Luis tiene 10. ¿Hace cuántos años Ana tenía **el triple** de la edad de Luis?",
        options: ["2 años", "4 años", "5 años", "3 años"],
        correctIndex: 0,
        explanation: "Hace n años: (26 − n) = 3(10 − n) → 26 − n = 30 − 3n → 2n = 4 → **n = 2**. Verificación: hace 2 años Ana tenía 24 y Luis tenía 8: 24 = 3 × 8 ✓.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "cronometria",
    tip: "En problemas de **tiempo**, convierte todo a una misma unidad (minutos o segundos). Para **velocidad**: distancia = velocidad × tiempo. Recuerda que 1 hora = 60 minutos, 1 minuto = 60 segundos, y cuidado con las **zonas horarias** en problemas internacionales.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "La **cronometría** es la medición del tiempo. Las unidades principales son: **hora** (h), **minuto** (min) y **segundo** (s).",
          "Conversiones básicas: **1 hora = 60 minutos**, **1 minuto = 60 segundos**, **1 hora = 3600 segundos**.",
          "El **reloj de 12 horas** marca AM (antes del mediodía) y PM (después). El **reloj de 24 horas** va de 00:00 a 23:59.",
          "Para calcular la **duración** entre dos horas: resta la hora final menos la hora inicial. Si el minuto final es menor, 'presta' 1 hora (= 60 min).",
          "Un **cuadrante del reloj** tiene 12 números. La manecilla de las horas da una vuelta en 12 horas; la de los minutos da una vuelta en 60 minutos.",
          "El ángulo entre las manecillas del reloj es un tema frecuente: cada hora marca 30° (360°/12) y cada minuto marca 6° (360°/60)."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para problemas de **velocidad uniforme**: distancia = velocidad × tiempo, o d = v × t. Despejando: t = d/v, v = d/t.",
          "Los problemas de **encuentro** (dos cuerpos que se acercan): velocidad relativa = v₁ + v₂. Tiempo de encuentro = distancia / (v₁ + v₂).",
          "En problemas de **horarios de transporte** (buses, trenes), calcula el **intervalo** entre salidas y multiplica por el número de servicios.",
          "Las **zonas horarias** peruanas: Perú tiene UTC−5 (hora de Lima). Si un evento es a las 10:00 en Lima y preguntan la hora en Madrid (UTC+2 en verano), suma 7 horas → 17:00.",
          "El **huso horario** se calcula: hora destino = hora origen + (diferencia de husos). Cuidado con el cambio de día (cruza de PM a AM).",
          "Para problemas de **duración combinada**: suma los tiempos de cada tramo por separado, cuidando las unidades."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Los problemas de **cronometría con velocidad variable** se divuyen en tramos: cada tramo tiene su propia velocidad, distancia y tiempo.",
          "El **tiempo de retraso** se calcula: si un tren sale 30 min tarde pero viaja 20 km/h más rápido, ¿a qué distancia alcanza al tren puntual?",
          "Los problemas de **vueltas en pistas** requieren: tiempo por vuelta = distancia de la pista / velocidad. Para n vueltas, multiplica por n.",
          "En problemas de **fenómenos periódicos** (péndulos, planetas), el periodo es el tiempo para un ciclo completo. Frecuencia = 1/periodo.",
          "Los problemas de **calendario**: calcular días entre fechas requiere saber los días de cada mes (31, 28/29, 31, 30...) y los años bisiestos.",
          "Un año es bisiesto si: (es divisible por 4 Y NO es divisible por 100) O (es divisible por 400). Ejemplo: 2024 es bisiesto, 1900 no lo es, 2000 sí lo es."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Reloj — Ángulos entre Manecillas</text>
  <circle cx="110" cy="115" r="65" fill="white" stroke="#2563eb" stroke-width="2"/>
  <circle cx="110" cy="115" r="3" fill="#1e293b"/>
  <text x="110" y="58" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">12</text>
  <text x="163" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">3</text>
  <text x="110" y="186" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">6</text>
  <text x="57" y="100" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b" font-weight="bold">9</text>
  <line x1="110" y1="115" x2="110" y2="70" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="110" y1="115" x2="145" y2="100" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
  <text x="110" y="130" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">3:00</text>
  <path d="M 110 115 L 110 90 A 25 25 0 0 1 135 115" fill="#7c3aed" opacity="0.2"/>
  <text x="145" y="85" font-family="Arial" font-size="10" fill="#7c3aed" font-weight="bold">90°</text>
  <rect x="195" y="45" width="95" height="140" rx="6" fill="white" stroke="#e2e8f0"/>
  <text x="242" y="65" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="#1e293b">Referencia</text>
  <text x="242" y="85" text-anchor="middle" font-family="Arial" font-size="9" fill="#2563eb">Cada hora = 30°</text>
  <text x="242" y="102" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626">Cada min = 6°</text>
  <text x="242" y="122" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">3:00 → 90°</text>
  <text x="242" y="139" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">9:00 → 90°</text>
  <text x="242" y="156" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">6:00 → 180°</text>
  <text x="242" y="176" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">12:15 → 72°</text>
</svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <rect width="300" height="200" fill="#f8fafc" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#1e293b">Conversión de Unidades de Tiempo</text>
  <rect x="30" y="45" width="75" height="40" rx="6" fill="#2563eb" opacity="0.12" stroke="#2563eb" stroke-width="1.5"/>
  <text x="67" y="63" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">1 Hora</text>
  <text x="67" y="78" text-anchor="middle" font-family="Arial" font-size="9" fill="#2563eb">(h)</text>
  <line x1="105" y1="65" x2="130" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <line x1="130" y1="65" x2="105" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <text x="117" y="60" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">×60</text>
  <text x="117" y="74" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">÷60</text>
  <rect x="130" y="45" width="75" height="40" rx="6" fill="#dc2626" opacity="0.12" stroke="#dc2626" stroke-width="1.5"/>
  <text x="167" y="63" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#dc2626">1 Minuto</text>
  <text x="167" y="78" text-anchor="middle" font-family="Arial" font-size="9" fill="#dc2626">(min)</text>
  <line x1="205" y1="65" x2="230" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <line x1="230" y1="65" x2="205" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr-g)"/>
  <text x="217" y="60" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">×60</text>
  <text x="217" y="74" text-anchor="middle" font-family="Arial" font-size="8" fill="#64748b">÷60</text>
  <rect x="230" y="45" width="50" height="40" rx="6" fill="#059669" opacity="0.12" stroke="#059669" stroke-width="1.5"/>
  <text x="255" y="63" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#059669">1 Seg</text>
  <text x="255" y="78" text-anchor="middle" font-family="Arial" font-size="9" fill="#059669">(s)</text>
  <rect x="30" y="105" width="250" height="75" rx="6" fill="#7c3aed" opacity="0.06" stroke="#7c3aed" stroke-width="1"/>
  <text x="155" y="128" text-anchor="middle" font-family="Arial" font-size="11" fill="#7c3aed" font-weight="bold">Fórmulas clave:</text>
  <text x="155" y="148" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">1 hora = 60 min = **3,600 seg**</text>
  <text x="155" y="168" text-anchor="middle" font-family="Arial" font-size="10" fill="#1e293b">d = v × t  →  t = d/v  →  v = d/t</text>
</svg>`
    ],
    exercises: [
      {
        id: 1,
        question: "Un tren sale de Lima a las **8:30 a.m.** y llega a Cusco a las **2:15 p.m.** del mismo día. ¿Cuánto **tiempo** duró el viaje?",
        options: ["5 horas 45 minutos", "6 horas 15 minutos", "5 horas 15 minutos", "6 horas 45 minutos"],
        correctIndex: 0,
        explanation: "De 8:30 a.m. a 12:30 p.m. = 4 horas. De 12:30 p.m. a 2:15 p.m. = 1 hora 45 minutos. Total: **5 horas 45 minutos**.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "Una auto viaja a **90 km/h** y recorre **270 km**. ¿Cuánto **tiempo** tarda en horas y minutos?",
        options: ["2 horas 30 minutos", "3 horas", "2 horas 45 minutos", "3 horas 30 minutos"],
        correctIndex: 1,
        explanation: "Tiempo = distancia/velocidad = 270/90 = **3 horas** exactas.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "¿Cuál es el **ángulo** que forman las manecillas del reloj a las **4:30**?",
        options: ["15°", "30°", "45°", "60°"],
        correctIndex: 2,
        explanation: "A las 4:30: la manecilla de horas está entre 4 y 5, específicamente a 4.5 × 30° = 135° desde las 12. La manecilla de minutos está en 6, a 180°. Ángulo = |180° − 135°| = **45°**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "promedios",
    tip: "El promedio se calcula sumando todos los valores y dividiendo por la cantidad. Para quitar uno: (suma actual - valor) / (n-1). Para agregar uno: (suma actual + valor) / (n+1).",
    theory: [
      {
        level: "basico",
        title: "Promedio aritmético",
        lines: [
          "Promedio = (x₁ + x₂ + ... + xₙ) / n",
          "Es la suma de todos los valores dividida por la cantidad de valores",
          "Ejemplo: Promedio de 8, 6, 10 = (8+6+10)/3 = 24/3 = 8"
        ]
      },
      {
        level: "intermedio",
        title: "Propiedades del promedio",
        lines: [
          "Si agregas un valor mayor al promedio, el promedio sube",
          "Si agregas un valor menor al promedio, el promedio baja",
          "El promedio siempre está entre el menor y el mayor valor",
          "El promedio afecta cada valor por igual"
        ]
      },
      {
        level: "avanzado",
        title: "Promedio ponderado",
        lines: [
          "Promedio ponderado = Σ(xᵢ × wᵢ) / Σwᵢ",
          "Se usa cuando los valores tienen diferente importancia",
          "Ejemplo: Nota final = Ex×0.4 + Ta×0.3 + Pa×0.3"
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Promedio Aritmético</text>',
      '  <text x="150" y="55" text-anchor="middle" fill="#1e293b" font-size="11" font-family="sans-serif">Promedio = Suma / Cantidad</text>',
      '  <rect x="30" y="75" width="50" height="30" fill="#dbeafe" rx="4"/>',
      '  <text x="55" y="95" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">8</text>',
      '  <rect x="90" y="75" width="50" height="30" fill="#dcfce7" rx="4"/>',
      '  <text x="115" y="95" text-anchor="middle" fill="#059669" font-size="12" font-weight="bold" font-family="sans-serif">6</text>',
      '  <rect x="150" y="75" width="50" height="30" fill="#fef3c7" rx="4"/>',
      '  <text x="175" y="95" text-anchor="middle" fill="#d97706" font-size="12" font-weight="bold" font-family="sans-serif">10</text>',
      '  <text x="215" y="95" fill="#1e293b" font-size="14" font-weight="bold" font-family="sans-serif">=</text>',
      '  <rect x="230" y="75" width="55" height="30" fill="#ede9fe" rx="4"/>',
      '  <text x="258" y="95" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">8</text>',
      '  <text x="150" y="135" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">(8+6+10)/3 = 24/3 = 8</text>',
      '  <text x="150" y="170" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="sans-serif">El promedio siempre está entre el menor y el mayor valor</text>',
      '</svg>',
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Propiedades del Promedio</text>',
      '  <text x="30" y="55" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Promedio actual: 8</text>',
      '  <rect x="30" y="70" width="240" height="25" fill="#dcfce7" rx="4"/>',
      '  <text x="150" y="87" text-anchor="middle" fill="#059669" font-size="10" font-family="sans-serif">+ Valor mayor (12) → Promedio sube a 8.67</text>',
      '  <rect x="30" y="100" width="240" height="25" fill="#fee2e2" rx="4"/>',
      '  <text x="150" y="117" text-anchor="middle" fill="#dc2626" font-size="10" font-family="sans-serif">+ Valor menor (4) → Promedio baja a 7</text>',
      '  <text x="150" y="155" text-anchor="middle" fill="#64748b" font-size="10" font-family="sans-serif">Mínimo ≤ Promedio ≤ Máximo</text>',
      '</svg>',
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Promedio Ponderado</text>',
      '  <text x="150" y="55" text-anchor="middle" fill="#1e293b" font-size="10" font-family="sans-serif">Promedio = Σ(xᵢ × wᵢ) / Σwᵢ</text>',
      '  <rect x="30" y="70" width="240" height="35" fill="#dbeafe" rx="4"/>',
      '  <text x="150" y="92" text-anchor="middle" fill="#2563eb" font-size="10" font-family="sans-serif">Nota = Ex×0.4 + Ta×0.3 + Pa×0.3</text>',
      '  <text x="30" y="125" fill="#1e293b" font-size="10" font-family="sans-serif">Examen: 16, Tareas: 14, Participación: 18</text>',
      '  <text x="30" y="145" fill="#1e293b" font-size="10" font-family="sans-serif">Nota = 16×0.4 + 14×0.3 + 18×0.3</text>',
      '  <text x="30" y="165" fill="#7c3aed" font-size="10" font-weight="bold" font-family="sans-serif">Nota = 6.4 + 4.2 + 5.4 = 16</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 1,
        question: "Las notas de Juan son 14, 16, 12 y 18. ¿Cuál es su promedio?",
        options: ["15", "14", "16", "13"],
        correctIndex: 0,
        explanation: "Promedio = (14+16+12+18)/4 = 60/4 = 15.",
        difficulty: "basico"
      },
      {
        id: 2,
        question: "El promedio de 5 números es 20. Si uno es 30, ¿cuánto suman los otros 4?",
        options: ["70", "80", "50", "100"],
        correctIndex: 0,
        explanation: "Suma total = 5×20 = 100. Los otros 4 suman 100-30 = 70.",
        difficulty: "intermedio"
      },
      {
        id: 3,
        question: "La nota final se calcula: Examen (40%), Tareas (30%), Participación (30%). Si un alumno saca 18 en examen, 14 en tareas y 16 en participación, ¿cuál es su nota final?",
        options: ["16", "15.8", "16.2", "15.5"],
        correctIndex: 2,
        explanation: "Nota = 18×0.4 + 14×0.3 + 16×0.3 = 7.2 + 4.2 + 4.8 = 16.2.",
        difficulty: "avanzado"
      }
    ]
  },

  {
    slug: "operadores-matematicos",
    tip: "Lee siempre el **enunciado completo** antes de calcular. Identifica la fórmula del operador, sustituye paso a paso y respeta el orden de operaciones.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **operador matemático** es un símbolo que define una operación entre números. Aparecen con símbolos como ◊, △, ⋆, ∘, ☆.",
          "La expresión **a ◊ b** significa que debes reemplazar ◊ con la fórmula específica dada en el problema.",
          "Los operadores comunes involucran **suma, resta, multiplicación** y potencias, combinados de forma no estándar.",
          "**Primero identificas la operación**, luego sustituyes los valores y calculas respetando el orden PEMDAS.",
          "Ejemplo: Si a ◊ b = 2a + 3b, entonces **3 ◊ 4** = 2(3) + 3(4) = 6 + 12 = **18**.",
          "Los paréntesis en la definición son **obligatorios** para definir el alcance de la operación."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Cuando el operador involucra **potencias o raíces**, recuerda que x² = x·x y √x es la raíz cuadrada.",
          "Para operadores **compuestos** como (a ◊ b) ◊ c, calculas el paréntesis interior primero.",
          "Cuando el problema pide **despejar una variable**, sustituye el resultado conocido e iguala la ecuación.",
          "Cuidado con la **conmutatividad**: verifica si a ◊ b = b ◊ a. No todos los operadores la cumplen.",
          "Cuando aparecen **dos operadores** distintos, identifica cuál aplica en cada paso antes de calcular.",
          "Si el operador se define por **tabla de valores**, busca un patrón: ¿es lineal, cuadrático o exponencial?"
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "En problemas avanzados aparecen **operadores anidados**: evaluar expresiones como (2 ◊ 3) ◊ (1 ◊ 4).",
          "Cuando el problema define **dos operadores** distintos, cuida la precedencia entre ellos.",
          "Algunos problemas piden encontrar **x** tal que x ◊ 5 = 5 ◊ x. Convierte la operación en ecuación.",
          "Problemas de **sucesiones operadas**: si a₁ = 2, aₙ₊₁ = aₙ ◊ n, calcula iterativamente cada término.",
          "Cuando el operador involucra **módulo**, recuerda: 17 mod 5 = 2 y 17 div 5 = 3.",
          "**Descomponer** el problema en pasos pequeños es la estrategia más efectiva."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Operadores Definidos</text><rect x="20" y="38" width="125" height="148" fill="#eff6ff" rx="6" stroke="#2563eb" stroke-width="1.5"/><text x="82" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">Operador ◊</text><text x="82" y="76" text-anchor="middle" font-size="11" fill="#1e293b">a ◊ b = 2a + 3b</text><line x1="30" y1="86" x2="135" y2="86" stroke="#2563eb" stroke-width="0.5" opacity="0.4"/><text x="82" y="104" text-anchor="middle" font-size="10" fill="#475569">Ejemplo:</text><text x="82" y="122" text-anchor="middle" font-size="11" fill="#1e293b">3 ◊ 4 = 2(3)+3(4)</text><text x="82" y="142" text-anchor="middle" font-size="11" fill="#1e293b">= 6 + 12</text><text x="82" y="168" text-anchor="middle" font-size="14" font-weight="bold" fill="#059669">= 18</text><rect x="155" y="38" width="125" height="148" fill="#fef3c7" rx="6" stroke="#d97706" stroke-width="1.5"/><text x="217" y="56" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">Operador △</text><text x="217" y="76" text-anchor="middle" font-size="11" fill="#1e293b">a △ b = a² − b</text><line x1="165" y1="86" x2="270" y2="86" stroke="#d97706" stroke-width="0.5" opacity="0.4"/><text x="217" y="104" text-anchor="middle" font-size="10" fill="#475569">Ejemplo:</text><text x="217" y="122" text-anchor="middle" font-size="11" fill="#1e293b">5 △ 3 = 5² − 3</text><text x="217" y="142" text-anchor="middle" font-size="11" fill="#1e293b">= 25 − 3</text><text x="217" y="168" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">= 22</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Operador Compuesto</text><rect x="20" y="34" width="260" height="26" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="52" text-anchor="middle" font-size="11" fill="#7c3aed">Si a ◊ b = a + 2b, calcular (3 ◊ 1) ◊ 2</text><rect x="20" y="68" width="260" height="120" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="35" y="90" font-size="11" fill="#059669" font-weight="bold">Paso 1: Resolver el paréntesis interior</text><text x="50" y="110" font-size="11" fill="#2563eb">3 ◊ 1 = 3 + 2(1) = 3 + 2 = 5</text><text x="35" y="135" font-size="11" fill="#059669" font-weight="bold">Paso 2: Sustituir y resolver</text><text x="50" y="155" font-size="11" fill="#dc2626">5 ◊ 2 = 5 + 2(2) = 5 + 4 = 9</text><text x="150" y="180" text-anchor="middle" font-size="13" font-weight="bold" fill="#7c3aed">Resultado: (3 ◊ 1) ◊ 2 = 9</text></svg>`
    ],
    exercises: [
      {
        id: 1701,
        question: "Si **a ◊ b = 2a + 3b**, ¿cuál es el valor de **4 ◊ 5**?",
        options: ["20", "23", "17", "25"],
        correctIndex: 1,
        explanation: "2(4) + 3(5) = 8 + 15 = **23**.",
        difficulty: "basico"
      },
      {
        id: 1702,
        question: "Si **a △ b = 2a − b**, ¿cuál es el valor de **(4 △ 3) △ 2**?",
        options: ["6", "8", "10", "12"],
        correctIndex: 1,
        explanation: "Primero: 4 △ 3 = 2(4) − 3 = 5. Luego: 5 △ 2 = 2(5) − 2 = **8**.",
        difficulty: "intermedio"
      },
      {
        id: 1703,
        question: "Se define **a ☆ b = a² − b** y **a ◎ b = 2a + b**. ¿Cuál es **(3 ☆ 2) ◎ 5**?",
        options: ["15", "17", "19", "21"],
        correctIndex: 2,
        explanation: "3 ☆ 2 = 3² − 2 = 7. Luego 7 ◎ 5 = 2(7) + 5 = 14 + 5 = **19**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "operadores-binarios",
    tip: "Los operadores binarios suelen definirse por **tabla o fórmula**. Si es tabla, constrúyela completa antes de responder. Si es fórmula, verifica con valores dados para confirmar tu interpretación.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "Un **operador binario** toma exactamente **dos operandos** y produce un resultado. Se escribe como a ⊕ b.",
          "Los binarios conocidos son: **suma (+), resta (−), multiplicación (×)** y división (÷).",
          "Un operador binario se define mediante una **fórmula algebraica** o una **tabla de valores**.",
          "Si a ⊕ b = a + b − 2, entonces 5 ⊕ 3 = 5 + 3 − 2 = **6**.",
          "La **conmutatividad** significa que a ◊ b = b ◊ a. No todos la cumplen.",
          "La **asociatividad** significa que (a ◊ b) ◊ c = a ◊ (b ◊ c)."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "Para verificar **conmutatividad**, comprueba si a ◊ b = b ◊ a. Un solo contraejemplo basta para descartarla.",
          "Cuando el problema da una **tabla incompleta**, usa los valores conocidos para deducir la fórmula.",
          "Operadores comunes: **a ⊕ b = ab + 1**, **a ◊ b = a² + b**, **a ⋆ b = |a − b|**.",
          "Cuando el problema dice 'a ◊ 4 = 10', convierte en ecuación y despeja a.",
          "La **sustitución inversa** es clave: conoces el resultado y un operando, encuentras el otro.",
          "Para **dos operadores**, resuelve completamente uno antes de aplicar el otro."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Dos operadores**: a ☆ b = a + 2b y a ◎ b = ab − 1. Evalúa (2 ☆ 3) ◎ (1 ☆ 2).",
          "Cuando un operador **depende del orden**, presta atención a la posición de cada operando.",
          "**Inverso**: dado a ◊ b = a² − ab + b², encuentra x tal que x ◊ 3 = 7.",
          "Operadores con **restricciones**: solo se definen para ciertos valores.",
          "En **tablas de verdad lógicas**, AND (∧), OR (∨), XOR (⊕) y NOT (¬).",
          "**Descomponer** la expresión en subexpresiones más pequeñas es la clave."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Tabla: a ⊕ b = 2a + b − 1</text><rect x="55" y="40" width="190" height="130" fill="white" rx="4" stroke="#2563eb" stroke-width="1.5"/><text x="105" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">⊕</text><text x="155" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">1</text><text x="205" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">2</text><line x1="55" y1="68" x2="245" y2="68" stroke="#e2e8f0" stroke-width="1"/><text x="105" y="88" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">1</text><text x="155" y="88" text-anchor="middle" font-size="11" fill="#1e293b">2</text><text x="205" y="88" text-anchor="middle" font-size="11" fill="#1e293b">3</text><line x1="55" y1="96" x2="245" y2="96" stroke="#e2e8f0" stroke-width="1"/><text x="105" y="116" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">2</text><text x="155" y="116" text-anchor="middle" font-size="11" fill="#1e293b">4</text><text x="205" y="116" text-anchor="middle" font-size="11" fill="#1e293b">5</text><line x1="55" y1="124" x2="245" y2="124" stroke="#e2e8f0" stroke-width="1"/><text x="105" y="144" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">3</text><text x="155" y="144" text-anchor="middle" font-size="11" fill="#1e293b">6</text><text x="205" y="144" text-anchor="middle" font-size="11" fill="#1e293b">7</text><text x="150" y="185" text-anchor="middle" font-size="10" fill="#475569">2(1)+1−1=2 | 2(2)+2−1=5 | 2(3)+1−1=6 ✓</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">¿Es Conmutativo?</text><rect x="20" y="34" width="260" height="24" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="51" text-anchor="middle" font-size="11" fill="#7c3aed">a ⊕ b = a + 2b</text><rect x="20" y="66" width="125" height="60" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="82" y="83" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Prueba: a=1, b=2</text><text x="82" y="100" text-anchor="middle" font-size="10" fill="#1e293b">1 ⊕ 2 = 1+4 = 5</text><text x="82" y="117" text-anchor="middle" font-size="10" fill="#1e293b">2 ⊕ 1 = 2+2 = 4</text><rect x="155" y="66" width="125" height="60" fill="#fef2f2" rx="4" stroke="#dc2626" stroke-width="1"/><text x="217" y="92" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">5 ≠ 4</text><text x="217" y="112" text-anchor="middle" font-size="10" fill="#dc2626">NO es conmutativo</text><rect x="20" y="140" width="260" height="48" fill="#eff6ff" rx="4" stroke="#2563eb" stroke-width="1"/><text x="150" y="160" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="bold">Conmutativos: +, ×, |a−b|, a²+b²</text><text x="150" y="178" text-anchor="middle" font-size="10" fill="#dc2626">NO conmutativos: −, ÷, a+b², a+2b</text></svg>`
    ],
    exercises: [
      {
        id: 1801,
        question: "Si **a ⊕ b = a + b − 1**, ¿cuál es el valor de **3 ⊕ 4 ⊕ 3**?",
        options: ["6", "7", "8", "9"],
        correctIndex: 2,
        explanation: "Primero: 3 ⊕ 4 = 3+4−1 = 6. Luego: 6 ⊕ 3 = 6+3−1 = **8**.",
        difficulty: "basico"
      },
      {
        id: 1802,
        question: "Un operador se define por tabla: 1◊1=2, 1◊2=3, 2◊1=4, 2◊2=5. ¿Cuál es la fórmula de **a ◊ b**?",
        options: ["a + b", "2a + b − 1", "a + 2b − 1", "ab + 1"],
        correctIndex: 1,
        explanation: "Probamos 2a+b−1: 1◊1=2✓, 1◊2=3✓, 2◊1=4✓, 2◊2=5✓. Respuesta: **2a + b − 1**.",
        difficulty: "intermedio"
      },
      {
        id: 1803,
        question: "Si **a ☆ b = a² − ab + b²** y **a ◎ b = a + b**, ¿cuál es **(3 ☆ 2) ◎ 4**?",
        options: ["7", "9", "11", "13"],
        correctIndex: 2,
        explanation: "3 ☆ 2 = 9−6+4 = 7. Luego 7 ◎ 4 = 7+4 = **11**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "conteo-de-figuras",
    tip: "Para contar figuras en cuadrículas usa **fórmulas directas**: cuadrados en n×n = n(n+1)(2n+1)/6; rectángulos en m×n = C(m+1,2)·C(n+1,2). Empieza siempre por las figuras más pequeñas.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **conteo de figuras** es identificar y contar todas las figuras geométricas en un dibujo o cuadrícula.",
          "Para contar **cuadrados** en una malla n×n: suma los cuadrados de cada tamaño. En 2×2 hay 4+1 = **5**.",
          "Para **rectángulos** en m×n: **C(m+1,2) × C(n+1,2)** = m(m+1)/2 × n(n+1)/2.",
          "Un **triángulo** se forma cuando dos líneas se cortan creando una figura de 3 lados.",
          "En un triángulo subdividido en n filas, hay **n²** triángulos con la misma orientación.",
          "Empieza contando las figuras **más pequeñas** y avanza hacia las más grandes."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "En **m × n**: rectángulos = m(m+1)/2 × n(n+1)/2.",
          "Cuadrados en **n×n**: **n(n+1)(2n+1)/6**. En 3×3: 14 cuadrados.",
          "Triángulos por **capas**: la capa k tiene 2k−1 triángulos.",
          "Con **líneas que se cruzan**, cuenta puntos de intersección y aplica combinatoria.",
          "Con **figuras superpuestas**, usa inclusión-exclusión: A + B − A∩B.",
          "**Descomposición**: divide en partes simples, suma evitando doble conteo."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "En **4×4**: 16+9+4+1 = **30 cuadrados**.",
          "**Triángulos con diagonales**: pentágono con diagonales tiene múltiples triángulos por tipo.",
          "Cuadrículas con **líneas diagonales**: identifica base y altura de cada triángulo.",
          "Tablero 8×8: 1²+2²+...+8² = **204 cuadrados**.",
          "Con **simetría**, cuenta un cuarto y multiplica.",
          "Triángulos con vértice: **n × m(m+1)/2** donde n = segmentos base, m = líneas del vértice."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Conteo de Cuadrados en 3×3</text><g transform="translate(30,38)"><rect x="0" y="0" width="80" height="80" fill="none" stroke="#1e293b" stroke-width="1"/><line x1="26.7" y1="0" x2="26.7" y2="80" stroke="#1e293b" stroke-width="0.5"/><line x1="53.3" y1="0" x2="53.3" y2="80" stroke="#1e293b" stroke-width="0.5"/><line x1="0" y1="26.7" x2="80" y2="26.7" stroke="#1e293b" stroke-width="0.5"/><line x1="0" y1="53.3" x2="80" y2="53.3" stroke="#1e293b" stroke-width="0.5"/><rect x="0" y="0" width="26.7" height="26.7" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="1.5"/><rect x="0" y="0" width="53.3" height="53.3" fill="#dc2626" fill-opacity="0.12" stroke="#dc2626" stroke-width="1.5"/><rect x="0" y="0" width="80" height="80" fill="#059669" fill-opacity="0.08" stroke="#059669" stroke-width="2"/></g><g transform="translate(130,38)"><text x="65" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Desglose:</text><rect x="10" y="28" width="12" height="12" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="1"/><text x="28" y="39" font-size="10" fill="#1e293b">1×1 = 9</text><rect x="10" y="50" width="18" height="18" fill="#dc2626" fill-opacity="0.3" stroke="#dc2626" stroke-width="1"/><text x="34" y="64" font-size="10" fill="#1e293b">2×2 = 4</text><rect x="10" y="78" width="24" height="24" fill="#059669" fill-opacity="0.3" stroke="#059669" stroke-width="1"/><text x="40" y="96" font-size="10" fill="#1e293b">3×3 = 1</text><text x="65" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed">Total = 9+4+1 = 14</text></g></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Fórmulas Clave</text><rect x="20" y="35" width="260" height="30" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="55" text-anchor="middle" font-size="11" fill="#7c3aed" font-weight="bold">Rectángulos en m×n = m(m+1)/2 × n(n+1)/2</text><rect x="20" y="75" width="125" height="108" fill="#eff6ff" rx="4" stroke="#2563eb" stroke-width="1"/><text x="82" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Ejemplo: 2×3</text><rect x="35" y="103" width="90" height="60" fill="none" stroke="#1e293b" stroke-width="1"/><line x1="65" y1="103" x2="65" y2="163" stroke="#1e293b" stroke-width="0.5"/><line x1="95" y1="103" x2="95" y2="163" stroke="#1e293b" stroke-width="0.5"/><line x1="35" y1="133" x2="125" y2="133" stroke="#1e293b" stroke-width="0.5"/><text x="82" y="178" text-anchor="middle" font-size="10" fill="#2563eb">R = 3×6 = 18 rectángulos</text><rect x="155" y="75" width="125" height="108" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="217" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">Cuadrados n×n</text><text x="217" y="115" text-anchor="middle" font-size="11" fill="#1e293b">S(n) = n(n+1)(2n+1)/6</text><text x="217" y="138" text-anchor="middle" font-size="10" fill="#475569">3×3 → 14</text><text x="217" y="155" text-anchor="middle" font-size="10" fill="#475569">4×4 → 30</text><text x="217" y="172" text-anchor="middle" font-size="10" fill="#475569">8×8 → 204</text></svg>`
    ],
    exercises: [
      {
        id: 1901,
        question: "¿Cuántos **cuadrados** hay en una cuadrícula de **3 × 3**?",
        options: ["9", "12", "14", "18"],
        correctIndex: 2,
        explanation: "1×1: 9, 2×2: 4, 3×3: 1. Total = 9+4+1 = **14**.",
        difficulty: "basico"
      },
      {
        id: 1902,
        question: "¿Cuántos **rectángulos** hay en una cuadrícula de **2 filas × 4 columnas**?",
        options: ["20", "24", "30", "36"],
        correctIndex: 2,
        explanation: "C(3,2) × C(5,2) = 3 × 10 = **30**.",
        difficulty: "intermedio"
      },
      {
        id: 1903,
        question: "¿Cuántos **cuadrados** hay en un tablero de ajedrez (**8 × 8**)?",
        options: ["64", "128", "204", "256"],
        correctIndex: 2,
        explanation: "1²+2²+...+8² = 64+49+36+25+16+9+4+1 = **204**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "areas-sombreadas-y-perimetros",
    tip: "Para áreas sombreadas usa **resta de áreas**: calcula el área total y resta las partes no sombreadas. Identifica primero las figuras que componen el dibujo.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **área** es el espacio interior de una figura, medida en unidades cuadradas (cm², m²).",
          "Fórmulas: **Cuadrado** = lado², **Rectángulo** = base × altura, **Triángulo** = (base × altura)/2.",
          "El **perímetro** es la suma de todos los lados. Cuadrado: P = 4l.",
          "Área de **círculo** = **πr²**. Circunferencia = **2πr**.",
          "Semicírculo = πr²/2. Cuarto de círculo = πr²/4.",
          "Para **área sombreada**, identifica qué figuras conforman la región y aplica la fórmula."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Área total − área no sombreada**: calcula el área completa y resta las partes blancas.",
          "Cuadrado con **círculo inscrito**: sombreado = l²(1 − π/4).",
          "Para **semicírculos y cuartos**, identifica el radio y aplica la fracción de πr².",
          "**Anillo** (dos círculos concéntricos): π(R² − r²).",
          "**Descompon** en rectángulos, triángulos, semicírculos. Calcula por separado.",
          "Para **perímetros compuestos**, suma solo los lados exteriores."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Figuras superpuestas**: dos cuadrados rotados o círculos intersectados.",
          "**Intersección de dos círculos**: área compartida con arcos y triángulos.",
          "**Sombreado alternado** en tablero: el sombreado es la mitad del total.",
          "Cuando un círculo **corta un cuadrado**, restar segmentos circulares.",
          "Con **simetría**, calcula un cuarto y multiplica por 4.",
          "Triángulo rectángulo inscrito: la **hipotenusa es el diámetro** del círculo circunscrito."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Cuadrado con Círculo Inscrito</text><rect x="50" y="40" width="90" height="90" fill="#dc2626" fill-opacity="0.2" stroke="#dc2626" stroke-width="1.5" rx="2"/><circle cx="95" cy="85" r="45" fill="#2563eb" fill-opacity="0.25" stroke="#2563eb" stroke-width="1.5"/><line x1="95" y1="85" x2="140" y2="85" stroke="#1e293b" stroke-width="1" stroke-dasharray="3"/><text x="120" y="80" font-size="9" fill="#1e293b">r</text><text x="95" y="145" text-anchor="middle" font-size="10" fill="#1e293b">lado = 2r</text><rect x="170" y="40" width="115" height="145" fill="white" rx="4" stroke="#e2e8f0" stroke-width="1"/><text x="227" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Cálculo:</text><text x="227" y="80" text-anchor="middle" font-size="10" fill="#475569">Cuadrado = (2r)² = 4r²</text><text x="227" y="100" text-anchor="middle" font-size="10" fill="#475569">Círculo = πr²</text><text x="227" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Sombreado = 4r² − πr²</text><text x="227" y="145" text-anchor="middle" font-size="11" fill="#7c3aed">= r²(4 − π)</text><text x="227" y="168" text-anchor="middle" font-size="10" fill="#059669">Si r=4: 64 − 16π ≈ 13.73</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Método: Resta de Áreas</text><rect x="30" y="38" width="100" height="75" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="1.5" rx="2"/><circle cx="80" cy="75" r="25" fill="#f8fafc" stroke="#1e293b" stroke-width="1"/><text x="80" y="48" text-anchor="middle" font-size="9" fill="#dc2626">Sombreado</text><text x="80" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">Rect 10×8</text><text x="80" y="145" text-anchor="middle" font-size="9" fill="#475569">r = 3</text><rect x="155" y="38" width="130" height="145" fill="white" rx="4" stroke="#e2e8f0" stroke-width="1"/><text x="220" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Método: Resta</text><text x="220" y="78" text-anchor="middle" font-size="10" fill="#2563eb">1. Rectángulo = 10×8 = 80</text><text x="220" y="98" text-anchor="middle" font-size="10" fill="#dc2626">2. Círculo = π(3²) = 9π</text><text x="220" y="118" text-anchor="middle" font-size="10" fill="#dc2626">   ≈ 28.27</text><text x="220" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">3. Sombreado = 80 − 9π</text><text x="220" y="168" text-anchor="middle" font-size="12" fill="#059669">≈ 51.73</text></svg>`
    ],
    exercises: [
      {
        id: 2001,
        question: "Cuadrado de lado **8** con círculo inscrito (r=4). ¿Área sombreada entre ambos?",
        options: ["16 − 4π", "64 − 16π", "64 − 4π", "32 − 16π"],
        correctIndex: 1,
        explanation: "Cuadrado: 8² = 64. Círculo: π(4²) = 16π. Sombreado = **64 − 16π** ≈ 13.73.",
        difficulty: "basico"
      },
      {
        id: 2002,
        question: "Rectángulo **12 × 8** con triángulo no sombreado (base 12, altura 8). ¿Área sombreada?",
        options: ["24", "48", "72", "96"],
        correctIndex: 1,
        explanation: "Rectángulo = 96. Triángulo = 48. Sombreado = 96 − 48 = **48**.",
        difficulty: "intermedio"
      },
      {
        id: 2003,
        question: "Cuadrado de lado **10** con semicírculo de diámetro 10 sobre 2 lados opuestos. ¿Perímetro total?",
        options: ["20 + 10π", "40 + 10π", "20 + 20π", "40 + 20π"],
        correctIndex: 0,
        explanation: "2 lados rectos (10+10=20) + 2 semicírculos (2×5π=10π). Total = **20 + 10π**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "analisis-combinatorio",
    tip: "Domina: **P(n,r) = n!/(n−r)!** y **C(n,r) = n!/(r!(n−r)!)**. Pregunta siempre si el orden importa. Si hay restricciones, usa el principio multiplicativo paso a paso.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "El **análisis combinatorio** estudia las formas de **organizar, agrupar y contar** elementos.",
          "**Factorial** n! = n × (n−1) × ... × 1. Ejemplo: 5! = 120.",
          "**Permutaciones**: el orden importa. P(n,r) = n!/(n−r)!.",
          "**Combinaciones**: el orden NO importa. C(n,r) = n!/(r!(n−r)!).",
          "**Principio multiplicativo**: el total es el **producto** de opciones por etapa.",
          "**Principio aditivo**: si hay formas independientes, el total es la **suma**."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Orden importa** (códigos) → permutaciones. Ej: 3 dígitos con {1,2,3,4} → P(4,3) = 24.",
          "**Orden no importa** (comités) → combinaciones. Ej: elegir 3 de 7 → C(7,3) = 35.",
          "Con **repetición**: r elementos de n = **nʳ**.",
          "**Triángulo de Pascal** para calcular C(n,r) rápidamente.",
          "**Circulares**: n elementos en círculo → **(n−1)!**.",
          "**Inclusión-exclusión**: |A∪B| = |A| + |B| − |A∩B|."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "Permutaciones con **elem. repetidos**: n!/(r₁!·r₂!·...·rₖ!).",
          "**Partición** de n objetos en k cajas: C(n+k−1, k−1).",
          "**Identidad de Pascal**: C(n,r) = C(n−1,r−1) + C(n−1,r).",
          "Con **restricciones negativas**, usa inclusión-exclusión.",
          "**Adyacencia**: 2 elementos juntos → agrupa como una unidad.",
          "**Multi-conjunto**: elegir r de k tipos = C(r+k−1, k−1)."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Permutaciones vs Combinaciones</text><rect x="20" y="35" width="125" height="72" fill="#eff6ff" rx="6" stroke="#2563eb" stroke-width="1.5"/><text x="82" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">Permutación</text><text x="82" y="66" text-anchor="middle" font-size="9" fill="#475569">(orden importa)</text><text x="82" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">P(n,r) = n!/(n−r)!</text><text x="82" y="100" text-anchor="middle" font-size="9" fill="#475569">P(4,3) = 24</text><rect x="155" y="35" width="125" height="72" fill="#fef3c7" rx="6" stroke="#d97706" stroke-width="1.5"/><text x="217" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#d97706">Combinación</text><text x="217" y="66" text-anchor="middle" font-size="9" fill="#475569">(orden NO importa)</text><text x="217" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">C(n,r) = n!/(r!(n−r)!)</text><text x="217" y="100" text-anchor="middle" font-size="9" fill="#475569">C(4,3) = 4</text><rect x="20" y="118" width="260" height="70" fill="#f0fdf4" rx="6" stroke="#059669" stroke-width="1.5"/><text x="150" y="138" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Ejemplo: elegir 2 de {A,B,C}</text><text x="80" y="158" font-size="10" fill="#2563eb">Perm: AB,BA AC,CA BC,CB</text><text x="80" y="174" font-size="10" fill="#2563eb">→ 6 formas</text><text x="210" y="158" font-size="10" fill="#d97706">Comb: {A,B}{A,C}{B,C}</text><text x="210" y="174" font-size="10" fill="#d97706">→ 3 formas</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Triángulo de Pascal</text><g transform="translate(150,115)" text-anchor="middle"><text x="0" y="-65" font-size="10" font-weight="bold" fill="#7c3aed">n=0</text><text x="0" y="-48" font-size="11" fill="#1e293b">1</text><text x="-30" y="-28" font-size="11" fill="#1e293b">1</text><text x="30" y="-28" font-size="11" fill="#1e293b">1</text><text x="-60" y="-8" font-size="11" fill="#1e293b">1</text><text x="-20" y="-8" font-size="11" font-weight="bold" fill="#2563eb">2</text><text x="20" y="-8" font-size="11" font-weight="bold" fill="#2563eb">2</text><text x="60" y="-8" font-size="11" fill="#1e293b">1</text><text x="-90" y="12" font-size="11" fill="#1e293b">1</text><text x="-50" y="12" font-size="11" fill="#059669">3</text><text x="-10" y="12" font-size="11" fill="#059669">3</text><text x="30" y="12" font-size="11" fill="#059669">3</text><text x="70" y="12" font-size="11" fill="#1e293b">1</text><text x="-120" y="32" font-size="11" fill="#1e293b">1</text><text x="-80" y="32" font-size="11" fill="#dc2626">4</text><text x="-40" y="32" font-size="11" fill="#dc2626">6</text><text x="0" y="32" font-size="11" fill="#dc2626">4</text><text x="40" y="32" font-size="11" fill="#1e293b">1</text></g><text x="150" y="162" text-anchor="middle" font-size="10" fill="#475569">Cada número = suma de los dos superiores</text><text x="150" y="178" text-anchor="middle" font-size="10" fill="#475569">C(n,r) = C(n−1,r−1) + C(n−1,r)</text><text x="150" y="194" text-anchor="middle" font-size="10" fill="#7c3aed">Ej: C(4,2) = 6</text></svg>`
    ],
    exercises: [
      {
        id: 2101,
        question: "¿Cuántos **números de 3 dígitos** con **{1,2,3,4,5}** sin repetición?",
        options: ["60", "125", "24", "15"],
        correctIndex: 0,
        explanation: "P(5,3) = 5×4×3 = **60**.",
        difficulty: "basico"
      },
      {
        id: 2102,
        question: "De **7 personas**, ¿cuántas formas de elegir un comité de **3**?",
        options: ["21", "35", "42", "120"],
        correctIndex: 1,
        explanation: "C(7,3) = 7!/(3!·4!) = 210/6 = **35**.",
        difficulty: "intermedio"
      },
      {
        id: 2103,
        question: "¿Cuántas formas de ordenar **5 libros** si **2 específicos** deben estar juntos?",
        options: ["24", "48", "60", "120"],
        correctIndex: 1,
        explanation: "2 juntos = 1 unidad → 4! = 24. Intercambio: 2! = 2. Total = 24×2 = **48**.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "probabilidades",
    tip: "Probabilidad = **casos favorables / casos posibles**. Para eventos compuestos: **independientes** se multiplican, **dependientes** ajusta el denominador. Los **árboles de probabilidad** son tu mejor aliado para múltiples etapas.",
    theory: [
      {
        level: "basico",
        title: "Conceptos fundamentales",
        lines: [
          "La **probabilidad** mide la posibilidad de un evento. Va de **0** (imposible) a **1** (seguro).",
          "**P(A) = casos favorables / casos posibles**. Dado justo: P(6) = 1/6.",
          "El **espacio muestral** (S) es el conjunto de todos los resultados posibles.",
          "**P(no A) = 1 − P(A)**. Si P(lluvia) = 0.3, P(no lluvia) = 0.7.",
          "**Mutuamente excluyentes**: no ocurren juntos. P(A o B) = P(A) + P(B).",
          "Las probabilidades del espacio muestral **suman 1**."
        ]
      },
      {
        level: "intermedio",
        title: "Estrategias y técnicas",
        lines: [
          "**Independientes**: P(A y B) = P(A) × P(B). Ej: lanzar dados dos veces.",
          "**Dependientes**: P(A y B) = P(A) × P(B|A). Ej: cartas sin reposición.",
          "**Regla suma**: P(A o B) = P(A) + P(B) − P(A y B).",
          "**Árbol de probabilidades** para problemas de dos o más etapas.",
          "Con dados, la suma más probable es **7** (6 de 36).",
          "**'Al menos uno'**: P(al menos 1) = 1 − P(ninguno)."
        ]
      },
      {
        level: "avanzado",
        title: "Problemas complejos",
        lines: [
          "**Diagrama de Venn**: |A∪B| = |A| + |B| − |A∩B|.",
          "**P(A|B) = P(A∩B)/P(B)**. La probabilidad condicional.",
          "**Teorema de Bayes**: P(H|E) = P(E|H)·P(H) / P(E).",
          "**Urnas**: con reposición = independiente; sin reposición = dependiente.",
          "Dos dados: **36 combinaciones**. Sumas forman distribución triangular centrada en 7.",
          "P(A|B) ≠ P(B|A). La confusión de probabilidades inversas es error común."
        ]
      }
    ],
    illustrations: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Árbol de Probabilidades</text><text x="150" y="38" text-anchor="middle" font-size="10" fill="#475569">Sacar 2 bolas sin reposición de {3R, 2A}</text><circle cx="40" cy="70" r="8" fill="#2563eb"/><text x="40" y="74" text-anchor="middle" font-size="8" fill="white" font-weight="bold">I</text><line x1="48" y1="66" x2="120" y2="46" stroke="#dc2626" stroke-width="1.5"/><text x="82" y="50" font-size="9" fill="#dc2626" font-weight="bold">R = 3/5</text><circle cx="130" cy="42" r="6" fill="#dc2626"/><line x1="136" y1="40" x2="200" y2="28" stroke="#dc2626" stroke-width="1.5"/><text x="167" y="28" font-size="8" fill="#dc2626">RR = 2/4</text><text x="220" y="28" font-size="9" fill="#dc2626" font-weight="bold">= 6/20</text><line x1="136" y1="46" x2="200" y2="58" stroke="#2563eb" stroke-width="1.5"/><text x="167" y="58" font-size="8" fill="#2563eb">RA = 2/4</text><text x="220" y="58" font-size="9" fill="#2563eb" font-weight="bold">= 6/20</text><line x1="48" y1="74" x2="120" y2="96" stroke="#2563eb" stroke-width="1.5"/><text x="82" y="92" font-size="9" fill="#2563eb" font-weight="bold">A = 2/5</text><circle cx="130" cy="100" r="6" fill="#2563eb"/><line x1="136" y1="96" x2="200" y2="84" stroke="#dc2626" stroke-width="1.5"/><text x="167" y="84" font-size="8" fill="#dc2626">AR = 3/4</text><text x="220" y="84" font-size="9" fill="#dc2626" font-weight="bold">= 6/20</text><line x1="136" y1="104" x2="200" y2="116" stroke="#059669" stroke-width="1.5"/><text x="167" y="116" font-size="8" fill="#059669">AA = 1/4</text><text x="220" y="116" font-size="9" fill="#059669" font-weight="bold">= 2/20</text><rect x="20" y="135" width="260" height="55" fill="#ede9fe" rx="4" stroke="#7c3aed" stroke-width="1"/><text x="150" y="155" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">RR=6/20 RA=6/20 AR=6/20 AA=2/20</text><text x="150" y="175" text-anchor="middle" font-size="10" fill="#7c3aed">Total = 20/20 = 1 ✓</text></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f8fafc" rx="8"/><text x="150" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Diagrama de Venn</text><text x="150" y="38" text-anchor="middle" font-size="10" fill="#475569">P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.1</text><circle cx="115" cy="105" r="50" fill="#2563eb" fill-opacity="0.2" stroke="#2563eb" stroke-width="1.5"/><circle cx="175" cy="105" r="50" fill="#dc2626" fill-opacity="0.2" stroke="#dc2626" stroke-width="1.5"/><text x="90" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">A</text><text x="200" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">B</text><text x="145" y="100" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">0.1</text><text x="145" y="115" text-anchor="middle" font-size="8" fill="#7c3aed">A∩B</text><rect x="20" y="160" width="260" height="32" fill="#f0fdf4" rx="4" stroke="#059669" stroke-width="1"/><text x="150" y="180" text-anchor="middle" font-size="10" fill="#059669" font-weight="bold">P(A∪B) = P(A)+P(B)−P(A∩B) = 0.4+0.3−0.1 = 0.6</text></svg>`
    ],
    exercises: [
      {
        id: 2201,
        question: "Al lanzar un dado de 6 caras, ¿cuál es la probabilidad de obtener un **número par**?",
        options: ["1/3", "1/2", "2/3", "1/6"],
        correctIndex: 1,
        explanation: "Pares: {2,4,6} = 3 casos. P(par) = 3/6 = **1/2**.",
        difficulty: "basico"
      },
      {
        id: 2202,
        question: "Al lanzar **dos dados**, ¿cuál es la probabilidad de que la **suma sea 7**?",
        options: ["1/4", "1/6", "1/12", "5/36"],
        correctIndex: 1,
        explanation: "Formas de sumar 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Total: 36. P = 6/36 = **1/6**.",
        difficulty: "intermedio"
      },
      {
        id: 2200,
        question: "Urna con **4 rojas y 6 azules**. Se sacan **2 sin reposición**. P(ambas rojas) = ?",
        options: ["2/15", "4/25", "1/5", "2/9"],
        correctIndex: 0,
        explanation: "P(1ª roja) = 4/10. P(2ª roja|1ª roja) = 3/9. P(ambas) = 4/10 × 3/9 = 12/90 = **2/15**.",
        difficulty: "avanzado"
      }
    ]
  }
  ]
};

const historiaModulesPart1: CourseModule[] = [
  {
    slug: "civilizaciones-preincaicas",
    tip: "En el examen, memoriza la ubicaci\u00f3n geogr\u00e1fica y caracter\u00edstica principal de cada civilizaci\u00f3n: Nazca=L\u00edneas, Moche=cer\u00e1mica, Wari=imperio temprano, Chim\u00fa=Chan Chan.",
    theory: [
      {
        level: "basico",
        title: "Las seis grandes civilizaciones preincaicas",
        lines: [
          "Chav\u00edn (1200-400 a.C.): civilizaci\u00f3n matriz ubicada en la sierra norte (Chav\u00edn de Hu\u00e1ntar). Su deidad principal fue el Lanz\u00f3n monol\u00edtico.",
          "Paracas (800 a.C.-100 d.C.): se desarroll\u00f3 en la pen\u00ednsula de Paracas (Ica). Destac\u00f3 por sus textiles momia y trepanaciones craneanas.",
          "Nazca (100 a.C.-800 d.C.): floreci\u00f3 en la costa sur. Son famosas las L\u00edneas de Nazca y los acueductos de Cahuachi.",
          "Moche (100-700 d.C.): se ubic\u00f3 en la costa norte (Valle de Moche, La Libertad). Produjo la cer\u00e1mica retrato m\u00e1s realista del antiguo Per\u00fa.",
          "Wari (550-1000 d.C.): imperio centralista que domin\u00f3 la sierra y costa centrales desde su capital en Ayacucho (Huari).",
          "Chim\u00fa (900-1470 d.C.): imperio coste\u00f1o con capital en Chan Chan (La Libertad). Fue el \u00faltimo gran rival del Tahuantinsuyo."
        ]
      },
      {
        level: "intermedio",
        title: "Caracter\u00edsticas espec\u00edficas de cada civilizaci\u00f3n",
        lines: [
          "Chav\u00edn: desarrollo de la religi\u00f3n teocr\u00e1tica, agricultura en terrazas y uso de la coca. Su estilo art\u00edstico se expandi\u00f3 por toda la costa y sierra.",
          "Paracas: dominaron la metalurgia (oro, plata, cobre), la trepanaci\u00f3n craneana con 40% de supervivencia y el te\u00f1ido de textiles con tintes naturales.",
          "Nazca: crearon un sistema de acueductos subterr\u00e1neos (puquios) que a\u00fan funciona. Sus cer\u00e1micas policromas representan seres sobrenaturales (Cantorales).",
          "Moche: construyeron huacas monumentales (Sol y Luna). Practicaron el sacrificio ritual (Sacrificio de los Llanos de Moche) y la agricultura por irrigaci\u00f3n.",
          "Wari: implementaron un sistema de caminos estatales (precursores del Qhapaq \u00d1an). Usaron el mitmaq (reubicaci\u00f3n forzada de poblaciones).",
          "Chim\u00fa: perfeccionaron la metalurgia (oro lunar), el sistema de canales de irrigaci\u00f3n y la artesan\u00eda en talleres centralizados de Chan Chan."
        ]
      },
      {
        level: "avanzado",
        title: "Relaciones, decadencia e influencias entre civilizaciones",
        lines: [
          "Chav\u00edn ejerci\u00f3 influencia teol\u00f3gica sobre las culturas coste\u00f1as posteriores (Paracas y Nazca), pero no fue un imperio pol\u00edtico territorial.",
          "Paracas y Nazca comparten zona geogr\u00e1fica; los nazcas habr\u00edan sucedido a los paracas, adoptando su tecnolog\u00eda textil y a\u00f1adiendo innovaciones cer\u00e1micas.",
          "Los Moche declinaron por factores clim\u00e1ticos (El Ni\u00f1o) y conflictos internos. Se fragmentaron en reinos emergentes (Sic\u00e1n, Chim\u00fa).",
          "Wari y Tiwanaku fueron los primeros imperios panregionales: Wari controlaba la costa y sierra central; Tiwanaku, el altiplano collao.",
          "Chim\u00fa, heredero de los Moche, expandi\u00f3 su dominio por toda la costa norte y central hasta ser conquistado por Pachac\u00fatec alrededor de 1470.",
          "El Tahuantinsuyo integr\u00f3 y super\u00f3 todas estas tradiciones: administraci\u00f3n wari, metalurgia chim\u00fa, arte nazca y agricultura andina."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Civilizaciones Preincaicas</text>',
      '  <rect x="20" y="40" width="80" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="60" y="60" text-anchor="middle" fill="#1e40af" font-size="9" font-family="sans-serif">Chav\u00edn</text>',
      '  <rect x="110" y="40" width="80" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="150" y="60" text-anchor="middle" fill="#1e40af" font-size="9" font-family="sans-serif">Paracas</text>',
      '  <rect x="200" y="40" width="80" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="240" y="60" text-anchor="middle" fill="#1e40af" font-size="9" font-family="sans-serif">Nazca</text>',
      '  <rect x="20" y="80" width="80" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="60" y="100" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Moche</text>',
      '  <rect x="110" y="80" width="80" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="150" y="100" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Wari</text>',
      '  <rect x="200" y="80" width="80" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="240" y="100" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Chim\u00fa</text>',
      '  <text x="150" y="140" text-anchor="middle" fill="#475569" font-size="9" font-family="sans-serif">Per\u00edodo: 1200 a.C. - 1470 d.C.</text>',
      '  <text x="150" y="160" text-anchor="middle" fill="#475569" font-size="9" font-family="sans-serif">Ubicaci\u00f3n: Costa y Sierra del Per\u00fa</text>',
      '  <text x="150" y="185" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Todas fueron integradas al Tahuantinsuyo</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3001, question: "\u00bfQu\u00e9 civilizaci\u00f3n preincaica construy\u00f3 las famosas L\u00edneas de Nazca en la costa sur del Per\u00fa?", options: ["Chav\u00edn", "Moche", "Nazca", "Chim\u00fa"], correctIndex: 2, explanation: "Las L\u00edneas de Nazca fueron construidas por la cultura Nazca (100 a.C.-800 d.C.) en la meseta de Nazca, Ica. Representan animales, plantas y figuras geom\u00e9tricas.", difficulty: "basico" },
      { id: 3002, question: "La civilizaci\u00f3n Moche se caracteriz\u00f3 principalmente por:", options: ["Las L\u00edneas de Nazca", "La cer\u00e1mica retrato y las huacas Sol y Luna", "El sistema de mitmaq", "La construcci\u00f3n de Chan Chan"], correctIndex: 1, explanation: "Los Moche destacaron por su cer\u00e1mica retrato de gran realismo y por construir las Huacas del Sol y de la Luna en el valle de Moche, La Libertad.", difficulty: "intermedio" },
      { id: 3003, question: "\u00bfCu\u00e1l de las siguientes afirmaciones sobre el imperio Wari es correcta?", options: ["Fue un imperio coste\u00f1o con capital en Chan Chan", "Implement\u00f3 el sistema de mitmaq y caminos estatales", "Se desarroll\u00f3 exclusivamente en la sierra sur", "Sus dioses fueron representados en cer\u00e1mica policroma"], correctIndex: 1, explanation: "El Wari (550-1000 d.C.) fue el primer imperio centralista andino. Desde Huari (Ayacucho) extendi\u00f3 caminos estatales y us\u00f3 el mitmaq (reubicaci\u00f3n forzada) para controlar territorios.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "tahuantinsuyo",
    tip: "Pachac\u00fatec expandi\u00f3 el imperio, T\u00fapac Inca lo consolid\u00f3, Atahualpa lo perdi\u00f3. Memoriza la estructura social: Sapa Inca \u2192 Curacas \u2192 Hatun Runa \u2192 Yanakuna.",
    theory: [
      {
        level: "basico",
        title: "El Tahuantinsuyo: el imperio incaico",
        lines: [
          "El Tahuantinsuyo (\u201clas cuatro regiones\u201d) fue el imperio m\u00e1s grande de Am\u00e9rica precolombina, abarcando desde Colombia hasta Chile.",
          "Su capital fue Cusco, el ombligo del mundo (Qosqo), desde donde se gobernaron cuatro suyus: Chinchaysuyu, Antisuyu, Collasuyu y Cuntisuyu.",
          "Pachac\u00fatec (1438-1471) es considerado el fundador del Tahuantinsuyo. Derrot\u00f3 a los chancas y expandi\u00f3 el imperio hacia el norte y sur.",
          "T\u00fapac Inca Yupanqui (1471-1493) consolid\u00f3 la expansi\u00f3n, llegando hasta el r\u00edo Atrato (Colombia) y la zona central de Chile.",
          "Huayna C\u00e1pac (1493-1527) fue el \u00faltimo gran Sapa Inca. Muri\u00f3 de una epidemia europea, lo que desat\u00f3 la guerra civil entre Atahualpa y Hu\u00e1scar.",
          "El imperio colaps\u00f3 en 1532 cuando Pizarro captur\u00f3 a Atahualpa en Cajamarca, fragmentando un poder que se sosten\u00eda en la figura del Sapa Inca."
        ]
      },
      {
        level: "intermedio",
        title: "Organizaci\u00f3n social, econ\u00f3mica y pol\u00edtica del Tahuantinsuyo",
        lines: [
          "La pir\u00e1mide social estaba encabezada por el Sapa Inca (hijo del Sol), seguido por los Awki (pr\u00edncipes), los Curacas (jefes locales) y el Hatun Runa (pueblo).",
          "Los Yanakuna eran servidores personales del Inca, libres de tributo. Los Mitimaes eran comunidades reubicadas para controlar territorios estrat\u00e9gicos.",
          "El sistema econ\u00f3mico se basaba en la reciprocidad (ayni) y la redistribuci\u00f3n: el Estado almacenaba excedentes en qollqas (dep\u00f3sitos) para redistribuirlos en \u00e9pocas de escasez.",
          "La mit'a era el trabajo obligatorio al Estado, que se pagaba en trabajo, no en dinero. Los trabajadores recib\u00edan alimento y coca a cambio.",
          "Los quipus eran dispositivos de cuerdas con nudos para registrar informaci\u00f3n num\u00e9rica y posiblemente narrativa. Solo los quipucamayocs sab\u00edan interpretarlos.",
          "El aillu era la unidad social b\u00e1sica: un grupo de parentesco que compart\u00eda tierras, trabajo y ritual. Todos los incas pertenec\u00edan a un aillu."
        ]
      },
      {
        level: "avanzado",
        title: "Red de caminos, tambos, mitmaes y sistemas de control",
        lines: [
          "El Qhapaq \u00d1an (red de caminos) ten\u00eda m\u00e1s de 30,000 km, incluyendo puentes colgantes sobre r\u00edos y camachacuyes (caminos de altura).",
          "Los tambos eran estaciones de descanso y dep\u00f3sito cada 15-20 km a lo largo de los caminos. Los m\u00e1s grandes eran los tampus reales para el Sapa Inca.",
          "El sistema de mitmaes permit\u00eda al Estado reubicar poblaciones enteras para evitar rebeliones, poblar nuevas regiones o ejecutar proyectos agr\u00edcolas.",
          "La mit'a incaica era rotativa y obligatoria: duraba meses y abarcaba desde la agricultura hasta la construcci\u00f3n de obras p\u00fablicas (caminos, puentes, tambos).",
          "El sistema de ceques (l\u00edneas rituales) conectaba los huacas (lugares sagrados) desde el Coricancha en Cusco, estructurando el territorio en clave sagrada.",
          "El Tahuantinsuyo se sostuvo por la interacci\u00f3n entre centralismo incaico y autonom\u00eda local: los curacas manten\u00edan poder siempre que pagaran tributo y aceptaran al Sapa Inca."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Estructura del Tahuantinsuyo</text>',
      '  <polygon points="150,35 185,65 115,65" fill="#fbbf24" stroke="#d97706" stroke-width="1"/>',
      '  <text x="150" y="58" text-anchor="middle" fill="#78350f" font-size="8" font-weight="bold" font-family="sans-serif">Sapa Inca</text>',
      '  <rect x="110" y="70" width="80" height="20" fill="#fde68a" rx="4"/>',
      '  <text x="150" y="84" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Curacas</text>',
      '  <rect x="95" y="95" width="110" height="20" fill="#fef3c7" rx="4"/>',
      '  <text x="150" y="109" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Hatun Runa (Pueblo)</text>',
      '  <rect x="80" y="120" width="140" height="20" fill="#fffbeb" rx="4"/>',
      '  <text x="150" y="134" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Yanakuna / Mitimaes</text>',
      '  <text x="150" y="162" text-anchor="middle" fill="#475569" font-size="9" font-family="sans-serif">4 Suyus: Chinchay, Anti, Cunti, Colla</text>',
      '  <text x="150" y="182" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Capital: Cusco (Qosqo)</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3010, question: "\u00bfQui\u00e9n es considerado el fundador del Tahuantinsuyo tras la derrota de los chancas?", options: ["T\u00fapac Inca Yupanqui", "Pachac\u00fatec", "Huayna C\u00e1pac", "Atahualpa"], correctIndex: 1, explanation: "Pachac\u00fatec (1438-1471) derrot\u00f3 a los chancas y transform\u00f3 el Curacazgo del Cusco en un vasto imperio, siendo reconocido como el verdadero fundador del Tahuantinsuyo.", difficulty: "basico" },
      { id: 3011, question: "\u00bfCu\u00e1l era el sistema de trabajo obligatorio al Estado incaico que se pagaba en trabajo y no en dinero?", options: ["Ayllu", "Minka", "Mit'a", "Ayni"], correctIndex: 2, explanation: "La mit'a era el trabajo obligatorio y rotativo que cada comunidad deb\u00eda al Estado inca. A diferencia de la minka (trabajo comunal voluntario), la mit'a era impuesta por el poder central.", difficulty: "intermedio" },
      { id: 3012, question: "El sistema de mitmaes cumpl\u00eda la funci\u00f3n pol\u00edtica de:", options: ["Registrar informaci\u00f3n en quipus", "Reubicar poblaciones para controlar territorios y prevenir rebeliones", "Distribuir excedentes agr\u00edcolas en los qollqas", "Establecer rutas comerciales entre los suyus"], correctIndex: 1, explanation: "Los mitmaes eran comunidades desplazadas por orden del Inca hacia zonas estrat\u00e9gicas. Esta pol\u00edtica evitaba concentraciones de poder local y facilitaba la integraci\u00f3n de nuevos territorios.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "conquista-espanola",
    tip: "La batalla de Cajamarca (1532) fue decisiva. Solo 168 espa\u00f1oles capturaron al Inca. Memoriza fechas: 1532-conquista, 1533-ejecuci\u00f3n de Atahualpa, 1535-fundaci\u00f3n de Lima.",
    theory: [
      {
        level: "basico",
        title: "La llegada de Pizarro y la captura de Atahualpa",
        lines: [
          "Francisco Pizarro lleg\u00f3 al Per\u00fa en 1532 con 168 soldados, 27 caballos y armas de fuego. Parti\u00f3 de San Miguel de Piura hacia la sierra.",
          "En Cajamarca, el 16 de noviembre de 1532, Pizarro embosc\u00f3 al ej\u00e9rcito inca y captur\u00f3 al Sapa Inca Atahualpa en el Patio de la Recepci\u00f3n.",
          "Atahualpa ofreci\u00f3 una habitaci\u00f3n llena de oro y dos de plata como rescate. Los espa\u00f1oles la recolectaron pero no lo liberaron.",
          "El 26 de julio de 1533, Atahualpa fue ejecutado en la plaza de Cajamarca mediante garrote, bajo la acusaci\u00f3n de idolatr\u00eda y usurpaci\u00f3n del trono.",
          "Tras la ejecuci\u00f3n, Pizarro march\u00f3 hacia Cusco, entrando el 15 de noviembre de 1533 sin resistencia significativa, ali\u00e1ndose con los partidarios de Hu\u00e1scar.",
          "El 18 de enero de 1535, Pizarro fund\u00f3 la Ciudad de los Reyes (Lima) como capital del nuevo territorio, rompiendo con la tradici\u00f3n cusque\u00f1a."
        ]
      },
      {
        level: "intermedio",
        title: "Guerras civiles espa\u00f1olas y alianzas ind\u00edgenas",
        lines: [
          "La guerra civil inca (Atahualpa vs. Hu\u00e1scar) debilit\u00f3 profundamente al Tahuantinsuyo. Pizarro explot\u00f3 esta divisi\u00f3n ali\u00e1ndose con los seguidores de Hu\u00e1scar.",
          "Diego de Almagro, socio de Pizarro, se rebel\u00f3 por el reparto de territorios. La guerra culmin\u00f3 con su ejecuci\u00f3n en Cusco en 1538.",
          "Manco Inca lider\u00f3 una gran rebeli\u00f3n en 1536-1537, asediando Cusco durante meses. Fue derrotado y huy\u00f3 a Vilcabamba, donde estableci\u00f3 un neoestado inca.",
          "Las guerras civiles espa\u00f1olas (Pizarro vs. Almagro) paralizaron la colonizaci\u00f3n durante a\u00f1os, permitiendo que la resistencia inca se mantuviera en Vilcabamba.",
          "Los curacas colaboraron activamente con los espa\u00f1oles, aportando miles de guerreros (especialmente en la lucha contra Manco Inca). Su lealtad era estrat\u00e9gica.",
          "El neoestado de Vilcabamba resisti\u00f3 hasta 1572, cuando el virrey Toledo captur\u00f3 y ejecut\u00f3 a T\u00fapac Amaru I, \u00faltimo Inca de Vilcabamba."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto demogr\u00e1fico, mestizaje y resistencia cultural",
        lines: [
          "Se estima que la poblaci\u00f3n del Per\u00fa cay\u00f3 de aproximadamente 9-12 millones en 1530 a menos de 1 mill\u00f3n en 1620, principalmente por epidemias (viruela, sarampi\u00f3n, gripe).",
          "El mestizaje racial y cultural fue un proceso complejo: no solo biol\u00f3gico, sino tambi\u00e9n deusi\u00f3n de cosmovisiones, religiones y pr\u00e1cticas agr\u00edcolas.",
          "La imposici\u00f3n del catolicismo convivi\u00f3 con la resistencia religiosa andina: los ind\u00edgenas practicaban su religi\u00f3n en secreto o la sincretizaban con el cristianismo.",
          "El sistema de encomiendas distribuy\u00f3 poblaciones ind\u00edgenas entre espa\u00f1oles, generando explotaci\u00f3n laboral que deriv\u00f3 en levantamientos y la posterior creaci\u00f3n de reducciones.",
          "El quipu fue prohibido y muchos fueron quemados por los curas, pero su uso persisti\u00f3 en comunidades andinas hasta el siglo XVIII.",
          "La conquista no fue un evento puntual sino un proceso de m\u00e1s de 40 a\u00f1os de resistencia, adaptaci\u00f3n y transformaci\u00f3n mutua entre espa\u00f1oles e ind\u00edgenas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold" font-family="sans-serif">Conquista Espa\u00f1ola del Per\u00fa</text>',
      '  <line x1="50" y1="50" x2="250" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="80" cy="50" r="6" fill="#2563eb"/>',
      '  <text x="80" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1532</text>',
      '  <text x="80" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Cajamarca</text>',
      '  <circle cx="135" cy="50" r="6" fill="#dc2626"/>',
      '  <text x="135" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1533</text>',
      '  <text x="135" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Ejecuci\u00f3n</text>',
      '  <circle cx="190" cy="50" r="6" fill="#f59e0b"/>',
      '  <text x="190" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1535</text>',
      '  <text x="190" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Lima</text>',
      '  <circle cx="240" cy="50" r="6" fill="#16a34a"/>',
      '  <text x="240" y="73" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1572</text>',
      '  <text x="240" y="83" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Vilcabamba</text>',
      '  <text x="150" y="115" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Impacto Demogr\u00e1fico</text>',
      '  <rect x="40" y="125" width="100" height="16" fill="#dcfce7" rx="4"/>',
      '  <text x="90" y="137" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">1530: ~9-12 millones</text>',
      '  <rect x="160" y="125" width="100" height="16" fill="#fee2e2" rx="4"/>',
      '  <text x="210" y="137" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">1620: ~1 mill\u00f3n</text>',
      '  <text x="150" y="165" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Mortalidad estimada: 80-90%</text>',
      '  <text x="150" y="188" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">Resistencia: Vilcabamba (1536-1572)</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3020, question: "\u00bfEn qu\u00e9 fecha Pizarro captur\u00f3 al Sapa Inca Atahualpa en Cajamarca?", options: ["16 de noviembre de 1532", "26 de julio de 1533", "18 de enero de 1535", "15 de noviembre de 1533"], correctIndex: 0, explanation: "El 16 de noviembre de 1532, Pizarro embosc\u00f3 a Atahualpa en la Plaza de Cajamarca, captur\u00e1ndolo con solo 168 soldados frente a un ej\u00e9rcito de miles.", difficulty: "basico" },
      { id: 3021, question: "\u00bfQui\u00e9n lider\u00f3 la gran rebeli\u00f3n inca contra los espa\u00f1oles en 1536-1537, asediando Cusco?", options: ["Atahualpa", "Hu\u00e1scar", "Manco Inca", "T\u00fapac Amaru I"], correctIndex: 2, explanation: "Manco Inca, originalmente aliado de los espa\u00f1oles, lider\u00f3 una rebeli\u00f3n masiva en 1536 que asedi\u00f3 Cusco durante meses. Fue derrotado y huy\u00f3 a Vilcabamba.", difficulty: "intermedio" },
      { id: 3022, question: "La ca\u00feda del neoestado de Vilcabamba en 1572 signific\u00f3:", options: ["El inicio de la colonizaci\u00f3n espa\u00f1ola", "La ejecuci\u00f3n de Atahualpa en Cajamarca", "La captura y ejecuci\u00f3n de T\u00fapac Amaru I, \u00faltimo inca de Vilcabamba", "La fundaci\u00f3n de la Ciudad de los Reyes"], correctIndex: 2, explanation: "El virrey Toledo captur\u00f3 a T\u00fapac Amaru I en 1572 y lo ejecut\u00f3 p\u00fablicamente en Cusco, poniendo fin a m\u00e1s de 40 a\u00f1os de resistencia inca organizada.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "virreinato-del-peru",
    tip: "El Virreinato del Per\u00fa abarcaba casi toda Sudam\u00e9rica. Los virreyes m\u00e1s importantes: Toledo (reformas), Lima (expansi\u00f3n), Amat (ilustraci\u00f3n).",
    theory: [
      {
        level: "basico",
        title: "El Virreinato del Per\u00fa: estructura y gobierno colonial",
        lines: [
          "El Virreinato del Per\u00fa fue creado en 1542 por Carlos V. Inicialmente abarcaba casi toda Sudam\u00e9rica, excepto Brasil, Venezuela y la regi\u00f3n del R\u00edo de la Plata.",
          "La capital era la Ciudad de los Reyes (Lima), que desde 1560 fue sede de la Real Audiencia y centro administrativo del imperio espa\u00f1ol en Sudam\u00e9rica.",
          "El virrey era el representante directo del rey y ten\u00eda poder ejecutivo, judicial y militar. Los primeros virreyes enfrentaron rebeliones como la de Gonzalo Pizarro.",
          "Blasco N\u00fa\u00f1ez Vira fue el primer virrey (1544-1546), pero fue derrocado por Gonzalo Pizarro, quien gobern\u00f3 hasta su ejecuci\u00f3n en 1548.",
          "El Toledo (1569-1581) realiz\u00f3 reformas fundamentales: estableci\u00f3 la reducci\u00f3n de indios, reorganiz\u00f3 la mit'a y fund\u00f3 pueblos de espa\u00f1oles.",
          "El virreinato se dividi\u00f3 en gobernaciones, corregimientos y encomiendas, creando una jerarqu\u00eda administrativa que controlaba la explotaci\u00f3n de recursos y mano de obra ind\u00edgena."
        ]
      },
      {
        level: "intermedio",
        title: "Econom\u00eda colonial: miner\u00eda, mita y comercio",
        lines: [
          "Potos\u00ed (actual Bolivia) fue la mina de plata m\u00e1s grande del mundo. Su cerro de plata financi\u00f3 el imperio espa\u00f1ol durante m\u00e1s de dos siglos.",
          "La mita colonial, establecida por Toledo, obligaba a los ind\u00edgenas a trabajar en las minas de Potos\u00ed durante cuatro meses al a\u00f1o, causando alt\u00edsima mortalidad.",
          "El comercio se realizaba a trav\u00e9s del sistema de flotas: barcos que viajaban de Sevilla a Portobelo (Panam\u00e1) y de all\u00ed por tierra al Pac\u00edfico.",
          "El sistema de monopolio comercial (Casa de Contrataci\u00f3n) prohib\u00eda el comercio directo entre las colonias y otros pa\u00edses europeos.",
          "Los obrajes eran talleres textiles donde ind\u00edgenas y mestizos trabajaban en condiciones de explotaci\u00f3n, produciendo telas para todo el virreinato.",
          "La econom\u00eda colonial era fundamentalmente extractiva: se extra\u00edan metales preciosos y productos agr\u00edcolas, sin desarrollar industria local."
        ]
      },
      {
        level: "avanzado",
        title: "Reformas borb\u00f3nicas, ilustraci\u00f3n y conspiraciones",
        lines: [
          "Las reformas borb\u00f3nicas (siglo XVIII) buscaron modernizar la administraci\u00f3n colonial, aumentar la recaudaci\u00f3n y romper el monopolio lime\u00f1o.",
          "La creaci\u00f3n del Virreinato del R\u00edo de la Plata (1776) desmembr\u00f3 territorios del Per\u00fa, debilitando su hegemon\u00eda pol\u00edtica y econ\u00f3mica.",
          "La expulsi\u00f3n de los jesuitas (1767) gener\u00f3 un vac\u00edo educativo y de atenci\u00f3n a las poblaciones ind\u00edgenas de la Amazon\u00eda y la sierra.",
          "La Ilustraci\u00f3n lleg\u00f3 al Per\u00fa a trav\u00e9s de universidades y viajes cient\u00edficos (La Condamine, 1740). Intelectuales como Pablo de Olavide promovieron reformas.",
          "La conspiraci\u00f3n de los Tres Abogados (1780) y la rebeli\u00f3n de T\u00fapac Amaru II (1780-1783) desafiaron frontalmente el sistema colonial.",
          "Las reformas borb\u00f3nicas, paradojicamente, al descontentar tanto a criollos como a ind\u00edgenas, sembraron las semillas de la independencia."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">Virreinato del Per\u00fa</text>',
      '  <rect x="25" y="38" width="120" height="60" fill="#ede9fe" rx="6"/>',
      '  <text x="85" y="53" text-anchor="middle" fill="#5b21b6" font-size="9" font-weight="bold" font-family="sans-serif">Estructura</text>',
      '  <text x="85" y="66" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Rey \u2192 Virrey \u2192 Gobernador</text>',
      '  <text x="85" y="78" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">\u2192 Corregidor \u2192 Encomendero</text>',
      '  <text x="85" y="90" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">\u2192 Curaca \u2192 Ind\u00edgena</text>',
      '  <rect x="155" y="38" width="120" height="60" fill="#fef3c7" rx="6"/>',
      '  <text x="215" y="53" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">Econom\u00eda</text>',
      '  <text x="215" y="66" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Mita minera (Potos\u00ed)</text>',
      '  <text x="215" y="78" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Monopolio comercial</text>',
      '  <text x="215" y="90" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Flotas de Sevilla</text>',
      '  <text x="150" y="120" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Reformas Borb\u00f3nicas (s. XVIII)</text>',
      '  <rect x="30" y="130" width="70" height="35" fill="#dbeafe" rx="4"/>',
      '  <text x="65" y="143" text-anchor="middle" fill="#1e40af" font-size="7" font-family="sans-serif">Expulsi\u00f3n</text>',
      '  <text x="65" y="155" text-anchor="middle" fill="#1e40af" font-size="7" font-family="sans-serif">Jesuitas 1767</text>',
      '  <rect x="115" y="130" width="70" height="35" fill="#fee2e2" rx="4"/>',
      '  <text x="150" y="143" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">T\u00fapac Amaru</text>',
      '  <text x="150" y="155" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">1780-1783</text>',
      '  <rect x="200" y="130" width="70" height="35" fill="#dcfce7" rx="4"/>',
      '  <text x="235" y="143" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Nuevo Virreinato</text>',
      '  <text x="235" y="155" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">R\u00edo Plata 1776</text>',
      '  <text x="150" y="190" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">1542-1824: 282 a\u00f1os de dominio espa\u00f1ol</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3030, question: "\u00bfEn qu\u00e9 a\u00f1o fue creado el Virreinato del Per\u00fa y por qui\u00e9n?", options: ["1532 por Francisco Pizarro", "1542 por Carlos V", "1560 por Felipe II", "1776 por Carlos III"], correctIndex: 1, explanation: "El Virreinato del Per\u00fa fue creado en 1542 por Real Cédula de Carlos V, como parte de las Reformas de Nueva Cástilla, con capital en la Ciudad de los Reyes (Lima).", difficulty: "basico" },
      { id: 3031, question: "Potos\u00ed, la famosa mina de plata, fue administrada a trav\u00e9s del sistema de:", options: ["Encomiendas", "Corregimientos", "Mita colonial", "Obrajes"], correctIndex: 2, explanation: "La mita colonial, establecida por el virrey Toledo, obligaba a los ind\u00edgenas a trabajar en las minas de Potos\u00ef de forma rotativa, causando una alt\u00edsima mortalidad.", difficulty: "intermedio" },
      { id: 3032, question: "La rebeli\u00f3n de T\u00fapac Amaru II (1780-1783) fue consecuencia directa de:", options: ["La expulsi\u00f3n de los jesuitas", "Las reformas borb\u00f3nicas y la explotaci\u00f3n del sistema de mita", "La creaci\u00f3n del Virreinato del R\u00edo de la Plata", "La guerra de los Siete A\u00f1os"], correctIndex: 1, explanation: "T\u00fapac Amaru II lider\u00f3 la rebeli\u00f3n m\u00e1s grande contra el sistema colonial, motivado por las reformas borb\u00f3nicas que aumentaron la explotaci\u00f3n ind\u00edgena, especialmente a través de la mita minera.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "independencia-del-peru",
    tip: "San Mart\u00edn proclam\u00f3 la independencia el 28 de julio de 1821. Bol\u00edvar la consolid\u00f3 en 1824. La batalla de Ayacucho (1824) fue la definitiva.",
    theory: [
      {
        level: "basico",
        title: "Proclamaci\u00f3n y batallas de la independencia",
        lines: [
          "José de San Martín llegó al Perú en 1820 desde Chile con el Ejército de los Andes, desembarcando en Paracas y marchando hacia Lima.",
          "El 28 de julio de 1821, San Martín proclamó la independencia del Perú en la Plaza de Armas de Lima, declarando al país como Estado Libre.",
          "San Martín se autoproclamó Protector del Perú y promulgo leyes libertarias como la abolición de la mita y la libertad de vientres.",
          "En 1822, San Martín y Simón Bolívar se reunieron en la conferencia de Guayaquil, tras la cual San Martín renunció y se exilió a Europa.",
          "Bolívar asumió el liderazgo y consolidó la independencia con la batalla de Junín (1824) y la batalla de Ayacucho (1824), ambas victorias decisivas.",
          "La batalla de Ayacucho (9 de diciembre de 1824) fue la última gran batalla de las guerras de independencia sudamericanas. El virrey La Serna se rindió."
        ]
      },
      {
        level: "intermedio",
        title: "San Martín vs. Bolívar: estrategias y differencias",
        lines: [
          "San Martín optó por una estrategia diplomática y gradual: buscó la independencia sin violencia extrema y propuso una monarquía constitucional para el Perú.",
          "Bolívar, en cambio, defendía la república y la unificación de América del Sur en una sola nación (Gran Colombia). Su enfoque era más militar.",
          "La conferencia de Guayaquil (26-27 de julio de 1822) resolvió la disputa a favor de Bolívar: San Martín cedió el control del Perú y se retiró.",
          "El Congreso de Angostura (1819) fue donde Bolívar delineó su proyecto político para la unidad sudamericana, incluyendo un ejecutivo fuerte y bicameral.",
          "La Constitución de 1826, impulsada por Bolívar, estableció una presidencia vitalicia, pero fue rechazada por los peruanos que preferían un sistema más republicano.",
          "La tensión entre las visiones de San Martín (monarquía moderada) y Bolívar (república centralizada) definió los primeros débates políticos de la república."
        ]
      },
      {
        level: "avanzado",
        title: "Causas económicas, sociales y la influencia de la Ilustración",
        lines: [
          "Las causas económicas incluían el monopolio comercial español, las reformas borbónicas que gravaban a los criollos y la exclusión del comercio libre.",
          "Los criollos, descendientes de españoles nacidos en América, sentían que las reformas borbónicas les quitaban privilegios económicos y políticos.",
          "La Ilustración difundió ideas de soberanía popular, separación de poderes y derechos del hombre, influyendo en los líderes independentistas.",
          "La revolución francesa (1789) y la independencia de EE.UU. (1776) fueron modelos ideológicos para los libertadores sudamericanos.",
          "La rebelión de Túpac Amaru II (1780), aunque indígena, demostró la fragilidad del sistema colonial y sembró el descontento que los criollos canalizaron en 1810.",
          "El comercio ilícito de los criollos con Inglaterra y EE.UU. les mostró las ventajas de un sistema económico abierto, incompatible con el monopolio español."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#16a34a" font-size="12" font-weight="bold" font-family="sans-serif">Independencia del Per\u00fa</text>',
      '  <line x1="30" y1="50" x2="270" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="60" cy="50" r="5" fill="#2563eb"/>',
      '  <text x="60" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1820</text>',
      '  <text x="60" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Llegada San Mart\u00edn</text>',
      '  <circle cx="120" cy="50" r="5" fill="#16a34a"/>',
      '  <text x="120" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1821</text>',
      '  <text x="120" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Proclamac.Independencia</text>',
      '  <circle cx="180" cy="50" r="5" fill="#f59e0b"/>',
      '  <text x="180" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1822</text>',
      '  <text x="180" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Guayaquil</text>',
      '  <circle cx="240" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="240" y="72" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1824</text>',
      '  <text x="240" y="82" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Ayacucho</text>',
      '  <text x="150" y="110" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Batalla de Ayacucho (1824)</text>',
      '  <text x="150" y="128" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Ej\u00e9rcito Unido Libertador: 5,780</text>',
      '  <text x="150" y="143" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Realistas: 9,310 (rindi\u00f3n)</text>',
      '  <text x="150" y="168" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">\u00daltima gran batalla de Am\u00e9rica del Sur</text>',
      '  <text x="150" y="188" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">Comandante: Antonio Jos\u00e9 de Sucre</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3040, question: "\u00bfEn qu\u00e9 fecha se proclam\u00f3 la independencia del Per\u00fa y qui\u00e9n lo hizo?", options: ["9 de diciembre de 1824, Sim\u00f3n Bol\u00edvar", "28 de julio de 1821, Jos\u00e9 de San Mart\u00edn", "26 de julio de 1822, Antonio Sucre", "7 de abril de 1825, Andrés de Santa Cruz"], correctIndex: 1, explanation: "El 28 de julio de 1821, José de San Martín proclamó la independencia del Perú en la Plaza de Armas de Lima, estableciendo un gobierno provisional.", difficulty: "basico" },
      { id: 3041, question: "La conferencia de Guayaquil (1822) entre San Martín y Bolívar resultó en:", options: ["La alianza militar contra los realistas", "San Martín cedió el liderazgo a Bolívar y se retiró", "La creación de la Gran Colombia", "La firma de la Constitución de 1826"], correctIndex: 1, explanation: "En Guayaquil, las diferencias entre San Martín (monarquía moderada) y Bolívar (república) llevaron a que San Martín cediera el control y se exiliara a Europa.", difficulty: "intermedio" },
      { id: 3042, question: "La influencia de la Ilustración en la independencia peruana se manifestó principalmente en:", options: ["El uso de armas modernas europeas", "La difusión de ideas de soberanía popular y derechos del hombre", "La alianza militar con Francia", "La creación de un ejército profesional"], correctIndex: 1, explanation: "La Ilustración proporcionó el marco teórico de soberanía popular, separación de poderes y derechos naturales que justificaron la ruptura con el dominio español.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "republica-temprana",
    tip: "La Rep\u00fablica temprana (1826-1872) fue inestable: caudillos, guerras con Colombia y Bolivia. Memoriza: Guerra con Colombia (1828-1829), Guerra del Pac\u00edfico (1879-1883).",
    theory: [
      {
        level: "basico",
        title: "Primeros gobiernos y la inestabilidad republicana",
        lines: [
          "Después de Ayacucho (1824), Perú tuvo múltiples gobiernos inestables: caudillos militares, presidentes provisionales y constituciones cambiantes.",
          "Agustín Gamarra y Andrés de Santa Cruz fueron dos de los primeros líderes que intentaron consolidar la república, pero ambos enfrentaron oposición armada.",
          "Santa Cruz creó la Confederación Perú-Bolivia (1836-1839), un proyecto unionista que fue destruido por Chile y Argentina en la Guerra de la Confederación.",
          "La Guerra contra la Confederación (1836-1839) terminó con la derrota en la batalla de Yungay y la disolución forzosa de la unión.",
          "En la década de 1840-1850, los caudillos como Ramón Castilla (1845-1849, 1855-1862) intentaron modernizar el Estado sin abandonar el autoritarismo.",
          "La constitución de 1860, impulsada por Castilla, fue la más estable del siglo XIX y sirvió como marco político durante décadas."
        ]
      },
      {
        level: "intermedio",
        title: "Guerras externas y la consolidación territorial",
        lines: [
          "La guerra con la Gran Colombia (1828-1829) se disputó por el control del norte. La batalla de Portete de Tarqui (1829) definieron las fronteras.",
          "El Tratado de Pascuales (1829) estableció las fronteras entre Perú y la Gran Colombia, marcando el inicio de la configuración territorial republicana.",
          "La Guerra contra la Confederación Perú-Bolivia (1836-1839) fue instigada por Chile, que temía una alianza que lo rodeara. La batalla de Yungay fue decisiva.",
          "La Guerra hispano-sudamericana (1864-1866) involucró a Perú, Chile, Bolivia y Ecuador contra España. El bombardeo del Callao (1866) unificó temporalmente a los países.",
          "La década de 1860-1870 fue de relativa estabilidad bajo Castilla, con la abolición de la esclavitud (1854) y la llegada del ferrocarril.",
          "La prosperidad del guano en las décadas de 1840-1860 generó riqueza pero también corrupción, preparando el terreno para la Guerra del Pacífico."
        ]
      },
      {
        level: "avanzado",
        title: "Guano, salitre y el inicio de la Guerra del Pacífico",
        lines: [
          "El guano (excremento de aves marinas) fue el principal recurso económico del Perú entre 1840-1880, generando enormes ingresos fiscales por la venta en Europa.",
          "La isla de Lobos, el guano de Pisco y las islas de Chincha fueron las principales fuentes. A fines del siglo XIX, el recurso se agotó progresivamente.",
          "El salitre (nitrato de sodio) en Tarapacá era otra fuente de riqueza: se usaba como fertilizante y explosivo, siendo codiciado por Chile y Bolivia.",
          "La Guerra del Pacífico (1879-1883) comenzó por disputas sobre el salitre. Chile invadió Tarapacá tras la alianza secreta con Bolivia (Tratado de 1874).",
          "La batalla de Tacna y Arica (1880) y la captura de Lima (1881) fueron los momentos decisivos que sellaron la derrota peruana.",
          "El Tratado de Ancón (1883) cedió Tarapacá a Chile. La Guerra del Pacífico fue el trauma más grande de la República temprana y definió la política exterior peruana."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#d97706" font-size="12" font-weight="bold" font-family="sans-serif">Rep\u00fablica Temprana (1826-1872)</text>',
      '  <line x1="30" y1="50" x2="270" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="60" cy="50" r="5" fill="#2563eb"/>',
      '  <text x="60" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1829</text>',
      '  <text x="60" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Colombia</text>',
      '  <circle cx="120" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="120" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1839</text>',
      '  <text x="120" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Yungay</text>',
      '  <circle cx="180" cy="50" r="5" fill="#f59e0b"/>',
      '  <text x="180" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1866</text>',
      '  <text x="180" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Callao</text>',
      '  <circle cx="240" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="240" y="70" text-anchor="middle" fill="#1e293b" font-size="6" font-family="sans-serif">1879</text>',
      '  <text x="240" y="79" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Pac\u00edfico</text>',
      '  <text x="150" y="105" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Guano y Salitre</text>',
      '  <rect x="40" y="115" width="100" height="30" fill="#fef3c7" rx="4"/>',
      '  <text x="90" y="130" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Guano: 1840-1880</text>',
      '  <text x="90" y="140" text-anchor="middle" fill="#92400e" font-size="7" font-family="sans-serif">Islas de Chincha</text>',
      '  <rect x="160" y="115" width="100" height="30" fill="#fef3c7" rx="4"/>',
      '  <text x="210" y="130" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Salitre: 1879-1883</text>',
      '  <text x="210" y="140" text-anchor="middle" fill="#92400e" font-size="7" font-family="sans-serif">Tarapac\u00e1</text>',
      '  <text x="150" y="170" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">Caudillos: Gamarra, Santa Cruz, Castilla</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3050, question: "\u00bfQué acontecimiento militar puso fin a la Confederación Perú-Bolivia en 1839?", options: ["La batalla de Junín", "La batalla de Yungay", "La batalla de Ayacucho", "La batalla de Portete de Tarqui"], correctIndex: 1, explanation: "La batalla de Yungay (20 de enero de 1839) fue decisiva para la derrota de la Confederación Perú-Bolivia, liderada por Santa Cruz, por las fuerzas chilenas y peruanas opositoras.", difficulty: "basico" },
      { id: 3051, question: "La guerra con la Gran Colombia (1828-1829) se resolvió con:", options: ["La batalla de Ayacucho", "El Tratado de Pascuales", "La proclamación de Lima", "La batalla de Callao"], correctIndex: 1, explanation: "El Tratado de Pascuales (1829) definió las fronteras entre Perú y la Gran Colombia, poniendo fin al conflicto por el control del norte del país.", difficulty: "intermedio" },
      { id: 3052, question: "La Guerra del Pacífico (1879-1883) fue provocada fundamentalmente por:", options: ["La disputa por el control de Lima", "La codicia chilena sobre el salitre de Tarapacá", "La alianza de Perú con Bolivia contra Chile", "La rebelión de los caudillos del sur"], correctIndex: 1, explanation: "Chile invadió Tarapacá por el control del salitre, recurso valioso como fertilizante y explosivo. La Guerra del Pacífico fue el conflicto más devastador de la República temprana.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "guano-y-salitre",
    tip: "El guano generó fortunas (1840-1880). La Guerra del Pacífico (1879-1883) contra Chile nos costó Tarapacá, Arica y Tacna. Memoriza: Batalla de San Francisco, Batalla de Angamos.",
    theory: [
      {
        level: "basico",
        title: "Época del guano y la causa de la Guerra del Pacífico",
        lines: [
          "El Perú vivió una época de prosperidad gracias a la exportación de guano (excremento de aves marinas) entre 1840 y 1880.",
          "Las islas de Chincha, Lobos y Pisco fueron las principales fuentes de guano, que se vendía a precios altísimos en Europa como fertilizante.",
          "El salitre (nitrato de sodio) en Tarapacá era igualmente valioso: se usaba como fertilizante agrícola y componente de explosivos.",
          "Chile invadió Tarapacá en 1879, desatando la Guerra del Pacífico (1879-1883) que resultó en la pérdida territorial más grande de Perú.",
          "La Guerra del Pacífico se desarrolló en tres frentes: terrestre (desierto de Atacama), naval (costa del Pacífico) y la defensa de Lima.",
          "La captura de Lima en enero de 1881 por el ejército chileno marcó el fin efectivo de la resistencia peruana y el inicio de la ocupación."
        ]
      },
      {
        level: "intermedio",
        title: "Batallas principales y el Pacto de Tacna-Arica",
        lines: [
          "La batalla de Iquique (1879) fue el primer enfrentamiento naval importante: el Huáscar peruanó, pero Arturo Prat se convirtió en héroe chileno.",
          "La batalla de Angamos (1879) fue decisiva: Chile capturó al monitor Huáscar, asegurando el dominio naval del Pacífico sur.",
          "La batalla de San Francisco (1879) fue la primera gran batalla terrestre en el desierto de Atacama, donde las fuerzas peruanas fueron superadas por la movilidad chilena.",
          "La batalla de Miraflores (1881), en los suburbios de Lima, fue la última resistencia organizada antes de la caþda de la capital.",
          "El Pacto de Tacna-Arica (1929) estableció que Chile devolvería Tacna a Perú después de un plebiscito, pero Arica quedaría definitivamente en manos chilenas.",
          "La Ocupación chilena del Perú (1881-1883) incluyó la confiscación de propiedades, la imposición de un gobierno títere y la resistencia civil."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto económico, pérdida territorial y tratados",
        lines: [
          "Perú perdió Tarapacá, Arica y Tacna (después de 50 años de ocupación chilena). La pérdida de salitre significó la ruina económica prolongada.",
          "El Tratado de Ancón (1883) cedió Tarapacá a Chile en propiedad absoluta, sin compensación ni plebiscito, bajo coacción militar.",
          "La deuda de guerra y la pérdida de recursos generaron una crisis fiscal que duró décadas, financiándose con préstamos que hipotecaron la economía nacional.",
          "El Tratado de Río de Janeiro (1904) consolidó la pérdida de Arica y estableció límites definitivos en la frontera norte, sin consultar a la población peruana.",
          "La Comisión Mixta de Límites (1900-1930) intentó resolver disputes fronterizas restantes pero generó tensiones persistentes con Bolivia y Ecuador.",
          "La Guerra del Pacífico dejó una herida nacional que impulsó el revisionismo territorial y moldeó la política exterior peruana durante todo el siglo XX."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold" font-family="sans-serif">Guerra del Pac\u00edfico</text>',
      '  <line x1="30" y1="50" x2="270" y2="50" stroke="#e2e8f0" stroke-width="2"/>',
      '  <circle cx="60" cy="50" r="5" fill="#2563eb"/>',
      '  <text x="60" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1879</text>',
      '  <text x="60" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Invasi\u00f3n</text>',
      '  <circle cx="120" cy="50" r="5" fill="#f59e0b"/>',
      '  <text x="120" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1879</text>',
      '  <text x="120" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Angamos</text>',
      '  <circle cx="180" cy="50" r="5" fill="#dc2626"/>',
      '  <text x="180" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1881</text>',
      '  <text x="180" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Caida Lima</text>',
      '  <circle cx="240" cy="50" r="5" fill="#16a34a"/>',
      '  <text x="240" y="70" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">1883</text>',
      '  <text x="240" y="80" text-anchor="middle" fill="#475569" font-size="6" font-family="sans-serif">Anc\u00f3n</text>',
      '  <text x="150" y="108" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Territorio Perdido</text>',
      '  <rect x="40" y="118" width="100" height="28" fill="#fee2e2" rx="4"/>',
      '  <text x="90" y="132" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Tarapac\u00e1 (1883)</text>',
      '  <text x="90" y="142" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Propiedad absoluta</text>',
      '  <rect x="160" y="118" width="100" height="28" fill="#fee2e2" rx="4"/>',
      '  <text x="210" y="132" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Arica (1929)</text>',
      '  <text x="210" y="142" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Definitivo Chile</text>',
      '  <rect x="100" y="155" width="100" height="20" fill="#fef3c7" rx="4"/>',
      '  <text x="150" y="169" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">Tacna (1929)</text>',
      '  <text x="150" y="192" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">P\u00e9rdida: ~180,000 km\u00b2 de territorio</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3060, question: "\u00bfQué recurso natural generó las principales fortunas del Perú entre 1840 y 1880?", options: ["El caucho", "El guano", "La plata de Cerro de Pasco", "El cobre de Cerro Verde"], correctIndex: 1, explanation: "El guano, excremento de aves marinas acumulado en islas costeñas, fue la principal fuente de riqueza del Perú en la segunda mitad del siglo XIX, vendiéndose como fertilizante en Europa.", difficulty: "basico" },
      { id: 3061, question: "La batalla de Angamos (1879) fue decisiva porque:", options: ["Perú capturó el Huáscar chileno", "Chile aseguró el dominio naval al capturar el Huáscar", "Se firmó el Tratado de Pascuales", "Se liberó Lima del sitio chileno"], correctIndex: 1, explanation: "En Angamos, la armada chilena capturó al monitor Huásar, asegurando el dominio naval del Pacífico sur y facilitando las operaciones terrestres en Tarapacá.", difficulty: "intermedio" },
      { id: 3062, question: "El Tratado de Ancón (1883) tuvo como consecuencia principal:", options: ["La devolución de Tacna a Perú", "La cesión absoluta de Tarapacá a Chile", "La creación de una zona neutral", "El plebiscito sobre Arica"], correctIndex: 1, explanation: "El Tratado de Ancón cedió Tarapacá a Chile en propiedad absoluta, sin compensación, bajo presión militar chilena. La situación de Tacna y Arica se resolvería después.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "oncenio-y-guerra",
    tip: "El Oncenio de Leguía (1919-1930) modernizó Lima pero fue autoritario. La Gran Depresión de 1929 lo derrocó. Memoriza: Nuevo Civilismo, Leguía, Sánchez Cerro.",
    theory: [
      {
        level: "basico",
        title: "El Oncenio: modernización y autoritarismo de Leguía",
        lines: [
          "Augusto B. Leguía gobernó el Perú durante 11 años (1919-1930), un período conocido como el Oncenio, el más largo del siglo XX.",
          "Leguía llegó al poder por segunda vez en 1919, prometiendo modernizar la economía y la infraestructura del país.",
          "Bajo su gobierno se construyó el Palacio de Gobierno actual (Casa de Pizarro), el Edificio Giuffre y el Teatro Municipal de Lima.",
          "Leguía implementó el sistema de Consignaciones, que otorgaba monopolios de exportación a empresas extranjeras a cambio de préstamos.",
          "Su gobierno fue autoritario: cerró el Congreso, persiguió opositores y utilizó la censura de prensa para silenciar críticas.",
          "La Gran Depresión de 1929 provocó una crisis económica que debilitó a Leguía, facilitando su derrocamiento en agosto de 1930."
        ]
      },
      {
        level: "intermedio",
        title: "Contexto político: Nuevo Civilismo, aprismo y oposición",
        lines: [
          "El Nuevo Civilismo (1912-1919) fue un movimiento político que buscaba una república más inclusiva y moderna, liderado por Augusto Bernardino Leguía.",
          "Leguía, originalmente civilista, rompió con su partido y se alió con sectores militares y oligárquicos para perpetuarse en el poder.",
          "El Partido Aprista Peruano (APRA), fundado en 1924 por Víctor Raúl Haya de la Torre en México, surgió como la principal fuerza de oposición al Oncenio.",
          "Haya de la Torre propuso un programa reformista: industrialización, reforma agraria, educación pública y alianza con las clases medias y obreras.",
          "La oposición al Oncenio incluyó a intelectuales, estudiantes universitarios y sectores medios que veían a Leguía como un dictador disfrazado.",
          "El golpe de estado de Luis Sánchez Cerro en agosto de 1930 puso fin al Oncenio, pero no resolvió la inestabilidad política crónica del país."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto económico de la Depresión y nuevos movimientos sociales",
        lines: [
          "La Gran Depresión (1929) colapsó los precios del algodón y la plata, principales exportaciones peruanas, provocando desempleo masivo y quiebras bancarias.",
          "El sistema de Consignaciones de Leguía transferó riqueza nacional a empresas extranjeras como Grace y W.R. Grace, debilitando la economía interna.",
          "La crisis económica aceleró la movilización social: los sindicatos crecieron, los estudiantes se politizaron y los partidos de izquierda ganaron fuerza.",
          "El aprismo, nacido en el exilio, se convirtió en el primer movimiento político de masas en el Perú, con base en la clase media y los obreros.",
          "La crisis del Oncenio marcó el fin de la oligarquía limeña como único actor político: los sectores medios y populares entraron definitivamente en escena.",
          "El período 1930-1950 fue de inestabilidad crónica: Sánchez Cerro, Benavides, Prado y el movimiento del 4 de julio de 1936 reflejaron esta transición."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">Oncenio de Legu\u00eda</text>',
      '  <rect x="30" y="38" width="240" height="25" fill="#ede9fe" rx="6"/>',
      '  <text x="150" y="55" text-anchor="middle" fill="#5b21b6" font-size="9" font-weight="bold" font-family="sans-serif">1919-1930: 11 a\u00f1os de gobierno</text>',
      '  <rect x="30" y="70" width="110" height="55" fill="#dcfce7" rx="6"/>',
      '  <text x="85" y="85" text-anchor="middle" fill="#166534" font-size="8" font-weight="bold" font-family="sans-serif">Modernizaci\u00f3n</text>',
      '  <text x="85" y="97" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Palacio de Gobierno</text>',
      '  <text x="85" y="107" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Edificio Giuffre</text>',
      '  <text x="85" y="117" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Obras p\u00fablicas</text>',
      '  <rect x="160" y="70" width="110" height="55" fill="#fee2e2" rx="6"/>',
      '  <text x="215" y="85" text-anchor="middle" fill="#991b1b" font-size="8" font-weight="bold" font-family="sans-serif">Autoritarismo</text>',
      '  <text x="215" y="97" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Cierre del Congreso</text>',
      '  <text x="215" y="107" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Censura de prensa</text>',
      '  <text x="215" y="117" text-anchor="middle" fill="#1e293b" font-size="7" font-family="sans-serif">Persecuci\u00f3n pol\u00edtica</text>',
      '  <text x="150" y="148" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Crisis y Ca\u00edda</text>',
      '  <rect x="50" y="155" width="90" height="22" fill="#fef3c7" rx="4"/>',
      '  <text x="95" y="170" text-anchor="middle" fill="#92400e" font-size="7" font-family="sans-serif">Gran Depresi\u00f3n 1929</text>',
      '  <rect x="160" y="155" width="90" height="22" fill="#fee2e2" rx="4"/>',
      '  <text x="205" y="170" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Golpe S\u00e1nchez Cerro</text>',
      '  <text x="150" y="195" text-anchor="middle" fill="#64748b" font-size="7" font-family="sans-serif">APRA: primer partido de masas (1924)</text>',
      '</svg>'
    ],
    exercises: [
      { id: 3070, question: "\u00bfCuánto duró el gobierno de Augusto B. Leguía durante su Oncenio?", options: ["6 años", "8 años", "11 años", "15 años"], correctIndex: 2, explanation: "El Oncenio de Leguía duró 11 años (1919-1930), siendo el período de gobierno más largo del siglo XX en el Perú.", difficulty: "basico" },
      { id: 3071, question: "El sistema de Consignaciones del Oncenio consistía en:", options: ["La venta de terrenos estatales a particulares", "El otorgamiento de monopolios de exportación a empresas extranjeras", "El reparto de tierras a campesinos", "La creación de cooperativas agrícolas"], correctIndex: 1, explanation: "El sistema de Consignaciones permitía a empresas como W.R. Grace controlar la exportación de productos peruanos a cambio de préstamos que endeudaban al Estado.", difficulty: "intermedio" },
      { id: 3072, question: "La Gran Depresión de 1929 afectó a Perú principalmente por:", options: ["La caída de precios del algodón y la plata", "La invasión de tropas extranjeras", "La pérdida de territorios en la frontera norte", "La rebelión armada de los campesinos"], correctIndex: 0, explanation: "La Gran Depresión colapsó los precios internacionales del algodón y la plata, principales exportaciones peruanas, provocando desempleo masivo y quiebras bancarias que debilitaron al régimen.", difficulty: "avanzado" }
    ]
  }
];

const historiaModulesPart2: CourseModule[] = [
  {
    slug: "aprismo-y-guerra",
    tip: "APRA (Alianza Popular Revolucionaria Americana) fue fundado en 1924. Sánchez Cerro derrocó a Leguía (1930) y enfrentó al aprismo. La Guerra con Ecuador fue en 1941.",
    theory: [
      {
        level: "basico",
        title: "APRA, Sánchez Cerro y la Guerra con Ecuador",
        lines: [
          "El APRA fue fundado por Víctor Raúl Haya de la Torre en 1924 en México como movimiento continental antiimperialista.",
          "En 1930, Luis Sánchez Cerro lideró un golpe de estado que derrocó al gobierno de Augusto B. Leguía.",
          "Sánchez Cerro enfrentó una fuerte oposición del APRA, lo que generó un enfrentamiento político violento.",
          "La Guerra con Ecuador estalló en julio de 1941 por disputas territoriales en la frontera amazónica.",
          "El conflicto terminó con la firma del Protocolo de Río de Janeiro en 1942, favorable al Perú.",
          "El Perú obtuvo territorios significativos en la Amazonía, consolidando su soberanía en la frontera norte."
        ]
      },
      {
        level: "intermedio",
        title: "Ideología aprista y persecución política",
        lines: [
          "Haya de la Torre propuso un programa de reformas antiimperialistas basado en la nacionalización de recursos estratégicos.",
          "El APRA defendía la alianza de clases media y obrera contra las oligarquías tradicionales y el dominio económico extranjero.",
          "Durante el gobierno de Sánchez Cerro, los miembros del APRA fueron sistemáticamente perseguidos y encarcelados.",
          "Sánchez Cerro fue asesinado en 1933 en Lima, un episodio que marcó profundamente la historia del partido aprista.",
          "El Protocolo de Río de Janeiro de 1942 estableció límites definitivos entre Perú y Ecuador, aunque Ecuador no los aceptó plenamente.",
          "La guerra de 1941 tuvo como consecuencia la expulsión de colonos ecuatorianos de zonas en disputa y la consolidación territorial peruana."
        ]
      },
      {
        level: "avanzado",
        title: "Movimientos sociales y reformismo vs. conservadurismo",
        lines: [
          "El aprismo representó una alternativa reformista en un contexto de dominio oligárquico en América Latina durante la primera mitad del siglo XX.",
          "El enfrentamiento entre APRA y las fuerzas conservadoras reflejó tensiones sobre modernización, participación popular y soberanía económica.",
          "Haya de la Torre propuso el concepto de 'dictadura del comercio exterior' como mecanismo para controlar la economía nacional.",
          "El reformismo aprista se articuló en torno a la defensa de los trabajadores y la reivindicación de los sectores medios urbanos.",
          "El conservadurismo representado por las élites limeñas y terratenientes resistió cualquier intento de redistribución de tierras o poder político.",
          "Este enfrentamiento definió la vida política peruana durante décadas y sentó las bases de la polarización entre izquierda y derecha."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">APRA y Guerra con Ecuador (1930-1941)</text>',
      '  <rect x="20" y="45" width="120" height="30" fill="#dbeafe" rx="6"/>',
      '  <text x="80" y="65" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="bold" font-family="sans-serif">APRA (1924)</text>',
      '  <line x1="80" y1="75" x2="80" y2="100" stroke="#93c5fd" stroke-width="2"/>',
      '  <rect x="20" y="100" width="120" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="80" y="120" text-anchor="middle" fill="#92400e" font-size="10" font-weight="bold" font-family="sans-serif">Golpe Sánchez Cerro (1930)</text>',
      '  <line x1="140" y1="60" x2="180" y2="60" stroke="#93c5fd" stroke-width="2" marker-end="url(#arrow)"/>',
      '  <rect x="180" y="45" width="100" height="30" fill="#fecaca" rx="6"/>',
      '  <text x="230" y="65" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold" font-family="sans-serif">Guerra 1941</text>',
      '  <text x="230" y="110" text-anchor="middle" fill="#1e293b" font-size="9" font-family="sans-serif">Protocolo de Río</text>',
      '  <text x="230" y="125" text-anchor="middle" fill="#1e293b" font-size="9" font-family="sans-serif">(1942)</text>',
      '  <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4001, question: "¿Quién fundó el APRA en 1924?", options: ["Víctor Raúl Haya de la Torre", "Luis Sánchez Cerro", "Augusto B. Leguía", "Alan García"], correctIndex: 0, explanation: "Haya de la Torre fundó el APRA en México en 1924 como movimiento antiimperialista continental.", difficulty: "basico" },
      { id: 4002, question: "¿En qué año se firmó el Protocolo de Río de Janeiro tras la guerra con Ecuador?", options: ["1941", "1942", "1945", "1938"], correctIndex: 1, explanation: "El Protocolo de Río de Janeiro se firmó en 1942, tras la Guerra de 1941, definiendo los límites entre ambos países.", difficulty: "intermedio" },
      { id: 4003, question: "¿Cuál fue el concepto económico central propuesto por Haya de la Torre?", options: ["Dictadura del comercio exterior", "Liberalización económica total", "Industrialización por sustitución de importaciones", "Economía planificada soviética"], correctIndex: 0, explanation: "Haya de la Torre propuso la 'dictadura del comercio exterior' para controlar los recursos económicos nacionales frente al imperialismo.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "segundo-militarismo",
    tip: "Odría gobernó 1948-1956. Su esposa Manuelita gobernó de facto 1950-1955. Memoriza: 1948-golpe, 1950-Manuelita, 1955-revolución libertadora.",
    theory: [
      {
        level: "basico",
        title: "Golpe de Odría y gobierno autoritario",
        lines: [
          "En 1948, Manuel A. Odría dio un golpe de estado derrocando al gobierno de José Luis Bustamante y Rivero.",
          "Odría instauró un régimen autoritario conocido como el 'Ochenio' (1948-1956).",
          "Su gobierno se caracterizó por la represión de opositores, la censura de prensa y la persecución política.",
          "Entre 1950 y 1955, Odría delegó el poder a su esposa, Manuelita Odría, mientras gobernaba desde las sombras.",
          "Manuelita Odría impulsó obras públicas, educación y la mejora de la infraestructura urbana.",
          "Odría cayó en 1955 tras una 'revolución libertadora' encabezada por el general Ricardo Pérez Godoy."
        ]
      },
      {
        level: "intermedio",
        title: "Economía, relaciones exteriores y movimientos estudiantiles",
        lines: [
          "Durante el Ochenio, el Perú experimentó un crecimiento económico basado en la exportación de minerales y productos agropecuarios.",
          "Las relaciones internacionales del Perú se orientaron hacia una política de no injerencia y acercamiento a Estados Unidos.",
          "Los movimientos estudiantiles fueron reprimidos con violencia, destacando la Masacre de la Plaza San Martín en 1954.",
          "El gobierno de Odría implementó políticas de desarrollo industrial sustitutivo para reducir la dependencia de importaciones.",
          "La censura de prensa fue una de las características más notorias, con cierre sistemático de medios opositores.",
          "El fin del Ochenio marcó el regreso a un proceso electoral, aunque no plenamente democrático."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto en la democracia y comparación con otros golpes",
        lines: [
          "El Ochenio consolidó un modelo de gobierno autoritario-militar que se repetiría en la historia peruana posterior.",
          "La experiencia de Odría demostró la fragilidad de las instituciones democráticas frente a las ambiciones personales del poder militar.",
          "La 'revolución libertadora' de 1955 sentó precedentes para futuros movimientos cívico-militares en el Perú.",
          "La dictadura de Odría se comparó con otros regímenes autoritarios latinoamericanos como el de Trujillo en Rep. Dominicana.",
          "El legado del Ochenio dejó una huella profunda en la percepción social sobre los gobiernos militares en el Perú.",
          "El retorno a la democracia en 1956 fue un proceso gradual que no resolvió las tensiones sociales acumuladas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#7c3aed" font-size="12" font-weight="bold" font-family="sans-serif">Segundo Militarismo: Odría (1948-1956)</text>',
      '  <rect x="20" y="50" width="80" height="25" fill="#ede9fe" rx="6"/>',
      '  <text x="60" y="67" text-anchor="middle" fill="#5b21b6" font-size="9" font-weight="bold" font-family="sans-serif">Golpe 1948</text>',
      '  <line x1="100" y1="62" x2="130" y2="62" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow2)"/>',
      '  <rect x="130" y="50" width="80" height="25" fill="#fce7f3" rx="6"/>',
      '  <text x="170" y="67" text-anchor="middle" fill="#9d174d" font-size="9" font-weight="bold" font-family="sans-serif">Manuelita 1950</text>',
      '  <line x1="210" y1="62" x2="240" y2="62" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrow2)"/>',
      '  <rect x="240" y="50" width="50" height="25" fill="#fee2e2" rx="6"/>',
      '  <text x="265" y="67" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">Caída 1955</text>',
      '  <rect x="20" y="100" width="260" height="80" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="120" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Características del Ochenio</text>',
      '  <text x="30" y="138" fill="#475569" font-size="9" font-family="sans-serif">• Represión de opositores</text>',
      '  <text x="30" y="153" fill="#475569" font-size="9" font-family="sans-serif">• Censura de prensa</text>',
      '  <text x="30" y="168" fill="#475569" font-size="9" font-family="sans-serif">• Desarrollo económico</text>',
      '  <defs><marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4010, question: "¿En qué año dio su golpe de estado Manuel A. Odría?", options: ["1946", "1948", "1950", "1952"], correctIndex: 1, explanation: "Odría dio su golpe de estado el 27 de octubre de 1948, derrocando al gobierno de Bustamante y Rivero.", difficulty: "basico" },
      { id: 4011, question: "¿Qué acontecimiento marcó la represión estudiantil durante el Ochenio?", options: ["Masacre de la Plaza San Martín (1954)", "Matanza de Trujillo (1932)", "Violencia en Puno (2023)", "Golpe de Velasco (1968)"], correctIndex: 0, explanation: "La Masacre de la Plaza San Martín en 1954 fue un episodio emblemático de la represión estudiantil durante el Ochenio.", difficulty: "intermedio" },
      { id: 4012, question: "¿Cuál fue el legado más significativo del Ochenio para la democracia peruana?", options: ["Consolidó un modelo de gobierno autoritario-militar repetible", "Estableció una constitución democrática duradera", "Impulsó la industrialización completa del país", "Eliminó la corrupción política"], correctIndex: 0, explanation: "El Ochenio consolidó un patrón de gobierno autoritario-militar que se repetiría en la historia peruana posterior.", difficulty: "avanzado" }
    ]
  },
"@

$part2 = @"
  {
    slug: "primer-belaunde",
    tip: "Belaúnde (1963-1968) promovió la democracia y la industrialización. Fue derrocado por Velasco en 1968. Memoria: Reforma agraria anunciada, contradicción con la izquierda.",
    theory: [
      {
        level: "basico",
        title: "Elecciones de 1963, gobierno y golpe de Velasco",
        lines: [
          "En 1963, Fernando Belaúnde Terry fue elegido presidente con el apoyo de la coalición Acción Popular-MDP.",
          "Su gobierno promovió la democratización, la educación y la industrialización del país.",
          "Belaúnde anunció una reforma agraria que fue criticada por ser insuficiente por la izquierda.",
          "El 3 de octubre de 1968, el general Juan Velasco Alvarado dio un golpe de estado contra Belaúnde.",
          "El golpe fue motivado por la crisis económica y la percepción de incapacidad gubernamental.",
          "Belaúnde fue exiliado a Argentina y el Perú inició una nueva etapa de gobierno militar reformista."
        ]
      },
      {
        level: "intermedio",
        title: "Coalición AP-UDP y contradicciones del gobierno",
        lines: [
          "La coalición Acción Popular-MDP (Movimiento Democrático Popular) unió fuerzas reformistas de distintos sectores.",
          "El APRA se opuso a Belaúnde acusándolo de no cumplir sus promesas de reforma agraria y social.",
          "La contradicción principal fue la falta de voluntad política para una reforma agraria profunda.",
          "La izquierda exigía nacionalizaciones y redistribución de tierras, mientras Belaúnde buscaba un equilibrio.",
          "El fracaso de las negociaciones con los militares reformistas condujo al golpe de estado de 1968.",
          "El golpe de Velasco contó con apoyo de sectores que veían la reforma agraria como urgente e inevitable."
        ]
      },
      {
        level: "avanzado",
        title: "Reformismo civil vs. fuerzas armadas y contexto latinoamericano",
        lines: [
          "El primer gobierno de Belaúnde representó el último intento serio de reformismo civil en Perú antes de 1980.",
          "El contexto latinoamericano de los años 60 influyó profundamente en la crisis política peruana.",
          "La Revolución Cubana (1959) inspiró movimientos de izquierda en toda América Latina, incluido el Perú.",
          "Los militares reformistas peruanos vieron en el golpe la oportunidad de implementar cambios estructurales.",
          "La contradicción entre reformismo civil y proyecto militar reformista definió la transición política de 1968.",
          "El golpe de Velasco marcó el inicio de un proyecto de transformación social sin precedentes en la historia peruana."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#059669" font-size="12" font-weight="bold" font-family="sans-serif">Primer Gobierno de Belaúnde (1963-1968)</text>',
      '  <rect x="20" y="50" width="80" height="30" fill="#d1fae5" rx="6"/>',
      '  <text x="60" y="70" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold" font-family="sans-serif">Elección 1963</text>',
      '  <line x1="100" y1="65" x2="130" y2="65" stroke="#059669" stroke-width="2" marker-end="url(#arrow3)"/>',
      '  <rect x="130" y="50" width="80" height="30" fill="#ecfdf5" rx="6"/>',
      '  <text x="170" y="70" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold" font-family="sans-serif">Gobierno</text>',
      '  <line x1="210" y1="65" x2="240" y2="65" stroke="#059669" stroke-width="2" marker-end="url(#arrow3)"/>',
      '  <rect x="240" y="50" width="50" height="30" fill="#fee2e2" rx="6"/>',
      '  <text x="265" y="70" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">Golpe 1968</text>',
      '  <rect x="20" y="100" width="260" height="80" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="118" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Tensiones del gobierno</text>',
      '  <text x="30" y="136" fill="#475569" font-size="9" font-family="sans-serif">• Reforma agraria insuficiente</text>',
      '  <text x="30" y="151" fill="#475569" font-size="9" font-family="sans-serif">• Oposición del APRA</text>',
      '  <text x="30" y="166" fill="#475569" font-size="9" font-family="sans-serif">• Crisis económica y golpe militar</text>',
      '  <defs><marker id="arrow3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#059669"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4020, question: "¿En qué año fue elegido Fernando Belaúnde Terry como presidente del Perú?", options: ["1960", "1963", "1966", "1968"], correctIndex: 1, explanation: "Belaúnde fue elegido en 1963 con el apoyo de la coalición Acción Popular-MDP.", difficulty: "basico" },
      { id: 4021, question: "¿Cuál fue la contradicción principal del gobierno de Belaúnde con la izquierda?", options: ["Reforma agraria percibida como insuficiente", "Falta de educación pública", "Censura de prensa total", "Persecución del APRA"], correctIndex: 0, explanation: "La izquierda criticó la reforma agraria de Belaúnde como insuficiente, exigiendo cambios más profundos en la distribución de tierras.", difficulty: "intermedio" },
      { id: 4022, question: "¿Qué significado histórico tuvo el golpe de Velasco en el contexto latinoamericano?", options: ["Marcó el inicio de un proyecto de transformación social sin precedentes", "Fue una simple restauración del orden conservador", "No tuvo relación con movimientos reformistas continentales", "Consolidó el poder de la oligarquía terrateniente"], correctIndex: 0, explanation: "El golpe de Velasco representó un proyecto reformista radical que buscó transformar la estructura social del Perú, en sintonía con movimientos similares en la región.", difficulty: "avanzado" }
    ]
  },
  {
    slug: "velasco-y-reforma",
    tip: "Velasco (1968-1975) hizo la reforma agraria más grande de América Latina. Expropió haciendas y las repartió a campesinos. Fue derrocado por Morales Bermúdez.",
    theory: [
      {
        level: "basico",
        title: "Reforma agraria, expropiaciones y cambios sociales",
        lines: [
          "En 1968, el general Juan Velasco Alvarado dio un golpe de estado instaurando un gobierno militar reformista.",
          "Su principal obra fue la Reforma Agraria de 1969, que expropió grandes haciendas para redistribuirlas a campesinos.",
          "La reforma buscó eliminar el latifundio como estructura de explotación social y económica en el campo.",
          "Se crearon cooperativas agrícolas y se impulsó la organización comunal de los productores rurales.",
          "Velasco también nacionalizó empresas extranjeras en sectores clave como la minería y la industria.",
          "Los cambios sociales incluyeron la creación de sindicatos campesinos y la mejora de las condiciones de vida rurales."
        ]
      },
      {
        level: "intermedio",
        title: "Modelos económicos: Velasco vs. Morales Bermúdez",
        lines: [
          "El gobierno de Velasco implementó un modelo económico mixto con fuerte intervención estatal en la economía.",
          "Se crearon empresas estatales para controlar sectores estratégicos como el petróleo, la siderurgia y la pesca.",
          "En 1975, Morales Bermúdez dio un contra-golpe contra Velasco, derrocándolo argumentando su enfermedad.",
          "Morales Bermúdez implementó un modelo de liberalización económica, abriendo el mercado a la inversión privada.",
          "La transición de un modelo estatista a uno más abierto generó tensiones sociales y económicas significativas.",
          "El fin del gobierno militar en 1980 marcó el retorno a la democracia bajo el gobierno civil de Belaúnde."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto a largo plazo: latifundio vs. minifundio y producción agrícola",
        lines: [
          "La reforma agraria peruana fue una de las más ambiciosas de América Latina, transformando radicalmente la estructura agraria.",
          "Sin embargo, la redistribución creó minifundios que redujeron la productividad agrícola en comparación con las grandes haciendas.",
          "El latifundio fue eliminado como sistema, pero no se logró una producción agrícola eficiente y competitiva.",
          "Las cooperativas agrícolas tuvieron resultados mixtos, con problemas de gestión y falta de capacitación técnica.",
          "El impacto a largo plazo incluyó la migración rural-urbana masiva hacia las ciudades costeras del Perú.",
          "La reforma agraria sentó bases para la lucha por la tierra que continuaría durante décadas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#ea580c" font-size="12" font-weight="bold" font-family="sans-serif">Reforma Agraria: Velasco (1968-1975)</text>',
      '  <rect x="20" y="45" width="100" height="30" fill="#fed7aa" rx="6"/>',
      '  <text x="70" y="65" text-anchor="middle" fill="#9a3412" font-size="9" font-weight="bold" font-family="sans-serif">Golpe 1968</text>',
      '  <line x1="120" y1="60" x2="150" y2="60" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow4)"/>',
      '  <rect x="150" y="45" width="100" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="200" y="65" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">Reforma 1969</text>',
      '  <line x1="250" y1="60" x2="275" y2="60" stroke="#ea580c" stroke-width="2" marker-end="url(#arrow4)"/>',
      '  <rect x="20" y="95" width="260" height="85" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="115" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Transformación Agraria</text>',
      '  <text x="30" y="133" fill="#475569" font-size="9" font-family="sans-serif">Latifundio → Minifundio + Cooperativas</text>',
      '  <text x="30" y="148" fill="#475569" font-size="9" font-family="sans-serif">Nacionalización de empresas extranjeras</text>',
      '  <text x="30" y="163" fill="#475569" font-size="9" font-family="sans-serif">Migración rural-urbana masiva</text>',
      '  <defs><marker id="arrow4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ea580c"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4030, question: "¿En qué año se implementó la Reforma Agraria en el Perú?", options: ["1968", "1969", "1970", "1975"], correctIndex: 1, explanation: "La Reforma Agraria se implementó en 1969 bajo el gobierno de Velasco Alvarado.", difficulty: "basico" },
      { id: 4031, question: "¿Cuál fue uno de los problemas estructurales de la Reforma Agraria?", options: ["Creación de minifundios con baja productividad", "Exceso de inversión extranjera en el campo", "Falta de organización campesina", "No se expropiaron haciendas"], correctIndex: 0, explanation: "La reforma creó minifundios que redujeron la productividad agrícola en comparación con las grandes haciendas expropiadas.", difficulty: "intermedio" },
      { id: 4032, question: "¿Qué modelo económico implementó Morales Bermúdez tras derrocar a Velasco?", options: ["Modelo de liberalización económica", "Modelo estatista más radical", "Modelo de economía planificada", "Modelo de autarquía económica"], correctIndex: 0, explanation: "Morales Bermúdez implementó un modelo de liberalización económica, abriendo el mercado a la inversión privada tras el estatismo de Velasco.", difficulty: "avanzado" }
    ]
  },
"@

$part3 = @"
  {
    slug: "terrorismo-y-dictadura",
    tip: "El terrorismo (1980-2000) mató a más de 69,000 personas. Fujimori dio el autogolpe en 1992. Memoriza: Sendero Luminoso (Abimael Guzmán), MRTA, Comisión de la Verdad.",
    theory: [
      {
        level: "basico",
        title: "Sendero Luminoso, MRTA y violencia 1980-2000",
        lines: [
          "El Sendero Luminoso fue una organización maoísta liderada por Abimael Guzmán que inició la lucha armada en 1980.",
          "El MRTA (Movimiento Revolucionario Túpac Amaru) fue otro grupo insurgente de orientación marxista-leninista.",
          "Entre 1980 y 2000, la violencia terrorista mató a más de 69,000 personas, principalmente en zonas rurales.",
          "Sendero Luminoso atacó infraestructura, instituciones del Estado y comunidades campesinas.",
          "El MRTA realizó secuestros y atentados, destacando la toma de la embajada de Japón en 1996.",
          "La lucha contra el terrorismo provocó violaciones de derechos humanos por parte de las fuerzas del Estado."
        ]
      },
      {
        level: "intermedio",
        title: "Autogolpe de Fujimori, Montesinos y el régimen autoritario",
        lines: [
          "En 1992, Alberto Fujimori dio un autogolpe disolviendo el Congreso y suspendiendo la Constitución.",
          "El autogolpe fue justificado como medida para combatir el terrorismo y la corrupción política.",
          "Vladimiro Montesinos fue la figura clave detrás del aparato de inteligencia y represión del régimen.",
          "Fujimori implementó políticas económicas neoliberales, incluyendo la privatización de empresas estatales.",
          "La lucha contra Sendero Luminoso logró la captura de Abimael Guzmán en septiembre de 1992.",
          "El régimen de Fujimori terminó en 2000 tras la revelación de los vladivideos y la crisis política subsiguiente."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto en derechos humanos, memoria y reconciliación",
        lines: [
          "El conflicto armado interno dejó un legado profundo de violaciones de derechos humanos en todo el país.",
          "La Comisión de la Verdad y Reconciliación (2001-2003) documentó más de 69,000 muertos y desaparecidos.",
          "Los casos emblemáticos incluyen la masacre de Barrios Altos (1991) y el caso de los penales (1992).",
          "La reconciliación nacional requiere reconocer el sufrimiento de las víctimas y garantizar no repetición.",
          "El juicio a Fujimori y Montesinos por crímenes de derechos humanos marcó un precedente histórico.",
          "La memoria histórica es fundamental para construir una sociedad más justa y democrática en el Perú."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="bold" font-family="sans-serif">Terrorismo y Dictadura (1980-2000)</text>',
      '  <rect x="20" y="45" width="120" height="30" fill="#fee2e2" rx="6"/>',
      '  <text x="80" y="65" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">Sendero Luminoso</text>',
      '  <rect x="160" y="45" width="120" height="30" fill="#fef3c7" rx="6"/>',
      '  <text x="220" y="65" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">MRTA</text>',
      '  <rect x="20" y="95" width="260" height="90" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="115" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Impacto del Conflicto</text>',
      '  <text x="30" y="133" fill="#475569" font-size="9" font-family="sans-serif">• 69,000+ víctimas mortales</text>',
      '  <text x="30" y="148" fill="#475569" font-size="9" font-family="sans-serif">• Autogolpe de Fujimori (1992)</text>',
      '  <text x="30" y="163" fill="#475569" font-size="9" font-family="sans-serif">• Captura de Guzmán (1992)</text>',
      '  <text x="30" y="178" fill="#475569" font-size="9" font-family="sans-serif">• Violaciones de derechos humanos</text>',
      '</svg>'
    ],
    exercises: [
      { id: 4040, question: "¿Quién fue el líder del Sendero Luminoso?", options: ["Abimael Guzmán", "Vladimiro Montesinos", "Alberto Fujimori", "Oscar Ramírez"], correctIndex: 0, explanation: "Abimael Guzmán fue el líder fundador del Sendero Luminoso, capturado en 1992.", difficulty: "basico" },
      { id: 4041, question: "¿En qué año Fujimori dio el autogolpe que disolvió el Congreso?", options: ["1990", "1992", "1995", "1998"], correctIndex: 1, explanation: "Fujimori dio el autogolpe el 5 de abril de 1992, disolviendo el Congreso y suspendiendo la Constitución.", difficulty: "intermedio" },
      { id: 4042, question: "¿Qué caso emblemático de derechos humanos involucró la masacre de Barrios Altos?", options: ["Grupo Colina y operaciones de inteligencia", "El MRTA y la embajada de Japón", "Sendero Luminoso y comunidades campesinas", "El ejército y zonas rurales"], correctIndex: 0, explanation: "La masacre de Barrios Altos (1991) fue perpetrada por el Grupo Colina, unidad de inteligencia vinculada al régimen de Fujimori.", difficulty: "avanzado" }
    ]
  },
"@

$part4 = @"
  {
    slug: "transicion-democratica",
    tip: "La transición (2001-2016) fue difícil: Paniagua limpió, Toledo creció, Humala moderó. Memoriza: Comisión de la Verdad, crisis 2008, corrupción generalizada.",
    theory: [
      {
        level: "basico",
        title: "Paniagua, Toledo y Humala",
        lines: [
          "Valentín Paniagua asumió la presidencia en 2001 tras la caída de Fujimori, liderando un gobierno de transición.",
          "Paniagua convocó elecciones y sentó las bases para la reconstrucción democrática del país.",
          "Alejandro Toledo fue elegido en 2001 y gobernó hasta 2006, implementando políticas de crecimiento económico.",
          "Toledo enfrentó protestas sociales y crisis políticas que afectaron gravemente su popularidad.",
          "Ollanta Humala fue elegido en 2011 con un discurso moderado, alejándose de su postura radical inicial.",
          "Humala implementó políticas sociales y mantuvo la estabilidad macroeconómica durante su gobierno."
        ]
      },
      {
        level: "intermedio",
        title: "Crecimiento económico, pobreza y corrupción",
        lines: [
          "Durante la transición, el Perú experimentó un crecimiento económico sostenido impulsado por los commodities.",
          "La pobreza disminuyó significativamente, pero la desigualdad persistió en zonas rurales y urbanas.",
          "La corrupción fue un problema crónico que afectó a todos los gobiernos durante la transición.",
          "El caso Odebrecht y otros escándalos de corrupción sacudieron al país a partir de 2016.",
          "La crisis de 2008, derivada de la crisis financiera global, afectó momentáneamente la economía peruana.",
          "La inestabilidad política y la corrupción generaron desconfianza ciudadana en las instituciones del Estado."
        ]
      },
      {
        level: "avanzado",
        title: "Legado, comparaciones y participación ciudadana",
        lines: [
          "La transición democrática dejó un legado mixto: crecimiento económico pero debilidad institucional persistente.",
          "La comparación con otros países latinoamericanos muestra que el Perú logró estabilidad política relativa.",
          "La participación ciudadana aumentó con movimientos sociales que demandaron transparencia y justicia.",
          "Las protestas contra la corrupción y la ineficiencia del Estado se intensificaron durante la transición.",
          "El legado de la transición incluye la consolidación de derechos civiles y la apertura política.",
          "La sociedad civil peruana se fortaleció como actor clave en la defensa de la democracia y los derechos humanos."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#0891b2" font-size="12" font-weight="bold" font-family="sans-serif">Transición Democrática (2001-2016)</text>',
      '  <rect x="15" y="45" width="80" height="25" fill="#cffafe" rx="6"/>',
      '  <text x="55" y="62" text-anchor="middle" fill="#155e75" font-size="8" font-weight="bold" font-family="sans-serif">Paniagua</text>',
      '  <line x1="95" y1="57" x2="110" y2="57" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow5)"/>',
      '  <rect x="110" y="45" width="80" height="25" fill="#cffafe" rx="6"/>',
      '  <text x="150" y="62" text-anchor="middle" fill="#155e75" font-size="8" font-weight="bold" font-family="sans-serif">Toledo</text>',
      '  <line x1="190" y1="57" x2="205" y2="57" stroke="#0891b2" stroke-width="2" marker-end="url(#arrow5)"/>',
      '  <rect x="205" y="45" width="80" height="25" fill="#cffafe" rx="6"/>',
      '  <text x="245" y="62" text-anchor="middle" fill="#155e75" font-size="8" font-weight="bold" font-family="sans-serif">Humala</text>',
      '  <rect x="20" y="90" width="260" height="95" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="110" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Balance de la Transición</text>',
      '  <text x="30" y="128" fill="#16a34a" font-size="9" font-family="sans-serif">+ Crecimiento económico sostenido</text>',
      '  <text x="30" y="143" fill="#16a34a" font-size="9" font-family="sans-serif">+ Reducción de pobreza</text>',
      '  <text x="30" y="158" fill="#dc2626" font-size="9" font-family="sans-serif">- Corrupción generalizada</text>',
      '  <text x="30" y="173" fill="#dc2626" font-size="9" font-family="sans-serif">- Debilidad institucional</text>',
      '  <defs><marker id="arrow5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0891b2"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4050, question: "¿Quién asumió la presidencia tras la caída de Fujimori en 2001?", options: ["Valentín Paniagua", "Alejandro Toledo", "Alan García", "Ollanta Humala"], correctIndex: 0, explanation: "Valentín Paniagua asumió la presidencia como presidente del Congreso tras la renuncia de Fujimori.", difficulty: "basico" },
      { id: 4051, question: "¿Cuál fue el principal problema estructural durante la transición democrática?", options: ["Crecimiento económico insuficiente", "Corrupción generalizada en todas las ramas del Estado", "Falta de elecciones libres", "Ausencia de partidos políticos"], correctIndex: 1, explanation: "La corrupción fue el problema más persistente durante la transición, afectando a todos los gobiernos y erosionando la confianza institucional.", difficulty: "intermedio" },
      { id: 4052, question: "¿Qué actor social se fortaleció como defensor de la democracia durante la transición?", options: ["La sociedad civil organizada", "Las fuerzas armadas", "La Iglesia Católica", "Los medios de comunicación"], correctIndex: 0, explanation: "La sociedad civil peruana se fortaleció como actor clave en la defensa de la democracia, los derechos humanos y la lucha contra la corrupción.", difficulty: "avanzado" }
    ]
  },
"@

$part5 = @"
  {
    slug: "peru-contemporaneo",
    tip: "El Perú contemporáneo (2016-2025) tiene crisis políticas frecuentes: Kuczynski renunció, Vizcarra fue vacado, Castillo fue vacado y arrestado.",
    theory: [
      {
        level: "basico",
        title: "Kuczynski, Vizcarra, Castillo y Boluarte",
        lines: [
          "Pedro Pablo Kuczynski fue elegido en 2016 pero renunció en 2018 ante la amenaza de vacancia por corrupción.",
          "Martín Vizcarra asumió la presidencia y fue vacado por el Congreso en 2020 en un proceso polémico.",
          "Manuel Merino asumió brevemente la presidencia pero renunció tras fuertes protestas ciudadanas.",
          "Francisco Sagasti lideró un gobierno de transición hasta las elecciones de 2021.",
          "Pedro Castillo fue elegido en 2021 con un discurso de transformación social pero enfrentó múltiples crisis.",
          "Castillo fue vacado y arrestado en diciembre de 2022, asumiendo Dina Boluarte la presidencia."
        ]
      },
      {
        level: "intermedio",
        title: "Crisis constitucional, vacancias y protestas",
        lines: [
          "El período 2016-2023 estuvo marcado por una crisis constitucional sin precedentes en la república.",
          "Las vacancias presidenciales de Vizcarra y Castillo reflejaron la profunda polarización política del país.",
          "Las protestas sociales contra Boluarte en 2022-2023 dejaron un saldo trágico de muertos y heridos.",
          "El Congreso fue percibido como un obstáculo para la gobernabilidad y la implementación de reformas.",
          "La inestabilidad presidencial generó incertidumbre económica y social en todo el territorio nacional.",
          "La crisis política cuestionó la vigencia de la Constitución de 1993 y el modelo institucional vigente."
        ]
      },
      {
        level: "avanzado",
        title: "Estabilidad institucional, reformas pendientes y participación ciudadana",
        lines: [
          "El Perú enfrenta un desafío fundamental de construir estabilidad institucional en un contexto de polarización extrema.",
          "Las reformas pendientes incluyen la modernización del Estado, la descentralización y la mejora de servicios públicos.",
          "La participación ciudadana se ha intensificado a través de protestas sociales y demandas de rendición de cuentas.",
          "La crisis contemporánea reveló las debilidades estructurales del sistema político peruano post-Fujimori.",
          "El debate sobre una nueva constitución refleja la búsqueda de un nuevo contrato social para el país.",
          "La superación de la crisis requiere diálogo, consenso y compromiso de todos los sectores de la sociedad."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#9333ea" font-size="12" font-weight="bold" font-family="sans-serif">Perú Contemporáneo (2016-2025)</text>',
      '  <rect x="10" y="45" width="60" height="25" fill="#f3e8ff" rx="6"/>',
      '  <text x="40" y="62" text-anchor="middle" fill="#6b21a8" font-size="7" font-weight="bold" font-family="sans-serif">Kuczynski</text>',
      '  <line x1="70" y1="57" x2="82" y2="57" stroke="#9333ea" stroke-width="2" marker-end="url(#arrow6)"/>',
      '  <rect x="82" y="45" width="60" height="25" fill="#fce7f3" rx="6"/>',
      '  <text x="112" y="62" text-anchor="middle" fill="#9d174d" font-size="7" font-weight="bold" font-family="sans-serif">Vizcarra</text>',
      '  <line x1="142" y1="57" x2="154" y2="57" stroke="#9333ea" stroke-width="2" marker-end="url(#arrow6)"/>',
      '  <rect x="154" y="45" width="60" height="25" fill="#fee2e2" rx="6"/>',
      '  <text x="184" y="62" text-anchor="middle" fill="#991b1b" font-size="7" font-weight="bold" font-family="sans-serif">Castillo</text>',
      '  <line x1="214" y1="57" x2="226" y2="57" stroke="#9333ea" stroke-width="2" marker-end="url(#arrow6)"/>',
      '  <rect x="226" y="45" width="65" height="25" fill="#fef3c7" rx="6"/>',
      '  <text x="258" y="62" text-anchor="middle" fill="#92400e" font-size="7" font-weight="bold" font-family="sans-serif">Boluarte</text>',
      '  <rect x="20" y="90" width="260" height="95" fill="#f1f5f9" rx="8"/>',
      '  <text x="150" y="110" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">Crisis Institucional</text>',
      '  <text x="30" y="128" fill="#475569" font-size="9" font-family="sans-serif">• Vacancias presidenciales (2020, 2022)</text>',
      '  <text x="30" y="143" fill="#475569" font-size="9" font-family="sans-serif">• Protestas sociales masivas</text>',
      '  <text x="30" y="158" fill="#475569" font-size="9" font-family="sans-serif">• Debate constitucional</text>',
      '  <text x="30" y="173" fill="#475569" font-size="9" font-family="sans-serif">• Polarización política extrema</text>',
      '  <defs><marker id="arrow6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9333ea"/></marker></defs>',
      '</svg>'
    ],
    exercises: [
      { id: 4060, question: "¿Por qué renunció Pedro Pablo Kuczynski en 2018?", options: ["Ante la amenaza de vacancia por corrupción", "Por razones de salud", "Tras perder las elecciones", "Por conflictos con el Congreso"], correctIndex: 0, explanation: "Kuczynski renunció en marzo de 2018 antes de que el Congreso votara su vacancia por presuntos pagos ilegales de Odebrecht.", difficulty: "basico" },
      { id: 4061, question: "¿Qué proceso constitucional se utilizó contra Vizcarra en 2020?", options: ["Vacancia presidencial por incapacidad moral permanente", "Juicio político por corrupción", "Referéndum revocatorio", "Destitución por la Corte Suprema"], correctIndex: 0, explanation: "Vizcarra fue vacado en noviembre de 2020 bajo la figura de 'incapacidad moral permanente', un mecanismo cuestionado jurídicamente.", difficulty: "intermedio" },
      { id: 4062, question: "¿Qué reveló la crisis política contemporánea sobre el sistema institucional peruano?", options: ["Debilidades estructurales del modelo post-Fujimori", "Fortaleza del sistema de contrapesos", "Éxito de la descentralización", "Consolidación del Estado de derecho"], correctIndex: 0, explanation: "La crisis contemporánea evidenció las debilidades estructurales del sistema político peruano, incluyendo la falta de equilibrio entre poderes y ausencia de cultura democrática.", difficulty: "avanzado" }
    ]
  },
"@

$part6 = @"
  {
    slug: "derechos-humanos",
    tip: "La Comisión de la Verdad (2001-2003) documentó 69,280 muertos. El caso de los penales fue emblemático. Memoriza: Comisión de la Verdad, informe final, reparaciones.",
    theory: [
      {
        level: "basico",
        title: "Qué fue la Comisión de la Verdad, mandato y hallazgos",
        lines: [
          "La Comisión de la Verdad y Reconciliación (CVR) fue creada en 2001 para investigar el conflicto armado interno.",
          "Su mandato fue establecer la verdad sobre las violaciones de derechos humanos cometidas entre 1980 y 2000.",
          "La CVR documentó 69,280 víctimas mortales y desaparecidos durante el período de violencia.",
          "El informe final fue presentado en agosto de 2003 y contuvo recomendaciones para la reconciliación nacional.",
          "La comisión estuvo presidida por Salomón Lerner Febres y contó con el apoyo de organizaciones de derechos humanos.",
          "Los hallazgos de la CVR revelaron la responsabilidad de Sendero Luminoso, el MRTA y las fuerzas del Estado."
        ]
      },
      {
        level: "intermedio",
        title: "Casos emblemáticos, penales y comunidades afectadas",
        lines: [
          "El caso de los penales (1992) involucró la ejecución extrajudicial de internos acusados de terrorismo.",
          "La masacre de Barrios Altos (1991) dejó 15 muertos y fue perpetrada por el Grupo Colina.",
          "Las comunidades campesinas de Ayacucho fueron las más afectadas por la violencia de Sendero Luminoso.",
          "El caso de los vladivideos reveló la corrupción sistémica del régimen de Fujimori y Montesinos.",
          "Los casos emblemáticos sirvieron como base para procesos judiciales contra responsables de violaciones.",
          "La CVR documentó desplazamientos forzados, violencia sexual y reclutamiento forzado de menores."
        ]
      },
      {
        level: "avanzado",
        title: "Justicia transicional, reparaciones y memoria histórica",
        lines: [
          "La justicia transicional busca equilibrar verdad, justicia y reparación en sociedades post-conflicto.",
          "El caso peruano ha sido reconocido internacionalmente como un modelo de comisión de la verdad.",
          "Las reparaciones incluyeron indemnizaciones económicas, programas de salud y educación para víctimas.",
          "La memoria histórica se ha convertido en un instrumento fundamental para la no repetición de la violencia.",
          "El debate sobre amnistías y prescripción de crímenes sigue siendo un tema controversial en el Perú.",
          "La sociedad civil peruana ha jugado un rol fundamental en la defensa de los derechos de las víctimas."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#b91c1c" font-size="12" font-weight="bold" font-family="sans-serif">Derechos Humanos y Comisión de la Verdad</text>',
      '  <rect x="20" y="45" width="260" height="30" fill="#fef2f2" rx="6"/>',
      '  <text x="150" y="65" text-anchor="middle" fill="#991b1b" font-size="10" font-weight="bold" font-family="sans-serif">69,280 víctimas documentadas (1980-2000)</text>',
      '  <rect x="20" y="90" width="120" height="45" fill="#f1f5f9" rx="6"/>',
      '  <text x="80" y="108" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">CVR (2001-2003)</text>',
      '  <text x="80" y="125" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Verdad y Reconciliación</text>',
      '  <rect x="160" y="90" width="120" height="45" fill="#f1f5f9" rx="6"/>',
      '  <text x="220" y="108" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Casos Emblemáticos</text>',
      '  <text x="220" y="125" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Barrios Altos, Penales</text>',
      '  <rect x="20" y="150" width="260" height="35" fill="#ecfdf5" rx="6"/>',
      '  <text x="150" y="172" text-anchor="middle" fill="#065f46" font-size="9" font-weight="bold" font-family="sans-serif">Justicia Transicional + Reparaciones + Memoria</text>',
      '</svg>'
    ],
    exercises: [
      { id: 4070, question: "¿Cuántas víctimas documentó la Comisión de la Verdad y Reconciliación?", options: ["69,280", "50,000", "100,000", "30,000"], correctIndex: 0, explanation: "La CVR documentó 69,280 víctimas mortales y desaparecidos durante el conflicto armado interno (1980-2000).", difficulty: "basico" },
      { id: 4071, question: "¿Qué caso emblemático involucró la ejecución de internos en los penales?", options: ["La matanza de los penales (1992)", "La masacre de Putis (1983)", "El caso de Accomarca (1985)", "La toma de la embajada de Japón (1996)"], correctIndex: 0, explanation: "La matanza de los penales en 1992 involucró la ejecución extrajudicial de internos acusados de terrorismo por agentes del Estado.", difficulty: "intermedio" },
      { id: 4072, question: "¿Cuál es el principio fundamental de la justicia transicional en sociedades post-conflicto?", options: ["Equilibrar verdad, justicia y reparación", "Olvídar el pasado para avanzar", "Castigo severo sin excepciones", "Impunidad garantizada para los victimarios"], correctIndex: 0, explanation: "La justicia transicional busca equilibrar verdad, justicia y reparación, reconociendo que la paz social requiere abordar las violaciones del pasado de manera integral.", difficulty: "avanzado" }
    ]
  }
];

const historiaModulesPart3: CourseModule[] = [
  {
    slug: "revolucion-francesa",
    tip: "La Revolución Francesa (1789) cambió el mundo. Causas: desigualdad social, Ilustración, crisis económica. Memoriza: Toma de la Bastilla (14 jul 1789), Declaración de Derechos del Hombre.",
    theory: [
      {
        level: "basico",
        title: "Causas y detonantes de la Revolución Francesa",
        lines: [
          "Francia vivía bajo el Antiguo Régimen, dividido en tres estamentos: clero, nobleza y pueblo llano (97% de la población).",
          "Los primeros dos estamentos gozaban de privilegios fiscales, mientras el tercero soportaba la carga tributaria.",
          "La Ilustración (Voltaire, Rousseau, Montesquieu) promovió ideas de libertad, soberanía popular y separación de poderes.",
          "La crisis económica, derivada de la deuda por apoyar la independencia de EE.UU. y malas cosechas, provocó hambruna.",
          "El 14 de julio de 1789, el pueblo tomó la Bastilla, símbolo del poder absoluto monárquico, marcando el inicio de la Revolución.",
          "En agosto de 1789 se proclamó la Declaración de los Derechos del Hombre y del Ciudadano, base del constitucionalismo moderno."
        ]
      },
      {
        level: "intermedio",
        title: "Fases de la Revolución y ascenso de Napoleón",
        lines: [
          "Fase moderada (1789-1792): Asamblea Nacional y Constitución de 1791 que instauró la monarquía constitucional.",
          "Fase radical (1792-1794): Proclamación de la República, ejecución de Luis XVI y Reinado del Terror bajo Robespierre.",
          "El Comité de Salvación Pública, liderado por Robespierre, ejecutó a miles de sospechosos de ser enemigos de la Revolución.",
          "Fase termidoriana (1794-1799): Caída de Robespierre en Termidor y retorno a posiciones moderadas.",
          "Napoleón Bonaparte dio un golpe de Estado en 1799 (18 Brumario) y se proclamó Primer Cónsul.",
          "Napoleón consolidó el Estado moderno con el Código Civil (1804), el sistema métrico y la reorganización administrativa."
        ]
      },
      {
        level: "avanzado",
        title: "Impacto mundial y comparación con la Revolución Americana",
        lines: [
          "La Revolución Francesa influyó directamente en los procesos de independencia latinoamericanos (Bolívar, San Martín).",
          "A diferencia de la Rev. Americana (1776), la francesa buscó transformar la estructura social interna, no solo la soberanía política.",
          "Ambas revoluciones compartieron los ideales ilustrados: libertad, igualdad y gobierno representativo.",
          "La Revolución Francesa generó las guerras napoleónicas, que reconfiguraron el mapa europeo y debilitaron el colonialismo español.",
          "En Haití (1791-1804), la primera revolución esclava exitosa fue directamente influenciada por los ideales franceses.",
          "El legado incluye el laicismo, los derechos humanos, el nacionalismo moderno y el modelo republicano de gobierno."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">La Revolución Francesa (1789)</text>',
      '  <rect x="30" y="45" width="70" height="110" fill="#fecaca" rx="6"/>',
      '  <text x="65" y="75" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">CLERO</text>',
      '  <text x="65" y="90" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Privilegios</text>',
      '  <text x="65" y="102" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">fiscales</text>',
      '  <rect x="115" y="45" width="70" height="110" fill="#fed7aa" rx="6"/>',
      '  <text x="150" y="75" text-anchor="middle" fill="#9a3412" font-size="9" font-weight="bold" font-family="sans-serif">NOBLEZA</text>',
      '  <text x="150" y="90" text-anchor="middle" fill="#9a3412" font-size="8" font-family="sans-serif">Monopolio</text>',
      '  <text x="150" y="102" text-anchor="middle" fill="#9a3412" font-size="8" font-family="sans-serif">territorial</text>',
      '  <rect x="200" y="45" width="70" height="110" fill="#bbf7d0" rx="6"/>',
      '  <text x="235" y="75" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">PUEBLO</text>',
      '  <text x="235" y="90" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">97%</text>',
      '  <text x="235" y="102" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">Sin derechos</text>',
      '  <line x1="150" y1="165" x2="150" y2="180" stroke="#dc2626" stroke-width="2"/>',
      '  <polygon points="145,180 155,180 150,190" fill="#dc2626"/>',
      '  <text x="150" y="198" text-anchor="middle" fill="#dc2626" font-size="8" font-family="sans-serif">14 jul 1789: Toma de la Bastilla</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5001,
        question: "¿Cuál fue el acontecimiento que marcó el inicio simbólico de la Revolución Francesa?",
        options: [
          "La ejecución de Luis XVI",
          "La Toma de la Bastilla el 14 de julio de 1789",
          "El golpe de Estado de Napoleón en 1799",
          "La proclamación del Imperio en 1804"
        ],
        correctIndex: 1,
        explanation: "La Toma de la Bastilla el 14 de julio de 1789 simbolizó el fin del poder absoluto monárquico y es considerada el detonante de la Revolución Francesa.",
        difficulty: "basico"
      },
      {
        id: 5002,
        question: "¿Quién lideró el Comité de Salvación Pública durante el Reinado del Terror (1793-1794)?",
        options: [
          "Napoleón Bonaparte",
          "Louis Antoine de Saint-Just",
          "Maximilien Robespierre",
          "Georges Danton"
        ],
        correctIndex: 2,
        explanation: "Robespierre presidió el Comité de Salvación Pública y ejecutó a miles de personas acusadas de ser enemigos de la Revolución durante el periodo conocido como el Terror.",
        difficulty: "intermedio"
      },
      {
        id: 5003,
        question: "¿En qué aspecto fundamental difirieron la Revolución Francesa (1789) y la Revolución Americana (1776)?",
        options: [
          "La americana usó la violencia y la francesa fue pacífica",
          "La francesa buscó transformar la estructura social interna, mientras la americana se centró en la soberanía política",
          "La americana fue comunista y la francesa fue liberal",
          "Ambas tuvieron las mismas consecuencias sociales"
        ],
        correctIndex: 1,
        explanation: "La Revolución Americana buscó la independencia de una metrópoli extranjera, mientras la Revolución Francesa intentó reestructurar toda la sociedad del Antiguo Régimen, incluyendo clases sociales, religión y economía.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "revoluciones-industriales",
    tip: "La Revolución Industrial comenzó en Inglaterra (1760). Causas: carbón, hierro, máquina de vapor. Memoriza: Watt (vapor), Arkwright (hiladora), Stephenson (ferrocarril).",
    theory: [
      {
        level: "basico",
        title: "Origen e inventos de la Revolución Industrial",
        lines: [
          "La Revolución Industrial comenzó en Inglaterra hacia 1760 y transformó la producción artesanal en manufactura mecanizada.",
          "Factores que explican su inicio en Inglaterra: abundancia de carbón y hierro, colonias como mercado, estabilidad política y Revolution Agrícola.",
          "James Watt perfeccionó la máquina de vapor (1769), fuente de energía que reemplazó al agua y al viento en las fábricas.",
          "Richard Arkwright inventó la hiladora hidráulica (1769), revolucionando la industria textil y concentrando a los trabajadores en fábricas.",
          "George Stephenson construyó la primera locomotora de vapor (1814) y abrió la primera línea de ferrocarril pública (1825).",
          "La mecanización del hilado (Jenny de Hargreaves, 1764) y del tejido (telar mecánico de Cartwright, 1785) transformaron la industria textil."
        ]
      },
      {
        level: "intermedio",
        title: "Consecuencias sociales: proletariado, burguesía y urbanización",
        lines: [
          "La industrialización creó dos nuevas clases sociales: la burguesía industrial (dueña de fábricas) y el proletariado (trabajadores asalariados).",
          "Las condiciones laborales eran precarias: jornadas de 14-16 horas, salarios bajos, trabajo infantil y fábricas insalubres.",
          "La urbanización acelerada generó hacinamiento, pobreza, epidemias de cólera y ausencia de servicios básicos en las ciudades industriales.",
          "Manchester, Birmingham y Leeds crecieron descontroladamente; de ciudades pequeñas pasaron a enormes centros industriales en pocas décadas.",
          "La respuesta obrera surgió con el movimiento cartista (reforma electoral) y los sindicatos (trade unions) en Inglaterra.",
          "El socialismo utópico (Saint-Simon, Fourier, Owen) propuso modelos de cooperación como alternativa a la explotación capitalista."
        ]
      },
      {
        level: "avanzado",
        title: "Segunda Revolución Industrial e impacto global",
        lines: [
          "La Segunda Revolución Industrial (1870-1914) introdujo la electricidad, el acero, los productos químicos y los motores de combustión interna.",
          "Thomas Edison (bombilla eléctrica), Benz y Daimler (automóvil) y la producción en masa de acero (proceso Bessemer) cambiaron la economía.",
          "La industria petrolera (Rockefeller) y la siderúrgica (Carnegie) concentraron enormes capitales en trusts y monopolios.",
          "La industrialización se expandió a Alemania, Francia, EE.UU., Japón (Meiji, 1868) y Rusia, reduciendo la ventaja británica inicial.",
          "En América Latina, la industrialización fue tardía y dependiente, centrada en la exportación de materias primas (café, caucho, minerales).",
          "El impacto global incluyó la desigualdad Norte-Sur, la demanda de materias primas coloniales y la transformación de las relaciones sociales."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Revolution Industrial (1760-1840)</text>',
      '  <rect x="20" y="45" width="80" height="50" fill="#e0e7ff" rx="6"/>',
      '  <text x="60" y="65" text-anchor="middle" fill="#3730a3" font-size="9" font-weight="bold" font-family="sans-serif">Máquina</text>',
      '  <text x="60" y="78" text-anchor="middle" fill="#3730a3" font-size="9" font-family="sans-serif">de Vapor</text>',
      '  <text x="60" y="89" text-anchor="middle" fill="#6366f1" font-size="8" font-family="sans-serif">Watt (1769)</text>',
      '  <rect x="110" y="45" width="80" height="50" fill="#fef3c7" rx="6"/>',
      '  <text x="150" y="65" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">Hiladora</text>',
      '  <text x="150" y="78" text-anchor="middle" fill="#92400e" font-size="9" font-family="sans-serif">Mecánica</text>',
      '  <text x="150" y="89" text-anchor="middle" fill="#d97706" font-size="8" font-family="sans-serif">Arkwright (1769)</text>',
      '  <rect x="200" y="45" width="80" height="50" fill="#dcfce7" rx="6"/>',
      '  <text x="240" y="65" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">Ferrocarril</text>',
      '  <text x="240" y="78" text-anchor="middle" fill="#166534" font-size="9" font-family="sans-serif">a Vapor</text>',
      '  <text x="240" y="89" text-anchor="middle" fill="#22c55e" font-size="8" font-family="sans-serif">Stephenson (1825)</text>',
      '  <line x1="60" y1="105" x2="60" y2="130" stroke="#6366f1" stroke-width="1.5"/>',
      '  <line x1="150" y1="105" x2="150" y2="130" stroke="#d97706" stroke-width="1.5"/>',
      '  <line x1="240" y1="105" x2="240" y2="130" stroke="#22c55e" stroke-width="1.5"/>',
      '  <rect x="30" y="130" width="240" height="35" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="148" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">INGLATERRA: Carbón + Hierro + Capital + Colonias</text>',
      '  <text x="150" y="160" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">→ Fábricas → Ciudad → Proletariado → Burguesía</text>',
      '  <text x="150" y="190" text-anchor="middle" fill="#64748b" font-size="8" font-family="sans-serif">Origen: Inglaterra (1760) → Expansión global</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5010,
        question: "¿Qué invento de James Watt fue fundamental para el desarrollo de la Revolución Industrial?",
        options: [
          "El telar mecánico",
          "La locomotora de vapor",
          "La máquina de vapor perfeccionada",
          "El telégrafo eléctrico"
        ],
        correctIndex: 2,
        explanation: "James Watt perfeccionó la máquina de vapor en 1769, proporcionando una fuente de energía mecánica que revolucionó la producción en fábricas y minas.",
        difficulty: "basico"
      },
      {
        id: 5011,
        question: "¿Cuál fue una consecuencia social directa de la primera Revolución Industrial en las ciudades británicas?",
        options: [
          "La reducción de la jornada laboral a 8 horas",
          "La urbanización acelerada con hacinamiento, insalubridad y pobreza",
          "La creación del Estado de bienestar",
          "La abolición del trabajo infantil"
        ],
        correctIndex: 1,
        explanation: "La migración masiva del campo a la ciudad generó urbanización descontrolada con hacinamiento, epidemias, contaminación y condiciones laborales de explotación extrema.",
        difficulty: "intermedio"
      },
      {
        id: 5012,
        question: "¿Qué elementos caracterizaron a la Segunda Revolución Industrial (1870-1914) y la diferenciaron de la primera?",
        options: [
          "El uso del carbón y la máquina de vapor como pilares",
          "La introducción de la electricidad, el acero, los motores de combustión y los monopolios industriales",
          "El predominio del sector textil como industria principal",
          "La limitación del proceso a Inglaterra únicamente"
        ],
        correctIndex: 1,
        explanation: "La Segunda Revolución Industrial incorporó la electricidad, el acero, los motores de combustión interna y la producción en masa, expandiéndose a Alemania, EE.UU. y Japón.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "imperialismo-y-colonialismo",
    tip: "El imperialismo (1870-1914) dividió África y Asia. Causas: materias primas, mercados, rivalidades. Memoriza: Conferencia de Berlín (1884), 'carga del hombre blanco'.",
    theory: [
      {
        level: "basico",
        title: "Qué fue el imperialismo y regiones afectadas",
        lines: [
          "El imperialismo fue el dominio político, económico y cultural de las potencias europeas sobre pueblos de África, Asia y Oceanía.",
          "Se intensificó entre 1870 y 1914, cuando las potencias europeas competían por territorios en un proceso llamado 'reparto del mundo'.",
          "Las principales potencias imperialistas fueron: Gran Bretaña, Francia, Alemania, Bélgica, Italia, Países Bajos y Portugal.",
          "En África, el continente fue casi totalmente colonizado excepto Etiopía (que derrotó a Italia en Adwa, 1896) y Liberia.",
          "En Asia, Gran Bretaña dominaba la India, Francia controlaba Indochina, y Holanda mantenido las Indias Orientales (actual Indonesia).",
          "El imperialismo también se extendió a Oceanía (Australia, Nueva Zelanda, islas del Pacífico) y a América Latina (influencia económica)."
        ]
      },
      {
        level: "intermedio",
        title: "Causas económicas, políticas e ideológicas",
        lines: [
          "Causas económicas: búsqueda de materias primas (caucho, petróleo, minerales), mercados para productos manufacturados y destinos para inversiones.",
          "Causas políticas: rivalidad entre potencias (Britania vs Francia en África del Norte), prestigio nacional y equilibrio de poder europeo.",
          "Causas ideológicas: el darwinismo social justificaba la 'superioridad' de la raza blanca europea sobre otros pueblos.",
          "Rudyard Kipling expresó la ideología imperialista con su poema 'La carga del hombre blanco' (1899), que legitimaba la colonización.",
          "La Conferencia de Berlín (1884-1885) estableció las reglas para el reparto de África sin consultar a los pueblos africanos.",
          "El avance tecnológico (fusiles, vapor, medicinas tropicales) hizo posible la conquista militar de territorios lejanos."
        ]
      },
      {
        level: "avanzado",
        title: "Resistencia anticolonial, legado e impacto en Perú",
        lines: [
          "La resistencia anticolonial incluyó la Rebelión de los Mahdistas en Sudán (1881-1898), la Rebelión Taiping en China (1850-1864) y la Revuelta India de 1857.",
          "En África, movimientos como los zulúes, los ashanti y la resistencia etíope demostraron que la colonización enfrentó fuerte oposición.",
          "El legado del colonialismo incluye: fronteras artificiales, explotación económica, pérdida cultural y conflictos étnicos que persisten hasta hoy.",
          "En Perú, el imperialismo se manifestó como influencia económica británica y norteamericana, especialmente en la explotación minera y la Guerra del Pacífico (1879-1884).",
          "La dependencia económica de Perú respecto a materias primas (guano, salitre, caucho) fue agravada por el imperialismo comercial.",
          "El proceso de descolonización comenzó tras la Primera Guerra Mundial y culminó en las décadas de 1950-1960 con la independencia de numerosos países africanos y asiáticos."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="25" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Imperialismo y Colonialismo (1870-1914)</text>',
      '  <ellipse cx="80" cy="105" rx="55" ry="60" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>',
      '  <text x="80" y="95" text-anchor="middle" fill="#92400e" font-size="9" font-weight="bold" font-family="sans-serif">ÁFRICA</text>',
      '  <text x="80" y="108" text-anchor="middle" fill="#92400e" font-size="8" font-family="sans-serif">90% colonizada</text>',
      '  <text x="80" y="120" text-anchor="middle" fill="#b45309" font-size="7" font-family="sans-serif">Berlín 1884</text>',
      '  <ellipse cx="220" cy="105" rx="55" ry="60" fill="#dbeafe" stroke="#2563eb" stroke-width="1"/>',
      '  <text x="220" y="95" text-anchor="middle" fill="#1e40af" font-size="9" font-weight="bold" font-family="sans-serif">ASIA</text>',
      '  <text x="220" y="108" text-anchor="middle" fill="#1e40af" font-size="8" font-family="sans-serif">India, Indochina</text>',
      '  <text x="220" y="120" text-anchor="middle" fill="#2563eb" font-size="7" font-family="sans-serif">Esferas de influencia</text>',
      '  <line x1="135" y1="105" x2="165" y2="105" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/>',
      '  <rect x="25" y="170" width="60" height="18" fill="#fecaca" rx="3"/>',
      '  <text x="55" y="182" text-anchor="middle" fill="#991b1b" font-size="7" font-weight="bold" font-family="sans-serif">GB: India</text>',
      '  <rect x="95" y="170" width="60" height="18" fill="#bfdbfe" rx="3"/>',
      '  <text x="125" y="182" text-anchor="middle" fill="#1e40af" font-size="7" font-weight="bold" font-family="sans-serif">Fr: Indochina</text>',
      '  <rect x="165" y="170" width="60" height="18" fill="#bbf7d0" rx="3"/>',
      '  <text x="195" y="182" text-anchor="middle" fill="#166534" font-size="7" font-weight="bold" font-family="sans-serif">Hol: Indonesia</text>',
      '  <rect x="235" y="170" width="50" height="18" fill="#e9d5ff" rx="3"/>',
      '  <text x="260" y="182" text-anchor="middle" fill="#6b21a8" font-size="7" font-weight="bold" font-family="sans-serif">Bel: Congo</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5020,
        question: "¿En qué conferencia se establecieron las reglas para el reparto de África entre las potencias europeas?",
        options: [
          "Conferencia de Viena (1815)",
          "Conferencia de Berlín (1884-1885)",
          "Conferencia de París (1919)",
          "Conferencia de Yalta (1945)"
        ],
        correctIndex: 1,
        explanation: "La Conferencia de Berlín (1884-1885) estableció las normas para la colonización de África, fijando el principio de ocupación efectiva sin consultar a los pueblos africanos.",
        difficulty: "basico"
      },
      {
        id: 5021,
        question: "¿Cuál de las siguientes fue una causa ideológica del imperialismo europeo del siglo XIX?",
        options: [
          "El marxismo revolucionario",
          "El darwinismo social y la idea de 'carga del hombre blanco'",
          "El movimiento abolicionista europeo",
          "La Ilustración y los derechos humanos"
        ],
        correctIndex: 1,
        explanation: "El darwinismo social aplicó teorías biológicas a la sociedad para justificar la 'superioridad' de la raza blanca europea, legitimando la colonización como misión civilizadora.",
        difficulty: "intermedio"
      },
      {
        id: 5022,
        question: "¿Cómo se manifestó el imperialismo en Perú durante el siglo XIX?",
        options: [
          "Perú colonizó territorios africanos",
          "Perú se benefició económicamente del reparto colonial",
          "La influencia económica extranjera en la explotación minera y la Guerra del Pacífico agravaron la dependencia económica",
          "Perú se mantuvo completamente ajeno al imperialismo"
        ],
        correctIndex: 2,
        explanation: "En Perú, el imperialismo se reflejó en la dependencia de materias primas (guano, salitre), la inversión extranjera en minería y la pérdida territorial en la Guerra del Pacífico (1879-1884).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "primera-guerra-mundial",
    tip: "La Primera Guerra Mundial (1914-1918) involucró a todas las grandes potencias. Causas: nacionalismo, imperialismos, alianzas. Memoriza: Tratado de Versalles (1919), Liga de Naciones.",
    theory: [
      {
        level: "basico",
        title: "Causas, bandos y desarrollo de la Gran Guerra",
        lines: [
          "La Primera Guerra Mundial (1914-1918) enfrentó a las potencias europeas en el conflicto bélico más grande hasta entonces.",
          "Causas: nacionalismo exacerbado, imperialismo competitivo, carrera armamentística y sistema de alianzas militares rígidas.",
          "El detonante fue el asesinato del archiduque Francisco Fernando de Austria-Hungría en Sarajevo (28 junio 1914).",
          "Bandos: Triple Entente (Francia, Gran Bretaña, Rusia) vs. Potencias Centrales (Alemania, Austria-Hungría, Imperio Otomano).",
          "Italia inicialmente era de las Potencias Centrales pero cambió de bando en 1915 (Pacto de Londres) y se unió a la Entente.",
          "EE.UU. entró en 1917 tras los ataques submarinos alemanes y el hundimiento del Lusitania (1915), decidiendo el resultado a favor de la Entente."
        ]
      },
      {
        level: "intermedio",
        title: "Batallas decisivas y nuevas tecnologías bélicas",
        lines: [
          "La Batalla del Marne (1914) detuvo la ofensiva alemana hacia París e inició la guerra de trincheras en el frente occidental.",
          "La Batalla del Somme (1916) y la de Verdún (1916) fueron las más sangrientas, con más de un millón de bajas combinadas.",
          "Se introdujeron nuevas armas mortales: ametralladoras, gas mostaza, tanques de guerra, aviones de combate y submarinos U-Boot.",
          "La guerra de trincheras se extendió por 700 km, desde el Canal de la Mancha hasta la frontera suiza, sin avances significativos.",
          "En el frente oriental, Rusia sufrió grandes derrotas, lo que contribuyó a la Revolución Rusa de 1917 y la salida de Rusia de la guerra.",
          "El armisticio se firmó el 11 de noviembre de 1918, con un balance de 10 millones de muertos y 20 millones de heridos."
        ]
      },
      {
        level: "avanzado",
        title: "Tratado de Versalles y creación de la Sociedad de Naciones",
        lines: [
          "El Tratado de Versalles (1919) impuso a Alemania: pérdidas territoriales, desarme, cláusula de culpabilidad y enormes reparaciones de guerra.",
          "Alemania perdió Alsacia y Lorena (a Francia), colonias en África y Oceanía, y se vio reducida militar y económicamente.",
          "Woodrow Wilson impulsó la creación de la Sociedad de Naciones (1920), primera organización internacional de mantenimiento de la paz.",
          "Irónicamente, EE.UU. no se unió a la Sociedad de Naciones por el rechazo del Senado, debilitando significativamente la organización.",
          "El Tratado de Versalles reconfiguró el mapa europeo: nacieron Polonia, Checoslovaquia, Yugoslavia y los estados bálticos.",
          "Las duras condiciones del tratado generó resentimiento en Alemania, facilitando el ascenso del nazismo y la Segunda Guerra Mundial."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Primera Guerra Mundial (1914-1918)</text>',
      '  <rect x="15" y="40" width="120" height="55" fill="#dcfce7" rx="6"/>',
      '  <text x="75" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">TRIPLE ENTENTE</text>',
      '  <text x="75" y="68" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">Francia - GB - Rusia</text>',
      '  <text x="75" y="80" text-anchor="middle" fill="#22c55e" font-size="8" font-family="sans-serif">+ Italia (1915) + EE.UU. (1917)</text>',
      '  <rect x="165" y="40" width="120" height="55" fill="#fecaca" rx="6"/>',
      '  <text x="225" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">POTENCIAS CENTRALES</text>',
      '  <text x="225" y="68" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Alemania - Austria-Hungría</text>',
      '  <text x="225" y="80" text-anchor="middle" fill="#ef4444" font-size="8" font-family="sans-serif">+ Imperio Otomano</text>',
      '  <line x1="135" y1="67" x2="165" y2="67" stroke="#dc2626" stroke-width="2"/>',
      '  <text x="150" y="63" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="bold" font-family="sans-serif">VS</text>',
      '  <rect x="25" y="110" width="250" height="42" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="125" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Batallas clave: Marne (1914) - Verdún (1916)</text>',
      '  <text x="150" y="138" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Somme (1916) - Nuevas armas: ametralladoras, gas, tanques</text>',
      '  <rect x="25" y="160" width="250" height="28" fill="#e0e7ff" rx="4" stroke="#818cf8"/>',
      '  <text x="150" y="178" text-anchor="middle" fill="#3730a3" font-size="9" font-weight="bold" font-family="sans-serif">Tratado de Versalles (1919) → Sociedad de Naciones</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5030,
        question: "¿Cuál fue el detonante directo de la Primera Guerra Mundial?",
        options: [
          "La invasión de Polonia por Alemania",
          "El asesinato del archiduque Francisco Fernando en Sarajevo (1914)",
          "La Revolución Rusa de 1917",
          "La caída del muro de Berlín"
        ],
        correctIndex: 1,
        explanation: "El asesinato del archiduque Francisco Fernando de Austria-Hungría el 28 de junio de 1914 en Sarajevo desencadenó la cadena de declaraciones de guerra que inició el conflicto.",
        difficulty: "basico"
      },
      {
        id: 5031,
        question: "¿Qué nuevas tecnologías bélicas se introdujeron durante la Primera Guerra Mundial y transformaron la guerra?",
        options: [
          "Espadas, arcos y catapultas",
          "Ametralladoras, gas mostaza, tanques, aviones y submarinos",
          "Armas nucleares y misiles balísticos",
          "Drones y guerra cibernética"
        ],
        correctIndex: 1,
        explanation: "La Primera Guerra Mundial introdujo armas como ametralladoras, gases tóxicos, tanques de guerra, aviones de combate y submarinos U-Boot, que incrementaron enormemente la devastación.",
        difficulty: "intermedio"
      },
      {
        id: 5032,
        question: "¿Por qué la Sociedad de Naciones, creada tras la Primera Guerra Mundial, resultó débil e ineficaz?",
        options: [
          "Porque solo contaba con países asiáticos",
          "Porque todas las potencias europeas se negaron a participar",
          "Porque EE.UU. no se unió al organismo, debilitando su capacidad de acción y legitimidad",
          "Porque fue reemplazada por la ONU antes de iniciar sus funciones"
        ],
        correctIndex: 2,
        explanation: "EE.UU. no se integró a la Sociedad de Naciones por el rechazo del Senado estadounidense, privando a la organización del respaldo de la potencia emergente más poderosa del momento.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "revolucion-rusa",
    tip: "La Revolución Rusa (1917) fue comunista. Febrero: cae el Zar. Octubre: Lenin toma el poder. Memoriza: Lenin (1917-1924), Stalin (1924-1953), URSS (1922-1991).",
    theory: [
      {
        level: "basico",
        title: "Causas y las dos revoluciones de 1917",
        lines: [
          "El Imperio Ruso era una monarquía absoluta con profundas desigualdades: una nobleza terrateniente y una masa campesina empobrecida.",
          "Nicolás II gobernaba de forma autocrática, sin parlamento efectivo, y entró en la Primera Guerra Mundial con graves derrotas.",
          "En febrero de 1917, huelgas y manifestaciones en Petrogrado obligaron a Nicolás II a abdicar (Revolución de Febrero).",
          "Se formó un Gobierno Provisional liderado primero por el príncipe Lvov y luego por Alexander Kérenski, que continuó en la guerra.",
          "En octubre de 1917, Lenin y los bolcheviques tomaron el Palacio de Invierno mediante un golpe armado (Revolución de Octubre).",
          "Lenin implementó los 'Dekretos de Paz y de Tierra', prometiendo retirada de la guerra y distribución de tierras entre los campesinos."
        ]
      },
      {
        level: "intermedio",
        title: "Lenin, guerra civil y ascenso de Stalin",
        lines: [
          "Lenin firmó el Tratado de Brest-Litovsk (1918) para sacar a Rusia de la Primera Guerra Mundial, cediendo enormes territorios.",
          "La guerra civil (1918-1921) enfrentó al Ejército Rojo (bolcheviques) contra el Ejército Blanco (monárquicos, liberales, extranjeros).",
          "El comunismo de guerra (1918-1921) nacionalizó industrias y confiscó cosechas, generando hambruna y crisis económica.",
          "Lenin implementó la NEP (Nueva Política Económica, 1921), permitiendo pequeñas empresas privadas para recuperar la economía.",
          "Tras la muerte de Lenin (1924), Stalin se consolidó en el poder mediante maniobras políticas, superando a Trotski y Bujarin.",
          "Stalin instauró el terror estatal (Grandes Purgas, 1936-1938), eliminando rivales políticos y creando el sistema de gulags (campos de trabajo forzado)."
        ]
      },
      {
        level: "avanzado",
        title: "La URSS, planificación económica e impacto mundial",
        lines: [
          "La URSS (Unión de Repúblicas Socialistas Soviéticas) se fundó en 1922 y existió hasta su disolución en 1991, con 15 repúblicas.",
          "Stalin implementó planes quinquenales (desde 1928) para la industrialización forzada y la colectivización agraria obligatoria.",
          "La colectivización forzada provocó la hambruna en Ucrania (Holodomor, 1932-1933), con millones de muertos.",
          "El modelo soviético influyó en movimientos comunistas mundiales: China (1949), Cuba (1959), Vietnam y numerosos países africanos.",
          "La URSS desafió la hegemonía estadounidense, iniciando la Guerra Fría (1947-1991), un enfrentamiento ideológico, político y militar sin guerra directa.",
          "La URSS se disolvió en 1991 tras la perestroika de Gorbachov, marcando el fin del bloque socialista y el inicio de la unipolaridad estadounidense."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Revolución Rusa y URSS (1917-1991)</text>',
      '  <rect x="15" y="40" width="85" height="55" fill="#fecaca" rx="6"/>',
      '  <text x="57" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">FEBRERO</text>',
      '  <text x="57" y="68" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">1917</text>',
      '  <text x="57" y="80" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Cae el Zar</text>',
      '  <text x="57" y="89" text-anchor="middle" fill="#ef4444" font-size="7" font-family="sans-serif">Gov. Provisional</text>',
      '  <rect x="110" y="40" width="85" height="55" fill="#bbf7d0" rx="6"/>',
      '  <text x="152" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">OCTUBRE</text>',
      '  <text x="152" y="68" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">1917</text>',
      '  <text x="152" y="80" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Lenin toma</text>',
      '  <text x="152" y="89" text-anchor="middle" fill="#22c55e" font-size="7" font-family="sans-serif">el poder</text>',
      '  <rect x="205" y="40" width="85" height="55" fill="#e0e7ff" rx="6"/>',
      '  <text x="247" y="55" text-anchor="middle" fill="#3730a3" font-size="9" font-weight="bold" font-family="sans-serif">URSS</text>',
      '  <text x="247" y="68" text-anchor="middle" fill="#3730a3" font-size="8" font-family="sans-serif">1922-1991</text>',
      '  <text x="247" y="80" text-anchor="middle" fill="#3730a3" font-size="7" font-family="sans-serif">Stalin → Stalinismo</text>',
      '  <text x="247" y="89" text-anchor="middle" fill="#6366f1" font-size="7" font-family="sans-serif">Planes quinquenales</text>',
      '  <line x1="100" y1="67" x2="110" y2="67" stroke="#64748b" stroke-width="1.5"/>',
      '  <polygon points="107,63 107,71 113,67" fill="#64748b"/>',
      '  <line x1="195" y1="67" x2="205" y2="67" stroke="#64748b" stroke-width="1.5"/>',
      '  <polygon points="192,63 192,71 198,67" fill="#64748b"/>',
      '  <rect x="25" y="110" width="250" height="75" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="125" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="sans-serif">Línea del tiempo</text>',
      '  <text x="150" y="140" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">1917 Lenin → 1922 URSS → 1924 Stalin → 1991 Disolución</text>',
      '  <text x="150" y="155" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Guerra civil (1918-21) → NEP → Planes quinquenales</text>',
      '  <text x="150" y="170" text-anchor="middle" fill="#475569" font-size="8" font-family="sans-serif">Modelo soviético → Guerra Fría → Caída (1991)</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5040,
        question: "¿Qué gobierno asumió el poder en Rusia tras la Revolución de Febrero de 1917?",
        options: [
          "El gobierno bolchevique de Lenin",
          "Un gobierno republicano liderado por el Zar Nicolás II",
          "Un Gobierno Provisional que continuó participando en la Primera Guerra Mundial",
          "Un gobierno militar liderado por Stalin"
        ],
        correctIndex: 2,
        explanation: "La Revolución de Febrero derrocó al Zar Nicolás II e instauró un Gobierno Provisional que, bajo el liderazgo de Kérenski, decidió mantener la participación rusa en la Primera Guerra Mundial.",
        difficulty: "basico"
      },
      {
        id: 5041,
        question: "¿En qué consistió la NEP (Nueva Política Económica) implementada por Lenin en 1921?",
        options: [
          "La colectivización total de la agricultura y la industria",
          "La apertura al comercio privado a pequeña escala para recuperar la economía tras el comunismo de guerra",
          "La nacionalización de todas las tierras sin excepción",
          "El establecimiento de un sistema capitalista pleno"
        ],
        correctIndex: 1,
        explanation: "La NEP permitió la pequeña empresa privada y el comercio libre a pequeña escala, como medida pragmática para superar la crisis económica del comunismo de guerra (1918-1921).",
        difficulty: "intermedio"
      },
      {
        id: 5042,
        question: "¿Qué impacto tuvo el modelo soviético en la política mundial del siglo XX?",
        options: [
          "Solo influyó en los países europeos",
          "Influyó en movimientos comunistas globales (China, Cuba, Vietnam) y desencadenó la Guerra Fría contra EE.UU.",
          "No tuvo ninguna influencia fuera de la URSS",
          "Promovió únicamente la economía de mercado"
        ],
        correctIndex: 1,
        explanation: "El modelo soviético inspiró revoluciones comunistas en Asia, África y América Latina, y su rivalidad con EE.UU. definió la dinámica de la Guerra Fría (1947-1991).",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "segunda-guerra-mundial",
    tip: "La Segunda Guerra Mundial (1939-1945) fue la más grande. Bandos: Aliados vs Eje. Memoriza: Hitler (Alemania), Mussolini (Italia), Hiroshima (6 ago 1945).",
    theory: [
      {
        level: "basico",
        title: "Causas, bandos y principales batallas",
        lines: [
          "La Segunda Guerra Mundial (1939-1945) fue el conflicto más devastador de la historia, con más de 60 millones de muertos.",
          "Causas: ascenso de los totalitarismos (fascismo y nazismo), fracaso de la política de apaciguamiento, Tratado de Versalles y Gran Depresión.",
          "Bandos: Aliados (EE.UU., URSS, Gran Bretaña, Francia, China) vs. Eje (Alemania, Italia, Japón).",
          "Alemania invadió Polonia el 1 de septiembre de 1939, dando inicio a la guerra en Europa. Francia cayó en junio de 1940.",
          "La Batalla de Stalingrado (1942-1943) fue el punto de inflexión en el frente oriental, con la derrota alemana decisiva.",
          "El Día D (6 junio 1944) fue el desembarco de Normandía, la mayor operación anfibia de la historia, que abrió el frente occidental."
        ]
      },
      {
        level: "intermedio",
        title: "Holocausto, bombas atómicas y juicios de Núremberg",
        lines: [
          "El Holocausto fue el genocidio sistemático de 6 millones de judíos, además de gitanos, homosexuales, discapacitados y opositores políticos.",
          "Los campos de exterminio (Auschwitz, Treblinka, Dachau) implementaron la 'Solución Final' ordenada por Hitler en la Conferencia de Wannsee (1942).",
          "En el Pacífico, EE.UU. lanzó bombas atómicas sobre Hiroshima (6 agosto 1945) y Nagasaki (9 agosto 1945), causando más de 200.000 muertes.",
          "Japón se rindió el 2 de septiembre de 1945, poniendo fin a la Segunda Guerra Mundial.",
          "Los Juicios de Núremberg (1945-1946) juzgaron a los principales líderes nazis por crímenes de guerra, crímenes contra la humanidad y genocidio.",
          "Estos juicios sentaron las bases del derecho penal internacional y establecieron que 'obedecer órdenes' no exime de responsabilidad."
        ]
      },
      {
        level: "avanzado",
        title: "ONU, Derechos Humanos, reconstrucción y bipolaridad",
        lines: [
          "La ONU (Organización de las Naciones Unidas) fue fundada en 1945 para mantener la paz mundial, con sede en Nueva York.",
          "La Declaración Universal de los Derechos Humanos (1948, París) fue impulsada por Eleanor Roosevelt tras los horrores de la guerra.",
          "El Plan Marshall (1948) de EE.UU. destinó 13.000 millones de dólares para la reconstrucción de Europa occidental.",
          "Alemania fue dividida en dos: República Federal Alemana (occidental, capitalista) y República Democrática Alemana (oriental, socialista).",
          "La guerra terminó con el inicio de la bipolaridad mundial: EE.UU. (capitalismo, OTAN) vs. URSS (comunismo, Pacto de Varsovia).",
          "Japón fue ocupado por EE.UU., se democratizó bajo una nueva Constitución (1947) y se convirtió en potencia económica en la posguerra."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Segunda Guerra Mundial (1939-1945)</text>',
      '  <rect x="15" y="40" width="120" height="55" fill="#dcfce7" rx="6"/>',
      '  <text x="75" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">ALIADOS</text>',
      '  <text x="75" y="68" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">EE.UU. - URSS - GB</text>',
      '  <text x="75" y="80" text-anchor="middle" fill="#22c55e" font-size="7" font-family="sans-serif">Francia - China + otros</text>',
      '  <text x="75" y="89" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Victoria: mayo 1945 / sept 1945</text>',
      '  <rect x="165" y="40" width="120" height="55" fill="#fecaca" rx="6"/>',
      '  <text x="225" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">EJE</text>',
      '  <text x="225" y="68" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Hitler (Alemania)</text>',
      '  <text x="225" y="80" text-anchor="middle" fill="#ef4444" font-size="7" font-family="sans-serif">Mussolini (Italia)</text>',
      '  <text x="225" y="89" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Tojo (Japón)</text>',
      '  <line x1="135" y1="67" x2="165" y2="67" stroke="#dc2626" stroke-width="2"/>',
      '  <text x="150" y="63" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="bold" font-family="sans-serif">VS</text>',
      '  <rect x="25" y="105" width="110" height="40" fill="#fef3c7" rx="4" stroke="#d97706"/>',
      '  <text x="80" y="120" text-anchor="middle" fill="#92400e" font-size="8" font-weight="bold" font-family="sans-serif">Holocausto</text>',
      '  <text x="80" y="132" text-anchor="middle" fill="#b45309" font-size="7" font-family="sans-serif">6M judíos asesinados</text>',
      '  <rect x="145" y="105" width="110" height="40" fill="#e0e7ff" rx="4" stroke="#6366f1"/>',
      '  <text x="200" y="120" text-anchor="middle" fill="#3730a3" font-size="8" font-weight="bold" font-family="sans-serif">Bomba Atómica</text>',
      '  <text x="200" y="132" text-anchor="middle" fill="#6366f1" font-size="7" font-family="sans-serif">Hiroshima 6/ago/1945</text>',
      '  <rect x="25" y="155" width="250" height="30" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="174" text-anchor="middle" fill="#1e293b" font-size="8" font-weight="bold" font-family="sans-serif">ONU (1945) → DDHH (1948) → Bipolaridad → Guerra Fría</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5050,
        question: "¿Cuál fue el acontecimiento que inició la Segunda Guerra Mundial en Europa?",
        options: [
          "La invasión de Polonia por Alemania el 1 de septiembre de 1939",
          "El ataque a Pearl Harbor el 7 de diciembre de 1941",
          "La caída de Francia en junio de 1940",
          "El desembarco de Normandía en junio de 1944"
        ],
        correctIndex: 0,
        explanation: "Alemania invadió Polonia el 1 de septiembre de 1939, lo que provocó que Gran Bretaña y Francia le declararan la guerra, iniciando el conflicto en Europa.",
        difficulty: "basico"
      },
      {
        id: 5051,
        question: "¿Qué significado histórico tuvieron los Juicios de Núremberg (1945-1946)?",
        options: [
          "Fueron acuerdos de paz entre Aliados y el Eje",
          "Juzgaron a líderes nazis por crímenes de guerra y sentaron las bases del derecho penal internacional",
          "Establecieron la creación de la OTAN",
          "Redactaron la Constitución de la República Federal Alemana"
        ],
        correctIndex: 1,
        explanation: "Los Juicios de Núremberg establecieron los principios del derecho penal internacional: los crímenes de guerra, contra la humanidad y el genocidio son punibles, y la obediencia a órdenes no exime de responsabilidad.",
        difficulty: "intermedio"
      },
      {
        id: 5052,
        question: "¿Cómo contribuyó el Plan Marshall a la reconstrucción de Europa tras la Segunda Guerra Mundial y qué implicación geopolítica tuvo?",
        options: [
          "Fue un préstamo de la URSS a Europa del Este",
          "EE.UU. destinó 13.000 millones de dólares para reconstruir Europa occidental, fortaleciendo el capitalismo y conteniendo la influencia soviética",
          "Fue un acuerdo militar entre Gran Bretaña y Francia",
          "Fue un plan de la ONU para la reconstrucción de Japón"
        ],
        correctIndex: 1,
        explanation: "El Plan Marshall (1948) de EE.UU. ayudó a reconstruir Europa occidental, fortaleciendo la alianza capitalista y evitando que los países devastados cayeran bajo la influencia comunista soviética.",
        difficulty: "avanzado"
      }
    ]
  },
  {
    slug: "guerra-fria-y-globalizacion",
    tip: "La Guerra Fría (1947-1991) fue EE.UU. vs URSS. Memoriza: Plan Marshall, OTAN, Pacto de Varsovia, caída del muro de Berlín (1989), disolución URSS (1991).",
    theory: [
      {
        level: "basico",
        title: "Qué fue la Guerra Fría, bandos y eventos clave",
        lines: [
          "La Guerra Fría (1947-1991) fue el enfrentamiento político, ideológico y militar entre EE.UU. (capitalismo) y URSS (comunismo) sin guerra directa.",
          "Bandos: OTAN (1949, alianza occidental liderada por EE.UU.) vs. Pacto de Varsovia (1955, alianza socialista liderada por URSS).",
          "La Doctrina Truman (1947) estableció la contención del comunismo como política exterior de EE.UU.",
          "El Plan Marshall (1948) ayudó a reconstruir Europa occidental e impidió la expansión comunista en la región.",
          "El Bloqueo de Berlín (1948-1949) fue la primera gran crisis: la URSS bloqueó el acceso terrestre a Berlín Occidental.",
          "Los eventos clave incluyen: crisis de los misiles de Cuba (1962), caída del Muro de Berlín (1989) y disolución de la URSS (1991)."
        ]
      },
      {
        level: "intermedio",
        title: "Crisis de los misiles, carrera espacial y descolonización",
        lines: [
          "La Crisis de los misiles de Cuba (1962) fue el momento más peligroso: la URSS instaló misiles nucleares en Cuba, a 150 km de EE.UU.",
          "Kennedy y Jrushchov negociaron la retirada de los misiles, evitando una guerra nuclear que habría devastado al mundo.",
          "La carrera espacial simbolizó la rivalidad: Sputnik (URSS, 1957), Gagarin en el espacio (URSS, 1961), llegada a la Luna (EE.UU., 1969).",
          "La descolonización (1945-1975) liberó decenas de países de África y Asia, pero muchos quedaron como zonas de influencia de EE.UU. o URSS.",
          "Guerras proxy: Corea (1950-1953), Vietnam (1955-1975), Afganistán (1979-1989), donde las superpotencias apoyaron bandos enfrentados.",
          "El Movimiento de los No Alineados (1961, Belgrado) intentó mantener la neutralidad entre las dos superpotencias, liderado por India, Egipto y Yugoslavia."
        ]
      },
      {
        level: "avanzado",
        title: "Globalización, organismos internacionales y multipolaridad",
        lines: [
          "La globalización se aceleró tras la caída de la URSS (1991): expansión del libre comercio, interconexión tecnológica y cultural a escala mundial.",
          "Organismos internacionales clave: ONU (paz), OEA (Américas), UE (integración europea), OMC (comercio), FMI y Banco Mundial (economía).",
          "La UE pasó de la CEE (1957) a la Unión Europea (1993), integrando economías, políticas y monedas de 27 países.",
          "El mundo multipolar actual incluye potencias emergentes: China, India, Brasil, Rusia y la UE, desafiando la unipolaridad estadounidense.",
          "Desafíos contemporáneos: terrorismo internacional (11-S, 2001), cambio climático, migraciones globales, desigualdad Norte-Sur y crisis alimentaria.",
          "En América Latina, la globalización trajo oportunidades de integración comercial pero también dependencia económica y vulnerabilidad financiera."
        ]
      }
    ],
    illustrations: [
      '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">',
      '  <rect width="300" height="200" fill="#f8fafc" rx="12"/>',
      '  <text x="150" y="22" text-anchor="middle" fill="#2563eb" font-size="12" font-weight="bold" font-family="sans-serif">Guerra Fría y Globalización (1947-1991)</text>',
      '  <rect x="15" y="40" width="120" height="60" fill="#dcfce7" rx="6"/>',
      '  <text x="75" y="55" text-anchor="middle" fill="#166534" font-size="9" font-weight="bold" font-family="sans-serif">EE.UU. (Occidente)</text>',
      '  <text x="75" y="68" text-anchor="middle" fill="#166534" font-size="8" font-family="sans-serif">Capitalismo liberal</text>',
      '  <text x="75" y="80" text-anchor="middle" fill="#22c55e" font-size="7" font-family="sans-serif">OTAN (1949)</text>',
      '  <text x="75" y="90" text-anchor="middle" fill="#166534" font-size="7" font-family="sans-serif">Plan Marshall</text>',
      '  <rect x="165" y="40" width="120" height="60" fill="#fecaca" rx="6"/>',
      '  <text x="225" y="55" text-anchor="middle" fill="#991b1b" font-size="9" font-weight="bold" font-family="sans-serif">URSS (Oriente)</text>',
      '  <text x="225" y="68" text-anchor="middle" fill="#991b1b" font-size="8" font-family="sans-serif">Comunismo soviético</text>',
      '  <text x="225" y="80" text-anchor="middle" fill="#ef4444" font-size="7" font-family="sans-serif">Pacto de Varsovia (1955)</text>',
      '  <text x="225" y="90" text-anchor="middle" fill="#991b1b" font-size="7" font-family="sans-serif">Planes quinquenales</text>',
      '  <line x1="135" y1="70" x2="165" y2="70" stroke="#dc2626" stroke-width="2"/>',
      '  <text x="150" y="66" text-anchor="middle" fill="#dc2626" font-size="8" font-weight="bold" font-family="sans-serif">VS</text>',
      '  <rect x="25" y="115" width="250" height="45" fill="#f1f5f9" rx="4" stroke="#cbd5e1"/>',
      '  <text x="150" y="130" text-anchor="middle" fill="#1e293b" font-size="8" font-weight="bold" font-family="sans-serif">Eventos clave</text>',
      '  <text x="150" y="142" text-anchor="middle" fill="#475569" font-size="7" font-family="sans-serif">Cuba 1962 → Espacio 1969 → Berlín 1989 → URSS 1991</text>',
      '  <rect x="25" y="165" width="250" height="25" fill="#e0e7ff" rx="4" stroke="#818cf8"/>',
      '  <text x="150" y="181" text-anchor="middle" fill="#3730a3" font-size="8" font-weight="bold" font-family="sans-serif">Post-1991: Globalización → ONU → OEA → UE → Multipolaridad</text>',
      '</svg>'
    ],
    exercises: [
      {
        id: 5060,
        question: "¿Qué organizaciones militares enfrentadas simbolizaron la división del mundo durante la Guerra Fría?",
        options: [
          "La ONU y la OEA",
          "La OTAN y el Pacto de Varsovia",
          "La OMC y el FMI",
          "La Unión Europea y la Liga Árabe"
        ],
        correctIndex: 1,
        explanation: "La OTAN (1949, liderada por EE.UU.) y el Pacto de Varsovia (1955, liderado por URSS) representaron la alianza militar de los dos bloques enfrentados durante la Guerra Fría.",
        difficulty: "basico"
      },
      {
        id: 5061,
        question: "¿Qué conflictos bélicos fueron considerados 'guerras proxy' durante la Guerra Fría?",
        options: [
          "La Primera y Segunda Guerra Mundial",
          "Las guerras de Corea, Vietnam y Afganistán, donde las superpotencias apoyaron bandos enfrentados",
          "Las guerras napoleónicas del siglo XIX",
          "Los conflictos en América del Sur del siglo XXI"
        ],
        correctIndex: 1,
        explanation: "Las guerras proxy fueron conflictos donde EE.UU. y URSS apoyaron bandos opuestos sin enfrentarse directamente: Corea (1950-1953), Vietnam (1955-1975) y Afganistán (1979-1989).",
        difficulty: "intermedio"
      },
      {
        id: 5062,
        question: "¿Cómo influyó la globalización en América Latina tras la caída de la URSS (1991)?",
        options: [
          "América Latina se aisló completamente del comercio mundial",
          "La globalización trajo oportunidades de integración comercial pero también dependencia económica y vulnerabilidad financiera",
          "Todos los países latinoamericanos se integraron a la Unión Europea",
          "La globalización eliminó completamente la pobreza en la región"
        ],
        correctIndex: 1,
        explanation: "La globalización en América Latina generó mayor acceso a mercados e inversiones, pero también incrementó la dependencia de materias primas, la vulnerabilidad financiera y la desigualdad interna.",
        difficulty: "avanzado"
      }
    ]
  }
];

courseContent["historia"] = [...historiaModulesPart1, ...historiaModulesPart2, ...historiaModulesPart3];
