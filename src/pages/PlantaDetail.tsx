import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Plus, MessageCircle } from 'lucide-react';
import { useTodosProductos } from '@/hooks/useProductos';
import type { Producto } from '@/types';

interface Props {
  onAdd: (p: Producto) => void;
  onOpenCart: () => void;
}

const PlantaDetail: React.FC<Props> = ({ onAdd, onOpenCart }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { productos, loading } = useTodosProductos();

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

  const handleAdd = () => {
    onAdd(planta);
    onOpenCart();
  };

  const handleConsult = () => {
    const msg = `Hola, me interesa ${planta.nombre} de La Vallita. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/5355406632?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const isDisponible = planta.estado === 'disponible';

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
            {planta.imagen ? (
              <img
                src={planta.imagen}
                alt={planta.nombre}
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            ) : (
              <div className="text-center text-white">
                <span className="text-6xl mb-4 block">🌿</span>
                <span className="font-serif text-xl font-semibold">{planta.nombre}</span>
                <span className="block text-sm text-white/80 mt-2">Fotografía real próximamente</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {planta.stock !== undefined && planta.stock > 0 && (
              <span
                className="inline-flex items-center gap-2 text-xs font-bold rounded-full px-4 py-1.5 mb-4"
                style={{ background: '#ffebee', color: '#c62828', letterSpacing: '0.5px' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#c62828' }} />
                Solo {planta.stock} {planta.stock === 1 ? 'unidad' : 'unidades'} disponible{planta.stock === 1 ? '' : 's'}
              </span>
            )}

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

            {isDisponible ? (
              <button
                onClick={handleAdd}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }}
              >
                <Plus size={18} />
                Añadir al pedido
              </button>
            ) : (
              <button
                onClick={handleConsult}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#9e9e9e' }}
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantaDetail;

