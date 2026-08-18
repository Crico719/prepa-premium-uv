import { readFileSync, writeFileSync } from 'fs';

const filePath = 'C:/Users/USUARIO/OneDrive/Documents/prepa-premium-uv/src/lib/course-content.ts';
let content = readFileSync(filePath, 'utf-8');

// Find the historia section
const histStart = content.indexOf('"historia"');
if (histStart === -1) { console.log('No historia section found'); process.exit(1); }

const before = content.substring(0, histStart);
const histSection = content.substring(histStart);

// Fix illustrations in historia: convert array-of-lines to single strings
// Pattern: illustrations: [\n      '<svg...>',\n      '  <line/>',\n      '</svg>',\n    ]
const fixed = histSection.replace(
  /illustrations:\s*\[([^\]]*?)\]/gs,
  (match, inner) => {
    // Extract all the quoted strings
    const lines = [...inner.matchAll(/'([^']*?)'/g)].map(m => m[1]);
    if (lines.length === 0) return match;
    
    // Join them into a single SVG string
    const svg = lines.join('\n');
    
    // Check if there are multiple SVGs (carousel)
    // Split by closing/opening SVG tags
    const svgParts = svg.split(/(?=<\/svg>)\s*(?=<svg)/);
    if (svgParts.length > 1) {
      // Multiple SVGs - wrap each in backticks
      const svgStrings = svgParts.map(s => {
        let fixed = s.trim();
        if (!fixed.includes('</svg>')) fixed += '</svg>';
        if (!fixed.includes('<svg')) fixed = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">' + fixed;
        return '`' + fixed + '`';
      });
      return `illustrations: [${svgStrings.join(', ')}]`;
    } else {
      // Single SVG
      let fixedSvg = svg.trim();
      if (!fixedSvg.endsWith('</svg>')) fixedSvg += '</svg>';
      if (!fixedSvg.startsWith('<svg')) fixedSvg = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">' + fixedSvg;
      return `illustrations: [\n      \`${fixedSvg}\`\n    ]`;
    }
  }
);

writeFileSync(filePath, before + fixed, 'utf-8');

// Verify
const newContent = readFileSync(filePath, 'utf-8');
const svgCount = (newContent.substring(histStart).match(/<svg/g) || []).length;
console.log(`SVGs in historia after fix: ${svgCount}`);
console.log('Done!');
