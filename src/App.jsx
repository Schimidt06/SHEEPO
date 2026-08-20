import { useState, useMemo } from 'react';
import { products, categories } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductCarousel from './components/ProductCarousel';
import ProductModal from './components/ProductModal';
import CustomOrderBanner from './components/CustomOrderBanner';
import DecantsSection from './components/DecantsSection';
import TrustSection from './components/TrustSection';
import GoodsSection from './components/GoodsSection';
import Footer from './components/Footer';
import { Search, Sparkles, PackageOpen, Crown, Flower2 } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

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
    if (catId === 'decants') {
      document.getElementById('decants')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (catId === 'importados') {
      document.getElementById('encomendas')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (catId === 'goods') {
      document.getElementById('goods')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setSelectedCategory(catId);
    setSearchQuery(''); // clear search when switching main categories
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

            {/* Search Input */}
            <div className="search-box-wrap">
              <Search size={16} className="search-icon-pos" />
              <input
                type="text"
                placeholder="Buscar por perfume, nota (ex: Baunilha, Oud) ou marca..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Buscar perfume"
              />
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
                    href={`https://wa.me/5514997070804?text=${encodeURIComponent(`Olá! Procuro pelo perfume ${searchQuery} na SHEEPO®.`)}`}
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
            subtitle="As 10 fragrâncias masculinas mais elogiadas, marcantes e de alta performance à pronta-entrega."
            products={masculinos}
            onOpenModal={(prod) => setActiveModalProduct(prod)}
          />
        ) : selectedCategory === 'top-feminino' ? (
          /* Only Feminine Top 10 View */
          <ProductCarousel
            sectionId="femininos"
            icon={Flower2}
            eyebrow="SELEÇÃO OFICIAL 2026"
            title="Os 10 Melhores Perfumes Árabes Femininos"
            subtitle="As 10 fragrâncias femininas mais elegantes, doces, cremosas e sofisticadas da perfumaria árabe."
            products={femininos}
            onOpenModal={(prod) => setActiveModalProduct(prod)}
          />
        ) : (
          /* "All" Category View: Clean Organised Carousels for both Top 10 Collections! */
          <>
            <ProductCarousel
              sectionId="masculinos"
              icon={Crown}
              eyebrow="SELEÇÃO OFICIAL 2026"
              title="Os 10 Melhores Perfumes Árabes Masculinos"
              subtitle="As fragrâncias masculinas mais elogiadas, versáteis e potentes para noites, encontros e dia a dia."
              products={masculinos}
              onOpenModal={(prod) => setActiveModalProduct(prod)}
            />

            <ProductCarousel
              sectionId="femininos"
              icon={Flower2}
              eyebrow="SELEÇÃO OFICIAL 2026"
              title="Os 10 Melhores Perfumes Árabes Femininos"
              subtitle="As fragrâncias femininas mais doces, cremosas, florais e sensuais da perfumaria árabe."
              products={femininos}
              onOpenModal={(prod) => setActiveModalProduct(prod)}
            />
          </>
        )}

        {/* Custom Global Orders Banner (Todos os perfumes do mundo) */}
        <CustomOrderBanner />

        {/* Decants Experience Section */}
        <DecantsSection />

        {/* Trust & Quality Pillars */}
        <TrustSection />

        {/* Goods & Upcoming Drops Teaser */}
        <GoodsSection />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Interactive Detail Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
