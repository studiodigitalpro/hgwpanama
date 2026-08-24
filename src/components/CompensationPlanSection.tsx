import React from 'react';
import {
  Award,
  Users,
  TrendingUp,
  Percent,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  Coins,
  HeartHandshake,
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

interface CompensationPlanSectionProps {
  onOpenRegistrationModal: (membershipName?: string) => void;
}

export const CompensationPlanSection: React.FC<CompensationPlanSectionProps> = ({
  onOpenRegistrationModal,
}) => {
  return (
    <section className="space-y-10" id="plan-de-ganancia-mutua">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" /> Plan de Ganancia Mutua 50/50
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            En HGW Ganas de la Red de tu Patrocinador y de Todas tus Líneas
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            Un modelo de negocio sin candados, con compresión dinámica y sin caídas de rango. Ganas el <strong>50% de lo que genere cada una de tus líneas en niveles infinitos</strong> y recibes el <strong>2.5% de la red de tu patrocinador</strong> que se coloque después de ti en el Bono de Recompra.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenRegistrationModal('Plan de Ganancia Mutua')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              id="plan-join-btn"
            >
              <span>Quiero Activarme en el Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 8 Bonuses Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Los 8 Bonos del Plan de Compensación HGW
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Estructura de pagos transparente calculada en base a puntos de valor (1 BV = $1.00 USD).
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {companyData.bonuses.map((bonus) => (
            <div
              key={bonus.number}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between"
              id={`bonus-card-${bonus.number}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center">
                    0{bonus.number}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                    {bonus.percentage}
                  </span>
                </div>

                <h4 className="font-extrabold text-slate-900 text-sm">{bonus.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Ranks Pathway */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            Escalera de Liderazgo
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Rangos de Honor & Premios por Calificación
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Avanza sin perder nunca tu rango acumulado. Desde Plata hasta Diamante 7 Estrellas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {companyData.ranks.map((rank, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 p-4 flex flex-col justify-between space-y-2 hover:border-emerald-300 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${rank.iconColor}`}
                  >
                    {rank.name}
                  </span>
                </div>
                <div className="text-xs font-extrabold text-slate-900">{rank.accumulatedUSD}</div>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{rank.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big Incentives Highlight */}
        <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-5 border border-amber-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Incentivos Exclusivos por Rango Diamante
            </h4>
            <p className="text-xs text-slate-600">
              Califica a viajes nacionales e internacionales, cruceros, <strong>Bono Auto</strong>,{' '}
              <strong>Bono Casa</strong> y participación en el <strong>Club Millonario HGW</strong>.
            </p>
          </div>

          <button
            onClick={() => onOpenRegistrationModal('Plan de Compensación')}
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs shrink-0 cursor-pointer"
          >
            Comenzar Carrera HGW
          </button>
        </div>
      </div>

      {/* Recompra & Reconsumo Mínimo Explainer */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Coins className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-slate-900 text-sm">Reconsumo Mínimo Accesible</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mantén activo tu negocio y cobra de toda tu organización con un reconsumo mensual de solo{' '}
            <strong>10 BV (~USD $17 a $25)</strong>, sin importar tu rango ni el tamaño de tu red.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-slate-900 text-sm">Ganancia Mutua 50-50</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Las ganancias del Bono de Equipo y Bono de Desarrollo se comparten 50% con tu patrocinador y 50% de tus patrocinados, fomentando el trabajo colaborativo en equipo.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
            <Globe className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-slate-900 text-sm">Presencia Global en +69 Países</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Desarrolla tu red internacionalmente en Panamá, Colombia, Perú, México, Ecuador, Bolivia, Chile, España, Costa Rica y más países con un solo código.
          </p>
        </div>
      </div>
    </section>
  );
};
