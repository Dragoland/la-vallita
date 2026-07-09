import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Radio, Newspaper, Tv, Globe, FileText } from 'lucide-react';

const medios = [
  { icon: Radio, label: 'CMEP Radio Placetas' },
  { icon: Newspaper, label: 'Periódico Vanguardia' },
  { icon: Radio, label: 'Radio Reloj' },
  { icon: Tv, label: 'TV Laurel' },
  { icon: Globe, label: 'CubActualidad' },
  { icon: FileText, label: 'Blog "La Tecla sin Teque"' },
  { icon: FileText, label: 'Blog "Campeando en Cuba"' },
  { icon: FileText, label: 'Blog "A mi Entender"' },
];

const Medios: React.FC = () => {
  const ref = useScrollAnimation({ y: 30, duration: 0.6, stagger: 0.08 });

  return (
    <section
      id="medios"
      className="relative"
      style={{ background: 'var(--parchment)', padding: '6rem 1.5rem' }}
    >
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--wheat), transparent)',
          opacity: 0.3,
        }}
      />

      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Prensa"
          title="Medios que nos contaron"
          subtitle="La Vallita trascendió la finca y llegó a los medios de Cuba"
        />

        <div ref={ref} className="flex flex-wrap justify-center gap-4">
          {medios.map((medio, i) => {
            const Icon = medio.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: 'var(--text-soft)',
                  border: '1px solid rgba(139, 105, 20, 0.12)',
                  boxShadow: '0 2px 10px var(--shadow)',
                  cursor: 'default',
                }}
              >
                <Icon size={16} style={{ color: 'var(--wheat)' }} />
                <span>{medio.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Medios;
