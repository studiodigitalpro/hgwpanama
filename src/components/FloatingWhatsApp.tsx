import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const FloatingWhatsApp: React.FC = () => {
  const message = encodeURIComponent(
    'Hola Yamilka, deseo más información sobre los productos y cómo afiliarme a HGW Panamá.'
  );

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center group"
    >
      <div className="hidden sm:block mr-2.5 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Dudas o pedidos? Chatea con Yamilka
      </div>

      <a
        href={`https://wa.me/${companyData.sponsor.whatsapp.replace('+', '')}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105"
        id="floating-whatsapp-btn"
        aria-label="Chatear por WhatsApp con Yamilka Batista"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
};
