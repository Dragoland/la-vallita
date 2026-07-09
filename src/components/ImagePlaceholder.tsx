import React from 'react';
import { Leaf } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  height?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  sublabel = 'Reemplazar con imagen real',
  height = '220px',
  className = '',
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center overflow-hidden ${className}`}
      style={{
        height,
        background: 'linear-gradient(135deg, var(--leaf-light), var(--leaf-dark))',
      }}
    >
      <Leaf className="w-16 h-16 mb-3 text-white opacity-40" />
      <div className="font-serif text-lg font-semibold text-white mb-1">{label}</div>
      <div className="text-sm text-white opacity-80">{sublabel}</div>
    </div>
  );
};

export default ImagePlaceholder;
