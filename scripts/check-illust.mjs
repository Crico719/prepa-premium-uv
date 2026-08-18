import { readFileSync } from 'fs';
const c = readFileSync('C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts','utf-8');

// Find historia section and check illustrations
const histIdx = c.indexOf('"historia"');
const histSection = c.substring(histIdx);

// Check for illustrations in historia
const illustMatches = [...histSection.matchAll(/illustrations:\s*\[/g)];
console.log('Illustration arrays in historia:', illustMatches.length);

// Check for SVGs
const svgMatches = [...histSection.matchAll(/<svg/g)];
console.log('SVG tags in historia:', svgMatches.length);

// Show first illustration of first historia module
const firstSvgIdx = histSection.indexOf('<svg');
if (firstSvgIdx > -1) {
  console.log('\nFirst SVG in historia (first 300 chars):');
  console.log(histSection.substring(firstSvgIdx, firstSvgIdx + 300));
} else {
  console.log('\nNO SVGs found in historia section!');
  // Check what format illustrations are in
  const illustIdx = histSection.indexOf('illustrations:');
  if (illustIdx > -1) {
    console.log('Illustrations content:', histSection.substring(illustIdx, illustIdx + 200));
  }
}
