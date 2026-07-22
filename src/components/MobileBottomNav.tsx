import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Home, ShoppingCart, BookOpen, Phone } from 'lucide-react';

const items = [
  { icon: Home, label: 'Inicio', path: '/' },
  { icon: ShoppingCart, label: 'Catálogo', path: '/#catalogo', isHash: true },
  { icon: BookOpen, label: 'Consejos', path: '/consejos' },
  { icon: Phone, label: 'Contacto', path: '/contacto' },
];

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (item: typeof items[0]) => {
    if (item.isHash) {
      if (location.pathname === '/') {
        const el = document.querySelector('#catalogo');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#catalogo');
      }
    } else {
      navigate(item.path);
    }
  };

  const isActive = (item: typeof items[0]) => {
    if (item.path === '/') return location.pathname === '/';
    if (item.isHash) return location.pathname === '/';
    return location.pathname === item.path;
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white border-t flex justify-around items-center h-16"
      style={{
        borderColor: 'rgba(139,105,20,0.1)',
        boxShadow: '0 -4px 20px rgba(44,36,22,0.06)',
      }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const active = isActive(item);
        return (
          <button
            key={item.path}
            onClick={() => handleClick(item)}
            className="relative flex flex-col items-center justify-center gap-0.5 w-full h-full transition-colors duration-200"
          >
            <Icon size={20} style={{ color: active ? 'var(--leaf)' : 'var(--text-muted)' }} />
            <span
              className="text-[10px] font-medium"
              style={{ color: active ? 'var(--leaf)' : 'var(--text-muted)' }}
            >
              {item.label}
            </span>
            {active && (
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                style={{ background: 'var(--leaf)' }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};
