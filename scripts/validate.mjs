import { readFileSync } from 'fs';
const c = readFileSync('C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts','utf-8');
const lines = c.split('\n');

// Track braces and brackets (outside strings)
let braces = 0, brackets = 0;
let inStr = false, strCh = '', escaped = false;
let inTemplate = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  escaped = false;
  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (inStr) {
      if (ch === strCh) inStr = false;
      continue;
    }
    if (ch === '`') { inTemplate = !inTemplate; continue; }
    if (inTemplate) continue;
    if (ch === '"' || ch === "'") { inStr = true; strCh = ch; continue; }
    if (ch === '{') braces++;
    if (ch === '}') braces--;
    if (ch === '[') brackets++;
    if (ch === ']') brackets--;
  }
  if (braces < 0) { console.log(`Brace underflow at line ${i+1}: ${line.trim().substring(0,80)}`); break; }
  if (brackets < 0) { console.log(`Bracket underflow at line ${i+1}: ${line.trim().substring(0,80)}`); break; }
}
console.log(`Final braces: ${braces}, brackets: ${brackets}`);

// Check for backticks inside single/double quoted strings (common issue)
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Check for lines with odd number of backticks that might break parsing
  const bt = (line.match(/`/g) || []).length;
  if (bt % 2 !== 0) {
    console.log(`Odd backticks at line ${i+1}: ${line.trim().substring(0,100)}`);
  }
}

// Check for template literal issues - backtick inside backtick string
let templateDepth = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (const ch of line) {
    if (ch === '`') templateDepth++;
  }
  if (templateDepth % 2 !== 0 && i > 0 && i % 100 === 0) {
    console.log(`Possible unclosed template at line ${i+1}`);
  }
}
console.log(`Total backtick count: ${templateDepth}`);
