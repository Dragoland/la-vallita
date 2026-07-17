import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Hero from '@/sections/Hero';
import Catalogo from '@/sections/Catalogo';
import Consejos from '@/sections/Consejos';
import BitCriollo from '@/sections/BitCriollo';
import Contacto from '@/sections/Contacto';
import type { useCarrito } from '@/hooks/useCarrito';

interface Props {
  carrito: ReturnType<typeof useCarrito>;
}

export default function Home({ carrito }: Props) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <Catalogo onAdd={carrito.agregar} onOpenCart={() => carrito.setAbierto(true)} />
      <Consejos />
      <BitCriollo />
      <Contacto />
    </main>
  );
}
