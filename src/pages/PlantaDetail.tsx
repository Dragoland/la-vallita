import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Plus, MessageCircle, Clock, Bell } from 'lucide-react';
import { useProductos } from '@/hooks/useProductos';
import type { Producto } from '@/types';

interface Props {
  onAdd: (p: Producto) => void;
  onOpenCart: () => void;
}

const estadoConfig = {
  disponible: { bg: '#e8f5e9', color: '#2e7d32', label: 'Disponible', canAdd: true },
  brotando: { bg: '#fff8e1', color: '#f57c00', label: 'Brotando', canAdd: true },
  encargo: { bg: '#e3f2fd', color: '#1565c0', label: 'Solo por encargo', canAdd: true },
  legacy: { bg: '#f3e5f5', color: '#6a1b9a', label: 'Variedades de legado', canAdd: false },
  agotado: { bg: '#e2e3e5', color: '#383d41', label: 'Agotado', canAdd: false },
};

const PlantaDetail: React.FC<Props> = ({ onAdd, onOpenCart }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { productos, loading } = useProductos();

  const planta = productos.find((p) => p.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--cream)' }}>
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[var(--leaf)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p style={{ color: 'var(--text-muted)' }}>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!planta) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--cream)' }}>
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--soil-dark)' }}>Planta no encontrada</h2>
          <button
            onClick={() => navigate('/#catalogo')}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
            style={{ background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }}
          >
            <ArrowLeft size={16} />
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const est = estadoConfig[planta.estado];

  const handleAction = () => {
    if (est.canAdd) {
      onAdd(planta);
      onOpenCart();
    } else if (planta.estado === 'agotado') {
      const msg = `Hola, me interesa ${planta.nombre}. Avísenme cuando haya disponibilidad.`;
      window.open(`https://wa.me/5355406632?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
      const msg = `Hola, me interesa ${planta.nombre} de La Vallita. ¿Qué variedades tienen?`;
      window.open(`https://wa.me/5355406632?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <div className="bg-white border-b" style={{ borderColor: 'rgba(139,105,20,0.1)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/#catalogo')}
            className="flex items-center gap-2 text-sm font-medium hover:text-[var(--leaf)] transition-colors"
            style={{ color: 'var(--text-soft)' }}
          >
            <ArrowLeft size={16} />
            Volver al catálogo
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Imagen */}
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, var(--leaf-light), var(--leaf-dark))',
              minHeight: '400px',
            }}
          >
            <div className="text-center text-white">
              <span className="text-6xl mb-4 block">🌿</span>
              <span className="font-serif text-xl font-semibold">{planta.nombre}</span>
              <span className="block text-sm text-white/80 mt-2">Fotografía real próximamente</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-4 py-1.5 mb-4"
              style={{ background: est.bg, color: est.color }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: est.color }} />
              {est.label}
            </span>

            <h1 className="font-serif text-4xl font-bold mb-2" style={{ color: 'var(--soil-dark)' }}>
              {planta.nombre}
            </h1>
            <p className="font-serif italic text-lg mb-6" style={{ color: 'var(--text-muted)' }}>
              {planta.cientifico}
            </p>

            <div
              className="prose max-w-none mb-8"
              style={{ color: 'var(--text-soft)', lineHeight: 1.8 }}
            >
              {planta.desc.split('\n').map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>

            {planta.variedades && planta.variedades.length > 0 && (
              <div className="mb-6">
                <strong className="block text-sm uppercase tracking-wider mb-2" style={{ color: 'var(--soil)' }}>
                  Variedades
                </strong>
                <div className="flex flex-wrap gap-2">
                  {planta.variedades.map((v) => (
                    <span key={v} className="bg-white px-3 py-1 rounded-full text-sm border" style={{ borderColor: 'rgba(139,105,20,0.15)', color: 'var(--text-soft)' }}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {planta.tags.map((t) => (
                <span key={t} className="bg-cream px-3 py-1 rounded-full text-xs" style={{ color: 'var(--text-muted)' }}>
                  #{t}
                </span>
              ))}
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              {planta.precio_cup ? (
                <>
                  <span className="font-serif text-3xl font-bold" style={{ color: 'var(--soil)' }}>
                    ${planta.precio_cup} CUP
                  </span>
                  {planta.precio_mlc && (
                    <span className="text-lg" style={{ color: 'var(--text-muted)' }}>
                      · ${planta.precio_mlc.toFixed(2)} MLC
                    </span>
                  )}
                </>
              ) : (
                <span className="font-serif text-3xl font-bold" style={{ color: 'var(--text-muted)' }}>
                  Consultar precio
                </span>
              )}
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>/ {planta.unidad}</span>
            </div>

            <button
              onClick={handleAction}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={
                est.canAdd
                  ? { background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }
                  : planta.estado === 'agotado'
                  ? { background: '#9e9e9e' }
                  : { background: 'linear-gradient(135deg, #9c27b0, #6a1b9a)' }
              }
            >
              {est.canAdd ? <Plus size={18} /> : planta.estado === 'agotado' ? <Bell size={18} /> : <MessageCircle size={18} />}
              {est.canAdd ? 'Añadir al pedido' : planta.estado === 'agotado' ? 'Avisarme cuando haya' : 'Consultar por WhatsApp'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantaDetail;
