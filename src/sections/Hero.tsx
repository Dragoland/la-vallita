import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MessageCircle } from 'lucide-react';

const stats = [
  { num: '171', label: 'Especies' },
  { num: '221+', label: 'Variedades' },
  { num: '5\u00AA', label: 'Corona Nacional' },
  { num: '100K+', label: 'Plantas / a\u00F1o' },
];

const LeafSVG: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" style={style}>
    <path d="M50 95 Q10 50 50 5 Q90 50 50 95" />
  </svg>
);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative text-center overflow-hidden"
      style={{ padding: '10rem 1.5rem 8rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(61, 41, 20, 0.88) 0%, rgba(61, 41, 20, 0.78) 40%, rgba(30, 58, 21, 0.83) 100%)',
        }}
      />

      {/* Decorative leaves */}
      <LeafSVG className="absolute opacity-[0.06] pointer-events-none text-white" style={{ top: '10%', right: '5%', width: '180px', transform: 'rotate(15deg)', zIndex: 2 }} />
      <LeafSVG className="absolute opacity-[0.06] pointer-events-none text-white" style={{ bottom: '5%', left: '3%', width: '140px', transform: 'rotate(-20deg) scaleX(-1)', zIndex: 2 }} />
      <LeafSVG className="absolute opacity-[0.04] pointer-events-none text-white" style={{ top: '40%', left: '8%', width: '100px', transform: 'rotate(45deg)', zIndex: 2 }} />

      {/* Content */}
      <div className="relative max-w-[900px] mx-auto" style={{ zIndex: 3 }}>
        {/* Divider */}
        <div
          className="hero-divider mx-auto mb-6 rounded-sm origin-center"
          style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--wheat), var(--wheat-dark))',
          }}
        />

        {/* Badge */}
        <div
          className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-mono text-xs font-semibold uppercase tracking-widest"
          style={{
            background: 'rgba(201, 168, 76, 0.12)',
            color: 'var(--wheat)',
            border: '1px solid var(--wheat)',
          }}
        >
          Quinta Corona de Excelencia Nacional — Finca Agrovida
        </div>

        {/* Title */}
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

        {/* Subtitle */}
        <p
          className="hero-sub text-lg font-light max-w-2xl mx-auto mb-10"
          style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}
        >
          En 3.5 hectáreas de Falcón, Placetas, la familia Chávez cultivó 171 especies y 221 variedades frutales.
          Primera finca del reino vegetal cubano en alcanzar la Quinta Corona de Excelencia Nacional.
          Hoy, con la misma tierra y una nueva apuesta, volvemos a florecer.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat text-center">
              <span
                className="block font-serif font-extrabold leading-none"
                style={{ fontSize: '2.2rem', color: 'var(--wheat)' }}
              >
                {stat.num}
              </span>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-cta flex flex-wrap justify-center gap-4">
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, var(--wheat), var(--wheat-dark))',
              color: 'var(--soil-dark)',
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver plantas disponibles
          </a>
          <a
            href="https://wa.me/5355406632?text=Hola%2C%20vi%20el%20sitio%20de%20La%20Vallita%20y%20me%20interesa%20consultar%20sobre%20plantas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
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
