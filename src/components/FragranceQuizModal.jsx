import React, { useState } from 'react';
import { products } from '../data/products';
import { brand } from '../config/brand';
import { X, Sparkles, RefreshCw, MessageCircle, Eye, CheckCircle2, ChevronRight, ArrowLeft, Plus } from 'lucide-react';

export default function FragranceQuizModal({ isOpen, onClose, onOpenProductModal, onAddToQuote, isItemInQuote }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    gender: '',
    occasion: '',
    profile: ''
  });

  if (!isOpen) return null;

  const handleSelectOption = (key, val) => {
    const updated = { ...answers, [key]: val };
    setAnswers(updated);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Results
    }
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ gender: '', occasion: '', profile: '' });
  };

  // Recommendation algorithm based on answers
  const getRecommendations = () => {
    let list = [...products];

    // Filter by gender if selected
    if (answers.gender === 'masculino') {
      list = list.filter(p => p.gender === 'masculino');
    } else if (answers.gender === 'feminino') {
      list = list.filter(p => p.gender === 'feminino');
    }

    // Score based on profile & occasion keywords in tags/description/notes
    const scored = list.map(product => {
      let score = 50; // base score
      const text = `${product.name} ${product.tagline} ${product.description} ${product.tags.join(' ')} ${product.ocasiao || ''} ${JSON.stringify(product.notes || {})}`.toLowerCase();

      // Occasion matching
      if (answers.occasion === 'noite') {
        if (text.includes('noite') || text.includes('balada') || text.includes('encontros') || text.includes('inverno') || text.includes('frio')) score += 25;
      } else if (answers.occasion === 'dia') {
        if (text.includes('dia') || text.includes('trabalho') || text.includes('assinatura') || text.includes('versátil') || text.includes('fresco')) score += 25;
      } else if (answers.occasion === 'luxo') {
        if (text.includes('sofisticado') || text.includes('luxo') || text.includes('nobre') || text.includes('nicho') || text.includes('elegante')) score += 25;
      }

      // Profile matching
      if (answers.profile === 'doce') {
        if (text.includes('baunilha') || text.includes('doce') || text.includes('gourmand') || text.includes('canela') || text.includes('fava tonka')) score += 30;
      } else if (answers.profile === 'amadeirado') {
        if (text.includes('madeira') || text.includes('oud') || text.includes('couro') || text.includes('âmbar') || text.includes('cedro') || text.includes('sândalo')) score += 30;
      } else if (answers.profile === 'fresco') {
        if (text.includes('fresco') || text.includes('cítrico') || text.includes('aquático') || text.includes('bergamota') || text.includes('limão') || text.includes('abacaxi')) score += 30;
      } else if (answers.profile === 'floral') {
        if (text.includes('floral') || text.includes('rosa') || text.includes('jasmim') || text.includes('frutado') || text.includes('frutas')) score += 30;
      }

      // High rank boost
      if (product.rank && product.rank <= 3) score += 10;

      return { product, match: Math.min(score, 99) };
    });

    scored.sort((a, b) => b.match - a.match);
    return scored.slice(0, 3);
  };

  const recommendations = step === 4 ? getRecommendations() : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quiz-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="quiz-header">
          <div className="quiz-badge">
            <Sparkles size={14} className="text-gold" />
            <span>CONSULTORIA OLFATIVA DIGITAL</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Fechar quiz">
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        {step <= 3 && (
          <div className="quiz-progress-bar-wrap">
            <div className="quiz-progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="quiz-step-content">
            <span className="quiz-step-num">Passo 1 de 3</span>
            <h2 className="quiz-question">Para quem você está escolhendo o perfume?</h2>
            <p className="quiz-hint">Isso nos ajuda a filtrar nossa curadoria exclusiva.</p>

            <div className="quiz-options-grid">
              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('gender', 'masculino')}
              >
                <span className="quiz-opt-icon">👑</span>
                <div className="quiz-opt-text">
                  <strong>Masculino</strong>
                  <span>Fragrâncias potentes, elegantes e de presença.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>

              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('gender', 'feminino')}
              >
                <span className="quiz-opt-icon">🌸</span>
                <div className="quiz-opt-text">
                  <strong>Feminino</strong>
                  <span>Aromas envolventes, doces, florais e marcantes.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>

              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('gender', 'all')}
              >
                <span className="quiz-opt-icon">✨</span>
                <div className="quiz-opt-text">
                  <strong>Tanto faz / Todos</strong>
                  <span>Quero ver as melhores opções da curadoria global.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="quiz-step-content">
            <button className="quiz-back-btn" onClick={() => setStep(1)}>
              <ArrowLeft size={16} /> Voltar
            </button>
            <span className="quiz-step-num">Passo 2 de 3</span>
            <h2 className="quiz-question">Qual é o momento ou ocasião principal de uso?</h2>
            <p className="quiz-hint">Perfumes brilham melhor de acordo com o ambiente e clima.</p>

            <div className="quiz-options-grid">
              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('occasion', 'noite')}
              >
                <span className="quiz-opt-icon">🌙</span>
                <div className="quiz-opt-text">
                  <strong>Noite, Baladas & Encontros</strong>
                  <span>Projeção marcante, sensual e que rende muitos elogios.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>

              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('occasion', 'dia')}
              >
                <span className="quiz-opt-icon">☀️</span>
                <div className="quiz-opt-text">
                  <strong>Dia a Dia, Assinatura & Trabalho</strong>
                  <span>Versátil, agradável, refinado e com ótima fixação.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>

              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('occasion', 'luxo')}
              >
                <span className="quiz-opt-icon">💎</span>
                <div className="quiz-opt-text">
                  <strong>Eventos Especiais & Alta Exclusividade</strong>
                  <span>Aura de luxo, nicho sofisticado e personalidade única.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="quiz-step-content">
            <button className="quiz-back-btn" onClick={() => setStep(2)}>
              <ArrowLeft size={16} /> Voltar
            </button>
            <span className="quiz-step-num">Passo 3 de 3</span>
            <h2 className="quiz-question">Qual perfil aromático mais combina com você?</h2>
            <p className="quiz-hint">Escolha a família olfativa que mais te atrai.</p>

            <div className="quiz-options-grid">
              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('profile', 'doce')}
              >
                <span className="quiz-opt-icon">🍨</span>
                <div className="quiz-opt-text">
                  <strong>Doce / Baunilha / Gourmand</strong>
                  <span>Cremoso, envolvente, canela, baunilha e notas quentes.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>

              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('profile', 'amadeirado')}
              >
                <span className="quiz-opt-icon">🌲</span>
                <div className="quiz-opt-text">
                  <strong>Amadeirado / Especiado / Oud</strong>
                  <span>Imponente, sândalo, couro, tabaco e especiarias nobres.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>

              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('profile', 'fresco')}
              >
                <span className="quiz-opt-icon">🍋</span>
                <div className="quiz-opt-text">
                  <strong>Fresco / Cítrico / Frutado Refrescante</strong>
                  <span>Energético, bergamota, abacaxi, notas marinhas e revigorantes.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>

              <button
                className="quiz-option-btn"
                onClick={() => handleSelectOption('profile', 'floral')}
              >
                <span className="quiz-opt-icon">🌹</span>
                <div className="quiz-opt-text">
                  <strong>Floral / Frutas Vermelhas / Sedutor</strong>
                  <span>Rosas, jasmim, frutas aveludadas e toque sensual.</span>
                </div>
                <ChevronRight size={18} className="quiz-opt-arrow" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && (
          <div className="quiz-step-content quiz-results-step">
            <div className="quiz-result-header">
              <Sparkles size={24} className="text-gold" />
              <h2 className="quiz-question" style={{ margin: 0 }}>Sua Combinação Perfeita</h2>
              <p className="quiz-hint">Selecionamos os perfumes que mais combinam com suas preferências:</p>
            </div>

            <div className="quiz-results-grid">
              {recommendations.map(({ product, match }) => {
                const inQuote = isItemInQuote && isItemInQuote(product.id);
                const whatsappMsg = `Olá! Fiz o Quiz Olfativo na SHEEPO® e o resultado foi o *${product.name}* (${product.brand} - Frasco Lacrado).\n\n${window.location.origin}${product.image}\n\nGostaria de consultar o valor e disponibilidade!`;
                const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

                return (
                  <div key={product.id} className="quiz-result-card">
                    <div className="quiz-result-match-badge">
                      <span>{match}% Compatível</span>
                    </div>

                    <div className="quiz-result-img-wrap">
                      <img src={product.image} alt={product.name} className="quiz-result-img" />
                    </div>

                    <div className="quiz-result-details">
                      <span className="quiz-result-brand">{product.brand} • Frasco Lacrado</span>
                      <h3 className="quiz-result-name">{product.name}</h3>
                      <p className="quiz-result-tagline">{product.tagline}</p>
                      
                      <div className="quiz-result-actions">
                        <button
                          onClick={() => {
                            onClose();
                            onOpenProductModal(product);
                          }}
                          className="btn-details-card"
                          title="Ver Pirâmide Olfativa"
                        >
                          <Eye size={16} /> Ver Pirâmide
                        </button>

                        <button
                          onClick={() => onAddToQuote(product)}
                          className={`btn-add-quote-card ${inQuote ? 'in-quote' : ''}`}
                        >
                          {inQuote ? <CheckCircle2 size={16} /> : <Plus size={16} />}
                          <span>{inQuote ? 'Na Cotação' : '+ Cotação'}</span>
                        </button>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp-quiz"
                        >
                          <MessageCircle size={16} />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="quiz-result-footer">
              <button onClick={handleReset} className="quiz-reset-btn">
                <RefreshCw size={15} /> Refazer Teste
              </button>
              <button onClick={onClose} className="btn-consultar-card" style={{ width: 'auto' }}>
                Explorar Catálogo Completo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
