export interface ParsedMarkdown<T> {
  frontmatter: T;
  content: string;
}

export function parseFrontmatter<T extends Record<string, unknown>>(raw: string): ParsedMarkdown<T> {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {} as T, content: raw.trim() };
  }

  const yaml = match[1];
  const content = match[2].trim();
  const frontmatter = {} as Record<string, unknown>;

  yaml.split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val: unknown = line.slice(idx + 1).trim();

    // Remove quotes
    if (typeof val === 'string') {
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      // Arrays [a, b, c]
      if (val.startsWith('[') && val.endsWith(']')) {
        val = (val as string).slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, ''));
      }
      // Numbers
      if (/^\d+$/.test(val as string)) val = parseInt(val as string, 10);
      if (/^\d+\.\d+$/.test(val as string)) val = parseFloat(val as string);
      // Boolean
      if (val === 'true') val = true;
      if (val === 'false') val = false;
      // Null
      if (val === 'null' || val === '~') val = null;
    }

    frontmatter[key] = val;
  });

  return { frontmatter: frontmatter as T, content };
}
