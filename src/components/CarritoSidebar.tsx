import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle, Package } from 'lucide-react';
import type { Producto } from '@/types';

interface CarritoHook {
  items: Array<Producto & { cantidad: number }>;
  abierto: boolean;
  setAbierto: (v: boolean) => void;
  agregar: (p: Producto) => void;
  quitar: (slug: string) => void;
  eliminar: (slug: string) => void;
  vaciar: () => void;
  totalItems: number;
  totalCup: number;
  totalMlc: number;
  generarMensajeWhatsApp: () => string;
}

interface Props {
  carrito: CarritoHook;
}

const CarritoSidebar: React.FC<Props> = ({ carrito }) => {
  const { items, abierto, setAbierto, agregar, quitar, eliminar, vaciar, totalItems, totalCup, totalMlc, generarMensajeWhatsApp } = carrito;

  const handlePedido = () => {
    const msg = generarMensajeWhatsApp();
    if (!msg) return;
    const url = `https://wa.me/5355406632?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[998] transition-opacity duration-300 ${abierto ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
        onClick={() => setAbierto(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[999] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${abierto ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ 
          background: 'var(--bg-card)', 
          borderLeft: '1px solid var(--border-color)',
        }}
      >
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-3">
            <ShoppingCart size={20} style={{ color: 'var(--leaf)' }} />
            <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--soil-dark)' }}>Tu pedido</h2>
            <span 
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(74, 124, 46, 0.1)', color: 'var(--leaf)' }}
            >
              {totalItems} items
            </span>
          </div>
          <button 
            onClick={() => setAbierto(false)} 
            className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-100"
            style={{ color: 'var(--text-muted)' }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Package size={48} className="mx-auto mb-4" style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
              <p style={{ color: 'var(--text-muted)' }}>El carrito está vacío</p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-soft)', opacity: 0.7 }}>Explora el catálogo y añade plantas</p>
            </div>
          ) : (
            items.map((item) => (
              <div 
                key={item.slug} 
                className="flex gap-4 p-4 rounded-xl transition-all duration-200 hover:shadow-md"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-serif font-bold text-sm" style={{ color: 'var(--soil-dark)' }}>{item.nombre}</h4>
                    <button 
                      onClick={() => eliminar(item.slug)} 
                      className="p-1 rounded transition-colors duration-200 hover:bg-red-50 hover:text-red-500"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.unidad} · {item.estado}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div 
                      className="flex items-center gap-2 rounded-lg border px-2 py-1" 
                      style={{ borderColor: 'var(--border-color)', background: 'var(--bg-card)' }}
                    >
                      <button 
                        onClick={() => quitar(item.slug)} 
                        className="p-1 rounded transition-colors duration-200 hover:text-red-500"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-semibold w-4 text-center" style={{ color: 'var(--text-primary)' }}>{item.cantidad}</span>
                      <button 
                        onClick={() => agregar(item)} 
                        className="p-1 rounded transition-colors duration-200 hover:text-green-600"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right">
                      {item.precio_cup && <div className="text-sm font-bold" style={{ color: 'var(--leaf)' }}>${(item.precio_cup * item.cantidad)} CUP</div>}
                      {item.precio_mlc && <div className="text-xs" style={{ color: 'var(--text-muted)' }}>${(item.precio_mlc * item.cantidad).toFixed(2)} MLC</div>}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t space-y-4" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span style={{ color: 'var(--text-muted)' }}>Subtotal CUP</span>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>${totalCup}</span>
              </div>
              {totalMlc > 0 && (
                <div className="flex justify-between text-sm">
                  <span style={{ color: 'var(--text-muted)' }}>Subtotal MLC</span>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>${totalMlc.toFixed(2)}</span>
                </div>
              )}
              <div 
                className="flex justify-between font-bold text-lg pt-2 border-t" 
                style={{ borderColor: 'var(--border-color)', color: 'var(--soil-dark)' }}
              >
                <span>Total plantas</span>
                <span>{totalItems}</span>
              </div>
            </div>
            <button
              onClick={handlePedido}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={16} />
              Generar pedido por WhatsApp
            </button>
            <button 
              onClick={vaciar} 
              className="w-full text-xs transition-colors duration-200 py-2 rounded hover:text-red-500"
              style={{ color: 'var(--text-muted)' }}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CarritoSidebar;
