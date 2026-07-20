import { Routes, Route } from 'react-router';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useCarrito } from '@/hooks/useCarrito';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import CarritoSidebar from '@/components/CarritoSidebar';
import Home from '@/pages/Home';
import ConsejosPage from '@/pages/ConsejosPage';
import HistoriaPage from '@/pages/HistoriaPage';
import ContactoPage from '@/pages/ContactoPage';
import PlantaDetail from '@/pages/PlantaDetail';
import Especiales from '@/sections/Especiales';

export default function App() {
  useSmoothScroll();
  const carrito = useCarrito();

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Navbar carrito={carrito} />
      <CarritoSidebar carrito={carrito} />
      <Routes>
        <Route path="/" element={<Home carrito={carrito} />} />
        <Route path="/consejos" element={<ConsejosPage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/planta/:slug" element={<PlantaDetail onAdd={carrito.agregar}
        onOpenCart={() => carrito.setAbierto(true)} />} />
        <Route path="/especiales" element={<Especiales onAdd={onAdd} onOpenCart={onOpenCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}
