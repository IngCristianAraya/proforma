import { CheckCircle, Clock, Rocket, Zap } from 'lucide-react';

interface RegistrationProcessProps {
  businessType: string;
}

export function RegistrationProcess({ businessType }: RegistrationProcessProps) {
  const getBusinessData = (type: string) => {
    switch (type) {
      case 'restaurantes':
        return {
          title: "Tu restaurante online en 3 pasos",
          subtitle: "De la cocina al mundo digital",
          icon: "🍽️",
          steps: [
            {
              number: "1",
              title: "Cuéntanos de tu restaurante",
              description: "Menú, horarios, zona de delivery",
              time: "5 min",
              icon: <CheckCircle className="w-8 h-8 text-green-500" />
            },
            {
              number: "2", 
              title: "Creamos tu sitio web",
              description: "Diseño profesional con tu marca",
              time: "24-48h",
              icon: <Clock className="w-8 h-8 text-blue-500" />
            },
            {
              number: "3",
              title: "¡Empieza a vender!",
              description: "Recibe pedidos desde el primer día",
              time: "Inmediato",
              icon: <Rocket className="w-8 h-8 text-purple-500" />
            }
          ]
        };
      case 'lavanderias':
        return {
          title: "Tu lavandería online en 3 pasos",
          subtitle: "Servicios de limpieza al alcance de todos",
          icon: "🧺",
          steps: [
            {
              number: "1",
              title: "Define tus servicios",
              description: "Tipos de lavado, precios, horarios",
              time: "5 min",
              icon: <CheckCircle className="w-8 h-8 text-green-500" />
            },
            {
              number: "2",
              title: "Creamos tu plataforma",
              description: "Sistema de reservas y seguimiento",
              time: "24-48h", 
              icon: <Clock className="w-8 h-8 text-blue-500" />
            },
            {
              number: "3",
              title: "¡Recibe clientes!",
              description: "Gestiona pedidos fácilmente",
              time: "Inmediato",
              icon: <Rocket className="w-8 h-8 text-purple-500" />
            }
          ]
        };
      case 'peluquerias':
        return {
          title: "Tu salón online en 3 pasos",
          subtitle: "Belleza y estilo al alcance digital",
          icon: "💇‍♀️",
          steps: [
            {
              number: "1",
              title: "Configura tus servicios",
              description: "Cortes, tratamientos, precios",
              time: "5 min",
              icon: <CheckCircle className="w-8 h-8 text-green-500" />
            },
            {
              number: "2",
              title: "Tu sitio web profesional",
              description: "Galería de trabajos y reservas online",
              time: "24-48h",
              icon: <Clock className="w-8 h-8 text-blue-500" />
            },
            {
              number: "3",
              title: "¡Agenda completa!",
              description: "Clientes reservan 24/7",
              time: "Inmediato",
              icon: <Rocket className="w-8 h-8 text-purple-500" />
            }
          ]
        };
      case 'tiendas':
        return {
          title: "Tu tienda online en 3 pasos",
          subtitle: "Vende más, llega a más clientes",
          icon: "🏪",
          steps: [
            {
              number: "1",
              title: "Sube tus productos",
              description: "Catálogo, precios, inventario",
              time: "10 min",
              icon: <CheckCircle className="w-8 h-8 text-green-500" />
            },
            {
              number: "2",
              title: "Tu tienda virtual",
              description: "Diseño atractivo y funcional",
              time: "24-48h",
              icon: <Clock className="w-8 h-8 text-blue-500" />
            },
            {
              number: "3",
              title: "¡Vende online!",
              description: "Pagos seguros y envíos fáciles",
              time: "Inmediato",
              icon: <Rocket className="w-8 h-8 text-purple-500" />
            }
          ]
        };
      case 'salud':
        return {
          title: "Tu consulta online en 3 pasos",
          subtitle: "Salud y bienestar digital",
          icon: "🏥",
          steps: [
            {
              number: "1",
              title: "Configura tu consulta",
              description: "Especialidades, horarios, tarifas",
              time: "5 min",
              icon: <CheckCircle className="w-8 h-8 text-green-500" />
            },
            {
              number: "2",
              title: "Plataforma profesional",
              description: "Citas online y gestión de pacientes",
              time: "24-48h",
              icon: <Clock className="w-8 h-8 text-blue-500" />
            },
            {
              number: "3",
              title: "¡Atiende más pacientes!",
              description: "Reservas automáticas 24/7",
              time: "Inmediato",
              icon: <Rocket className="w-8 h-8 text-purple-500" />
            }
          ]
        };
      default:
        return {
          title: "Tu negocio online en 3 pasos",
          subtitle: "Digitaliza tu empresa fácilmente",
          icon: "💼",
          steps: [
            {
              number: "1",
              title: "Cuéntanos tu negocio",
              description: "Servicios, productos, objetivos",
              time: "5 min",
              icon: <CheckCircle className="w-8 h-8 text-green-500" />
            },
            {
              number: "2",
              title: "Creamos tu presencia digital",
              description: "Sitio web personalizado",
              time: "24-48h",
              icon: <Clock className="w-8 h-8 text-blue-500" />
            },
            {
              number: "3",
              title: "¡Crece digitalmente!",
              description: "Más clientes, más ventas",
              time: "Inmediato",
              icon: <Rocket className="w-8 h-8 text-purple-500" />
            }
          ]
        };
    }
  };

  const businessData = getBusinessData(businessType);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">{businessData.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            {businessData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {businessData.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {businessData.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < businessData.steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-red-300 z-0" 
                       style={{ width: 'calc(100% - 2rem)', left: '2rem' }} />
                )}
                
                {/* Step Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative z-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {step.description}
                  </p>

                  {/* Time Badge */}
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-4 py-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-semibold text-orange-700">{step.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl shadow-2xl p-8 text-white max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                ¡Empieza hoy mismo!
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Miles de negocios ya confían en nosotros
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Solicitar mi sitio web
                </button>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <CheckCircle className="w-5 h-5" />
                  <span>Sin compromiso • Listing básico gratis por 7 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}