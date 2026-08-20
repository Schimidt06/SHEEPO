import { ShieldCheck, Truck, CheckCircle2, Globe } from 'lucide-react';

export default function TrustSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Originais Selados",
      desc: "Garantia absoluta de procedência internacional. Frascos novos, lacrados de fábrica e com batch code conferido."
    },
    {
      icon: Truck,
      title: "Frete Grátis para Jaú/SP",
      desc: "Entrega expressa gratuita para toda a cidade de Jaú. Demais regiões do Brasil com frete calculado direto no WhatsApp."
    },
    {
      icon: CheckCircle2,
      title: "Frascos Lacrados na Caixa",
      desc: "Trabalhamos exclusivamente com perfumes cheios, lacrados e novos na caixa original de fábrica."
    },
    {
      icon: Globe,
      title: "Todos os Perfumes do Mundo",
      desc: "Trazemos qualquer perfume árabe, de nicho ou importado tradicional sob encomenda com cotação imediata."
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">✦ O PADRÃO SHEEPO®</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginTop: '0.35rem' }}>
            Por que escolher nossa curadoria?
          </h2>
        </div>

        <div className="trust-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="trust-card">
                <div className="trust-icon-box">
                  <Icon size={24} />
                </div>
                <h3 className="trust-card-title">{pillar.title}</h3>
                <p className="trust-card-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
