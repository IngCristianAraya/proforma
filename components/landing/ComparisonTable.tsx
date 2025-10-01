import { Check, X, Star } from 'lucide-react';

interface ComparisonTableProps {
  businessType?: string;
}

export function ComparisonTable({ businessType = 'general' }: ComparisonTableProps) {
  // Características simplificadas y más relevantes
  const mainFeatures = [
    { 
      name: 'Comisión por venta', 
      tubarrio: '0%', 
      others: '25-35%',
      highlight: true,
      description: 'Te quedas con el 100% de tus ventas'
    },
    { 
      name: 'Costo mensual', 
      tubarrio: 'Desde S/49', 
      others: 'Gratis*',
      highlight: false,
      description: 'Sin sorpresas, precio fijo mensual'
    },
    { 
      name: 'Tus clientes', 
      tubarrio: 'Datos completos', 
      others: 'Sin datos',
      highlight: true,
      description: 'Conoce a tus clientes y fidelízalos'
    }
  ];

  const benefits = [
    { name: 'WhatsApp integrado', tubarrio: true, others: false },
    { name: 'Dominio personalizado', tubarrio: true, others: false },
    { name: 'Soporte personalizado', tubarrio: true, others: false },
    { name: 'Sin dependencia de apps', tubarrio: true, others: false }
  ];

  return (
    <section className="py-16 bg-white" id="comparison">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir Tubarrio.pe?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La diferencia está en los detalles que realmente importan para tu negocio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Comparación principal simplificada */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-orange-500 mr-2" />
                    <h3 className="text-2xl font-bold text-orange-600">Tubarrio.pe</h3>
                  </div>
                  <div className="space-y-4">
                    {mainFeatures.map((feature, index) => (
                      <div key={index} className={`p-3 rounded-lg ${feature.highlight ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                        <div className="font-semibold text-gray-800">{feature.name}</div>
                        <div className={`text-lg font-bold ${feature.highlight ? 'text-green-600' : 'text-orange-600'}`}>
                          {feature.tubarrio}
                        </div>
                        <div className="text-sm text-gray-600">{feature.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">Otras plataformas</h3>
                  <div className="space-y-4">
                    {mainFeatures.map((feature, index) => (
                      <div key={index} className="p-3 rounded-lg bg-white">
                        <div className="font-semibold text-gray-800">{feature.name}</div>
                        <div className="text-lg font-bold text-gray-600">
                          {feature.others}
                        </div>
                        <div className="text-sm text-gray-500">
                          {feature.name === 'Costo mensual' ? '*Pero te cobran comisión' : 'Información limitada'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beneficios adicionales */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
              Beneficios exclusivos de Tubarrio.pe
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-8">
            <div className="bg-orange-500 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-2">¿Listo para empezar?</h3>
              <p className="mb-4">Sin comisiones, sin sorpresas, solo resultados</p>
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 shadow-md"
              >
                Ver precios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}