import React from 'react';
import { Info, DollarSign, Package, ShieldCheck } from 'lucide-react';

export default function TransparencyBanner() {
  return (
    <div className="container transparency-container">
      <div className="transparency-card">
        <div className="transparency-header">
          <div className="transparency-badge">
            <ShieldCheck size={14} className="text-gold" />
            <span>TRANSPARÊNCIA & GARANTIA SHEEPO®</span>
          </div>
          <span className="transparency-tag">Informações Importantes</span>
        </div>

        <div className="transparency-grid">
          <div className="transparency-item">
            <div className="transparency-icon-box">
              <Package size={16} />
            </div>
            <div className="transparency-item-text">
              <h4>Imagens Meramente Ilustrativas</h4>
              <p>O design da caixa, frasco e apresentação visual podem variar conforme o lote do fabricante, edições especiais e volumetria (ML).</p>
            </div>
          </div>

          <div className="transparency-item">
            <div className="transparency-icon-box">
              <DollarSign size={16} />
            </div>
            <div className="transparency-item-text">
              <h4>Valores Sujeitos à Variação do Dólar</h4>
              <p>Por se tratarem de perfumes 100% originais importados, todas as cotações e preços finais variam conforme a taxa cambial do Dólar (USD).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
