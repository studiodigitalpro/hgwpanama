import React from 'react';
import {
  Sparkles,
  Award,
  ShieldCheck,
  Truck,
  ArrowRight,
  TrendingUp,
  Percent,
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

interface HeroBannerProps {
  onOpenRegistrationModal: () => void;
  onExploreCatalog: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenRegistrationModal,
  onExploreCatalog,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white shadow-xl">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-5xl space-y-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Salud & Bienestar Natural HGW
          </span>
          <span className="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
            <Percent className="w-3.5 h-3.5" /> 30% a 60% de Descuento en Membresías
          </span>
        </div>

        {/* Main Headings */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Nutrición Celular, Turmalina &{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
              Ganancia Mutua
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-emerald-100 leading-relaxed max-w-2xl">
            Descubre la gama más completa de superalimentos con <strong className="text-white font-bold">arándanos azules de Canadá</strong>, café con <strong className="text-white font-bold">Cordyceps y Ganoderma</strong>, toallas y protectores con <strong className="text-white font-bold">nanoturmalina aniónica</strong>, y la oportunidad de emprender con <strong className="text-white font-bold">Plan de Ganancia Mutua 50/50</strong>.
          </p>
        </div>

        {/* CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenRegistrationModal}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer transform hover:-translate-y-0.5"
            id="hero-register-modal-trigger"
          >
            <span>Elegir Membresía & Ver Tutorial</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={onExploreCatalog}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            id="hero-explore-catalog-btn"
          >
            <span>Explorar Catálogo Completo</span>
          </button>
        </div>

        {/* 3 Value Pillars */}
        <div className="pt-4 border-t border-emerald-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-2.5 bg-emerald-900/40 p-3 rounded-xl border border-emerald-700/40">
            <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Envíos a Todo Panamá</div>
              <div className="text-emerald-200/80 text-[11px]">Por Servientrega y Retiro en Oficina</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-emerald-900/40 p-3 rounded-xl border border-emerald-700/40">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Respaldo Internacional</div>
              <div className="text-emerald-200/80 text-[11px]">+31 Años en más de 69 Países</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-emerald-900/40 p-3 rounded-xl border border-emerald-700/40">
            <TrendingUp className="w-5 h-5 text-teal-300 shrink-0" />
            <div>
              <div className="font-bold text-white">Academia HGW 24/7</div>
              <div className="text-emerald-200/80 text-[11px]">Capacitación y mentoría continua</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
