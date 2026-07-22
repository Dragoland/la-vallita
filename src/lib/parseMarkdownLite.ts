export function parseMarkdownLite(text: string): string {
  if (!text) return '';

  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Bold **text**
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic *text*
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  const lines = html.split('\n');
  let inList = false;
  const result: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        result.push('<ul style="margin:0.5rem 0;padding-left:1.25rem;list-style-type:disc;">');
        inList = true;
      }
      result.push(`<li style="margin-bottom:0.25rem;">${trimmed.slice(2)}</li>`);
    } else {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      if (trimmed === '') {
        // skip empty lines
      } else {
        result.push(`<p style="margin-bottom:0.75rem;line-height:1.7;">${line}</p>`);
      }
    }
  }
  if (inList) result.push('</ul>');

  return result.join('');
}
