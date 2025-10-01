'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Zap } from 'lucide-react';

// Función de formateo consistente para evitar errores de hidratación
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

interface SavingsCalculatorProps {
  businessType: string;
}

export function SavingsCalculator({ businessType }: SavingsCalculatorProps) {
  const [monthlyOrders, setMonthlyOrders] = useState(100);
  const [averageOrderValue, setAverageOrderValue] = useState(25);

  const getBusinessData = (type: string) => {
    switch (type) {
      case 'restaurantes':
        return {
          title: "Calculadora de Ahorro - Restaurantes",
          subtitle: "Compara tus costos actuales vs Tubarrio.pe",
          orderLabel: "¿Cuántos pedidos recibes al mes?",
          valueLabel: "¿Cuál es el ticket promedio por pedido?",
          defaultOrders: 150,
          defaultValue: 35,
          commission: 0.18, // 18% comisión promedio delivery apps
          icon: "🍽️"
        };
      case 'tiendas':
        return {
          title: "Calculadora de Ahorro - Tiendas",
          subtitle: "Descubre cuánto puedes ahorrar",
          orderLabel: "¿Cuántas ventas realizas al mes?",
          valueLabel: "¿Cuál es tu ticket promedio de venta?",
          defaultOrders: 200,
          defaultValue: 20,
          commission: 0.15,
          icon: "🏪"
        };
      default:
        return {
          title: "Calculadora de Ahorro",
          subtitle: "Calcula tu potencial de ahorro",
          orderLabel: "¿Cuántos clientes atiendes al mes?",
          valueLabel: "¿Cuánto cobras en promedio por servicio?",
          defaultOrders: 100,
          defaultValue: 25,
          commission: 0.12,
          icon: "💼"
        };
    }
  };

  const businessData = getBusinessData(businessType);
  const monthlyRevenue = monthlyOrders * averageOrderValue;
  const currentCommissions = monthlyRevenue * businessData.commission;
  const tubarrioFee = businessType === 'restaurantes' || businessType === 'tiendas' ? 25 : 15;
  const monthlySavings = currentCommissions - tubarrioFee;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">{businessData.icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {businessData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {businessData.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ingresa tus datos</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    {businessData.orderLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={monthlyOrders}
                      onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>10</span>
                      <span className="text-2xl font-bold text-blue-600">{monthlyOrders}</span>
                      <span>1000+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    {businessData.valueLabel} (S/)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="5"
                      max="200"
                      value={averageOrderValue}
                      onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                      className="w-full h-3 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>S/ 5</span>
                      <span className="text-2xl font-bold text-green-600">S/ {averageOrderValue}</span>
                      <span>S/ 200+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Monthly Revenue */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h4 className="text-lg font-semibold text-gray-700">Ingresos mensuales</h4>
                </div>
                <p className="text-3xl font-bold text-blue-600">S/ {formatNumber(monthlyRevenue)}</p>
              </div>

              {/* Current Commissions */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-red-500" />
                  <h4 className="text-lg font-semibold text-gray-700">Comisiones actuales</h4>
                </div>
                <p className="text-3xl font-bold text-red-600">-S/ {formatNumber(currentCommissions)}</p>
                <p className="text-sm text-gray-500 mt-1">{(businessData.commission * 100)}% de comisión</p>
              </div>

              {/* Tubarrio Fee */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="text-lg font-semibold text-gray-700">Con Tubarrio.pe</h4>
                </div>
                <p className="text-3xl font-bold text-orange-600">S/ {tubarrioFee}</p>
                <p className="text-sm text-gray-500 mt-1">Tarifa fija mensual</p>
              </div>

              {/* Savings */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-2">💰 Tu ahorro</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm opacity-90">Mensual</p>
                    <p className="text-2xl font-bold">S/ {formatNumber(monthlySavings)}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Anual</p>
                    <p className="text-2xl font-bold">S/ {formatNumber(yearlySavings)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¡Empieza a ahorrar hoy mismo!
              </h3>
              <p className="text-gray-600 mb-6">
                Con Tubarrio.pe podrías ahorrar <span className="font-bold text-green-600">S/ {formatNumber(monthlySavings)}</span> cada mes
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Solicitar mi sitio web
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}