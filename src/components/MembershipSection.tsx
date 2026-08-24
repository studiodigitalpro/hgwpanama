import React from 'react';
import {
  UserCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Award,
  ArrowRight,
  ShieldAlert,
  PlayCircle,
  HelpCircle,
  TrendingUp,
  Coins,
  Compass,
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

interface MembershipSectionProps {
  onOpenRegistrationModal: (membershipName?: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onOpenRegistrationModal,
}) => {
  const packages = [
    {
      id: 'prejunior',
      name: 'Prejunior',
      bv: '50 BV',
      priceApprox: 'B/. 89.00 – $100.00 USD',
      activationDiscount: '30%',
      repurchaseDiscount: '30%',
      dailyCap: '$50.00 USD / día',
      devBonus: '$0.20 USD (hasta 10 niv)',
      teamBonus: '5%',
      eliteBonus: 'No aplica',
      popular: false,
      badge: 'Inicio Fácil',
      accent: 'border-slate-200 bg-white hover:border-emerald-300',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      features: [
        '30% de descuento en activación y recompras',
        'Bono de Inicio Rápido 20% (2 niveles)',
        'Bono de Equipo 5% (tope $50 diarios)',
        'Bono Desarrollo $0.20 USD x BV',
        'Bono Recompra 5% (matriz 2x10)',
        'Plan Ganancia Mutua 50/50',
        'Reconsumo mínimo solo 10 BV/mes',
      ],
    },
    {
      id: 'junior',
      name: 'Junior',
      bv: '100 BV',
      priceApprox: 'B/. 180.00 – $200.00 USD',
      activationDiscount: '30%',
      repurchaseDiscount: '30%',
      dailyCap: '$120.00 USD / día',
      devBonus: '$0.50 USD (hasta 10 niv)',
      teamBonus: '7%',
      eliteBonus: 'No aplica',
      popular: false,
      badge: 'Recomendado para Comenzar',
      accent: 'border-teal-200 bg-teal-50/20 hover:border-teal-400',
      btnColor: 'bg-teal-700 hover:bg-teal-800 text-white',
      features: [
        '30% de descuento permanente',
        'Activación con 1 compra de 100 BV o 2 de 50 BV',
        'Bono de Equipo 7% (tope $120 diarios)',
        'Bono Desarrollo $0.50 USD x BV',
        'Bono Inicio Rápido 20% con Ganancia Mutua',
        'Bono Recompra 5% en matriz 2x10',
        'Ascenso progresivo a Master en 180 días',
      ],
    },
    {
      id: 'senior',
      name: 'Senior',
      bv: '300 BV',
      priceApprox: 'B/. 540.00 – $600.00 USD',
      activationDiscount: '30%',
      repurchaseDiscount: '30%',
      dailyCap: '$360.00 USD / día',
      devBonus: '$1.50 USD (hasta 10 niv)',
      teamBonus: '8%',
      eliteBonus: '4% (hasta 3 generaciones)',
      popular: false,
      badge: 'Liderazgo & Crecimiento',
      accent: 'border-blue-200 bg-blue-50/20 hover:border-blue-400',
      btnColor: 'bg-blue-700 hover:bg-blue-800 text-white',
      features: [
        '30% de descuento en activación y recompras',
        'Bono de Equipo 8% (tope $360 diarios)',
        'Bono Élite 4% hasta 3 generaciones',
        'Bono Desarrollo $1.50 USD x BV',
        'Activación con 1 de 300 BV, 3 de 100 BV o 6 de 50 BV',
        'Camino directo a rangos Oro y Platino',
        'Acceso al Plan Ganancia Mutua 50/50',
      ],
    },
    {
      id: 'master',
      name: 'Master',
      bv: '600 BV',
      priceApprox: 'B/. 980.00 – $1,100.00 USD',
      activationDiscount: '30%',
      repurchaseDiscount: '60% en recompra',
      dailyCap: '$720.00 USD / día',
      devBonus: '$3.00 USD (hasta 10 niv)',
      teamBonus: '10%',
      eliteBonus: '4% (hasta 6 generaciones)',
      popular: true,
      badge: '⭐ Membresía Máxima & Más Rentable',
      accent: 'border-amber-300 bg-amber-50/30 hover:border-amber-500 ring-2 ring-amber-400/50',
      btnColor: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black shadow-md',
      features: [
        'Hasta 60% de margen de ganancia en recompra',
        'Tope de ganancia diaria de hasta $720 USD',
        'Bono de Equipo 10% en niveles infinitos',
        'Bono Élite 4% hasta 6 generaciones',
        'Bono Desarrollo $3.00 USD x BV (máximo nivel)',
        'Califica a viajes, cruceros, Bono Auto y Casa',
        'Plazo de 180 días para acumular los 600 BV',
      ],
    },
  ];

  return (
    <section className="space-y-10" id="membresias-section">
      {/* Banner / Header */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Membresías & Emprendimiento HGW
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Actívate como Distribuidor y obtén de un 30% a 60% de descuento
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
            Elige libremente los productos de tu preferencia hasta completar el puntaje requerido (BV). Todas las membresías tienen acceso al innovador <strong>Plan de Ganancia Mutua 50/50</strong> y a la <strong>Academia Digital HGW 24/7</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenRegistrationModal('Membresía Master 600 BV')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              id="hero-choose-membership-btn"
            >
              <PlayCircle className="w-5 h-5 text-slate-900" />
              <span>Ver Video Tutorial & Elegir Membresía</span>
            </button>

            <span className="text-xs text-emerald-200">
              Patrocinador Oficial: <strong className="text-white">{companyData.sponsor.code}</strong> ({companyData.sponsor.name})
            </span>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between relative shadow-xs hover:shadow-xl ${pkg.accent}`}
            id={`membership-card-${pkg.id}`}
          >
            {pkg.badge && (
              <div className="mb-3">
                <span className="inline-block text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-800 text-amber-300">
                  {pkg.badge}
                </span>
              </div>
            )}

            <div>
              <div className="flex items-baseline justify-between gap-1">
                <h3 className="text-xl font-black text-slate-900">{pkg.name}</h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {pkg.bv}
                </span>
              </div>

              <div className="mt-3 pb-3 border-b border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Inversión aproximada:</div>
                <div className="text-base font-extrabold text-slate-900">{pkg.priceApprox}</div>
                <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
                  En productos a tu libre elección
                </div>
              </div>

              {/* Key Metrics */}
              <div className="py-3 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Descuento Recompra:</span>
                  <span className="font-bold text-slate-900">{pkg.repurchaseDiscount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Tope Ganancia Diaria:</span>
                  <span className="font-bold text-emerald-800">{pkg.dailyCap}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Bono de Equipo:</span>
                  <span className="font-bold text-slate-900">{pkg.teamBonus}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Bono Desarrollo:</span>
                  <span className="font-bold text-slate-900">{pkg.devBonus}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Bono Élite:</span>
                  <span className="font-semibold text-slate-700">{pkg.eliteBonus}</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Beneficios Clave:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mandatory "Elegir Membresía" Button -> opens Video Pop-up */}
            <div className="mt-6 pt-2">
              <button
                onClick={() => onOpenRegistrationModal(`Membresía ${pkg.name} (${pkg.bv})`)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${pkg.btnColor}`}
                id={`choose-membership-btn-${pkg.id}`}
              >
                <span>Elegir Membresía</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ascenso & Estrategia Rango Plata Box */}
      <div className="grid md:grid-cols-2 gap-6 pt-4">
        {/* Opción Ascenso de Membresía */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-black text-base">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span>Opción de Ascenso Progresivo a Master</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ¿Iniciaste con Prejunior o Junior? ¡Puedes ascender gradualmente hasta <strong>Membresía Master (600 BV)</strong>!
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Plazo de 180 días:</strong> Realiza 6 compras de 100 BV (en una sola factura cada una) ya sea por día, semana o mes hasta acumular 600 BV.
              </span>
            </li>
            <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Estructura a Diamante:</strong> 10 socios Junior (6 directos y 4 en segundo nivel que asciendan a Master) con recompras de 100 BV/mes duplicado 10 veces.
              </span>
            </li>
          </ul>
        </div>

        {/* 4 Opciones para Llegar a Rango Plata */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-black text-base">
            <Award className="w-5 h-5 text-amber-500" />
            <span>4 Opciones para Calificar a Rango Plata ($500 USD)</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
              <div className="font-bold text-emerald-900">Opción 1</div>
              <div className="text-slate-600 mt-1">
                8 Paquetes Master + 2 Junior (4 directos + 4 en 2do nivel Master + 2 Junior directos).
              </div>
            </div>
            <div className="bg-teal-50/60 p-3 rounded-xl border border-teal-100">
              <div className="font-bold text-teal-900">Opción 2</div>
              <div className="text-slate-600 mt-1">
                16 Paquetes Senior (8 directos + 8 en 2do nivel) + 2 Junior directos.
              </div>
            </div>
            <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100">
              <div className="font-bold text-blue-900">Opción 3</div>
              <div className="text-slate-600 mt-1">
                50 Paquetes Junior (25 directos + 25 en 2do nivel).
              </div>
            </div>
            <div className="bg-purple-50/60 p-3 rounded-xl border border-purple-100">
              <div className="font-bold text-purple-900">Opción 4</div>
              <div className="text-slate-600 mt-1">
                100 Paquetes Prejunior (50 en 1er nivel + 50 en 2do nivel).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-[11px] sm:text-xs text-slate-500 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Descargo de responsabilidad:</strong> Los ingresos, bonos e incentivos mencionados representan el potencial del Plan de Compensación de HGW y no constituyen una garantía de ganancias. Los resultados dependen del esfuerzo, compromiso, habilidades comerciales, cumplimiento de los requisitos del plan y desempeño de cada Distribuidor Independiente.
        </p>
      </div>
    </section>
  );
};
