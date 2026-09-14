import type { MediaKit } from "@/types/media-kit";

export const mediaKit: MediaKit = {
  site: {
    title: "Lana Santos · Mídia Kit",
    description:
      "Eu não indico produtos. Eu faço eles brilharem. Mídia kit de Lana Santos, Brazilian Beauty & Fashion Creator.",
  },
  contact: {
    email: "lanasantosmkt@gmail.com",
    phone: "(91) 98492-2999",
    whatsappHref: "https://wa.me/5591984922999",
    socials: [
      {
        id: "instagram",
        label: "Instagram",
        handle: "@lanasancost",
        href: "https://www.instagram.com/lanasancost",
      },
      {
        id: "tiktok",
        label: "TikTok",
        handle: "@bylanasantos",
        href: "https://www.tiktok.com/@bylanasantos",
      },
    ],
  },
  hero: {
    kicker: "2026  ·  TM  ·  Brazilian Beauty & Fashion Creator",
    name: "Lana",
    surname: "Santos",
    headline: ["Eu não indico produtos.", "Eu faço eles brilharem."],
    tagline:
      "Crio conteúdo de beleza e moda para quem compra pelo desejo, não pelo desconto. Tutorial, teste e review com estética própria, e uma audiência que confia no que eu mostro.",
    legal:
      "© Lana Santos  ·  2026  ·  Todos os direitos reservados  ·  Material confidencial",
    image: {
      src: "/media/hero/capa.png",
      alt: "Lana Santos, Brazilian Beauty & Fashion Creator",
      aspect: "landscape",
      label: "Hero",
    },
  },
  about: {
    marquee: "Quem sou eu",
    eyebrow: "02 · Quem sou eu",
    greeting: "Olá, sou a",
    title: "Lana Santos",
    anchors: [
      {
        id: "gmv",
        label: "GMV médio · 6 meses",
        value: "R$ 50–100 mil",
        hint: "Gerado para marcas parceiras",
      },
      {
        id: "brands",
        label: "Marcas parceiras",
        value: "+9",
        hint: "Beleza, moda e lifestyle",
      },
      {
        id: "community",
        label: "Comunidade",
        value: "+53 mil",
        hint: "Instagram + TikTok",
      },
    ],
    paragraphs: [
      "Sou criadora de conteúdo de beleza e moda. Cabelo curto, pele glow e uma obsessão saudável por produto bom: é assim que as pessoas me reconhecem.",
      "Em um ano de estrada, construí uma audiência que não só assiste. Ela compra. Meus formatos favoritos são tutorial, teste e review, porque é onde eu consigo provar o produto na prática e transformar curiosidade em decisão.",
      "Eu não trabalho com volume de publi. Trabalho com marca que tem história, produto que eu usaria e conteúdo pensado para gerar desejo. Quando uma marca entra no meu feed, ela entra dentro do meu universo, e é isso que faz a audiência confiar.",
    ],
    close: "Minha audiência não passa pelo conteúdo. Ela mora nele.",
  },
  profile: {
    eyebrow: "03 · Os números que importam",
    title: "Os números",
    highlight: "que importam",
    subtitle:
      "Indicadores de Instagram e TikTok.",
    body: "Número isolado não vende nada. No TikTok, o conteúdo abre para milhões de espectadores novos. No Instagram, Reels descobrem gente nova e Stories conversam com quem já confia. O conteúdo performa no orgânico e quando a marca amplia como mídia paga.",
    caseNote:
      "Case Cléa Store. Look para o Dia dos Namorados: 40.296 visualizações, 38 salvamentos, 32 compartilhamentos e 211 interações.",
    mixTitle: "Instagram por tipo de conteúdo",
    mixNote:
      "109 mil visualizadores. Reels puxam não seguidores (descoberta). Stories concentram a comunidade que já acompanha.",
    mix: [
      { id: "reels", label: "Reels", value: 100, suffix: "82 mil" },
      { id: "stories", label: "Stories", value: 96, suffix: "79 mil" },
      { id: "posts", label: "Posts", value: 13, suffix: "11 mil" },
    ],
    metrics: [
      {
        id: "tiktok-viewers",
        label: "Espectadores",
        value: "5,6 mi",
        hint: "TikTok",
      },
      {
        id: "tiktok-views",
        label: "Visualizações",
        value: "10 mi",
        hint: "Vídeos no TikTok",
      },
      {
        id: "interactions",
        label: "Interações",
        value: "+313 mil",
        hint: "303 mil curtidas · 8 mil shares · 1,8 mil comentários",
      },
      {
        id: "visits",
        label: "Visitas ao perfil",
        value: "24 mil",
        hint: "TikTok",
      },
      {
        id: "instagram",
        label: "Visualizadores",
        value: "109 mil",
        hint: "Instagram · Reels, Stories e posts",
      },
    ],
    phones: [
      {
        alt: "Análise do TikTok, visão geral",
        aspect: "story",
        src: "/media/profile/tiktok-visao-geral.png",
      },
      {
        alt: "Análise do TikTok, espectadores",
        aspect: "story",
        src: "/media/profile/tiktok-espectadores.png",
      },
      {
        alt: "Análise do TikTok, seguidores",
        aspect: "story",
        src: "/media/profile/tiktok-seguidores.png",
      },
    ],
  },
  audience: {
    eyebrow: "04 · Quem é meu público",
    title: "Quem é meu",
    highlight: "público",
    paragraphs: [
      "Mulheres de 20 a 35 anos que amam beleza, moda, skincare e cabelo bonito. Elas vivem entre o Pinterest e a nostalgia y2k, acompanham tendência antes de virar tendência e têm poder de compra.",
      "Elas me seguem porque gostam da minha visão, se inspiram no que eu construo e, o mais importante para a sua marca, confiam nas minhas recomendações. Quando eu falo de um produto, elas não perguntam se é bom. Perguntam onde compra.",
    ],
    whoIsNot:
      "Quem busca conteúdo genérico, exagerado ou puramente promocional.",
    classes: "Classes A, B e C.",
    channels: [
      {
        id: "instagram",
        label: "Instagram",
        gender: [
          { id: "ig-female", label: "Feminino", value: 93.3, suffix: "93%" },
          { id: "ig-male", label: "Masculino", value: 6.7, suffix: "7%" },
        ],
        age: [
          { id: "ig-18-24", label: "18–24", value: 18.2, suffix: "18%" },
          { id: "ig-25-34", label: "25–34", value: 53.5, suffix: "54%" },
          { id: "ig-35-44", label: "35–44", value: 21.1, suffix: "21%" },
          { id: "ig-45", label: "45+", value: 6.8, suffix: "7%" },
        ],
      },
      {
        id: "tiktok",
        label: "TikTok",
        gender: [
          { id: "tt-female", label: "Feminino", value: 78, suffix: "78%" },
          { id: "tt-male", label: "Masculino", value: 21, suffix: "21%" },
        ],
        age: [
          { id: "tt-18-24", label: "18–24", value: 45.4, suffix: "45%" },
          { id: "tt-25-34", label: "25–34", value: 37.6, suffix: "38%" },
          { id: "tt-35-44", label: "35–44", value: 10.7, suffix: "11%" },
          { id: "tt-45", label: "45+", value: 6.3, suffix: "6%" },
        ],
      },
    ],
    locations: [
      { id: "br", label: "Brasil", value: 98.1, suffix: "98%" },
    ],
  },
  contentCreation: {
    eyebrow: "05 · Conteúdo que converte",
    title: "UGC that",
    highlight: "converts",
    rating: "★★★★★",
    paragraphs: [
      "Agora imagine tirar o orçamento de criadoras que só entregam alcance e colocar em quem realmente move o produto. É essa a diferença: eu não produzo um anúncio disfarçado, produzo conteúdo que a sua audiência assiste por vontade própria, e que faz a sua marca virar desejo.",
      "Tutorial, teste e review são os meus formatos. Hook forte no primeiro segundo, edição no ritmo da plataforma e CTA que nasce natural dentro da narrativa.",
    ],
    frames: [
      {
        alt: "Lana Santos, conteúdo Poetiza 32",
        aspect: "poster",
        src: "/media/content/poetiza32.jpg",
      },
    ],
    resultsTitle: "Meus maiores resultados",
    resultsBody:
      "Vídeos que mostram jeito de criar e o que eles geram: alcance quando a marca amplia, e desejo quando o conteúdo é orgânico, com salvamento, compartilhamento e comentário pedindo o produto.",
    results: [
      {
        id: "essentials",
        title: "Kit The Essentials",
        tag: "Turbinado",
        views: "110,8 mil",
        stats: "298 curtidas · 19 comentários · 19 shares",
        href: "https://www.instagram.com/reel/DYU2RDXBWmk/",
        image: {
          alt: "Reel Kit The Essentials",
          aspect: "story",
          src: "/media/content/kit-essentials.jpg",
        },
      },
      {
        id: "clea",
        title: "Look Dia dos Namorados · Cléa Store",
        tag: "Marca parceira",
        views: "40,2 mil",
        stats: "38 saves · 32 shares · 211 interações",
        href: "https://www.instagram.com/reel/DZKtdV3BPb9/",
        image: {
          alt: "Reel Cléa Store, look para o Dia dos Namorados",
          aspect: "story",
          src: "/media/content/clea-look.jpg",
        },
      },
      {
        id: "aura",
        title: "Aura Beauty · Diana Glam",
        tag: "Marca parceira",
        views: "Review em Reels",
        stats: "Body splash apresentado no universo da marca",
        href: "https://www.instagram.com/reel/DZn7IQjBbNR/",
        image: {
          alt: "Reel Aura Beauty Diana Glam",
          aspect: "story",
          src: "/media/content/aura-diana-glam.jpg",
        },
      },
      {
        id: "gocase",
        title: "Gocase · Self Love Club",
        tag: "Marca parceira",
        views: "Haul em Reels",
        stats: "Bolsas personalizadas no universo da marca",
        href: "https://www.instagram.com/reel/DZF1x-iB7Gk/",
        image: {
          alt: "Reel Gocase Self Love Club",
          aspect: "story",
          src: "/media/content/gocase-self-love.jpg",
        },
      },
    ],
  },
  brands: {
    eyebrow: "06 · Marcas parceiras",
    title: "Marcas já",
    highlight: "atendidas",
    intro:
      "Marcas que já entraram no meu universo e saíram dele com conteúdo, comentário e venda. Meu público comenta, compartilha e compra.",
    items: [
      { id: "gocase", name: "Gocase", logo: { alt: "Gocase", aspect: "landscape", src: "/media/logos/1.png" } },
      { id: "mac", name: "MAC", logo: { alt: "MAC", aspect: "landscape", src: "/media/logos/2.png" } },
      { id: "too-faced", name: "Too Faced", logo: { alt: "Too Faced", aspect: "landscape", src: "/media/logos/3.png" } },
      { id: "clea-store", name: "Cléa Store", logo: { alt: "Cléa Store", aspect: "landscape", src: "/media/logos/4.png" } },
      { id: "aura-beauty", name: "Aura Beauty", logo: { alt: "Aura Beauty", aspect: "landscape", src: "/media/logos/5.png" } },
      { id: "saint-germain", name: "Saint Germain", logo: { alt: "Saint Germain", aspect: "landscape", src: "/media/logos/6.png" } },
      { id: "arm-fitness", name: "Arm Fitness", logo: { alt: "Arm Fitness", aspect: "landscape", src: "/media/logos/7.png" } },
      { id: "pink-perfect", name: "Pink Perfect", logo: { alt: "Pink Perfect", aspect: "landscape", src: "/media/logos/8.png" } },
      { id: "nina-makeup", name: "Nina Makeup", logo: { alt: "Nina Makeup", aspect: "landscape", src: "/media/logos/9.png" } },
    ],
  },
  feedbacks: {
    eyebrow: "07 · Feedbacks da parceria",
    title: "Feedbacks",
    items: [
      {
        id: "clea-store",
        author: "Cléa Store",
        image: {
          alt: "Feedback da Cléa Store",
          aspect: "feedback",
          src: "/media/feedbacks/1.png",
        },
      },
      {
        id: "pink-perfect",
        author: "Pink Perfect",
        image: {
          alt: "Feedback da Pink Perfect",
          aspect: "feedback",
          src: "/media/feedbacks/2.png",
        },
      },
      {
        id: "bostanten",
        author: "Bostanten",
        image: {
          alt: "Feedback da Bostanten",
          aspect: "feedback",
          src: "/media/feedbacks/3.png",
        },
      },
    ],
  },
  modelStats: {
    eyebrow: "08 · Tamanhos e medidas",
    title: "Model Stats*",
    note: "Os campos de pele e cabelo são o diferencial para marcas de beleza.",
    shipping:
      "Endereço de envio sob solicitação, enviado por e-mail após o alinhamento da campanha.",
    items: [
      { id: "height", label: "Altura", value: "1,63" },
      { id: "top", label: "Blusa / vestido", value: "P" },
      { id: "bottom", label: "Calça", value: "36" },
      { id: "shoes", label: "Calçado", value: "37" },
      { id: "skin", label: "Tom de pele", value: "Oliva clara" },
      { id: "skin-type", label: "Base de referência", value: "Mari Maria H2 · neutra claro" },
      { id: "hair", label: "Cabelo", value: "Curto, levemente ondulado · castanho escuro" },
    ],
  },
  deliverables: {
    eyebrow: "09 · Formatos de entrega",
    title: "Formatos de entrega",
    footerNote:
      "Cada proposta é ajustada conforme a marca, o escopo e o volume de entregas. Pacotes combinados e exclusividade sob consulta.",
    expectation:
      "Eu não vendo viralização nem engajamento garantido. O que eu garanto é conteúdo estratégico, criativo e coerente com a marca, com foco total em gerar desejo pelo produto de forma autêntica.",
    items: [
      {
        id: "feed",
        title: "Publi no Feed",
        tags: "Reels · TikTok · Vertical",
        price: "R$ 700",
        body: "Vídeo com produção visual alinhada à identidade da marca e à linguagem nativa da plataforma. Hook forte, edição no ritmo certo e copy pensada para parecer conteúdo, não anúncio. Meus formatos: tutorial, teste e review, os que mais convertem no meu perfil.",
        layout: "image-right",
        tone: "light",
        images: [
          {
            alt: "Publi no feed",
            aspect: "story",
            src: "/media/deliverables/publinofeed.jpg",
            href: "https://www.instagram.com/reel/DaAr_b8BVZU/",
          },
        ],
      },
      {
        id: "carousel",
        title: "Carrossel de foto",
        tags: "Feed · Estética de campanha",
        price: "R$ 500",
        body: "Sequência de imagens com direção visual própria, feita para viver no feed como referência estética. Ideal para lançamento, coleção e produto que precisa de desejo antes da explicação.",
        layout: "image-left",
        tone: "dark",
        gallery: "carousel",
        images: [
          { alt: "Carrossel 1", aspect: "portrait", src: "/media/deliverables/carrossel-1.jpg" },
          { alt: "Carrossel 2", aspect: "portrait", src: "/media/deliverables/carrossel-2.jpg" },
          { alt: "Carrossel 3", aspect: "portrait", src: "/media/deliverables/carrossel-3.jpg" },
          { alt: "Carrossel 4", aspect: "portrait", src: "/media/deliverables/carrossel-4.jpg" },
          { alt: "Carrossel 5", aspect: "portrait", src: "/media/deliverables/carrossel-5.jpg" },
          { alt: "Carrossel 6", aspect: "portrait", src: "/media/deliverables/carrossel-6.jpg" },
          { alt: "Carrossel 7", aspect: "portrait", src: "/media/deliverables/carrossel-7.jpg" },
        ],
      },
      {
        id: "live-shop",
        title: "Live Shop",
        tags: "1 hora · Conversão direta",
        price: "R$ 1.000/h + 15% sobre as vendas",
        body: "Uma hora de demonstração ao vivo, respondendo dúvida em tempo real e mostrando o produto na pele. É o formato mais próximo da decisão de compra: a audiência tira a última objeção e compra ali.",
        layout: "image-right",
        tone: "light",
        images: [
          { alt: "Live shop", aspect: "portrait", src: "/media/deliverables/live.jpg" },
        ],
      },
      {
        id: "ugc",
        title: "Conteúdo UGC",
        tags: "Sem marca d’água · Alta qualidade",
        price: "Sob consulta",
        body: "Vídeos com estética orgânica produzidos para a marca usar nos próprios canais, landing pages e anúncios pagos. Entrega sem marca d’água, com alta qualidade de imagem e som, pensada para performar como conteúdo de criadora, não como peça publicitária.",
        layout: "image-left",
        tone: "dark",
        images: [
          {
            alt: "Conteúdo UGC, GRWM Bodyody",
            aspect: "story",
            src: "/media/deliverables/ugc.jpg",
            href: "https://www.instagram.com/reel/DaS2ROuBMmr/",
          },
        ],
      },
      {
        id: "events",
        title: "Presença em eventos",
        tags: "Formato exclusivo · Cobertura completa",
        price: "Sob consulta",
        body: "Cobertura de lançamentos e experiências de marca com storytelling autêntico e visual premium, entregue em múltiplos formatos: reels, stories e TikTok.",
        layout: "image-right",
        tone: "light",
        images: [
          {
            alt: "Presença em evento",
            aspect: "story",
            kind: "video",
            src: "/media/deliverables/presencaeventos.mp4",
          },
        ],
      },
    ],
  },
  footer: {
    eyebrow: "10 · Dados e contato",
    title: "Vamos produzir",
    highlight: "juntas",
    body: "Estou aberta a parcerias que façam sentido para os dois lados. Cada proposta é personalizada de acordo com o briefing, os objetivos da marca e o formato escolhido. Me chama para conversarmos sobre a melhor forma de criar juntas.",
    legal: "© 2026 Lana Santos · Todos os direitos reservados · Mídia Kit · Edição 2026",
  },
};
