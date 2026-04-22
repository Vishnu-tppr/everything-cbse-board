import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { safeRead } from '../lib/fs.js';
import { resolveSubject } from '../lib/indexer.js';
import type { CBSEIndex } from '../lib/indexer.js';

export function registerNoteTools(server: McpServer, index: CBSEIndex): void {
  server.tool(
    'get_chapter_notes',
    'Fetches personal chapter notes from the vault for a specific grade.',
    {
      subject: z.string().describe('e.g., "physics", "math"'),
      grade: z.enum(['10th', '12th']).default('12th'),
      chapter: z.string().optional().describe('Fuzzy matched chapter name.'),
    },
    async ({ subject, grade, chapter }) => {
      const subjectKey = resolveSubject(subject, grade);
      if (!subjectKey) return { content: [{ type: 'text', text: `Subject not recognized.` }], isError: true };
      
      const notes = index.notes.bySubject.get(subjectKey);
      if (!notes) return { content: [{ type: 'text', text: `No notes for ${subject} in ${grade}.` }], isError: true };

      if (!chapter) return { content: [{ type: 'text', text: JSON.stringify({ subject, grade, available: notes.map(n => n.split('/').pop()?.replace('.md', '')) }, null, 2) }] };

      const query = chapter.toLowerCase();
      const match = notes.find(n => n.toLowerCase().includes(query));
      if (!match) return { content: [{ type: 'text', text: `Note not found.` }], isError: true };

      try { return { content: [{ type: 'text', text: safeRead(match) }] }; }
      catch (err) { return { content: [{ type: 'text', text: `Error: ${(err as Error).message}` }], isError: true }; }
    }
  );

  server.tool(
    'get_hub',
    'Fetches a master hub file, dashboard, or template for a specific grade.',
    { 
      hub: z.string(),
      grade: z.enum(['10th', '12th']).default('12th')
    },
    async ({ hub, grade }) => {
      const key = `${grade}/${hub.toLowerCase().replace(/\s+/g, '-').replace(/\.md$/, '')}`;
      const p = index.notes.hubs.get(key) ?? index.notes.dashboards.get(key) ?? index.notes.templates.get(key);
      if (!p) return { content: [{ type: 'text', text: `Hub not found in ${grade}.` }], isError: true };
      try { return { content: [{ type: 'text', text: safeRead(p) }] }; }
      catch (err) { return { content: [{ type: 'text', text: `Error: ${(err as Error).message}` }], isError: true }; }
    }
  );
}
