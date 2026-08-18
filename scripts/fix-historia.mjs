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
    if (trimmed.startsWith('[') && (trimmed === '[' || trimmed.match(/^\[\s*$/))) {
      start = i + 1;
      break;
    }
    // Also handle "const X: Type[] = [" 
    if (trimmed.match(/^\[.*CourseModule\[\]\s*=\s*\[$/) || trimmed.match(/^=\s*\[$/)) {
      start = i + 1;
      break;
    }
  }

  for (let i = lines.length - 1; i >= 0; i--) {
    const trimmed = lines[i].trim();
    if (trimmed === ']' || trimmed === '];') {
      end = i - 1;
      break;
    }
  }

  return lines.slice(start, end + 1).join('\n');
}

// Read current file - find the end of cokito-rm section
const currentContent = readFile(`${projectRoot}\\src\\lib\\course-content.ts`);

// Find the cokito-rm closing: look for pattern "  ]\n};"
// We need to find the FIRST occurrence of "];" that closes the whole export
const closingMatch = currentContent.match(/\n  \]\n\};\s*$/m);
if (!closingMatch) {
  console.error('Could not find closing pattern');
  process.exit(1);
}

// Get everything up to and including the cokito-rm closing bracket but NOT the };
const cokitoEnd = currentContent.lastIndexOf('  ]\n};');
const baseContent = currentContent.substring(0, cokitoEnd + 4); // up to "  ]"

// Extract historia modules
console.log('Extracting historia modules...');
const h1_8_raw = extractArrayContent(`${agentRoot}\\src\\data\\historia-modules-1-8.ts`);
const h9_16_raw = extractArrayContent(`${agentRoot}\\src\\data\\historia-modules-9-16.ts`);
const h17_23_raw = extractArrayContent(`${agentRoot}\\src\\data\\historia-modules-17-23.ts`);

// Verify they're clean array content (no const declarations)
function cleanArrayContent(raw) {
  let lines = raw.split('\n');
  // Remove any lines that are just "const ..." or "];"
  while (lines.length > 0 && (lines[0].trim().startsWith('const ') || lines[0].trim().startsWith('export '))) {
    lines.shift();
  }
  while (lines.length > 0 && (lines[lines.length - 1].trim() === '];' || lines[lines.length - 1].trim() === ']')) {
    lines.pop();
  }
  return lines.join('\n');
}

const h1_8 = cleanArrayContent(h1_8_raw);
const h9_16 = cleanArrayContent(h9_16_raw);
const h17_23 = cleanArrayContent(h17_23_raw);

const output = `${baseContent},
  "historia": [
${h1_8},
${h9_16},
${h17_23}
  ]
};`;

writeFileSync(`${projectRoot}\\src\\lib\\course-content.ts`, output, 'utf-8');
console.log(`Done! Size: ${(Buffer.byteLength(output, 'utf-8') / 1024).toFixed(0)} KB, Lines: ${output.split('\n').length}`);

// Quick validation
const allSlugs = [...output.matchAll(/slug: "([^"]+)"/g)];
console.log(`Total modules: ${allSlugs.length}`);
