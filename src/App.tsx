import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Historia from '@/sections/Historia';
import Legado from '@/sections/Legado';
import Reconocimientos from '@/sections/Reconocimientos';
import Medios from '@/sections/Medios';
import Catalogo from '@/sections/Catalogo';
import Visitanos from '@/sections/Visitanos';
import Consejos from '@/sections/Consejos';
import Contacto from '@/sections/Contacto';
import ArregloLinuxero from '@/sections/ArregloLinuxero';
import Footer from '@/sections/Footer';

export default function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Legado />
        <Reconocimientos />
        <Medios />
        <Catalogo />
        <Visitanos />
        <Consejos />
        <Contacto />
        <ArregloLinuxero />
      </main>
      <Footer />
    </div>
  );
}
