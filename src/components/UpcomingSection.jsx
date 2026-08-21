import { brand } from '../config/brand';
import { upcomingDrops } from '../data/products';
import { Sparkles, Bell, Globe, Droplets, Crown } from 'lucide-react';

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
    <section id="novidades" className="upcoming-section">
      <div className="container">
        <div className="upcoming-header">
          <span className="hero-badge" style={{ marginBottom: '1rem' }}>
            <Sparkles size={12} /> PRÓXIMOS LANÇAMENTOS • PERFUMARIA EXCLUSIVA
          </span>

          <h2 className="section-title">
            Em breve, muitas novidades.
          </h2>

          <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
            Estamos preparando a chegada de novos lotes de perfumaria de nicho, lançamentos árabes e kits exclusivos para nossa vitrine:
          </p>
        </div>

        {/* Drops Grid */}
        <div className="upcoming-grid">
          {upcomingDrops.map((drop) => {
            const IconComponent = iconMap[drop.id] || Sparkles;
            return (
              <div key={drop.id} className="upcoming-card">
                <div className="upcoming-card-top">
                  <div className="trust-icon-box" style={{ width: '40px', height: '40px' }}>
                    <IconComponent size={20} />
                  </div>
                  <span className="mini-tag" style={{ background: 'rgba(212, 175, 55, 0.15)', color: 'var(--accent-gold-light)', fontWeight: 600 }}>
                    {drop.tag}
                  </span>
                </div>

                <h3 className="upcoming-card-title">
                  {drop.title}
                </h3>

                <p className="upcoming-card-desc">
                  {drop.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* VIP Access Callout */}
        <div className="upcoming-vip-card">
          <h4 className="upcoming-vip-title">
            Quer receber os novos frascos em primeira mão?
          </h4>
          <p className="upcoming-vip-desc">
            Entre na nossa lista VIP de avisos no WhatsApp e tenha prioridade de escolha e condições exclusivas nos próximos lotes de perfumes.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-modal"
            style={{ display: 'inline-flex', width: 'auto', padding: '0 2rem', fontSize: '0.82rem' }}
          >
            <Bell size={17} />
            <span>Entrar na Lista VIP de Perfumes</span>
          </a>
        </div>
      </div>
    </section>
  );
}
