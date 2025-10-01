import { ExternalLink, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WebComparisonProps {
  selectedCategory?: string;
  businessType?: string;
}

// Función para obtener precios según el tipo de negocio
const getBusinessPricing = (type: string) => {
  switch (type?.toLowerCase()) {
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

// Ejemplos específicos por categoría simplificados
const categoryExamples = {
  'restaurantes': {
    landingPage: {
      name: 'Tantaperu',
      url: 'https://tantaperu.com/',
      description: 'Menú digital y información del restaurante'
    },
    webCorporativa: {
      name: 'Rokys',
      url: 'https://rokys.com/',
      description: 'Pedidos online con delivery integrado'
    }
  },
  'peluquerias': {
    landingPage: {
      name: 'Barbería Maschio',
      url: 'https://www.barberiamaschio.com/',
      description: 'Galería de cortes y servicios'
    },
    webCorporativa: {
      name: 'Masters of Hair',
      url: 'https://mastersofhair.pe/',
      description: 'Sistema de reservas de citas online'
    }
  },
  'lavanderias': {
    landingPage: {
      name: 'Lavandería Saori',
      url: 'https://www.saori.pe/',
      description: 'Servicios de lavado y precios'
    },
    webCorporativa: {
      name: 'LaundryHeap',
      url: 'https://www.laundryheap.com/es-pe',
      description: 'Recojo y entrega a domicilio'
    }
  },
  'tiendas': {
    landingPage: {
      name: 'Tienda Favel',
      url: "https://www.favel.pe/",
      description: 'Catálogo de productos'
    },
    webCorporativa: {
      name: 'Aje Delivery',
      url: 'https://www.ajedelivery.pe/',
      description: 'Tienda online con carrito de compras'
    }
  },
  'salud': {
    landingPage: {
      name: 'Veterinaria Social Vet',
      url: 'https://veterinariasocialvet.com/',
      description: 'Servicios veterinarios y contacto'
    },
    webCorporativa: {
      name: 'PetsLand',
      url: 'https://www.petsland.pe/',
      description: 'Citas veterinarias online'
    }
  }
};

export function WebComparison({ selectedCategory = 'Todos', businessType = 'general' }: WebComparisonProps) {
  // Obtener precios según el tipo de negocio
  const pricing = getBusinessPricing(businessType);
  
  // Obtener ejemplos según el tipo de negocio
  const getExamples = () => {
    const key = businessType as keyof typeof categoryExamples;
    if (categoryExamples[key]) {
      return categoryExamples[key];
    }
    
    // Ejemplo por defecto
    return {
      landingPage: {
        name: 'Negocio Local',
        url: '#',
        description: 'Información básica de tu negocio'
      },
      webCorporativa: {
        name: 'Negocio Digital',
        url: '#',
        description: 'Plataforma completa con funcionalidades avanzadas'
      }
    };
  };

  const examples = getExamples();
  
  return (
    <section className="py-16 bg-slate-900" id="personalized-content">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Qué opción necesitas?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Elige la solución perfecta para tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Landing Page */}
          <Card className="border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-center text-white">
              <CardTitle className="text-2xl font-bold">
                Landing Page
              </CardTitle>
              <div className="text-3xl font-bold mt-2">
                S/150
                <span className="text-sm font-normal block opacity-90">pago único + S/15/mes listing</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {examples.landingPage.url !== '#' && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Ejemplo: {examples.landingPage.name}</h4>
                  <button 
                    onClick={() => window.open(examples.landingPage.url, '_blank')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-medium">Ver ejemplo</span>
                  </button>
                  <p className="text-sm text-gray-600 mt-2">
                    {examples.landingPage.description}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-4">Perfecto para:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Mostrar tus servicios y precios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Galería de fotos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">WhatsApp directo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Información de contacto</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">
                    Ideal si quieres presencia online básica y que te contacten por WhatsApp
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Web Corporativa */}
          <Card className="border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-center text-white">
              <CardTitle className="text-2xl font-bold">
                Web Corporativa
              </CardTitle>
              <div className="text-3xl font-bold mt-2">
                S/{pricing.corporativa}
                <span className="text-sm font-normal block opacity-90">pago único + S/15/mes listing</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {examples.webCorporativa.url !== '#' && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Ejemplo: {examples.webCorporativa.name}</h4>
                  <button 
                    onClick={() => window.open(examples.webCorporativa.url, '_blank')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-medium">Ver ejemplo</span>
                  </button>
                  <p className="text-sm text-gray-600 mt-2">
                    {examples.webCorporativa.description}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-4">Perfecto para:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Todo lo de Landing Page +</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Sistema de reservas/citas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Catálogo de productos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Formularios personalizados</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800 font-medium">
                    Ideal si quieres automatizar procesos y tener más funcionalidades
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tienda Virtual - Solo si es relevante */}
        {(businessType === 'tiendas' || businessType === 'restaurantes') && (
          <div className="mt-8 max-w-md mx-auto">
            <Card className="border-2 border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-center text-white">
                <CardTitle className="text-2xl font-bold">
                  Tienda Virtual
                </CardTitle>
                <div className="text-3xl font-bold mt-2">
                  S/564
                  <span className="text-sm font-normal block opacity-90">pago único + S/15/mes</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-4">Incluye:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Carrito de compras</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Pagos online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-sm">Gestión de inventario</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      Para vender productos online con pagos automáticos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Solicitar mi proforma personalizada
          </button>
        </div>
      </div>
    </section>
  );
}