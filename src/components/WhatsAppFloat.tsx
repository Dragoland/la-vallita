import React from 'react';
import { useNavigate } from 'react-router';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/contacto')}
      className="fixed right-5 z-[1000] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      style={{
        bottom: '5.5rem',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
      }}
      aria-label="Ir a contacto"
      title="Contacto"
    >
      <MessageCircle size={24} />
      <span
        className="absolute inset-0 rounded-full"
        style={{
          animation: 'pulseWhatsApp 2s infinite',
          boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)',
        }}
      />
    </button>
  );
};
