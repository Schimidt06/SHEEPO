import React from 'react';
import { brand } from '../config/brand';
import { X, Trash2, MessageCircle, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function QuoteDrawer({ isOpen, onClose, items, onRemoveItem, onClearAll }) {
  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let message = `Olá! Gostaria de consultar o valor e a disponibilidade dos seguintes perfumes (Frascos Lacrados Originais) na SHEEPO®:\n\n`;
    
    items.forEach((item, index) => {
      const imgUrl = `${window.location.origin}${item.image}`;
      message += `${index + 1}. *${item.name}* (${item.brand} - ${item.volume})\n${imgUrl}\n\n`;
    });

    message += `Poderia me informar valores e formas de envio? Obrigado!`;

    const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="quote-drawer-overlay" onClick={onClose}>
      <div className="quote-drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="quote-drawer-header">
          <div className="quote-drawer-title-wrap">
            <ShoppingBag size={22} className="text-gold" />
            <div>
              <h3 className="quote-drawer-title">Minha Cotação</h3>
              <span className="quote-drawer-subtitle">
                {items.length} {items.length === 1 ? 'perfume selecionado' : 'perfumes selecionados'}
              </span>
            </div>
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose} aria-label="Fechar sacola">
            <X size={18} />
          </button>
        </div>

        {/* Notice */}
        <div className="quote-drawer-notice">
          <ShieldCheck size={16} className="text-emerald" />
          <span>Apenas frascos lacrados 100% originais de fábrica.</span>
        </div>

        {/* List of Items */}
        <div className="quote-drawer-body">
          {items.length === 0 ? (
            <div className="quote-drawer-empty">
              <ShoppingBag size={48} style={{ opacity: 0.25, margin: '0 auto 1rem' }} />
              <h4>Sua lista de cotação está vazia</h4>
              <p>Navegue pelo catálogo e adicione perfumes para consultar todos juntos de uma só vez pelo WhatsApp.</p>
            </div>
          ) : (
            <div className="quote-items-list">
              {items.map((item) => (
                <div key={item.id} className="quote-item-card">
                  <img src={item.image} alt={item.name} className="quote-item-img" />
                  <div className="quote-item-info">
                    <span className="quote-item-brand">{item.brand}</span>
                    <h4 className="quote-item-name">{item.name}</h4>
                    <span className="quote-item-vol">{item.volume} • Frasco Lacrado</span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="quote-item-remove-btn"
                    title="Remover da cotação"
                    aria-label="Remover perfume"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="quote-drawer-footer">
            <div className="quote-drawer-footer-actions">
              <button onClick={onClearAll} className="btn-clear-quote">
                Limpar Lista
              </button>
              <button onClick={handleSendWhatsApp} className="btn-whatsapp-quote">
                <MessageCircle size={18} />
                <span>Consultar {items.length} {items.length === 1 ? 'Item' : 'Itens'} no WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
