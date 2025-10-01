import { X, Check, TrendingDown, Users, Shield, Zap } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    {
      icon: TrendingDown,
      text: 'Rappi/PedidosYa cobran 25-35% por cada venta',
      detail: 'De cada S/100 que vendes, solo recibes S/70'
    },
    {
      icon: Users,
      text: 'Los clientes son de la app, no de tu negocio',
      detail: 'No tienes acceso a datos ni contacto directo'
    },
    {
      icon: Shield,
      text: 'Competencia feroz entre miles de vendedores',
      detail: 'Tu negocio se pierde entre cientos de opciones'
    },
    {
      icon: Zap,
      text: 'Sin control sobre tu presencia digital',
      detail: 'Dependes completamente de sus reglas y algoritmos'
    }
  ];

  const solutions = [
    {
      icon: Check,
      text: 'Tarifa plana mensual - CERO comisiones por venta',
      detail: 'De cada S/100 que vendes, todos los S/100 son tuyos'
    },
    {
      icon: Check,
      text: 'Clientes de TU barrio, clientes recurrentes',
      detail: 'Base de datos completa con contactos directos'
    },
    {
      icon: Check,
      text: 'Destacas localmente, sin competencia masiva',
      detail: 'Eres visible para tu comunidad específica'
    },
    {
      icon: Check,
      text: 'Control total de tu marca y productos',
      detail: 'Tu web, tus reglas, tu crecimiento'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Por Qué Cambiar a <span className="text-[#ff7200]">Tubarrio.pe</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compara tu situación actual con la solución que te ofrecemos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-2xl shadow-lg p-8 border-2 border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-white">Problema Actual</h3>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{problem.text}</p>
                    <p className="text-sm text-gray-300">{problem.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#ff7200] rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Solución</h3>
              </div>

              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{solution.text}</p>
                      <p className="text-sm text-white/80">{solution.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}