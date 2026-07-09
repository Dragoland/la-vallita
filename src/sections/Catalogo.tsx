import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MessageCircle } from 'lucide-react';

interface Planta {
  nombre: string;
  cientifico: string;
  desc: string;
  estado: 'disponible' | 'brotando' | 'encargo' | 'legacy';
  wsMsg: string;
}

const estadoStyles: Record<string, { bg: string; color: string; label: string }> = {
  disponible: { bg: '#e8f5e9', color: '#2e7d32', label: 'Disponible' },
  brotando: { bg: '#e3f2fd', color: '#1565c0', label: 'Brotando' },
  encargo: { bg: '#fff8e1', color: '#f57c00', label: 'Solo por encargo' },
  legacy: { bg: '#f3e5f5', color: '#6a1b9a', label: 'Variedades de legado' },
};

const plantas: Planta[] = [
  {
    nombre: 'Guayaba',
    cientifico: 'Psidium guajava — Variedades de legado',
    desc: 'Corazón histórico de La Vallita. En su época de esplendor se comercializaron 51,000 plantas de la variedad Lucía y se desarrollaron las Taicuba (1-6) y la Emira, registradas en el libro Especies de frutales. Rápido crecimiento, ideal para mermeladas y consumo fresco.',
    estado: 'legacy',
    wsMsg: 'Hola, me interesa la Guayaba de La Vallita. ¿Qué variedades tienen?',
  },
  {
    nombre: 'Aguacate',
    cientifico: 'Persea americana',
    desc: 'Variedades adaptadas a suelos de la región. Históricamente parte de las cosechas que superaron los 1,000 quintales entre 2013 y 2017. Excelente sombra y producción sostenida.',
    estado: 'brotando',
    wsMsg: 'Hola, me interesa el Aguacate de La Vallita. ¿Cuándo estará disponible?',
  },
  {
    nombre: 'Mango',
    cientifico: 'Mangifera indica',
    desc: 'Frutal de hoja perenne, sombra amplia y fruto dulce. Clásico de los patios cubanos y pilar histórico de la producción de La Vallita.',
    estado: 'disponible',
    wsMsg: 'Hola, me interesa el Mango de La Vallita. ¿Está disponible?',
  },
  {
    nombre: 'Limón criollo',
    cientifico: 'Citrus × limon',
    desc: 'Árbol robusto y aromático, esencial en la cocina cubana. Resistente a condiciones locales y de bajo mantenimiento. Ideal para cercas vivas y producción de jugo.',
    estado: 'disponible',
    wsMsg: 'Hola, me interesa el Limón criollo de La Vallita. ¿Está disponible?',
  },
  {
    nombre: 'Limón persa',
    cientifico: 'Citrus × latifolia',
    desc: 'Variedad de pulpa jugosa y piel fina, muy demandada para cocina y bebidas. Buena adaptación a suelos de Villa Clara con riego moderado.',
    estado: 'disponible',
    wsMsg: 'Hola, me interesa el Limón persa de La Vallita. ¿Está disponible?',
  },
  {
    nombre: 'Mandarina',
    cientifico: 'Citrus reticulata',
    desc: 'Fruto dulce y aromático, de fácil peladura. Árbol de porte mediano, ideal para patios y pequeñas parcelas. Muy apreciada en la región central de Cuba.',
    estado: 'brotando',
    wsMsg: 'Hola, me interesa la Mandarina de La Vallita. ¿Cuándo estará disponible?',
  },
  {
    nombre: 'Naranja',
    cientifico: 'Citrus × sinensis / Citrus × aurantium',
    desc: 'Incluye variedades dulces y agrias (naranja agria). Robusta, resistente a sequía y ideal para cercas vivas, jugo y cocina. Clásico de los patios cubanos.',
    estado: 'disponible',
    wsMsg: 'Hola, me interesa la Naranja de La Vallita. ¿Tienen dulce o agria?',
  },
  {
    nombre: 'Uva',
    cientifico: 'Vitis vinifera',
    desc: 'Frutal exótico cultivado históricamente en La Vallita como parte de su apuesta por la diversidad. Requiere tutorado y riego controlado, pero recompensa con frutos de alto valor.',
    estado: 'encargo',
    wsMsg: 'Hola, me interesa la Uva de La Vallita. ¿Puedo encargar?',
  },
  {
    nombre: 'Melocotón',
    cientifico: 'Prunus persica',
    desc: 'Frutal de clima templado adaptado con éxito en La Vallita. Fruto jugoso y dulce, parte del legado de frutas no tropicales que Emilio logró establecer en Villa Clara.',
    estado: 'encargo',
    wsMsg: 'Hola, me interesa el Melocotón de La Vallita. ¿Puedo encargar?',
  },
  {
    nombre: 'Frutabomba',
    cientifico: 'Carica papaya',
    desc: 'Rápido crecimiento y producción en menos de un año. Históricamente uno de los cultivos de mayor volumen en La Vallita, con cosechas que aportaron a los 1,000+ quintales de la finca.',
    estado: 'disponible',
    wsMsg: 'Hola, me interesa la Frutabomba de La Vallita. ¿Está disponible?',
  },
  {
    nombre: 'Guanábana',
    cientifico: 'Annona muricata',
    desc: 'Frutal nativo de hoja perenne, apreciado por su pulpa blanca y sabor ácido-dulce. Usada en jugos, dulces y postres. De porte mediano, se adapta bien a la sombra parcial.',
    estado: 'brotando',
    wsMsg: 'Hola, me interesa la Guanábana de La Vallita. ¿Cuándo estará disponible?',
  },
];

