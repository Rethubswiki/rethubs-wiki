import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const wikiDir = path.join(root, "wiki-source");
const resourceDir = path.join(root, "catalog", "resources");
const outputFlag = process.argv.indexOf("--output");
const output = outputFlag >= 0 ? process.argv[outputFlag + 1] : "rethubs-wiki-export.json";

if (!output || output.startsWith("--")) {
  console.error("Uso: node scripts/export-wiki.mjs --output <archivo.json>");
  process.exit(1);
}

function walk(dir, extension) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath, extension);
    return entry.isFile() && entry.name.endsWith(extension) ? [fullPath] : [];
  });
}

const pages = walk(wikiDir, ".md").map((file) => ({
  path: path.relative(wikiDir, file),
  title: (fs.readFileSync(file, "utf8").match(/^#\s+(.+)$/m) ?? [null, path.basename(file, ".md")])[1],
  markdown: fs.readFileSync(file, "utf8"),
}));
const resources = walk(resourceDir, ".json").map((file) => JSON.parse(fs.readFileSync(file, "utf8")));
const manifest = {
  format: "rethubs-wiki-export/v1",
  generatedAt: new Date().toISOString(),
  privacy: "Public editorial content only; no profiles, comments, personal preferences or moderation notes.",
  pages,
  resources,
};

fs.writeFileSync(path.resolve(root, output), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Exportación creada: ${output} (${pages.length} páginas, ${resources.length} fichas).`);
