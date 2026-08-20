import { brand } from '../config/brand';
import { MessageCircle } from 'lucide-react';

export default function Header({ activeCategory, onSelectCategory }) {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Vim pelo catálogo oficial da SHEEPO® e gostaria de entrar em contato.'
  )}`;

  return (
    <>
      {/* Top Announcement Marquee */}
      <div className="announcement-bar">
        <div className="announcement-track">
          <span className="badge-live">
            <span className="pulse-dot"></span> ATENDIMENTO ONLINE VIA WHATSAPP
          </span>
          <span style={{ color: '#ffffff', fontWeight: 600 }}>
            🚚 FRETE GRÁTIS PARA JAÚ/SP
          </span>
          <span>✦ DEMAIS REGIÕES: CONSULTAR FRETE NO WHATSAPP</span>
          <span>✦ 100% PERFUMES ORIGINAIS LACRADOS</span>
          <span>✦ ENCOMENDAS DE QUALQUER PERFUME DO MUNDO</span>
          <span>✦ EM BREVE: MUITAS NOVIDADES</span>
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
              onClick={() => onSelectCategory('top-masculino')}
              className={`nav-link-btn ${activeCategory === 'top-masculino' ? 'active' : ''}`}
            >
              Top 10 Masculinos
            </button>
            <button
              onClick={() => onSelectCategory('top-feminino')}
              className={`nav-link-btn ${activeCategory === 'top-feminino' ? 'active' : ''}`}
            >
              Top 10 Femininos
            </button>
            <a href="#encomendas" className="nav-link-btn">
              Encomendas
            </a>
            <a href="#novidades" className="nav-link-btn">
              Novidades
            </a>
          </nav>

          {/* Direct WhatsApp Contact CTA */}
          <div className="header-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-header"
            >
              <MessageCircle size={17} />
              <span>Entrar em Contato</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
