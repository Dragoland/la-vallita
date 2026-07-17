import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Hero from '@/sections/Hero';
import Historia from '@/sections/Historia';
import Legado from '@/sections/Legado';
import Reconocimientos from '@/sections/Reconocimientos';
import Medios from '@/sections/Medios';
import Catalogo from '@/sections/Catalogo';
import Visitanos from '@/sections/Visitanos';
import Consejos from '@/sections/Consejos';
import Contacto from '@/sections/Contacto';
import BitCriollo from '@/sections/BitCriollo';
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
      <Historia />
      <Legado />
      <Reconocimientos />
      <Medios />
      <Catalogo onAdd={carrito.agregar} onOpenCart={() => carrito.setAbierto(true)} />
      <Visitanos />
      <Consejos />
      <Contacto />
      <BitCriollo />
    </main>
  );
}
