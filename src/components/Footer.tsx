import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldAlert,
  Globe2,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Truck,
  HeartHandshake,
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

interface FooterProps {
  onOpenRegistrationModal: () => void;
  onSelectCategory: (cat: any) => void;
  setActiveSection: (sec: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRegistrationModal,
  onSelectCategory,
  setActiveSection,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-black text-lg shadow-md">
                HGW
              </div>
              <div>
                <div className="font-extrabold text-base text-white">Health Green World</div>
                <div className="text-[11px] text-emerald-400 font-semibold uppercase">
                  Mundo Verde Saludable
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Superalimentos a base de arándanos de Canadá, tecnología de turmalina, Ganoderma Lucidum, Cordyceps y plantas herbales con presencia global en más de 69 países.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenRegistrationModal}
                className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Afiliarse con 30%-60% Desc.</span>
              </button>
            </div>
          </div>

          {/* Col 2: Sponsor & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              Contacto & Asesoría
            </h4>
            <div className="space-y-2 text-xs">
              <div className="text-white font-extrabold">
                {companyData.sponsor.name}
              </div>
              <div className="text-slate-400">
                Código de Patrocinador:{' '}
                <span className="font-bold text-amber-300 bg-slate-900 px-1.5 py-0.5 rounded">
                  {companyData.sponsor.code}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Panamá</span>
              </div>
              <a
                href={companyData.sponsor.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>+507 6778-8375</span>
              </a>
              <a
                href={`mailto:${companyData.sponsor.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{companyData.sponsor.email}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Envíos & Academia */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              Envíos & Educación
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Envíos a Domicilio:</strong> En todo Panamá por Servientrega (según peso del pedido) o retiro en oficina.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Academia Digital HGW 24/7:</strong>
                  <div className="mt-0.5">
                    <a
                      href={companyData.sponsor.academyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      <span>academiahgw.online</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Ganancia Mutua 50/50:</strong> Ganas de tu patrocinador y de tus patrocinados.
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Países Disponibles */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-emerald-400">
              Países Disponibles
            </h4>
            <p className="text-xs text-slate-400">
              Precios y envíos disponibles en moneda local según país:
            </p>
            <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
              {companyData.countries.map((c, i) => (
                <span
                  key={i}
                  className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mandatory Legal Affiliate Disclaimer Box */}
        <div className="bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-800 text-[11px] sm:text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Aviso Legal de Afiliado Independiente</span>
          </div>
          <p className="leading-relaxed">
            {companyData.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Health Green World (HGW). Catálogo de Distribuidor Independiente.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={companyData.sponsor.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Registro Oficial HGW
            </a>
            <span>•</span>
            <a
              href={companyData.sponsor.videoTutorialDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-300"
            >
              Video Tutorial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
