# Assembly script for course-content.ts
# Concatenates agent-generated modules into the final file

$projectRoot = "C:\Users\USUARIO\OneDrive\Documents\prepa-premium-uv"
$agentRoot = "C:\Users\USUARIO\OneDrive\Documents\Default Project"
$outputFile = "$projectRoot\src\lib\course-content.ts"

# Read current file to extract type definitions (lines 1-26)
$currentLines = Get-Content $outputFile
$typeDefs = $currentLines[0..25] -join "`n"

# Function to extract array content from a file (strip wrapper)
function Extract-ArrayContent($filePath) {
    $lines = Get-Content $filePath
    $start = 0
    $end = $lines.Count - 1
    
    # Find first [
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i].Trim() -eq "[" -or $lines[$i].Trim() -match "^\s*\[") {
            # Check if this line has only [
            $trimmed = $lines[$i].Trim()
            if ($trimmed -eq "[" -or $trimmed -match "^\[") {
                $start = $i + 1
                break
            }
        }
    }
    
    # Find last ] or ];
    for ($i = $lines.Count - 1; $i -ge 0; $i--) {
        $trimmed = $lines[$i].Trim()
        if ($trimmed -eq "]" -or $trimmed -eq "];" -or $trimmed -match "^\]$" -or $trimmed -match "^\];$") {
            $end = $i - 1
            break
        }
    }
    
    # Return the array elements (between [ and ])
    $content = $lines[$start..$end] -join "`n"
    return $content
}

# Read geometry modules
$geo1_6 = Extract-ArrayContent "$agentRoot\src\data\geometry-modules.ts"
$geo7_12 = Extract-ArrayContent "$agentRoot\geometry-modules-7-12.ts"
$geo13_17 = Extract-ArrayContent "$agentRoot\src\data\geometry-modules-13-17.ts"

# Read cokito-rm modules
$cokito1_8 = Extract-ArrayContent "$agentRoot\cokito-rm-modules.ts"
$cokito9_16 = Extract-ArrayContent "$agentRoot\src\cokito-rm-modules-9-16.ts"
$cokito17_22 = Extract-ArrayContent "$agentRoot\src\data\cokito-rm-modules-17-22.ts"

# Generate the missing "promedios" module
$promediosModule = @'
  {
    slug: "promedios",
    tip: "El promedio se calcula sumando todos los valores y dividiendo por la cantidad. Para quitar uno: (suma actual - valor) / (n-1). Para agregar uno: (suma actual + valor) / (n+1).",
    theory: [
      {
        level: "basico" as DifficultyLevel,
        title: "Promedio aritmético",
        lines: [
          "Promedio = (x₁ + x₂ + ... + xₙ) / n",
          "Es la suma de todos los valores dividida por la cantidad de valores",
          "Ejemplo: Promedio de 8, 6, 10 = (8+6+10)/3 = 24/3 = 8"
        ]
      },
      {
        level: "intermedio" as DifficultyLevel,
        title: "Propiedades del promedio",
        lines: [
          "Si agregas un valor mayor al promedio, el promedio sube",
          "Si agregas un valor menor al promedio, el promedio baja",
          "El promedio siempre está entre el menor y el mayor valor",
          "El promedio afecta cada valor por igual"
        ]
      },
      {
        level: "avanzado" as DifficultyLevel,
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
        difficulty: "basico" as DifficultyLevel
      },
      {
        id: 2,
        question: "El promedio de 5 números es 20. Si uno es 30, ¿cuánto suman los otros 4?",
        options: ["70", "80", "50", "100"],
        correctIndex: 0,
        explanation: "Suma total = 5×20 = 100. Los otros 4 suman 100-30 = 70.",
        difficulty: "intermedio" as DifficultyLevel
      },
      {
        id: 3,
        question: "La nota final se calcula: Examen (40%), Tareas (30%), Participación (30%). Si un alumno saca 18 en examen, 14 en tareas y 16 en participación, ¿cuál es su nota final?",
        options: ["16", "15.8", "16.2", "15.5"],
        correctIndex: 2,
        explanation: "Nota = 18×0.4 + 14×0.3 + 16×0.3 = 7.2 + 4.2 + 4.8 = 16.2.",
        difficulty: "avanzado" as DifficultyLevel
      }
    ]
  }
'@

# Build the final file
$output = @"
$typeDefs

export const courseContent: CourseContent = {
  "geometria": [
$geo1_6,
$geo7_12,
$geo13_17
  ],
  "cokito-rm": [
$cokito1_8,
$cokito9_16,
$promediosModule,
$cokito17_22
  ]
};
"@

# Write the file
Set-Content -Path $outputFile -Value $output -Encoding UTF8
Write-Output "Done! File written to $outputFile"
Write-Output "File size: $((Get-Item $outputFile).Length) bytes"
Write-Output "Line count: $((Get-Content $outputFile).Count)"
