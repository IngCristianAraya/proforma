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

  // Función para generar mensaje de WhatsApp con datos de la cotización
  const generateWhatsAppMessage = () => {
    const modules = selectedModuleData.map(module => {
      const isMonthlyService = module.id === 'listing-basico' || module.id === 'listing-banner';
      let price;
      
      if (isMonthlyService) {
        price = `S/${module.price}/mes`;
      } else if (module.id === 'web-corporativa') {
        price = `S/${businessPricing.basePrice}`;
      } else if (module.id === 'landing-page' || module.id === 'tienda-virtual') {
        price = `S/${module.price}`;
      } else {
        price = `S/${Math.round(module.price * businessPricing.multiplier)}`;
      }
      
      return `• ${module.name}: ${price}`;
    }).join('\n');

    const message = `🌐 *SOLICITUD DE COTIZACIÓN FORMAL*

*Tipo de Negocio:* ${businessPricing.description}

*Módulos Seleccionados:*
${modules}

*RESUMEN DE INVERSIÓN:*
${oneTimeTotal > 0 ? `💰 Pago único: S/${Math.round(oneTimeTotal)}` : ''}
${monthlyTotal > 0 ? `📅 Mensual: S/${monthlyTotal}/mes` : ''}
⏱️ Tiempo de desarrollo: ${totalWeeks} semana${totalWeeks > 1 ? 's' : ''}

¡Hola! Me interesa esta cotización y me gustaría recibir el formulario para proceder con el desarrollo de mi página web. ¿Podrías enviarme los detalles para completar la información necesaria?`;

    return encodeURIComponent(message);
  };

  const sendWhatsAppQuote = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/51901426737?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const generatePDF = async () => {
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;
    let yPosition = 20;

    const checkPageBreak = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
        
        // Replicar exactamente el mismo encabezado de la primera página
        
        // HEADER PROFESIONAL COMPLETO (igual que la primera página)
        // Línea superior naranja
        pdf.setFillColor(255, 114, 0); // Color naranja del logo
        pdf.rect(0, 0, pageWidth, 3, 'F');

        // Intentar cargar y añadir el logo (igual que la primera página)
        // Nota: En la segunda página usamos fallback ya que no podemos usar await aquí
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(255, 114, 0);
        pdf.text('TUBARRIO.PE', 15, 25);

        // Información de contacto (lado derecho) - igual que la primera página
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(0, 0, 0);
        pdf.text('PROPUESTA COMERCIAL', pageWidth - 15, 15, { align: 'right' });
        
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(100, 100, 100);
        pdf.text('Lima - Perú', pageWidth - 15, 22, { align: 'right' });
        pdf.text('+51 901 426 737', pageWidth - 15, 28, { align: 'right' });
        pdf.text('ingcristian.araya@gmail.com', pageWidth - 15, 34, { align: 'right' });

        // Línea separadora (igual que la primera página)
        pdf.setDrawColor(220, 220, 220);
        pdf.setLineWidth(0.5);
        pdf.line(15, 40, pageWidth - 15, 40);
        
        yPosition = 55; // Mismo espacio que en la primera página
      }
    };

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

    // HEADER PROFESIONAL SIMPLE
    // Línea superior naranja
    pdf.setFillColor(255, 114, 0); // Color naranja del logo
    pdf.rect(0, 0, pageWidth, 3, 'F');

    // Intentar cargar y añadir el logo
    try {
      const logoBase64 = await loadImageAsBase64('/logos/tubarriope_logo_penegro2.webp');
      pdf.addImage(logoBase64, 'PNG', 15, 10, 40, 20);
    } catch (error) {
      // Fallback con texto estilizado
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(255, 114, 0);
      pdf.text('TUBARRIO.PE', 15, 25);
    }

    // Información de contacto (lado derecho)
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text('PROPUESTA COMERCIAL', pageWidth - 15, 15, { align: 'right' });
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text('Lima - Perú', pageWidth - 15, 22, { align: 'right' });
    pdf.text('+51 901 426 737', pageWidth - 15, 28, { align: 'right' });
    pdf.text('ingcristian.araya@gmail.com', pageWidth - 15, 34, { align: 'right' });

    // Línea separadora
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineWidth(0.5);
    pdf.line(15, 40, pageWidth - 15, 40);

    yPosition = 55;

    // TÍTULO PRINCIPAL
    checkPageBreak(20);
    
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(255, 114, 0);
    pdf.text('PROPUESTA DIGITAL PERSONALIZADA', pageWidth / 2, yPosition, { align: 'center' });
    
    yPosition += 20; // Reducido de 30 a 20

    // INFORMACIÓN DEL CLIENTE
    checkPageBreak(50);
    
    // Fondo gris claro
    pdf.setFillColor(248, 248, 248);
    pdf.roundedRect(10, yPosition, pageWidth - 20, 50, 5, 5, 'F'); // Reducido altura de 55 a 50
    
    // Borde naranja sutil
    pdf.setDrawColor(255, 114, 0);
    pdf.setLineWidth(1);
    pdf.roundedRect(10, yPosition, pageWidth - 20, 50, 5, 5, 'S');
    
    // Título de la sección - centrado verticalmente
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text('INFORMACIÓN DEL CLIENTE', 20, yPosition + 12); // Ajustado para mejor centrado

    // Grid de información (2 columnas) - mejor centrado vertical
    pdf.setFontSize(10);
    
    // Columna izquierda
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text('Tipo de Negocio:', 20, yPosition + 24); // Ajustado
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${businessPricing.description}`, 20, yPosition + 31); // Ajustado
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text('Fecha de Propuesta:', 20, yPosition + 39); // Ajustado
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${new Date().toLocaleDateString('es-PE')}`, 20, yPosition + 46); // Ajustado

    // Columna derecha
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text('Tiempo de Desarrollo:', 110, yPosition + 24); // Ajustado
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${totalWeeks} semanas`, 110, yPosition + 31); // Ajustado
    
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text('Validez de Propuesta:', 110, yPosition + 39); // Ajustado
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text('30 días', 110, yPosition + 46); // Ajustado

    yPosition += 60; // Reducido de 75 a 60

    // INVERSIÓN TOTAL - DESTACADO
    checkPageBreak(55); // Aumentado para más contenido
    
    // Fondo naranja claro
    pdf.setFillColor(255, 237, 213);
    pdf.roundedRect(10, yPosition, pageWidth - 20, 50, 8, 8, 'F'); // Aumentado altura
    
    // Borde naranja
    pdf.setDrawColor(255, 114, 0);
    pdf.setLineWidth(2);
    pdf.roundedRect(10, yPosition, pageWidth - 20, 50, 8, 8, 'S');

    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(255, 114, 0);
    pdf.text('INVERSIÓN TOTAL', 20, yPosition + 15);
    
    if (oneTimeTotal > 0) {
      pdf.setFontSize(22);
      pdf.setTextColor(0, 0, 0);
      pdf.text(`S/ ${Math.round(oneTimeTotal).toLocaleString()}`, 20, yPosition + 30);
      
      // Descripción del pago único
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(80, 80, 80);
      pdf.text('Pago único por desarrollo completo', 20, yPosition + 38);
      
      if (monthlyTotal > 0) {
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(255, 114, 0);
        pdf.text(`+ S/ ${monthlyTotal}/mes`, pageWidth - 20, yPosition + 30, { align: 'right' });
        
        // Descripción del pago mensual
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(80, 80, 80);
        pdf.text('Hosting + dominio + mantenimiento', pageWidth - 20, yPosition + 38, { align: 'right' });
        pdf.text('(incluye actualizaciones y soporte)', pageWidth - 20, yPosition + 45, { align: 'right' });
      }
    } else if (monthlyTotal > 0) {
      pdf.setFontSize(22);
      pdf.setTextColor(0, 0, 0);
      pdf.text(`S/ ${monthlyTotal}/mes`, 20, yPosition + 30);
      
      // Descripción del servicio mensual
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(80, 80, 80);
      pdf.text('Servicio mensual completo', 20, yPosition + 38);
      pdf.text('Incluye hosting, dominio y soporte técnico', 20, yPosition + 45);
    }

    yPosition += 65; // Ajustado para el nuevo tamaño

    // SERVICIOS INCLUIDOS
    checkPageBreak(30);
    
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(0, 0, 0);
    pdf.text('SERVICIOS INCLUIDOS', 20, yPosition);
    
    yPosition += 15; // Reducido de 20 a 15

    // Lista de servicios
    selectedModuleData.forEach((service, index) => {
      checkPageBreak(20); // Reducido de 25 a 20
      
      // Fondo alternado
      if (index % 2 === 0) {
        pdf.setFillColor(250, 250, 250);
        pdf.rect(10, yPosition - 2, pageWidth - 20, 18, 'F'); // Reducido altura
      }
      
      // Punto naranja
      pdf.setFillColor(255, 114, 0);
      pdf.circle(18, yPosition + 4, 2, 'F');

      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 0, 0);
      pdf.text(`${service.name}`, 25, yPosition + 2);
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.setTextColor(80, 80, 80);
      const description = pdf.splitTextToSize(service.description, pageWidth - 50);
      pdf.text(description, 25, yPosition + 8);
      
      yPosition += 18; // Reducido de 22 a 18
    });

    yPosition += 10; // Reducido de 15 a 10

    // BENEFICIOS Y CONTACTO - DOS COLUMNAS
    checkPageBreak(80);
    
    const columnWidth = (pageWidth - 30) / 2;
    
    // Columna izquierda - Beneficios
    pdf.setFillColor(240, 255, 240);
    pdf.roundedRect(10, yPosition, columnWidth, 70, 5, 5, 'F');
    
    pdf.setDrawColor(34, 197, 94);
    pdf.setLineWidth(1);
    pdf.roundedRect(10, yPosition, columnWidth, 70, 5, 5, 'S');
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(34, 197, 94);
    pdf.text('BENEFICIOS INCLUIDOS', 20, yPosition + 15);

    const benefits = [
      'Diseño responsivo y moderno',
      'Optimización SEO básica',
      'Integración redes sociales',
      'Soporte técnico incluido'
    ];

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    
    benefits.forEach((benefit, index) => {
      pdf.text(`• ${benefit}`, 20, yPosition + 28 + (index * 8));
    });

    // Columna derecha - Contacto
    pdf.setFillColor(240, 245, 255);
    pdf.roundedRect(20 + columnWidth, yPosition, columnWidth, 70, 5, 5, 'F');
    
    pdf.setDrawColor(59, 130, 246);
    pdf.setLineWidth(1);
    pdf.roundedRect(20 + columnWidth, yPosition, columnWidth, 70, 5, 5, 'S');
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(59, 130, 246);
    pdf.text('INFORMACIÓN DE CONTACTO', 30 + columnWidth, yPosition + 15);

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    pdf.text('WhatsApp: +51 901 426 737', 30 + columnWidth, yPosition + 28);
    pdf.text('Email: ingcristian.araya@gmail.com', 30 + columnWidth, yPosition + 36);
    
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(255, 114, 0);
    pdf.text('Métodos de Pago:', 30 + columnWidth, yPosition + 48);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    pdf.text('• Yape / Plin', 30 + columnWidth, yPosition + 56);
    pdf.text('• Transferencia bancaria', 30 + columnWidth, yPosition + 64);

    yPosition += 85;

    // MODALIDAD DE PAGO (solo para servicios web)
    const hasWebServices = selectedModuleData.some(module => 
      ['landing-page', 'web-corporativa', 'tienda-virtual'].includes(module.id)
    );
    
    if (hasWebServices) {
      checkPageBreak(45);
      
      pdf.setFillColor(255, 252, 235);
      pdf.roundedRect(10, yPosition, pageWidth - 20, 40, 5, 5, 'F');
      
      pdf.setDrawColor(255, 193, 7);
      pdf.setLineWidth(1);
      pdf.roundedRect(10, yPosition, pageWidth - 20, 40, 5, 5, 'S');

      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(255, 114, 0);
      pdf.text('MODALIDAD DE PAGO', 20, yPosition + 15);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
      pdf.text('• 30% de adelanto para iniciar el proyecto', 20, yPosition + 25);
      pdf.text('• 70% restante al completar y entregar el proyecto', 20, yPosition + 33);

      yPosition += 55;
    }

    // FOOTER
    checkPageBreak(30);
    
    // Línea superior
    pdf.setDrawColor(220, 220, 220);
    pdf.setLineWidth(0.5);
    pdf.line(15, yPosition, pageWidth - 15, yPosition);
    
    yPosition += 10;
    
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 100, 100);
    pdf.text('Esta propuesta tiene validez de 30 días desde la fecha de emisión.', pageWidth / 2, yPosition, { align: 'center' });
    
    const currentDate = new Date().toLocaleDateString('es-PE');
    pdf.text(`Generado el: ${currentDate}`, pageWidth / 2, yPosition + 8, { align: 'center' });

    // Generar y descargar
    const fileName = `propuesta-${businessType.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.pdf`;
    pdf.save(fileName);
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
                      const isMonthlyService = module.id === 'listing-basico' || module.id === 'listing-banner';
                      let adjustedPrice;
                      
                      if (isMonthlyService) {
                        // Los servicios mensuales mantienen su precio fijo
                        adjustedPrice = module.price;
                      } else if (module.id === 'web-corporativa') {
                        adjustedPrice = businessPricing.basePrice;
                      } else if (module.id === 'landing-page' || module.id === 'tienda-virtual') {
                        // Landing Page y Tienda Virtual tienen precios fijos
                        adjustedPrice = module.price;
                      } else {
                        adjustedPrice = module.price * businessPricing.multiplier;
                      }
                      
                      return (
                        <div key={module.id} className="flex justify-between items-center">
                          <span className="text-sm">{module.name}{isMonthlyService ? ' (mensual)' : ''}</span>
                          <span className="font-semibold">S/{Math.round(adjustedPrice)}{isMonthlyService ? '/mes' : ''}</span>
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
                          // Los servicios mensuales (listing) mantienen su precio fijo, no se multiplican
                          const adjustedPrice = isMonthlyService 
                            ? module.price 
                            : (module.id === 'web-corporativa' ? businessPricing.basePrice : module.price * businessPricing.multiplier);
                          
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
                      onClick={sendWhatsAppQuote}
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