import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
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
    icon: 'A',
    title: 'BitCriollo',
    desc: 'Soporte web y técnico',
    link: 'https://wa.me/5356418463?text=Hola%20BitCriollo%2C%20tengo%20una%20duda%20sobre%20el%20sitio%20de%20La%20Vallita.',
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

const ContactoPage: React.FC = () => {
  const navigate = useNavigate();
  const mapRef = useScrollAnimation({ y: 40, duration: 0.8 });
  const infoRef = useScrollAnimation({ y: 30, duration: 0.7, delay: 0.2 });

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* Sticky back button */}
      <div className="bg-white border-b sticky top-[72px] z-50" style={{ borderColor: 'rgba(139,105,20,0.1)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-medium hover:text-[var(--leaf)] transition-colors"
            style={{ color: 'var(--text-soft)' }}
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <SectionHeader
          label="Encuéntranos"
          title="Contacto"
          subtitle="Ven a conocer la finca, escríbenos o llámanos. Respondemos lo antes posible."
        />

        {/* Mapa */}
        <div ref={mapRef}>
          <div
            className="relative rounded-2xl overflow-hidden mb-8"
            style={{
              boxShadow: '0 8px 30px var(--shadow-strong)',
              border: '1px solid rgba(139, 105, 20, 0.1)',
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                border: '1px solid var(--wheat)',
                opacity: 0.15,
                zIndex: 2,
              }}
            />
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-79.7652%2C22.3454%2C-79.7252%2C22.3654&amp;layer=mapnik&amp;marker=22.3554295%2C-79.7452053"
              title="Mapa de La Vallita, Falcón, Placetas"
              className="w-full"
              style={{
                height: '400px',
                border: 'none',
                display: 'block',
                filter: 'sepia(0.2) saturate(0.8)',
              }}
              loading="lazy"
            />
          </div>
          <p className="text-center mb-10">
            <a
              href="https://www.openstreetmap.org/?mlat=22.3554295&mlon=-79.7452053#map=18/22.3554295/-79.7452053"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--leaf)' }}
            >
              Ver mapa a pantalla completa
            </a>
          </p>
        </div>

        {/* Grid de info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cómo llegar + Horario */}
          <div
            ref={infoRef}
            className="bg-white rounded-2xl p-6 lg:p-10"
            style={{
              boxShadow: '0 4px 20px var(--shadow)',
              border: '1px solid rgba(139, 105, 20, 0.08)',
            }}
          >
            <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--soil-dark)' }}>
              <MapPin size={24} className="inline mr-2" style={{ color: 'var(--leaf)' }} />
              Cómo llegar a La Vallita
            </h3>

            <ul className="list-none p-0 space-y-4">
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--wheat)' }} />
                <div>
                  <strong style={{ color: 'var(--soil-dark)' }}>Desde el centro de Placetas:</strong>{' '}
                  <span style={{ color: 'var(--text-soft)' }}>Dirección Falcón. A pie, en bicicleta o transporte particular. Aproximadamente 3 km desde el poblado de Falcón.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--wheat)' }} />
                <div>
                  <strong style={{ color: 'var(--soil-dark)' }}>Referencia local:</strong>{' '}
                  <span style={{ color: 'var(--text-soft)' }}>Asentamiento La Vallita, Consejo Popular Falcón, zona agrícola de Placetas. Enclavada en áreas de la CCS Fortalecida Antonio Duménigo.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--wheat)' }} />
                <div>
                  <strong style={{ color: 'var(--soil-dark)' }}>Ubicación exacta:</strong>{' '}
                  <a
                    href="https://www.openstreetmap.org/?mlat=22.3554295&mlon=-79.7452053#map=18/22.3554295/-79.7452053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: 'var(--wheat)' }}
                  >
                    22.3554295, -79.7452053
                  </a>{' '}
                  <span style={{ color: 'var(--text-soft)' }}>(Falcón, Placetas, Villa Clara)</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--wheat)' }} />
                <div>
                  <strong style={{ color: 'var(--soil-dark)' }}>Recomendación:</strong>{' '}
                  <span style={{ color: 'var(--text-soft)' }}>Avisar por WhatsApp antes de venir para confirmar que estaremos en la finca.</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-8" style={{ borderTop: '2px solid var(--wheat)' }}>
              <h4 className="font-serif text-xl font-bold mb-3" style={{ color: 'var(--soil)' }}>
                <Clock size={20} className="inline mr-2" style={{ color: 'var(--wheat)' }} />
                Horario de atención en finca
              </h4>
              <p style={{ color: 'var(--text-soft)' }}>
                Lunes a Sábado — Consultar por WhatsApp
                <br />
                <em>Domingo: a partir de las 2:00 PM, previa cita.</em>
              </p>
            </div>

            <div
              className="mt-8 p-4 rounded-xl"
              style={{
                background: 'rgba(201, 168, 76, 0.1)',
                border: '1px solid var(--wheat)',
                color: 'var(--soil-dark)',
              }}
            >
              <p className="text-sm">
                <strong>Importante:</strong> No realizamos envíos a domicilio fuera de la finca.
                Las plantas se retiran directamente en La Vallita, Falcón, previa coordinación por WhatsApp.
              </p>
            </div>
          </div>

          {/* Contactos directos */}
          <div className="space-y-4">
            {contactos.map((c) => (
              <a
                key={c.title}
                href={c.link}
                target={c.link.startsWith('http') ? '_blank' : undefined}
                rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 4px 20px var(--shadow)',
                  border: '1px solid rgba(139, 105, 20, 0.08)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center font-serif font-bold text-lg shrink-0"
                    style={{
                      background: 'rgba(201, 168, 76, 0.15)',
                      color: 'var(--wheat)',
                    }}
                  >
                    {c.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-bold" style={{ color: 'var(--soil-dark)' }}>
                      {c.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
                  </div>
                  <span className="font-semibold" style={{ color: 'var(--leaf)' }}>{c.label}</span>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA grande */}
            <a
              href="https://wa.me/5355406632?text=Hola%2C%20vi%20el%20sitio%20de%20La%20Vallita%20y%20me%20interesa%20consultar."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-4 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={18} className="inline mr-2" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
