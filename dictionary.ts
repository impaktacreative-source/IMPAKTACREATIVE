import type { Locale } from "./locale";

// All UI copy that isn't client-specific (work-data.ts) or service-specific
// (services-data.ts) content lives here, one object per locale. The PT
// object is the source of truth (it mirrors the copy already live on the
// site); EN and ES are faithful translations of that same copy — no new
// claims, numbers or wording are introduced during localization.
const pt = {
  nav: {
    cta: "Fala Connosco",
    ariaLabel: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: {
      trabalho: "Trabalho",
      servicos: "Serviços",
      ceo: "CEO",
      contacto: "Contacto",
    },
  },
  hero: {
    eyebrow: "IMPAKTA Creative",
    intro:
      "Estratégia, criatividade, tecnologia e execução — eventos, redes sociais, automação, aplicativos, IA, produção de conteúdos, tráfego pago e orgânico, formação e assessoria. Tudo debaixo do mesmo teto.",
    titlePrefix: "SOMOS ",
    titleEm: "IMPAKTA",
    titleSuffix: ".",
  },
  numbers: {
    eyebrow: "Números",
    items: [
      { value: "74+", label: "CLIENTES" },
      { value: "210+", label: "PROJETOS" },
      { value: "340+", label: "CAMPANHAS" },
      { value: "58", label: "WEBSITES" },
      { value: "12M+", label: "ALCANCE GERADO" },
      { value: "96%", label: "CLIENTES QUE FICAM" },
    ],
  },
  services: {
    eyebrow: "O que fazemos",
    linkLabel: "Saber mais",
  },
  ceo: {
    eyebrow: "Fundadora",
    name: "Priscila Figueiredo Silva",
    role: "CEO & Fundadora, IMPAKTA Creative",
    portraitAlt: "Priscila Figueiredo Silva, fundadora da IMPAKTA Creative, retrato de estúdio",
    naPratica: "Na prática",
    pillars: [
      "Porque é que acredito que a maioria das marcas falham... antes mesmo de nascer.",
      "Muitas empresas têm um plano de marketing. Poucas têm uma ESTRATÉGIA DE MARCA.",
      "Antes de perguntar: \"Como posso vender mais?\" Eu faria outra pergunta: Porque é que alguém deveria confiar em mim? A resposta a essa pergunta constrói marcas, não campanhas.",
      "Nenhuma estratégia consegue sustentar durante muito tempo uma liderança que ainda não está preparada para o próximo nível.",
    ],
    storyMoments: [
      {
        alt: "Priscila sentada no sofá do estúdio, descalça, a trabalhar no portátil",
        text: "Priscila Figueiredo Silva é quem está à frente da IMPAKTA desde o primeiro dia.",
      },
      {
        alt: "Priscila a bordo, ao pôr do sol, a filmar com o telemóvel durante um evento",
        text: "Está no terreno tanto quanto na estratégia — a acompanhar de perto cada produção, cada evento.",
      },
      {
        alt: "Priscila a fotografar uma convidada com o telemóvel, durante um jantar de evento",
        text: "Atenta a cada detalhe, mesmo fora do estúdio — a captar o momento em tempo real.",
      },
      {
        alt: "Retrato de Priscila, olhar direto para a câmara",
        text: "Presente em cada reunião, cada apresentação, cada decisão que molda uma marca.",
      },
      {
        alt: "Priscila a sorrir, recostada na cadeira",
        text: "E genuína em cada momento — dentro e fora do trabalho.",
      },
    ],
  },
  work: {
    eyebrow: "Trabalho selecionado",
    title: "Work that made an impakt.",
    hint: "Ver trabalho",
    photosComingSoon: "Fotos a chegar",
  },
  bastidores: {
    eyebrow: "Bastidores",
    title: "No terreno com a IMPAKTA.",
    intro:
      "Duas gravações reais de produção — sem guião, sem encenação — para mostrar como é trabalhar connosco fora do ecrã.",
    videos: [
      { caption: "Fim de tarde de produção, ao largo — nem toda a luz boa acontece em estúdio." },
      { caption: "Depois das filmagens, à mesa — a parte do trabalho que não aparece no feed." },
    ],
  },
  portfolioTeaser: {
    eyebrow: "Portefólio",
    title: "O nosso portefólio está a chegar.",
    text: "Estamos a preparar uma seleção dos projetos que temos vindo a desenvolver — disponível brevemente.",
    cta: "Ver trabalho",
  },
  statement: {
    text: "Não criamos conteúdo para encher feed",
  },
  trabalho: {
    eyebrow: "Portefólio",
    title: "Trabalho que fez impakto.",
    lead: "Uma seleção de projetos onde estratégia, criatividade e execução se juntaram para gerar resultado real — não só conteúdo bonito.",
    desafio: "Desafio",
    abordagem: "Abordagem",
    resultado: "Resultado",
    photoAlt: (client: string, i: number) => `${client} — foto ${i}`,
  },
  serviceDetail: {
    eyebrow: (n: string) => `Serviço ${n}`,
    galleryEyebrow: "Como fica na prática",
    otherEyebrow: "Também fazemos",
  },
  contact: {
    title: "Vamos criar o próximo impakt",
    cta: "Fala Connosco",
    addressLabel: "Morada",
    addressValue: "Avenida do Atlântico 16, piso 8, porta 9, 1990-019 Lisboa",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    rights: (year: number) => `© ${year} IMPAKTA Creative. Todos os direitos reservados.`,
    privacy: "Política de Privacidade",
  },
};

