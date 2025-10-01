'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSolution } from '@/components/landing/ProblemSolution';
import { ComparisonTable } from '@/components/landing/ComparisonTable';
import { PricingPlans } from '@/components/landing/PricingPlans';
import { BusinessExamples } from '@/components/landing/BusinessExamples';
import { WebComparison } from '@/components/landing/WebComparison';
import { SavingsCalculator } from '@/components/landing/SavingsCalculator';
import { RegistrationProcess } from '@/components/landing/RegistrationProcess';
import { FAQ } from '@/components/landing/FAQ';
import { ContactForm } from '@/components/landing/ContactForm';
import { Footer } from '@/components/landing/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <ComparisonTable />
      <SavingsCalculator />
      <PricingPlans />
      <BusinessExamples onCategoryChange={setSelectedCategory} />
      <WebComparison selectedCategory={selectedCategory} />
      <RegistrationProcess />
      <FAQ />
      <ContactForm />
      <Footer />
      <Toaster />
    </main>
  );
}