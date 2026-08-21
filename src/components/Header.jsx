import React from 'react';
import { brand } from '../config/brand';
import { MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';

export default function Header({ 
  activeCategory, 
  onSelectCategory, 
  quoteCount = 0, 
  onOpenQuoteDrawer,
  onOpenQuizModal
}) {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo catálogo oficial da SHEEPO® e gostaria de entrar em contato.'
  )}`;

  return (
    <>
      {/* Top Announcement Marquee */}
      <div className="announcement-bar">
        <div className="announcement-track">
          <div className="announcement-content">
            <span className="badge-live">
              <span className="pulse-dot"></span> ATENDIMENTO ONLINE VIA WHATSAPP
            </span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>
              🚚 FRETE GRÁTIS PARA JAÚ/SP
            </span>
            <span>✦ 100% PERFUMES ORIGINAIS LACRADOS</span>
            <span>✦ COTAÇÕES VARIÁVEIS CONFORME O DÓLAR (USD)</span>
            <span>✦ IMAGENS ILUSTRATIVAS (CAIXAS PODEM VARIAR CONFORME EDIÇÃO/ML)</span>
            <span>✦ ENCOMENDAS DE QUALQUER PERFUME IMPORTADO DO MUNDO</span>
          </div>
          <div className="announcement-content" aria-hidden="true">
            <span className="badge-live">
              <span className="pulse-dot"></span> ATENDIMENTO ONLINE VIA WHATSAPP
            </span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>
              🚚 FRETE GRÁTIS PARA JAÚ/SP
            </span>
            <span>✦ 100% PERFUMES ORIGINAIS LACRADOS</span>
            <span>✦ COTAÇÕES VARIÁVEIS CONFORME O DÓLAR (USD)</span>
            <span>✦ IMAGENS ILUSTRATIVAS (CAIXAS PODEM VARIAR CONFORME EDIÇÃO/ML)</span>
            <span>✦ ENCOMENDAS DE QUALQUER PERFUME IMPORTADO DO MUNDO</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container site-header__inner">
          <a href="#" className="brand-logo-wrap">
            <div className="brand-logo-badge">
              <img 
                src="/logo.svg" 
                alt="SHEEPO®" 
                className="brand-logo-img" 
              />
            </div>
            <div className="brand-logo-text">
              <span className="brand-logo-title">SHEEPO®</span>
              <span className="brand-logo-tagline">{brand.tagline}</span>
            </div>
          </a>

          {/* Quick Category Anchors */}
          <nav className="header-nav">
            <button
              onClick={() => onSelectCategory('all')}
              className={`nav-link-btn ${activeCategory === 'all' ? 'active' : ''}`}
            >
              Todos
            </button>
            <button
              onClick={() => onSelectCategory('arabes-masculino')}
              className={`nav-link-btn ${activeCategory === 'arabes-masculino' ? 'active' : ''}`}
            >
              Árabes Masc.
            </button>
            <button
              onClick={() => onSelectCategory('arabes-feminino')}
              className={`nav-link-btn ${activeCategory === 'arabes-feminino' ? 'active' : ''}`}
            >
              Árabes Fem.
            </button>
            <button
              onClick={() => onSelectCategory('importados-masculino')}
              className={`nav-link-btn ${activeCategory === 'importados-masculino' ? 'active' : ''}`}
            >
              Importados Masc.
            </button>
            <button
              onClick={() => onSelectCategory('importados-feminino')}
              className={`nav-link-btn ${activeCategory === 'importados-feminino' ? 'active' : ''}`}
            >
              Importados Fem.
            </button>
            <a href="#encomendas" className="nav-link-btn">
              Encomendas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            {/* Quiz Trigger */}
            <button
              onClick={onOpenQuizModal}
              className="btn-quiz-header"
              title="Descubra seu perfume ideal em 3 passos"
            >
              <Sparkles size={16} />
              <span className="hide-mobile">Quiz Olfativo</span>
            </button>

            {/* Quote Bag Button */}
            <button
              onClick={onOpenQuoteDrawer}
              className="btn-quote-header"
              title="Ver minha lista de cotação"
              aria-label="Ver sacola de cotação"
            >
              <ShoppingBag size={18} />
              <span className="hide-mobile">Cotação</span>
              {quoteCount > 0 && (
                <span className="header-quote-badge">{quoteCount}</span>
              )}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-header"
            >
              <MessageCircle size={17} />
              <span className="hide-mobile">Contato</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
