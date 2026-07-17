import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contactos = [
  {
    icon: 'T',
    title: 'Teléfono fijo',
    desc: 'Llamada directa a la finca',
    link: 'tel:+5342861589',
    label: '42 861 589',
  },
  {
    icon: 'W',
    title: 'WhatsApp principal',
    desc: 'Pedidos y atención',
    link: 'https://wa.me/5355406632?text=Hola%2C%20vi%20el%20sitio%20de%20La%20Vallita%20y%20me%20interesa%20consultar.',
    label: '+53 5 5406632',
  },
  {
    icon: 'D',
    title: 'Dragoland (BitCriollo)',
    desc: 'Soporte web y técnico',
    link: 'https://wa.me/5356418463?text=Hola%20Dragoland%2C%20tengo%20una%20duda%20sobre%20el%20sitio%20de%20La%20Vallita.',
    label: '+53 5 6418463',
  },
  {
    icon: 'R',
    title: 'Contacto secundario',
    desc: 'Respaldo cuando no haya cobertura',
    link: 'https://wa.me/5356850969?text=Hola%2C%20vi%20el%20sitio%20de%20La%20Vallita.',
    label: '+53 5 6850969',
  },
];

const Contacto: React.FC = () => {
  const ref = useScrollAnimation({ y: 30, duration: 0.6, stagger: 0.1 });

  return (
    <section
      id="contacto"
      className="relative"
      style={{
        background: 'linear-gradient(180deg, var(--soil-dark), var(--soil))',
        padding: '6rem 1.5rem',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Contacto"
          title="Escríbenos"
          subtitle="Pedidos, consultas y visitas. Respondemos por WhatsApp lo antes posible."
          dark
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {contactos.map((c) => (
            <a
              key={c.title}
              href={c.link}
              target={c.link.startsWith('http') ? '_blank' : undefined}
              rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block text-center p-6 lg:p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center mx-auto mb-4 font-serif font-bold text-lg"
                style={{
                  background: 'rgba(201, 168, 76, 0.15)',
                  color: 'var(--wheat)',
                }}
              >
                {c.icon}
              </div>
              <h4
                className="font-serif text-lg font-bold mb-1"
                style={{ color: 'var(--white)' }}
              >
                {c.title}
              </h4>
              <p
                className="text-sm mb-2"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {c.desc}
              </p>
              <span
                className="text-base font-semibold hover:underline"
                style={{ color: 'var(--wheat)' }}
              >
                {c.label}
              </span>
            </a>
          ))}
        </div>

        {/* Note */}
        <div
          className="mt-10 mx-auto max-w-2xl text-center rounded-xl px-6 py-4"
          style={{
            background: 'rgba(201, 168, 76, 0.1)',
            border: '1px solid var(--wheat)',
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          <p className="text-sm">
            <strong>Importante:</strong> No realizamos envíos a domicilio fuera de la finca.
            Las plantas se retiran directamente en La Vallita, Falcón, previa coordinación por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
