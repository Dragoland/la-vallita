import React, { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: '140+', label: 'Especies documentadas' },
  { num: '237', label: 'Variedades en producción' },
  { num: '51K', label: 'Plantas "Lucía" vendidas' },
  { num: '1,000+', label: 'Quintales 2013-2017' },
  { num: '10K+', label: 'Moringas cultivadas' },
  { num: '66%', label: 'Jóvenes hacia la agricultura' },
];

const Legado: React.FC = () => {
  const sectionRef = useScrollAnimation({ y: 50, duration: 0.8 });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.legado-stat');
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none none' },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((t) => { if (t.trigger === el) t.kill(); });
    };
  }, []);

  return (
    <section id="legado" ref={sectionRef} className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--soil-dark), var(--soil))', padding: '6rem 1.5rem', color: 'var(--white)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--wheat), transparent)', opacity: 0.4 }} />
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="El hombre y la tierra" title="El legado de Emilio" subtitle="Más que un productor, un investigador que escribió su nombre en la tierra" dark />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'justify' }}>
              Emilio Chávez Estévez llegó a Falcón con una convicción:{' '}
              <strong style={{ color: 'var(--wheat)' }}>la tierra bien cuidada devuelve todo lo que se le da</strong>.
              No se conformó con sembrar lo tradicional. Quiso demostrar que en un pedazo de 3.5 hectáreas de
              Villa Clara podían convivir la uva tailandesa, la pera europea, el melocotón y la guayaba criolla,
              todas bajo el mismo cielo tropical.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'justify' }}>
              Su método era la <strong style={{ color: 'var(--wheat)' }}>polinización cruzada y el injerto selectivo</strong>.
              Cruzó la flor de la <em>Tai Ku Mai</em> (una especie tailandesa) con la guayaba enana roja cubana
              EEA-1-23, dando origen a las variedades <strong>Taicuba</strong>. De allí surgió la{' '}
              <strong>Emira</strong>, una guayaba de pulpa rosada, mayor tamaño y mínimo número de semillas,
              nacida literalmente en La Vallita y registrada en el libro <em>Especies de frutales</em>.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'justify' }}>
              Pero Emilio no solo creó frutas: creó <strong style={{ color: 'var(--wheat)' }}>conciencia</strong>.
              Su finca se convirtió en aula al aire libre. El programa <em>Guardianes de la naturaleza y
              protectores del medio ambiente</em>, vinculado al Seminternado Alfredo González Hernández y a la
              ESBU Chichi Padrón, logró que el <strong>66% de los estudiantes</strong> vinculados al círculo de
              interés optaran por carreras agropecuarias.
            </p>
            <blockquote className="my-8 pl-6 border-l-[3px] font-serif italic text-lg leading-relaxed" style={{ borderColor: 'var(--wheat)', color: 'rgba(255,255,255,0.9)' }}>
              "La finca es un centro de investigación donde se aplican ocho tareas de desarrollo, muchas
              impulsadas por el doctor Adolfo Rodríguez Nodals."
              <span className="block mt-3 font-sans text-sm not-italic font-semibold" style={{ color: 'var(--wheat)' }}>
                — Emilio Chávez Estévez, entrevista a CMEP Radio Placetas, 2018
              </span>
            </blockquote>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'justify' }}>
              Su fama como <strong style={{ color: 'var(--wheat)' }}>injertador</strong> trascendió Placetas. Fue
              reconocido en evaluaciones nacionales del Grupo de Agricultura Urbana y Suburbana como uno de los
              mejores de Cuba en guayabas, mameyes, mangos, aguacates, limones y frutas no tropicales. Cuando
              Bayer y la ANAP buscaban un modelo para la primera <strong>Finca Agrovida</strong> del país, no
              dudaron: La Vallita ya cumplía con creces los parámetros productivos, agroecológicos y de
              protección al entorno.
            </p>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="legado-stat text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="block font-serif font-extrabold leading-none mb-2" style={{ fontSize: '1.8rem', color: 'var(--wheat)' }}>{stat.num}</span>
                <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legado;
