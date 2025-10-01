'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

interface HeroSectionProps {
  businessType?: string;
}

export function HeroSection({ businessType = 'otros' }: HeroSectionProps) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Función para obtener precios según el tipo de negocio
  const getBusinessPricing = (type: string) => {
    switch (type.toLowerCase()) {
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

  const pricing = getBusinessPricing(businessType);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>+1000 negocios confían en nosotros</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Tu negocio
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  online en 5 días
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                <span className="block font-semibold text-white text-2xl md:text-3xl mb-2">
                  Haz que tu negocio sea encontrado por vecinos en tu barrio
                </span>
                Página web profesional + WhatsApp integrado
                <span className="block font-semibold text-white mt-2">
                  Sin comisiones por venta
                </span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="font-semibold">Rápido</div>
                  <div className="text-sm text-gray-300">5 días listo</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-6 h-6 text-green-400" />
                <div>
                  <div className="font-semibold">Fácil</div>
                  <div className="text-sm text-gray-300">Como WhatsApp</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="font-semibold">Completo</div>
                  <div className="text-sm text-gray-300">Todo incluido</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const selectorSection = document.querySelector('[data-business-selector]');
                  selectorSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Ver mi proforma gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.open('https://wa.me/51901426737', '_blank')}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                📱 Escríbenos por WhatsApp
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Sin permanencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Soporte incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Actualizaciones gratis</span>
                </div>
              </div>
              
              {/* Payment Trust Note */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-300 text-sm font-medium text-center">
                  💳 Pago seguro por Yape o Plin. Sin compromiso.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ¿Cuánto cuesta?
                  </h3>
                  <p className="text-gray-300">Precios transparentes, sin sorpresas</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Landing Page</span>
                      <span className="text-2xl font-bold text-yellow-400">S/150</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">+ S/15/mes listing (desde 2do mes)</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Web Corporativa</span>
                      <span className="text-2xl font-bold text-orange-400">S/{pricing.corporativa}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">+ S/15/mes listing (desde 2do mes)</p>
                    <p className="text-xs text-gray-400 mt-1">{pricing.features}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-300">
                    🎉 <span className="font-semibold text-white">Listing básico gratis</span> el primer mes
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    *Landing page y web corporativa se cobran desde el inicio
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}