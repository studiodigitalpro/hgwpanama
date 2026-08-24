import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  Check,
  CheckCircle2,
  Sparkles,
  Phone,
  ShieldCheck,
  Package,
  Layers,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Product } from '../types';
import { companyData } from '../data/companyInfo';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onOpenRegistrationModal: (membershipName?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenRegistrationModal,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'benefits' | 'usage'>('info');
  const [imgError, setImgError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const isMembership = product.category === 'MEMBRESIAS HGW';

  const handleAdd = () => {
    if (isMembership) {
      onClose();
      onOpenRegistrationModal(product.name);
      return;
    }
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hola Yamilka, tengo una consulta sobre el producto "${product.name}" ($${product.price.toFixed(
        2
      )} USD). ¿Podrías darme más detalles o asesorarme?`
    );
    window.open(`https://wa.me/${companyData.sponsor.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
      id="product-detail-modal-backdrop"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-auto max-h-[92vh] flex flex-col animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        id="product-detail-modal-container"
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              {product.category}
            </span>
            {product.bv && (
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-800 text-amber-300">
                {typeof product.bv === 'number' ? `${product.bv} BV` : product.bv}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
            id="close-product-modal-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid md:grid-cols-12 gap-6 items-start">
            {/* Product Image Stage */}
            <div className="md:col-span-5 bg-gradient-to-b from-slate-50 to-emerald-50/40 rounded-2xl p-4 flex items-center justify-center border border-slate-100 min-h-[220px]">
              {!imgError ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  onError={() => setImgError(true)}
                  className="max-h-60 max-w-full object-contain drop-shadow-md"
                />
              ) : (
                <div className="text-center p-6 text-slate-400">
                  <Sparkles className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                  <p className="font-bold text-slate-700 text-sm">{product.name}</p>
                  <p className="text-xs text-emerald-600 font-semibold">Health Green World</p>
                </div>
              )}
            </div>

            {/* Title & Quick Pricing */}
            <div className="md:col-span-7 space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-emerald-800">
                  ${product.price.toFixed(2)}{' '}
                  <span className="text-sm font-semibold text-slate-500">USD</span>
                </span>
                {product.regularPrice && product.regularPrice > product.price && (
                  <span className="text-sm text-slate-400 line-through">
                    ${product.regularPrice.toFixed(2)} USD
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {product.presentation && (
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  <Package className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold">Presentación:</span> {product.presentation}
                </div>
              )}

              {/* Action buttons inside top */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                {isMembership ? (
                  <button
                    onClick={handleAdd}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    id="modal-membership-choose-button"
                  >
                    <span>Elegir Esta Membresía</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleAdd}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    id="modal-add-to-cart-button"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" /> <span>¡Añadido al Pedido!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> <span>Añadir al Pedido</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={handleWhatsAppInquiry}
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold py-2.5 px-3.5 rounded-xl text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                  id="modal-whatsapp-consult-button"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Consultar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-slate-200 flex gap-2 sm:gap-4 pt-2">
            <button
              onClick={() => setActiveTab('info')}
              className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'info'
                  ? 'border-emerald-600 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" /> Ventajas & Características
            </button>

            {product.benefits && product.benefits.length > 0 && (
              <button
                onClick={() => setActiveTab('benefits')}
                className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'benefits'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <ShieldCheck className="w-4 h-4" /> Beneficios para la Salud
              </button>
            )}

            {(product.usageInstructions || product.ingredients) && (
              <button
                onClick={() => setActiveTab('usage')}
                className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'usage'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" /> Modo de Uso & Detalles
              </button>
            )}
          </div>

          {/* Tab Content Panels */}
          <div className="space-y-4">
            {activeTab === 'info' && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ventajas Principales:
                </h4>
                {product.advantages && product.advantages.length > 0 ? (
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {product.advantages.map((adv, idx) => (
                      <li
                        key={idx}
                        className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-start gap-2"
                      >
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-600">{product.shortDescription}</p>
                )}
              </div>
            )}

            {activeTab === 'benefits' && product.benefits && (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" /> Acción & Beneficios:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {product.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 space-y-1"
                    >
                      <div className="font-bold text-emerald-950">{b.title}</div>
                      <p className="text-slate-600 text-xs leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="space-y-4 text-xs sm:text-sm">
                {product.usageInstructions && (
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900">Modo de Empleo Recomendado:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      {product.usageInstructions.map((step, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">Ingredientes Principales:</h4>
                    <p className="text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      {product.ingredients.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Garantía de originalidad HGW • Envíos a todo Panamá por Servientrega</span>
          </div>

          <div className="font-semibold text-emerald-800">
            Asesoría con Yamilka Batista ({companyData.sponsor.code})
          </div>
        </div>
      </div>
    </div>
  );
};
