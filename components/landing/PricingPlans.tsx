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
          corporativa: ['Tienda virtual completa', 'Carrito compras', 'Pagos online', 'Gestión inventario', 'Panel administrador', 'Reportes de ventas']
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

  const getBusinessPricing = (type: string) => {
    switch (type) {
      case 'restaurantes':
        return {
          corporativa: 600,
          description: 'Perfecto para restaurantes',
          features: 'Menús, reservas, delivery integrado'
        };
      case 'tiendas':
        return {
          corporativa: 500,
          description: 'Ideal para tiendas',
          features: 'Tienda virtual con carrito y pagos'
        };
      case 'lavanderias':
        return {
          corporativa: 450,
          description: 'Especializado para lavanderías',
          features: 'Calculadora y seguimiento'
        };
      case 'peluquerias':
        return {
          corporativa: 400,
          description: 'Perfecto para peluquerías',
          features: 'Citas online y galería'
        };
      case 'salud':
        return {
          corporativa: 450,
          description: 'Ideal para centros de salud',
          features: 'Citas médicas y servicios'
        };
      case 'servicios':
        return {
          corporativa: 350,
          description: 'Para servicios técnicos',
          features: 'Cotizaciones y contacto'
        };
      case 'profesionales':
        return {
          corporativa: 350,
          description: 'Para profesionales',
          features: 'Portafolio y consultas'
        };
      default:
        return {
          corporativa: 300,
          description: 'Perfecto para tu negocio',
          features: 'Sitio profesional básico'
        };
    }
  };

  const features = getBusinessSpecificFeatures(businessType);
  const pricing = getBusinessPricing(businessType);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Planes Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Soluciones web accesibles para pymes locales. Perfectas para emprendedores que necesitan presencia digital profesional.
          </p>
          
          {/* Categorización clara */}
           <div className="bg-white rounded-xl p-6 shadow-lg max-w-4xl mx-auto mb-12">
             <h3 className="text-2xl font-bold text-gray-800 mb-4">📋 Precios por Sector</h3>
             <div className="grid md:grid-cols-4 gap-4 text-left">
               <div className="bg-red-50 p-4 rounded-lg">
                 <h4 className="font-bold text-red-800 mb-2">🍽️ Restaurantes</h4>
                 <p className="text-sm text-red-700 mb-2">S/600</p>
                 <p className="text-xs text-gray-600">Menús, reservas, delivery integrado.</p>
               </div>
               <div className="bg-green-50 p-4 rounded-lg">
                 <h4 className="font-bold text-green-800 mb-2">🛒 Tiendas</h4>
                 <p className="text-sm text-green-700 mb-2">S/500</p>
                 <p className="text-xs text-gray-600">Tienda virtual con carrito y pagos.</p>
               </div>
               <div className="bg-cyan-50 p-4 rounded-lg">
                 <h4 className="font-bold text-cyan-800 mb-2">🧺 Lavanderías</h4>
                 <p className="text-sm text-cyan-700 mb-2">S/450</p>
                 <p className="text-xs text-gray-600">Calculadora y seguimiento.</p>
               </div>
               <div className="bg-pink-50 p-4 rounded-lg">
                 <h4 className="font-bold text-pink-800 mb-2">✂️ Peluquerías</h4>
                 <p className="text-sm text-pink-700 mb-2">S/400</p>
                 <p className="text-xs text-gray-600">Citas online y galería.</p>
               </div>
             </div>
             <div className="mt-4 grid md:grid-cols-3 gap-4">
               <div className="bg-green-50 p-3 rounded-lg text-center">
                 <h4 className="font-bold text-green-800 mb-1">🏥 Salud</h4>
                 <p className="text-sm text-green-700">S/450 - Citas médicas</p>
               </div>
               <div className="bg-orange-50 p-3 rounded-lg text-center">
                 <h4 className="font-bold text-orange-800 mb-1">🔧 Servicios</h4>
                 <p className="text-sm text-orange-700">S/350 - Cotizaciones</p>
               </div>
               <div className="bg-purple-50 p-3 rounded-lg text-center">
                 <h4 className="font-bold text-purple-800 mb-1">👥 Profesionales</h4>
                 <p className="text-sm text-purple-700">S/350 - Portafolio</p>
               </div>
             </div>
             <div className="mt-4 text-center">
               <div className="bg-blue-50 p-3 rounded-lg inline-block">
                 <h4 className="font-bold text-blue-800 mb-1">🌟 Landing Básica</h4>
                 <p className="text-sm text-blue-700">S/150-200 - Información básica</p>
               </div>
               <div className="bg-gray-50 p-3 rounded-lg inline-block ml-4">
                 <h4 className="font-bold text-gray-800 mb-1">🏢 Otros Sectores</h4>
                 <p className="text-sm text-gray-700">S/300 - Sitio profesional básico</p>
               </div>
             </div>
           </div>
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
                  <span className="text-5xl font-bold text-gray-900">S/150</span>
                  <span className="text-gray-600">una vez</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg text-gray-900 font-semibold">+ S/15</span>
                  <span className="text-gray-600">/mes listing (desde el 2do mes)</span>
                </div>
                <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mt-3">
                  🎉 Incluye listing GRATIS el primer mes
                </div>
                <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm px-3 py-2 rounded-lg mt-3">
                  <strong>💡 {pricing.description}:</strong> Incluye WhatsApp, horarios, fotos y formularios. 
                  Una solución profesional y accesible para tu negocio local.
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-2 py-1 rounded mt-2">
                  <strong>Nota:</strong> Para proyectos empresariales complejos (nivel corporativo nacional), 
                  manejamos cotizaciones en USD con contratos formales.
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-2 py-1 rounded mt-2">
                  <strong>Subdominio:</strong> Incluido gratis. Traslado de dominio propio: +S/15
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
                  <span className="text-5xl font-bold text-gray-900">S/{pricing.corporativa}</span>
                  <span className="text-gray-600">una vez</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg text-gray-900 font-semibold">+ S/15</span>
                  <span className="text-gray-600">/mes listing (desde el 2do mes)</span>
                </div>
                <div className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mt-3">
                  🚀 Más vendido
                </div>
                <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm px-3 py-2 rounded-lg mt-3">
                  <strong>Incluye:</strong> Sitio web completo + funcionalidades avanzadas + listing gratuito el primer mes. Se usará subdominio gratuito.
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-2 py-1 rounded mt-2">
                  <strong>Dominio propio:</strong> Traslado +S/15 (si ya tienes dominio comprado)
                </div>
                <div className="bg-red-50 border border-red-200 text-red-800 text-xs px-2 py-1 rounded mt-2">
                  <strong>Tienda virtual:</strong> Para e-commerce completo el precio es mayor debido a la complejidad técnica
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