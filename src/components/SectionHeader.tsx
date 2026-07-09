import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle, dark = false }) => {
  const ref = useScrollAnimation({ y: 40, duration: 0.8 });

  return (
    <div ref={ref} className="text-center mb-14">
      <span
        className="inline-block font-mono text-xs font-medium uppercase tracking-[3px] mb-4"
        style={{ color: dark ? 'var(--wheat)' : 'var(--leaf)' }}
      >
        {label}
      </span>
      <h2
        className="font-serif font-extrabold leading-tight tracking-tight mb-3"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          color: dark ? 'var(--white)' : 'var(--soil-dark)',
        }}
      >
        {title}
      </h2>
      <p
        className="text-lg font-light max-w-xl mx-auto"
        style={{ color: dark ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)' }}
      >
        {subtitle}
      </p>
      <div
        className="w-[50px] h-[3px] mx-auto mt-6 rounded-sm"
        style={{
          background: dark
            ? 'linear-gradient(90deg, var(--wheat), var(--terracotta-light))'
            : 'linear-gradient(90deg, var(--wheat), var(--leaf))',
        }}
      />
    </div>
  );
};

export default SectionHeader;
