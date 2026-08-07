import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const SickleIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2C14.5 2 9 7 9 12.5C9 16 11 19 14.5 19C18 19 20 16 20 12.5" />
    <path d="M9 12.5C9 12.5 5 12 2 15" />
    <path d="M14.5 19L14.5 22" />
  </svg>
);

export const ThemeToggle: React.FC = () => {
  const { theme, cycleTheme } = useTheme();

  const config = {
    agricultural: { icon: <SickleIcon />, label: 'Agrícola', color: '#c9a84c' },
    dark: { icon: <Moon size={18} />, label: 'Oscuro', color: '#a0a0a0' },
    light: { icon: <Sun size={18} />, label: 'Claro', color: '#f5a623' },
  };

  const current = config[theme];

  return (
    <button
      onClick={cycleTheme}
      className="relative flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        color: current.color,
        backdropFilter: 'blur(8px)',
      }}
      title={`Tema actual: ${current.label}`}
      aria-label={`Cambiar tema. Actual: ${current.label}`}
    >
      {current.icon}
      <span className="hidden md:inline">{current.label}</span>
    </button>
  );
};
