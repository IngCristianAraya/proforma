'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingDown, TrendingUp } from 'lucide-react';

export function SavingsCalculator() {
  const [monthlySales, setMonthlySales] = useState<number>(3000);

  const rappiCommission = monthlySales * 0.30;
  const pedidosYaCommission = monthlySales * 0.275;
  const tubarrioMonthly = 99;
  const monthlyRappiSavings = rappiCommission - tubarrioMonthly;
  const yearlyRappiSavings = monthlyRappiSavings * 12;
  const monthlyPedidosYaSavings = pedidosYaCommission - tubarrioMonthly;
  const yearlyPedidosYaSavings = monthlyPedidosYaSavings * 12;

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculadora de Ahorros
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Descubre cuánto podrías ahorrar cambiándote a Tubarrio.pe
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                Simulador de Comisiones
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="mb-8">
                <Label htmlFor="sales" className="text-lg font-semibold mb-3 block">
                  ¿Cuánto vendes mensualmente?
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                    S/
                  </span>
                  <Input
                    id="sales"
                    type="number"
                    value={monthlySales}
                    onChange={(e) => setMonthlySales(Number(e.target.value))}
                    className="text-2xl font-bold pl-12 h-16 text-center"
                    min={0}
                    step={100}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Ingresa tus ventas mensuales aproximadas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-100">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-gray-900">Con Rappi (30%)</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600">Comisión mensual</div>
                      <div className="text-2xl font-bold text-red-600">
                        S/ {rappiCommission.toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Recibes</div>
                      <div className="text-xl font-semibold text-gray-900">
                        S/ {(monthlySales - rappiCommission).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-100">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-5 h-5 text-orange-600" />
                    <h3 className="font-bold text-gray-900">Con PedidosYa (27.5%)</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600">Comisión mensual</div>
                      <div className="text-2xl font-bold text-orange-600">
                        S/ {pedidosYaCommission.toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Recibes</div>
                      <div className="text-xl font-semibold text-gray-900">
                        S/ {(monthlySales - pedidosYaCommission).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-gray-900">Con Tubarrio.pe (Plan Emprendedor)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-600">Costo mensual fijo</div>
                    <div className="text-2xl font-bold text-[#ff7200]">
                      S/ {tubarrioMonthly.toFixed(2)}
                    </div>
                    <div className="text-sm text-green-600 font-semibold mt-1">
                      Sin comisiones por venta
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Recibes</div>
                    <div className="text-2xl font-bold text-green-600">
                      S/ {(monthlySales - tubarrioMonthly).toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      100% de tus ventas menos la mensualidad
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#ff7200] rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Tu Ahorro Potencial</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-sm opacity-90 mb-1">vs Rappi</div>
                    <div className="text-3xl font-bold mb-2">
                      S/ {monthlyRappiSavings.toFixed(2)}
                    </div>
                    <div className="text-sm opacity-90">por mes</div>
                    <div className="text-xl font-semibold mt-2 bg-white/20 rounded-lg py-2 px-4 inline-block">
                      S/ {yearlyRappiSavings.toFixed(2)} al año
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm opacity-90 mb-1">vs PedidosYa</div>
                    <div className="text-3xl font-bold mb-2">
                      S/ {monthlyPedidosYaSavings.toFixed(2)}
                    </div>
                    <div className="text-sm opacity-90">por mes</div>
                    <div className="text-xl font-semibold mt-2 bg-white/20 rounded-lg py-2 px-4 inline-block">
                      S/ {yearlyPedidosYaSavings.toFixed(2)} al año
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                * Cálculos basados en comisiones promedio. Los valores reales pueden variar según el tipo de negocio y acuerdos comerciales.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}