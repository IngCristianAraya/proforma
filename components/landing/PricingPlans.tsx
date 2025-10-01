import { Button } from '@/components/ui/button';
import { Check, MapPin, Star, Globe, ShoppingCart, Building } from 'lucide-react';

export function PricingPlans() {
  const plans = [
    {
      name: 'Listing Básico',
      price: 15,
      icon: MapPin,
      description: 'Aparece en nuestro directorio',
      popular: false,
      features: [
        'Perfil completo del negocio',
        'Descripción del servicio',
        'Hasta 5 imágenes',
        'Horarios de atención',
        'Ubicación en mapa',
        'Botón de WhatsApp',
        'Redes sociales',
        'Rating y reseñas'
      ]
    },
    {
      name: 'Listing + Banner',
      price: 25,
      icon: Star,
      description: 'Destacado en página principal',
      popular: true,
      features: [
        'Todo del Listing Básico +',
        'Banner en página principal',
        'Mayor visibilidad',
        'Posición destacada',
        'Aparece en búsquedas top',
        'Estadísticas de visitas',
        'Soporte prioritario'
      ]
    },
    {
      name: 'Landing Page',
      price: 150,
      icon: Globe,
      description: 'Página web informativa',
      popular: false,
      oneTime: true,
      additionalCost: 15,
      features: [
        'Diseño personalizado',
        'Página web completa',
        'Subdominio incluido',
        'Tecnología moderna',
        'Responsive design',
        'SEO optimizado',
        'Sin hosting adicional',
        'Despliegue en Vercel',
        '+ S/15/mes para listing en web'
      ]
    }
  ];

  const additionalServices = [
    {
      name: 'Web Corporativa',
      price: 300,
      icon: Building,
      description: 'Sitio web completo con backend',
      additionalCost: 15,
      features: [
        'Diseño corporativo completo',
        'Sistema de login',
        'Base de datos',
        'Panel administrativo',
        'Subdominio incluido',
        'Dominio personalizado (+S/20)',
        '+ S/15/mes para listing en web'
      ]
    },
    {
      name: 'Tienda Virtual',
      price: 500,
      icon: ShoppingCart,
      description: 'E-commerce completo',
      additionalCost: 15,
      features: [
        'Catálogo de productos',
        'Carrito de compras',
        'Pasarela de pagos',
        'Gestión de inventario',
        'Panel de administración',
        'Reportes de ventas',
        '+ S/15/mes para listing en web'
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Servicios y Precios de TUBARRIO.PE
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Desde listing básico hasta desarrollo web completo. Elige lo que necesita tu negocio.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            <Check className="w-4 h-4" />
            <span>Subdominios incluidos • Sin hosting adicional</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-[#ff7200] ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#ff7200] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Más Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-[#ff7200] text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">S/{plan.price}</span>
                      <span className="text-gray-600">
                        {plan.oneTime ? 'pago único' : '/mes'}
                      </span>
                    </div>
                    {plan.oneTime && plan.additionalCost && (
                      <p className="text-sm text-orange-600 font-medium mt-1">
                        + S/{plan.additionalCost}/mes para listing
                      </p>
                    )}
                    {!plan.oneTime && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        Sin comisiones por venta
                      </p>
                    )}
                  </div>

                  <Button
                    onClick={scrollToContact}
                    className={`w-full mb-6 ${
                      plan.popular
                        ? 'bg-[#ff7200] hover:bg-[#e66600] text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    size="lg"
                  >
                    {plan.oneTime ? 'Solicitar Cotización' : 'Empezar Ahora'}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Servicios adicionales de desarrollo web */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Servicios de Desarrollo Web</h3>
            <p className="text-gray-600">Soluciones completas para hacer crecer tu negocio online</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{service.name}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <span className="text-2xl font-bold text-gray-900">S/{service.price}</span>
                      <p className="text-sm text-gray-600">pago único</p>
                      {service.additionalCost && (
                        <p className="text-xs text-orange-600 font-medium">
                          + S/{service.additionalCost}/mes listing
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sección de inmuebles */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Building className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Sección de Inmuebles</h3>
            <p className="text-gray-600 mb-4">Publica alquileres y ventas de propiedades</p>
            <div className="flex items-baseline justify-center gap-1 mb-6">
              <span className="text-3xl font-bold text-gray-900">S/25</span>
              <span className="text-gray-600">/mes por propiedad</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Alquileres incluye:</h4>
              <ul className="space-y-2">
                {['Fotos de la propiedad', 'Descripción detallada', 'Precio y condiciones', 'Ubicación exacta', 'Contacto directo', 'Características del inmueble'].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">Ventas incluye:</h4>
              <ul className="space-y-2">
                {['Galería de imágenes', 'Precio de venta', 'Documentación legal', 'Tour virtual (opcional)', 'Contacto con agente', 'Historial de la propiedad'].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado para tu negocio?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="border-[#ff7200] text-[#ff7200] hover:bg-[#ff7200] hover:text-white"
          >
            Contacta con Ventas
          </Button>
        </div>
      </div>
    </section>
  );
}