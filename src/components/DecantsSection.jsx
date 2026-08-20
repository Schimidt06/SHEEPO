import { brand } from '../config/brand';
import { decantsInfo } from '../data/products';
import { Droplets, Sparkles, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export default function DecantsSection() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de consultar os DECANTS disponíveis e valores de kits na SHEEPO®.'
  )}`;

  return (
    <section id="decants" className="decants-section">
      <div className="container">
        <div className="decants-card-hero">
          <div className="decants-grid">
            <div>
              <div className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>
                <Droplets size={16} />
                <span>EXPERIÊNCIA OLFATIVA • 5ML & 10ML</span>
              </div>

              <h2 className="section-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                {decantsInfo.title}
              </h2>

              <p style={{ color: 'var(--accent-gold-light)', fontSize: '1.05rem', fontWeight: 600, marginTop: '0.4rem' }}>
                {decantsInfo.subtitle}
              </p>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '1rem', maxWidth: '520px' }}>
                {decantsInfo.description}
              </p>

              {/* Sizes Available */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                {decantsInfo.sizes.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: '12px',
                      padding: '0.8rem 1.2rem'
                    }}
                  >
                    <span className="font-mono" style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                      Frasco {item.size}
                    </span>
                    <p style={{ fontSize: '0.72rem', color: 'var(--accent-gold-light)', marginTop: '0.15rem' }}>
                      {item.sprays}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-modal"
                  style={{ display: 'inline-flex', width: 'auto', padding: '0.9rem 2rem' }}
                >
                  <MessageCircle size={18} />
                  <span>Consultar Catálogo de Decants</span>
                </a>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="decants-benefits-grid">
              {decantsInfo.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <div style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <h4 className="benefit-item-title">{benefit.title}</h4>
                  <p className="benefit-item-desc">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