const Catalogo: React.FC = () => {
  const ref = useScrollAnimation({ y: 40, duration: 0.6, stagger: 0.08 });

  return (
    <section
      id="catalogo"
      style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Lo que cultivamos"
          title="Catálogo de plantas"
          subtitle="Patrimonio real de La Vallita. Pregunta por lo que no ves, quizás esté brotando."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantas.map((planta) => {
            const est = estadoStyles[planta.estado];
            return (
              <div
                key={planta.nombre}
                className="group relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-400 hover:-translate-y-2"
                style={{
                  boxShadow: '0 4px 20px var(--shadow)',
                  border: '1px solid rgba(139, 105, 20, 0.08)',
                }}
              >
                {/* Top decorative line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, var(--leaf), var(--wheat))', zIndex: 2 }}
                />

                {/* Image */}
                <div className="relative h-[220px] overflow-hidden group-hover:overflow-hidden">
                  <div className="transition-transform duration-400 group-hover:scale-105">
                    <ImagePlaceholder
                      label={`📷 ${planta.nombre}`}
                      sublabel="Fotografía real aquí"
                      height="220px"
                    />
                  </div>
                  {/* Decorative leaf */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute -right-5 -top-5 w-[120px] h-[120px] opacity-[0.15]"
                    fill="var(--leaf-dark)"
                  >
                    <path d="M50 90 Q20 50 50 10 Q80 50 50 90" />
                  </svg>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4
                    className="font-serif text-xl font-bold"
                    style={{ color: 'var(--soil-dark)' }}
                  >
                    {planta.nombre}
                  </h4>
                  <span
                    className="font-serif italic text-sm mb-3"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {planta.cientifico}
                  </span>
                  <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-soft)' }}>
                    {planta.desc}
                  </p>

                  {/* Status */}
                  <span
                    className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-4 py-1.5 mb-3 w-fit"
                    style={{ background: est.bg, color: est.color, letterSpacing: '0.5px' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: est.color }}
                    />
                    {est.label}
                  </span>

                  {/* Price */}
                  <div className="mb-4">
                    <span
                      className="font-serif text-lg font-bold"
                      style={{ color: 'var(--soil)' }}
                    >
                      Consultar
                    </span>
                    <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>
                      (CUP / MLC)
                    </span>
                  </div>

                  {/* WhatsApp button */}
                  <a
                    href={`https://wa.me/5355406632?text=${encodeURIComponent(planta.wsMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    }}
                  >
                    <MessageCircle size={16} />
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div
          className="mt-12 mx-auto max-w-2xl text-center rounded-xl px-6 py-5"
          style={{
            background: 'var(--parchment)',
            border: '1px dashed var(--soil-light)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--text-soft)' }}>
            <strong className="font-serif" style={{ color: 'var(--soil-dark)' }}>
              ¿Buscas algo que no ves?
            </strong>{' '}
            Escríbenos por WhatsApp. Muchas plantas están en vivero o brotando. El catálogo se actualiza
            según la temporada y la disponibilidad real de la finca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
