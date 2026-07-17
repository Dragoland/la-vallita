import { useState, useEffect } from 'react';
import type { Consejo } from '@/types';
import { parseFrontmatter } from '@/lib/parseMarkdown';

interface ConsejoFrontmatter {
  titulo: string;
  slug: string;
  mes: number;
  resumen: string;
  tags: string[];
  prioridad: number;
}

export function useConsejos() {
  const [consejos, setConsejos] = useState<Consejo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const modules = import.meta.glob('/src/content/consejos/*.md', { eager: true, as: 'raw' });
    const parsed: Consejo[] = [];

    for (const path in modules) {
      const raw = modules[path] as string;
      const { frontmatter, content } = parseFrontmatter<ConsejoFrontmatter>(raw);
      parsed.push({
        titulo: frontmatter.titulo || '',
        slug: frontmatter.slug || '',
        mes: frontmatter.mes || 1,
        resumen: frontmatter.resumen || '',
        texto: content,
        tags: frontmatter.tags || [],
        prioridad: frontmatter.prioridad || 3,
      });
    }

    setConsejos(parsed);
    setLoading(false);
  }, []);

  return { consejos, loading };
}
