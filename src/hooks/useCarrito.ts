import { useState, useEffect, useCallback } from 'react';
import type { Producto, CarritoItem } from '@/types';

const STORAGE_KEY = 'lavallita_carrito';

export function useCarrito() {
  const [items, setItems] = useState<CarritoItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch { /* ignore */ }
    return [];
  });

  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const agregar = useCallback((producto: Producto) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === producto.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === producto.slug ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  }, []);

  const quitar = useCallback((slug: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing && existing.cantidad > 1) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, cantidad: i.cantidad - 1 } : i
        );
      }
      return prev.filter((i) => i.slug !== slug);
    });
  }, []);

  const eliminar = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const vaciar = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.cantidad, 0);
  const totalCup = items.reduce((sum, i) => sum + (i.precio_cup || 0) * i.cantidad, 0);
  const totalMlc = items.reduce((sum, i) => sum + (i.precio_mlc || 0) * i.cantidad, 0);

  const generarMensajeWhatsApp = useCallback(() => {
    if (items.length === 0) return '';
    let msg = 'Hola, vengo de lavallita.pages.dev y quiero hacer un pedido:\n\n';
    items.forEach((item) => {
      const subCup = (item.precio_cup || 0) * item.cantidad;
      const subMlc = (item.precio_mlc || 0) * item.cantidad;
      msg += `🌿 ${item.nombre} — ${item.cantidad} ${item.unidad}`;
      if (subCup > 0) msg += ` — $${subCup} CUP`;
      if (subMlc > 0) msg += ` · $${subMlc.toFixed(2)} MLC`;
      msg += '\n';
    });
    msg += `\n📦 Total estimado: $${totalCup} CUP`;
    if (totalMlc > 0) msg += ` · $${totalMlc.toFixed(2)} MLC`;
    msg += '\n🚚 Retiro en finca (Falcón, Placetas)\n\n¿Confirman disponibilidad?';
    return msg;
  }, [items, totalCup, totalMlc]);

  return {
    items,
    abierto,
    setAbierto,
    agregar,
    quitar,
    eliminar,
    vaciar,
    totalItems,
    totalCup,
    totalMlc,
    generarMensajeWhatsApp,
  };
}
