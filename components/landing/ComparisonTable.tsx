import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  const features = [
    { name: 'Comisión por venta', tubarrio: '0%', rappi: '25-35%', pedidosya: '25-30%', whatsapp: '0%' },
    { name: 'Costo mensual', tubarrio: 'S/49-S/149', rappi: 'Gratis*', pedidosya: 'Gratis*', whatsapp: 'Gratis' },
    { name: 'Clientes', tubarrio: 'Tu barrio + Datos completos', rappi: 'App + Sin datos', pedidosya: 'App + Sin datos', whatsapp: 'Limitado' },
    { name: 'Personalización', tubarrio: 'Total', rappi: 'Muy limitada', pedidosya: 'Limitada', whatsapp: 'Ninguna' },
    { name: 'Soporte', tubarrio: 'Personalizado', rappi: 'Genérico', pedidosya: 'Genérico', whatsapp: 'Ninguno' },
  ];

  const booleanFeatures = [
    { name: 'Pedidos automáticos', tubarrio: true, rappi: true, pedidosya: true, whatsapp: false },
    { name: 'Analytics', tubarrio: true, rappi: true, pedidosya: true, whatsapp: false },
    { name: 'Integración WhatsApp', tubarrio: true, rappi: false, pedidosya: false, whatsapp: true },
    { name: 'Dominio personalizado', tubarrio: true, rappi: false, pedidosya: false, whatsapp: false },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comparativa Detallada
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mira las diferencias reales entre plataformas
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/5">
                      Característica
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold bg-[#ff7200] text-white w-1/5">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-lg">Tubarrio.pe</span>
                        <span className="text-xs font-normal opacity-90">Recomendado</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 w-1/5">
                      Rappi
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 w-1/5">
                      PedidosYa
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 w-1/5">
                      WhatsApp
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {features.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-[#ff7200] bg-orange-50">
                        {feature.tubarrio}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">
                        {feature.rappi}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">
                        {feature.pedidosya}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">
                        {feature.whatsapp}
                      </td>
                    </tr>
                  ))}
                  {booleanFeatures.map((feature, index) => (
                    <tr key={`bool-${index}`} className={(features.length + index) % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        {feature.tubarrio ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.rappi ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.pedidosya ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.whatsapp ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            * Gratis pero con comisiones altas por venta. Con ventas de S/1,000 mensuales, pagarías S/250-S/350 en comisiones
          </p>
        </div>
      </div>
    </section>
  );
}