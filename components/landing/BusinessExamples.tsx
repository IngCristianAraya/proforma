import { ExternalLink, Star, Clock, MapPin } from 'lucide-react';

interface BusinessExamplesProps {
  businessType: string;
}

export function BusinessExamples({ businessType }: BusinessExamplesProps) {
  const getBusinessExamples = (type: string) => {
    switch (type) {
      case 'restaurantes':
        return [
          {
            name: "Pizzería Don Mario",
            description: "Menú digital + pedidos WhatsApp",
            image: "/examples/pizza.jpg",
            rating: 4.8,
            orders: "150+ pedidos/mes",
            url: "https://tubarrio.pe/don-mario"
          },
          {
            name: "Café Central",
            description: "Reservas online + delivery",
            image: "/examples/cafe.jpg",
            rating: 4.9,
            orders: "200+ reservas/mes",
            url: "https://tubarrio.pe/cafe-central"
          }
        ];
      case 'lavanderias':
        return [
          {
            name: "Lavandería Express",
            description: "Recojo y entrega a domicilio",
            image: "/examples/lavanderia.jpg",
            rating: 4.7,
            orders: "80+ servicios/mes",
            url: "https://tubarrio.pe/lavanderia-express"
          },
          {
            name: "Clean & Fresh",
            description: "Calculadora de precios online",
            image: "/examples/clean.jpg",
            rating: 4.8,
            orders: "120+ clientes/mes",
            url: "https://tubarrio.pe/clean-fresh"
          }
        ];
      case 'peluquerias':
        return [
          {
            name: "Salón Bella Vista",
            description: "Citas online + galería trabajos",
            image: "/examples/salon.jpg",
            rating: 4.9,
            orders: "300+ citas/mes",
            url: "https://tubarrio.pe/bella-vista"
          },
          {
            name: "Barbería Moderna",
            description: "Reservas WhatsApp + promociones",
            image: "/examples/barberia.jpg",
            rating: 4.8,
            orders: "250+ cortes/mes",
            url: "https://tubarrio.pe/barberia-moderna"
          }
        ];
      case 'tiendas':
        return [
          {
            name: "Tienda Mi Barrio",
            description: "Catálogo online + delivery",
            image: "/examples/tienda.jpg",
            rating: 4.6,
            orders: "400+ productos vendidos",
            url: "https://tubarrio.pe/mi-barrio"
          },
          {
            name: "Farmacia San Juan",
            description: "Pedidos WhatsApp + inventario",
            image: "/examples/farmacia.jpg",
            rating: 4.9,
            orders: "500+ medicamentos/mes",
            url: "https://tubarrio.pe/farmacia-san-juan"
          }
        ];
      case 'salud':
        return [
          {
            name: "Clínica Dental Sonrisa",
            description: "Citas online + especialidades",
            image: "/examples/dental.jpg",
            rating: 4.9,
            orders: "180+ consultas/mes",
            url: "https://tubarrio.pe/clinica-sonrisa"
          },
          {
            name: "Veterinaria Patitas",
            description: "Emergencias 24h + telemedicina",
            image: "/examples/veterinaria.jpg",
            rating: 4.8,
            orders: "220+ mascotas atendidas",
            url: "https://tubarrio.pe/veterinaria-patitas"
          }
        ];
      default:
        return [
          {
            name: "Negocio Ejemplo 1",
            description: "Solución personalizada",
            image: "/examples/general1.jpg",
            rating: 4.7,
            orders: "100+ clientes/mes",
            url: "https://tubarrio.pe/ejemplo1"
          },
          {
            name: "Negocio Ejemplo 2",
            description: "Presencia digital completa",
            image: "/examples/general2.jpg",
            rating: 4.8,
            orders: "150+ servicios/mes",
            url: "https://tubarrio.pe/ejemplo2"
          }
        ];
    }
  };

  const examples = getBusinessExamples(businessType);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mira cómo otros negocios como el tuyo están creciendo con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {examples.map((example, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Image placeholder with gradient */}
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{example.rating}</span>
                    <span className="text-white/80">• {example.orders}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{example.name}</h3>
                    <p className="text-gray-600">{example.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Activo
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>24/7</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Lima</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => window.open(example.url, '_blank')}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    Ver sitio
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Negocios activos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5 días</div>
              <div className="text-gray-600 font-medium">Tiempo promedio</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Soporte</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿Listo para ser el próximo caso de éxito?
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Empezar mi proyecto
          </button>
        </div>
      </div>
    </section>
  );
}