import React from 'react';
import { brand } from '../config/brand';
import { MessageCircle, Eye, Crown, Flower2, Share2, Plus, Check } from 'lucide-react';

export default function ProductCard({ product, onOpenModal, onToggleQuote, isInQuote, onShare }) {
  const imageUrl = `${window.location.origin}${product.image}`;
  const whatsappMessage = `Olá! Gostaria de consultar o valor e a disponibilidade do perfume ${product.name} (${product.brand} - Frasco Lacrado) na SHEEPO®.\n\n${imageUrl}`;
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="product-card">
      {/* Top Badges */}
      <div className="product-card__badge-top">
        {product.curation && (
          <span className="pill-badge pill-badge--featured">
            {product.gender === 'masculino' ? <Crown size={10} /> : <Flower2 size={10} />} {product.curation}
          </span>
        )}
        <span className="pill-badge pill-badge--available">
          Frasco Lacrado
        </span>
      </div>

      {/* Image container */}
      <div 
        className="product-card__image-container"
        onClick={() => onOpenModal(product)}
        title="Clique para ver detalhes e pirâmide olfativa"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
        />
        
        {/* Quick share button on top right of image */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onShare) onShare(product);
          }}
          className="btn-card-quick-share"
          title="Compartilhar perfume"
          aria-label="Compartilhar perfume"
        >
          <Share2 size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="product-card__content">
        <div className="product-card__brand-row">
          <span className="product-card__brand">{product.brand}</span>
          <span className="product-card__volume">{product.volume}</span>
        </div>

        <h3 className="product-card__title" onClick={() => onOpenModal(product)}>
          {product.name}
        </h3>

        <p className="product-card__tagline">
          {product.tagline}
        </p>

        {/* Tags */}
        <div className="product-card__tags">
          {product.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="mini-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="product-card__actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-consultar-card"
            title="Consultar no WhatsApp"
          >
            <MessageCircle size={15} />
            <span>Consultar</span>
          </a>

          {onToggleQuote && (
            <button
              onClick={() => onToggleQuote(product)}
              className={`btn-quote-toggle ${isInQuote ? 'active' : ''}`}
              title={isInQuote ? "Remover da lista de cotação" : "Adicionar à lista de cotação"}
              aria-label="Adicionar à cotação"
            >
              {isInQuote ? <Check size={16} /> : <Plus size={16} />}
            </button>
          )}

          <button
            onClick={() => onOpenModal(product)}
            className="btn-details-card"
            title="Ver pirâmide olfativa e detalhes completos"
            aria-label="Ver detalhes"
          >
            <Eye size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}
