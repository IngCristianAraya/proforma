import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  businessType?: string;
}

// Preguntas específicas por tipo de negocio
const businessFAQs = {
  'restaurantes': [
    {
      question: '¿Puedo actualizar mi menú cuando quiera?',
      answer: 'Sí, puedes actualizar precios, platos y promociones las veces que necesites sin costo adicional.'
    },
    {
      question: '¿Cómo funciona el sistema de pedidos?',
      answer: 'Los clientes ven tu menú, eligen sus platos y te contactan directamente por WhatsApp para confirmar el pedido.'
    },
    {
      question: '¿Incluye delivery?',
      answer: 'La página web incluye información de delivery. Tú decides si ofrecer delivery y manejas directamente con el cliente.'
    }
  ],
  'lavanderias': [
    {
      question: '¿Puedo mostrar mis precios por servicio?',
      answer: 'Sí, incluimos una lista completa de servicios con precios que puedes actualizar cuando necesites.'
    },
    {
      question: '¿Cómo agendan el recojo los clientes?',
      answer: 'Los clientes pueden ver tus horarios y contactarte directamente por WhatsApp para coordinar recojo y entrega.'
    },
    {
      question: '¿Puedo mostrar fotos de mi trabajo?',
      answer: 'Sí, incluimos una galería donde puedes mostrar el antes y después de tus servicios.'
    }
  ],
  'peluquerias': [
    {
      question: '¿Puedo mostrar mi trabajo anterior?',
      answer: 'Sí, incluimos una galería profesional donde puedes mostrar cortes, peinados y transformaciones.'
    },
    {
      question: '¿Cómo reservan citas los clientes?',
      answer: 'Los clientes ven tus horarios disponibles y te contactan por WhatsApp para agendar su cita.'
    },
    {
      question: '¿Puedo listar todos mis servicios?',
      answer: 'Sí, incluimos una sección completa de servicios con precios que puedes personalizar.'
    }
  ],
  'tiendas': [
    {
      question: '¿Puedo mostrar mi catálogo de productos?',
      answer: 'Sí, incluimos un catálogo digital donde puedes mostrar productos con fotos y precios.'
    },
    {
      question: '¿Cómo hacen pedidos los clientes?',
      answer: 'Los clientes ven tus productos y te contactan por WhatsApp para hacer pedidos y coordinar entrega.'
    },
    {
      question: '¿Puedo actualizar precios fácilmente?',
      answer: 'Sí, puedes actualizar precios y productos las veces que necesites sin costo adicional.'
    }
  ],
  'salud': [
    {
      question: '¿Cómo agendan citas los pacientes?',
      answer: 'Los pacientes ven tus especialidades y horarios, luego te contactan por WhatsApp para agendar.'
    },
    {
      question: '¿Puedo mostrar mis especialidades?',
      answer: 'Sí, incluimos una sección profesional donde describes tus especialidades y experiencia.'
    },
    {
      question: '¿Es seguro para datos médicos?',
      answer: 'La página web es informativa. Para datos médicos sensibles, siempre coordinas directamente con el paciente.'
    }
  ]
};

// Preguntas generales que siempre aparecen
const generalFAQs = [
  {
    question: '¿Cuánto tiempo toma tener mi página lista?',
    answer: 'Entre 3-5 días hábiles. Te mantenemos informado del progreso y puedes solicitar cambios durante el proceso.'
  },
  {
    question: '¿Qué incluye el mantenimiento mensual?',
    answer: 'Hosting, dominio, actualizaciones de seguridad, soporte técnico y cambios de contenido que necesites.'
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer: 'Sí, no hay permanencia. Si cancelas, te damos una copia de tu página para que la uses donde quieras.'
  }
];

export function FAQ({ businessType = 'general' }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Obtener FAQs específicos del negocio
  const getBusinessFAQs = () => {
    const key = businessType as keyof typeof businessFAQs;
    return businessFAQs[key] || [];
  };

  const businessSpecificFAQs = getBusinessFAQs();
  const allFAQs = [...businessSpecificFAQs, ...generalFAQs];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro servicio
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {allFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contacto adicional */}
          <div className="text-center mt-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ¿Tienes otra pregunta?
              </h3>
              <p className="text-gray-600 mb-4">
                Estamos aquí para ayudarte con cualquier duda específica sobre tu proyecto
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Contactar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}