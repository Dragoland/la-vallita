import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import Historia from '@/sections/Historia';
import Legado from '@/sections/Legado';
import Reconocimientos from '@/sections/Reconocimientos';
import Medios from '@/sections/Medios';

const HistoriaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <div className="bg-white border-b sticky top-[72px] z-50" style={{ borderColor: 'rgba(139,105,20,0.1)' }}>
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

      <Historia />
      <Legado />
      <Reconocimientos />
      <Medios />
    </div>
  );
};

export default HistoriaPage;
