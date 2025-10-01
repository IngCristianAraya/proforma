'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                Página web profesional + WhatsApp integrado
                <span className="block font-semibold text-white">
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
                onClick={() => window.open('https://wa.me/51999999999', '_blank')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2"
              >
                WhatsApp directo
              </button>
            </div>

            {/* Trust Indicators */}
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
                      <span className="text-2xl font-bold text-yellow-400">S/165</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">+ S/15/mes mantenimiento</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Web Corporativa</span>
                      <span className="text-2xl font-bold text-orange-400">S/364</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">+ S/15/mes mantenimiento</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-300">
                    🎉 <span className="font-semibold text-white">Primer mes gratis</span> para probar
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