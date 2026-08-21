// ─── CATÁLOGO OFICIAL SHEEPO® ───────────────────────────────────────────────
//
// 100% Focado em Perfumaria Lacrada de Alto Padrão:
// 4 Seções Oficiais:
// 1. Top 10 Árabes Masculinos
// 2. Top 10 Árabes Femininos
// 3. Top 10 Importados Masculinos (Mais Comprados no Brasil)
// 4. Top 10 Importados Femininos (Mais Comprados no Brasil)
// + Encomendas de Qualquer Perfume Importado do Mundo.
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  { id: "all", label: "Todos os Perfumes", icon: "Sparkles" },
  { id: "arabes-masculino", label: "Árabes Masculinos", icon: "Crown", count: 10 },
  { id: "arabes-feminino", label: "Árabes Femininos", icon: "Flower2", count: 10 },
  { id: "importados-masculino", label: "Importados Masculinos", icon: "Crown", count: 10 },
  { id: "importados-feminino", label: "Importados Femininos", icon: "Flower2", count: 10 },
  { id: "encomendas", label: "Importados Sob Encomenda", icon: "Globe", badge: "Global" },
  { id: "novidades", label: "Próximos Lançamentos", icon: "Sparkles", badge: "Novidades" }
];

export const occasions = [
  { id: "all", label: "Todos os Climas", icon: "Sparkles" },
  { id: "calor", label: "☀️ Calor & Dia a Dia", keywords: ["calor", "quente", "verão", "aquático", "cítrico", "sol", "fresco", "dia", "passeios"] },
  { id: "noite", label: "🌙 Noite & Balada", keywords: ["noite", "balada", "festa", "sedutor", "marcante", "especiado", "sensual", "vip"] },
  { id: "trabalho", label: "💼 Trabalho & Elegância", keywords: ["trabalho", "executivo", "elegante", "sofisticado", "profissional", "reuniões", "limpo", "nobre"] },
  { id: "inverno", label: "❄️ Frio & Encontros", keywords: ["frio", "inverno", "ameno", "romântico", "gourmand", "baunilha", "café", "quente", "cacau", "aconchegante"] }
];

