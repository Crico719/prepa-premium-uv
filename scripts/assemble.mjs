import { readFileSync, writeFileSync } from 'fs';

const projectRoot = "C:\\Users\\USUARIO\\OneDrive\\Documents\\prepa-premium-uv";
const agentRoot = "C:\\Users\\USUARIO\\OneDrive\\Documents\\Default Project";

function readFile(path) {
  return readFileSync(path, 'utf-8');
}

function extractArrayContent(filePath) {
  const content = readFile(filePath);
  const lines = content.split('\n');
  let start = 0;
  let end = lines.length - 1;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed === '[' || trimmed.match(/^\[/)) {
      start = i + 1;
      break;
    }
  }

  for (let i = lines.length - 1; i >= 0; i--) {
    const trimmed = lines[i].trim();
    if (trimmed === ']' || trimmed === '];' || trimmed.match(/^\]$/) || trimmed.match(/^\];$/)) {
      end = i - 1;
      break;
    }
  }

  return lines.slice(start, end + 1).join('\n');
}

// Read type defs from current file
const currentContent = readFile(`${projectRoot}\\src\\lib\\course-content.ts`);
const currentLines = currentContent.split('\n');
const typeDefs = currentLines.slice(0, 26).join('\n');

// Extract module arrays
const geo1_6 = extractArrayContent(`${agentRoot}\\src\\data\\geometry-modules.ts`);
const geo7_12 = extractArrayContent(`${agentRoot}\\geometry-modules-7-12.ts`);
const geo13_17 = extractArrayContent(`${agentRoot}\\src\\data\\geometry-modules-13-17.ts`);
const cokito1_8 = extractArrayContent(`${agentRoot}\\cokito-rm-modules.ts`);
const cokito9_16 = extractArrayContent(`${agentRoot}\\src\\cokito-rm-modules-9-16.ts`);
const cokito17_22 = extractArrayContent(`${agentRoot}\\src\\data\\cokito-rm-modules-17-22.ts`);

const promediosModule = `  {
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
  }`;

const output = `${typeDefs}

export const courseContent: CourseContent = {
  "geometria": [
${geo1_6},
${geo7_12},
${geo13_17}
  ],
  "cokito-rm": [
${cokito1_8},
${cokito9_16},
${promediosModule},
${cokito17_22}
  ]
};
`;

writeFileSync(`${projectRoot}\\src\\lib\\course-content.ts`, output, 'utf-8');
console.log(`Archivo escrito. Tamaño: ${Buffer.byteLength(output, 'utf-8')} bytes`);
console.log(`Líneas: ${output.split('\n').length}`);
