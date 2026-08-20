import { brand } from '../config/brand';
import { MessageCircle, Globe, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function CustomOrderBanner() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Procuro um perfume específico que não vi na vitrine. Gostaria de verificar a disponibilidade sob encomenda com a SHEEPO®.'
  )}`;

  return (
    <section id="encomendas" style={{ padding: '3.5rem 0 4rem' }}>
      <div className="container">
        <div style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.12) 0%, transparent 50%), linear-gradient(135deg, #171822 0%, #0f1015 100%)',
          border: '1px solid var(--border-gold)',
          borderRadius: '24px',
          padding: '3rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.08)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="section-eyebrow" style={{ color: 'var(--accent-gold)' }}>
                <Globe size={15} />
                <span>CATÁLOGO GLOBAL SHEEPO® • ENCOMENDAS SOB MEDIDA</span>
              </div>

              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginTop: '0.5rem' }}>
                Não encontrou o perfume que procurava?
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6, marginTop: '0.75rem', maxWidth: '680px' }}>
                Temos acesso direto aos maiores distribuidores mundiais. <strong>Trabalhamos com todos os perfumes árabes e importados de grife do mundo</strong> (Creed, Parfums de Marly, Tom Ford, Dior, Chanel, Xerjoff, Lattafa, Afnan e muito mais).
              </p>

              <div style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginTop: '1.5rem',
                fontSize: '0.82rem',
                color: 'var(--accent-gold-light)',
                fontWeight: 600
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Check size={16} color="var(--accent-gold)" /> Qualquer Marca ou Frasco
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Check size={16} color="var(--accent-gold)" /> 100% Originais Lacrados
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Check size={16} color="var(--accent-gold)" /> Cotação Rápida no WhatsApp
                </span>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-modal"
                  style={{
                    display: 'inline-flex',
                    width: 'auto',
                    padding: '0.9rem 2.25rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <MessageCircle size={19} />
                  <span>Chamar no WhatsApp e Encomendar o Seu</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
