import { ExternalLink, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WebComparisonProps {
  selectedCategory?: string;
}

// Ejemplos específicos por categoría
const categoryExamples = {
  'Lavanderías': {
    landingPage: {
      name: 'Lavandería Saori',
      url: 'https://www.saori.pe/',
      description: 'Página informativa con servicios de lavado y precios'
    },
    webCorporativa: {
      name: 'LaundryHeap',
      url: 'https://www.laundryheap.com/es-pe',
      description: 'Plataforma completa con reservas y recojo a domicilio'
    }
  },
  'Peluquerías/Barberías': {
    landingPage: {
      name: 'Barbería Maschio',
      url: 'https://www.barberiamaschio.com/',
      description: 'Galería de cortes y información de servicios'
    },
    webCorporativa: {
      name: 'Masters of Hair',
      url: 'https://mastersofhair.pe/',
      description: 'Sistema completo de reservas de citas'
    }
  },
  'Tiendas/Abarrotes': {
    landingPage: {
      name: 'Tienda favel',
      url: "https://www.favel.pe/",
      description: 'Catálogo de productos y horarios de atención'
    },
    webCorporativa: {
      name: 'Aje Perú',
      url: 'https://www.ajedelivery.pe/',
      description: 'Tienda online completa con carrito y pagos'
    }
  },
  'Veterinarias/Clínicas': {
    landingPage: {
      name: 'Veterinaria Social Vet',
      url: 'https://veterinariasocialvet.com/',
      description: 'Información de servicios veterinarios y contacto'
    },
    webCorporativa: {
      name: 'PetsLand',
      url: 'https://www.petsland.pe/',
      description: 'Sistema de citas veterinarias y historial médico'
    }
  },
  'Odontologías': {
    landingPage: {
      name: 'Clínica Odontológica Invisalign',
      url: 'https://invisaligndoctorlima.com/',
      description: 'Servicios dentales y galería de casos'
    },
    webCorporativa: {
      name: 'Dentalsdo',
      url: 'https://dentalsdo.com/',
      description: 'Reservas online y seguimiento de tratamientos'
    }
  },
  'Restaurantes': {
    landingPage: {
      name: 'Tantaperu',
      url: 'https://tantaperu.com/',
      description: 'Menú digital y información del restaurante'
    },
    webCorporativa: {
      name: 'Café Museo Lárco',
      url: 'https://cafe.museolarco.org/',
      description: 'Reservas de mesa y pedidos online'
    }
  },
  'Comida Rápida': {
    landingPage: {
      name: 'Tinajas',
      url: 'https://www.tinajas.pe/',
      description: 'Menú de pollos y promociones especiales'
    },
    webCorporativa: {
      name: 'Rokys',
      url: 'https://rokys.com/',
      description: 'Pedidos online con delivery integrado'
    }
  },
  'Servicios Generales': {
    landingPage: {
      name: 'Servicios de Generales ',
      url: 'https://serviciosgeneraleslima.com/',
      description: 'Información de servicios técnicos y contacto'
    },
    webCorporativa: {
      name: 'Sergelima',
      url: 'https://serviciosgeneraleslimaperu.com/',
      description: 'Reservas de servicios y seguimiento de trabajos'
    }
  },
  'Servicios Profesionales': {
    landingPage: {
      name: 'Psicoterapia Psicología',
      url: 'https://www.psicoterapiapsicologia.com/',
      description: 'Servicios profesionales y áreas de especialización'
    },
    webCorporativa: {
      name: 'SynergyHub',
      url: 'https://synergyhub.com.pe/',
      description: 'Citas online y gestión de casos legales'
    }
  }
};

export function WebComparison({ selectedCategory = 'Todos' }: WebComparisonProps) {
  // Obtener ejemplos según la categoría seleccionada
  const getExamples = () => {
    if (selectedCategory === 'Todos' || !categoryExamples[selectedCategory as keyof typeof categoryExamples]) {
      return {
        landingPage: {
          name: 'Saori.pe',
          url: 'https://www.saori.pe',
          description: 'Página informativa con servicios, precios y contacto'
        },
        webCorporativa: {
          name: 'LaundryHeap',
          url: 'https://www.laundryheap.com/es-pe',
          description: 'Plataforma completa con reservas y gestión online'
        }
      };
    }
    return categoryExamples[selectedCategory as keyof typeof categoryExamples];
  };

  const examples = getExamples();
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Landing Page o Web Corporativa?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Entende la diferencia entre nuestras opciones web y elige la que mejor se adapte a tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Landing Page */}
          <Card className="border-2 border-blue-200 shadow-lg">
            <CardHeader className="bg-blue-50 text-center">
              <CardTitle className="text-2xl font-bold text-blue-800">
                Landing Page
              </CardTitle>
              <div className="text-3xl font-bold text-blue-600 mt-2">
                S/150
                <span className="text-sm font-normal text-gray-600 block">pago único</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Ejemplo: {examples.landingPage.name}</h4>
                <button 
                  onClick={() => window.open(examples.landingPage.url, '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-medium">Ver ejemplo: {examples.landingPage.name}</span>
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  {examples.landingPage.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Incluye:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Información de servicios y precios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Galería de fotos (hasta 10)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Información de contacto y ubicación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Botón WhatsApp directo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Responsive (móvil y desktop)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-500">Sin sistema de reservas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-500">Sin base de datos</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  Ideal para: Negocios que necesitan presencia web básica y contacto directo
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Web Corporativa */}
          <Card className="border-2 border-purple-200 shadow-lg">
            <CardHeader className="bg-purple-50 text-center">
              <CardTitle className="text-2xl font-bold text-purple-800">
                Web Corporativa
              </CardTitle>
              <div className="text-3xl font-bold text-purple-600 mt-2">
                S/300
                <span className="text-sm font-normal text-gray-600 block">pago único</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Ejemplo: {examples.webCorporativa.name}</h4>
                <button 
                  onClick={() => window.open(examples.webCorporativa.url, '_blank')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-medium">Ver ejemplo: {examples.webCorporativa.name}</span>
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  {examples.webCorporativa.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Incluye todo de Landing Page +:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Sistema de reservas online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Base de datos de clientes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Panel de administración</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Calendario de citas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Notificaciones automáticas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Reportes y estadísticas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Integración con pagos online</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800 font-medium">
                  Ideal para: Negocios que necesitan automatizar reservas y gestionar clientes
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿No estás seguro cuál elegir?
            </h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo te ayuda a decidir la mejor opción según tu tipo de negocio y necesidades específicas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-800 font-medium">✓ Consultoría gratuita</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-medium">✓ Sin costos ocultos</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-full">
                <span className="text-purple-800 font-medium">✓ Soporte incluido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}