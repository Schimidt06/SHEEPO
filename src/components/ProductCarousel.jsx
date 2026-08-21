import { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel({ 
  title, 
  subtitle, 
  eyebrow, 
  products, 
  onOpenModal, 
  sectionId,
  icon: Icon,
  onToggleQuote,
  isItemInQuote,
  onShare
}) {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Check scroll position to enable/disable arrow buttons
  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [products]);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.querySelector('.product-card')?.offsetWidth || 280;
    const scrollAmount = direction === 'left' ? -(cardWidth + 18) * 1.5 : (cardWidth + 18) * 1.5;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Mouse Drag to Scroll for Desktop and Laptop users
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    if (e.target.closest('button') || e.target.closest('a')) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftState(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

  if (!products || products.length === 0) return null;

  return (
    <section id={sectionId} className="carousel-section">
      <div className="container">
        {/* Section Header with Title and Nav Arrows */}
        <div className="carousel-header">
          <div className="carousel-header__info">
            {eyebrow && (
              <span className="section-eyebrow">
                {Icon && <Icon size={14} />} {eyebrow}
              </span>
            )}
            <h2 className="section-title">
              {title}
            </h2>
            {subtitle && (
              <p className="section-subtitle">
                {subtitle}
              </p>
            )}
          </div>

          {/* Desktop Navigation Controls */}
          <div className="carousel-controls">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`carousel-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
              aria-label="Rolar produtos para a esquerda"
              title="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`carousel-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
              aria-label="Rolar produtos para a direita"
              title="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Track Container */}
        <div className="carousel-track-wrapper">
          <div
            ref={carouselRef}
            className={`carousel-track ${isDragging ? 'is-dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            tabIndex={0}
            role="region"
            aria-label={`Carrossel de ${title}`}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                scroll('left');
              } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                scroll('right');
              }
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="carousel-item">
                <ProductCard
                  product={product}
                  onOpenModal={onOpenModal}
                  onToggleQuote={onToggleQuote}
                  isInQuote={isItemInQuote ? isItemInQuote(product.id) : false}
                  onShare={onShare}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="carousel-mobile-indicator">
          <span className="font-mono">
            ← Deslize para explorar todos os {products.length} perfumes →
          </span>
        </div>
      </div>
    </section>
  );
}
