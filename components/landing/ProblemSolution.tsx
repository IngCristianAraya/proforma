import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  businessType?: string;
}

// Contenido específico por tipo de negocio
const businessContent = {
  'restaurantes': {
    problems: [
      'Los clientes no encuentran tu menú actualizado',
      'Pierdes pedidos por no tener delivery propio',
      'Dependes de apps que cobran comisiones altas'
    ],
    solutions: [
      'Menú digital siempre actualizado',
      'Sistema de pedidos directo sin comisiones',
      'WhatsApp integrado para atención rápida'
    ]
  },
  'lavanderias': {
    problems: [
      'Los clientes no saben tus precios ni servicios',
      'Pierdes tiempo coordinando recojo y entrega',
      'No tienes forma de gestionar pedidos'
    ],
    solutions: [
      'Lista clara de servicios y precios',
      'Sistema de reservas para recojo/entrega',
      'Seguimiento de pedidos en tiempo real'
    ]
  },
  'peluquerias': {
    problems: [
      'Los clientes no pueden ver tu trabajo anterior',
      'Pierdes citas por no tener sistema de reservas',
      'Difícil mostrar todos tus servicios'
    ],
    solutions: [
      'Galería de trabajos realizados',
      'Sistema de citas online 24/7',
      'Catálogo completo de servicios'
    ]
  },
  'tiendas': {
    problems: [
      'Los clientes no conocen tus productos',
      'Pierdes ventas por no tener catálogo online',
      'Competencia con tiendas digitales'
    ],
    solutions: [
      'Catálogo digital de productos',
      'WhatsApp para consultas y pedidos',
      'Presencia profesional online'
    ]
  },
  'salud': {
    problems: [
      'Los pacientes no pueden agendar citas fácilmente',
      'Pierdes tiempo en coordinación telefónica',
      'Difícil mostrar tus especialidades'
    ],
    solutions: [
      'Sistema de citas online',
      'Información clara de especialidades',
      'Contacto directo y profesional'
    ]
  }
};

export function ProblemSolution({ businessType = 'general' }: ProblemSolutionProps) {
  // Obtener contenido específico o usar contenido general
  const getContent = () => {
    const key = businessType as keyof typeof businessContent;
    if (businessContent[key]) {
      return businessContent[key];
    }
    
    // Contenido general por defecto
    return {
      problems: [
        'Los clientes no te encuentran online',
        'Pierdes ventas por falta de presencia digital',
        'La competencia ya está en internet'
      ],
      solutions: [
        'Presencia profesional en internet',
        'Sistema para que te contacten fácilmente',
        'Herramientas para gestionar tu negocio'
      ]
    };
  };

  const content = getContent();

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estos son los problemas más comunes que enfrentan los negocios como el tuyo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problemas */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                😰 Sin Tubarrio.pe
              </h3>
              <p className="text-gray-600">Los problemas que enfrentas día a día</p>
            </div>
            
            <div className="space-y-4">
              {content.problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soluciones */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                🚀 Con Tubarrio.pe
              </h3>
              <p className="text-gray-600">La solución que necesitas</p>
            </div>
            
            <div className="space-y-4">
              {content.solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 font-medium">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para el cambio?
            </h3>
            <p className="text-gray-600 mb-6">
              Miles de negocios ya confiaron en nosotros para crecer digitalmente
            </p>
            <button 
              onClick={() => {
                const message = encodeURIComponent('Quiero una pagina web');
                window.open(`https://wa.me/51901426737?text=${message}`, '_blank');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              Quiero mi página web
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}