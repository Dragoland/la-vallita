import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Calendar } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ConsejoCard from '@/components/ConsejoCard';
import { consejos } from '@/content/consejos';

const meses = [
    'Todos', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

const ConsejosPage: React.FC = () => {
    const [mesActivo, setMesActivo] = useState<number>(new Date().getMonth() + 1);
    const navigate = useNavigate();

    const filtrados = useMemo(() => {
        return consejos
        .filter((c) => c.mes === mesActivo)
        .sort((a, b) => b.prioridad - a.prioridad);
    }, [mesActivo]);

    return (
        <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
        {/* Header simple */}
        <div className="bg-white border-b" style={{ borderColor: 'rgba(139,105,20,0.1)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-4">
        <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm font-medium hover:text-[var(--leaf)] transition-colors"
        style={{ color: 'var(--text-soft)' }}
        >
        <ArrowLeft size={16} />
        Volver al inicio
        </button>
        </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-12">
        <SectionHeader
        label="Aprende con nosotros"
        title="Consejos de vivero"
        subtitle="Recomendaciones mensuales para el cuidado de tus plantas"
        />

        {/* Filtro de meses */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {meses.slice(1).map((mes, idx) => {
            const num = idx + 1;
            const activo = num === mesActivo;
            return (
                <button
                key={num}
                onClick={() => setMesActivo(num)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activo ? 'text-white' : 'hover:bg-gray-200'}`}
                style={activo ? { background: 'linear-gradient(135deg, var(--leaf), var(--leaf-dark))' } : { background: 'var(--parchment)' }}
                >
                <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {mes}
                </span>
                </button>
            );
        })}
        </div>

        {/* Grid */}
        {filtrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtrados.map((c) => (
                <ConsejoCard key={c.slug} consejo={c} />
            ))}
            </div>
        ) : (
            <div className="text-center py-16">
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Aún no hay consejos para {meses[mesActivo]}. Vuelve pronto.
            </p>
            </div>
        )}
        </div>
        </div>
    );
};

export default ConsejosPage;
