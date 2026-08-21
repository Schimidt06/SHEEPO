import { brand } from '../config/brand';
import { MessageCircle, ShieldCheck, Truck } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com o atendimento da SHEEPO®.'
  )}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand */}
          <div>
            <div className="brand-logo-wrap" style={{ marginBottom: '1.25rem' }}>
              <div className="brand-logo-badge">
                <img src="/logo.svg" alt="SHEEPO®" className="brand-logo-img" />
              </div>
              <div className="brand-logo-text">
                <span className="brand-logo-title">SHEEPO®</span>
                <span className="brand-logo-tagline">{brand.tagline}</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Vitrine oficial de fragrâncias árabes autênticas e curadoria internacional de perfumes importados lacrados.
            </p>
          </div>

          {/* Col 2: Categorias */}
          <div>
            <h4 className="footer-col-title">Curadoria Oficial</h4>
            <div className="footer-links-list">
              <a href="#catalogo" onClick={() => onSelectCategory('arabes-masculino')} className="footer-link">
                Top 10 Árabes Masculinos
              </a>
              <a href="#catalogo" onClick={() => onSelectCategory('arabes-feminino')} className="footer-link">
                Top 10 Árabes Femininos
              </a>
              <a href="#catalogo" onClick={() => onSelectCategory('importados-masculino')} className="footer-link">
                Top 10 Importados Masculinos
              </a>
              <a href="#catalogo" onClick={() => onSelectCategory('importados-feminino')} className="footer-link">
                Top 10 Importados Femininos
              </a>
              <a href="#encomendas" className="footer-link">
                Importados Sob Encomenda
              </a>
            </div>
          </div>

          {/* Col 3: Atendimento & Frete */}
          <div>
            <h4 className="footer-col-title">Atendimento & Entregas</h4>
            <div className="footer-links-list">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                style={{ color: '#34d399', fontWeight: 600 }}
              >
                <MessageCircle size={16} /> WhatsApp: (14) 99707-0804
              </a>
              <span className="footer-link" style={{ color: '#ffffff' }}>
                <Truck size={15} color="var(--accent-gold)" /> Frete Grátis para Jaú/SP
              </span>
              <span className="footer-link" style={{ color: 'var(--text-muted)' }}>
                Demais regiões: Consultar frete no WhatsApp
              </span>
              <span className="footer-link" style={{ color: 'var(--text-muted)' }}>
                Horário: Seg. a Sáb. 09h às 20h
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SHEEPO® — Todos os direitos reservados.
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={15} color="var(--accent-gold)" /> Curadoria 100% Original & Frascos Lacrados
          </span>
        </div>
      </div>
    </footer>
  );
}
