import React, { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [
  {
    title: 'Fundación y consolidación',
    text: 'Emilio Chávez Estévez establece La Vallita como modelo agroecológico en Falcón. La finca comienza a acumular especies frutales, ornamentales y exóticas bajo manejo agroecológico.',
  },
  {
    title: '2011 — Doble Corona Nacional',
    text: 'Primera finca de Villa Clara en obtener la Doble Corona de Excelencia Nacional del Programa Sub-urbano. Se lanza el programa Guardianes de la naturaleza con estudiantes de Falcón.',
  },
  {
    title: '2012 — Premio EXPO-ANIR',
    text: 'Reconocimiento especial por impacto económico y social en la EXPO-ANIR XX Aniversario de la CTC, en EXPOCENTRO Santa Clara.',
  },
  {
    title: '2014 — Triple Corona + Finca Agrovida',
    text: 'Alcanza la Triple Corona de Excelencia Nacional. Bayer y la ANAP la reconocen como la primera Finca Agrovida de Cuba por manejo seguro y protección ambiental.',
  },
  {
    title: '2017-2018 — Quinta Corona Nacional',
    text: 'La Vallita se convierte en la primera finca del reino vegetal cubano en alcanzar la Quinta Corona de Excelencia Nacional. Más de 100,000 plantas de frutales producidas anualmente y 1,000+ quintales cosechados entre 2013 y 2017.',
  },
  {
    title: 'Hoy — Recuperación familiar',
    text: 'Tras una década difícil por falta de combustible y recursos, la familia Chávez retoma el legado. La tecnología es ahora aliada para reconstruir lo que fue.',
  },
];

const Historia: React.FC = () => {
  const sectionRef = useScrollAnimation({ y: 50, duration: 0.8 });
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.timeline-item');
    gsap.fromTo(
      items,
      { opacity: 0, x: -20 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none none' },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((t) => { if (t.trigger === el) t.kill(); });
    };
  }, []);

  return (
    <section id="historia" ref={sectionRef} className="relative" style={{ background: 'var(--parchment)', padding: '6rem 1.5rem' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--wheat), transparent)', opacity: 0.3 }} />
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="Nuestra Raíz" title="Historia" subtitle="De la visión de Emilio al legado que hoy retomamos" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="font-serif font-bold text-2xl lg:text-3xl mb-6" style={{ color: 'var(--soil)', lineHeight: 1.3 }}>
              Un paraíso de frutas en el corazón de Villa Clara
            </h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-soft)', textAlign: 'justify' }}>
              La finca <strong>La Vallita</strong> se alza en el asentamiento homónimo del consejo popular{' '}
              <strong>Falcón</strong>, a unos tres kilómetros del poblado, en el municipio de{' '}
              <strong>Placetas</strong>, Villa Clara. Enclavada en áreas de la{' '}
              <strong>Cooperativa de Créditos y Servicios Fortalecida Antonio Duménigo</strong>, estas 3.5
              hectáreas fueron transformadas por el trabajo incansable de{' '}
              <strong>Emilio Chávez Estévez</strong> en un modelo de producción sostenible reconocido a nivel
              nacional e internacional.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-soft)', textAlign: 'justify' }}>
              Emilio no es solo un productor: es <strong>investigador, extensionista y cosechero</strong>,
              especialista en la obtención de simientes de frutales mediante tecnologías de injerto. Con el
              apoyo del <strong>Dr. Adolfo Rodríguez Nodals</strong>, impulsó ocho tareas de desarrollo en la
              finca, convirtiéndola en un <strong>centro de investigación agroecológica</strong> donde la
              ciencia y la práctica campesina caminan de la mano.
            </p>
            <div ref={timelineRef} className="relative pl-8 my-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded" style={{ background: 'linear-gradient(180deg, var(--wheat), var(--leaf))' }} />
              {timelineItems.map((item, i) => (
                <div key={i} className="timeline-item relative mb-8 pl-6">
                  <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full" style={{ background: 'var(--wheat)', border: '3px solid var(--parchment)', boxShadow: '0 0 0 2px var(--wheat)' }} />
                  <strong className="block font-serif text-lg mb-1" style={{ color: 'var(--soil-dark)' }}>{item.title}</strong>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-r-xl p-6 lg:p-8 my-8" style={{ background: 'var(--white)', borderLeft: '4px solid var(--wheat)', boxShadow: '0 4px 20px var(--shadow)' }}>
              <div className="absolute -top-3 left-6 w-12 h-12 rounded-full" style={{ background: 'var(--wheat)', opacity: 0.12 }} />
              <strong className="block font-serif text-xl font-bold mb-3" style={{ color: 'var(--soil-dark)' }}>Emilio Chávez Estévez</strong>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                Fundador y alma de La Vallita. Productor agroecológico, investigador, extensionista y uno
                de los mejores injertadores de Cuba. Su trabajo fue registrado en el libro{' '}
                <em>Especies de frutales</em> del Dr. Adolfo Rodríguez Nodals. Defendió la experiencia
                educativa de La Vallita en el Tercer Encuentro Internacional de Agroecología (La Habana,
                2011).
              </p>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-soft)', textAlign: 'justify' }}>
              La última década golpeó fuerte a la finca: falta de combustible, recursos limitados y una
              migración forzada de nuestra diversidad hacia otras prioridades. Pero aquí estamos. Con la
              misma tierra, la misma familia y una nueva apuesta:{' '}
              <strong>la tecnología como aliada para reconstruir lo que fue</strong>. Este sitio es el primer
              paso. No vendemos fantasías; vendemos plantas reales, trabajo honesto y la promesa de que La
              Vallita volverá a florecer.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 12px 40px var(--shadow-strong)' }}>
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ border: '1px solid var(--wheat)', opacity: 0.3, zIndex: 2 }} />
              <ImagePlaceholder label="Fotografía de la finca" sublabel="Reemplazar con imagen real — Vista panorámica de La Vallita, Falcón" height="500px" />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 30px var(--shadow)' }}>
              <ImagePlaceholder label="Detalle de la finca" sublabel="Reemplazar con imagen real — Injerto o plantas en vivero" height="280px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
