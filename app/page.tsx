'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSolution } from '@/components/landing/ProblemSolution';
import { ComparisonTable } from '@/components/landing/ComparisonTable';
import { PricingPlans } from '@/components/landing/PricingPlans';
import { WebComparison } from '@/components/landing/WebComparison';
import { SavingsCalculator } from '@/components/landing/SavingsCalculator';
import { InteractiveQuote } from '@/components/landing/InteractiveQuote';
import { RegistrationProcess } from '@/components/landing/RegistrationProcess';
import { FAQ } from '@/components/landing/FAQ';
import { ContactForm } from '@/components/landing/ContactForm';
import { BusinessTypeSelector } from '@/components/landing/BusinessTypeSelector';
import { Footer } from '@/components/landing/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('otros');

  return (
    <main className="min-h-screen">
      <HeroSection businessType={selectedBusinessType} />
      
      {/* Selector de tipo de negocio */}
      <BusinessTypeSelector 
        onBusinessTypeSelect={setSelectedBusinessType}
        selectedType={selectedBusinessType}
      />
      
      {/* Contenido personalizado según el tipo de negocio */}
      <ProblemSolution businessType={selectedBusinessType} />
      
      {/* Solo mostrar comparativa si es relevante */}
      {(selectedBusinessType === 'restaurantes' || selectedBusinessType === 'tiendas') && (
        <ComparisonTable businessType={selectedBusinessType} />
      )}
      
      <WebComparison businessType={selectedBusinessType} />
      <PricingPlans businessType={selectedBusinessType} />
      <InteractiveQuote businessType={selectedBusinessType} />
      <SavingsCalculator businessType={selectedBusinessType} />
      <RegistrationProcess />
      <FAQ businessType={selectedBusinessType} />
      <ContactForm />
      <Footer />
      <Toaster />
    </main>
  );
}