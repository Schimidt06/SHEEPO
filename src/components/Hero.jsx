import { Sparkles, ShieldCheck, Truck, Sparkle, Globe, CheckCircle2 } from 'lucide-react';
import { brand } from '../config/brand';

export default function Hero({ onSelectCategory }) {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Olá! Gostaria de consultar um perfume com a SHEEPO®.'
  )}`;

  return (
    <section className="hero-section">
      <div className="hero-glow"></div>
      
      <div className="container hero-content">
        <div className="hero-badge">
          <Sparkles size={13} />
          <span>TOP 10 PERFUMES ÁRABES • SELEÇÃO OFICIAL 2026</span>
        </div>

        <h1 className="hero-title">
          Os melhores perfumes árabes & <br />
          <span className="hero-title-highlight">curadoria internacional.</span>
        </h1>

        <p className="hero-subtitle">
          Os 10 melhores masculinos e os 10 melhores femininos à pronta-entrega. Frascos novos e 100% lacrados. <strong>Frete grátis para Jaú/SP</strong> e envio para todo o Brasil. Trabalhamos com <strong>todos os perfumes árabes e importados do mundo</strong> sob encomenda.
        </p>

        {/* Value Props / Stats */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <div className="stat-card-icon">
              <ShieldCheck size={20} />
            </div>
            <div className="stat-card-title">100% Originais</div>
            <div className="stat-card-desc">Frascos lacrados de fábrica</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon">
              <Truck size={20} />
            </div>
            <div className="stat-card-title">Frete Grátis Jaú</div>
            <div className="stat-card-desc">Demais regiões consultar</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon">
              <CheckCircle2 size={20} />
            </div>
            <div className="stat-card-title">Frascos Lacrados</div>
            <div className="stat-card-desc">Procedência garantida</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon">
              <Globe size={20} />
            </div>
            <div className="stat-card-title">Todos os Perfumes</div>
            <div className="stat-card-desc">Árabes e importados do mundo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
