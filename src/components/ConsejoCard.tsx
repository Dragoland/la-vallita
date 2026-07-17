import React from 'react';
import type { Consejo } from '@/types';

interface Props {
  consejo: Consejo;
  compacto?: boolean;
}

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const ConsejoCard: React.FC<Props> = ({ consejo, compacto = false }) => {
  if (compacto) {
    return (
      <div
        className="bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col"
        style={{
          boxShadow: '0 4px 20px var(--shadow)',
          borderTop: '4px solid var(--leaf)',
        }}
      >
        <span className="inline-block bg-leaf/10 text-leaf text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3">
          {meses[consejo.mes - 1]}
        </span>
        <h4 className="font-serif text-lg font-bold mb-2" style={{ color: 'var(--soil-dark)' }}>
          {consejo.titulo}
        </h4>
        <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--text-soft)' }}>
          {consejo.resumen}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {consejo.tags.map((t) => (
            <span key={t} className="bg-cream text-earth text-xs px-2 py-1 rounded-full">#{t}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: '0 4px 20px var(--shadow)',
        borderLeft: '4px solid var(--wheat)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: 'var(--wheat)', color: 'var(--soil-dark)' }}>
          {meses[consejo.mes - 1]}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: consejo.prioridad }).map((_, i) => (
            <span key={i} className="text-[var(--wheat)]">★</span>
          ))}
        </div>
      </div>
      <h4 className="font-serif text-xl font-bold mb-3" style={{ color: 'var(--soil-dark)' }}>
        {consejo.titulo}
      </h4>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-soft)' }}>
        {consejo.texto}
      </p>
      <div className="flex flex-wrap gap-2">
        {consejo.tags.map((t) => (
          <span key={t} className="bg-cream text-xs px-3 py-1 rounded-full" style={{ color: 'var(--text-soft)' }}>#{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ConsejoCard;
