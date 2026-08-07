import React from 'react';
import type { Consejo } from '@/types';
import { parseMarkdownLite } from '@/lib/parseMarkdownLite';
import { Calendar, Star } from 'lucide-react';

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
        className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col card-hover"
        style={{
          background: 'var(--bg-card)',
          boxShadow: '0 4px 20px var(--shadow)',
          borderTop: '4px solid var(--leaf)',
          border: '1px solid var(--border-color)',
        }}
      >
        <span 
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3"
          style={{ background: 'rgba(74, 124, 46, 0.1)', color: 'var(--leaf)' }}
        >
          <Calendar size={12} />
          {meses[consejo.mes - 1]}
        </span>
        <h4 className="font-serif text-lg font-bold mb-2" style={{ color: 'var(--soil-dark)' }}>
          {consejo.titulo}
        </h4>
        <div
          className="text-sm leading-relaxed flex-grow"
          style={{ color: 'var(--text-soft)' }}
          dangerouslySetInnerHTML={{ __html: parseMarkdownLite(consejo.resumen) }}
        />
        <div className="mt-3 flex flex-wrap gap-1">
          {consejo.tags.map((t) => (
            <span 
              key={t} 
              className="text-xs px-2 py-1 rounded-full" 
              style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 card-hover"
      style={{
        background: 'var(--bg-card)',
        boxShadow: '0 4px 20px var(--shadow)',
        borderLeft: '4px solid var(--wheat)',
        border: '1px solid var(--border-color)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span 
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" 
          style={{ background: 'var(--wheat)', color: 'var(--soil-dark)' }}
        >
          <Calendar size={12} />
          {meses[consejo.mes - 1]}
        </span>
        <div className="flex gap-0.5">
          {Array.from({ length: consejo.prioridad }).map((_, i) => (
            <Star key={i} size={14} className="fill-[var(--wheat)] text-[var(--wheat)]" />
          ))}
        </div>
      </div>
      <h4 className="font-serif text-xl font-bold mb-3" style={{ color: 'var(--soil-dark)' }}>
        {consejo.titulo}
      </h4>
      <div
        className="text-sm leading-relaxed mb-4"
        style={{ color: 'var(--text-soft)' }}
        dangerouslySetInnerHTML={{ __html: parseMarkdownLite(consejo.texto) }}
      />
      <div className="flex flex-wrap gap-2">
        {consejo.tags.map((t) => (
          <span 
            key={t} 
            className="text-xs px-3 py-1 rounded-full" 
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ConsejoCard;
