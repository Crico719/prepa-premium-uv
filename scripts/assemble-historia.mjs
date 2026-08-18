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

// Read the current course-content.ts and remove the closing "};" and final "]"
const currentContent = readFile(`${projectRoot}\\src\\lib\\course-content.ts`);
const closingPattern = /\n\];\s*$/;
const trimmed = currentContent.replace(closingPattern, '');

// Extract historia modules
const historia1_8 = extractArrayContent(`${agentRoot}\\src\\data\\historia-modules-1-8.ts`);
const historia9_16 = extractArrayContent(`${agentRoot}\\src\\data\\historia-modules-9-16.ts`);
const historia17_23 = extractArrayContent(`${agentRoot}\\src\\data\\historia-modules-17-23.ts`);

// Append historia to the file
const output = trimmed + `,
  "historia": [
${historia1_8},
${historia9_16},
${historia17_23}
  ]
};
`;

writeFileSync(`${projectRoot}\\src\\lib\\course-content.ts`, output, 'utf-8');
console.log(`Archivo actualizado. Tamaño: ${Buffer.byteLength(output, 'utf-8')} bytes`);
console.log(`Líneas: ${output.split('\n').length}`);
