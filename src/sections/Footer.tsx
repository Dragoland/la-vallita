import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative text-center overflow-hidden" style={{ background: 'var(--soil-dark)', color: 'rgba(255,255,255,0.5)', padding: '3rem 1.5rem' }}>
      {/* Top decorative border */}
      <div 
        className="absolute top-0 left-0 right-0 h-px" 
        style={{ background: 'linear-gradient(90deg, transparent, var(--wheat), transparent)', opacity: 0.4 }} 
      />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 bg-texture-grain pointer-events-none opacity-30" />

      <div className="relative">
        <p className="text-sm mb-2">
          <strong className="font-serif" style={{ color: 'rgba(255,255,255,0.8)' }}>La Vallita</strong>
          {' '}— Asentamiento La Vallita, Consejo Popular Falcón, Placetas, Villa Clara, Cuba
          <br />
          Familia Chávez · Honrando el legado de Emilio Chávez Estévez
        </p>

        <div className="flex justify-center gap-4 mt-4 text-xs">
          <a 
            href="https://wa.me/5356418463" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors duration-300 hover:text-[var(--wheat)]"
            style={{ color: 'var(--wheat)' }}
          >
            Dragoland
          </a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a 
            href="https://t.me/diario_del_informatico" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors duration-300 hover:text-[var(--wheat)]"
            style={{ color: 'var(--wheat)' }}
          >
            Canal de Telegram
          </a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a 
            href="https://bitcriollo.pages.dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors duration-300 hover:text-[var(--wheat)]"
            style={{ color: 'var(--wheat)' }}
          >
            BitCriollo
          </a>
        </div>

        <p className="text-[10px] mt-4 opacity-40">
          Hecho con tierra, código y propósito · Falcón, Cuba
        </p>
      </div>
    </footer>
  );
};

export default Footer;
