import { useState, useEffect } from 'react';
import type { Producto } from '@/types';
import { parseFrontmatter } from '@/lib/parseMarkdown';

interface ProductoFrontmatter {
  nombre: string;
  slug: string;
  cientifico: string;
  estado: string;
  precio_cup: number | null;
  precio_mlc: number | null;
  unidad: string;
  categoria: string;
  tags: string[];
  variedades?: string[];
}

export function useProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const modules = import.meta.glob('/src/content/productos/*.md', { eager: true, as: 'raw' });
    const parsed: Producto[] = [];

    for (const path in modules) {
      const raw = modules[path] as string;
      const { frontmatter, content } = parseFrontmatter<ProductoFrontmatter>(raw);
      parsed.push({
        nombre: frontmatter.nombre || '',
        slug: frontmatter.slug || '',
        cientifico: frontmatter.cientifico || '',
        desc: content,
        estado: (frontmatter.estado as Producto['estado']) || 'disponible',
        precio_cup: frontmatter.precio_cup ?? null,
        precio_mlc: frontmatter.precio_mlc ?? null,
        unidad: frontmatter.unidad || 'planta',
        categoria: (frontmatter.categoria as Producto['categoria']) || 'frutal',
        tags: frontmatter.tags || [],
        variedades: frontmatter.variedades,
      });
    }

    setProductos(parsed);
    setLoading(false);
  }, []);

  return { productos, loading };
}
