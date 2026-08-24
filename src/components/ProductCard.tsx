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
} from 'lucide-react';
import { Product } from '../types';

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
  const [imgError, setImgError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

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
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-1 pointer-events-none">
        <span
          className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border shadow-xs backdrop-blur-xs ${getCategoryColor(
            product.category
          )}`}
        >
          {product.category === 'MEMBRESIAS HGW' ? 'Membresía Oficial' : product.category}
        </span>

        {product.bv && (
          <span className="bg-emerald-800/90 text-amber-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-600/50 shadow-xs">
            {typeof product.bv === 'number' ? `${product.bv} BV` : product.bv}
          </span>
        )}
      </div>

      {/* Product Image Stage */}
      <div className="relative w-full pt-[85%] bg-gradient-to-b from-slate-50 to-emerald-50/30 overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-slate-100 text-slate-400">
            <Sparkles className="w-8 h-8 text-emerald-500 mb-1" />
            <span className="text-xs font-bold text-slate-600 line-clamp-2">{product.name}</span>
            <span className="text-[10px] text-emerald-600 mt-1 font-semibold">Health Green World</span>
          </div>
        )}

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

          <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Area */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-slate-400 font-medium">
              {isMembership ? 'Inversión desde' : 'Precio al Público'}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-slate-900">
                ${product.price.toFixed(2)}{' '}
                <span className="text-[11px] font-normal text-slate-500">USD</span>
              </span>
              {product.regularPrice && product.regularPrice > product.price && (
                <span className="text-xs text-slate-400 line-through">
                  ${product.regularPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          {isMembership ? (
            <button
              onClick={handleAdd}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs hover:shadow flex items-center gap-1 transition-all cursor-pointer"
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
                  : 'bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600'
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
  );
};
