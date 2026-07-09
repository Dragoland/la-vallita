import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Visitanos: React.FC = () => {
  const mapRef = useScrollAnimation({ y: 40, duration: 0.8 });
  const infoRef = useScrollAnimation({ y: 30, duration: 0.7, delay: 0.2 });

  return (
    <section
      id="visitanos"
      className="relative"
      style={{ background: 'var(--parchment)', padding: '6rem 1.5rem' }}
    >
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--wheat), transparent)',
          opacity: 0.3,
        }}
      />

      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Encuéntranos"
          title="Visítanos"
          subtitle="Ven a conocer la finca y lleva tu planta directamente"
        />

        {/* Map */}
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
          <p className="text-center mb-6">
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

        {/* Info Card */}
        <div
          ref={infoRef}
          className="bg-white rounded-2xl p-6 lg:p-10"
          style={{
            boxShadow: '0 4px 20px var(--shadow)',
            border: '1px solid rgba(139, 105, 20, 0.08)',
          }}
        >
          <h3
            className="font-serif text-2xl font-bold mb-6"
            style={{ color: 'var(--soil-dark)' }}
          >
            Cómo llegar a La Vallita
          </h3>

          <ul className="list-none p-0">
            {[
              {
                bold: 'Desde el centro de Placetas:',
                text: 'Dirección Falcón. A pie, en bicicleta o transporte particular. Aproximadamente 3 km desde el poblado de Falcón.',
              },
              {
                bold: 'Referencia local:',
                text: 'Asentamiento La Vallita, Consejo Popular Falcón, zona agrícola de Placetas. Enclavada en áreas de la CCS Fortalecida Antonio Duménigo.',
              },
              {
                bold: 'Ubicación exacta:',
                text: '',
                link: true,
              },
              {
                bold: 'Recomendación:',
                text: 'Avisar por WhatsApp antes de venir para confirmar que estaremos en la finca.',
              },
            ].map((item, i) => (
              <li
                key={i}
                className="relative py-4 pl-9 border-b last:border-b-0"
                style={{ borderColor: 'rgba(139, 105, 20, 0.12)', borderStyle: 'dashed' }}
              >
                <span
                  className="absolute left-0 top-5 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: 'var(--wheat)',
                    boxShadow: '0 0 0 3px rgba(201, 168, 76, 0.2)',
                  }}
                />
                <strong style={{ color: 'var(--soil-dark)' }}>{item.bold}</strong>{' '}
                {item.link ? (
                  <>
                    <a
                      href="https://www.openstreetmap.org/?mlat=22.3554295&mlon=-79.7452053#map=18/22.3554295/-79.7452053"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                      style={{ color: 'var(--wheat)' }}
                    >
                      22.3554295, -79.7452053
                    </a>{' '}
                    (Falcón, Placetas, Villa Clara)
                  </>
                ) : (
                  <span style={{ color: 'var(--text-soft)' }}>{item.text}</span>
                )}
              </li>
            ))}
          </ul>

          {/* Horario */}
          <div
            className="mt-8 pt-8"
            style={{ borderTop: '2px solid var(--wheat)' }}
          >
            <strong
              className="block font-serif text-xl mb-2"
              style={{ color: 'var(--soil)' }}
            >
              Horario de atención en finca
            </strong>
            <p style={{ color: 'var(--text-soft)' }}>
              Lunes a Sábado — Consultar por WhatsApp
              <br />
              <em>Domingo: a partir de las 2:00 PM, previa cita.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visitanos;
