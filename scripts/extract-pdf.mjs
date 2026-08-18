import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'fs';

const pdfs = [
  { path: 'C:/Users/USUARIO/Downloads/HISTORIA DEL PERU IA.pdf', name: 'HISTORIA DEL PERU IA' },
  { path: 'C:/Users/USUARIO/Downloads/Historia-del-Peru-CORTEGANA-t1-1.pdf', name: 'CORTEGANA' },
  { path: 'C:/Users/USUARIO/Downloads/historia-de-la-corrupcion-en-el-peru-alfonso-quiroz.pdf', name: 'CORRUPCION' },
  { path: 'C:/Users/USUARIO/Downloads/El surgimiento de sendero luminoso.pdf', name: 'SENDERO' },
];

async function extractText(path, maxPages = 50) {
  const data = new Uint8Array(readFileSync(path));
  const doc = await getDocument({ data }).promise;
  let text = '';
  const limit = Math.min(doc.numPages, maxPages);
  for (let i = 1; i <= limit; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(item => item.str).join(' ') + '\n';
  }
  return text;
}

async function main() {
  for (const pdf of pdfs) {
    try {
      console.log(`Extracting ${pdf.name}...`);
      const text = await extractText(pdf.path);
      const outPath = `C:/Users/USUARIO/OneDrive/Documents/Default Project/${pdf.name}.txt`;
      writeFileSync(outPath, text, 'utf-8');
      console.log(`  ${pdf.name}: ${text.length} chars, saved.`);
    } catch (e) {
      console.error(`  Error ${pdf.name}: ${e.message}`);
    }
  }
}

main();
