import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ProductoCard from '@/components/ProductoCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEspeciales } from '@/hooks/useProductos';
import type { Producto } from '@/types';

interface Props {
  onAdd: (p: Producto) => void;
  onOpenCart: () => void;
}

const Especiales: React.FC<Props> = ({ onAdd, onOpenCart }) => {
  const ref = useScrollAnimation({ y: 40, duration: 0.6, stagger: 0.08 });
  const { especiales, loading } = useEspeciales();
  const navigate = useNavigate();

  return (
    <section style={{ background: 'var(--cream)', padding: '6rem 1.5rem', minHeight: '100vh' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors duration-300 hover:opacity-70"
          style={{ color: 'var(--soil-dark)' }}
        >
          <ArrowLeft size={18} />
          Volver al catálogo
        </button>

        <SectionHeader
          label="Edición limitada"
          title="Productos especiales"
          subtitle="Plantas raras, variedades de legado y unidades de stock limitado. Cuando se agotan, desaparecen."
        />

        {/* Decorative banner */}
        <div
          className="mx-auto max-w-3xl text-center rounded-xl px-6 py-4 mb-10"
          style={{
            background: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
            border: '1px dashed #f5a623',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles size={20} style={{ color: '#f57c00' }} />
            <span className="font-serif text-lg font-bold" style={{ color: '#e65100' }}>
              Stock limitado
            </span>
            <Sparkles size={20} style={{ color: '#f57c00' }} />
          </div>
          <p className="text-sm" style={{ color: '#bf360c' }}>
            Los productos de esta sección tienen unidades contadas. El stock se actualiza manualmente.
            Si ves algo que te interesa, no esperes mucho.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[var(--leaf)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p style={{ color: 'var(--text-muted)' }}>Cargando especiales...</p>
          </div>
        ) : especiales.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🌱</span>
            <p className="text-xl font-serif mb-3" style={{ color: 'var(--soil-dark)' }}>
              No hay productos especiales disponibles
            </p>
            <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
              En este momento no tenemos unidades de edición limitada en stock.
              Vuelve pronto o consulta el catálogo general.
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }}
            >
              Ver catálogo general
            </button>
          </div>
        ) : (
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {especiales.map((p) => (
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
              ¿Buscas una variedad en particular?
            </strong>{' '}
            Escríbenos por WhatsApp. A veces tenemos plantas en vivero que aún no publicamos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Especiales;
