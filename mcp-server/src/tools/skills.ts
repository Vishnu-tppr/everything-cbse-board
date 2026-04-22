import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { safeRead } from '../lib/fs.js';
import type { CBSEIndex } from '../lib/indexer.js';

function resolveSkill(query: string, grade: string, skills: Map<string, string>): { path: string; key: string } | { error: string; options: string[] } {
  const norm = query.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
  const gradePrefix = `${grade}/`;
  
  // Try with prefix first
  const fullKey = gradePrefix + norm;
  if (skills.has(fullKey)) return { path: skills.get(fullKey)!, key: fullKey };

  // Try matching last part within that grade
  const matches = Array.from(skills.keys()).filter(k => k.startsWith(gradePrefix) && (k.includes(norm) || norm.includes(k)));
  if (matches.length === 1) return { path: skills.get(matches[0])!, key: matches[0] };
  if (matches.length > 1) return { error: `Ambiguous match in ${grade}. Did you mean?`, options: matches };
  
  return { error: `Skill "${query}" not found in ${grade}.`, options: Array.from(skills.keys()).filter(k => k.startsWith(gradePrefix)).sort() };
}

export function registerSkillTools(server: McpServer, index: CBSEIndex): void {
  server.tool(
    'get_skill',
    'Fetches a CBSE skill file. Supports both 10th and 12th Grades.',
    { 
      skill: z.string().describe('Skill/subject name (e.g., "physics", "cbq-engine")'),
      grade: z.enum(['10th', '12th']).default('12th').describe('Target grade level.')
    },
    async ({ skill, grade }) => {
      const res = resolveSkill(skill, grade, index.skills);
      if ('error' in res) return { content: [{ type: 'text', text: JSON.stringify(res, null, 2) }], isError: true };
      try { return { content: [{ type: 'text', text: safeRead(res.path) }] }; }
      catch (err) { return { content: [{ type: 'text', text: `Error reading: ${(err as Error).message}` }], isError: true }; }
    }
  );

  server.tool(
    'get_skills_for_session',
    'Batch-loads multiple skills (max 5) for a specific grade.',
    { 
      skills: z.array(z.string()).min(1).max(5),
      grade: z.enum(['10th', '12th']).default('12th')
    },
    async ({ skills, grade }) => {
      const parts = [];
      for (const s of skills) {
        const res = resolveSkill(s, grade, index.skills);
        if ('error' in res) parts.push(`## ${s}\n[ERROR] ${res.error}`);
        else {
          try { parts.push(`## ${res.key}\n${safeRead(res.path)}`); }
          catch (e) { parts.push(`## ${s}\n[ERROR] ${(e as Error).message}`); }
        }
      }
      return { content: [{ type: 'text', text: parts.join('\n\n---\n\n') }] };
    }
  );
}
