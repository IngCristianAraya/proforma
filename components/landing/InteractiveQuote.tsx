'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Globe, 
  ShoppingCart, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Search,
  Mail,
  Smartphone,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Download
} from 'lucide-react';

interface QuoteModule {
  id: string;
  name: string;
  description: string;
  price: number;
  timeWeeks: number;
  icon: React.ReactNode;
  benefits: string[];
  category: 'core' | 'ecommerce' | 'marketing' | 'advanced';
  businessTypes: string[];
}

interface BusinessPricing {
  basePrice: number;
  multiplier: number;
  description: string;
}

const businessPricingMap: Record<string, BusinessPricing> = {
  'restaurantes': { basePrice: 600, multiplier: 1.2, description: 'Restaurantes y delivery' },
  'tiendas': { basePrice: 500, multiplier: 1.1, description: 'Tiendas y e-commerce' },
  'peluquerias': { basePrice: 400, multiplier: 1.0, description: 'Peluquerías y salones' },
  'lavanderias': { basePrice: 450, multiplier: 1.05, description: 'Lavanderías y servicios' },
  'salud': { basePrice: 450, multiplier: 1.05, description: 'Clínicas y consultorios' },
  'servicios': { basePrice: 350, multiplier: 0.9, description: 'Servicios técnicos' },
  'profesionales': { basePrice: 350, multiplier: 0.9, description: 'Profesionales independientes' },
  'otros': { basePrice: 300, multiplier: 0.8, description: 'Otros sectores' }
};

const quoteModules: QuoteModule[] = [
  {
    id: 'listing-basico',
    name: 'Listing Básico',
    description: 'Presencia básica en el directorio de TuBarrio.pe',
    price: 15,
    timeWeeks: 0.5,
    icon: <Globe className="w-6 h-6" />,
    benefits: ['Perfil en directorio', 'Información de contacto', 'Horarios de atención', 'Ubicación en mapa'],
    category: 'core',
    businessTypes: ['todos']
  },
  {
    id: 'listing-banner',
    name: 'Listing + Banner',
    description: 'Listing básico con banner promocional destacado',
    price: 25,
    timeWeeks: 0.5,
    icon: <BarChart3 className="w-6 h-6" />,
    benefits: ['Todo lo del Listing Básico', 'Banner promocional', 'Mayor visibilidad', 'Posición destacada'],
    category: 'marketing',
    businessTypes: ['todos']
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Página web profesional + Listing incluido',
    price: 150,
    timeWeeks: 1,
    icon: <Globe className="w-6 h-6" />,
    benefits: ['Página web profesional', 'Diseño responsive', 'Formulario de contacto', 'Listing básico incluido (S/15/mes)'],
    category: 'core',
    businessTypes: ['todos']
  },
  {
    id: 'web-corporativa',
    name: 'Web Corporativa',
    description: 'Sitio web completo + Listing incluido',
    price: 350,
    timeWeeks: 2,
    icon: <Globe className="w-6 h-6" />,
    benefits: ['Sitio web completo', 'Múltiples páginas', 'Galería de imágenes', 'Listing básico incluido (S/15/mes)'],
    category: 'core',
    businessTypes: ['todos']
  },
  {
    id: 'tienda-virtual',
    name: 'Tienda Virtual',
    description: 'E-commerce completo + Listing incluido',
    price: 500,
    timeWeeks: 3,
    icon: <ShoppingCart className="w-6 h-6" />,
    benefits: ['Tienda online completa', 'Carrito de compras', 'Gestión de productos', 'Listing básico incluido (S/15/mes)'],
    category: 'ecommerce',
    businessTypes: ['tiendas', 'todos']
  }
];

interface InteractiveQuoteProps {
  businessType: string;
}

