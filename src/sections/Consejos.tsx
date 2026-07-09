import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const consejos = [
  {
    num: '01',
    title: 'Cómo plantar un cítrico',
    text: 'Hoyo de 40×40 cm, tierra mezclada con compost, raíces bien extendidas, riego inicial abundante pero sin encharcar. Los primeros 3 meses son clave.',
  },
  {
    num: '02',
    title: 'Riego en tiempos de sequía',
    text: 'Mejor poco y frecuente que mucho y raro. La capa superficial debe mantenerse húmeda para que las raíces jóvenes no se quemen.',
  },
  {
    num: '03',
    title: 'Plagas comunes, soluciones naturales',
    text: 'Jabón potásico para cochinilla, ceniza para hormigas, extracto de ají para pulgones. En La Vallita no usamos químicos agresivos.',
  },
  {
    num: '04',
    title: 'Maceta o tierra directa',
    text: 'Los frutales siempre prefieren tierra directa. Solo usen maceta para etapa de vivero o si el espacio es mínimo. Asegúren drenaje.',
  },
];

const Consejos: React.FC = () => {
  const ref = useScrollAnimation({ y: 40, duration: 0.6, stagger: 0.15, scale: 0.95 });

  return (
    <section
      id="consejos"
      style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Aprende con nosotros"
          title="Consejos del vivero"
          subtitle="La finca también es escuela"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consejos.map((c) => (
            <div
              key={c.num}
              className="bg-white rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: '0 4px 20px var(--shadow)',
                borderTop: '4px solid var(--leaf)',
              }}
            >
              <span
                className="block font-serif font-extrabold leading-none mb-2"
                style={{ fontSize: '2.5rem', color: 'var(--wheat)', opacity: 0.3 }}
              >
                {c.num}
              </span>
              <h4
                className="font-serif text-lg font-bold mb-3"
                style={{ color: 'var(--soil-dark)' }}
              >
                {c.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consejos;
