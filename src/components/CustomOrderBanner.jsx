import { brand } from '../config/brand';
import { MessageCircle, Globe, Check } from 'lucide-react';

export default function CustomOrderBanner() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Procuro um perfume específico que não vi na vitrine. Gostaria de verificar a disponibilidade sob encomenda com a SHEEPO®.'
  )}`;

  return (
    <section id="encomendas" className="custom-order-section">
      <div className="container">
        <div className="custom-order-card">
          <div>
            <div className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>
              <Globe size={15} />
              <span>CATÁLOGO GLOBAL SHEEPO® • ENCOMENDAS SOB MEDIDA</span>
            </div>

            <h2 className="section-title custom-order-title">
              Não encontrou o perfume que procurava?
            </h2>

            <p className="custom-order-desc">
              Temos acesso direto aos maiores distribuidores mundiais. <strong>Trabalhamos com todos os perfumes árabes e importados de grife do mundo</strong> (Creed, Parfums de Marly, Tom Ford, Dior, Chanel, Xerjoff, Lattafa, Afnan e muito mais).
            </p>

            <div className="custom-order-badges">
              <span className="custom-order-badge-item">
                <Check size={16} color="var(--accent-gold)" /> Qualquer Marca ou Frasco
              </span>
              <span className="custom-order-badge-item">
                <Check size={16} color="var(--accent-gold)" /> 100% Originais Lacrados
              </span>
              <span className="custom-order-badge-item">
                <Check size={16} color="var(--accent-gold)" /> Cotação Rápida no WhatsApp
              </span>
            </div>

            <div className="custom-order-cta-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-modal"
                style={{
                  display: 'inline-flex',
                  width: 'auto',
                  padding: '0 2rem',
                  fontSize: '0.82rem'
                }}
              >
                <MessageCircle size={18} />
                <span>Chamar no WhatsApp e Encomendar o Seu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
