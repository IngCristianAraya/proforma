import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: '¿Hay contrato de permanencia?',
      answer: 'No, nuestros planes son mes a mes. Puedes cancelar cuando quieras sin penalidades ni cargos adicionales. Creemos en ganarnos tu confianza con nuestro servicio, no con contratos obligatorios.'
    },
    {
      question: '¿Qué necesito para empezar?',
      answer: 'Solo necesitas: 1) Información básica de tu negocio (nombre, dirección, teléfono), 2) Fotos de tus productos o servicios, 3) Tu lista de precios. Nosotros nos encargamos de todo lo demás, incluyendo la configuración técnica.'
    },
    {
      question: '¿Y si no sé usar computadoras?',
      answer: 'No hay problema. Te capacitamos gratis y el sistema es tan fácil de usar como WhatsApp. Además, nuestro equipo de soporte está disponible para ayudarte siempre que lo necesites. Muchos de nuestros clientes nunca habían tenido presencia digital antes.'
    },
    {
      question: '¿Cómo recibo los pedidos?',
      answer: 'Los pedidos llegan directo a tu WhatsApp o puedes usar nuestra app simple. Tú decides qué método prefieres. También puedes configurar notificaciones por email. Todo está diseñado para ser lo más cómodo posible para ti.'
    },
    {
      question: '¿Puedo actualizar mi información cuando quiera?',
      answer: 'Sí, puedes actualizar precios, productos, horarios y fotos cuando quieras, las veces que quieras. No hay límite de actualizaciones. Además, si necesitas ayuda para hacer cambios, nuestro equipo te asiste sin costo adicional.'
    },
    {
      question: '¿Qué incluye el primer mes gratis?',
      answer: 'El primer mes gratis incluye todas las funcionalidades del plan que elijas, sin restricciones. Es un mes completo para que pruebes el servicio, veas los resultados y decidas si quieres continuar. No pedimos tarjeta de crédito para iniciar.'
    },
    {
      question: '¿Puedo cambiar de plan después?',
      answer: 'Sí, puedes cambiar de plan en cualquier momento. Si subes de plan, las nuevas funcionalidades están disponibles inmediatamente. Si bajas de plan, el cambio se aplica al inicio del siguiente mes.'
    },
    {
      question: '¿Qué pasa si quiero un dominio propio como mibodega.com?',
      answer: 'Esto está incluido en el Plan Premium. Te ayudamos a registrar tu dominio (o usar uno que ya tengas) y lo configuramos por ti. Tu negocio tendrá una dirección web profesional y fácil de recordar.'
    },
    {
      question: '¿Ofrecen soporte técnico?',
      answer: 'Sí, todos los planes incluyen soporte. El Plan Básico tiene soporte por email, el Plan Emprendedor tiene soporte prioritario, y el Plan Premium incluye soporte dedicado 24/7. Respondemos rápido porque entendemos que tu negocio no puede esperar.'
    },
    {
      question: '¿Cómo me diferencio de la competencia en la plataforma?',
      answer: 'A diferencia de apps como Rappi donde compites con miles, en Tubarrio.pe destacas en tu barrio específico. Además, con el Plan Emprendedor y Premium tienes posición destacada en búsquedas. También puedes personalizar completamente tu perfil para reflejar la identidad de tu negocio.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#ff7200] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-600 mb-6">
              Estamos aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contacto@tubarrio.pe"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ff7200] text-white rounded-lg font-semibold hover:bg-[#e66600] transition-colors"
              >
                Enviar Email
              </a>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}