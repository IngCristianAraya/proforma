'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Store } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo de Tubarrio.pe */}
          <div className="mb-8">
            <img 
              src="/logos/tubarriope_logo_penegro2.webp" 
              alt="Tubarrio.pe - Conectando negocios locales" 
              className="h-16 md:h-20 mx-auto mb-4"
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Store className="w-4 h-4" />
            <span className="text-sm font-medium">Propuesta Comercial 2025</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tu Negocio Visible en el Barrio
            <span className="block text-2xl md:text-4xl mt-2 font-normal">Listing + Desarrollo Web</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Aparece en nuestro <span className="font-bold">directorio de servicios locales</span> desde <span className="font-bold">S/15 al mes</span> o ten tu <span className="font-bold">página web profesional</span> desde <span className="font-bold">S/150 + S/15/mes</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-[#ff7200] hover:bg-[#e66600] text-white text-lg px-8 py-6 font-semibold shadow-xl"
            >
              Solicita Tu Proforma Personalizada
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Calcula Tu Ahorro
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">S/15</div>
              <div className="text-sm">Listing básico/mes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">S/150</div>
              <div className="text-sm">Landing Page + S/15/mes listing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">24-48h</div>
              <div className="text-sm">Para estar online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}