import { ShieldCheck, Truck, CheckCircle2, Globe } from 'lucide-react';

export default function TrustSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "100% Originais Selados",
      desc: "Garantia absoluta de procedência internacional. Frascos novos, lacrados de fábrica e com procedência conferida."
    },
    {
      icon: Truck,
      title: "Frete Grátis para Jaú/SP",
      desc: "Entrega expressa gratuita para toda a cidade de Jaú. Demais regiões do Brasil com envio seguro cotado no WhatsApp."
    },
    {
      icon: CheckCircle2,
      title: "Edições & Apresentação",
      desc: "Imagens meramente ilustrativas. O design da caixa e frasco pode variar conforme a edição especial, lote e volumetria (ML)."
    },
    {
      icon: Globe,
      title: "Cotações no Dólar & Catálogo Global",
      desc: "Preços calculados diariamente com base na cotação cambial do Dólar (USD). Trazemos qualquer perfume importado sob encomenda."
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
