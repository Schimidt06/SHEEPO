// ─── CATÁLOGO OFICIAL SHEEPO® ───────────────────────────────────────────────
//
// Curadoria dos 10 Melhores Perfumes Árabes Masculinos e 10 Melhores Femininos,
// Decants Oficiais e Encomendas Especiais de Perfumes Importados do Mundo Todo.
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  { id: "all", label: "Todos os Perfumes", icon: "Sparkles" },
  { id: "top-masculino", label: "Top 10 Masculinos", icon: "Crown", count: 10 },
  { id: "top-feminino", label: "Top 10 Femininos", icon: "Flower2", count: 10 },
  { id: "decants", label: "Decants (Don't Buy Blind)", icon: "Droplets" },
  { id: "novidades", label: "Em Breve: Novidades", icon: "Sparkles", badge: "Novidades" }
];

export const products = [
  // ──────────────────────────────────────────────────────────────────────────
  // 👑 OS 10 MELHORES PERFUMES ÁRABES MASCULINOS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "lattafa-asad",
    name: "Asad",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "masculino",
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 1,
    tagline: "Quente e especiado, lembra o Sauvage Elixir com excelente fixação e ótimo custo-benefício para noites.",
    description: "Uma das fragrâncias árabes mais elogiadas do mundo. Combina pimenta preta vibrante com abacaxi suculento sobre uma base densa de âmbar, café e baunilha encorpada.",
    notes: {
      topo: "Pimenta Preta, Abacaxi, Tabaco",
      coracao: "Café, Patchouli, Íris",
      fundo: "Âmbar, Baunilha, Madeira Seca, Benjoim"
    },
    tags: ["Top 10 Masculino", "Especiado", "Noturno", "Campeão de Elogios"],
    ocasiao: "Noites, encontros, eventos marcantes e clima ameno.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Forte (2h)",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 2,
    tagline: "Famoso mundialmente pela potência cítrica e amadeirada inspirada no Aventus.",
    description: "Fenômeno global indiscutível. Abertura cítrica explosiva que evolui rapidamente para um coração amadeirado de bétula esfumaçada, jasmim e âmbar cinzento hipnótico.",
    notes: {
      topo: "Limão Siciliano, Abacaxi, Bergamota, Groselha Preta",
      coracao: "Bétula, Jasmim, Rosa",
      fundo: "Almíscar, Âmbar Cinzento, Patchouli, Baunilha"
    },
    tags: ["Top 10 Masculino", "Cítrico Amadeirado", "Best Seller Mundial", "Potente"],
    ocasiao: "Qualquer ocasião, trabalho, festas e encontros.",
    fixacao: "Extrema (10h+)",
    projecao: "Monstruosa",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 3,
    tagline: "Doce, fresco e aquático, ideal para o calor e muito elogiado pelo alto desempenho.",
    description: "Uma bomba aquática adocicada de altíssimo rendimento para o clima brasileiro. Combina ameixa suculenta, maçã fresca, notas marinhas e âmbar cinzento sensual.",
    notes: {
      topo: "Maçã, Bergamota, Limão, Canela",
      coracao: "Ameixa, Flor de Laranjeira, Cardamomo",
      fundo: "Âmbar Cinzento, Almíscar, Madeira Flutuante, Patchouli"
    },
    tags: ["Top 10 Masculino", "Aquático Doce", "Verão & Calor", "Elogios Imediatos"],
    ocasiao: "Dias quentes, praia, sunsets, baladas e encontros casuais.",
    fixacao: "Monstruosa (10h - 12h)",
    projecao: "Muito Forte",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 4,
    tagline: "Versátil e elegante, com notas de lavanda e maçã que lembram o Y EDP da Yves Saint Laurent.",
    description: "O epítome do homem moderno e refinado. Combina maçã verde fresca, gengibre e sálvia com fava tonka e cedro elegante em um frasco imponente.",
    notes: {
      topo: "Maçã Verde, Bergamota, Gengibre",
      coracao: "Lavanda, Sálvia, Gerânio, Bagas de Zimbro",
      fundo: "Fava Tonka, Madeira de Âmbar, Cedro, Vetiver"
    },
    tags: ["Top 10 Masculino", "Aromático Fresco", "Versátil", "Assinatura Diária"],
    ocasiao: "Trabalho, faculdade, jantares e passeios diurnos ou noturnos.",
    fixacao: "Alta (7h - 9h)",
    projecao: "Moderada / Marcante",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 5,
    tagline: "Doce e sedutor, perfeito para baladas e encontros, com pegada baunilhada marcante.",
    description: "Sedutor, jovial e incrivelmente magnético. Abre com maçã crocante e canela picante, mergulhando em uma base cremosa de baunilha doce e fava tonka viciante.",
    notes: {
      topo: "Maçã, Canela, Lavanda Silvestre, Bergamota",
      coracao: "Flor de Laranjeira, Lírio do Vale",
      fundo: "Baunilha Doce, Fava Tonka, Âmbar, Patchouli"
    },
    tags: ["Top 10 Masculino", "Balada", "Baunilhado Doce", "Sedução"],
    ocasiao: "Festas, bares, baladas, encontros e noites a dois.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Muito Forte",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 6,
    tagline: "Intenso, oriental e luxuoso, focado em oud, açafrão e especiarias profundas.",
    description: "Uma obra-prima do luxo oriental. Notas opulentas de açafrão, noz-moscada e lavanda contrastadas com um oud refinado, patchouli escuro e almíscar aveludado.",
    notes: {
      topo: "Açafrão, Noz-Moscada, Lavanda",
      coracao: "Oud Natural, Patchouli Escuro",
      fundo: "Oud, Almíscar Branco, Patchouli"
    },
    tags: ["Top 10 Masculino", "Luxo Puro", "Oud Nobre", "Açafrão"],
    ocasiao: "Eventos de gala, casamentos, reuniões de poder e noites frias.",
    fixacao: "Extrema (12h+)",
    projecao: "Envolvente e Marcante",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 7,
    tagline: "Frutado e amadeirado de alta performance, ideal para assinatura marcante.",
    description: "Extrait de Parfum de performance incomparável. Uma combinação viciante de groselha preta suculenta, bergamota fresca, bétula esfumada e musgo de carvalho aveludado.",
    notes: {
      topo: "Groselha Preta, Bergamota, Maçã",
      coracao: "Musgo de Carvalho, Patchouli, Lavanda",
      fundo: "Âmbar Cinzento, Almíscar, Açafrão"
    },
    tags: ["Top 10 Masculino", "Extrait de Parfum", "Ultra Performance", "Frutado Nobre"],
    ocasiao: "Assinatura olfativa para quem deseja ser lembrado por onde passa.",
    fixacao: "Eterna (12h+)",
    projecao: "Monstruosa",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 8,
    tagline: "Sofisticado, com lavanda, baunilha e um toque refinado excelente para o frio.",
    description: "Inspirado no mais alto padrão da perfumaria de nicho mundial. Harmoniza maçã assada, lavanda aveludada, cardamomo e sândalo com baunilha cremosa de alta densidade.",
    notes: {
      topo: "Maçã, Jasmim, Lavanda, Violeta",
      coracao: "Cardamomo, Mandarina, Patchouli",
      fundo: "Baunilha Cremosa, Sândalo, Madeira de Guaiaco, Pimenta"
    },
    tags: ["Top 10 Masculino", "Gourmand Refinado", "Elegante", "Clima Frio"],
    ocasiao: "Jantares românticos, cinemas, passeios noturnos e encontros.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Moderada / Acolhedora",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 9,
    tagline: "Uma versão quente com toque de café, canela e baunilha extremamente envolvente.",
    description: "A evolução perfeita do Khamrah clássico com o toque aromático do café arábica tostado, canela picante, tâmaras doces e pralinê envolvente.",
    notes: {
      topo: "Cardamomo, Gengibre, Canela Quente",
      coracao: "Café Arábica, Pralinê, Frutas Cristalizadas, Flores Brancas",
      fundo: "Baunilha de Madagascar, Fava Tonka, Benjoim, Almíscar"
    },
    tags: ["Top 10 Masculino", "Café & Canela", "Gourmand Nobre", "Ultra Quente"],
    ocasiao: "Noites frias, eventos noturnos, restaurantes e momentos especiais.",
    fixacao: "Extrema (10h - 12h)",
    projecao: "Poderosa",
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
    category: "FRAGRANCE",
    subcategory: "MASCULINO",
    curation: "TOP 10 MASCULINO",
    rank: 10,
    tagline: "Um aromático aquático refrescante e acessível, ótimo para o uso diário no calor.",
    description: "A fragrância ideal para o dia a dia ensolarado. Traz limão efervescente, maçã verde, notas marinhas refrescantes e uma base aromática de cedro e almíscar limpo.",
    notes: {
      topo: "Limão, Maçã Verde, Cardamomo, Capim-Limão",
      coracao: "Notas Aquáticas, Lavanda, Alecrim",
      fundo: "Âmbar, Almíscar, Madeira de Cedro, Tabaco"
    },
    tags: ["Top 10 Masculino", "Fresco Diário", "Aquático Limpo", "Verão"],
    ocasiao: "Uso diário, academia, trabalho, dias quentes e passeios ao ar livre.",
    fixacao: "Média/Alta (7h - 8h)",
    projecao: "Moderada / Refrescante",
    status: "AVAILABLE",
    image: "/arabes/masculino/lattafa-najdia.png",
    featured: false
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 🌸 OS 10 MELHORES PERFUMES ÁRABES FEMININOS
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: "lattafa-yara",
    name: "Yara",
    brand: "Lattafa Perfumes",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 1,
    tagline: "Cremoso, delicado e adocicado com toque tropical e baunilha.",
    description: "O maior sucesso feminino da perfumaria árabe. Uma sensação aveludada que remete a milkshake de morango, orquídeas tropicais, tangerina doce e baunilha cremosa.",
    notes: {
      topo: "Orquídea, Heliotrópio, Tangerina Doce",
      coracao: "Acorde Gourmand Cremoso, Frutas Tropicais",
      fundo: "Baunilha, Almíscar Branco, Sândalo Macio"
    },
    tags: ["Top 10 Feminino", "Best Seller Mundial", "Gourmand Cremoso", "Doce Suave"],
    ocasiao: "Uso diário, encontros românticos, passeios e qualquer momento.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante e Acolhedora",
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
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 2,
    tagline: "Doce irresistível que lembra caramelo, leite e baunilha cremosa.",
    description: "Uma verdadeira sobremesa parisiense em forma de perfume. Traz notas ricas de leite morno, caramelo dourado, mel silvestre e baunilha doce extremamente refinada.",
    notes: {
      topo: "Caramelo, Leite Condensado, Açúcar Mascavo",
      coracao: "Mel Dourado, Flores Brancas Aveludadas",
      fundo: "Baunilha de Madagascar, Pralinê, Almíscar"
    },
    tags: ["Top 10 Feminino", "Gourmand Puro", "Doce Caramelo", "Sensual"],
    ocasiao: "Dias amenos, noites, encontros e para quem ama perfumes bem doces.",
    fixacao: "Alta (9h - 11h)",
    projecao: "Muito Forte",
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
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 3,
    tagline: "Canela, tâmaras e baunilha em um acorde licoroso e sofisticado.",
    description: "Icônico e luxuoso. Abre com canela e noz-moscada especiada que dão lugar a um coração rico de tâmaras árabes, pralinê e tuberosa com base ambarada licorosa.",
    notes: {
      topo: "Canela, Noz-Moscada, Bergamota",
      coracao: "Tâmaras Árabes, Pralinê, Tuberosa, Mahonial",
      fundo: "Baunilha, Fava Tonka, Madeira de Âmbar, Mirra, Benjoim"
    },
    tags: ["Top 10 Feminino", "Luxo Árabe", "Licoroso Doce", "Noturno Ouro"],
    ocasiao: "Noites especiais, inverno, jantares e eventos sofisticados.",
    fixacao: "Extrema (12h+)",
    projecao: "Poderosa e Marcante",
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
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 4,
    tagline: "Floral com almíscar branco, translúcido e elegante.",
    description: "'Princesa da Arábia'. Uma composição translúcida e aristocrática com morango maduro, jasmim nobre, rosas frescas e um almíscar branco puro de extrema elegância.",
    notes: {
      topo: "Morango Silvestre, Uva, Laranja Doce",
      coracao: "Jasmim Sambac, Rosa de Maio, Lírio",
      fundo: "Almíscar Branco, Âmbar Suave, Fava Tonka, Madeira de Sândalo"
    },
    tags: ["Top 10 Feminino", "Floral Frutado", "Elegante", "Princesa Árabe"],
    ocasiao: "Casamentos, passeios, dias elegantes e ambientes profissionais.",
    fixacao: "Alta (8h - 9h)",
    projecao: "Moderada / Marcante",
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
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 5,
    tagline: "Rosa matinal com pimenta rosa e cacau profundo.",
    description: "Traduzido como 'Manhã de Rosas'. Misterioso e sedutor, equilibra a doçura da tangerina e pimenta rosa com cacau aveludado, fava tonka e baunilha escura.",
    notes: {
      topo: "Pimenta Rosa, Tangerina Doce",
      coracao: "Cacau Puro, Flor de Laranjeira, Jasmim Sambac",
      fundo: "Baunilha Escura, Fava Tonka, Patchouli"
    },
    tags: ["Top 10 Feminino", "Rosa & Cacau", "Sensual", "Misterioso"],
    ocasiao: "Encontros românticos, noites charmosas e clima ameno.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Envolvente",
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
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 6,
    tagline: "Bouquet floral branco com tuberosa, elegante e marcante.",
    description: "Um buquê magnífico de flores brancas orvalhadas. Combina tuberosa cremosa, flor de laranjeira, romã suculenta e jasmim com uma base luminosa de sândalo e baunilha.",
    notes: {
      topo: "Frutas Vermelhas, Romã, Lírio, Bergamota",
      coracao: "Tuberosa, Flor de Laranjeira, Jasmim, Rosa, Gardênia",
      fundo: "Baunilha, Almíscar Branco, Sândalo, Ambroxan"
    },
    tags: ["Top 10 Feminino", "Floral Branco", "Tuberosa Rica", "Sofisticado"],
    ocasiao: "Eventos sociais, cultos/celebrações, encontros e dias especiais.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante",
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
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 7,
    tagline: "Versão mais ambarada e sofisticada da linha Yara.",
    description: "A versão mais sofisticada, quente e outonal da franquia Yara. Traz pêssego suculento envolvido em caramelo quente, jasmim e um fundo rico de patchouli com sândalo.",
    notes: {
      topo: "Pêssego Doce, Jasmim",
      coracao: "Caramelo Dourado, Âmbar Macio",
      fundo: "Patchouli, Sândalo, Baunilha"
    },
    tags: ["Top 10 Feminino", "Pêssego & Caramelo", "Outono/Inverno", "Chique"],
    ocasiao: "Dias frescos, noites aconchegantes e encontros elegantes.",
    fixacao: "Alta (8h - 9h)",
    projecao: "Moderada / Aveludada",
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
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 8,
    tagline: "Floral delicado, fresco e romântico com rosa turca e lichia.",
    description: "Fresco, romântico e irresistivelmente feminino. Abre com a acidez cintilante da lichia e ruibarbo, mergulhando em um mar de rosas turcas nobres e almíscar acetinado.",
    notes: {
      topo: "Lichia Doce, Ruibarbo, Bergamota",
      coracao: "Rosa Turca, Peônia, Lírio do Vale",
      fundo: "Almíscar Branco, Baunilha, Cedro Nobre, Incenso Suave"
    },
    tags: ["Top 10 Feminino", "Rosa & Lichia", "Romântico Chic", "Fresco Nobre"],
    ocasiao: "Primavera, dias de sol, almoços especiais e momentos românticos.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Luminosa e Marcante",
    status: "AVAILABLE",
    image: "/arabes/feminino/maison-alhambra-delilah.png",
    featured: true
  },
  {
    id: "orientica-royal-amber",
    name: "Royal Amber",
    brand: "Orientica",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 9,
    tagline: "Doce, almiscarado com pegada rica, âmbar nobre e melão doce.",
    description: "Luxo puro em frasco dourado. Uma explosão frutada rica com melão, abacaxi e bergamota sobre uma base opulentíssima de âmbar cinzento, baunilha e notas amadeiradas reais.",
    notes: {
      topo: "Melão Suculento, Abacaxi, Bergamota",
      coracao: "Âmbar Dourado, Notas Frutadas Nobres",
      fundo: "Almíscar Branco, Baunilha, Madeira Nobre"
    },
    tags: ["Top 10 Feminino", "Frasco Joia", "Extremamente Marcante", "Âmbar Nobre"],
    ocasiao: "Eventos glamourosos, festas, noites de celebração e assinaturas de poder.",
    fixacao: "Extrema (12h+)",
    projecao: "Gigantesca",
    status: "AVAILABLE",
    image: "/arabes/feminino/orientica-royal-amber.png",
    featured: true
  },
  {
    id: "maison-alhambra-kismet-women",
    name: "Kismet for Women",
    brand: "Maison Alhambra",
    volume: "Eau de Parfum",
    gender: "feminino",
    category: "FRAGRANCE",
    subcategory: "FEMININO",
    curation: "TOP 10 FEMININO",
    rank: 10,
    tagline: "Doce elegante com tuberosa, café e fava tonka.",
    description: "Sofisticação provocante e misteriosa. Harmoniza damasco aveludado com pétalas de rosa de maio, tuberosa noturna, flor de laranjeira, cacau e fava tonka.",
    notes: {
      topo: "Damasco, Rosa de Maio, Jasmim",
      coracao: "Tuberosa, Narciso, Flor de Laranjeira",
      fundo: "Âmbar, Madeira de Cedro, Cacau, Fava Tonka"
    },
    tags: ["Top 10 Feminino", "Sensual Noturno", "Damasco & Flores", "Mulher Fatal"],
    ocasiao: "Jantares à luz de velas, noites de sedução e eventos requintados.",
    fixacao: "Alta (8h - 10h)",
    projecao: "Marcante e Envolvente",
    status: "AVAILABLE",
    image: "/arabes/feminino/maison-alhambra-kismet-women.png",
    featured: false
  }
];

