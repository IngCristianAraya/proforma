'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    plan: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generar PDF primero
      const pdfData = {
        nombre: formData.ownerName,
        email: formData.email,
        telefono: formData.phone,
        negocio: formData.businessName,
        tipoNegocio: formData.category,
        ubicacion: formData.location
      };

      console.log('Enviando datos para PDF:', pdfData);

      const response = await fetch('/api/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pdfData),
      });

      console.log('Respuesta del servidor:', response.status, response.statusText);

      if (response.ok) {
        // Get structured data for PDF generation
        const data = await response.json();
        
        // Import jsPDF dynamically
        const { default: jsPDF } = await import('jspdf');

        try {
          // Create PDF
          const pdf = new jsPDF('p', 'mm', 'a4');
          
          // Set font
          pdf.setFont('helvetica');
          
          // Add background color for header
          pdf.setFillColor(248, 250, 252); // Light gray background
          pdf.rect(0, 0, 210, 60, 'F');
          
          // Add orange accent line
          pdf.setFillColor(255, 114, 0); // Orange #ff7200
          pdf.rect(0, 0, 210, 4, 'F');
          
          // Header - Company name
          pdf.setFontSize(28);
          pdf.setTextColor(255, 114, 0); // Orange #ff7200
          pdf.text('Tubarrio.pe', 20, 25);
          
          // Tagline
          pdf.setFontSize(10);
          pdf.setTextColor(100, 116, 139); // Slate gray
          pdf.text('Conectando tu barrio con el mundo digital', 20, 32);
          
          // Company contact info (right side)
          pdf.setFontSize(9);
          pdf.setTextColor(71, 85, 105); // Darker gray
          pdf.text('Lima - Peru', 150, 20);
          pdf.text('+51 901 426 737', 150, 25);
          pdf.text('ingcristian.araya@gmail.com', 150, 30);
          pdf.text('www.tubarrio.pe', 150, 35);
          
          // Main title with background
          pdf.setFillColor(255, 114, 0); // Orange background
          pdf.rect(15, 70, 180, 15, 'F');
          pdf.setFontSize(16);
          pdf.setTextColor(255, 255, 255); // White text
          pdf.text('PROPUESTA COMERCIAL PERSONALIZADA', 20, 80);
          
          // Client info section
          pdf.setFillColor(249, 250, 251); // Very light gray background
          pdf.rect(15, 95, 180, 45, 'F');
          
          pdf.setFontSize(14);
          pdf.setTextColor(255, 114, 0); // Orange
          pdf.text('INFORMACION DEL CLIENTE', 20, 105);
          
          pdf.setFontSize(10);
          pdf.setTextColor(31, 41, 55); // Dark gray
          
          // Left column
          pdf.text('Negocio:', 20, 115);
          pdf.setFont('helvetica', 'bold');
          pdf.text(`${data.cliente.negocio}`, 45, 115);
          pdf.setFont('helvetica', 'normal');
          
          pdf.text('Propietario:', 20, 122);
          pdf.setFont('helvetica', 'bold');
          pdf.text(`${data.cliente.nombre}`, 45, 122);
          pdf.setFont('helvetica', 'normal');
          
          pdf.text('Email:', 20, 129);
          pdf.setFont('helvetica', 'bold');
          pdf.text(`${data.cliente.email}`, 35, 129);
          pdf.setFont('helvetica', 'normal');
          
          // Right column
          pdf.text('Teléfono:', 110, 115);
          pdf.setFont('helvetica', 'bold');
          pdf.text(`${data.cliente.telefono}`, 135, 115);
          pdf.setFont('helvetica', 'normal');
          
          pdf.text('Tipo de Negocio:', 110, 122);
          pdf.setFont('helvetica', 'bold');
          pdf.text(`${data.cliente.tipoNegocio}`, 155, 122);
          pdf.setFont('helvetica', 'normal');
          
          pdf.text('Ubicación:', 110, 129);
          pdf.setFont('helvetica', 'bold');
          pdf.text(`${data.cliente.ubicacion}`, 140, 129);
          pdf.setFont('helvetica', 'normal');
          
          // Plan section
          pdf.setFillColor(255, 114, 0); // Orange background
          pdf.rect(15, 150, 180, 25, 'F');
          
          pdf.setFontSize(16);
          pdf.setTextColor(255, 255, 255); // White text
          pdf.text(`PLAN RECOMENDADO: ${data.plan.nombre.toUpperCase()}`, 20, 162);
          
          // Price section with gradient-like effect
          pdf.setFillColor(254, 243, 199); // Light orange background
          pdf.rect(15, 175, 180, 30, 'F');
          
          pdf.setFontSize(32);
          pdf.setTextColor(255, 114, 0); // Orange
          pdf.text(`S/ ${data.plan.precio}`, 20, 195);
          
          pdf.setFontSize(12);
          pdf.setTextColor(120, 113, 108); // Brown-gray
          pdf.text('por mes', 80, 195);
          
          pdf.setFontSize(10);
          pdf.setTextColor(75, 85, 99); // Gray
          pdf.text(`Perfecto para ${data.cliente.tipoNegocio.toLowerCase()} como el tuyo`, 20, 202);
          
          // Features
          pdf.setFontSize(14);
          pdf.setTextColor(255, 114, 0); // Orange
          pdf.text('CARACTERISTICAS INCLUIDAS:', 20, 220);
          
          pdf.setFontSize(10);
          pdf.setTextColor(31, 41, 55); // Dark gray
          let yPos = 230;
          data.plan.caracteristicas.forEach((feature: string) => {
            // Add checkmark with circle background
            pdf.setFillColor(34, 197, 94); // Green background
            pdf.circle(22, yPos - 2, 2, 'F');
            pdf.setTextColor(255, 255, 255); // White checkmark
            pdf.setFontSize(8);
            pdf.text('✓', 21, yPos);
            
            // Feature text
            pdf.setFontSize(10);
            pdf.setTextColor(31, 41, 55); // Dark gray
            pdf.text(feature, 28, yPos);
            yPos += 8;
          });
          
          // Why choose us section
          yPos += 10;
          pdf.setFillColor(239, 246, 255); // Light blue background
          pdf.rect(15, yPos - 5, 180, 50, 'F');
          
          pdf.setFontSize(14);
          pdf.setTextColor(59, 130, 246); // Blue
          pdf.text('¿POR QUE ELEGIR TUBARRIO.PE?', 20, yPos + 5);
          
          yPos += 15;
          pdf.setFontSize(10);
          pdf.setTextColor(31, 41, 55); // Dark gray
          const benefits = [
            'Presencia digital profesional en 24-48 horas',
            'Soporte tecnico personalizado incluido',
            'Optimizacion completa para dispositivos moviles',
            'Integracion con redes sociales y analytics',
            'Panel de administracion facil de usar'
          ];
          
          benefits.forEach((benefit) => {
            pdf.text('• ' + benefit, 20, yPos);
            yPos += 7;
          });
          
          // Special offer
          yPos += 15;
          pdf.setFillColor(220, 38, 38); // Red background
          pdf.rect(15, yPos - 5, 180, 20, 'F');
          
          pdf.setFontSize(14);
          pdf.setTextColor(255, 255, 255); // White text
          pdf.text('¡OFERTA ESPECIAL DE LANZAMIENTO!', 20, yPos + 5);
          
          yPos += 15;
          pdf.setFillColor(254, 226, 226); // Light red background
          pdf.rect(15, yPos - 5, 180, 15, 'F');
          
          pdf.setFontSize(11);
          pdf.setTextColor(185, 28, 28); // Dark red
          pdf.text('• PRIMER MES COMPLETAMENTE GRATIS + Setup sin costo', 20, yPos + 3);
          pdf.text('• Solo pagas a partir del segundo mes', 20, yPos + 10);
          
          // Footer
          yPos += 25;
          pdf.setFillColor(31, 41, 55); // Dark gray background
          pdf.rect(0, yPos - 5, 210, 30, 'F');
          
          pdf.setFontSize(10);
          pdf.setTextColor(255, 255, 255); // White text
          pdf.text('¿LISTO PARA EMPEZAR? Contactanos por WhatsApp:', 20, yPos + 5);
          
          pdf.setFontSize(14);
          pdf.setTextColor(34, 197, 94); // Green (WhatsApp color)
          pdf.text('+51 901 426 737', 20, yPos + 15);
          
          pdf.setFontSize(8);
          pdf.setTextColor(156, 163, 175); // Light gray
          pdf.text('Esta propuesta es valida por 30 dias desde la fecha de emision.', 20, yPos + 22);
          pdf.text('© 2025 Tubarrio.pe - Conectando negocios locales con el mundo digital', 20, yPos + 27);
          
          // Download PDF
          const fileName = `proforma-${formData.businessName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
          pdf.save(fileName);
          
          toast({
            title: '¡PDF Generado!',
            description: 'Tu proforma personalizada se ha descargado automáticamente.',
          });
        } catch (pdfError) {
          console.error('Error converting to PDF:', pdfError);
          toast({
            title: "Error al convertir PDF",
            description: "No se pudo convertir la proforma a PDF",
            variant: "destructive",
          });
        }
      } else {
        // Mostrar error específico
        const errorData = await response.json();
        console.error('Error del servidor:', errorData);
        
        // Convertir errorData.details a string si es un objeto
        let errorMessage = 'Error desconocido';
        if (errorData.details) {
          errorMessage = typeof errorData.details === 'string' 
            ? errorData.details 
            : JSON.stringify(errorData.details);
        } else if (errorData.error) {
          errorMessage = typeof errorData.error === 'string' 
            ? errorData.error 
            : JSON.stringify(errorData.error);
        }
        
        toast({
          title: 'Error al generar PDF',
          description: errorMessage,
          variant: 'destructive',
        });
        
        // Continuar con WhatsApp aunque falle el PDF
      }

      // Crear mensaje para WhatsApp
      const whatsappMessage = `¡Hola! Me interesa contratar sus servicios:

*Información del Negocio:*
• Nombre: ${formData.businessName}
• Propietario: ${formData.ownerName}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Categoría: ${formData.category}
• Ubicación: ${formData.location}
• Plan de interés: ${formData.plan || 'No especificado'}

*Mensaje adicional:*
${formData.message || 'Ninguno'}

¡Espero su respuesta para proceder con la contratación!`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/51901426737?text=${encodedMessage}`;
      
      // Abrir WhatsApp después de un breve delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);

      setTimeout(() => {
        toast({
          title: 'Proceso Completado',
          description: 'PDF descargado y redirigido a WhatsApp para continuar.',
        });
        setIsSubmitting(false);
        setFormData({
          businessName: '',
          ownerName: '',
          email: '',
          phone: '',
          category: '',
          location: '',
          plan: '',
          message: ''
        });
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Hubo un problema al generar la proforma. Inténtalo nuevamente.',
        variant: 'destructive'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Genera Tu Proforma Personalizada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y descarga instantáneamente tu propuesta comercial en PDF con el branding de Tubarrio.pe
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Información del Negocio</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="businessName">Nombre del Negocio *</Label>
                      <Input
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        placeholder="Ej: Bodega El Ahorro"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerName">Nombre del Propietario *</Label>
                      <Input
                        id="ownerName"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                        placeholder="Ej: Juan Pérez"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="tu@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="999 999 999"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">Categoría de Negocio *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="restaurant">Restaurante / Comida</SelectItem>
                          <SelectItem value="retail">Bodega / Tienda</SelectItem>
                          <SelectItem value="services">Servicios (Barbería, Lavandería)</SelectItem>
                          <SelectItem value="technical">Servicios Técnicos (Electricista, Plomero)</SelectItem>
                          <SelectItem value="automotive">Automotriz (Taller, Mecánica)</SelectItem>
                          <SelectItem value="construction">Construcción (Albañil, Pintor)</SelectItem>
                          <SelectItem value="health">Salud (Consultorio, Farmacia)</SelectItem>
                          <SelectItem value="beauty">Belleza (Peluquería, Spa)</SelectItem>
                          <SelectItem value="real-estate">Inmuebles (Alquiler/Venta)</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Distrito / Ubicación *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="Ej: Miraflores"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="plan">Plan de Interés</Label>
                    <Select value={formData.plan} onValueChange={(value) => setFormData({...formData, plan: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecciona un plan (opcional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="listing-basic">Listing Básico - S/15/mes</SelectItem>
                        <SelectItem value="listing-banner">Listing + Banner - S/25/mes</SelectItem>
                        <SelectItem value="landing-page">Landing Page - S/150 (pago único)</SelectItem>
                        <SelectItem value="web-corporativa">Web Corporativa - S/300 (pago único)</SelectItem>
                        <SelectItem value="tienda-virtual">Tienda Virtual - S/500 (pago único)</SelectItem>
                        <SelectItem value="inmuebles">Sección Inmuebles - S/25/mes</SelectItem>
                        <SelectItem value="custom">Necesito una cotización personalizada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje Adicional</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Cuéntanos más sobre tu negocio y qué necesitas..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff7200] hover:bg-[#e66600] text-white"
                  >
                    {isSubmitting ? 'Generando Proforma...' : 'Generar Proforma PDF'}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar este formulario, aceptas que te contactemos para enviarte una propuesta comercial personalizada.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-100 shadow-lg">
              <CardHeader>
                {/* Logo de Tubarrio.pe */}
                <div className="text-center mb-4">
                  <img 
                    src="/logos/tubarriope_logo_penegro2.webp" 
                    alt="Tubarrio.pe" 
                    className="h-10 mx-auto mb-2"
                  />
                </div>
                <CardTitle className="text-gray-800">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Oficina</div>
                    <div className="text-sm opacity-90">
                      Tubarrio.pe<br />
                      Lima - Perú
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:ingcristian.araya@gmail.com" className="text-sm opacity-90 hover:underline">
                      ingcristian.araya@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <a href="https://wa.me/51901426737" className="text-sm opacity-90 hover:underline">
                      +51 901 426 737
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Horario de Atención</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-semibold">Cerrado</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Respondemos emails y WhatsApp en menos de 24 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}