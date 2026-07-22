import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';
import { subscribe, type Toast } from '@/lib/toastStore';

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const colors: Record<Toast['type'], { bg: string; border: string }> = {
  success: { bg: '#4a7c2e', border: '#6b9e3e' },
  error: { bg: '#b8653c', border: '#d4835a' },
  info: { bg: '#3d2914', border: '#6b4423' },
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    return subscribe(setToasts);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[2000] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => {
        const Icon = icons[toast.type];
        const color = colors[toast.type];
        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-xl text-white text-sm font-medium shadow-lg"
            style={{
              background: color.bg,
              border: `1px solid ${color.border}`,
              boxShadow: '0 10px 30px rgba(44,36,22,0.2)',
              minWidth: '280px',
              maxWidth: '90vw',
              animation: 'toastSlideUp 0.3s ease-out',
            }}
          >
            <Icon size={18} />
            <span className="flex-1">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};
