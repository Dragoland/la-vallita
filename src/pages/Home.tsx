import AnuncioFeria from '@/sections/AnuncioFeria';
import Hero from '@/sections/Hero';
import Catalogo from '@/sections/Catalogo';
import Consejos from '@/sections/Consejos';
import BitCriollo from '@/sections/BitCriollo';
import type { Producto } from '@/types';
import type { useCarrito } from '@/hooks/useCarrito';

interface Props {
  carrito: ReturnType<typeof useCarrito>;
}

export default function Home({ carrito }: Props) {
  return (
    <>
      <AnuncioFeria />
      <Hero />
      <Catalogo onAdd={carrito.agregar} onOpenCart={() => carrito.setAbierto(true)} />
      <Consejos />
      <BitCriollo />
    </>
  );
}
