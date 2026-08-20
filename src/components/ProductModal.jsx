import { brand } from '../config/brand';
import { X, MessageCircle, Sparkles, Clock, Compass, Layers, ShieldCheck, Crown, Flower2 } from 'lucide-react';
import { useEffect } from 'react';

export default function ProductModal({ product, onClose }) {
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

  const whatsappMessage = `Olá! Gostaria de consultar o valor e a disponibilidade do perfume ${product.name} (${product.brand} - ${product.volume}) na SHEEPO®.`;
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Media Wrap */}
          <div className="modal-media-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="modal-img"
            />
          </div>

          {/* Body */}
          <div className="modal-body">
            <div>
              <span className="modal-eyebrow">
                {product.gender === 'masculino' ? '👑 Top 10 Masculino' : '🌸 Top 10 Feminino'} • {product.brand} • {product.volume}
              </span>
              <h2 className="modal-title">{product.name}</h2>
              <p className="modal-desc" style={{ marginTop: '0.5rem' }}>
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

            {product.ocasiao && (
              <div className="perf-box">
                <span className="perf-box-label">Ocasião Recomendada</span>
                <p className="perf-box-val" style={{ fontSize: '0.78rem', fontWeight: 500, marginTop: '0.2rem' }}>
                  {product.ocasiao}
                </p>
              </div>
            )}

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-modal"
            >
              <MessageCircle size={19} />
              <span>Consultar Valor no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
