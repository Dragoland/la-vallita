import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

const ArregloLinuxero: React.FC = () => {
  const ref = useScrollAnimation({ y: 30, duration: 0.8 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden text-center"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        padding: '5rem 1.5rem',
        color: 'var(--white)',
      }}
    >
      {/* Decorative circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          border: '2px solid rgba(0, 212, 170, 0.05)',
          top: '-100px',
          left: '-100px',
        }}
      />

      <div className="relative max-w-[600px] mx-auto">
        <h2
          className="font-serif text-3xl font-bold mb-4"
          style={{ color: 'var(--white)' }}
        >
          ¿Tu PC o celular necesita ayuda?
        </h2>
        <p
          className="text-base font-light leading-relaxed mb-8"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          Mientras cuidas tu jardín, también cuidamos tu tecnología.{" "}
          <strong>ArregloLinuxero</strong> es el servicio informático de confianza que ofrece{" "}
          <strong>Dragoland</strong>: limpieza de virus, formateo, Linux, recuperación de datos,
          diseño gráfico y más. Atención en Falcón, sin precios de ciudad.
        </p>
        <a
          href="https://wa.me/5356418463?text=Hola%20ArregloLinuxero%2C%20vi%20La%20Vallita%20y%20necesito%20ayuda%20con%20mi%20equipo."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #00d4aa, #00b894)',
            color: '#1a1a2e',
            boxShadow: '0 4px 15px rgba(0, 212, 170, 0.2)',
          }}
        >
          <ExternalLink size={16} />
          Contactar a ArregloLinuxero
        </a>
      </div>
    </section>
  );
};

export default ArregloLinuxero;
