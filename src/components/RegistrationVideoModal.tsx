import React from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  Phone,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { companyData } from '../data/companyInfo';

interface RegistrationVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMembership?: string;
}

export const RegistrationVideoModal: React.FC<RegistrationVideoModalProps> = ({
  isOpen,
  onClose,
  selectedMembership = 'Membresía HGW',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
      id="registration-video-modal-backdrop"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-emerald-100 relative my-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        id="registration-video-modal-container"
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-4 sm:p-5 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-700/60 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Tutorial Oficial de Registro HGW
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Actívate en HGW {selectedMembership ? `• ${selectedMembership}` : ''}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
              Mira el video paso a paso antes de registrarte con el código de patrocinador:{' '}
              <span className="font-bold text-amber-300 bg-emerald-950/40 px-1.5 py-0.5 rounded">
                {companyData.sponsor.code}
              </span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
            id="close-registration-modal-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* YouTube Video Player Embed */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-inner border border-slate-200">
            <iframe
              src="https://www.youtube.com/embed/cR-aHkU9N4A?autoplay=1&rel=0"
              title="Tutorial de Registro HGW"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              id="youtube-registration-tutorial"
            ></iframe>
          </div>

          {/* Registration Guidance Card */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 sm:p-4 text-slate-800 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Datos importantes para tu registro:
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-emerald-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-slate-500 text-[11px]">Código de Patrocinador</div>
                  <div className="font-bold text-emerald-900">{companyData.sponsor.code}</div>
                </div>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-emerald-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="text-slate-500 text-[11px]">Patrocinadora Oficial</div>
                  <div className="font-bold text-emerald-900">{companyData.sponsor.name}</div>
                </div>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pt-1">
              Al afiliarte como socio distribuidor y realizar tu compra de activación inicial (mínimo <strong>50 BV / puntos</strong>), obtienes de inmediato de un <strong>30% a un 60% de descuento</strong> en todos los productos, acceso al <strong>Plan de Ganancia Mutua 50/50</strong> y capacitación 24/7 en la <strong>Academia Digital HGW</strong>.
            </p>
          </div>

          {/* Big Action Buttons (Required by prompt/PDF) */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={companyData.sponsor.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg text-center text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
              id="modal-direct-register-button"
            >
              <span>Registrarse Ahora en HGW Oficial</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${companyData.sponsor.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                `Hola Yamilka, acabo de ver el video tutorial y deseo apoyo para registrarme con el código ${companyData.sponsor.code} para ${selectedMembership}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-300 transition-colors"
              id="modal-whatsapp-help-button"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Ayuda por WhatsApp</span>
            </a>
          </div>

          {/* Extra Info */}
          <div className="text-center pt-1 text-[11px] text-slate-400">
            Una vez activo, tendrás acceso inmediato a la Academia Digital HGW:{' '}
            <a
              href={companyData.sponsor.academyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:underline font-semibold"
            >
              academiahgw.online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
