import React from 'react';
import {
  Eye,
  Activity,
  ShieldCheck,
  Flame,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { healthProtocols } from '../data/companyInfo';
import { productsData } from '../data/products';
import { Product } from '../types';

interface HealthProtocolsSectionProps {
  onSelectProduct: (product: Product) => void;
  onFilterByCategory: (category: string) => void;
}

export const HealthProtocolsSection: React.FC<HealthProtocolsSectionProps> = ({
  onSelectProduct,
  onFilterByCategory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getProtocolColor = (id: string) => {
    switch (id) {
      case 'vision':
        return {
          bg: 'bg-indigo-50 border-indigo-200',
          badge: 'bg-indigo-100 text-indigo-800',
          iconBg: 'bg-indigo-600 text-white',
          btn: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        };
      case 'colon':
        return {
          bg: 'bg-emerald-50 border-emerald-200',
          badge: 'bg-emerald-100 text-emerald-800',
          iconBg: 'bg-emerald-600 text-white',
          btn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        };
      case 'immunity':
        return {
          bg: 'bg-amber-50 border-amber-200',
          badge: 'bg-amber-100 text-amber-800',
          iconBg: 'bg-amber-600 text-white',
          btn: 'bg-amber-600 hover:bg-amber-700 text-white',
        };
      case 'turmalina':
        return {
          bg: 'bg-teal-50 border-teal-200',
          badge: 'bg-teal-100 text-teal-800',
          iconBg: 'bg-teal-600 text-white',
          btn: 'bg-teal-600 hover:bg-teal-700 text-white',
        };
      default:
        return {
          bg: 'bg-slate-50 border-slate-200',
          badge: 'bg-slate-100 text-slate-800',
          iconBg: 'bg-slate-600 text-white',
          btn: 'bg-slate-800 text-white',
        };
    }
  };

  return (
    <section className="space-y-8" id="protocolos-salud">
      <div>
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Enfoque de Salud & Tecnología 6G / I+D
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Protocolos de Bienestar y Salud Integral
        </h2>
        <p className="text-base text-black max-w-3xl mt-1 leading-relaxed">
          Formulaciones de alta biotecnología basadas en extractos de arándanos azules de Canadá, nanotecnología de turmalina, probióticos y hongos medicinales milenarios (Ganoderma & Cordyceps).
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {healthProtocols.map((protocol) => {
          const colors = getProtocolColor(protocol.id);
          return (
            <div
              key={protocol.id}
              className={`rounded-3xl border p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${colors.bg}`}
              id={`protocol-card-${protocol.id}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs ${colors.iconBg}`}>
                    {getIcon(protocol.icon)}
                  </div>
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${colors.badge}`}>
                    {protocol.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-black">
                    {protocol.title}
                  </h3>
                  <p className="text-base text-black mt-1.5 leading-relaxed">
                    {protocol.description}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-black uppercase tracking-wider">
                    Puntos Clave del Protocolo:
                  </div>
                  <ul className="space-y-1.5 text-base text-black">
                    {protocol.keyBenefits.map((kb, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                        <span className="text-black leading-relaxed">{kb}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Products Chips */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Productos Recomendados:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {protocol.recommendedProducts.map((prodName, i) => {
                      const matchedProd = productsData.find((p) => p.name.includes(prodName) || prodName.includes(p.name));
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            if (matchedProd) {
                              onSelectProduct(matchedProd);
                            }
                          }}
                          className="text-[11px] bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 px-2.5 py-1 rounded-lg border border-slate-200 hover:border-emerald-300 font-semibold transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                        >
                          <span>{prodName}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
