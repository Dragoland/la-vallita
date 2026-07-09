import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reconocimientos = [
  {
    year: '2018',
    title: 'Quinta Corona de Excelencia Nacional',
    desc: 'Primera finca del reino vegetal cubano en alcanzar esta distinción del Grupo de Agricultura Urbana y Suburbana de Cuba.',
    tag: 'Nacional',
  },
  {
    year: '2017',
    title: 'Cuarta Corona de Excelencia Nacional',
    desc: 'Reconocimiento a los resultados integrales en producción y comercialización de especies frutales, ornamentales y exóticas.',
    tag: 'Nacional',
  },
  {
    year: '2014',
    title: 'Finca Agrovida — Primera de Cuba',
    desc: 'Otorgada por la Filial Cubana de Bayer y la ANAP. Manejo seguro de productos y extrema protección del entorno natural.',
    tag: 'Bayer + ANAP',
  },
  {
    year: '2014',
    title: 'Triple Corona de Excelencia Nacional',
    desc: 'Evaluada durante el recorrido 64 del Grupo de Agricultura Urbana, encabezado por el Dr. Adolfo Rodríguez Nodals.',
    tag: 'Villa Clara',
  },
  {
    year: '2012',
    title: 'Premio EXPO-ANIR',
    desc: 'Reconocimiento especial por impacto económico y social en la EXPO-ANIR XX Aniversario de la CTC, EXPOCENTRO Santa Clara.',
    tag: 'Innovación',
  },
  {
    year: '2011',
    title: 'Doble Corona Nacional + Encuentro Internacional',
    desc: 'Primera finca de Villa Clara en la Doble Corona del Programa Sub-urbano. Experiencia educativa defendida en el III Encuentro Internacional de Agroecología (La Habana).',
    tag: 'Agroecología',
  },
];

const Reconocimientos: React.FC = () => {
  const ref = useScrollAnimation({ y: 40, duration: 0.7, stagger: 0.12 });

  return (
    <section
      id="reconocimientos"
      style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Palmarés"
          title="Reconocimientos"
          subtitle="Lo que la tierra y el esfuerzo nos devolvieron"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reconocimientos.map((rec, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: '0 4px 20px var(--shadow)',
                border: '1px solid rgba(139, 105, 20, 0.08)',
              }}
            >
              {/* Top decorative line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-80"
                style={{ background: 'linear-gradient(90deg, var(--wheat), var(--leaf))' }}
              />

              <span
                className="inline-block font-mono text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: 'var(--wheat)' }}
              >
                {rec.year}
              </span>
              <h4
                className="font-serif text-xl font-bold mb-3"
                style={{ color: 'var(--soil-dark)' }}
              >
                {rec.title}
              </h4>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-soft)' }}>
                {rec.desc}
              </p>
              <span
                className="inline-block text-xs font-semibold rounded px-3 py-1"
                style={{
                  background: 'rgba(74, 124, 46, 0.1)',
                  color: 'var(--leaf)',
                  letterSpacing: '0.5px',
                }}
              >
                {rec.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reconocimientos;