export const products = [
  // ──────────────────────────────────────────────────────────────────────────
  // 👑 SEÇÃO 1: OS 10 MELHORES PERFUMES ÁRABES MASCULINOS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "lattafa-asad",
    name: "Asad",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 1,
    tagline: "Quente e especiado, lembra o Sauvage Elixir com excelente fixação e ótimo custo-benefício para noites.",
    description: "Uma das fragrâncias árabes mais elogiadas do mundo. Combina pimenta preta vibrante com abacaxi suculento sobre uma base densa de âmbar, café e baunilha encorpada.",
    notes: {
      topo: "Pimenta Preta, Abacaxi, Tabaco",
      coracao: "Café, Patchouli, Íris",
      fundo: "Âmbar, Baunilha, Madeira Seca, Benjoim"
    },
    tags: ["Árabe", "Top 10 Masculino", "Especiado", "Noturno", "Campeão de Elogios"],
    ocasiao: "Noites, encontros, eventos marcantes e clima ameno.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Forte (2h)",
    blindBuy: {
      level: "moderate",
      label: "Blind Buy Moderado",
      note: "Agrada quem aprecia perfumes quentes, encorpados e especiados (estilo Sauvage Elixir)."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e nuca",
      tip: "Fragrância potente. Em noites amenas, 3 borrifadas garantem rastro a noite inteira."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/lattafa-asad.png",
    featured: true
  },
  {
    id: "club-de-nuit-intense-man",
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    volume: "Eau de Toilette",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 2,
    tagline: "Famoso mundialmente pela potência cítrica e amadeirada inspirada no Aventus.",
    description: "Fenômeno global indiscutível. Abertura cítrica explosiva que evolui rapidamente para um coração amadeirado de bétula esfumaçada, jasmim e âmbar cinzento hipnótico.",
    notes: {
      topo: "Limão Siciliano, Abacaxi, Bergamota, Groselha Preta",
      coracao: "Bétula, Jasmim, Rosa",
      fundo: "Almíscar, Âmbar Cinzento, Patchouli, Baunilha"
    },
    tags: ["Árabe", "Top 10 Masculino", "Cítrico Amadeirado", "Best Seller Mundial", "Potente"],
    ocasiao: "Qualquer ocasião, trabalho, festas e encontros.",
    fixacao: "Extrema (10h+)",
    projecao: "Monstruosa",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Um dos maiores campeões de elogios mundiais. Agrada a todos os perfis masculinos."
    },
    sprayGuide: {
      sprays: "3 a 5 borrifadas",
      points: "Pescoço, pulsos e ombros",
      tip: "Abertura cítrica forte que seca para um amadeirado esfumado hipnótico."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/club-de-nuit-intense-man.png",
    featured: true
  },
  {
    id: "rasasi-hawas",
    name: "Hawas for Him",
    brand: "Rasasi",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 3,
    tagline: "Doce, fresco e aquático, ideal para o calor e muito elogiado pelo alto desempenho.",
    description: "Uma bomba aquática adocicada de altíssimo rendimento para o clima brasileiro. Combina ameixa suculenta, maçã fresca, notas marinhas e âmbar cinzento sensual.",
    notes: {
      topo: "Maçã, Bergamota, Limão, Canela",
      coracao: "Ameixa, Flor de Laranjeira, Cardamomo",
      fundo: "Âmbar Cinzento, Almíscar, Madeira Flutuante, Patchouli"
    },
    tags: ["Árabe", "Top 10 Masculino", "Aquático Doce", "Verão & Calor", "Elogios Imediatos"],
    ocasiao: "Dias quentes, praia, sunsets, baladas e encontros casuais.",
    fixacao: "Monstruosa (10h - 12h)",
    projecao: "Muito Forte",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Impossível errar: o melhor árabe para o clima brasileiro com fixação épica."
    },
    sprayGuide: {
      sprays: "4 a 6 borrifadas",
      points: "Pescoço, peito e pulsos",
      tip: "Resiste a dias de calor intenso e suor mantendo um frescor doce irresistível."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/rasasi-hawas.png",
    featured: true
  },
  {
    id: "lattafa-fakhar-black",
    name: "Fakhar Black",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 4,
    tagline: "Versátil e elegante, com notas de lavanda e maçã que lembram o Y EDP da Yves Saint Laurent.",
    description: "O epítome do homem moderno e refinado. Combina maçã verde fresca, gengibre e sálvia com fava tonka e cedro elegante em um frasco imponente.",
    notes: {
      topo: "Maçã Verde, Bergamota, Gengibre",
      coracao: "Lavanda, Sálvia, Gerânio, Bagas de Zimbro",
      fundo: "Fava Tonka, Madeira de Âmbar, Cedro, Vetiver"
    },
    tags: ["Árabe", "Top 10 Masculino", "Aromático Fresco", "Versátil", "Assinatura Diária"],
    ocasiao: "Trabalho, faculdade, jantares e passeios diurnos ou noturnos.",
    fixacao: "Alta (7h - 9h)",
    projecao: "Moderada / Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Fragrância ultra versátil e agradável (inspirada no Y EDP). Perfeita para presente."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, pulsos e gola da camisa",
      tip: "Excelente assinatura para o dia a dia e ambiente de trabalho."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/lattafa-fakhar-black.png",
    featured: false
  },
  {
    id: "afnan-9pm",
    name: "9PM",
    brand: "Afnan Perfumes",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 5,
    tagline: "Doce e sedutor, perfeito para baladas e encontros, com pegada baunilhada marcante.",
    description: "Sedutor, jovial e incrivelmente magnético. Abre com maçã crocante e canela picante, mergulhando em uma base cremosa de baunilha doce e fava tonka viciante.",
    notes: {
      topo: "Maçã, Canela, Lavanda Silvestre, Bergamota",
      coracao: "Flor de Laranjeira, Lírio do Vale",
      fundo: "Baunilha Doce, Fava Tonka, Âmbar, Patchouli"
    },
    tags: ["Árabe", "Top 10 Masculino", "Balada", "Baunilhado Doce", "Sedução"],
    ocasiao: "Festas, bares, baladas, encontros e noites a dois.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Muito Forte",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro (Jovem/Balada)",
      note: "Campeão absoluto entre o público jovem para baladas e noites frias."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e nuca",
      tip: "Projeção alta; não exagere em ambientes fechados para não saturar."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/afnan-9pm.png",
    featured: true
  },
  {
    id: "badee-al-oud-glory",
    name: "Bade'e Al Oud (Oud for Glory)",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 6,
    tagline: "Intenso, oriental e luxuoso, focado em oud, açafrão e especiarias profundas.",
    description: "Uma obra-prima do luxo oriental. Notas opulentas de açafrão, noz-moscada e lavanda contrastadas com um oud refinado, patchouli escuro e almíscar aveludado.",
    notes: {
      topo: "Açafrão, Noz-Moscada, Lavanda",
      coracao: "Oud Natural, Patchouli Escuro",
      fundo: "Oud, Almíscar Branco, Patchouli"
    },
    tags: ["Árabe", "Top 10 Masculino", "Luxo Puro", "Oud Nobre", "Açafrão"],
    ocasiao: "Eventos de gala, casamentos, reuniões de poder e noites frias.",
    fixacao: "Extrema (12h+)",
    projecao: "Envolvente e Marcante",
    blindBuy: {
      level: "bold",
      label: "Para Apreciadores (Oud Nobre)",
      note: "Perfil imponente e exclusivo para quem ama perfumes amadeirados e luxuosos."
    },
    sprayGuide: {
      sprays: "2 a 3 borrifadas",
      points: "Nuca e pulsos",
      tip: "Óleos essenciais muito concentrados. 2 borrifadas duram o dia inteiro."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/badee-al-oud-glory.png",
    featured: false
  },
  {
    id: "afnan-supremacy-noi",
    name: "Supremacy Not Only Intense",
    brand: "Afnan Perfumes",
    volume: "Extrait de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 7,
    tagline: "Frutado e amadeirado de alta performance, ideal para assinatura marcante.",
    description: "Extrait de Parfum de performance incomparável. Uma combinação viciante de groselha preta suculenta, bergamota fresca, bétula esfumada e musgo de carvalho aveludado.",
    notes: {
      topo: "Groselha Preta, Bergamota, Maçã",
      coracao: "Musgo de Carvalho, Patchouli, Lavanda",
      fundo: "Âmbar Cinzento, Almíscar, Açafrão"
    },
    tags: ["Árabe", "Top 10 Masculino", "Extrait de Parfum", "Ultra Performance", "Frutado Nobre"],
    ocasiao: "Assinatura olfativa para quem deseja ser lembrado por onde passa.",
    fixacao: "Eterna (12h+)",
    projecao: "Monstruosa",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro",
      note: "Frutado escuro potente com altíssima taxa de aprovação masculina e feminina."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e ombros",
      tip: "Por ser Extrait de Parfum, fixa por mais de 24h na roupa."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/afnan-supremacy-noi.png",
    featured: true
  },
  {
    id: "al-haramain-detour-noir",
    name: "Detour Noir",
    brand: "Al Haramain",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 8,
    tagline: "Sofisticado, com lavanda, baunilha e um toque refinado excelente para o frio.",
    description: "Inspirado no mais alto padrão da perfumaria de nicho mundial. Harmoniza maçã assada, lavanda aveludada, cardamomo e sândalo com baunilha cremosa de alta densidade.",
    notes: {
      topo: "Maçã, Jasmim, Lavanda, Violeta",
      coracao: "Cardamomo, Mandarina, Patchouli",
      fundo: "Baunilha Cremosa, Sândalo, Madeira de Guaiaco, Pimenta"
    },
    tags: ["Árabe", "Top 10 Masculino", "Gourmand Refinado", "Elegante", "Clima Frio"],
    ocasiao: "Jantares românticos, cinemas, passeios noturnos e encontros.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Moderada / Acolhedora",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro",
      note: "Doce sofisticado estilo nicho (Layton). Confortável e muito elogiado."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, nuca e peito",
      tip: "Ideal para dias frescos e encontros românticos a dois."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/al-haramain-detour-noir.png",
    featured: false
  },
  {
    id: "khamrah-qahwa",
    name: "Khamrah Qahwa",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 9,
    tagline: "Uma versão quente com toque de café, canela e baunilha extremamente envolvente.",
    description: "A evolução perfeita do Khamrah clássico com o toque aromático do café arábica tostado, canela picante, tâmaras doces e pralinê envolvente.",
    notes: {
      topo: "Cardamomo, Gengibre, Canela Quente",
      coracao: "Café Arábica, Pralinê, Frutas Cristalizadas, Flores Brancas",
      fundo: "Baunilha de Madagascar, Fava Tonka, Benjoim, Almíscar"
    },
    tags: ["Árabe", "Top 10 Masculino", "Café & Canela", "Gourmand Nobre", "Ultra Quente"],
    ocasiao: "Noites frias, eventos noturnos, restaurantes e momentos especiais.",
    fixacao: "Extrema (10h - 12h)",
    projecao: "Poderosa",
    blindBuy: {
      level: "moderate",
      label: "Blind Buy Moderado",
      note: "Excelente para quem ama perfumes bem doces, licorosos e com nota de café."
    },
    sprayGuide: {
      sprays: "2 a 3 borrifadas",
      points: "Nuca e pulsos",
      tip: "Muito doce e denso. Duas borrifadas são suficientes para marcar presença."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/khamrah-qahwa.png",
    featured: true
  },
  {
    id: "lattafa-najdia",
    name: "Najdia",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "ARABE",
    subcategory: "MASCULINO",
    curation: "TOP 10 ÁRABE MASCULINO",
    rank: 10,
    tagline: "Um aromático aquático refrescante e acessível, ótimo para o uso diário no calor.",
    description: "A fragrância ideal para o dia a dia ensolarado. Traz limão efervescente, maçã verde, notas marinhas refrescantes e uma base aromática de cedro e almíscar limpo.",
    notes: {
      topo: "Limão, Maçã Verde, Cardamomo, Capim-Limão",
      coracao: "Notas Aquáticas, Lavanda, Alecrim",
      fundo: "Âmbar, Almíscar, Madeira de Cedro, Tabaco"
    },
    tags: ["Árabe", "Top 10 Masculino", "Fresco Diário", "Aquático Limpo", "Verão"],
    ocasiao: "Uso diário, academia, trabalho, dias quentes e passeios ao ar livre.",
    fixacao: "Média/Alta (7h - 8h)",
    projecao: "Moderada / Refrescante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Cheiro agradável, aquático e cítrico. Agrada a qualquer pessoa."
    },
    sprayGuide: {
      sprays: "5 a 7 borrifadas",
      points: "Pescoço, peito e braços",
      tip: "Pode reaplicar ou borrifar generosamente em dias de calor intenso."
    },
    status: "AVAILABLE",
    image: "/arabes/masculino/lattafa-najdia.png",
    featured: false
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 🌸 SEÇÃO 2: OS 10 MELHORES PERFUMES ÁRABES FEMININOS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "lattafa-yara",
    name: "Yara",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 1,
    tagline: "Cremoso, delicado e adocicado com toque tropical e baunilha.",
    description: "O maior sucesso feminino da perfumaria árabe. Uma sensação aveludada que remete a milkshake de morango, orquídeas tropicais, tangerina doce e baunilha cremosa.",
    notes: {
      topo: "Orquídea, Heliotrópio, Tangerina Doce",
      coracao: "Acorde Gourmand Cremoso, Frutas Tropicais",
      fundo: "Baunilha, Almíscar Branco, Sândalo Macio"
    },
    tags: ["Árabe", "Top 10 Feminino", "Best Seller Mundial", "Gourmand Cremoso", "Doce Suave"],
    ocasiao: "Uso diário, encontros românticos, passeios e qualquer momento.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante e Acolhedora",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O perfume árabe feminino mais vendido do Brasil. Doce cremoso e super elogiado."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, colo e pulsos",
      tip: "Muito versátil e aveludado; não incomoda em nenhum ambiente."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/lattafa-yara.png",
    featured: true
  },
  {
    id: "lattafa-eclaire",
    name: "Eclaire",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 2,
    tagline: "Doce irresistível que lembra caramelo, leite e baunilha cremosa.",
    description: "Uma verdadeira sobremesa parisiense em forma de perfume. Traz notas ricas de leite morno, caramelo dourado, mel silvestre e baunilha doce extremamente refinada.",
    notes: {
      topo: "Caramelo, Leite Condensado, Açúcar Mascavo",
      coracao: "Mel Dourado, Flores Brancas Aveludadas",
      fundo: "Baunilha de Madagascar, Pralinê, Almíscar"
    },
    tags: ["Árabe", "Top 10 Feminino", "Gourmand Puro", "Doce Caramelo", "Sensual"],
    ocasiao: "Dias amenos, noites, encontros e para quem ama perfumes bem doces.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Muito Forte",
    blindBuy: {
      level: "moderate",
      label: "Blind Buy Moderado (Gourmand Doce)",
      note: "Para apaixonadas por perfumes doces de baunilha, caramelo e leite condensado."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e nuca",
      tip: "Doce e cremoso de altíssima fixação. Rende muitos elogios em noites frescas."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/lattafa-eclaire.png",
    featured: true
  },
  {
    id: "lattafa-khamrah",
    name: "Khamrah",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 3,
    tagline: "Canela, tâmaras e baunilha em um acorde licoroso e sofisticado.",
    description: "Icônico e luxuoso. Abre com canela e noz-moscada especiada que dão lugar a um coração rico de tâmaras árabes, pralinê e tuberosa com base ambarada licorosa.",
    notes: {
      topo: "Canela, Noz-Moscada, Bergamota",
      coracao: "Tâmaras Árabes, Pralinê, Tuberosa, Mahonial",
      fundo: "Baunilha, Fava Tonka, Madeira de Âmbar, Mirra, Benjoim"
    },
    tags: ["Árabe", "Top 10 Feminino", "Luxo Árabe", "Licoroso Doce", "Noturno Ouro"],
    ocasiao: "Noites especiais, inverno, jantares e eventos sofisticados.",
    fixacao: "Extrema (12h+)",
    projecao: "Poderosa e Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro (Noturno Luxo)",
      note: "O perfume árabe de maior sucesso mundial para noites frias e celebrações."
    },
    sprayGuide: {
      sprays: "2 a 3 borrifadas",
      points: "Nuca, colo e pulsos",
      tip: "Altíssima concentração. Duas borrifadas duram o dia inteiro."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/lattafa-khamrah.png",
    featured: true
  },
  {
    id: "asdaaf-ameerat-al-arab",
    name: "Ameerat Al Arab",
    brand: "Asdaaf / Lattafa",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 4,
    tagline: "Floral com almíscar branco, translúcido e elegante.",
    description: "'Princesa da Arábia'. Uma composição translúcida e aristocrática com morango maduro, jasmim nobre, rosas frescas e um almíscar branco puro de extrema elegância.",
    notes: {
      topo: "Morango Silvestre, Uva, Laranja Doce",
      coracao: "Jasmim Sambac, Rosa de Maio, Lírio",
      fundo: "Almíscar Branco, Âmbar Suave, Fava Tonka, Madeira de Sândalo"
    },
    tags: ["Árabe", "Top 10 Feminino", "Floral Frutado", "Elegante", "Princesa Árabe"],
    ocasiao: "Casamentos, passeios, dias elegantes e ambientes profissionais.",
    fixacao: "Alta (8h - 9h)",
    projecao: "Moderada / Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Floral frutado delicado e chique. Cheiro de princesa que agrada a todas."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, colo e pulsos",
      tip: "Muito versátil e elegante para uso diurno e eventos nobres."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/asdaaf-ameerat-al-arab.png",
    featured: false
  },
  {
    id: "al-wataniah-sabah-al-ward",
    name: "Sabah Al Ward",
    brand: "Al Wataniah",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 5,
    tagline: "Rosa matinal com pimenta rosa e cacau profundo.",
    description: "Traduzido como 'Manhã de Rosas'. Misterioso e sedutor, equilibra a doçura da tangerina e pimenta rosa com cacau aveludado, fava tonka e baunilha escura.",
    notes: {
      topo: "Pimenta Rosa, Tangerina Doce",
      coracao: "Cacau Puro, Flor de Laranjeira, Jasmim Sambac",
      fundo: "Baunilha Escura, Fava Tonka, Patchouli"
    },
    tags: ["Árabe", "Top 10 Feminino", "Rosa & Cacau", "Sensual", "Misterioso"],
    ocasiao: "Encontros românticos, noites charmosas e clima ameno.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Envolvente",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro",
      note: "Sensual e aveludado com toque de cacau e rosas. Campeão de elogios em encontros."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e nuca",
      tip: "Excelente rastro a dois; fica perfeito em noites amenas."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/al-wataniah-sabah-al-ward.png",
    featured: true
  },
  {
    id: "lattafa-fakhar-rose",
    name: "Fakhar Rose",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 6,
    tagline: "Bouquet floral branco com tuberosa, elegante e marcante.",
    description: "Um buquê magnífico de flores brancas orvalhadas. Combina tuberosa cremosa, flor de laranjeira, romã suculenta e jasmim com uma base luminosa de sândalo e baunilha.",
    notes: {
      topo: "Frutas Vermelhas, Romã, Lírio, Bergamota",
      coracao: "Tuberosa, Flor de Laranjeira, Jasmim, Rosa, Gardênia",
      fundo: "Baunilha, Almíscar Branco, Sândalo, Ambroxan"
    },
    tags: ["Árabe", "Top 10 Feminino", "Floral Branco", "Tuberosa Rica", "Sofisticado"],
    ocasiao: "Eventos sociais, cultos/celebrações, encontros e dias especiais.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro (Floral Branco)",
      note: "Lembra o L'Interdit da Givenchy com muita classe e fixação."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, colo e pulsos",
      tip: "Tuberosa cremosa muito elegante para momentos festivos e sociais."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/lattafa-fakhar-rose.png",
    featured: false
  },
  {
    id: "lattafa-yara-moi",
    name: "Yara Moi (White)",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 7,
    tagline: "Versão mais ambarada e sofisticada da linha Yara.",
    description: "A versão mais sofisticada, quente e outonal da franquia Yara. Traz pêssego suculento envolvido em caramelo quente, jasmim e um fundo rico de patchouli com sândalo.",
    notes: {
      topo: "Pêssego Doce, Jasmim",
      coracao: "Caramelo Dourado, Âmbar Macio",
      fundo: "Patchouli, Sândalo, Baunilha"
    },
    tags: ["Árabe", "Top 10 Feminino", "Pêssego & Caramelo", "Outono/Inverno", "Chique"],
    ocasiao: "Dias frescos, noites aconchegantes e encontros elegantes.",
    fixacao: "Alta (8h - 9h)",
    projecao: "Moderada / Aveludada",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro",
      note: "Pêssego caramelizado aveludado e sofisticado. Muito agradável."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, pulsos e nuca",
      tip: "Ideal para dias amenos e ambientes de trabalho refinados."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/lattafa-yara-moi.png",
    featured: false
  },
  {
    id: "maison-alhambra-delilah",
    name: "Delilah",
    brand: "Maison Alhambra",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 8,
    tagline: "Floral fresco e refinado que remete à elegância do Delina.",
    description: "Inspirado na mais alta perfumaria de nicho francesa. Destaca a rosa turca aveludada, lichia suculenta, ruibarbo e peônia delicada sobre uma base de baunilha e almíscar.",
    notes: {
      topo: "Lichia, Ruibarbo, Bergamota",
      coracao: "Rosa Turca, Peônia, Lírio do Vale",
      fundo: "Almíscar Branco, Baunilha, Madeira de Cedro, Cashmeran"
    },
    tags: ["Árabe", "Top 10 Feminino", "Rosa Turca", "Lichia Nobre", "Luxo Feminino"],
    ocasiao: "Ocasiões nobres, jantares sofisticados, almoços de luxo e eventos.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante e Sofisticada",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro (Luxo Nicho)",
      note: "Inspirado no Delina de Marly. Sinônimo de mulher elegante e rica."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, colo e pulsos",
      tip: "Rosa turca com lichia nobre de projeção cintilante e rastro inesquecível."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/maison-alhambra-delilah.png",
    featured: true
  },
  {
    id: "kismet-for-women",
    name: "Kismet for Women",
    brand: "Maison Alhambra",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 9,
    tagline: "Damasco, tuberosa e narciso com sensualidade envolvente inspirada no Good Girl Gone Bad.",
    description: "Sensual, sedutor e hipnótico. Traz flores de damasco, jasmim e narciso combinadas com tuberosa cremosa e notas de cedro e âmbar.",
    notes: {
      topo: "Damasco, Jasmim Sambac, Rosa de Maio",
      coracao: "Tuberosa da Índia, Narciso",
      fundo: "Âmbar, Madeira de Cedro"
    },
    tags: ["Árabe", "Top 10 Feminino", "Floral Frutado", "Sensual & Nobre", "Sedução"],
    ocasiao: "Noites românticas, eventos especiais e momentos a dois.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro (Sedução)",
      note: "Floral frutado narcótico com damasco e flores nobres."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, nuca e pulsos",
      tip: "Fragrância magnética ideal para jantares e noites especiais."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/maison-alhambra-kismet-women.png",
    featured: false
  },
  {
    id: "orientica-royal-amber",
    name: "Royal Amber",
    brand: "Orientica",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "ARABE",
    subcategory: "FEMININO",
    curation: "TOP 10 ÁRABE FEMININO",
    rank: 10,
    tagline: "Doce frutal e ambarado com melão, abacaxi e baunilha com fixação lendária.",
    description: "Uma verdadeira joia da perfumaria árabe. Abre com bergamota e notas verdes que dão lugar a um coração rico de melão suculento, abacaxi, âmbar e baunilha suntuosa.",
    notes: {
      topo: "Bergamota, Notas Verdes",
      coracao: "Melão, Abacaxi Doce, Âmbar Gourmand",
      fundo: "Almíscar, Madeira Nobre, Baunilha"
    },
    tags: ["Árabe", "Top 10 Feminino", "Extrema Fixação", "Frutal Ambarado", "Luxo"],
    ocasiao: "Eventos marcantes, noites festivas, encontros e clima ameno.",
    fixacao: "Extrema (12h+)",
    projecao: "Monstruosa",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro (Fixação Épica)",
      note: "Frutal ambarado famoso pela fixação que ultrapassa 16 horas."
    },
    sprayGuide: {
      sprays: "2 a 3 borrifadas",
      points: "Pescoço e nuca",
      tip: "Potência extrema. Duas borrifadas perfumam o ambiente inteiro."
    },
    status: "AVAILABLE",
    image: "/arabes/feminino/orientica-royal-amber.png",
    featured: false
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 👑 SEÇÃO 3: OS 10 MELHORES PERFUMES IMPORTADOS MASCULINOS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "dior-sauvage",
    name: "Sauvage",
    brand: "Dior",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 1,
    tagline: "O importado masculino mais vendido do mundo. Cítrico, fresco e com ambroxan hipnótico.",
    description: "Um clássico moderno inconfundível. Bergamota da Calábria radiante combinada com pimenta de Sichuan, lavanda e uma assinatura nobre de ambroxan com baunilha envolvente da Papua-Nova Guiné.",
    notes: {
      topo: "Bergamota da Calábria, Pimenta",
      coracao: "Lavanda, Pimenta de Sichuan, Pimenta Rosa, Gerânio, Vetiver",
      fundo: "Ambroxan, Cedro, Ládano, Baunilha"
    },
    tags: ["Importado", "Top 10 Masculino", "Best Seller Mundial", "Ambroxan", "Campeão de Elogios"],
    ocasiao: "Qualquer ocasião, trabalho, jantares, festas e encontros.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Forte e Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O perfume masculino mais vendido e elogiado do planeta. Impossível errar."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, nuca e pulsos",
      tip: "O ambroxan reage com a temperatura do corpo e dura mais de 10h projetando elegância."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/dior-sauvage.png",
    featured: true
  },
  {
    id: "bleu-de-chanel",
    name: "Bleu de Chanel",
    brand: "Chanel",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 2,
    tagline: "Elegância pura e atemporal. Aromático amadeirado com sândalo nobre da Nova Caledônia.",
    description: "O tributo à liberdade masculina em uma fragrância aromática amadeirada de rastro cativante. Destaca toranja efervescente, incenso misterioso, gengibre e sândalo aveludado.",
    notes: {
      topo: "Toranja, Limão Siciliano, Hortelã, Pimenta Rosa",
      coracao: "Gengibre, Noz-Moscada, Jasmim, Iso E Super",
      fundo: "Incenso, Vetiver, Cedro, Sândalo, Patchouli, Ládano"
    },
    tags: ["Importado", "Top 10 Masculino", "Luxo Atemporal", "Chanel", "Assinatura Suprema"],
    ocasiao: "Ambientes executivos, eventos de gala, jantares e noites especiais.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Elegante e Sofisticada",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O ápice da elegância masculina. Perfeito para homens de sucesso e negócios."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, pulsos e gola da camisa",
      tip: "Sofisticação discreta que atrai elogios sinceros em qualquer ambiente."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/bleu-de-chanel.png",
    featured: true
  },
  {
    id: "acqua-di-gio",
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    volume: "Eau de Toilette",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 3,
    tagline: "O ícone da perfumaria aquática mundial. Frescor marinho com bergamota e notas oceânicas.",
    description: "Inspirado na brisa do mar Mediterrâneo. Um frescor aquático lendário que une notas marinhas límpidas, bergamota da Calábria, caqui amadeirado e almíscar puro.",
    notes: {
      topo: "Lima, Limão, Bergamota, Jasmim, Laranja, Mandarina",
      coracao: "Notas Marinhas, Pêssego, Frésia, Cyclamen, Alecrim",
      fundo: "Musgo de Carvalho, Cedro, Âmbar, Patchouli, Almíscar Branco"
    },
    tags: ["Importado", "Top 10 Masculino", "Aquático Ícone", "Verão & Calor", "Fresco Clássico"],
    ocasiao: "Dias quentes, praia, trabalho, passeios ao ar livre e uso diário.",
    fixacao: "Média/Alta (7h - 8h)",
    projecao: "Refrescante e Confortável",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O clássico atemporal que todo homem precisa ter para dias de calor e trabalho."
    },
    sprayGuide: {
      sprays: "5 a 7 borrifadas",
      points: "Pescoço, peito e pulsos",
      tip: "Pode ser aplicado generosamente em dias ensolarados para sensação de banho tomado."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/acqua-di-gio.png",
    featured: true
  },
  {
    id: "one-million",
    name: "1 Million",
    brand: "Paco Rabanne",
    volume: "Eau de Toilette",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 4,
    tagline: "Ousado, sedutor e magnético com notas de canela, couro e tangerina sanguínea.",
    description: "O perfume do ouro e da extravagância. Abre com mandarim e hortelã fresca, revelando um coração especiado de canela e rosa absoluta sobre couro aveludado e âmbar.",
    notes: {
      topo: "Mandarina Sanguínea, Toranja, Hortelã",
      coracao: "Canela, Especiarias, Rosa Absoluta",
      fundo: "Âmbar, Couro, Notas Amadeiradas, Patchouli Indiano"
    },
    tags: ["Importado", "Top 10 Masculino", "Balada & Noite", "Canela & Couro", "Sensual"],
    ocasiao: "Baladas, festas, bares noturnos e eventos animados.",
    fixacao: "Alta (9h - 10h)",
    projecao: "Muito Forte",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro (Noite/Balada)",
      note: "O ícone mundial da sedução noturna e das festas."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e nuca",
      tip: "Canela e couro marcantes. Não exagere no calor para manter a elegância."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/one-million.png",
    featured: false
  },
  {
    id: "212-vip-black",
    name: "212 VIP Black",
    brand: "Carolina Herrera",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 5,
    tagline: "O rei da noite. Acorde exclusivo de absinto, lavanda aromática e casca de baunilha negra.",
    description: "Um coquetel noturno explosivo e enigmático. Traz a exclusividade do absinto com erva-doce, suavizado pela lavanda aromática e finalizado em baunilha negra sensual.",
    notes: {
      topo: "Absinto, Erva-Doce, Anis",
      coracao: "Lavanda Aromática",
      fundo: "Casca de Baunilha Negra, Almíscar"
    },
    tags: ["Importado", "Top 10 Masculino", "Absinto Noturno", "VIP", "Sedução Total"],
    ocasiao: "Noites badaladas, encontros especiais, festas VIP e eventos exclusivos.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Um dos perfumes masculinos mais elogiados pelas mulheres no Brasil."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, nuca e pulsos",
      tip: "Absinto e baunilha negra deixam um rastro sofisticado no ar."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/212-vip-black.png",
    featured: true
  },
  {
    id: "invictus",
    name: "Invictus",
    brand: "Paco Rabanne",
    volume: "Eau de Toilette",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 6,
    tagline: "O troféu da vitória. Frescor marinho heroico com folhas de louro e madeira de guaiaco.",
    description: "O cheiro do campeão. Um confronto vibrante entre notas marinhas energéticas com toranja e o calor sensual das folhas de louro e âmbar cinzento.",
    notes: {
      topo: "Notas Marinhas, Toranja, Mandarina",
      coracao: "Folha de Louro, Jasmim",
      fundo: "Âmbar Cinzento, Madeira de Guaiaco, Musgo de Carvalho, Patchouli"
    },
    tags: ["Importado", "Top 10 Masculino", "Energético", "Vitória", "Elogios Imediatos"],
    ocasiao: "Academia, dias quentes, faculdade, festas e momentos descontraídos.",
    fixacao: "Alta (8h - 9h)",
    projecao: "Forte",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Jovem, esportivo e vencedor. Agrada desde o primeiro segundo."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, peito e braços",
      tip: "Excelente para dias quentes e atividades ao ar livre."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/invictus.png",
    featured: false
  },
  {
    id: "le-male",
    name: "Le Male",
    brand: "Jean Paul Gaultier",
    volume: "Eau de Toilette",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 7,
    tagline: "Lendário e sedutor. Lavanda fresca de barbearia contrastada com baunilha cremosa e menta.",
    description: "Uma homenagem viril e sensual aos marinheiros. Harmoniza a frescura da menta e da lavanda tradicional com o calor aconchegante da flor de laranjeira e baunilha.",
    notes: {
      topo: "Lavanda, Hortelã, Cardamomo, Bergamota, Artemísia",
      coracao: "Canela, Flor de Laranjeira, Alcarávia",
      fundo: "Baunilha, Fava Tonka, Âmbar, Sândalo, Cedro"
    },
    tags: ["Importado", "Top 10 Masculino", "JPG Ícone", "Baunilha & Lavanda", "Sedutor"],
    ocasiao: "Encontros românticos, passeios noturnos e clima fresco.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Envolvente",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Um dos perfumes mais lendários e confortáveis da história da perfumaria."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e nuca",
      tip: "A baunilha com lavanda cria uma aura aconchegante para encontros a dois."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/le-male.png",
    featured: true
  },
  {
    id: "bad-boy",
    name: "Bad Boy",
    brand: "Carolina Herrera",
    volume: "Eau de Toilette",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 8,
    tagline: "Uma jornada ousada de contrastes com pimenta preta, fava tonka e cacau aveludado.",
    description: "Para o homem rebelde e sofisticado. A luz da sálvia e bergamota encontra a escuridão magnética da pimenta preta, cedro e cacau puro com fava tonka.",
    notes: {
      topo: "Pimenta Branca, Pimenta Preta, Bergamota",
      coracao: "Sálvia, Cedro",
      fundo: "Fava Tonka, Cacau, Madeira de Âmbar"
    },
    tags: ["Importado", "Top 10 Masculino", "Pimenta & Cacau", "Rebelde Chique", "Noite"],
    ocasiao: "Jantares, noites com amigos, passeios e encontros marcantes.",
    fixacao: "Alta (8h - 9h)",
    projecao: "Moderada / Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro",
      note: "Pimenta branca com cacau aveludado em um frasco de raio icônico."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, pulsos e peito",
      tip: "Perfeito para saídas noturnas casuais e bares."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/bad-boy.png",
    featured: false
  },
  {
    id: "versace-eros",
    name: "Eros",
    brand: "Versace",
    volume: "Eau de Toilette",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 9,
    tagline: "A paixão do deus do amor. Menta fresca vibrante, maçã verde crocante e baunilha de Madagascar.",
    description: "Inspirado na mitologia grega. Uma abertura eletrizante de hortelã e maçã verde envolvida em fava tonka venezuelana, ambroxan e cedro nobre.",
    notes: {
      topo: "Hortelã, Maçã Verde, Limão Siciliano",
      coracao: "Fava Tonka, Ambroxan, Gerânio",
      fundo: "Baunilha de Madagascar, Cedro da Virgínia, Vetiver, Musgo de Carvalho"
    },
    tags: ["Importado", "Top 10 Masculino", "Versace", "Balada & Conquista", "Ultra Marcante"],
    ocasiao: "Festas, baladas, eventos sociais noturnos e encontros.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Muito Forte",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O queridinho mundial das baladas. Menta vibrante com baunilha irresistível."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço e nuca",
      tip: "Corta o ar em ambientes lotados e garante presença marcante."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/versace-eros.png",
    featured: true
  },
  {
    id: "tom-ford-noir",
    name: "Noir",
    brand: "Tom Ford",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "IMPORTADO",
    subcategory: "MASCULINO",
    curation: "TOP 10 IMPORTADO MASCULINO",
    rank: 10,
    tagline: "O ápice da elegância e do mistério oriental. Âmbar nobre, especiarias raras e baunilha escura.",
    description: "Um retrato olfativo de elegância urbana sofisticada e sensualidade privada. Combina violeta refinada, pimenta preta, noz-moscada, âmbar profundo e patchouli da Indonésia.",
    notes: {
      topo: "Violeta, Pimenta Rosa, Alcarávia, Bergamota, Verbena",
      coracao: "Íris da Toscana, Noz-Moscada, Pimenta Preta, Gerânio, Rosa da Bulgária",
      fundo: "Âmbar, Patchouli da Indonésia, Baunilha, Civeta, Couro, Benjoim"
    },
    tags: ["Importado", "Top 10 Masculino", "Nicho & Luxo", "Tom Ford", "Alta Nobreza"],
    ocasiao: "Jantares de gala, eventos requintados, reuniões de alto nível e noites frias.",
    fixacao: "Extrema (10h+)",
    projecao: "Intensa e Aveludada",
    blindBuy: {
      level: "bold",
      label: "Para Apreciadores (Luxo Máximo)",
      note: "Fragrância complexa, misteriosa e nobre para homens maduros e refinados."
    },
    sprayGuide: {
      sprays: "2 a 3 borrifadas",
      points: "Nuca e pulsos",
      tip: "Reserve para noites especiais e eventos de alto padrão."
    },
    status: "AVAILABLE",
    image: "/importados/masculinos/tom-ford-noir.png",
    featured: false
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 🌸 SEÇÃO 4: OS 10 MELHORES PERFUMES IMPORTADOS FEMININOS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "good-girl",
    name: "Good Girl",
    brand: "Carolina Herrera",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 1,
    tagline: "Oriental e doce. Indicado para o frio, noite e festas marcantes.",
    description: "Uma arma de sedução feminina que contrasta a luminosidade floral da tuberosa e do jasmim com o lado escuro do cacau tostado e da fava tonka.",
    notes: {
      topo: "Amêndoa, Café, Bergamota, Limão",
      coracao: "Tuberosa, Jasmim Sambac, Flor de Laranjeira, Raiz de Orris",
      fundo: "Fava Tonka, Cacau, Baunilha, Pralinê, Sândalo, Âmbar"
    },
    tags: ["Importado", "Top 10 Feminino", "Oriental & Doce", "Sensual Noturno", "Salto Alto Ícone"],
    ocasiao: "Indicado para o frio, noite e festas marcantes.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Muito Forte",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O perfume importado feminino mais vendido e desejado do Brasil."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, colo e pulsos",
      tip: "Tuberosa com cacau e fava tonka. Rende elogios imediatos em festas e encontros."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/goodgirl.png",
    featured: true
  },
  {
    id: "la-vie-est-belle",
    name: "La Vie Est Belle",
    brand: "Lancôme",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 2,
    tagline: "Floral e muito doce. Indicado para o frio e noites amenas. No calor pode sufocar.",
    description: "O manifesto da felicidade. A íris nobre e flores brancas fundem-se com o toque açucarado de pralinê, cassis e baunilha aveludada.",
    notes: {
      topo: "Groselha Preta (Cassis), Pera Doce",
      coracao: "Íris Pálida, Jasmim, Flor de Laranjeira",
      fundo: "Pralinê, Baunilha, Patchouli, Fava Tonka"
    },
    tags: ["Importado", "Top 10 Feminino", "Floral & Muito Doce", "Íris & Pralinê", "Marcante"],
    ocasiao: "Indicado para o frio e noites amenas. (No calor pode sufocar).",
    fixacao: "Extrema (10h - 12h)",
    projecao: "Poderosa",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O ícone da doçura refinada e da felicidade feminina no mundo."
    },
    sprayGuide: {
      sprays: "2 a 3 borrifadas",
      points: "Nuca e pulsos",
      tip: "Muito doce e concentrado. Duas borrifadas são suficientes para o dia todo."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/la-vie-est-belle.png",
    featured: true
  },
  {
    id: "jadore",
    name: "J'adore",
    brand: "Dior",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 3,
    tagline: "Floral e frutado. Muito versátil, serve tanto para o calor quanto para o frio. Muito elegante.",
    description: "O buquê floral dourado mais celebrado do mundo. Uma harmonia radiante de ylang-ylang, rosa damascena e jasmim sambac com frutas nobres.",
    notes: {
      topo: "Pera, Melão, Magnólia, Pêssego, Mandarina, Bergamota",
      coracao: "Jasmim, Lírio do Vale, Tuberosa, Frésia, Rosa",
      fundo: "Almíscar Branco, Baunilha, Amora, Cedro"
    },
    tags: ["Importado", "Top 10 Feminino", "Floral & Frutado", "Muito Versátil", "Muito Elegante"],
    ocasiao: "Muito versátil, serve tanto para o calor quanto para o frio. Muito elegante.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante e Elegante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O floral nobre da Dior que simboliza feminilidade e sofisticação pura."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, colo e pulsos",
      tip: "Super versátil: funciona com perfeição em casamentos, trabalho e jantares."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/jadore.png",
    featured: true
  },
  {
    id: "coco-mademoiselle",
    name: "Coco Mademoiselle",
    brand: "Chanel",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 4,
    tagline: "Chipre e floral. Serve tanto para o calor quanto para o frio. Muito sofisticado.",
    description: "A essência de uma mulher audaciosa e livre. Abertura viva de laranja fresca com coração transparente de rosas e patchouli puro.",
    notes: {
      topo: "Laranja, Mandarina, Bergamota, Flor de Laranjeira",
      coracao: "Rosa Turca, Jasmim, Mimosa, Ylang-Ylang",
      fundo: "Patchouli Puro, Almíscar Branco, Baunilha, Vetiver, Fava Tonka"
    },
    tags: ["Importado", "Top 10 Feminino", "Chipre & Floral", "Muito Sofisticado", "Chanel Ícone"],
    ocasiao: "Serve tanto para o calor quanto para o frio. Muito sofisticado.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Marcante e Nobre",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "A assinatura olfativa da mulher elegante, independente e requintada."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, pulsos e gola da roupa",
      tip: "Patchouli e flores límpidas com a inconfundível assinatura da Chanel."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/coco-mademoiselle.png",
    featured: true
  },
  {
    id: "light-blue",
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    volume: "Eau de Toilette",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 5,
    tagline: "Cítrico e fresco. Feito exclusivamente para o calor intenso e dias de sol.",
    description: "O frescor absoluto do Mediterrâneo. Notas revigorantes de limão siciliano, maçã granny smith crocante e bambu fresco.",
    notes: {
      topo: "Limão Siciliano, Maçã Granny Smith, Cedro, Campânula",
      coracao: "Bambu Fresco, Jasmim, Rosa Branca",
      fundo: "Cedro, Almíscar, Âmbar"
    },
    tags: ["Importado", "Top 10 Feminino", "Cítrico & Fresco", "Calor Intenso", "Dias de Sol"],
    ocasiao: "Feito exclusivamente para o calor intenso e dias de sol.",
    fixacao: "Média/Alta (6h - 8h)",
    projecao: "Refrescante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "O melhor cítrico feminino para o verão brasileiro. Sensação de frescor imediato."
    },
    sprayGuide: {
      sprays: "5 a 8 borrifadas",
      points: "Pescoço, braços e roupas leves",
      tip: "Perfeito para dias ensolarados, praia, piscina e calor escaldante."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/light-blue.png",
    featured: false
  },
  {
    id: "212-vip-rose",
    name: "212 VIP Rosé",
    brand: "Carolina Herrera",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 6,
    tagline: "Floral e frutado com toque de champanhe. Muito versátil, ótimo para o calor e noites alegres.",
    description: "Efervescente, festivo e sofisticado. A vibração do champanhe rosé com flor de pessegueiro suave e madeiras nobres.",
    notes: {
      topo: "Champanhe Rosé, Notas Frutadas",
      coracao: "Flor de Pessegueiro",
      fundo: "Notas Amadeiradas, Almíscar Branco, Âmbar"
    },
    tags: ["Importado", "Top 10 Feminino", "Floral & Frutado", "Toque de Champanhe", "Noites Alegres"],
    ocasiao: "Muito versátil, ótimo para o calor e noites alegres.",
    fixacao: "Alta (8h - 9h)",
    projecao: "Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Alegre, glamoroso e muito versátil. Um dos perfumes mais amados do Brasil."
    },
    sprayGuide: {
      sprays: "4 a 5 borrifadas",
      points: "Pescoço, colo e pulsos",
      tip: "O toque de champanhe rosé traz uma energia festiva e encantadora."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/212-vip-rose.png",
    featured: true
  },
  {
    id: "chloe-edp",
    name: "Chloé Eau de Parfum",
    brand: "Chloé",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 7,
    tagline: "Floral limpo e atalcado. Funciona muito bem no calor e em dias amenos para o trabalho.",
    description: "Elegância limpa e refinada. Uma interpretação sublime da rosa fresca com peônia aveludada, lichia e frésia sobre cedro sutil.",
    notes: {
      topo: "Peônia, Lichia, Frésia",
      coracao: "Rosa, Lírio do Vale, Magnólia",
      fundo: "Cedro da Virgínia, Âmbar"
    },
    tags: ["Importado", "Top 10 Feminino", "Floral Limpo", "Atalcado", "Trabalho & Dia a Dia"],
    ocasiao: "Funciona muito bem no calor e em dias amenos para o trabalho.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Acolhedora e Sofisticada",
    blindBuy: {
      level: "safe",
      label: "Blind Buy 100% Seguro",
      note: "Cheiro de limpeza rica, rosas frescas e sofisticação discreta."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, pulsos e gola",
      tip: "Perfeito para ambientes profissionais, clínicas e encontros durante o dia."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/cloe.png",
    featured: false
  },
  {
    id: "scandal",
    name: "Scandal",
    brand: "Jean Paul Gaultier",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 8,
    tagline: "Mel e floral. Muito doce e marcante, feito exclusivamente para o frio e para a noite.",
    description: "Um escândalo de doçura e sensualidade. O mel gourmand exuberante mistura-se com a flor de gardênia cremosa e patchouli terroso.",
    notes: {
      topo: "Laranja Sanguínea, Mandarina",
      coracao: "Mel Dourado, Gardênia, Flor de Laranjeira, Jasmim, Pêssego",
      fundo: "Cera de Abelha, Caramelo, Patchouli, Alcaçuz"
    },
    tags: ["Importado", "Top 10 Feminino", "Mel & Floral", "Muito Doce", "Frio & Noite"],
    ocasiao: "Feito exclusivamente para o frio e para a noite.",
    fixacao: "Extrema (10h+)",
    projecao: "Monstruosa",
    blindBuy: {
      level: "moderate",
      label: "Blind Buy Moderado (Doce Intenso)",
      note: "Para mulheres que amam perfumes bem doces com mel gourmand e alta presença."
    },
    sprayGuide: {
      sprays: "2 a 3 borrifadas",
      points: "Nuca e pulsos",
      tip: "Projeção bombástica. Duas borrifadas chegam antes de você no ambiente."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/scandal.png",
    featured: true
  },
  {
    id: "olympea",
    name: "Olympéa",
    brand: "Paco Rabanne",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 9,
    tagline: "Baunilha salgada e floral. Funciona bem em noites amenas e dias não muito quentes.",
    description: "O perfume da deusa moderna. O lendário contraste de baunilha salgada combinada com tangerina verde, jasmim hidropônico e caxemira.",
    notes: {
      topo: "Jasmim Aquático, Mandarina Verde, Flor de Gengibre",
      coracao: "Baunilha Salgada",
      fundo: "Âmbar Cinzento, Madeira de Caxemira, Sândalo"
    },
    tags: ["Importado", "Top 10 Feminino", "Baunilha Salgada & Floral", "Deusa", "Marcante"],
    ocasiao: "Funciona bem em noites amenas e dias não muito quentes.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante",
    blindBuy: {
      level: "safe",
      label: "Blind Buy Seguro",
      note: "A consagrada baunilha salgada da Paco Rabanne que deixa rastro por onde passa."
    },
    sprayGuide: {
      sprays: "3 a 4 borrifadas",
      points: "Pescoço, nuca e colo",
      tip: "Sensual e imponente, ideal para saídas noturnas e encontros."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/olympea.png",
    featured: false
  },
  {
    id: "alien",
    name: "Alien",
    brand: "Mugler",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "IMPORTADO",
    subcategory: "FEMININO",
    curation: "TOP 10 IMPORTADO FEMININO",
    rank: 10,
    tagline: "Jasmim marcante e ambarado. Muito intenso, indicado exclusivamente para o frio e noites rigorosas.",
    description: "Uma fragrância transcendental e misteriosa. Construída em torno do jasmim sambac solar luminoso, madeira de cashmeran e âmbar branco aveludado.",
    notes: {
      topo: "Jasmim Sambac da Índia",
      coracao: "Madeira de Cashmeran",
      fundo: "Âmbar Branco"
    },
    tags: ["Importado", "Top 10 Feminino", "Jasmim Marcante & Ambarado", "Muito Intenso", "Noites Rigorosas"],
    ocasiao: "Muito intenso, indicado exclusivamente para o frio e noites rigorosas.",
    fixacao: "Eterna (12h+)",
    projecao: "Monstruosa",
    blindBuy: {
      level: "bold",
      label: "Para Apreciadores (Jasmim Marcante)",
      note: "Perfume magnético, potente e inesquecível para mulheres de presença forte."
    },
    sprayGuide: {
      sprays: "2 borrifadas",
      points: "Nuca e pulsos",
      tip: "Concentração máxima de essências. 2 borrifadas são o suficiente para toda a noite."
    },
    status: "AVAILABLE",
    image: "/importados/femininos/alien.png",
    featured: false
  }
];

export const upcomingDrops = [
  {
    id: "importados-nicho",
    title: "Alta Perfumaria de Nicho",
    desc: "Fragrâncias raras e opulentas das casas Creed, Parfums de Marly, Xerjoff, Amouage e Nishane sob encomenda.",
    tag: "Nicho & Luxo"
  },
  {
    id: "arabes-novos",
    title: "Lançamentos Árabes Virais",
    desc: "As últimas novidades internacionais das casas Lattafa, Afnan, Armaf, Maison Alhambra e Paris Corner.",
    tag: "Em Breve"
  },
  {
    id: "kits-decants",
    title: "Edições Especiais & Coffrets",
    desc: "Kits de presente oficiais de fábrica e coffrets de luxo para colecionadores e apreciadores de alta perfumaria.",
    tag: "Edições Limitadas"
  },
  {
    id: "extrait-parfum",
    title: "Concentrações Extrait de Parfum",
    desc: "Frascos com máxima concentração de essências puras e fixação extrema de alta performance.",
    tag: "Alta Fixação"
  }
];
