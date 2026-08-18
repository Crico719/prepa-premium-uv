import { readFileSync } from 'fs';
const c = readFileSync('C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts','utf-8');
const m = [...c.matchAll(/slug: "([^"]+)"/g)];
console.log('Total:', m.length);
m.slice(-26).forEach(x => console.log(x[1]));
