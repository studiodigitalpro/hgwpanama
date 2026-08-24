/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ShoppingBag,
  Filter,
  Search,
  UserCheck,
  CheckCircle2,
  Package,
  Layers,
  ArrowRight,
  TrendingUp,
  Tag,
  Coins,
  ShieldCheck,
  Phone,
  Flame,
} from 'lucide-react';
import { Product, ProductCategory, CartItem } from './types';
import { productsData } from './data/products';
import { companyData } from './data/companyInfo';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RegistrationVideoModal } from './components/RegistrationVideoModal';
import { MembershipSection } from './components/MembershipSection';
import { CompensationPlanSection } from './components/CompensationPlanSection';
import { HealthProtocolsSection } from './components/HealthProtocolsSection';
import { FoundersSection } from './components/FoundersSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');
  const [activeSection, setActiveSection] = useState<string>('catalogo');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [selectedMembershipForModal, setSelectedMembershipForModal] = useState<string>('Membresía HGW');

  // Categories list
  const categories: { id: ProductCategory; label: string; icon?: string }[] = [
    { id: 'Todos', label: 'Todos los Productos' },
    { id: 'SERIE CAFÉS SALUDABLES', label: 'Cafés Saludables' },
    { id: 'SERIE CANDY HGW', label: 'Serie Candy Funcional' },
    { id: 'Alimentos', label: 'Alimentos & Superfoods' },
    { id: 'Cuidado personal', label: 'Cuidado Personal & Bucal' },
    { id: 'Accesorios', label: 'Accesorios & Turmalina' },
    { id: 'Equipo', label: 'Equipos & Termos' },
    { id: 'Suplementos', label: 'Suplementos & Spirulina' },
    { id: 'MEMBRESIAS HGW', label: 'Membresías de Negocio' },
    { id: 'Licores', label: 'Vino de Arándanos' },
  ];

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Open registration modal with optional membership name
  const handleOpenRegistrationModal = (membershipName?: string) => {
    setSelectedMembershipForModal(membershipName || 'Membresía HGW');
    setIsRegistrationModalOpen(true);
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      // Search matching
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        (p.subcategories &&
          p.subcategories.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())));

      if (!matchesSearch) return false;

      // Category matching
      if (selectedCategory === 'Todos') return true;
      if (p.category === selectedCategory) return true;
      if (p.subcategories && p.subcategories.includes(selectedCategory)) return true;

      return false;
    });
  }, [searchTerm, selectedCategory]);

  // Featured Products
  const featuredProducts = useMemo(() => {
    return productsData.filter((p) => p.featured && p.category !== 'MEMBRESIAS HGW').slice(0, 4);
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Top Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={(term) => {
          setSearchTerm(term);
          if (activeSection !== 'catalogo') setActiveSection('catalogo');
        }}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          if (activeSection !== 'catalogo') setActiveSection('catalogo');
        }}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        openRegistrationModal={handleOpenRegistrationModal}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-10">
        {/* Render View Depending on Active Navigation Section */}
        {activeSection === 'catalogo' && (
          <div className="space-y-10">
            {/* Hero Section */}
            <HeroBanner
              onOpenRegistrationModal={() => handleOpenRegistrationModal('Membresía HGW')}
              onExploreCatalog={() => {
                const catalogEl = document.getElementById('catalogo-main');
                if (catalogEl) {
                  catalogEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* Quick Membership Alert Banner */}
            <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 border border-amber-300/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-xs">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    ¿Quieres comprar con 30% a 60% de descuento como Distribuidor?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Actívate desde 50 BV (~$89 USD) con productos a tu libre elección y accede al Plan de Ganancia Mutua 50/50.
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleOpenRegistrationModal('Membresía HGW')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                id="banner-choose-membership-btn"
              >
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Elegir Membresía</span>
              </button>
            </div>

            {/* Featured Products Spotlight */}
            {!searchTerm && selectedCategory === 'Todos' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-500" />
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      Productos Estrella Más Vendidos
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700">
                    Biotecnología & Salud
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {featuredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onOpenDetail={setSelectedProduct}
                      onOpenRegistrationModal={handleOpenRegistrationModal}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Main Catalog View */}
            <div className="space-y-6 pt-2" id="catalogo-main">
              {/* Category Pills Filter */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-emerald-600" />
                    Catálogo de Productos ({filteredProducts.length})
                  </h2>

                  {selectedCategory !== 'Todos' && (
                    <button
                      onClick={() => setSelectedCategory('Todos')}
                      className="text-xs text-emerald-700 hover:underline font-semibold cursor-pointer"
                    >
                      Ver todos los productos
                    </button>
                  )}
                </div>

                {/* Categories Bar */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {categories.map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                          isActive
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                        id={`category-filter-${cat.id.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3 text-slate-500">
                  <Search className="w-10 h-10 mx-auto text-slate-300" />
                  <p className="font-bold text-slate-700 text-base">
                    No encontramos productos que coincidan con tu búsqueda
                  </p>
                  <p className="text-xs text-slate-400">
                    Prueba con otra palabra clave o selecciona otra categoría.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('Todos');
                    }}
                    className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Restablecer filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      onOpenDetail={setSelectedProduct}
                      onOpenRegistrationModal={handleOpenRegistrationModal}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'membresias' && (
          <MembershipSection onOpenRegistrationModal={handleOpenRegistrationModal} />
        )}

        {activeSection === 'plan-negocio' && (
          <CompensationPlanSection onOpenRegistrationModal={handleOpenRegistrationModal} />
        )}

        {activeSection === 'protocolos' && (
          <HealthProtocolsSection
            onSelectProduct={(p) => {
              setSelectedProduct(p);
            }}
            onFilterByCategory={(cat) => {
              setSelectedCategory(cat as ProductCategory);
              setActiveSection('catalogo');
            }}
          />
        )}

        {activeSection === 'empresa' && (
          <FoundersSection
            onOpenRegistrationModal={() => handleOpenRegistrationModal('Membresía HGW')}
          />
        )}
      </main>

      {/* Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenRegistrationModal={() => handleOpenRegistrationModal('Membresía HGW')}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenRegistrationModal={handleOpenRegistrationModal}
      />

      {/* Registration Video Pop-Up Modal (Mandatory from page 8) */}
      <RegistrationVideoModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        selectedMembership={selectedMembershipForModal}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onOpenRegistrationModal={() => handleOpenRegistrationModal('Membresía HGW')}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveSection('catalogo');
        }}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
