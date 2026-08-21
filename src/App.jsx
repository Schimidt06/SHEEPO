import { useState, useMemo, useEffect } from 'react';
import { products, categories } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductCarousel from './components/ProductCarousel';
import ProductModal from './components/ProductModal';
import CustomOrderBanner from './components/CustomOrderBanner';
import TrustSection from './components/TrustSection';
import UpcomingSection from './components/UpcomingSection';
import Footer from './components/Footer';
import QuoteDrawer from './components/QuoteDrawer';
import FragranceQuizModal from './components/FragranceQuizModal';
import { Search, Sparkles, PackageOpen, Crown, Flower2, ShoppingBag, CheckCircle } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  
  // Quote Bag State with LocalStorage
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const saved = localStorage.getItem('sheepo_quote_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync Quote with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('sheepo_quote_items', JSON.stringify(quoteItems));
    } catch (e) {
      console.error(e);
    }
  }, [quoteItems]);

  // Toast auto dismiss
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const handleToggleQuote = (product) => {
    setQuoteItems(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removido da cotação: ${product.name}`);
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Adicionado à cotação: ${product.name}`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveQuoteItem = (productId) => {
    setQuoteItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
    showToast('Lista de cotação limpa.');
  };

  const isItemInQuote = (productId) => {
    return quoteItems.some(item => item.id === productId);
  };

  // Share functionality (Web Share API with fallback)
  const handleShare = async (product) => {
    const shareData = {
      title: `${product.name} - SHEEPO®`,
      text: `Confira o perfume ${product.name} (${product.brand}) na curadoria oficial da SHEEPO®:`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(window.location.href, product.name);
        }
      }
    } else {
      copyToClipboard(window.location.href, product.name);
    }
  };

  const copyToClipboard = (text, productName) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Link de "${productName}" copiado para a área de transferência!`);
      }).catch(() => {
        showToast(`Link copiado com sucesso!`);
      });
    } else {
      showToast(`Link copiado com sucesso!`);
    }
  };

  // Masculine and Feminine separated collections (exactly 10 each)
  const masculinos = useMemo(() => {
    return products.filter(p => p.gender === 'masculino');
  }, []);

  const femininos = useMemo(() => {
    return products.filter(p => p.gender === 'feminino');
  }, []);

  // Search Results Filtering
  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;

    return products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(q);
      const matchesBrand = product.brand.toLowerCase().includes(q);
      const matchesTagline = product.tagline.toLowerCase().includes(q);
      const matchesTags = product.tags.some(t => t.toLowerCase().includes(q));
      const matchesNotes = product.notes
        ? Object.values(product.notes).some(n => n.toLowerCase().includes(q))
        : false;

      return matchesName || matchesBrand || matchesTagline || matchesTags || matchesNotes;
    });
  }, [searchQuery]);

  const handleSelectCategory = (catId) => {
    if (catId === 'encomendas') {
      document.getElementById('encomendas')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (catId === 'novidades') {
      document.getElementById('novidades')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setSelectedCategory(catId);
    setSearchQuery('');
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      {/* Header */}
      <Header 
        activeCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory}
        quoteCount={quoteItems.length}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenQuizModal={() => setIsQuizOpen(true)}
      />

      <main style={{ maxWidth: '100%', overflowX: 'hidden' }}>
        {/* Hero Section */}
        <Hero onSelectCategory={handleSelectCategory} />

        {/* Sticky Filter & Search Bar */}
        <section id="catalogo" className="catalog-controls-section">
          <div className="container catalog-controls-wrap">
            {/* Category Tabs */}
            <div className="category-tabs">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id && !searchQuery;
                let count = 0;
                if (cat.id === 'all') count = products.length;
                else if (cat.id === 'top-masculino') count = masculinos.length;
                else if (cat.id === 'top-feminino') count = femininos.length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`cat-tab-btn ${isSelected ? 'active' : ''}`}
                    aria-label={`Filtrar por ${cat.label}`}
                  >
                    <span>{cat.label}</span>
                    {count > 0 && <span className="cat-tab-count">{count}</span>}
                    {cat.badge && (
                      <span className="mini-tag" style={{ background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold-light)' }}>
                        {cat.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Actions / Search */}
            <div className="search-and-quiz-wrap">
              {/* Quiz Trigger in Catalog Bar */}
              <button
                onClick={() => setIsQuizOpen(true)}
                className="btn-quiz-catalog"
                title="Não sabe qual escolher? Faça o quiz!"
              >
                <Sparkles size={16} />
                <span>Quiz Olfativo</span>
              </button>

              {/* Search Input */}
              <div className="search-box-wrap">
                <Search size={16} className="search-icon-pos" />
                <input
                  type="text"
                  placeholder="Buscar perfume, marca ou nota (ex: Baunilha, Couro)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  aria-label="Buscar perfume"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Display Area */}
        {searchQuery.trim() !== '' ? (
          /* Search Results View */
          <section className="container" style={{ minHeight: '450px', padding: '2rem var(--page-pad)' }}>
            <div className="section-header-wrap">
              <span className="section-eyebrow">
                <Sparkles size={14} /> RESULTADOS DA BUSCA • "{searchQuery}"
              </span>
              <h2 className="section-title">
                {searchResults && searchResults.length > 0 
                  ? `${searchResults.length} ${searchResults.length === 1 ? 'Perfume Encontrado' : 'Perfumes Encontrados'}`
                  : 'Nenhum resultado'
                }
              </h2>
            </div>

            {searchResults && searchResults.length > 0 ? (
              <div className="products-grid">
                {searchResults.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={(prod) => setActiveModalProduct(prod)}
                    onToggleQuote={handleToggleQuote}
                    isInQuote={isItemInQuote(product.id)}
                    onShare={handleShare}
                  />
                ))}
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                margin: '1.5rem 0'
              }}>
                <PackageOpen size={42} style={{ color: 'var(--accent-gold)', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Nenhum perfume encontrado para "{searchQuery}"</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                  Não encontrou o que procurava? Temos todos os perfumes árabes e importados do mundo sob encomenda!
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn-consultar-card"
                    style={{ width: 'auto' }}
                  >
                    Limpar Busca
                  </button>
                  <a
                    href={`https://wa.me/5514997070804?text=${encodeURIComponent(`Olá! Procuro pelo perfume ${searchQuery} (Frasco Lacrado) na SHEEPO®.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-header"
                  >
                    Consultar no WhatsApp
                  </a>
                </div>
              </div>
            )}
          </section>
        ) : selectedCategory === 'top-masculino' ? (
          /* Only Masculine Top 10 View */
          <ProductCarousel
            sectionId="masculinos"
            icon={Crown}
            eyebrow="SELEÇÃO OFICIAL 2026"
            title="Os 10 Melhores Perfumes Árabes Masculinos"
            subtitle="As 10 fragrâncias masculinas mais elogiadas, marcantes e de alta performance à pronta-entrega. Frascos lacrados de fábrica."
            products={masculinos}
            onOpenModal={(prod) => setActiveModalProduct(prod)}
            onToggleQuote={handleToggleQuote}
            isItemInQuote={isItemInQuote}
            onShare={handleShare}
          />
        ) : selectedCategory === 'top-feminino' ? (
          /* Only Feminine Top 10 View */
          <ProductCarousel
            sectionId="femininos"
            icon={Flower2}
            eyebrow="SELEÇÃO OFICIAL 2026"
            title="Os 10 Melhores Perfumes Árabes Femininos"
            subtitle="As 10 fragrâncias femininas mais elegantes, doces, cremosas e sofisticadas da perfumaria árabe. Frascos lacrados de fábrica."
            products={femininos}
            onOpenModal={(prod) => setActiveModalProduct(prod)}
            onToggleQuote={handleToggleQuote}
            isItemInQuote={isItemInQuote}
            onShare={handleShare}
          />
        ) : (
          /* "All" Category View: Both Top 10 Collections */
          <>
            <ProductCarousel
              sectionId="masculinos"
              icon={Crown}
              eyebrow="SELEÇÃO OFICIAL 2026"
              title="Os 10 Melhores Perfumes Árabes Masculinos"
              subtitle="As fragrâncias masculinas mais elogiadas, versáteis e potentes para noites, encontros e dia a dia. Frascos 100% lacrados."
              products={masculinos}
              onOpenModal={(prod) => setActiveModalProduct(prod)}
              onToggleQuote={handleToggleQuote}
              isItemInQuote={isItemInQuote}
              onShare={handleShare}
            />

            <ProductCarousel
              sectionId="femininos"
              icon={Flower2}
              eyebrow="SELEÇÃO OFICIAL 2026"
              title="Os 10 Melhores Perfumes Árabes Femininos"
              subtitle="As fragrâncias femininas mais doces, cremosas, florais e sensuais da perfumaria árabe. Frascos 100% lacrados."
              products={femininos}
              onOpenModal={(prod) => setActiveModalProduct(prod)}
              onToggleQuote={handleToggleQuote}
              isItemInQuote={isItemInQuote}
              onShare={handleShare}
            />
          </>
        )}

        {/* Custom Global Orders Banner (Todos os perfumes do mundo) */}
        <CustomOrderBanner />

        {/* Trust & Quality Pillars */}
        <TrustSection />

        {/* Section: Em Breve Muitas Novidades */}
        <UpcomingSection />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Floating Quote Bag Button (Sticky at bottom right) */}
      <button
        onClick={() => setIsQuoteDrawerOpen(true)}
        className={`floating-quote-fab ${quoteItems.length > 0 ? 'has-items' : ''}`}
        aria-label="Abrir sacola de cotação"
        title="Minha Cotação"
      >
        <ShoppingBag size={22} />
        {quoteItems.length > 0 && (
          <span className="floating-quote-badge">{quoteItems.length}</span>
        )}
      </button>

      {/* Interactive Detail Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onToggleQuote={handleToggleQuote}
          isInQuote={isItemInQuote(activeModalProduct.id)}
          onShare={handleShare}
        />
      )}

      {/* Interactive Quote Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onRemoveItem={handleRemoveQuoteItem}
        onClearAll={handleClearQuote}
      />

      {/* Fragrance Discovery Quiz Modal */}
      <FragranceQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenProductModal={(product) => setActiveModalProduct(product)}
        onAddToQuote={handleToggleQuote}
        isItemInQuote={isItemInQuote}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="global-toast-notification">
          <CheckCircle size={17} className="text-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
