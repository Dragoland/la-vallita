import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import SectionHeader from '@/components/SectionHeader';
import ProductoCard from '@/components/ProductoCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useProductos } from '@/hooks/useProductos';
import type { Producto } from '@/types';

const categorias = [
  { key: 'todos', label: 'Todos' },
  { key: 'frutal', label: 'Frutales' },
  { key: 'hortaliza', label: 'Hortalizas' },
  { key: 'cafe', label: 'Café' },
  { key: 'ornamental', label: 'Ornamentales' },
];

interface Props {
  onAdd: (p: Producto) => void;
  onOpenCart: () => void;
}

const Catalogo: React.FC<Props> = ({ onAdd, onOpenCart }) => {
  const [catActiva, setCatActiva] = useState('todos');
  const ref = useScrollAnimation({ y: 40, duration: 0.6, stagger: 0.08 });
  const { productos, loading } = useProductos();
  const navigate = useNavigate();

  const filtrados = catActiva === 'todos'
    ? productos
    : productos.filter((p) => p.categoria === catActiva);

  return (
    <section id="catalogo" style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Lo que cultivamos"
          title="Catálogo de plantas"
          subtitle="Patrimonio real de La Vallita. Pregunta por lo que no ves, quizás esté brotando."
        />

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCatActiva(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${catActiva === cat.key ? 'text-white' : 'hover:bg-gray-200'}`}
              style={catActiva === cat.key ? { background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' } : { background: 'var(--parchment)' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[var(--leaf)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p style={{ color: 'var(--text-muted)' }}>Cargando catálogo...</p>
          </div>
        ) : (
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrados.map((p) => (
              <ProductoCard
                key={p.slug}
                producto={p}
                onAdd={onAdd}
                onOpenCart={onOpenCart}
                onDetail={() => navigate(`/planta/${p.slug}`)}
              />
            ))}
          </div>
        )}

        <div
          className="mt-12 mx-auto max-w-2xl text-center rounded-xl px-6 py-5"
          style={{ background: 'var(--parchment)', border: '1px dashed var(--soil-light)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-soft)' }}>
            <strong className="font-serif" style={{ color: 'var(--soil-dark)' }}>
              ¿Buscas algo que no ves?
            </strong>{' '}
            Escríbenos por WhatsApp. Muchas plantas están en vivero o brotando. El catálogo se actualiza
            según la temporada y la disponibilidad real de la finca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
