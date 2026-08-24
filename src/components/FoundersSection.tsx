import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Globe2,
  Building2,
  ExternalLink,
  ShieldCheck,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

interface FoundersSectionProps {
  onOpenRegistrationModal: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({
  onOpenRegistrationModal,
}) => {
  const [demingImgErr, setDemingImgErr] = useState(false);
  const [peterImgErr, setPeterImgErr] = useState(false);
  const [yamilkaImgErr, setYamilkaImgErr] = useState(false);

  return (
    <section className="space-y-10" id="empresa-y-fundadores">
      {/* Corporate Overview */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" /> Green World International Group
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Respaldo Internacional con más de 31 Años de Historia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            <strong>HGW (Health Green World - Mundo Verde Saludable)</strong> hace parte de la prestigiosa corporación global Green World International Group, con presencia en más de 69 países. A través de la biotecnología aplicada a superalimentos como el arándano azul canadiense, Ganoderma, Cordyceps y la tecnología de nanoturmalina, ofrece bienestar y prosperidad bajo un modelo ético de venta directa.
          </p>
        </div>

        {/* Global Key Figures */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">+31</div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">Años de Trayectoria</div>
          </div>
          <div className="bg-teal-50/70 p-4 rounded-2xl border border-teal-100 text-center">
            <div className="text-2xl sm:text-3xl font-black text-teal-800">+69</div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">Países con Presencia</div>
          </div>
          <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-center">
            <div className="text-2xl sm:text-3xl font-black text-blue-800">50/50</div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">Ganancia Mutua</div>
          </div>
          <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-100 text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-800">6G & I+D</div>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">Biotecnología Avanzada</div>
          </div>
        </div>
      </div>

      {/* Founders Leadership Profiles */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Dra Deming Li */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-emerald-200 shrink-0">
                {!demingImgErr ? (
                  <img
                    src={companyData.founders[0].image}
                    alt={companyData.founders[0].name}
                    onError={() => setDemingImgErr(true)}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-emerald-100 text-emerald-800 font-bold text-lg">
                    DL
                  </div>
                )}
              </div>

              <div>
                <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider">
                  Presidente de Green World Group
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {companyData.founders[0].name}
                </h3>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Credenciales Científicas & Académicas:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {companyData.founders[0].credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mr Peter Li */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-teal-200 shrink-0">
                {!peterImgErr ? (
                  <img
                    src={companyData.founders[1].image}
                    alt={companyData.founders[1].name}
                    onError={() => setPeterImgErr(true)}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-teal-100 text-teal-800 font-bold text-lg">
                    PL
                  </div>
                )}
              </div>

              <div>
                <span className="text-xs font-extrabold text-teal-700 uppercase tracking-wider">
                  CEO Latinoamérica
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {companyData.founders[1].name}
                </h3>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Trayectoria & Liderazgo:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {companyData.founders[1].credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor / Networker Card & Digital Academy */}
      <div className="grid md:grid-cols-12 gap-6">
        {/* Sponsor Profile */}
        <div className="md:col-span-7 bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white/10 border-2 border-amber-300 shrink-0 shadow-lg">
            {!yamilkaImgErr ? (
              <img
                src={companyData.sponsor.profileImage}
                alt={companyData.sponsor.name}
                onError={() => setYamilkaImgErr(true)}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-xl text-amber-300">
                YB
              </div>
            )}
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Sparkles className="w-3 h-3" /> Tu Patrocinadora & Asesora
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">{companyData.sponsor.name}</h3>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              Networker Digital Oficial • Código de Patrocinio:{' '}
              <strong className="text-amber-300 bg-emerald-950/60 px-2 py-0.5 rounded">
                {companyData.sponsor.code}
              </strong>
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <a
                href={companyData.sponsor.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+507 6778-8375</span>
              </a>

              <a
                href={`mailto:${companyData.sponsor.email}`}
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{companyData.sponsor.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Academia Digital HGW */}
        <div className="md:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Academia Digital HGW 24/7
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Una vez activo en HGW, tendrás acceso total y gratuito a la plataforma educativa con módulos de liderazgo, marketing digital y productos.
            </p>
          </div>

          <a
            href={companyData.sponsor.academyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
          >
            <span>Visitar academiahgw.online</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Associations & Backing */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-black text-base sm:text-lg">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Asociaciones Internacionales de Venta Directa que Respaldan a HGW</span>
        </div>
        <p className="text-xs text-slate-500">
          Miembro activo y regulado por las principales federaciones y cámaras de venta directa en el mundo:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {companyData.associations.map((assoc, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center min-h-[70px] shadow-2xs"
            >
              <Award className="w-4 h-4 text-emerald-700 mb-1" />
              <span className="text-[11px] font-bold text-slate-800 leading-tight">{assoc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
