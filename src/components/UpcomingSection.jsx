import { brand } from '../config/brand';
import { upcomingDrops } from '../data/products';
import { Sparkles, Bell, Globe, Droplets, Crown, Flame } from 'lucide-react';

export default function UpcomingSection() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de entrar na lista VIP para ser avisado sobre os próximos lançamentos de perfumes na SHEEPO®.'
  )}`;

  const iconMap = {
    'importados-nicho': Globe,
    'arabes-novos': Sparkles,
    'kits-decants': Droplets,
    'extrait-parfum': Crown
  };

  return (
    <section id="novidades" style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--border-subtle)', background: 'linear-gradient(180deg, var(--bg-main) 0%, #111218 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
          <span className="hero-badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={12} /> PRÓXIMOS LANÇAMENTOS • PERFUMARIA EXCLUSIVA
          </span>

          <h2 className="section-title" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3rem)' }}>
            Em breve, muitas novidades.
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.75rem' }}>
            Estamos preparando a chegada de novos lotes de perfumaria de nicho, lançamentos árabes e kits exclusivos para nossa vitrine:
          </p>
        </div>

        {/* Drops Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {upcomingDrops.map((drop) => {
            const IconComponent = iconMap[drop.id] || Sparkles;
            return (
              <div
                key={drop.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="trust-icon-box" style={{ width: '42px', height: '42px' }}>
                    <IconComponent size={22} />
                  </div>
                  <span className="mini-tag" style={{ background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold-light)', fontWeight: 600 }}>
                    {drop.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                  {drop.title}
                </h3>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {drop.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* VIP Access Callout */}
        <div style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%), var(--bg-surface)',
          border: '1px solid var(--border-gold)',
          borderRadius: '20px',
          padding: '2.5rem 1.5rem',
          textAlign: 'center',
          maxWidth: '740px',
          margin: '0 auto',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
        }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Quer receber os novos frascos em primeira mão?
          </h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', marginTop: '0.4rem', maxWidth: '540px', margin: '0.4rem auto 1.5rem' }}>
            Entre na nossa lista VIP de avisos no WhatsApp e tenha prioridade de escolha e condições exclusivas nos próximos lotes de perfumes.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-modal"
            style={{ display: 'inline-flex', width: 'auto', padding: '0.85rem 2rem', fontSize: '0.82rem' }}
          >
            <Bell size={17} />
            <span>Entrar na Lista VIP de Perfumes</span>
          </a>
        </div>
      </div>
    </section>
  );
}
