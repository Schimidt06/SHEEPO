import { brand } from '../config/brand';
import { MessageCircle, Eye, Sparkles, Crown, Flower2 } from 'lucide-react';

export default function ProductCard({ product, onOpenModal }) {
  const whatsappMessage = `Olá! Gostaria de consultar o valor e a disponibilidade do perfume ${product.name} (${product.brand}) na SHEEPO®.`;
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
          Disponível
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
      </div>

      {/* Content */}
      <div className="product-card__content">
        <div className="product-card__brand-row">
          <span className="product-card__brand">{product.brand}</span>
          <span className="product-card__volume">{product.volume}</span>
        </div>

        <h3 className="product-card__title">{product.name}</h3>

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
          >
            <MessageCircle size={15} />
            <span>Consultar Valor</span>
          </a>

          <button
            onClick={() => onOpenModal(product)}
            className="btn-details-card"
            title="Ver pirâmide olfativa e detalhes"
          >
            <Eye size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}
