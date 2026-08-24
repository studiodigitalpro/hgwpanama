import React, { useState } from 'react';
import {
  ShoppingBag,
  Eye,
  Sparkles,
  Check,
  Award,
  Zap,
  ArrowRight,
  ShieldCheck,
  Share2,
  MessageCircle,
} from 'lucide-react';
import { Product } from '../types';
import { companyData } from '../data/companyInfo';
import { SmartImage } from './SmartImage';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onOpenDetail: (product: Product) => void;
  onOpenRegistrationModal: (membershipName?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenDetail,
  onOpenRegistrationModal,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [shared, setShared] = useState(false);

  const isMembership = product.category === 'MEMBRESIAS HGW';

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMembership) {
      onOpenRegistrationModal(product.name);
      return;
    }
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleShareWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    let text = `🌿 *${product.name}* - HGW (Health Green World)\n\n`;
    text += `💵 *Precio:* $${product.price.toFixed(2)} USD\n`;
    if (product.bv) {
      text += `⭐ *Puntaje:* ${typeof product.bv === 'number' ? `${product.bv} BV` : product.bv}\n`;
    }
    if (product.presentation) {
      text += `📦 *Presentación:* ${product.presentation}\n`;
    }
    text += `\n📝 *Detalles:* ${product.shortDescription}\n\n`;
    if (product.ingredients && product.ingredients.length > 0) {
      text += `🧪 *Ingredientes / Composición:*\n${product.ingredients.slice(0, 4).map((ing) => `• ${ing}`).join('\n')}\n\n`;
    }
    if (product.benefits && product.benefits.length > 0) {
      text += `✨ *Beneficios clave:*\n${product.benefits
        .slice(0, 3)
        .map((b) => (typeof b === 'string' ? `• ${b}` : `• *${b.title}:* ${b.description}`))
        .join('\n')}\n\n`;
    }
    text += `📲 *Para consultas o pedidos en Panamá con Yamilka Batista:*\nhttps://wa.me/50767788375\n\n`;
    text += `🌟 *Membresía con 30% a 60% desc (Patrocinador Yamilka507):*\nhttps://www.healthgreenworld.com/?userName=Yamilka507`;

    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');

    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  // Fallback visual colors by category
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'MEMBRESIAS HGW':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Cuidado personal':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'Accesorios':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Equipo':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Suplementos':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Licores':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  return (
    <div
      onClick={() => onOpenDetail(product)}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
      id={`product-card-${product.id}`}
    >
      {/* Badges Top Bar */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-1">
        <span
          className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border shadow-xs backdrop-blur-xs ${getCategoryColor(
            product.category
          )}`}
        >
          {product.category === 'MEMBRESIAS HGW' ? 'Membresía Oficial' : product.category}
        </span>

        <div className="flex items-center gap-1.5">
          {product.bv && (
            <span className="bg-emerald-800/90 text-amber-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-600/50 shadow-xs">
              {typeof product.bv === 'number' ? `${product.bv} BV` : product.bv}
            </span>
          )}

          {/* Share Button on Top Corner */}
          <button
            onClick={handleShareWhatsApp}
            className="p-1.5 rounded-full bg-white/90 hover:bg-emerald-600 text-slate-600 hover:text-white border border-slate-200 hover:border-emerald-600 shadow-xs transition-colors cursor-pointer"
            title="Compartir en WhatsApp"
            aria-label={`Compartir ${product.name} en WhatsApp`}
            id={`share-whatsapp-${product.id}`}
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Image Stage */}
      <div className="relative w-full pt-[85%] bg-gradient-to-b from-slate-50 to-emerald-50/30 overflow-hidden flex items-center justify-center">
        <SmartImage
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
          loading="lazy"
          fallbackContent={
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-slate-100 text-slate-400">
              <Sparkles className="w-8 h-8 text-emerald-500 mb-1" />
              <span className="text-xs font-bold text-slate-600 line-clamp-2">{product.name}</span>
              <span className="text-[10px] text-emerald-600 mt-1 font-semibold">Health Green World</span>
            </div>
          }
        />

        {/* Quick View Hover Indicator */}
        <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-emerald-600" /> Ver Detalles Completos
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Subcategory tags if any */}
          {product.subcategories && product.subcategories.length > 0 && (
            <div className="text-[11px] text-emerald-700 font-semibold mb-1 truncate">
              {product.subcategories.join(' • ')}
            </div>
          )}

          <h3 className="font-bold text-black text-base sm:text-lg leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
            {product.name}
          </h3>

          <p className="text-[15px] text-black line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Area */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-xs text-slate-600 font-medium">
              {isMembership ? 'Inversión desde' : 'Precio al Público'}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-black">
                ${product.price.toFixed(2)}{' '}
                <span className="text-xs font-semibold text-slate-700">USD</span>
              </span>
              {product.regularPrice && product.regularPrice > product.price && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.regularPrice.toFixed(2)}
                </span>
              )}
            </div>
            {!isMembership && (
              <div className="text-xs text-teal-800 font-bold" title="Precio para socios afiliados con compra inicial mínima de 50 BV">
                Socio: ${(product.price * 0.7).toFixed(2)} (-30%)
              </div>
            )}
          </div>

          {/* Action Buttons Group */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShareWhatsApp}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                shared
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
              }`}
              title="Compartir producto en WhatsApp"
              aria-label="Compartir en WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {isMembership ? (
              <button
                onClick={handleAdd}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold px-3 py-2.5 rounded-xl shadow-xs hover:shadow flex items-center gap-1 transition-all cursor-pointer"
                id={`membership-button-${product.id}`}
              >
                <span>Elegir</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className={`p-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                }`}
                id={`add-to-cart-${product.id}`}
                aria-label={`Añadir ${product.name} al pedido`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="hidden sm:inline">Añadido</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span className="hidden sm:inline">Añadir</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
