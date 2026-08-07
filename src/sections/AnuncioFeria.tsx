import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Calendar, MapPin, Clock, X, Store } from 'lucide-react';

const AnuncioFeria: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('anuncioFeriaCerrado') === 'true') return;

        const ahora = new Date();
        const diaSemana = ahora.getDay();
        const hora = ahora.getHours();

        const esDomingo = diaSemana === 0;
        const enHorarioFeria = hora >= 6 && hora < 13;

        if (esDomingo) {
            if (enHorarioFeria) {
                setMensaje('¡Ahora mismo estamos en la feria de Placetas!');
            } else {
                setMensaje('Hoy estuvimos en la feria de Placetas. ¡Gracias por visitarnos!');
            }
            setVisible(true);
        }
    }, []);

    useEffect(() => {
        if (!visible || !sectionRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo(
            sectionRef.current,
            { opacity: 0, y: -30, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7 }
        );

        return () => { tl.kill(); };
    }, [visible]);

    const cerrar = () => {
        sessionStorage.setItem('anuncioFeriaCerrado', 'true');
        if (sectionRef.current) {
            gsap.to(sectionRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: 'power2.in',
                onComplete: () => setVisible(false),
            });
        } else {
            setVisible(false);
        }
    };

    if (!visible) return null;

    return (
        <div
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{
            background: 'linear-gradient(135deg, var(--wheat) 0%, var(--terracotta) 100%)',
            padding: '1.25rem 1.5rem',
        }}
        >
        <div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: '200px',
            height: '200px',
            border: '2px solid rgba(255,255,255,0.08)',
            top: '-80px',
            right: '-40px',
        }}
        />
        <div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: '120px',
            height: '120px',
            border: '2px solid rgba(255,255,255,0.06)',
            bottom: '-40px',
            left: '10%',
        }}
        />

        <div className="max-w-[1200px] mx-auto relative flex items-start gap-4 md:items-center md:justify-between flex-col md:flex-row">
        <div className="flex items-start gap-4">
        <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
        >
        <Store size={24} color="#fff" />
        </div>

        <div>
        <h3
        className="font-serif text-lg md:text-xl font-bold leading-snug"
        style={{ color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.15)' }}
        >
        {mensaje}
        </h3>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-2">
        <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.92)' }}>
        <Calendar size={14} />
        Todos los domingos
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.92)' }}>
        <Clock size={14} />
        7:00 am – 12:00 pm
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.92)' }}>
        <MapPin size={14} />
        Feria de Placetas, cerca de la Academia de Ajedrez
        </span>
        </div>
        <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
        Llevamos contigo plantas disponibles del catálogo: frutales, hortalizas, ornamentales y más.
        ¡Pasa a saludar y llévate tu favorita!
        </p>
        </div>
        </div>

        <button
        onClick={cerrar}
        aria-label="Cerrar anuncio"
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
        >
        <X size={18} />
        </button>
        </div>
        </div>
    );
};

export default AnuncioFeria;
