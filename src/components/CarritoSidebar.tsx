import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react';
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
        className={`fixed inset-0 bg-black/30 z-[998] transition-opacity duration-300 ${abierto ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setAbierto(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[999] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${abierto ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ borderLeft: '1px solid rgba(139,105,20,0.1)' }}
      >
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'rgba(139,105,20,0.1)' }}>
          <div className="flex items-center gap-3">
            <ShoppingCart size={20} style={{ color: 'var(--leaf)' }} />
            <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--soil-dark)' }}>Tu pedido</h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-green-100 text-green-800">{totalItems} items</span>
          </div>
          <button onClick={() => setAbierto(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">El carrito está vacío</p>
              <p className="text-sm text-gray-400 mt-1">Explora el catálogo y añade plantas</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.slug} className="flex gap-4 p-4 rounded-xl bg-cream/50 border border-transparent hover:border-[var(--wheat)]/30 transition-colors">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-serif font-bold text-sm" style={{ color: 'var(--soil-dark)' }}>{item.nombre}</h4>
                    <button onClick={() => eliminar(item.slug)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.unidad} · {item.estado}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 bg-white rounded-lg border px-2 py-1" style={{ borderColor: 'rgba(139,105,20,0.15)' }}>
                      <button onClick={() => quitar(item.slug)} className="p-1 hover:text-red-500 transition-colors"><Minus size={14} /></button>
                      <span className="text-sm font-semibold w-4 text-center">{item.cantidad}</span>
                      <button onClick={() => agregar(item)} className="p-1 hover:text-green-600 transition-colors"><Plus size={14} /></button>
                    </div>
                    <div className="text-right">
                      {item.precio_cup && <div className="text-sm font-bold" style={{ color: 'var(--leaf)' }}>${(item.precio_cup * item.cantidad)} CUP</div>}
                      {item.precio_mlc && <div className="text-xs text-gray-500">${(item.precio_mlc * item.cantidad).toFixed(2)} MLC</div>}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t space-y-4" style={{ borderColor: 'rgba(139,105,20,0.1)', background: 'var(--cream)' }}>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal CUP</span>
                <span className="font-semibold">${totalCup}</span>
              </div>
              {totalMlc > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal MLC</span>
                  <span className="font-semibold">${totalMlc.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg pt-2 border-t" style={{ borderColor: 'rgba(139,105,20,0.15)', color: 'var(--soil-dark)' }}>
                <span>Total plantas</span>
                <span>{totalItems}</span>
              </div>
            </div>
            <button
              onClick={handlePedido}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={16} />
              Generar pedido por WhatsApp
            </button>
            <button onClick={vaciar} className="w-full text-xs text-gray-500 hover:text-red-500 transition-colors py-2">
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CarritoSidebar;
