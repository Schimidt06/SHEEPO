import React, { useEffect } from 'react';
import { brand } from '../config/brand';
import { X, MessageCircle, Share2, Plus, Check, ShieldCheck, DollarSign, Package } from 'lucide-react';

export default function ProductModal({ product, onClose, onToggleQuote, isInQuote, onShare }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) return null;

  const imageUrl = `${window.location.origin}${product.image}`;
  const whatsappMessage = `Olá! Gostaria de consultar o valor e a disponibilidade do perfume ${product.name} (${product.brand} - ${product.volume} - Frasco Lacrado) na SHEEPO®.\n\n${imageUrl}`;
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
          <X size={18} />
        </button>

        <div className="modal-grid">
          {/* Media Wrap */}
          <div className="modal-media-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="modal-img"
            />
            <div className="modal-img-badge">
              <ShieldCheck size={13} className="text-emerald" />
              <span>100% Original Lacrado</span>
            </div>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div>
              <div className="modal-top-row">
                <span className="modal-eyebrow">
                  {product.gender === 'masculino' ? '👑 Top 10 Masculino' : '🌸 Top 10 Feminino'} • {product.brand} • {product.volume}
                </span>
                
                {onShare && (
                  <button
                    onClick={() => onShare(product)}
                    className="modal-share-btn"
                    title="Compartilhar este perfume"
                    aria-label="Compartilhar perfume"
                  >
                    <Share2 size={14} />
                    <span>Compartilhar</span>
                  </button>
                )}
              </div>

              <h2 className="modal-title">{product.name}</h2>
              <p className="modal-desc" style={{ marginTop: '0.4rem' }}>
                {product.description}
              </p>
            </div>

            {/* Olfactory Pyramid */}
            {product.notes && (
              <div className="notes-pyramid">
                <div className="pyramid-row">
                  <span className="pyramid-label">✦ Notas de Topo (Abertura):</span>
                  <span className="pyramid-value">{product.notes.topo}</span>
                </div>
                <div className="pyramid-row">
                  <span className="pyramid-label">✦ Notas de Coração (Corpo):</span>
                  <span className="pyramid-value">{product.notes.coracao}</span>
                </div>
                <div className="pyramid-row">
                  <span className="pyramid-label">✦ Notas de Fundo (Fixação):</span>
                  <span className="pyramid-value">{product.notes.fundo}</span>
                </div>
              </div>
            )}

            {/* Performance & Ocasião */}
            <div className="performance-grid">
              <div className="perf-box">
                <span className="perf-box-label">Fixação Estimada</span>
                <p className="perf-box-val">{product.fixacao || 'Alta (8h+)'}</p>
              </div>
              <div className="perf-box">
                <span className="perf-box-label">Projeção</span>
                <p className="perf-box-val">{product.projecao || 'Marcante'}</p>
              </div>
            </div>

            {/* Termômetro de Blind Buy & Guia de Borrifadas */}
            <div className="modal-expert-grid">
              {/* Blind Buy Box */}
              {product.blindBuy && (
                <div className={`expert-card expert-card--${product.blindBuy.level}`}>
                  <div className="expert-card-header">
                    <span className="expert-card-title">🎯 Compra no Escuro (Blind Buy)</span>
                    <span className={`blind-buy-badge blind-buy-badge--${product.blindBuy.level}`}>
                      {product.blindBuy.label}
                    </span>
                  </div>
                  <p className="expert-card-desc">{product.blindBuy.note}</p>
                </div>
              )}

              {/* Guia de Borrifadas */}
              {product.sprayGuide && (
                <div className="expert-card expert-card--spray">
                  <div className="expert-card-header">
                    <span className="expert-card-title">🧴 Guia de Borrifadas & Aplicação</span>
                    <span className="spray-guide-count-badge">
                      {product.sprayGuide.sprays}
                    </span>
                  </div>
                  <div className="expert-spray-points">
                    <span>📍 <strong>Pontos ideais:</strong> {product.sprayGuide.points}</span>
                  </div>
                  <p className="expert-card-desc" style={{ marginTop: '0.35rem' }}>
                    💡 <strong>Dica do Especialista:</strong> {product.sprayGuide.tip}
                  </p>
                </div>
              )}
            </div>

            {product.ocasiao && (
              <div className="perf-box">
                <span className="perf-box-label">Ocasião Recomendada</span>
                <p className="perf-box-val" style={{ fontSize: '0.78rem', fontWeight: 500, marginTop: '0.2rem' }}>
                  {product.ocasiao}
                </p>
              </div>
            )}

            {/* Transparency & Disclaimer Box */}
            <div className="modal-disclaimer-card">
              <div className="modal-disclaimer-item">
                <Package size={14} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Imagens Ilustrativas:</strong> A caixa e apresentação podem variar de acordo com o lote, edição e volumetria (ML). Frascos 100% originais lacrados.</span>
              </div>
              <div className="modal-disclaimer-item">
                <DollarSign size={14} className="text-emerald" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Cotação em Dólar:</strong> Valores sujeitos a variação cambial diária conforme a cotação do Dólar (USD).</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="modal-actions-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-modal"
              >
                <MessageCircle size={18} />
                <span>Consultar no WhatsApp</span>
              </a>

              {onToggleQuote && (
                <button
                  onClick={() => onToggleQuote(product)}
                  className={`btn-modal-quote ${isInQuote ? 'active' : ''}`}
                >
                  {isInQuote ? <Check size={18} /> : <Plus size={18} />}
                  <span>{isInQuote ? 'Na Cotação' : 'Adicionar à Cotação'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
