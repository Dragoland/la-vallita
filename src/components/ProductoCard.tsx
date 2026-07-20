import React from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import type { Producto } from '@/types';

interface Props {
  producto: Producto;
  onAdd: (p: Producto) => void;
  onOpenCart: () => void;
  onDetail: () => void;
}

const ProductoCard: React.FC<Props> = ({ producto, onAdd, onOpenCart, onDetail }) => {
  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAdd(producto);
    onOpenCart();
  };

  const handleConsult = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `Hola, me interesa ${producto.nombre} de La Vallita. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/5355406632?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-400 hover:-translate-y-2 cursor-pointer"
      style={{
        boxShadow: '0 4px 20px var(--shadow)',
        border: '1px solid rgba(139, 105, 20, 0.08)',
      }}
      onClick={onDetail}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, var(--wheat), var(--leaf))', zIndex: 2 }}
      />

      <div className="relative h-[220px] overflow-hidden">
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center transition-transform duration-400 group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, var(--leaf-light), var(--leaf-dark))' }}
          >
            <span className="text-5xl mb-2">🌿</span>
            <span className="font-serif text-lg font-semibold text-white">{producto.nombre}</span>
            <span className="text-sm text-white/80">Fotografía real próximamente</span>
          </div>
        )}
        <svg viewBox="0 0 100 100" className="absolute -right-5 -top-5 w-[120px] h-[120px] opacity-[0.15]" fill="var(--leaf-dark)">
          <path d="M50 90 Q20 50 50 10 Q80 50 50 90" />
        </svg>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="font-serif text-xl font-bold" style={{ color: 'var(--soil-dark)' }}>
          {producto.nombre}
        </h4>
        <span className="font-serif italic text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
          {producto.cientifico}
        </span>
        <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-soft)' }}>
          {producto.desc.slice(0, 120)}...
        </p>

        {/* Stock badge for special products */}
        {producto.stock !== undefined && producto.stock > 0 && (
          <span
            className="inline-flex items-center gap-2 text-xs font-bold rounded-full px-4 py-1.5 mb-3 w-fit"
            style={{ background: '#ffebee', color: '#c62828', letterSpacing: '0.5px' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#c62828' }} />
            Solo {producto.stock} {producto.stock === 1 ? 'unidad' : 'unidades'} disponible{producto.stock === 1 ? '' : 's'}
          </span>
        )}

        <div className="mb-4">
          {producto.precio_cup ? (
            <>
              <span className="font-serif text-lg font-bold" style={{ color: 'var(--soil)' }}>
                ${producto.precio_cup} CUP
              </span>
              {producto.precio_mlc && (
                <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>
                  · ${producto.precio_mlc.toFixed(2)} MLC
                </span>
              )}
            </>
          ) : (
            <span className="font-serif text-lg font-bold" style={{ color: 'var(--text-muted)' }}>
              Consultar
            </span>
          )}
          <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>/ {producto.unidad}</span>
        </div>

        {producto.estado === 'disponible' ? (
          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }}
          >
            <Plus size={16} />
            Añadir
          </button>
        ) : (
          <button
            onClick={handleConsult}
            className="flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#9e9e9e' }}
          >
            <MessageCircle size={16} />
            Consultar disponibilidad
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductoCard;
