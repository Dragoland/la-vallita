import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="text-center"
      style={{
        background: 'var(--soil-dark)',
        color: 'rgba(255,255,255,0.5)',
        padding: '3rem 1.5rem',
      }}
    >
      <p className="text-sm mb-2">
        <strong
          className="font-serif"
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          La Vallita
        </strong>{' '}
        — Asentamiento La Vallita, Consejo Popular Falcón, Placetas, Villa Clara, Cuba
        <br />
        Familia Chávez · Honrando el legado de Emilio Chávez Estévez
      </p>
      <p className="text-xs mt-4">
        Sitio creado con cuidado por{' '}
        <a
          href="https://wa.me/5356418463"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--wheat)' }}
        >
          Dragoland
        </a>{' '}
        ·{' '}
        <a
          href="https://t.me/diario_del_informatico"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--wheat)' }}
        >
          Canal de Telegram
        </a>
      </p>
    </footer>
  );
};

export default Footer;
