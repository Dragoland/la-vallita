import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Plus, MessageCircle, Sprout, Tag, Package, CheckCircle } from 'lucide-react';
import { useTodosProductos } from '@/hooks/useProductos';
import { parseMarkdownLite } from '@/lib/parseMarkdownLite';
import { addToast } from '@/lib/toastStore';
import type { Producto } from '@/types';

const categoriaLabels: Record<string, { label: string; color: string; bg: string }> = {
  frutal: { label: 'Frutal', color: '#4a7c2e', bg: 'rgba(74, 124, 46, 0.1)' },
  hortaliza: { label: 'Hortaliza', color: '#b8653c', bg: 'rgba(184, 101, 60, 0.1)' },
  cafe: { label: 'Café', color: '#6b4423', bg: 'rgba(107, 68, 35, 0.1)' },
  ornamental: { label: 'Ornamental', color: '#8b6914', bg: 'rgba(139, 105, 20, 0.1)' },
  otro: { label: 'Otro', color: '#5c4d35', bg: 'rgba(92, 77, 53, 0.1)' },
};

interface Props {
  onAdd: (p: Producto) => void;
  onOpenCart: () => void;
}

const PlantaDetail: React.FC<Props> = ({ onAdd, onOpenCart }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { productos, loading } = useTodosProductos();
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    if (slug && productos.length > 0) {
      const found = productos.find((p) => p.slug === slug);
      if (found) setProducto(found);
    }
  }, [slug, productos]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-[var(--leaf)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p style={{ color: 'var(--text-muted)' }}>Cargando planta...</p>
        </div>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
        <div className="text-center">
          <span className="text-6xl mb-4 block">🌿</span>
          <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--soil-dark)' }}>Planta no encontrada</h2>
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Esta planta no está en nuestro catálogo.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }}
          >
            <ArrowLeft size={16} />
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const catInfo = categoriaLabels[producto.categoria] || categoriaLabels.otro;

  const handleAdd = () => {
    onAdd(producto);
    onOpenCart();
    addToast(`🌿 ${producto.nombre} añadida al pedido`, 'success');
  };

  const handleConsult = () => {
    const msg = `Hola, me interesa ${producto.nombre} de La Vallita. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/5355406632?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section style={{ background: 'var(--bg-primary)', padding: '4rem 1.5rem', minHeight: '100vh' }}>
      <div className="max-w-[1000px] mx-auto">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors duration-300 hover:opacity-70"
          style={{ color: 'var(--soil-dark)' }}
        >
          <ArrowLeft size={18} />
          Volver al catálogo
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 12px 40px var(--shadow-strong)',
                border: '1px solid var(--border-color)',
              }}
            >
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              ) : (
                <div
                  className="w-full h-[400px] lg:h-[500px] flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--leaf-light), var(--leaf-dark))' }}
                >
                  <span className="text-7xl mb-3 animate-float">🌿</span>
                  <span className="font-serif text-xl font-semibold text-white">{producto.nombre}</span>
                  <span className="text-sm text-white/80 mt-1">Fotografía real próximamente</span>
                </div>
              )}
            </div>

            {/* Stock badge */}
            {producto.stock !== undefined && producto.stock > 0 && (
              <div
                className="absolute -bottom-4 left-6 inline-flex items-center gap-2 text-xs font-bold rounded-full px-4 py-2"
                style={{ background: '#ffebee', color: '#c62828', border: '1px solid rgba(200, 50, 50, 0.15)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#c62828' }} />
                Solo {producto.stock} {producto.stock === 1 ? 'unidad' : 'unidades'} disponible{producto.stock === 1 ? '' : 's'}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ background: catInfo.bg, color: catInfo.color, border: `1px solid ${catInfo.color}20` }}
              >
                <Sprout size={10} />
                {catInfo.label}
              </span>
              {producto.especial && (
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #f5a623, #f57c00)', color: 'white' }}
                >
                  ⭐ Especial
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-1" style={{ color: 'var(--soil-dark)' }}>
              {producto.nombre}
            </h1>
            <span className="font-serif italic text-base mb-6" style={{ color: 'var(--text-muted)' }}>
              {producto.cientifico}
            </span>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 p-4 rounded-xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
              {producto.precio_cup ? (
                <>
                  <span className="font-serif text-3xl font-bold" style={{ color: 'var(--soil)' }}>
                    ${producto.precio_cup} CUP
                  </span>
                  {producto.precio_mlc && (
                    <span className="text-lg" style={{ color: 'var(--text-muted)' }}>
                      · ${producto.precio_mlc.toFixed(2)} MLC
                    </span>
                  )}
                </>
              ) : (
                <span className="font-serif text-3xl font-bold" style={{ color: 'var(--text-muted)' }}>
                  Consultar precio
                </span>
              )}
              <span className="text-sm ml-auto" style={{ color: 'var(--text-muted)' }}>/ {producto.unidad}</span>
            </div>

            {/* Description */}
            <div
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--text-soft)' }}
              dangerouslySetInnerHTML={{ __html: parseMarkdownLite(producto.desc) }}
            />

            {/* Variedades */}
            {producto.variedades && producto.variedades.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: 'var(--soil-dark)' }}>
                  <Package size={14} />
                  Variedades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {producto.variedades.map((v) => (
                    <span
                      key={v}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-soft)', border: '1px solid var(--border-color)' }}
                    >
                      <CheckCircle size={10} style={{ color: 'var(--leaf)' }} />
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {producto.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: 'var(--soil-dark)' }}>
                  <Tag size={14} />
                  Etiquetas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {producto.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              {producto.estado === 'disponible' ? (
                <button
                  onClick={handleAdd}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                  style={{ background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }}
                >
                  <Plus size={18} />
                  Añadir al pedido
                </button>
              ) : (
                <button
                  onClick={handleConsult}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                  style={{ background: 'var(--text-muted)' }}
                >
                  <MessageCircle size={18} />
                  Consultar disponibilidad
                </button>
              )}
              <a
                href={`https://wa.me/5355406632?text=${encodeURIComponent(`Hola, vi ${producto.nombre} en lavallita.pages.dev y quiero más información.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
              >
                <MessageCircle size={18} />
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantaDetail;
