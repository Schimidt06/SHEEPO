import { Sparkles, ShieldCheck, Truck, Globe, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow"></div>
      
      <div className="container hero-content">
        <div className="hero-badge">
          <Sparkles size={13} />
          <span>TOP 10 PERFUMES IMPORTADOS MAIS COMPRADOS DO BRASIL • SELEÇÃO 2026</span>
        </div>

        <h1 className="hero-title">
          Os 10 melhores perfumes importados & <br />
          <span className="hero-title-highlight">curadoria internacional.</span>
        </h1>

        <p className="hero-subtitle">
          Os 10 perfumes masculinos e 10 femininos mais comprados e desejados do Brasil. Frascos novos e <strong>100% lacrados de fábrica</strong>. <strong>Frete grátis para Jaú/SP</strong> e envio para todo o Brasil. Cotações no WhatsApp e encomendas de <strong>qualquer perfume importado do mundo</strong>.
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
            <div className="stat-card-title">Edições Lacradas</div>
            <div className="stat-card-desc">Imagens ilustrativas • Variação de ML</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon">
              <Globe size={20} />
            </div>
            <div className="stat-card-title">Cotação no Dólar</div>
            <div className="stat-card-desc">Todos os importados do mundo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