const en: Dictionary = {
  nav: {
    cta: "Talk to Us",
    ariaLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: {
      trabalho: "Work",
      servicos: "Services",
      ceo: "CEO",
      contacto: "Contact",
    },
  },
  hero: {
    eyebrow: "IMPAKTA Creative",
    intro:
      "Strategy, creativity, technology and execution — events, social media, automation, apps, AI, content production, paid and organic traffic, training and advisory. All under one roof.",
    titlePrefix: "WE ARE ",
    titleEm: "IMPAKTA",
    titleSuffix: ".",
  },
  numbers: {
    eyebrow: "Numbers",
    items: [
      { value: "74+", label: "CLIENTS" },
      { value: "210+", label: "PROJECTS" },
      { value: "340+", label: "CAMPAIGNS" },
      { value: "58", label: "WEBSITES" },
      { value: "12M+", label: "REACH GENERATED" },
      { value: "96%", label: "CLIENTS WHO STAY" },
    ],
  },
  services: {
    eyebrow: "What we do",
    linkLabel: "Learn more",
  },
  ceo: {
    eyebrow: "Founder",
    name: "Priscila Figueiredo Silva",
    role: "CEO & Founder, IMPAKTA Creative",
    portraitAlt: "Priscila Figueiredo Silva, founder of IMPAKTA Creative, studio portrait",
    naPratica: "In practice",
    pillars: [
      "Why I believe most brands fail... before they're even born.",
      "Many companies have a marketing plan. Few have a BRAND STRATEGY.",
      "Before asking, \"How can I sell more?\" I'd ask another question: Why should anyone trust me? The answer to that question builds brands, not campaigns.",
      "No strategy can sustain, for long, a leadership that isn't yet ready for the next level.",
    ],
    storyMoments: [
      {
        alt: "Priscila sitting on the studio sofa, barefoot, working on her laptop",
        text: "Priscila Figueiredo Silva has led IMPAKTA from day one.",
      },
      {
        alt: "Priscila on board, at sunset, filming with her phone during an event",
        text: "She's on the ground as much as in the strategy — following every production, every event, up close.",
      },
      {
        alt: "Priscila photographing a guest with her phone, during an event dinner",
        text: "Attentive to every detail, even outside the studio — capturing the moment in real time.",
      },
      {
        alt: "Portrait of Priscila, looking directly at the camera",
        text: "Present in every meeting, every presentation, every decision that shapes a brand.",
      },
      {
        alt: "Priscila smiling, leaning back in her chair",
        text: "And genuine in every moment — on and off the job.",
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Work that made an impakt.",
    hint: "View work",
    photosComingSoon: "Photos coming soon",
  },
  bastidores: {
    eyebrow: "Behind the scenes",
    title: "On the ground with IMPAKTA.",
    intro:
      "Two real production recordings — no script, no staging — to show what it's like to work with us off-screen.",
    videos: [
      { caption: "Late afternoon on a shoot, out at sea — not all good light happens in a studio." },
      { caption: "After filming, at the table — the part of the job that doesn't make the feed." },
    ],
  },
  portfolioTeaser: {
    eyebrow: "Portfolio",
    title: "Our portfolio is on its way.",
    text: "We're preparing a selection of the projects we've been working on — available soon.",
    cta: "View work",
  },
  statement: {
    text: "We don't create content to fill a feed",
  },
  trabalho: {
    eyebrow: "Portfolio",
    title: "Work that made an impakt.",
    lead: "A selection of projects where strategy, creativity and execution came together to generate real results — not just pretty content.",
    desafio: "Challenge",
    abordagem: "Approach",
    resultado: "Result",
    photoAlt: (client: string, i: number) => `${client} — photo ${i}`,
  },
  serviceDetail: {
    eyebrow: (n: string) => `Service ${n}`,
    galleryEyebrow: "What it looks like in practice",
    otherEyebrow: "We also do",
  },
  contact: {
    title: "Let's create the next impakt",
    cta: "Talk to Us",
    addressLabel: "Address",
    addressValue: "Avenida do Atlântico 16, piso 8, porta 9, 1990-019 Lisbon, Portugal",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    rights: (year: number) => `© ${year} IMPAKTA Creative. All rights reserved.`,
    privacy: "Privacy Policy",
  },
};

const es: Dictionary = {
  nav: {
    cta: "Hablemos",
    ariaLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: {
      trabalho: "Trabajo",
      servicos: "Servicios",
      ceo: "CEO",
      contacto: "Contacto",
    },
  },
  hero: {
    eyebrow: "IMPAKTA Creative",
    intro:
      "Estrategia, creatividad, tecnología y ejecución — eventos, redes sociales, automatización, aplicaciones, IA, producción de contenidos, tráfico pago y orgánico, formación y asesoría. Todo bajo el mismo techo.",
    titlePrefix: "SOMOS ",
    titleEm: "IMPAKTA",
    titleSuffix: ".",
  },
  numbers: {
    eyebrow: "Números",
    items: [
      { value: "74+", label: "CLIENTES" },
      { value: "210+", label: "PROYECTOS" },
      { value: "340+", label: "CAMPAÑAS" },
      { value: "58", label: "WEBSITES" },
      { value: "12M+", label: "ALCANCE GENERADO" },
      { value: "96%", label: "CLIENTES QUE SE QUEDAN" },
    ],
  },
  services: {
    eyebrow: "Qué hacemos",
    linkLabel: "Saber más",
  },
  ceo: {
    eyebrow: "Fundadora",
    name: "Priscila Figueiredo Silva",
    role: "CEO y Fundadora, IMPAKTA Creative",
    portraitAlt: "Priscila Figueiredo Silva, fundadora de IMPAKTA Creative, retrato de estudio",
    naPratica: "En la práctica",
    pillars: [
      "Por qué creo que la mayoría de las marcas fracasan... incluso antes de nacer.",
      "Muchas empresas tienen un plan de marketing. Pocas tienen una ESTRATEGIA DE MARCA.",
      "Antes de preguntar: \"¿Cómo puedo vender más?\" Yo haría otra pregunta: ¿Por qué alguien debería confiar en mí? La respuesta a esa pregunta construye marcas, no campañas.",
      "Ninguna estrategia puede sostener durante mucho tiempo un liderazgo que aún no está preparado para el próximo nivel.",
    ],
    storyMoments: [
      {
        alt: "Priscila sentada en el sofá del estudio, descalza, trabajando en el portátil",
        text: "Priscila Figueiredo Silva está al frente de IMPAKTA desde el primer día.",
      },
      {
        alt: "Priscila a bordo, al atardecer, grabando con el móvil durante un evento",
        text: "Está en el terreno tanto como en la estrategia — acompañando de cerca cada producción, cada evento.",
      },
      {
        alt: "Priscila fotografiando a una invitada con el móvil, durante una cena de evento",
        text: "Atenta a cada detalle, incluso fuera del estudio — captando el momento en tiempo real.",
      },
      {
        alt: "Retrato de Priscila, mirando directamente a la cámara",
        text: "Presente en cada reunión, cada presentación, cada decisión que moldea una marca.",
      },
      {
        alt: "Priscila sonriendo, recostada en la silla",
        text: "Y genuina en cada momento — dentro y fuera del trabajo.",
      },
    ],
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Work that made an impakt.",
    hint: "Ver trabajo",
    photosComingSoon: "Fotos próximamente",
  },
  bastidores: {
    eyebrow: "Detrás de escena",
    title: "En el terreno con IMPAKTA.",
    intro:
      "Dos grabaciones reales de producción — sin guion, sin puesta en escena — para mostrar cómo es trabajar con nosotros fuera de la pantalla.",
    videos: [
      { caption: "Final de la tarde de producción, en el mar — no toda la buena luz ocurre en estudio." },
      { caption: "Después del rodaje, en la mesa — la parte del trabajo que no aparece en el feed." },
    ],
  },
  portfolioTeaser: {
    eyebrow: "Portafolio",
    title: "Nuestro portafolio está en camino.",
    text: "Estamos preparando una selección de los proyectos en los que hemos estado trabajando — disponible próximamente.",
    cta: "Ver trabajo",
  },
  statement: {
    text: "No creamos contenido para llenar un feed",
  },
  trabalho: {
    eyebrow: "Portafolio",
    title: "Trabajo que hizo impakto.",
    lead: "Una selección de proyectos donde estrategia, creatividad y ejecución se unieron para generar resultados reales — no solo contenido bonito.",
    desafio: "Desafío",
    abordagem: "Enfoque",
    resultado: "Resultado",
    photoAlt: (client: string, i: number) => `${client} — foto ${i}`,
  },
  serviceDetail: {
    eyebrow: (n: string) => `Servicio ${n}`,
    galleryEyebrow: "Cómo se ve en la práctica",
    otherEyebrow: "También hacemos",
  },
  contact: {
    title: "Vamos a crear el próximo impakt",
    cta: "Hablemos",
    addressLabel: "Dirección",
    addressValue: "Avenida do Atlântico 16, piso 8, porta 9, 1990-019 Lisboa, Portugal",
    emailLabel: "Correo electrónico",
    whatsappLabel: "WhatsApp",
    rights: (year: number) => `© ${year} IMPAKTA Creative. Todos los derechos reservados.`,
    privacy: "Política de Privacidad",
  },
};

export type Dictionary = typeof pt;

const DICTIONARIES: Record<Locale, Dictionary> = { pt, en, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
