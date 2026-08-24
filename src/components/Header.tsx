import React from 'react';
import {
  ShoppingBag,
  Search,
  UserCheck,
  Award,
  Sparkles,
  Phone,
  GraduationCap,
  HeartPulse,
} from 'lucide-react';
import { ProductCategory } from '../types';
import { companyData } from '../data/companyInfo';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: ProductCategory;
  setSelectedCategory: (cat: ProductCategory) => void;
  cartCount: number;
  openCart: () => void;
  openRegistrationModal: (membershipName?: string) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  openCart,
  openRegistrationModal,
  activeSection,
  setActiveSection,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs transition-all">
      {/* Top Notification / Sponsor Ribbon */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 font-medium">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-emerald-700/60 px-2 py-0.5 rounded-full text-[11px] font-semibold text-emerald-200">
              <Sparkles className="w-3 h-3 text-amber-300" /> Distribuidor Oficial HGW Panamá
            </span>
            <span className="hidden md:inline text-emerald-100">
              Asesora:{' '}
              <strong className="text-white">{companyData.sponsor.name}</strong> (Código:{' '}
              <strong className="text-amber-300">{companyData.sponsor.code}</strong>)
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href={`https://wa.me/${companyData.sponsor.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hola Yamilka, deseo más información sobre los productos y membresías HGW'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-200 transition-colors"
              id="topbar-whatsapp-link"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+507 6778-8375</span>
            </a>
            <span className="text-emerald-500">|</span>
            <button
              onClick={() => openRegistrationModal('Membresía HGW')}
              className="text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
              id="topbar-register-button"
            >
              <UserCheck className="w-3 h-3" /> Registrarme con 30%-60% Desc.
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => {
              setActiveSection('catalogo');
              setSelectedCategory('Todos');
            }}
            id="brand-logo-button"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-black text-lg shadow-md shadow-emerald-700/20">
              HGW
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-tight">
                Health Green World
              </span>
              <span className="text-[11px] text-emerald-700 font-semibold tracking-wide uppercase">
                Mundo Verde Saludable
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por producto, arándanos, turmalina, café, té..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800 placeholder-slate-400 transition-all"
                id="search-input-header"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Afiliarse CTA Button */}
            <button
              onClick={() => openRegistrationModal('Membresía HGW')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow flex items-center gap-1.5 transition-all cursor-pointer"
              id="header-affiliate-button"
            >
              <UserCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Elegir Membresía</span>
              <span className="sm:hidden">Membresías</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-all cursor-pointer flex items-center gap-2"
              id="header-cart-button"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-xs animate-scale-in">
                  {cartCount}
                </span>
              )}
              <span className="text-xs font-semibold hidden lg:inline">Mi Pedido</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-2.5 md:hidden">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar arándanos, café, turmalina..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
              id="mobile-search-input"
            />
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pt-3 pb-1 border-t border-slate-100 mt-2.5 scrollbar-none text-xs sm:text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveSection('catalogo')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'catalogo'
                ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                : 'hover:bg-slate-100 hover:text-slate-900'
            }`}
            id="nav-catalogo"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Tienda & Catálogo
          </button>

          <button
            onClick={() => setActiveSection('membresias')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'membresias'
                ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                : 'hover:bg-slate-100 hover:text-slate-900'
            }`}
            id="nav-membresias"
          >
            <UserCheck className="w-3.5 h-3.5" /> Membresías (Prejunior a Master)
          </button>

          <button
            onClick={() => setActiveSection('plan-negocio')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'plan-negocio'
                ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                : 'hover:bg-slate-100 hover:text-slate-900'
            }`}
            id="nav-plan-negocio"
          >
            <Award className="w-3.5 h-3.5" /> Plan Ganancia Mutua & Rangos
          </button>

          <button
            onClick={() => setActiveSection('protocolos')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'protocolos'
                ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                : 'hover:bg-slate-100 hover:text-slate-900'
            }`}
            id="nav-protocolos"
          >
            <HeartPulse className="w-3.5 h-3.5" /> Protocolos de Salud
          </button>

          <button
            onClick={() => setActiveSection('empresa')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'empresa'
                ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                : 'hover:bg-slate-100 hover:text-slate-900'
            }`}
            id="nav-empresa"
          >
            <GraduationCap className="w-3.5 h-3.5" /> Fundadores & Academia
          </button>
        </nav>
      </div>
    </header>
  );
};
