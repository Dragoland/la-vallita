import React from 'react';
import { useNavigate } from 'react-router';
import SectionHeader from '@/components/SectionHeader';
import ConsejoCard from '@/components/ConsejoCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useConsejos } from '@/hooks/useConsejos';
import { ArrowRight } from 'lucide-react';

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const Consejos: React.FC = () => {
  const ref = useScrollAnimation({ y: 40, duration: 0.6, stagger: 0.15, scale: 0.95 });
  const navigate = useNavigate();
  const { consejos, loading } = useConsejos();
  const mesActual = new Date().getMonth() + 1;

  const consejosMes = consejos
    .filter((c) => c.mes === mesActual)
    .sort((a, b) => b.prioridad - a.prioridad)
    .slice(0, 4);

  return (
    <section id="consejos" style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Aprende con nosotros"
          title={`Consejos de vivero — ${meses[mesActual - 1]} ${new Date().getFullYear()}`}
          subtitle="La finca también es escuela"
        />

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-[var(--leaf)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p style={{ color: 'var(--text-muted)' }}>Cargando consejos...</p>
          </div>
        ) : (
          <>
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consejosMes.map((c) => (
                <ConsejoCard key={c.slug} consejo={c} compacto />
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => navigate('/consejos')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 text-white"
                style={{ background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' }}
              >
                Ver más consejos para {meses[mesActual - 1].toLowerCase()}
                <ArrowRight size={16} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Consejos;
