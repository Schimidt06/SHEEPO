import { brand } from '../config/brand';
import { Watch, Headphones, Sparkles, MessageCircle, Bell } from 'lucide-react';

export default function GoodsSection() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de entrar na lista VIP de aviso para os próximos drops de GOODS & ACESSÓRIOS da SHEEPO®.'
  )}`;

  return (
    <section id="goods" style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #181a24 0%, #111218 100%)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          padding: '3rem 2rem',
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <span className="hero-badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={12} /> PRÓXIMOS DROPS • GOODS & LIFESTYLE
          </span>

          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
            Relógios, Eletrônicos & Acessórios
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '580px', margin: '0.75rem auto 2rem', lineHeight: 1.6 }}>
            A expansão da SHEEPO® trará drops limitados de smartwatches, fones premium e acessórios exclusivos. Garanta prioridade de compra ao entrar na lista VIP.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-modal"
              style={{ display: 'inline-flex', width: 'auto', padding: '0.85rem 1.75rem' }}
            >
              <Bell size={17} />
              <span>Entrar na Lista VIP de Lançamento</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
