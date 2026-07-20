export interface Producto {
  nombre: string;
  slug: string;
  cientifico: string;
  desc: string;
  estado: 'disponible' | 'no_disponible';
  precio_cup: number | null;
  precio_mlc: number | null;
  unidad: string;
  categoria: 'frutal' | 'hortaliza' | 'cafe' | 'ornamental' | 'otro';
  imagen?: string;
  tags: string[];
  variedades?: string[];
  stock?: number;
  especial?: boolean;
}

export interface Consejo {
  titulo: string;
  slug: string;
  mes: number;
  resumen: string;
  texto: string;
  tags: string[];
  prioridad: number;
}

export interface CarritoItem extends Producto {
  cantidad: number;
}
