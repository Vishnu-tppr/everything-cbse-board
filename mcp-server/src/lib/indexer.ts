import * as path from 'node:path';
import * as fs from 'node:fs';
import { REPO_ROOT } from './fs.js';

export interface CBSEIndex {
  skills: Map<string, string>;
  agents: Map<string, string>;
  commands: Map<string, string>;
  rules: Map<string, string>;
  notes: {
    bySubject: Map<string, string[]>;
    hubs: Map<string, string>;
    dashboards: Map<string, string>;
    templates: Map<string, string>;
  };
  allMarkdownFiles: string[];
}

function toKebab(name: string): string {
  return name.replace(/\.md$/i, '').replace(/[^\p{L}\p{N}\s\-]/gu, '').trim().replace(/\s+/g, '-').toLowerCase();
}

export function buildIndex(): CBSEIndex {
  const index: CBSEIndex = {
    skills: new Map(),
    agents: new Map(),
    commands: new Map(),
    rules: new Map(),
    notes: { bySubject: new Map(), hubs: new Map(), dashboards: new Map(), templates: new Map() },
    allMarkdownFiles: [],
  };

  const scanFolder = (grade: string) => {
    const gradePath = path.join(REPO_ROOT, grade);
    if (!fs.existsSync(gradePath)) return;

    // 1. Skills
    const skillsDir = path.join(gradePath, 'skills');
    if (fs.existsSync(skillsDir)) {
      const scan = (dir: string) => {
        fs.readdirSync(dir).forEach(entry => {
          const p = path.join(dir, entry);
          if (fs.statSync(p).isDirectory()) {
            const skillFile = path.join(p, 'SKILL.md');
            if (fs.existsSync(skillFile)) {
              // Store with grade prefix to avoid collisions, e.g. "12th/physics"
              index.skills.set(`${grade}/${toKebab(entry)}`, path.relative(REPO_ROOT, skillFile).replace(/\\/g, '/'));
            }
            scan(p);
          }
        });
      };
      scan(skillsDir);
    }

    // 2. Agents
    const agentsDir = path.join(gradePath, 'agents');
    if (fs.existsSync(agentsDir)) {
      fs.readdirSync(agentsDir).forEach(file => {
        if (file.endsWith('.md')) index.agents.set(`${grade}/${toKebab(file)}`, `${grade}/agents/${file}`);
      });
    }

    // 3. Commands
    const commandsDir = path.join(gradePath, 'commands');
    if (fs.existsSync(commandsDir)) {
      fs.readdirSync(commandsDir).forEach(file => {
        if (file.endsWith('.md')) index.commands.set(`${grade}/${toKebab(file)}`, `${grade}/commands/${file}`);
      });
    }

    // 4. Rules
    const rulesDir = path.join(gradePath, 'rules');
    if (fs.existsSync(rulesDir)) {
      fs.readdirSync(rulesDir).forEach(file => {
        if (file.endsWith('.md')) index.rules.set(`${grade}/${toKebab(file)}`, `${grade}/rules/${file}`);
      });
    }

    // 5. Notes (Prasanna vault)
    const vaultName = grade === '10th' ? 'Prasanna' : 'Prasanna-12';
    const vaultPath = path.join(gradePath, vaultName);
    if (fs.existsSync(vaultPath)) {
      // Hubs & Dashboards
      const walk = (dir: string) => {
        fs.readdirSync(dir).forEach(file => {
          const p = path.join(dir, file);
          if (fs.statSync(p).isDirectory()) {
            if (file === 'Templates') {
              fs.readdirSync(p).forEach(f => { if (f.endsWith('.md')) index.notes.templates.set(`${grade}/${toKebab(f)}`, `${grade}/${vaultName}/Templates/${f}`); });
            } else {
              // Subject folders
              const notes: string[] = [];
              const scanNotes = (d: string) => {
                fs.readdirSync(d).forEach(f => {
                  const fp = path.join(d, f);
                  if (fs.statSync(fp).isDirectory()) scanNotes(fp);
                  else if (f.endsWith('.md')) notes.push(path.relative(REPO_ROOT, fp).replace(/\\/g, '/'));
                });
              };
              scanNotes(p);
              index.notes.bySubject.set(`${grade}/${toKebab(file)}`, notes);
            }
          } else if (file.endsWith('.md')) {
            // Likely a Hub or Dashboard
            const name = toKebab(file);
            if (name.includes('formulas') || name.includes('diagrams') || name.includes('keywords') || name.includes('patterns')) {
              index.notes.hubs.set(`${grade}/${name}`, `${grade}/${vaultName}/${file}`);
            } else {
              index.notes.dashboards.set(`${grade}/${name}`, `${grade}/${vaultName}/${file}`);
            }
          }
        });
      };
      walk(vaultPath);
    }
  };

  scanFolder('10th');
  scanFolder('12th');

  // Populate allMarkdownFiles for search tool
  index.allMarkdownFiles = [
    ...Array.from(index.skills.values()),
    ...Array.from(index.agents.values()),
    ...Array.from(index.commands.values()),
    ...Array.from(index.rules.values()),
    ...Array.from(index.notes.hubs.values()),
    ...Array.from(index.notes.dashboards.values()),
    ...Array.from(index.notes.templates.values()),
    ...Array.from(index.notes.bySubject.values()).flat(),
    '10th/CBSE.md',
    '12th/CBSE12.md'
  ];

  return index;
}

export function resolveSubject(input: string, grade: string): string | null {
  // Logic to resolve subject name based on grade
  return `${grade}/${toKebab(input)}`;
}
