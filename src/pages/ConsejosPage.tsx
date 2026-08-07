import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Calendar, Filter } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ConsejoCard from '@/components/ConsejoCard';
import { useConsejos } from '@/hooks/useConsejos';

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const ConsejosPage: React.FC = () => {
  const [mesActivo, setMesActivo] = useState<number | null>(null);
  const { consejos, loading } = useConsejos();
  const navigate = useNavigate();

  const filtrados = mesActivo
    ? consejos.filter((c) => c.mes === mesActivo).sort((a, b) => b.prioridad - a.prioridad)
    : consejos.sort((a, b) => b.prioridad - a.prioridad);

  return (
    <section style={{ background: 'var(--bg-primary)', padding: '6rem 1.5rem', minHeight: '100vh' }}>
      <div className="max-w-[1200px] mx-auto">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors duration-300 hover:opacity-70"
          style={{ color: 'var(--soil-dark)' }}
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </button>

        <SectionHeader
          label="Aprende con nosotros"
          title="Consejos de vivero"
          subtitle="Conocimiento agrícola organizado por meses del año"
        />

        {/* Month filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setMesActivo(null)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${mesActivo === null ? 'text-white shadow-md' : ''}`}
            style={mesActivo === null ? { background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' } : { background: 'var(--bg-secondary)', color: 'var(--text-soft)' }}
          >
            <Filter size={14} />
            Todos
          </button>
          {meses.map((mes, i) => (
            <button
              key={mes}
              onClick={() => setMesActivo(i + 1)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${mesActivo === i + 1 ? 'text-white shadow-md' : ''}`}
              style={mesActivo === i + 1 ? { background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' } : { background: 'var(--bg-secondary)', color: 'var(--text-soft)' }}
            >
              <Calendar size={14} />
              {mes}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[var(--leaf)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p style={{ color: 'var(--text-muted)' }}>Cargando consejos...</p>
          </div>
        ) : filtrados.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg font-serif mb-2" style={{ color: 'var(--soil-dark)' }}>
              No hay consejos para este mes
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Prueba con otro mes o vuelve más tarde.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtrados.map((c) => (
              <ConsejoCard key={c.slug} consejo={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsejosPage;
