'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Utensils, 
  Scissors, 
  ShoppingCart, 
  Stethoscope, 
  Shirt,
  Wrench,
  Users,
  Building
} from 'lucide-react';

interface BusinessType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const businessTypes: BusinessType[] = [
  {
    id: 'restaurantes',
    name: 'Restaurantes',
    icon: <Utensils className="w-8 h-8" />,
    description: 'Comida, delivery, reservas',
    color: 'bg-red-500'
  },
  {
    id: 'peluquerias',
    name: 'Peluquerías',
    icon: <Scissors className="w-8 h-8" />,
    description: 'Cortes, citas, servicios',
    color: 'bg-pink-500'
  },
  {
    id: 'tiendas',
    name: 'Tiendas',
    icon: <ShoppingCart className="w-8 h-8" />,
    description: 'Productos, catálogo, ventas',
    color: 'bg-blue-500'
  },
  {
    id: 'salud',
    name: 'Salud',
    icon: <Stethoscope className="w-8 h-8" />,
    description: 'Veterinarias, clínicas, citas',
    color: 'bg-green-500'
  },
  {
    id: 'lavanderias',
    name: 'Lavanderías',
    icon: <Shirt className="w-8 h-8" />,
    description: 'Lavado, recojo, entrega',
    color: 'bg-cyan-500'
  },
  {
    id: 'servicios',
    name: 'Servicios',
    icon: <Wrench className="w-8 h-8" />,
    description: 'Técnicos, reparaciones, mantenimiento',
    color: 'bg-orange-500'
  },
  {
    id: 'profesionales',
    name: 'Profesionales',
    icon: <Users className="w-8 h-8" />,
    description: 'Consultorías, asesorías, servicios',
    color: 'bg-purple-500'
  },
  {
    id: 'otros',
    name: 'Otros',
    icon: <Building className="w-8 h-8" />,
    description: 'Cualquier otro negocio',
    color: 'bg-gray-500'
  }
];

interface BusinessTypeSelectorProps {
  onBusinessTypeSelect: (businessType: string) => void;
  selectedType?: string;
}

export function BusinessTypeSelector({ onBusinessTypeSelect, selectedType }: BusinessTypeSelectorProps) {
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            ¿Qué tipo de negocio tienes?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecciona tu tipo de negocio para ver una proforma personalizada con ejemplos específicos para tu rubro
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {businessTypes.map((type) => (
            <Card 
              key={type.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 ${
                selectedType === type.id 
                  ? 'border-orange-500 bg-orange-50 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onMouseEnter={() => setHoveredType(type.id)}
              onMouseLeave={() => setHoveredType(null)}
              onClick={() => onBusinessTypeSelect(type.id)}
            >
              <CardContent className="p-4 text-center">
                <div className={`w-16 h-16 rounded-full ${type.color} flex items-center justify-center mx-auto mb-3 text-white transition-transform duration-300 ${
                  hoveredType === type.id || selectedType === type.id ? 'scale-110' : ''
                }`}>
                  {type.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {type.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedType && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => {
                const nextSection = document.getElementById('personalized-content');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver mi proforma personalizada
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}