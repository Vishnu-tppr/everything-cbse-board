import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');

// Validate marker files for both 10th and 12th
const marker10 = path.join(REPO_ROOT, '10th', 'CBSE.md');
const marker12 = path.join(REPO_ROOT, '12th', 'CBSE12.md');

if (!fs.existsSync(marker10) || !fs.existsSync(marker12)) {
  process.stderr.write(
    `[everything-cbse-code] FATAL: Unified repo root does not contain 10th/CBSE.md or 12th/CBSE12.md.\n` +
    `  Resolved REPO_ROOT to: ${REPO_ROOT}\n`
  );
  process.exit(1);
}

export function safeRead(relativePath: string): string {
  const resolved = path.isAbsolute(relativePath) ? relativePath : path.resolve(REPO_ROOT, relativePath);

  if (!resolved.startsWith(REPO_ROOT + path.sep) && resolved !== REPO_ROOT) {
    throw new Error(`[SECURITY] Path traversal blocked: "${relativePath}"`);
  }

  if (resolved.includes('.obsidian')) {
    throw new Error(`[SECURITY] Obsidian internals are inaccessible: "${relativePath}"`);
  }

  if (!fs.existsSync(resolved)) {
    throw new Error(`[NOT FOUND] "${relativePath}" does not exist`);
  }

  return fs.readFileSync(resolved, 'utf-8');
}

export function safeListDir(relativePath: string): string[] {
  const resolved = path.isAbsolute(relativePath) ? relativePath : path.resolve(REPO_ROOT, relativePath);

  if (!resolved.startsWith(REPO_ROOT + path.sep) && resolved !== REPO_ROOT) {
    throw new Error(`[SECURITY] Path traversal blocked: "${relativePath}"`);
  }

  if (resolved.includes('.obsidian')) {
    throw new Error(`[SECURITY] Obsidian internals are inaccessible: "${relativePath}"`);
  }

  if (!fs.existsSync(resolved)) {
    return [];
  }

  return fs.readdirSync(resolved).filter(entry => !entry.startsWith('.'));
}

export function safeIsDir(relativePath: string): boolean {
  const resolved = path.isAbsolute(relativePath) ? relativePath : path.resolve(REPO_ROOT, relativePath);
  if (!resolved.startsWith(REPO_ROOT + path.sep) && resolved !== REPO_ROOT) {
    return false;
  }
  return fs.existsSync(resolved) && fs.statSync(resolved).isDirectory();
}
