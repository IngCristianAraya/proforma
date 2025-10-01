import { Shirt, UtensilsCrossed, Scissors, Store, ShoppingBag, Coffee, Wrench, Car, Home, Stethoscope, Heart, Utensils, Pizza, UserCheck, Calculator, Grid3X3, ExternalLink, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface BusinessExamplesProps {
  onCategoryChange?: (category: string) => void;
}

export function BusinessExamples({ onCategoryChange }: BusinessExamplesProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    // Notificar al componente padre sobre el cambio
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const categories = [
    { id: 'Todos', name: 'Todos', icon: Grid3X3 },
    { id: 'Lavanderías', name: 'Lavanderías', icon: Shirt },
    { id: 'Peluquerías/Barberías', name: 'Peluquerías/Barberías', icon: Scissors },
    { id: 'Tiendas/Abarrotes', name: 'Tiendas/Abarrotes', icon: Store },
    { id: 'Veterinarias/Clínicas', name: 'Veterinarias/Clínicas', icon: Heart },
    { id: 'Odontologías', name: 'Odontologías', icon: Stethoscope },
    { id: 'Restaurantes', name: 'Restaurantes', icon: UtensilsCrossed },
    { id: 'Comida Rápida', name: 'Comida Rápida', icon: Pizza },
    { id: 'Servicios Generales', name: 'Servicios Generales', icon: Wrench },
    { id: 'Servicios Profesionales', name: 'Servicios Profesionales', icon: UserCheck }
  ];

  const businessExamples = [
    // Lavanderías
    {
      icon: Shirt,
      name: 'Lavandería "Limpieza Express"',
      category: 'Lavanderías',
      needs: [
        'LANDING PAGE (informativa) o PÁGINA WEB COMPLETA (con reservas)',
        'Horarios de servicio visible',
        'Precios por kg y tipos de lavado',
        'Ubicación con mapa',
        'Contacto directo por WhatsApp'
      ],
      solutions: [
        'Perfil completo en TUBARRIO.PE',
        'Hasta 5 fotos del local y servicios',
        'Botón WhatsApp directo',
        'Ubicación exacta en mapa',
        'Horarios de atención actualizados',
        'Rating y reseñas de clientes',
        'LANDING PAGE como Saori.pe (S/150 pago único)',
        'WEB CORPORATIVA como LaundryHeap (S/300 pago único)'
      ],
      color: 'bg-blue-600',
      webExample: { name: 'Saori.pe', url: 'www.saori.pe', type: 'landing' }
    },
    
    // Restaurantes
    {
      icon: UtensilsCrossed,
      name: 'Restaurante "Sabor Criollo"',
      category: 'Restaurantes',
      needs: [
        'LANDING PAGE (informativa) o WEB CORPORATIVA (con reservas)',
        'Menú digital actualizado',
        'Fotos atractivas de platos',
        'Pedidos por delivery',
        'Competir con Rappi/PedidosYa'
      ],
      solutions: [
        'Listing destacado con banner (S/25/mes)',
        'Galería de platos sin límite',
        'Sin comisiones por venta',
        'Contacto directo con clientes',
        'Promociones propias',
        'LANDING PAGE informativa (S/150 pago único)',
        'WEB CORPORATIVA con pedidos online (S/300 pago único)'
      ],
      color: 'bg-red-600'
    },

    // Peluquerías/Barberías
    {
      icon: Scissors,
      name: 'Barbería "Estilo Urbano"',
      category: 'Peluquerías/Barberías',
      needs: [
        'LANDING PAGE (portfolio) o WEB CORPORATIVA (con reservas)',
        'Servicios y lista de precios',
        'Portfolio de trabajos',
        'Reservas de citas',
        'Ubicación exacta'
      ],
      solutions: [
        'Perfil profesional completo',
        'Galería de trabajos realizados',
        'Información de servicios y precios',
        'Botón WhatsApp para citas',
        'Redes sociales integradas',
        'LANDING PAGE con portfolio (S/150 pago único)',
        'WEB CORPORATIVA con sistema de citas (S/300 pago único)'
      ],
      color: 'bg-purple-600'
    },

    // Tiendas/Abarrotes
    {
      icon: Store,
      name: 'Bodega "El Ahorro"',
      category: 'Tiendas/Abarrotes',
      needs: [
        'TIENDA VIRTUAL o LANDING PAGE (catálogo)',
        'Catálogo de productos básicos',
        'Pedidos por WhatsApp',
        'Delivery local',
        'Competir con apps de delivery'
      ],
      solutions: [
        'Listing básico (S/15/mes)',
        'Descripción de productos principales',
        'Sin comisiones por pedido',
        'Contacto directo con clientes',
        'Horarios de delivery claros',
        'LANDING PAGE con catálogo (S/150 pago único)',
        'TIENDA VIRTUAL completa (S/500 pago único)'
      ],
      color: 'bg-green-600'
    },

    // Veterinarias/Clínicas
    {
      icon: Heart,
      name: 'Veterinaria "Amigos Peludos"',
      category: 'Veterinarias/Clínicas',
      needs: [
        'LANDING PAGE (informativa) o WEB CORPORATIVA (citas online)',
        'Servicios veterinarios disponibles',
        'Horarios de emergencia',
        'Sistema de citas',
        'Información de contacto'
      ],
      solutions: [
        'Perfil profesional veterinario',
        'Servicios y especialidades',
        'Horarios de atención y emergencias',
        'WhatsApp para citas urgentes',
        'Ubicación con referencias',
        'LANDING PAGE informativa (S/150 pago único)',
        'WEB CORPORATIVA con sistema de citas (S/300 pago único)'
      ],
      color: 'bg-pink-600'
    },

    // Odontologías
    {
      icon: Stethoscope,
      name: 'Consultorio Dental "Sonrisa Perfecta"',
      category: 'Odontologías',
      needs: [
        'LANDING PAGE (informativa) o WEB CORPORATIVA (citas online)',
        'Tratamientos dentales disponibles',
        'Horarios de consulta',
        'Sistema de citas',
        'Información del consultorio'
      ],
      solutions: [
        'Perfil profesional odontológico',
        'Tratamientos y servicios dentales',
        'Horarios de atención claros',
        'WhatsApp para citas',
        'Ubicación con referencias',
        'LANDING PAGE informativa (S/150 pago único)',
        'WEB CORPORATIVA con sistema de citas (S/300 pago único)'
      ],
      color: 'bg-teal-600'
    },

    // Comida Rápida
    {
      icon: Pizza,
      name: 'Pollería "Dorado Crujiente"',
      category: 'Comida Rápida',
      needs: [
        'LANDING PAGE (menú) o WEB CORPORATIVA (pedidos online)',
        'Menú de comida rápida',
        'Precios actualizados',
        'Delivery rápido',
        'Competir con apps de delivery'
      ],
      solutions: [
        'Listing destacado con banner (S/25/mes)',
        'Menú digital completo',
        'Sin comisiones por pedido',
        'Contacto directo para delivery',
        'Promociones especiales',
        'LANDING PAGE con menú (S/150 pago único)',
        'WEB CORPORATIVA con pedidos online (S/300 pago único)'
      ],
      color: 'bg-orange-600'
    },

    // Servicios Generales
    {
      icon: Wrench,
      name: 'Electricista "Servicios Rápidos"',
      category: 'Servicios Generales',
      needs: [
        'LANDING PAGE (servicios) o WEB CORPORATIVA (citas)',
        'Disponibilidad 24/7',
        'Tipos de servicios',
        'Zona de cobertura',
        'Contacto inmediato'
      ],
      solutions: [
        'Perfil destacado en directorio',
        'Servicios detallados',
        'Zona de cobertura visible',
        'WhatsApp directo para emergencias',
        'Rating de trabajos anteriores',
        'LANDING PAGE con servicios (S/150 pago único)',
        'WEB CORPORATIVA con sistema de citas (S/300 pago único)'
      ],
      color: 'bg-yellow-600'
    },

    {
      icon: Car,
      name: 'Taller "AutoFix"',
      category: 'Servicios Generales',
      needs: [
        'LANDING PAGE (servicios) o WEB CORPORATIVA (citas online)',
        'Servicios especializados',
        'Precios transparentes',
        'Ubicación del taller',
        'Horarios de atención'
      ],
      solutions: [
        'Listing completo con especialidades',
        'Fotos del taller y trabajos',
        'Lista de servicios y precios',
        'Mapa con ubicación exacta',
        'Contacto directo por WhatsApp',
        'LANDING PAGE con servicios (S/150 pago único)',
        'WEB CORPORATIVA con citas online (S/300 pago único)'
      ],
      color: 'bg-gray-600'
    },

    {
      icon: Home,
      name: 'Albañil "Construcciones Pérez"',
      category: 'Servicios Generales',
      needs: [
        'LANDING PAGE (portfolio) o WEB CORPORATIVA (presupuestos)',
        'Portfolio de trabajos',
        'Tipos de construcción',
        'Presupuestos rápidos',
        'Referencias de clientes'
      ],
      solutions: [
        'Galería de proyectos realizados',
        'Servicios de construcción detallados',
        'Contacto directo para presupuestos',
        'Sistema de reseñas integrado',
        'Zona de trabajo especificada',
        'LANDING PAGE con portfolio (S/150 pago único)',
        'WEB CORPORATIVA con sistema de presupuestos (S/300 pago único)'
      ],
      color: 'bg-orange-600'
    },

    // Servicios Profesionales
    {
      icon: UserCheck,
      name: 'Psicólogo "Mente Sana"',
      category: 'Servicios Profesionales',
      needs: [
        'LANDING PAGE (informativa) o WEB CORPORATIVA (citas online)',
        'Especialidades psicológicas',
        'Horarios de consulta',
        'Sistema de citas confidencial',
        'Información profesional'
      ],
      solutions: [
        'Perfil profesional certificado',
        'Especialidades y enfoques terapéuticos',
        'Horarios de atención flexibles',
        'WhatsApp para citas discretas',
        'Ubicación del consultorio',
        'LANDING PAGE informativa (S/150 pago único)',
        'WEB CORPORATIVA con sistema de citas (S/300 pago único)'
      ],
      color: 'bg-indigo-600'
    },

    {
      icon: Calculator,
      name: 'Contador "Números Exactos"',
      category: 'Servicios Profesionales',
      needs: [
        'LANDING PAGE (servicios) o WEB CORPORATIVA (gestión de clientes)',
        'Servicios contables disponibles',
        'Experiencia y certificaciones',
        'Contacto profesional',
        'Horarios de atención'
      ],
      solutions: [
        'Perfil profesional contable',
        'Servicios: declaraciones, libros, asesoría',
        'Certificaciones y experiencia',
        'WhatsApp para consultas',
        'Horarios de oficina claros',
        'LANDING PAGE con servicios (S/150 pago único)',
        'WEB CORPORATIVA con gestión de clientes (S/300 pago único)'
      ],
      color: 'bg-slate-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escoge tu Negocio y Mira las Posibilidades de Crecimiento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo negocios como el tuyo han transformado su presencia digital y aumentado sus ventas sin comisiones
          </p>
        </div>

        {/* Category Dropdown Menu */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-200 rounded-xl text-gray-700 font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-lg hover:shadow-xl min-w-[280px] justify-between"
            >
              <div className="flex items-center gap-3">
                {(() => {
                  const selectedCat = categories.find(cat => cat.id === selectedCategory);
                  const IconComponent = selectedCat?.icon || Grid3X3;
                  return (
                    <>
                      <IconComponent className="w-5 h-5 text-blue-600" />
                      <span className="text-lg">{selectedCat?.name || 'Todos'}</span>
                    </>
                  );
                })()}
              </div>
              <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
                        selectedCategory === category.id ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${selectedCategory === category.id ? 'text-blue-600' : 'text-gray-500'}`} />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Business Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {businessExamples.filter(example => selectedCategory === 'Todos' || example.category === selectedCategory).map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-0">
                <div className={`${example.color} p-6 text-white shadow-lg`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-white/20">
                      <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white uppercase tracking-wide drop-shadow-sm">{example.category}</div>
                      <h3 className="text-lg font-bold text-white drop-shadow-md">{example.name}</h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Necesitan:</h4>
                    <ul className="space-y-1">
                      {example.needs.map((need, nIndex) => (
                        <li key={nIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#ff7200] mb-2 text-sm">Nosotros ofrecemos:</h4>
                    <ul className="space-y-1">
                      {example.solutions.map((solution, sIndex) => (
                        <li key={sIndex} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-[#ff7200] mt-1">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Web Example Button */}
                  {example.webExample && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <button
                        onClick={() => window.open(`https://${example.webExample.url}`, '_blank')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver ejemplo: {example.webExample.url}
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Show message when no examples found */}
        {businessExamples.filter(example => selectedCategory === 'Todos' || example.category === selectedCategory).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay ejemplos disponibles para esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}