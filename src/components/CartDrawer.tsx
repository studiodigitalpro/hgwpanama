import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Send,
  Truck,
  Building,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { CartItem } from '../types';
import { companyData } from '../data/companyInfo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQty: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
  onOpenRegistrationModal: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenRegistrationModal,
}) => {
  const [isDistributorPrice, setIsDistributorPrice] = useState(false);
  const [shippingMethod, setShippingMethod] = useState<'servientrega' | 'oficina'>('servientrega');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Pricing calculations (Distributor discount 30%)
  const discountMultiplier = isDistributorPrice ? 0.7 : 1.0;

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountedSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * discountMultiplier * item.quantity,
    0
  );

  const totalBV = cartItems.reduce((sum, item) => {
    const bvVal = typeof item.product.bv === 'number' ? item.product.bv : 0;
    return sum + bvVal * item.quantity;
  }, 0);

  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const buildWhatsAppMessage = () => {
    let msg = `🌿 *NUEVO PEDIDO HGW PANAMÁ*\n`;
    msg += `👤 *Cliente:* ${customerName.trim() || 'Cliente Web'}\n`;
    if (customerPhone.trim()) msg += `📱 *Teléfono:* ${customerPhone.trim()}\n`;
    msg += `📦 *Modalidad:* ${isDistributorPrice ? 'Precio Socio/Distribuidor (30% desc)' : 'Precio Cliente Regular'}\n`;
    msg += `🚚 *Método de Entrega:* ${
      shippingMethod === 'servientrega'
        ? `A domicilio por Servientrega (${deliveryAddress.trim() || 'Panamá'})`
        : 'Retiro en Oficina HGW'
    }\n\n`;

    msg += `📋 *PRODUCTOS SELECCIONADOS:*\n`;
    cartItems.forEach((item, index) => {
      const itemPrice = (item.product.price * discountMultiplier).toFixed(2);
      const lineTotal = (item.product.price * discountMultiplier * item.quantity).toFixed(2);
      msg += `${index + 1}. ${item.product.name}\n   • Cantidad: ${item.quantity} x $${itemPrice} = $${lineTotal} USD\n`;
    });

    msg += `\n💰 *TOTAL APROXIMADO:* $${discountedSubtotal.toFixed(2)} USD\n`;
    if (totalBV > 0) msg += `⭐ *Puntos BV Acumulados:* ${totalBV} BV\n`;
    msg += `\n_Atención y asesoría con Yamilka Batista (Código: ${companyData.sponsor.code})_`;

    return msg;
  };

  const handleSendOrder = () => {
    if (cartItems.length === 0) return;
    const msg = buildWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    window.open(
      `https://wa.me/${companyData.sponsor.whatsapp.replace('+', '')}?text=${encoded}`,
      '_blank'
    );
  };

  const handleCopySummary = () => {
    const msg = buildWhatsAppMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      id="cart-drawer-backdrop"
    >
      <div
        className="bg-white w-full max-w-lg h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-slide-left"
        onClick={(e) => e.stopPropagation()}
        id="cart-drawer-panel"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base leading-tight">
                Mi Pedido HGW
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                {totalItemsCount} {totalItemsCount === 1 ? 'artículo' : 'artículos'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold px-2 py-1 rounded hover:bg-rose-50 transition-colors cursor-pointer"
                title="Vaciar carrito"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Cerrar pedido"
              id="close-cart-drawer-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pricing Toggle Banner (Cliente vs Distribuidor) */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100 p-3 px-4 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="text-slate-800 font-medium">
              Ver con <strong>30% de Descuento Socio:</strong>
            </span>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDistributorPrice}
              onChange={(e) => setIsDistributorPrice(e.target.checked)}
              className="sr-only peer"
              id="distributor-price-toggle"
            />
            <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-slate-100">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-slate-700 text-base">Tu pedido está vacío</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Explora nuestros superalimentos de arándano, productos de turmalina y cafés saludables para agregarlos aquí.
                </p>
              </div>
            </div>
          ) : (
            cartItems.map((item) => {
              const unitPrice = item.product.price * discountMultiplier;
              const lineTotal = unitPrice * item.quantity;
              return (
                <div key={item.product.id} className="pt-3 first:pt-0 flex gap-3 sm:gap-4 items-center">
                  {/* Thumbnail */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-50 border border-slate-200 p-1 shrink-0 flex items-center justify-center">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                      <span>${unitPrice.toFixed(2)} USD c/u</span>
                      {item.product.bv && (
                        <span className="text-emerald-700 font-semibold">
                          {typeof item.product.bv === 'number'
                            ? `${item.product.bv * item.quantity} BV`
                            : item.product.bv}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                          aria-label="Disminuir"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                          aria-label="Aumentar"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Line Total */}
                      <div className="text-right">
                        <span className="font-black text-slate-900 text-xs sm:text-sm">
                          ${lineTotal.toFixed(2)} USD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Customer Information & Checkout Form */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50/70 space-y-3.5">
            {/* Delivery Method Radio */}
            <div className="space-y-1.5 text-xs">
              <label className="font-bold text-slate-700">Método de Envío (Panamá):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShippingMethod('servientrega')}
                  className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                    shippingMethod === 'servientrega'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] leading-tight">A Domicilio (Servientrega)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingMethod('oficina')}
                  className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                    shippingMethod === 'oficina'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <Building className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] leading-tight">Retiro en Oficina HGW</span>
                </button>
              </div>
            </div>

            {/* Customer Inputs */}
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Tu Nombre Completo"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-800"
              />
              <input
                type="text"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Teléfono / WhatsApp"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-800"
              />
            </div>

            {shippingMethod === 'servientrega' && (
              <input
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Provincia / Dirección de entrega en Panamá"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-xs text-slate-800"
              />
            )}

            {/* Total Summary */}
            <div className="space-y-1 pt-1 text-xs">
              {isDistributorPrice && (
                <div className="flex justify-between text-slate-500">
                  <span>Precio Regular Cliente:</span>
                  <span className="line-through">${rawSubtotal.toFixed(2)} USD</span>
                </div>
              )}

              <div className="flex justify-between items-baseline pt-1 border-t border-slate-200 text-slate-900">
                <div>
                  <span className="text-sm font-bold">Total Estimado:</span>
                  {isDistributorPrice && (
                    <span className="ml-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      30% Socio Activo
                    </span>
                  )}
                </div>
                <span className="text-lg font-black text-emerald-800">
                  ${discountedSubtotal.toFixed(2)} USD
                </span>
              </div>

              {totalBV > 0 && (
                <div className="flex justify-between text-emerald-700 text-[11px] font-semibold">
                  <span>Puntaje de Volumen (BV):</span>
                  <span>{totalBV} BV</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleSendOrder}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
                id="cart-whatsapp-submit-btn"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Pedido a WhatsApp de Yamilka</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleCopySummary}
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copiar Resumen</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenRegistrationModal();
                  }}
                  className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Obtener Membresía</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
