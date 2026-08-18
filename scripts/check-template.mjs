import { readFileSync } from 'fs';
const c = readFileSync('C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts','utf-8');
const lines = c.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('${')) {
    console.log('Line ' + (i+1) + ': ' + lines[i].trim().substring(0,120));
  }
}
