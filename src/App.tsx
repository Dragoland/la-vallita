import { Routes, Route } from 'react-router';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useCarrito } from '@/hooks/useCarrito';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import CarritoSidebar from '@/components/CarritoSidebar';
import Home from '@/pages/Home';
import ConsejosPage from '@/pages/ConsejosPage';

export default function App() {
  useSmoothScroll();
  const carrito = useCarrito();

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
    <Navbar carrito={carrito} />
    <CarritoSidebar carrito={carrito} />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/consejos" element={<ConsejosPage />} />
    </Routes>
    <Footer />
    </div>
  );
}