export function InteractiveQuote({ businessType }: InteractiveQuoteProps) {
  // Inicializar con listing básico por defecto
  const [selectedModules, setSelectedModules] = useState<string[]>(['listing-basico']);
  const [currentStep, setCurrentStep] = useState<'modules' | 'summary' | 'timeline'>('modules');
  
  const businessPricing = businessPricingMap[businessType] || businessPricingMap['otros'];
  
  const filteredModules = quoteModules.filter(module => 
    module.businessTypes.includes('todos') || module.businessTypes.includes(businessType)
  );

  const selectedModuleData = quoteModules.filter(module => selectedModules.includes(module.id));
  
  // Calcular precios considerando servicios mensuales vs únicos
  const monthlyServices = selectedModuleData.filter(module => 
    module.id === 'listing-basico' || module.id === 'listing-banner'
  );
  const oneTimeServices = selectedModuleData.filter(module => 
    module.id !== 'listing-basico' && module.id !== 'listing-banner'
  );

  const monthlyTotal = monthlyServices.reduce((sum, module) => sum + module.price, 0);
  const oneTimeTotal = oneTimeServices.reduce((sum, module) => {
    if (module.id === 'web-corporativa') {
      // Para Web Corporativa, usar el precio base del sector
      return sum + businessPricing.basePrice;
    } else if (module.id === 'landing-page' || module.id === 'tienda-virtual') {
      // Landing Page y Tienda Virtual tienen precios fijos
      return sum + module.price;
    }
    return sum + (module.price * businessPricing.multiplier);
  }, 0);

  const totalWeeks = Math.max(...selectedModuleData.map(module => module.timeWeeks));
  
  // Cálculo más realista del ROI basado en el tipo de negocio y servicios
  const calculateROI = () => {
    const totalInvestment = oneTimeTotal + (monthlyTotal * 12);
    
    // ROI más conservador y realista
    let roiMultiplier = 1.5; // Por defecto 150% de retorno
    
    const hasWebService = selectedModuleData.some(m => 
      ['landing-page', 'web-corporativa', 'tienda-virtual'].includes(m.id)
    );
    
    if (hasWebService) {
      const webService = selectedModuleData.find(m => 
        ['landing-page', 'web-corporativa', 'tienda-virtual'].includes(m.id)
      );
      
      switch (webService?.id) {
        case 'landing-page':
          roiMultiplier = 2.0; // 200% de retorno
          break;
        case 'web-corporativa':
          roiMultiplier = 2.5; // 250% de retorno
          break;
        case 'tienda-virtual':
          roiMultiplier = 3.0; // 300% de retorno
          break;
      }
    } else {
      // Solo listing - ROI más conservador
      roiMultiplier = 1.2;
    }
    
    // ROI = Inversión * Multiplicador (esto representa la ganancia total esperada)
    return totalInvestment * roiMultiplier;
  };
  
  const estimatedROI = Math.round(calculateROI());

  const generatePDF = async () => {
    const { jsPDF } = await import('jspdf');
    const html2canvas = (await import('html2canvas')).default;
    
    // Create PDF content
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    // Función para cargar imagen como base64
    const loadImageAsBase64 = (src: string): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = reject;
        img.src = src;
      });
    };
    
    // Header más compacto con logo - fondo blanco
    pdf.setFillColor(255, 255, 255); // Fondo blanco
    pdf.rect(0, 0, pageWidth, 15, 'F');
    
    // Borde inferior del header
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.3);
    pdf.line(0, 15, pageWidth, 15);
    
    // Intentar cargar y añadir el logo
    try {
      const logoBase64 = await loadImageAsBase64('/logos/tubarriope_logo_penegro2.webp');
      // Añadir logo centrado en el header
      pdf.addImage(logoBase64, 'PNG', (pageWidth - 25) / 2, 2, 25, 11);
    } catch (error) {
      // Si falla la carga del logo, usar solo texto
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont(undefined, 'bold');
      pdf.text('TUBARRIO', pageWidth / 2, 11, { align: 'center' });
    }
    
    // Título principal más compacto
    let yPosition = 22;
    
    // Fondo para el título más pequeño
    pdf.setFillColor(248, 249, 250);
    pdf.rect(15, yPosition - 3, pageWidth - 30, 10, 'F');
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineWidth(0.3);
    pdf.rect(15, yPosition - 3, pageWidth - 30, 10, 'S');
    
    pdf.setFontSize(12);
    pdf.setTextColor(255, 165, 0);
    pdf.setFont(undefined, 'bold');
    pdf.text('COTIZACIÓN DE SERVICIOS DIGITALES', pageWidth / 2, yPosition + 1, { align: 'center' });
    
    yPosition += 8;
    
    pdf.setFontSize(9);
    pdf.setTextColor(0, 0, 0); // Cambiar a negro para mejor visibilidad
    pdf.setFont(undefined, 'normal');
    pdf.text(`Propuesta para ${businessPricing.description}`, pageWidth / 2, yPosition, { align: 'center' });
    
    yPosition += 8;
    
    // Información de la cotización más compacta
    pdf.setFillColor(255, 165, 0, 0.1);
    pdf.rect(15, yPosition - 2, pageWidth - 30, 6, 'F');
    
    pdf.setFontSize(7);
    pdf.setTextColor(255, 255, 255); // Cambiar a blanco para mejor visibilidad
    pdf.text(`Fecha: ${new Date().toLocaleDateString('es-PE')}`, 20, yPosition + 1);
    pdf.text(`Válida hasta: ${new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString('es-PE')}`, pageWidth - 20, yPosition + 1, { align: 'right' });
    
    yPosition += 8;
    
    // Sección de módulos más compacta
    pdf.setFillColor(255, 165, 0, 0.15);
    pdf.rect(15, yPosition - 4, pageWidth - 30, 10, 'F');
    pdf.setDrawColor(255, 165, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(15, yPosition - 4, pageWidth - 30, 10, 'S');
    
    pdf.setFontSize(12); // Aumentar de 11 a 12
    pdf.setTextColor(255, 165, 0);
    pdf.setFont(undefined, 'bold');
    pdf.text('SERVICIOS INCLUIDOS', 20, yPosition + 2);
    yPosition += 16; // Aumentar espacio de 14 a 16
    
    // Encabezados de tabla más compactos
    pdf.setFillColor(240, 240, 240);
    pdf.rect(15, yPosition - 2, pageWidth - 30, 8, 'F'); // Aumentar altura de 6 a 8
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.2);
    pdf.rect(15, yPosition - 2, pageWidth - 30, 8, 'S');
    
    pdf.setFontSize(9); // Aumentar de 8 a 9
    pdf.setTextColor(40, 40, 40);
    pdf.setFont(undefined, 'bold');
    pdf.text('Servicio', 20, yPosition + 2); // Ajustar posición vertical
    pdf.text('Precio', 120, yPosition + 2);
    pdf.text('Desarrollo', 160, yPosition + 2);
    yPosition += 10; // Aumentar espacio de 8 a 10
    
    // Filas de módulos más compactas
    pdf.setFont(undefined, 'normal');
    pdf.setFontSize(9); // Aumentar de 8 a 9
    selectedModuleData.forEach((module) => {
      let adjustedPrice;
      if (module.id === 'web-corporativa') {
        adjustedPrice = businessPricing.basePrice;
      } else if (module.id === 'landing-page' || module.id === 'tienda-virtual') {
        adjustedPrice = module.price;
      } else {
        adjustedPrice = module.price * businessPricing.multiplier;
      }
      
      pdf.text(module.name, 20, yPosition);
      pdf.text(`S/${Math.round(adjustedPrice)}`, 120, yPosition);
      pdf.text(`${module.timeWeeks} semanas`, 160, yPosition);
      yPosition += 8; // Aumentar espacio entre filas de 6 a 8
    });
    
    // Línea de total
    pdf.setDrawColor(255, 165, 0);
    pdf.line(20, yPosition, 190, yPosition);
    yPosition += 8; // Aumentar espacio de 6 a 8
    
    // Total más compacto
    pdf.setFont(undefined, 'bold');
    pdf.setFontSize(12); // Aumentar de 11 a 12
    pdf.setTextColor(255, 165, 0);
    pdf.text('INVERSIÓN TOTAL:', 20, yPosition);
    
    if (oneTimeTotal > 0) {
      pdf.text(`Pago único: S/${Math.round(oneTimeTotal)}`, 120, yPosition);
      yPosition += 10; // Aumentar espacio de 8 a 10
    }
    if (monthlyTotal > 0) {
      pdf.text(`Mensual: S/${monthlyTotal}`, 120, yPosition);
      yPosition += 10; // Aumentar espacio de 8 a 10
    }
    
    // Tiempo total de desarrollo
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Tiempo total de desarrollo: ${totalWeeks} semanas`, 20, yPosition);
    yPosition += 15;
    
    // Función para verificar si necesitamos nueva página
    const checkPageBreak = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - 30) {
        pdf.addPage();
        yPosition = 30;
      }
    };
    
    // Descripción de servicios más compacta
    checkPageBreak(30);
    pdf.setFillColor(255, 165, 0, 0.15);
    pdf.rect(15, yPosition - 3, pageWidth - 30, 10, 'F'); // Aumentar altura
    pdf.setDrawColor(255, 165, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(15, yPosition - 3, pageWidth - 30, 10, 'S');
    
    pdf.setFontSize(12); // Aumentar de 10 a 12
    pdf.setTextColor(255, 165, 0);
    pdf.setFont(undefined, 'bold');
    pdf.text('DESCRIPCIÓN DE SERVICIOS', 20, yPosition + 2);
    yPosition += 15; // Aumentar espacio
    
    pdf.setFontSize(9); // Aumentar de 8 a 9
    pdf.setTextColor(40, 40, 40);
    
    // Descripciones más compactas
    selectedModuleData.forEach((module, index) => {
      checkPageBreak(12); // Aumentar espacio de verificación
      
      // Fondo alternado más pequeño
      if (index % 2 === 0) {
        pdf.setFillColor(250, 250, 250);
        pdf.rect(15, yPosition - 1, pageWidth - 30, 10, 'F'); // Aumentar altura
      }
      
      pdf.setFontSize(10); // Aumentar tamaño de fuente del nombre del servicio
      pdf.setFont(undefined, 'bold');
      pdf.setTextColor(255, 165, 0);
      pdf.text(`${module.name}:`, 20, yPosition + 2);
      yPosition += 5; // Aumentar espacio después del título
      
      pdf.setFont(undefined, 'normal');
      pdf.setTextColor(60, 60, 60);
      let description = '';
      
      switch(module.id) {
        case 'listing-basico':
          description = 'Perfil básico en tubarrio.pe con información de contacto, ubicación, descripción, hasta 5 imágenes, botón de WhatsApp y de página web más redes sociales.';
          break;
        case 'listing-premium':
          description = 'Perfil premium con galería de fotos, horarios y promociones destacadas.';
          break;
        case 'banner-publicitario':
          description = 'Banner promocional visible en la página principal de TuBarrio.';
          break;
        case 'landing-page':
          description = 'Página web profesional de una sola página con diseño responsivo y optimizada para conversiones.';
          break;
        case 'web-corporativa':
          description = 'Sitio web completo con múltiples páginas, sistema de gestión de contenido y funcionalidades avanzadas.';
          break;
        case 'tienda-virtual':
          description = 'Tienda online completa con catálogo de productos, carrito de compras y pasarela de pagos.';
          break;
        default:
          description = 'Servicio personalizado según las necesidades del negocio.';
      }
      
      // Dividir descripción en líneas más compactas
      const maxWidth = pageWidth - 50;
      const lines = pdf.splitTextToSize(description, maxWidth);
      lines.forEach((line: string) => {
        checkPageBreak(4);
        pdf.text(line, 25, yPosition);
        yPosition += 4; // Aumentar interlineado de 3 a 4
      });
      yPosition += 4; // Aumentar espacio entre servicios de 2 a 4
    });
    
    yPosition += 5;
    
    // DISEÑO GRID más compacto: Beneficios a la izquierda e Información de contacto a la derecha
    checkPageBreak(45);
    
    // Definir dimensiones del grid
    const leftColumnWidth = (pageWidth - 40) / 2; // Mitad izquierda
    const rightColumnWidth = (pageWidth - 40) / 2; // Mitad derecha
    const leftColumnX = 15;
    const rightColumnX = leftColumnX + leftColumnWidth + 10; // 10pt de separación
    const gridStartY = yPosition;
    
    // === COLUMNA IZQUIERDA: BENEFICIOS INCLUIDOS ===
    pdf.setFillColor(255, 165, 0, 0.15);
    pdf.rect(leftColumnX, gridStartY - 3, leftColumnWidth, 8, 'F');
    pdf.setDrawColor(255, 165, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(leftColumnX, gridStartY - 3, leftColumnWidth, 10, 'S'); // Aumentar altura
    
    pdf.setFontSize(10); // Aumentar de 9 a 10
    pdf.setTextColor(255, 165, 0);
    pdf.setFont(undefined, 'bold');
    pdf.text('BENEFICIOS INCLUIDOS', leftColumnX + 3, gridStartY + 2); // Ajustar posición
    
    // Beneficios estándar más compactos
    const benefits = [
      '• Diseño responsivo para móviles y tablets',
      '• Optimización SEO básica incluida',
      '• Soporte técnico permanente',
      '• Integración con redes sociales'
    ];
    
    // Fondo para los beneficios más compacto
    const benefitsHeight = benefits.length * 5 + 8; // Aumentar altura por beneficio
    pdf.setFillColor(248, 255, 248);
    pdf.rect(leftColumnX, gridStartY + 8, leftColumnWidth, benefitsHeight, 'F'); // Ajustar posición
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineWidth(0.2);
    pdf.rect(leftColumnX, gridStartY + 8, leftColumnWidth, benefitsHeight, 'S');
    
    pdf.setFontSize(8.5); // Aumentar de 7.5 a 8.5
    pdf.setTextColor(40, 40, 40);
    pdf.setFont(undefined, 'normal');
    let benefitY = gridStartY + 12; // Ajustar posición inicial
    benefits.forEach((benefit) => {
      pdf.text(benefit, leftColumnX + 3, benefitY);
      benefitY += 5; // Aumentar espacio entre beneficios
    });
    
    // === COLUMNA DERECHA: INFORMACIÓN DE CONTACTO Y PAGO ===
    pdf.setFillColor(255, 165, 0, 0.15);
    pdf.rect(rightColumnX, gridStartY - 3, rightColumnWidth, 10, 'F'); // Aumentar altura
    pdf.setDrawColor(255, 165, 0);
    pdf.setLineWidth(0.3);
    pdf.rect(rightColumnX, gridStartY - 3, rightColumnWidth, 10, 'S');
    
    pdf.setFontSize(10); // Aumentar de 9 a 10
    pdf.setTextColor(255, 165, 0);
    pdf.setFont(undefined, 'bold');
    pdf.text('CONTACTO Y PAGO', rightColumnX + 3, gridStartY + 2); // Ajustar posición
    
    // Fondo para la información de contacto más compacto
    const contactHeight = 32; // Aumentar altura
    pdf.setFillColor(250, 250, 255);
    pdf.rect(rightColumnX, gridStartY + 8, rightColumnWidth, contactHeight, 'F'); // Ajustar posición
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineWidth(0.2);
    pdf.rect(rightColumnX, gridStartY + 8, rightColumnWidth, contactHeight, 'S');
    
    pdf.setFontSize(8.5); // Aumentar de 7.5 a 8.5
    pdf.setTextColor(40, 40, 40);
    let contactY = gridStartY + 12; // Ajustar posición inicial
    
    // Información de contacto más compacta
    pdf.setFont(undefined, 'bold');
    pdf.text('CONTACTO:', rightColumnX + 3, contactY);
    pdf.setFont(undefined, 'normal');
    pdf.text('WhatsApp: +51999999999', rightColumnX + 3, contactY + 4); // Aumentar espacio
    contactY += 7; // Aumentar espacio entre secciones
    
    pdf.setFont(undefined, 'bold');
    pdf.text('EMAIL:', rightColumnX + 3, contactY);
    pdf.setFont(undefined, 'normal');
    pdf.text('tubarrio2025@gmail.com', rightColumnX + 3, contactY + 4); // Aumentar espacio
    contactY += 7; // Aumentar espacio entre secciones
    
    pdf.setFont(undefined, 'bold');
    pdf.text('MÉTODOS DE PAGO:', rightColumnX + 3, contactY);
    pdf.setFont(undefined, 'normal');
    pdf.text('• Transferencia • Yape • Plin • Efectivo', rightColumnX + 3, contactY + 4); // Aumentar espacio
    
    // Actualizar yPosition después del grid más compacto
    yPosition = Math.max(gridStartY + 8 + benefitsHeight, gridStartY + 8 + contactHeight) + 10; // Ajustar posición y aumentar espacio
    
    // Determinar si hay servicios web para mostrar modalidad de pago
    const hasWebServices = selectedModuleData.some(module => 
      ['landing-page', 'web-corporativa', 'tienda-virtual'].includes(module.id)
    );
    
    // Agregar información de modalidad de pago más compacta
    if (hasWebServices) {
      checkPageBreak(18); // Aumentar espacio requerido
      
      // Fondo para modalidad de pago más pequeño
      pdf.setFillColor(255, 248, 220);
      pdf.rect(15, yPosition - 2, pageWidth - 30, 15, 'F'); // Aumentar altura
      pdf.setDrawColor(255, 193, 7);
      pdf.setLineWidth(0.2);
      pdf.rect(15, yPosition - 2, pageWidth - 30, 15, 'S');
      
      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(9); // Aumentar de 8 a 9
      pdf.setTextColor(40, 40, 40);
      pdf.text('MODALIDAD DE PAGO:', 20, yPosition + 2); // Ajustar posición
      yPosition += 5; // Aumentar espacio
      pdf.setFont(undefined, 'normal');
      pdf.setFontSize(8); // Aumentar de 7 a 8
      pdf.text('• Adelanto del 30% para iniciar el proyecto', 25, yPosition);
      yPosition += 4; // Aumentar espacio entre líneas
      pdf.text('• Saldo restante (70%) al finalizar y entregar la web', 25, yPosition);
      yPosition += 8; // Aumentar espacio final
    }
    
    // Footer más compacto
    const footerY = pageHeight - 15;
    pdf.setFillColor(245, 245, 245);
    pdf.rect(0, footerY - 5, pageWidth, 10, 'F');
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.1);
    pdf.line(15, footerY - 5, pageWidth - 15, footerY - 5);
    
    pdf.setFontSize(7);
    pdf.setTextColor(120, 120, 120);
    pdf.setFont(undefined, 'italic');
    pdf.text('Esta cotización es válida por 30 días desde la fecha de emisión', pageWidth / 2, footerY, { align: 'center' });
    
    // Save PDF
    pdf.save(`cotizacion-${businessType}-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const toggleModule = (moduleId: string) => {
    // Para servicios mensuales, solo uno puede estar seleccionado a la vez
    if (moduleId === 'listing-basico' || moduleId === 'listing-banner') {
      setSelectedModules([moduleId]);
      return;
    }

    // Para servicios web (landing, web corporativa, tienda virtual), solo uno puede estar seleccionado
    const webServices = ['landing-page', 'web-corporativa', 'tienda-virtual'];
    if (webServices.includes(moduleId)) {
      if (selectedModules.includes(moduleId)) {
        // Si deselecciona el servicio web, mantener solo el listing
        setSelectedModules(['listing-basico']);
      } else {
        // Si selecciona un servicio web, reemplazar cualquier otro servicio web
        const newModules = selectedModules.filter(id => !webServices.includes(id));
        newModules.push(moduleId);
        
        // Asegurar que tenga un listing (básico por defecto)
        if (!newModules.some(id => id === 'listing-basico' || id === 'listing-banner')) {
          newModules.push('listing-basico');
        }
        
        setSelectedModules(newModules);
      }
      return;
    }

    // Para otros servicios
    if (selectedModules.includes(moduleId)) {
      setSelectedModules(selectedModules.filter(id => id !== moduleId));
    } else {
      setSelectedModules([...selectedModules, moduleId]);
    }
  };

  const categoryColors = {
    core: 'bg-blue-100 text-blue-800',
    ecommerce: 'bg-green-100 text-green-800',
    marketing: 'bg-purple-100 text-purple-800',
    advanced: 'bg-orange-100 text-orange-800'
  };

  const categoryNames = {
    core: 'Esencial',
    ecommerce: 'E-commerce',
    marketing: 'Marketing',
    advanced: 'Avanzado'
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Cotización Interactiva
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personaliza tu solución web seleccionando los módulos que necesitas para tu {businessPricing.description.toLowerCase()}
          </p>
        </div>

        {/* Navigation Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {['modules', 'summary', 'timeline'].map((step, index) => (
              <Button
                key={step}
                variant={currentStep === step ? 'default' : 'outline'}
                onClick={() => setCurrentStep(step as any)}
                className="flex items-center space-x-2"
              >
                <span className="w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="capitalize">
                  {step === 'modules' ? 'Módulos' : step === 'summary' ? 'Resumen' : 'Cronograma'}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {currentStep === 'modules' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Modules Selection */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredModules.map((module) => {
                  const isSelected = selectedModules.includes(module.id);
                  const isRequired = module.id === 'web-corporativa';
                  const isMonthlyService = module.id === 'listing-basico' || module.id === 'listing-banner';
                  let adjustedPrice;
                  let priceDisplay;
                  
                  if (isMonthlyService) {
                    adjustedPrice = module.price;
                    priceDisplay = `S/${Math.round(adjustedPrice)}/mes`;
                  } else if (module.id === 'web-corporativa') {
                    // Para Web Corporativa, mostrar rango de precios
                    const minPrice = businessPricing.basePrice;
                    const maxPrice = 600;
                    adjustedPrice = minPrice; // Para cálculos internos
                    priceDisplay = `Desde S/${minPrice}`;
                  } else if (module.id === 'landing-page' || module.id === 'tienda-virtual') {
                    // Landing Page y Tienda Virtual tienen precios fijos
                    adjustedPrice = module.price;
                    priceDisplay = `S/${Math.round(adjustedPrice)}`;
                  } else {
                    adjustedPrice = module.price * businessPricing.multiplier;
                    priceDisplay = `S/${Math.round(adjustedPrice)}`;
                  }

                  return (
                    <Card 
                      key={module.id} 
                      className={`cursor-pointer transition-all duration-200 ${
                        isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'
                      } ${isRequired ? 'border-blue-500' : ''}`}
                      onClick={() => toggleModule(module.id)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              {module.icon}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{module.name}</CardTitle>
                              <Badge className={categoryColors[module.category]}>
                                {categoryNames[module.category]}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">
                              {priceDisplay}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.timeWeeks} sem
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{module.description}</p>
                        <div className="space-y-2">
                          {module.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <Checkbox 
                            checked={isSelected} 
                            disabled={isRequired}
                            onChange={() => toggleModule(module.id)}
                          />
                          {isRequired && (
                            <Badge variant="secondary">Incluido</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5" />
                    <span>Resumen de Inversión</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {selectedModuleData.map((module) => {
                      let adjustedPrice;
                      if (module.id === 'web-corporativa') {
                        adjustedPrice = businessPricing.basePrice;
                      } else if (module.id === 'landing-page' || module.id === 'tienda-virtual') {
                        // Landing Page y Tienda Virtual tienen precios fijos
                        adjustedPrice = module.price;
                      } else {
                        adjustedPrice = module.price * businessPricing.multiplier;
                      }
                      
                      return (
                        <div key={module.id} className="flex justify-between items-center">
                          <span className="text-sm">{module.name}</span>
                          <span className="font-semibold">S/{Math.round(adjustedPrice)}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">
                    {oneTimeTotal > 0 && `Pago único: S/${Math.round(oneTimeTotal)}`}
                    {oneTimeTotal > 0 && monthlyTotal > 0 && ' + '}
                    {monthlyTotal > 0 && `S/${monthlyTotal}/mes`}
                  </span>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      onClick={() => setCurrentStep('summary')} 
                      className="w-full"
                      size="lg"
                    >
                      Ver Cotización Completa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentStep === 'summary' && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Cotización Detallada - {businessPricing.description}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Investment Table */}
                <div>
                  <h3 className="text-xl font-bold mb-4">💰 Inversión y Retorno (ROI)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Módulo</th>
                          <th className="border border-gray-300 p-3 text-center">Precio (S/)</th>
                          <th className="border border-gray-300 p-3 text-center">Tiempo</th>
                          <th className="border border-gray-300 p-3 text-left">Beneficio Clave</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedModuleData.map((module) => {
                          const isMonthlyService = module.id === 'listing-basico' || module.id === 'listing-banner';
                          const adjustedPrice = isMonthlyService 
                            ? module.price 
                            : module.price * businessPricing.multiplier;
                          
                          return (
                            <tr key={module.id}>
                              <td className="border border-gray-300 p-3 font-semibold">
                                {module.name}
                              </td>
                              <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">
                                S/{Math.round(adjustedPrice)}{isMonthlyService ? '/mes' : ''}
                              </td>
                              <td className="border border-gray-300 p-3 text-center">
                                {module.timeWeeks} semana{module.timeWeeks > 1 ? 's' : ''}
                              </td>
                              <td className="border border-gray-300 p-3">
                                {module.benefits[0]}
                              </td>
                            </tr>
                          );
                        })}
                        <tr className="bg-blue-50 font-bold">
                          <td className="border border-gray-300 p-3">TOTAL</td>
                          <td className="border border-gray-300 p-3 text-center text-blue-600">
                            {oneTimeTotal > 0 && (
                              <div>Pago único: S/{Math.round(oneTimeTotal)}</div>
                            )}
                            {monthlyTotal > 0 && (
                              <div>Mensual: S/{monthlyTotal}</div>
                            )}
                          </td>
                          <td className="border border-gray-300 p-3 text-center">
                            {totalWeeks} semanas
                          </td>
                          <td className="border border-gray-300 p-3">
                            Solución completa integrada
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ROI Justification */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-800">💡 Justificación de la Inversión</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Eficiencia Operativa</h4>
                      <ul className="space-y-1 text-sm text-green-600">
                        <li>• Automatización del 70% de consultas</li>
                        <li>• Reducción de tiempo de atención</li>
                        <li>• Disponibilidad 24/7</li>
                        <li>• Gestión centralizada</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Crecimiento de Ventas</h4>
                      <ul className="space-y-1 text-sm text-blue-600">
                        <li>• Aumento del 40% en leads</li>
                        <li>• Mejora del 60% en conversiones</li>
                        <li>• Expansión del mercado digital</li>
                        <li>• Fidelización de clientes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ROI Estimado: {oneTimeTotal > 0 ? Math.round((estimatedROI / (oneTimeTotal + monthlyTotal * 12) - 1) * 100) : 150}%
                    </div>
                    <div className="text-sm text-gray-600">
                      Recuperación de inversión en 6-8 meses
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep('modules')}
                  >
                    Modificar Módulos
                  </Button>
                  <Button 
                    onClick={() => setCurrentStep('timeline')}
                  >
                    Ver Cronograma
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 'timeline' && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  📅 Cronograma de Desarrollo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-2">Tiempo Total Estimado: {totalWeeks} semanas</h3>
                    <p className="text-blue-600">Desarrollo por fases con entregas parciales</p>
                  </div>

                  <div className="space-y-4">
                    {selectedModuleData.map((module, index) => (
                      <div key={module.id} className="flex items-start space-x-4 p-4 bg-white border rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{module.name}</h4>
                          <p className="text-gray-600 mb-2">{module.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.timeWeeks} semana{module.timeWeeks > 1 ? 's' : ''}
                            </span>
                            <span className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              S/{Math.round(module.id === 'web-corporativa' ? businessPricing.basePrice : module.price * businessPricing.multiplier)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-4">🎯 Proceso de Implementación</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          1
                        </div>
                        <h4 className="font-semibold">Planificación</h4>
                        <p className="text-sm text-gray-600">Análisis y diseño</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          2
                        </div>
                        <h4 className="font-semibold">Desarrollo</h4>
                        <p className="text-sm text-gray-600">Implementación por módulos</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          3
                        </div>
                        <h4 className="font-semibold">Lanzamiento</h4>
                        <p className="text-sm text-gray-600">Pruebas y puesta en marcha</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep('summary')}
                    >
                      Ver Resumen
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={generatePDF}
                      className="flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Descargar PDF</span>
                    </Button>
                    <Button 
                      size="lg"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Solicitar Cotización Formal
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}