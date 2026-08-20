# 🐑 SHEEPO® — Vitrine Oficial & Drops de Luxo

> **DROPS • FRAGRANCE • GOODS**  
> Vitrine digital de alta conversão e estética editorial para perfumaria árabe de nicho, fragrâncias importadas sob encomenda e lifestyle.

---

## 🚀 Tecnologias

- **React 19**
- **Vite 8**
- **Lucide React** (Ícones)
- **Vanilla CSS** (Design System com tokens, carrossel touch-friendly e zero dependências pesadas)

---

## 📦 Estrutura do Projeto

```
sheepo-store/
├── public/
│   ├── arabes/
│   │   ├── masculino/     # Fotos dos 10 Melhores Perfumes Masculinos
│   │   └── feminino/      # Fotos dos 10 Melhores Perfumes Femininos
│   ├── favicon.svg
│   └── logo.svg           # Logo oficial da SHEEPO®
├── src/
│   ├── components/
│   │   ├── CustomOrderBanner.jsx  # Banner de Encomendas Globais
│   │   ├── DecantsSection.jsx     # Seção "Don't Buy Blind" (5ml e 10ml)
│   │   ├── Footer.jsx             # Rodapé com canais oficiais
│   │   ├── GoodsSection.jsx       # Teaser de futuros drops (relógios, etc.)
│   │   ├── Header.jsx             # Topbar, Logo iluminada e navegação
│   │   ├── Hero.jsx               # Hero editorial de alto impacto
│   │   ├── ProductCard.jsx        # Card de produto com badge e CTA
│   │   ├── ProductCarousel.jsx    # Carrossel horizontal responsivo (mobile & desktop)
│   │   ├── ProductModal.jsx       # Modal com pirâmide olfativa e notas
│   │   └── TrustSection.jsx       # Pilares de confiança (Frete Jaú, Originais)
│   ├── config/
│   │   └── brand.js               # Configurações de WhatsApp e marca
│   ├── data/
│   │   └── products.js            # Catálogo oficial dos produtos
│   ├── App.jsx                    # Aplicação principal e orquestrador
│   ├── index.css                  # Design System e responsividade
│   └── main.jsx
├── vercel.json                    # Configuração para deploy na Vercel
└── vite.config.js
```

---

## 🛠️ Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## ☁️ Deploy na Vercel

O projeto está 100% pronto para a Vercel com o `vercel.json` configurado.
1. Conecte o repositório no dashboard da [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Clique em **Deploy**.
