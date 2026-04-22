import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { safeRead } from '../lib/fs.js';
import type { CBSEIndex } from '../lib/indexer.js';

export function registerCommandTools(server: McpServer, index: CBSEIndex): void {
  server.tool(
    'get_command',
    'Fetches a command definition for a specific grade.',
    { 
      command: z.string().describe('Command name (e.g., "practice")'),
      grade: z.enum(['10th', '12th']).default('12th')
    },
    async ({ command, grade }) => {
      const key = `${grade}/${command.toLowerCase().replace(/^\//, '').replace(/\s+/g, '-')}`;
      const p = index.commands.get(key);
      if (!p) return { content: [{ type: 'text', text: `Command not found in ${grade}.` }], isError: true };
      try { return { content: [{ type: 'text', text: safeRead(p) }] }; }
      catch (err) { return { content: [{ type: 'text', text: `Error: ${(err as Error).message}` }], isError: true }; }
    }
  );

  server.tool(
    'run_command',
    'Executes a command template with parameters for a specific grade.',
    {
      command: z.string(),
      grade: z.enum(['10th', '12th']).default('12th'),
      params: z.record(z.string()),
    },
    async ({ command, grade, params }) => {
      const key = `${grade}/${command.toLowerCase().replace(/^\//, '').replace(/\s+/g, '-')}`;
      const p = index.commands.get(key);
      if (!p) return { content: [{ type: 'text', text: `Command not found.` }], isError: true };
      try {
        let template = safeRead(p);
        for (const [k, v] of Object.entries(params)) {
          const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          template = template.replace(new RegExp(`\\{\\{${escaped}\\}\\}`, 'gi'), v);
        }
        return { content: [{ type: 'text', text: `[/${command}] Execution Block (${grade}):\n\n${template}` }] };
      } catch (err) { return { content: [{ type: 'text', text: `Error: ${(err as Error).message}` }], isError: true }; }
    }
  );
}
