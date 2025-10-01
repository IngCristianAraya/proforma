import { FileText, CircleCheck as CheckCircle, GraduationCap, Rocket } from 'lucide-react';

export function RegistrationProcess() {
  const steps = [
    {
      icon: FileText,
      title: 'Paso 1: Formulario Online',
      description: 'Completa un formulario simple con los datos de tu negocio',
      time: '5 minutos',
      details: [
        'Nombre y tipo de negocio',
        'Datos de contacto',
        'Categoría y servicios',
        'Fotos básicas'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Paso 2: Validación de Datos',
      description: 'Revisamos y validamos toda tu información',
      time: '24-48 horas',
      details: [
        'Verificación de datos',
        'Validación de imágenes',
        'Confirmación de servicios',
        'Revisión de información'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Paso 3: Vista Previa de tu Sección',
      description: 'Subimos tu información y te enviamos la URL para que veas cómo se visualiza',
      time: '24-48 horas',
      details: [
        'Configuración de tu perfil',
        'Subida de toda la información',
        'Envío de URL de vista previa',
        'Revisión y aprobación'
      ]
    },
    {
      icon: Rocket,
      title: 'Paso 4: Pago y Activación',
      description: 'Realizas el pago y tu negocio queda activo',
      time: 'Inmediato',
      details: [
        'Confirmación de pago',
        'Activación del perfil',
        'Tu negocio visible online',
        'Soporte continuo incluido'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proceso Simple de Registro
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En menos de 72 horas tu negocio estará online y recibiendo clientes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-[#ff7200] opacity-20"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#ff7200] to-[#ff8c2e] rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="inline-flex items-center gap-2 bg-[#ff7200] bg-opacity-10 text-[#ff7200] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                          {step.time}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {step.description}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {step.details.map((detail, dIndex) => (
                          <li key={dIndex} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="text-[#ff7200] mt-0.5">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#ff7200] to-[#ff8c2e] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              No necesitas conocimientos técnicos. Te guiamos en cada paso.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ Sin contrato de permanencia
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ Primer mes gratis
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ Soporte incluido
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}