export const decantsInfo = {
  title: "DON'T BUY BLIND.",
  subtitle: "Experimente na sua própria pele antes de investir no frasco cheio.",
  description: "O Decant é a fração original do perfume transferida para um frasco menor esterilizado com borrifador de alta precisão. Permite avaliar a evolução olfativa, projeção e fixação na sua pele com total economia e inteligência.",
  sizes: [
    { size: "Frasco Pocket", sprays: "Diversas borrifadas", ideal: "Ideal para testar na pele e levar no dia a dia" },
    { size: "Frasco Travel", sprays: "Uso prolongado", ideal: "Ideal para usar por semanas e em viagens" }
  ],
  benefits: [
    { title: "100% Autêntico", desc: "Extraído diretamente dos frascos originais e lacrados" },
    { title: "Atomizador Premium", desc: "Válvula de alta dispersão igual aos frascos de luxo" },
    { title: "Economia Inteligente", desc: "Monte sua coleção diversificada gastando uma fração" },
    { title: "Zero Arrependimento", desc: "Teste no calor, frio e noites antes do frasco fechado" }
  ]
};

export const upcomingDrops = [
  {
    id: "importados",
    title: "Perfumes Importados de Grife",
    desc: "Grandes casas de nicho e designers mundiais como Creed, Tom Ford, Dior, Chanel e Parfums de Marly.",
    tag: "Em Breve"
  },
  {
    id: "relogios",
    title: "Relógios & Smartwatches",
    desc: "Modelos selecionados com design contemporâneo, materiais nobres e presença marcante.",
    tag: "Em Breve"
  },
  {
    id: "eletronicos",
    title: "Eletrônicos & Áudio Premium",
    desc: "Fones de ouvido bluetooth de alta fidelidade sonora e tecnologia para o seu lifestyle.",
    tag: "Em Breve"
  },
  {
    id: "acessorios",
    title: "Óculos & Acessórios Exclusivos",
    desc: "Peças urbanas com identidade visual refinada para complementar sua presença.",
    tag: "Em Breve"
  }
];
