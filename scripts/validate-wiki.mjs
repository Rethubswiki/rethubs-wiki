import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const wikiDir = path.join(root, "wiki-source");
const resourceDir = path.join(root, "catalog", "resources");
const allowlistPath = path.join(root, "catalog", "allowed-external-hosts.txt");
const requiredPages = [
  "Home.md",
  "Evidence-and-Review-Policy.md",
  "Resource-Template.md",
  "Contribute-and-Correct.md",
  "FAQ-and-Glossary.md",
  "Style-Translation-and-Accessibility-Guide.md",
  "Documented-Capabilities-and-Roadmap.md",
  "Operations-Status-2026-08-20.md",
];
const forbiddenPatterns = [
  { label: "GitHub personal token", pattern: /\bghp_[A-Za-z0-9]{20,}\b/ },
  { label: "Resend API key", pattern: /\bre_[A-Za-z0-9]{20,}\b/ },
  { label: "Private key block", pattern: /-----BEGIN(?: RSA)? PRIVATE KEY-----/ },
];
const allowedKinds = new Set(["client", "server", "store", "directory", "source", "community", "tool"]);
const allowedStatuses = new Set(["verified", "needs-review", "archived"]);
const allowedPlatforms = new Set(["android", "ios", "linux", "macos", "windows", "web", "self-hosted", "cross-platform"]);
const allowedHosts = new Set(
  fs.readFileSync(allowlistPath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#")),
);
let errors = 0;

function fail(message) {
  errors += 1;
  console.error(`ERROR: ${message}`);
}

function walk(dir, extension) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath, extension);
    return entry.isFile() && entry.name.endsWith(extension) ? [fullPath] : [];
  });
}

function allowedExternalUrl(value, field, relative) {
  if (!/^https:\/\//.test(value ?? "")) {
    fail(`${field} debe usar HTTPS en ${relative}`);
    return;
  }
  try {
    const host = new URL(value).hostname.toLowerCase();
    const accepted = [...allowedHosts].some((allowed) => host === allowed || host.endsWith(`.${allowed}`));
    if (!accepted) fail(`${field} usa un host no autorizado en ${relative}: ${host}`);
  } catch {
    fail(`${field} contiene una URL inválida en ${relative}`);
  }
}

for (const page of requiredPages) {
  if (!fs.existsSync(path.join(wikiDir, page))) fail(`Falta la página requerida wiki-source/${page}`);
}

for (const file of [...walk(wikiDir, ".md"), path.join(root, "README.md")]) {
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  for (const { label, pattern } of forbiddenPatterns) {
    if (pattern.test(text)) fail(`${label} detectado en ${relative}`);
  }
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].trim();
    if (!target || target.startsWith("#") || /^(?:https?:|mailto:)/.test(target)) continue;
    const targetPath = target.split("#")[0];
    const direct = path.resolve(path.dirname(file), targetPath);
    const candidates = [direct];
    if (!path.extname(targetPath)) candidates.push(`${direct}.md`, path.join(direct, "README.md"));
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      fail(`Enlace interno no resuelto en ${relative}: ${target}`);
    }
  }
}

const resourceIds = new Set();
for (const file of walk(resourceDir, ".json")) {
  const relative = path.relative(root, file);
  let record;
  try {
    record = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    fail(`JSON inválido en ${relative}`);
    continue;
  }
  const required = ["id", "name", "kind", "canonicalUrl", "summary", "tags", "platforms", "languages", "reviewStatus", "lastReviewed", "evidence"];
  for (const field of required) if (!(field in record)) fail(`Falta ${field} en ${relative}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.id ?? "")) fail(`id inválido en ${relative}`);
  if (resourceIds.has(record.id)) fail(`id duplicado en ${relative}: ${record.id}`);
  resourceIds.add(record.id);
  if (path.basename(file, ".json") !== record.id) fail(`el archivo debe coincidir con id en ${relative}`);
  if (!allowedKinds.has(record.kind)) fail(`kind inválido en ${relative}`);
  allowedExternalUrl(record.canonicalUrl, "canonicalUrl", relative);
  if (!allowedStatuses.has(record.reviewStatus)) fail(`reviewStatus inválido en ${relative}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.lastReviewed ?? "")) fail(`lastReviewed debe usar AAAA-MM-DD en ${relative}`);
  if (!Array.isArray(record.tags) || record.tags.length === 0) fail(`tags debe contener al menos una etiqueta en ${relative}`);
  if (!Array.isArray(record.platforms) || record.platforms.some((platform) => !allowedPlatforms.has(platform))) fail(`platforms contiene un valor inválido en ${relative}`);
  if (!Array.isArray(record.evidence) || record.evidence.length === 0) {
    fail(`evidence debe contener al menos una URL en ${relative}`);
  } else {
    record.evidence.forEach((url) => allowedExternalUrl(url, "evidence", relative));
  }
}

if (errors > 0) {
  console.error(`\nValidación fallida: ${errors} problema(s).`);
  process.exit(1);
}

console.log(`Validación correcta: ${walk(wikiDir, ".md").length} páginas Markdown y ${walk(resourceDir, ".json").length} fichas estructuradas.`);
