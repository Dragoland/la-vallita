import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

const stats = [
  { num: '171', label: 'Especies' },
  { num: '221+', label: 'Variedades' },
  { num: '5ª', label: 'Corona Nacional' },
  { num: '100K+', label: 'Plantas / año' },
];

const LeafSVG: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" style={style}>
    <path d="M50 95 Q10 50 50 5 Q90 50 50 95" />
  </svg>
);

const FloatingLeaf: React.FC<{ 
  size: number; 
  top: string; 
  left?: string; 
  right?: string; 
  delay: number;
  reverse?: boolean;
}> = ({ size, top, left, right, delay, reverse }) => (
  <LeafSVG 
    className={`absolute pointer-events-none text-white ${reverse ? 'animate-float-reverse' : 'animate-float'}`}
    style={{ 
      top, 
      left, 
      right, 
      width: size, 
      opacity: 0.06,
      animationDelay: `${delay}s`,
      zIndex: 2 
    }} 
  />
);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(
      section.querySelector('.hero-divider'),
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.6 }
    )
      .fromTo(
        section.querySelector('.hero-badge'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.2
      )
      .fromTo(
        section.querySelector('.hero-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.4
      )
      .fromTo(
        section.querySelector('.hero-sub'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.6
      )
      .fromTo(
        section.querySelectorAll('.hero-stat'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        0.8
      )
      .fromTo(
        section.querySelector('.hero-cta'),
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        1.2
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative text-center overflow-hidden"
      style={{ padding: '10rem 1.5rem 8rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(61, 41, 20, 0.88) 0%, rgba(61, 41, 20, 0.78) 40%, rgba(30, 58, 21, 0.83) 100%)',
        }}
      />

      {/* Decorative pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-texture-dots" 
        style={{ zIndex: 1 }} 
      />

      {/* Floating leaves with animation */}
      <FloatingLeaf size={180} top="10%" right="5%" delay={0} />
      <FloatingLeaf size={140} top="60%" left="3%" delay={1.5} reverse />
      <FloatingLeaf size={100} top="40%" left="8%" delay={0.8} />
      <FloatingLeaf size={80} top="20%" left="15%" delay={2} reverse />
      <FloatingLeaf size={120} top="70%" right="10%" delay={1} />
      <FloatingLeaf size={60} top="15%" left="40%" delay={2.5} reverse />

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="var(--bg-primary)"
            className="transition-colors duration-500"
          />
        </svg>
      </div>

      <div className="relative max-w-[900px] mx-auto" style={{ zIndex: 3 }}>
        <div
          className="hero-divider mx-auto mb-6 rounded-sm origin-center"
          style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--wheat), var(--wheat-dark))',
          }}
        />

        <div
          className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-mono text-xs font-semibold uppercase tracking-widest"
          style={{
            background: 'rgba(201, 168, 76, 0.15)',
            color: 'var(--wheat)',
            border: '1px solid var(--wheat)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--wheat)] animate-pulse" />
          Quinta Corona de Excelencia Nacional — Finca Agrovida
        </div>

        <h1
          className="hero-title font-serif font-extrabold tracking-tight mb-6"
          style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
            lineHeight: 1.05,
            color: 'var(--white)',
          }}
        >
          Recuperando la tierra{' '}
          <em style={{ color: 'var(--wheat)', fontStyle: 'italic', fontWeight: 600 }}>
            que nos vio nacer
          </em>
        </h1>

        <p
          className="hero-sub text-lg font-light max-w-2xl mx-auto mb-10"
          style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}
        >
          En 3.5 hectáreas de Falcón, Placetas, la familia Chávez cultivó 171 especies y 221 variedades frutales.
          Primera finca del reino vegetal cubano en alcanzar la Quinta Corona de Excelencia Nacional.
          Hoy, con la misma tierra y una nueva apuesta, volvemos a florecer.
        </p>

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat text-center group cursor-default">
              <span className="block font-serif font-extrabold leading-none transition-transform duration-300 group-hover:scale-110" style={{ fontSize: '2.2rem', color: 'var(--wheat)' }}>
                {stat.num}
              </span>
              <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="hero-cta flex flex-wrap justify-center gap-4">
          <Link
            to="/#catalogo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, var(--wheat), var(--wheat-dark))',
              color: 'var(--soil-dark)',
              boxShadow: '0 4px 15px rgba(201, 168, 76, 0.3)',
            }}
          >
            Ver plantas disponibles
          </Link>
          <a
            href="https://wa.me/5355406632?text=Hola%2C%20vi%20el%20sitio%20de%20La%20Vallita%20y%20me%20interesa%20consultar%20sobre%20plantas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: 'var(--white)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <MessageCircle size={16} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
