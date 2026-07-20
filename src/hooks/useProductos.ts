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
  stock?: number;
  especial?: boolean;
  imagen?: string;
}

function parseProducto(raw: string): Producto {
  const { frontmatter, content } = parseFrontmatter<ProductoFrontmatter>(raw);
  return {
    nombre: frontmatter.nombre || '',
    slug: frontmatter.slug || '',
    cientifico: frontmatter.cientifico || '',
    desc: content,
    estado: (frontmatter.estado as Producto['estado']) || 'no_disponible',
    precio_cup: frontmatter.precio_cup ?? null,
    precio_mlc: frontmatter.precio_mlc ?? null,
    unidad: frontmatter.unidad || 'planta',
    categoria: (frontmatter.categoria as Producto['categoria']) || 'frutal',
    tags: frontmatter.tags || [],
    variedades: frontmatter.variedades,
    stock: frontmatter.stock,
    especial: frontmatter.especial,
    imagen: frontmatter.imagen,
  };
}

export function useProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const modules = import.meta.glob('/src/content/productos/*.md', { eager: true, as: 'raw' });
    const parsed: Producto[] = [];

    for (const path in modules) {
      const raw = modules[path] as string;
      parsed.push(parseProducto(raw));
    }

    setProductos(parsed);
    setLoading(false);
  }, []);

  // Solo productos disponibles y NO especiales (los especiales van aparte)
  const disponibles = productos.filter(
    (p) => p.estado === 'disponible' && !p.especial
  );

  return { productos, disponibles, loading };
}

export function useEspeciales() {
  const [especiales, setEspeciales] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const modules = import.meta.glob('/src/content/especiales/*.md', { eager: true, as: 'raw' });
    const parsed: Producto[] = [];

    for (const path in modules) {
      const raw = modules[path] as string;
      const producto = parseProducto(raw);
      // Solo mostrar si está disponible Y tiene stock > 0
      if (producto.estado === 'disponible' && (producto.stock ?? 0) > 0) {
        parsed.push(producto);
      }
    }

    setEspeciales(parsed);
    setLoading(false);
  }, []);

  return { especiales, loading };
}
