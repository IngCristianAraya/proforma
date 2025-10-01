import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
  const testimonials = [
    {
      business: 'Cafetería Doña Rosa',
      owner: 'Rosa Martínez',
      category: 'Gastronomía',
      location: 'San Isidro',
      before: 'Solo venta local, clientes limitados',
      after: '40% más ventas con pedidos online',
      quote: 'En una semana ya recuperé la inversión del mes. Ahora recibo pedidos incluso cuando estoy cerrada para el día siguiente.',
      rating: 5,
      sales: '+40%'
    },
    {
      business: 'Bodega El Ahorro',
      owner: 'Carlos Quispe',
      category: 'Retail',
      location: 'Miraflores',
      before: 'Competía con grandes cadenas',
      after: 'Destaca en su barrio específico',
      quote: 'Mis clientes me encuentran fácil y me llaman directo. Ya no me pierdo entre miles de negocios como en las otras apps.',
      rating: 5,
      sales: '+35%'
    },
    {
      business: 'Barbería Estilo Urbano',
      owner: 'Miguel Torres',
      category: 'Servicios',
      location: 'Barranco',
      before: 'Dependía del boca a boca',
      after: 'Sistema de citas automatizado',
      quote: 'Mis clientes reservan online a cualquier hora. He reducido las cancelaciones y siempre tengo la agenda llena.',
      rating: 5,
      sales: '+50%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de Éxito Reales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce cómo otros emprendedores han transformado sus negocios
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      {testimonial.sales} ventas
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonial.business}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.category} • {testimonial.location}
                  </p>
                </div>

                <div className="mb-4 space-y-3">
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                    <div className="text-xs font-semibold text-red-700 mb-1">Antes:</div>
                    <div className="text-sm text-gray-700">{testimonial.before}</div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                    <div className="text-xs font-semibold text-green-700 mb-1">Después:</div>
                    <div className="text-sm text-gray-700">{testimonial.after}</div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#ff7200] opacity-20 absolute -top-2 -left-1" />
                  <blockquote className="text-gray-700 italic pl-6 relative">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-3 pl-6">
                    <div className="font-semibold text-gray-900">{testimonial.owner}</div>
                    <div className="text-xs text-gray-600">Propietario</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">4.9/5 de satisfacción promedio</span>
          </div>
        </div>
      </div>
    </section>
  );
}