import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { safeRead } from './lib/fs.js';
import { buildIndex, CBSEIndex } from './lib/indexer.js';
import * as path from 'path';

export interface ServerContext {
  server: McpServer;
  index: CBSEIndex;
}

export function createServer(): ServerContext {
  const index = buildIndex();

  const server = new McpServer(
    {
      name: 'everything-cbse-code',
      version: '1.0.0',
    },
    {
      instructions:
        'This server exposes the unified CBSE Grade 10 & 12 Board Exam preparation ecosystem. ' +
        'It handles both board levels through a single interface. ' +
        'When calling tools, always specify the "grade" parameter (10th or 12th). ' +
        'Use get_cbse_index for a system overview. ' +
        'Access skills, agents, commands, and vault notes for both grades.'
    }
  );

  // Register Tools
  registerCoreTools(server, index);
  registerSkillTools(server, index);
  registerAgentTools(server, index);
  registerCommandTools(server, index);
  registerNoteTools(server, index);
  registerSearchTools(server, index);

  // Register Resources
  registerResources(server, index);

  return { server, index };
}

import { registerCoreTools } from './tools/core.js';
import { registerSkillTools } from './tools/skills.js';
import { registerAgentTools } from './tools/agents.js';
import { registerCommandTools } from './tools/commands.js';
import { registerNoteTools } from './tools/notes.js';
import { registerSearchTools } from './tools/search.js';

function registerResources(server: McpServer, index: CBSEIndex): void {

  // Static Index Resources
  server.resource('cbse-10-index', 'cbse10://index', { title: 'CBSE 10th Index' }, async (uri) => ({ contents: [{ uri: uri.href, text: safeRead('10th/CBSE.md') }] }));
  server.resource('cbse-12-index', 'cbse12://index', { title: 'CBSE 12th Index' }, async (uri) => ({ contents: [{ uri: uri.href, text: safeRead('12th/CBSE12.md') }] }));

  // Dynamic Resource Templates (example for skills)
  server.resource('skill', new ResourceTemplate('cbse-unified://{grade}/skill/{name}', {
    list: async () => ({
      resources: Array.from(index.skills.entries()).map(([key]) => ({
        uri: `cbse-unified://${key}`,
        name: `Skill: ${key}`
      }))
    })
  }), async (uri, { grade, name }) => {
    const key = `${grade}/${name}`;
    const p = index.skills.get(key);
    if (!p) throw new Error(`Skill ${key} not found`);
    return { contents: [{ uri: uri.href, text: safeRead(p) }] };
  });

  // (Similarly for other resources, using the {grade} prefix pattern)
}
