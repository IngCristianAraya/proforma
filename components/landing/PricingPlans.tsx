import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingPlansProps {
  businessType: string;
}

export function PricingPlans({ businessType }: PricingPlansProps) {
  const getBusinessSpecificFeatures = (type: string) => {
    switch (type) {
      case 'restaurantes':
        return {
          landing: ['Menú digital', 'Pedidos WhatsApp', 'Horarios'],
          corporativa: ['Menú completo', 'Reservas online', 'Delivery integrado', 'Galería fotos']
        };
      case 'lavanderias':
        return {
          landing: ['Lista servicios', 'Precios claros', 'Contacto directo'],
          corporativa: ['Calculadora precios', 'Recojo/entrega', 'Seguimiento pedidos', 'Promociones']
        };
      case 'peluquerias':
        return {
          landing: ['Servicios y precios', 'Citas WhatsApp', 'Ubicación'],
          corporativa: ['Galería trabajos', 'Reserva online', 'Promociones', 'Equipo profesional']
        };
      case 'tiendas':
        return {
          landing: ['Catálogo productos', 'Precios', 'Contacto'],
          corporativa: ['Tienda virtual', 'Carrito compras', 'Pagos online', 'Inventario']
        };
      case 'salud':
        return {
          landing: ['Servicios médicos', 'Citas WhatsApp', 'Horarios'],
          corporativa: ['Especialidades', 'Citas online', 'Historia clínica', 'Telemedicina']
        };
      default:
        return {
          landing: ['Información básica', 'Contacto directo', 'Ubicación'],
          corporativa: ['Sitio completo', 'Funciones avanzadas', 'Integración WhatsApp', 'SEO optimizado']
        };
    }
  };

  const features = getBusinessSpecificFeatures(businessType);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Planes Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan perfecto para tu negocio. Sin letra pequeña.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Landing Page Plan */}
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Landing Page</h3>
                  <p className="text-gray-600">Perfecto para empezar</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">S/165</span>
                  <span className="text-gray-600">una vez</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg text-gray-900 font-semibold">+ S/15</span>
                  <span className="text-gray-600">/mes mantenimiento</span>
                </div>
                <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mt-3">
                  🎉 Primer mes GRATIS
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.landing.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Listo en 5 días</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Soporte WhatsApp</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Empezar ahora
              </button>
            </div>
          </div>

          {/* Web Corporativa Plan */}
          <div className="relative bg-white rounded-3xl shadow-xl border-2 border-purple-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
              <Star className="w-4 h-4 inline mr-1" />
              POPULAR
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Web Corporativa</h3>
                  <p className="text-gray-600">Solución completa</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">S/364</span>
                  <span className="text-gray-600">una vez</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg text-gray-900 font-semibold">+ S/15</span>
                  <span className="text-gray-600">/mes mantenimiento</span>
                </div>
                <div className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mt-3">
                  🚀 Más vendido
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.corporativa.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Listo en 7 días</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Soporte prioritario</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Elegir este plan
              </button>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Sin permanencia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Garantía 30 días</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Soporte incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}