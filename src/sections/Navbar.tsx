import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import type { useCarrito } from '@/hooks/useCarrito';

interface Props {
  carrito: ReturnType<typeof useCarrito>;
}

const navLinks = [
  { label: 'Inicio', href: '#inicio', path: '/', isRoute: false },
  { label: 'Catálogo', href: '#catalogo', path: '/#catalogo', isRoute: false },
  { label: 'Consejos', href: '#consejos', path: '/#consejos', isRoute: false },
  { label: 'Historia', href: '/historia', path: '/historia', isRoute: true },
  { label: 'Contacto', href: '/contacto', path: '/contacto', isRoute: true },
];

const Navbar: React.FC<Props> = ({ carrito }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.isRoute) return;
    e.preventDefault();
    if (isHome) {
      const target = document.querySelector(link.href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = link.path;
    }
    setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-[1000] shadow-lg"
      style={{
        background: 'linear-gradient(180deg, var(--soil-dark), var(--soil))',
        boxShadow: '0 2px 20px rgba(61, 41, 20, 0.25)',
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between" style={{ height: '72px' }}>
        <Link to="/" className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 24c-5.514 0-10-4.486-10-10S10.486 6 16 6s10 4.486 10 10-4.486 10-10 10z" fill="var(--wheat)" />
            <path d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="var(--wheat)" opacity="0.6" />
          </svg>
          <span className="font-serif font-bold text-2xl tracking-wide" style={{ color: 'var(--white)' }}>
            La Vallita
          </span>
        </Link>

        <button
          className="lg:hidden border rounded px-3 py-1 text-lg"
          style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--white)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="relative text-sm font-medium uppercase tracking-widest pb-1 transition-colors duration-300 hover:text-[var(--wheat)] group"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--wheat)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link)}
                  className="relative text-sm font-medium uppercase tracking-widest pb-1 transition-colors duration-300 hover:text-[var(--wheat)] group"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--wheat)] transition-all duration-300 group-hover:w-full" />
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => carrito.setAbierto(true)}
          className="hidden lg:flex items-center gap-2 relative text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:text-[var(--wheat)]"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          <ShoppingCart size={18} />
          {carrito.totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-[var(--wheat)] text-[var(--soil-dark)] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {carrito.totalItems}
            </span>
          )}
        </button>
      </nav>

      <div className={`lg:hidden ${mobileOpen ? 'flex' : 'hidden'} flex-col gap-4 px-6 pb-6`} style={{ background: 'var(--soil-dark)' }}>
        {navLinks.map((link) => (
          <div key={link.href}>
            {link.isRoute ? (
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-widest py-2 transition-colors duration-300 hover:text-[var(--wheat)] block"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link)}
                className="text-sm font-medium uppercase tracking-widest py-2 transition-colors duration-300 hover:text-[var(--wheat)] block"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                {link.label}
              </a>
            )}
          </div>
        ))}
        <button
          onClick={() => { carrito.setAbierto(true); setMobileOpen(false); }}
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest py-2"
          style={{ color: 'var(--wheat)' }}
        >
          <ShoppingCart size={16} />
          Carrito ({carrito.totalItems})
        </button>
      </div>
    </header>
  );
};

export default Navbar;
