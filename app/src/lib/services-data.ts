// Shared services data — the homepage ServicesSection rows and the
// /servicos/$slug detail route both read from here so they stay in sync.
import type { Locale } from "@/lib/i18n/locale";

export interface ServiceGalleryItem {
  kind: "image" | "video";
  src: string;
  alt: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  statement: string;
  detail: string;
  gallery: ServiceGalleryItem[];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface ServiceLocaleContent {
  name: string;
  statement: string;
  detail: string;
  // Aligned by index with the locale-invariant `gallery` (kind + src) below.
  galleryAlts: string[];
}

interface ServiceBase {
  slugOverride?: string;
  gallery: Array<{ kind: "image" | "video"; src: string }>;
  content: Record<Locale, ServiceLocaleContent>;
}

const RAW_SERVICES: ServiceBase[] = [
  {
    gallery: [
      { kind: "video", src: "/assets/founder/bastidores-01.mp4" },
      { kind: "video", src: "/assets/founder/bastidores-02.mp4" },
    ],
    content: {
      pt: {
        name: "EVENTOS",
        statement: "Conceção e produção de eventos, do briefing ao dia D.",
        detail:
          "Planeamos e coordenamos eventos corporativos, lançamentos de produto e ativações de marca — logística, fornecedores, timings e produção de conteúdo no local, para que o evento funcione e fique bem registado.",
        galleryAlts: [
          "Produção ao fim de tarde, ao largo, num evento à beira-mar",
          "Convidados à mesa, a bordo, durante um evento IMPAKTA",
        ],
      },
      en: {
        name: "EVENTS",
        statement: "Event conception and production, from briefing to the big day.",
        detail:
          "We plan and coordinate corporate events, product launches and brand activations — logistics, suppliers, timings and on-site content production, so the event runs smoothly and is well documented.",
        galleryAlts: [
          "Late-afternoon production, out at sea, at a beachside event",
          "Guests at the table, on board, during an IMPAKTA event",
        ],
      },
      es: {
        name: "EVENTOS",
        statement: "Concepción y producción de eventos, del briefing al día D.",
        detail:
          "Planificamos y coordinamos eventos corporativos, lanzamientos de producto y activaciones de marca — logística, proveedores, tiempos y producción de contenido en el lugar, para que el evento funcione y quede bien registrado.",
        galleryAlts: [
          "Producción al final de la tarde, en el mar, en un evento junto a la playa",
          "Invitados en la mesa, a bordo, durante un evento IMPAKTA",
        ],
      },
    },
  },
  {
    slugOverride: "gestao-redes-sociais",
    gallery: [
      { kind: "image", src: "/assets/services/gestao-redes-sociais-01.jpg" },
      { kind: "image", src: "/assets/services/gestao-redes-sociais-02.jpg" },
    ],
    content: {
      pt: {
        name: "GESTÃO DE REDES SOCIAIS",
        statement: "Presença online consistente, com calendário e estratégia próprios.",
        detail:
          "Planeamento editorial, criação e publicação de conteúdo, resposta à comunidade e acompanhamento de métricas nas redes sociais da marca — para manter uma presença ativa e coerente com o posicionamento do negócio.",
        galleryAlts: [
          "Smartphone com grelha de conteúdo para redes sociais",
          "Ecrã com painel de métricas de redes sociais",
        ],
      },
      en: {
        name: "SOCIAL MEDIA MANAGEMENT",
        statement: "Consistent online presence, with its own calendar and strategy.",
        detail:
          "Editorial planning, content creation and publishing, community response and metrics tracking across the brand's social media — to keep an active presence consistent with the business's positioning.",
        galleryAlts: [
          "Smartphone showing a social media content grid",
          "Screen showing a social media metrics dashboard",
        ],
      },
      es: {
        name: "GESTIÓN DE REDES SOCIALES",
        statement: "Presencia online consistente, con calendario y estrategia propios.",
        detail:
          "Planificación editorial, creación y publicación de contenido, respuesta a la comunidad y seguimiento de métricas en las redes sociales de la marca — para mantener una presencia activa y coherente con el posicionamiento del negocio.",
        galleryAlts: [
          "Smartphone con cuadrícula de contenido para redes sociales",
          "Pantalla con panel de métricas de redes sociales",
        ],
      },
    },
  },
  {
    gallery: [
      { kind: "image", src: "/assets/services/automacao-01.jpg" },
      { kind: "image", src: "/assets/services/automacao-02.jpg" },
    ],
    content: {
      pt: {
        name: "AUTOMAÇÃO",
        statement: "Processos e fluxos de trabalho que poupam tempo à equipa.",
        detail:
          "Desenho e implementação de automações — desde o atendimento e a gestão de leads até tarefas internas repetitivas — para reduzir trabalho manual e libertar tempo para o que exige decisão humana.",
        galleryAlts: [
          "Engrenagens e circuito em macro, representando automação",
          "Braço robótico numa linha de produção automatizada",
        ],
      },
      en: {
        name: "AUTOMATION",
        statement: "Processes and workflows that save the team time.",
        detail:
          "Design and implementation of automations — from customer service and lead management to repetitive internal tasks — to reduce manual work and free up time for what requires human judgment.",
        galleryAlts: [
          "Gears and circuitry in macro, representing automation",
          "Robotic arm on an automated production line",
        ],
      },
      es: {
        name: "AUTOMATIZACIÓN",
        statement: "Procesos y flujos de trabajo que ahorran tiempo al equipo.",
        detail:
          "Diseño e implementación de automatizaciones — desde la atención al cliente y la gestión de leads hasta tareas internas repetitivas — para reducir el trabajo manual y liberar tiempo para lo que requiere decisión humana.",
        galleryAlts: [
          "Engranajes y circuito en macro, representando la automatización",
          "Brazo robótico en una línea de producción automatizada",
        ],
      },
    },
  },
  {
    gallery: [
      { kind: "image", src: "/assets/services/aplicativos-01.jpg" },
      { kind: "image", src: "/assets/services/aplicativos-02.jpg" },
    ],
    content: {
      pt: {
        name: "APLICATIVOS",
        statement: "Aplicações web e mobile desenhadas à medida do negócio.",
        detail:
          "Desenvolvimento de aplicações e plataformas digitais, do desenho da experiência à implementação, para negócios que precisam de uma ferramenta própria em vez de uma solução genérica.",
        galleryAlts: [
          "Smartphone com interface de aplicação móvel",
          "Tablet com wireframe de aplicação sobre a secretária",
        ],
      },
      en: {
        name: "APPS",
        statement: "Web and mobile apps designed around the business.",
        detail:
          "Development of digital apps and platforms, from experience design to implementation, for businesses that need their own tool instead of a generic solution.",
        galleryAlts: [
          "Smartphone showing a mobile app interface",
          "Tablet with an app wireframe on the desk",
        ],
      },
      es: {
        name: "APLICACIONES",
        statement: "Aplicaciones web y móviles diseñadas a medida del negocio.",
        detail:
          "Desarrollo de aplicaciones y plataformas digitales, desde el diseño de la experiencia hasta la implementación, para negocios que necesitan una herramienta propia en lugar de una solución genérica.",
        galleryAlts: [
          "Smartphone con interfaz de aplicación móvil",
          "Tablet con wireframe de aplicación sobre el escritorio",
        ],
      },
    },
  },
  {
    slugOverride: "ia",
    gallery: [
      { kind: "image", src: "/assets/services/ia-01.jpg" },
      { kind: "image", src: "/assets/services/ia-02.jpg" },
    ],
    content: {
      pt: {
        name: "IA",
        statement: "Inteligência Artificial aplicada à produção criativa e à operação do negócio.",
        detail:
          "Integração de ferramentas de Inteligência Artificial nos processos criativos e operacionais da marca — para acelerar a produção de conteúdo, apoiar decisões e automatizar tarefas, sempre com supervisão humana sobre o resultado final.",
        galleryAlts: [
          "Visualização abstrata de uma rede neuronal de IA",
          "Escultura de mão robótica a segurar uma esfera de luz",
        ],
      },
      en: {
        name: "AI",
        statement: "Artificial Intelligence applied to creative production and business operations.",
        detail:
          "Integration of Artificial Intelligence tools into the brand's creative and operational processes — to speed up content production, support decisions and automate tasks, always with human oversight of the final result.",
        galleryAlts: [
          "Abstract visualization of an AI neural network",
          "Sculpture of a robotic hand holding a sphere of light",
        ],
      },
      es: {
        name: "IA",
        statement: "Inteligencia Artificial aplicada a la producción creativa y a la operación del negocio.",
        detail:
          "Integración de herramientas de Inteligencia Artificial en los procesos creativos y operativos de la marca — para acelerar la producción de contenido, apoyar decisiones y automatizar tareas, siempre con supervisión humana sobre el resultado final.",
        galleryAlts: [
          "Visualización abstracta de una red neuronal de IA",
          "Escultura de una mano robótica sosteniendo una esfera de luz",
        ],
      },
    },
  },
  {
    slugOverride: "producao-conteudos",
    gallery: [
      { kind: "image", src: "/assets/services/producao-conteudos-01.jpg" },
      { kind: "image", src: "/assets/services/producao-conteudos-02.jpg" },
    ],
    content: {
      pt: {
        name: "PRODUÇÃO DE CONTEÚDOS",
        statement: "Vídeo, fotografia e captação aérea com equipa própria.",
        detail:
          "Produção de vídeos, fotografia e imagens aéreas com drone — do briefing à edição final — para conteúdo de marca, produto, eventos e redes sociais, sem depender de fornecedores externos.",
        galleryAlts: [
          "Equipamento de câmara e iluminação de estúdio",
          "Drone em voo sobre um pôr do sol",
        ],
      },
      en: {
        name: "CONTENT PRODUCTION",
        statement: "Video, photography and aerial footage with our own team.",
        detail:
          "Production of videos, photography and drone aerial imagery — from briefing to final edit — for brand, product, event and social media content, without relying on outside vendors.",
        galleryAlts: [
          "Camera and studio lighting equipment",
          "Drone flying over a sunset",
        ],
      },
      es: {
        name: "PRODUCCIÓN DE CONTENIDOS",
        statement: "Vídeo, fotografía y captación aérea con equipo propio.",
        detail:
          "Producción de vídeos, fotografía e imágenes aéreas con dron — del briefing a la edición final — para contenido de marca, producto, eventos y redes sociales, sin depender de proveedores externos.",
        galleryAlts: [
          "Equipo de cámara e iluminación de estudio",
          "Dron volando sobre una puesta de sol",
        ],
      },
    },
  },
  {
    gallery: [
      { kind: "image", src: "/assets/services/trafego-pago-01.jpg" },
      { kind: "image", src: "/assets/services/trafego-pago-02.jpg" },
    ],
    content: {
      pt: {
        name: "TRÁFEGO PAGO",
        statement: "Campanhas de investimento em Meta, Google e TikTok.",
        detail:
          "Criação, gestão e otimização contínua de campanhas pagas nas principais plataformas, com acompanhamento de desempenho e ajustes regulares para melhorar o retorno do investimento.",
        galleryAlts: [
          "Ecrã de computador com gráficos de campanhas publicitárias",
          "Vários ecrãs com painéis de marketing e curvas de crescimento",
        ],
      },
      en: {
        name: "PAID TRAFFIC",
        statement: "Paid campaigns on Meta, Google and TikTok.",
        detail:
          "Creation, management and ongoing optimization of paid campaigns on the main platforms, with performance tracking and regular adjustments to improve return on investment.",
        galleryAlts: [
          "Computer screen showing advertising campaign charts",
          "Multiple screens with marketing dashboards and growth curves",
        ],
      },
      es: {
        name: "TRÁFICO PAGO",
        statement: "Campañas de inversión en Meta, Google y TikTok.",
        detail:
          "Creación, gestión y optimización continua de campañas pagas en las principales plataformas, con seguimiento de desempeño y ajustes regulares para mejorar el retorno de la inversión.",
        galleryAlts: [
          "Pantalla de ordenador con gráficos de campañas publicitarias",
          "Varias pantallas con paneles de marketing y curvas de crecimiento",
        ],
      },
    },
  },
  {
    gallery: [
      { kind: "image", src: "/assets/services/trafego-organico-01.jpg" },
      { kind: "image", src: "/assets/services/trafego-organico-02.jpg" },
    ],
    content: {
      pt: {
        name: "TRÁFEGO ORGÂNICO",
        statement: "Crescimento sustentado através de conteúdo e SEO.",
        detail:
          "Estratégias de conteúdo, otimização para motores de busca e presença orgânica nas redes sociais, para atrair e reter audiência sem depender exclusivamente de investimento em anúncios.",
        galleryAlts: [
          "Rebento verde a crescer de um teclado de portátil",
          "Lupa sobre um ecrã de resultados de pesquisa",
        ],
      },
      en: {
        name: "ORGANIC TRAFFIC",
        statement: "Sustained growth through content and SEO.",
        detail:
          "Content strategies, search engine optimization and organic social media presence, to attract and retain audience without relying solely on ad spend.",
        galleryAlts: [
          "Green sprout growing from a laptop keyboard",
          "Magnifying glass over a search results screen",
        ],
      },
      es: {
        name: "TRÁFICO ORGÁNICO",
        statement: "Crecimiento sostenido a través de contenido y SEO.",
        detail:
          "Estrategias de contenido, optimización para motores de búsqueda y presencia orgánica en redes sociales, para atraer y retener audiencia sin depender exclusivamente de la inversión en anuncios.",
        galleryAlts: [
          "Brote verde creciendo de un teclado de portátil",
          "Lupa sobre una pantalla de resultados de búsqueda",
        ],
      },
    },
  },
  {
    slugOverride: "formacao-restaurantes",
    gallery: [
      { kind: "image", src: "/assets/services/formacao-restaurantes-01.jpg" },
      { kind: "image", src: "/assets/services/formacao-restaurantes-02.jpg" },
    ],
    content: {
      pt: {
        name: "FORMAÇÃO PESSOAL PARA RESTAURANTES",
        statement: "Capacitação de equipas de sala e atendimento no setor da restauração.",
        detail:
          "Formação prática para equipas de restaurantes — atendimento, apresentação, comunicação com o cliente e boas práticas de serviço — adaptada à realidade e ao ritmo de cada espaço.",
        galleryAlts: [
          "Mesa de restaurante composta, com toalha branca e talheres",
          "Prato gourmet emplatado num prato escuro",
        ],
      },
      en: {
        name: "STAFF TRAINING FOR RESTAURANTS",
        statement: "Training for floor and service teams in the restaurant industry.",
        detail:
          "Hands-on training for restaurant teams — service, presentation, customer communication and best service practices — adapted to the reality and pace of each venue.",
        galleryAlts: [
          "Set restaurant table with a white tablecloth and cutlery",
          "Gourmet dish plated on dark tableware",
        ],
      },
      es: {
        name: "FORMACIÓN DE PERSONAL PARA RESTAURANTES",
        statement: "Capacitación de equipos de sala y atención en el sector de la restauración.",
        detail:
          "Formación práctica para equipos de restaurantes — atención, presentación, comunicación con el cliente y buenas prácticas de servicio — adaptada a la realidad y al ritmo de cada espacio.",
        galleryAlts: [
          "Mesa de restaurante montada, con mantel blanco y cubiertos",
          "Plato gourmet emplatado en un plato oscuro",
        ],
      },
    },
  },
  {
    slugOverride: "assessoria-empresarios",
    gallery: [
      { kind: "image", src: "/assets/services/assessoria-empresarios-01.jpg" },
      { kind: "image", src: "/assets/services/assessoria-empresarios-02.jpg" },
    ],
    content: {
      pt: {
        name: "ASSESSORIA A PEQUENOS E MÉDIOS EMPRESÁRIOS",
        statement: "Acompanhamento próximo para negócios em crescimento.",
        detail:
          "Aconselhamento em marketing, comunicação e organização digital para pequenos e médios empresários que precisam de um parceiro próximo para estruturar decisões, sem a complexidade de uma grande agência.",
        galleryAlts: [
          "Secretária de escritório organizada, com caderno e portátil",
          "Documento de contrato assinado sobre uma secretária de madeira",
        ],
      },
      en: {
        name: "ADVISORY FOR SMALL AND MEDIUM BUSINESS OWNERS",
        statement: "Close support for growing businesses.",
        detail:
          "Advice on marketing, communication and digital organization for small and medium business owners who need a close partner to structure decisions, without the complexity of a large agency.",
        galleryAlts: [
          "Organized office desk with a notebook and laptop",
          "Signed contract document on a wooden desk",
        ],
      },
      es: {
        name: "ASESORÍA PARA PEQUEÑOS Y MEDIANOS EMPRESARIOS",
        statement: "Acompañamiento cercano para negocios en crecimiento.",
        detail:
          "Asesoramiento en marketing, comunicación y organización digital para pequeños y medianos empresarios que necesitan un socio cercano para estructurar decisiones, sin la complejidad de una gran agencia.",
        galleryAlts: [
          "Escritorio de oficina organizado, con cuaderno y portátil",
          "Documento de contrato firmado sobre un escritorio de madera",
        ],
      },
    },
  },
];

// Slug is derived once from the Portuguese name so it stays a single stable
// identifier shared across every locale's URL (/servicos/gestao-redes-sociais,
// /en/servicos/gestao-redes-sociais, /es/servicos/gestao-redes-sociais).
const SLUGS: string[] = RAW_SERVICES.map((s) => s.slugOverride ?? slugify(s.content.pt.name));

export function getServicesForLocale(locale: Locale): ServiceItem[] {
  return RAW_SERVICES.map((service, i) => {
    const c = service.content[locale];
    return {
      slug: SLUGS[i],
      name: c.name,
      statement: c.statement,
      detail: c.detail,
      gallery: service.gallery.map((g, gi) => ({
        kind: g.kind,
        src: g.src,
        alt: c.galleryAlts[gi] ?? c.name,
      })),
    };
  });
}

export function getServiceBySlug(slug: string, locale: Locale): ServiceItem | undefined {
  return getServicesForLocale(locale).find((service) => service.slug === slug);
}

// Kept for any code that still wants the raw Portuguese list.
export const SERVICES: ServiceItem[] = getServicesForLocale("pt");
