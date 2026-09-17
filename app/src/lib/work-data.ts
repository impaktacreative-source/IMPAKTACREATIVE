// Shared portfolio data — the homepage teaser (WorkSection) and the full
// /trabalho listing page both read from here so the two stay in sync.
import type { Locale } from "@/lib/i18n/locale";

export type WorkVariant = "a" | "b" | "c" | "d";

// Everything that changes by language for one case study. Only translations
// of already-approved copy go here — per the portfolio brief, IMPAKTA never
// invents challenges, approach narratives or results for a client.
export interface WorkItemLocaleContent {
  category: string;
  services: string[];
  summary: string;
  desafio?: string;
  abordagem?: string;
  resultado?: string;
  // Short note rendered as a clearly-marked placeholder when a section is
  // still incomplete (more photos or copy coming later).
  pendingNote?: string;
}

export interface WorkItemBase {
  slug: string;
  // Client name is a proper noun — identical across locales.
  client: string;
  // Cover image used in the homepage teaser grid and as the featured shot
  // on /trabalho. Optional: a client whose photos haven't arrived yet
  // renders a "fotos a chegar" placeholder instead of a broken <img>.
  img?: string;
  // Full photo set for the client, shown as a gallery on /trabalho below
  // the case copy. Keep pushing paths here as more photos come in — no
  // other change is needed, the gallery grid grows on its own.
  gallery?: string[];
  variant: WorkVariant;
  year: string;
  content: Record<Locale, WorkItemLocaleContent>;
}

// Flat, locale-resolved shape consumed by the page components — identical
// to the old single-language WorkItem so the components barely change.
export interface WorkItem {
  slug: string;
  client: string;
  category: string;
  img?: string;
  gallery?: string[];
  variant: WorkVariant;
  year: string;
  services: string[];
  summary: string;
  desafio?: string;
  abordagem?: string;
  resultado?: string;
  pendingNote?: string;
}

const WORK_BASE: WorkItemBase[] = [
  {
    slug: "aurora-rooftop-bar",
    client: "Aurora Rooftop Bar",
    img: "/assets/work/work-aurora.jpg",
    variant: "a",
    year: "2025",
    content: {
      pt: {
        category: "FOTO & VÍDEO",
        services: ["Foto & Vídeo", "Direção Criativa", "Social Media"],
        summary: "Produção de conteúdo que transformou um rooftop com vista em destino de fim de semana.",
        desafio: "Um espaço com vista incrível e uma presença digital que não estava à altura.",
        abordagem:
          "Sessões editoriais de produto, ambiente e golden hour, pensadas para feed, stories e para converter em reserva.",
        resultado:
          "Ocupação em noites de semana subiu e a marca passou a ser referência de lifestyle na cidade.",
      },
      en: {
        category: "PHOTO & VIDEO",
        services: ["Photo & Video", "Creative Direction", "Social Media"],
        summary: "Content production that turned a rooftop with a view into a weekend destination.",
        desafio: "A space with an incredible view and a digital presence that wasn't living up to it.",
        abordagem:
          "Editorial shoots of product, ambiance and golden hour, designed for feed, stories, and to convert into bookings.",
        resultado: "Weeknight occupancy rose and the brand became a lifestyle reference in the city.",
      },
      es: {
        category: "FOTO Y VÍDEO",
        services: ["Foto y Vídeo", "Dirección Creativa", "Social Media"],
        summary: "Producción de contenido que transformó un rooftop con vista en un destino de fin de semana.",
        desafio: "Un espacio con una vista increíble y una presencia digital que no estaba a la altura.",
        abordagem:
          "Sesiones editoriales de producto, ambiente y hora dorada, pensadas para feed, stories y para convertir en reservas.",
        resultado:
          "La ocupación en noches entre semana aumentó y la marca se convirtió en referencia de lifestyle en la ciudad.",
      },
    },
  },
  {
    slug: "nortemar",
    client: "Nortemar",
    img: "/assets/work/work-nortemar.jpg",
    variant: "b",
    year: "2024",
    content: {
      pt: {
        category: "BRANDING",
        services: ["Branding", "Direção Criativa", "Foto & Vídeo"],
        summary: "Identidade visual para uma marca de produto do mar com ambição nacional.",
        desafio: "Um produto de qualidade escondido atrás de uma imagem genérica de categoria.",
        abordagem: "Nova identidade, sistema fotográfico e naming consistentes do armazém à prateleira.",
        resultado:
          "Entrada em novas cadeias de retalho, com a marca a liderar a categoria em destaque de linear.",
      },
      en: {
        category: "BRANDING",
        services: ["Branding", "Creative Direction", "Photo & Video"],
        summary: "Visual identity for a seafood product brand with national ambition.",
        desafio: "A quality product hidden behind a generic category image.",
        abordagem: "A new identity, photographic system and naming, consistent from warehouse to shelf.",
        resultado: "Entry into new retail chains, with the brand leading the category in shelf visibility.",
      },
      es: {
        category: "BRANDING",
        services: ["Branding", "Dirección Creativa", "Foto y Vídeo"],
        summary: "Identidad visual para una marca de producto del mar con ambición nacional.",
        desafio: "Un producto de calidad escondido detrás de una imagen genérica de categoría.",
        abordagem: "Nueva identidad, sistema fotográfico y naming consistentes del almacén a la estantería.",
        resultado:
          "Entrada en nuevas cadenas de retail, con la marca liderando la categoría en destaque de lineal.",
      },
    },
  },
  {
    slug: "voltra",
    client: "Voltra",
    img: "/assets/work/work-voltra.jpg",
    variant: "c",
    year: "2025",
    content: {
      pt: {
        category: "CAMPANHAS",
        services: ["Paid Media", "Direção Criativa", "Estratégia"],
        summary: "Campanha performance-first para acelerar aquisição sem perder marca.",
        desafio: "Custo de aquisição a subir e a criatividade a repetir-se em todos os canais.",
        abordagem:
          "Novo território criativo testado em paralelo com um plano de media orientado a dados.",
        resultado: "Redução do custo de aquisição e o melhor trimestre de sempre em novos clientes.",
      },
      en: {
        category: "CAMPAIGNS",
        services: ["Paid Media", "Creative Direction", "Strategy"],
        summary: "A performance-first campaign to accelerate acquisition without losing brand.",
        desafio: "Rising acquisition costs and creative that repeated itself across every channel.",
        abordagem: "A new creative territory tested in parallel with a data-driven media plan.",
        resultado: "Reduced acquisition cost and the best quarter ever for new clients.",
      },
      es: {
        category: "CAMPAÑAS",
        services: ["Paid Media", "Dirección Creativa", "Estrategia"],
        summary: "Campaña performance-first para acelerar la adquisición sin perder marca.",
        desafio: "Costo de adquisición al alza y creatividad repitiéndose en todos los canales.",
        abordagem: "Nuevo territorio creativo testado en paralelo con un plan de medios orientado a datos.",
        resultado: "Reducción del costo de adquisición y el mejor trimestre de siempre en nuevos clientes.",
      },
    },
  },
  {
    slug: "casa-fontes",
    client: "Casa Fontes",
    img: "/assets/work/work-casa-fontes.jpg",
    variant: "d",
    year: "2024",
    content: {
      pt: {
        category: "WEB & DIGITAL",
        services: ["Web & Digital", "Branding", "Inteligência Artificial"],
        summary: "Website que finalmente representa o nível da experiência Casa Fontes.",
        desafio: "Uma marca premium com um site que não convertia visitas em reservas.",
        abordagem:
          "Design editorial, motor de reservas direto e produção visual acelerada por IA para o catálogo.",
        resultado: "As reservas diretas passaram a superar as feitas por plataformas de terceiros.",
      },
      en: {
        category: "WEB & DIGITAL",
        services: ["Web & Digital", "Branding", "Artificial Intelligence"],
        summary: "A website that finally represents the level of the Casa Fontes experience.",
        desafio: "A premium brand with a website that wasn't converting visits into bookings.",
        abordagem:
          "Editorial design, a direct booking engine, and AI-accelerated visual production for the catalog.",
        resultado: "Direct bookings came to outnumber those made through third-party platforms.",
      },
      es: {
        category: "WEB Y DIGITAL",
        services: ["Web y Digital", "Branding", "Inteligencia Artificial"],
        summary: "Sitio web que finalmente representa el nivel de la experiencia Casa Fontes.",
        desafio: "Una marca premium con un sitio web que no convertía visitas en reservas.",
        abordagem:
          "Diseño editorial, motor de reservas directo y producción visual acelerada por IA para el catálogo.",
        resultado: "Las reservas directas pasaron a superar a las realizadas por plataformas de terceros.",
      },
    },
  },
  {
    slug: "grupo-ferreira",
    client: "Grupo Ferreira",
    img: "/assets/work/grupo-ferreira/grupo-ferreira-01.jpg",
    gallery: [
      "/assets/work/grupo-ferreira/grupo-ferreira-01.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-02.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-03.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-04.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-05.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-06.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-07.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-08.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-09.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-10.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-11.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-12.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-13.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-14.jpg",
      "/assets/work/grupo-ferreira/grupo-ferreira-15.jpg",
    ],
    variant: "a",
    year: "2026",
    content: {
      pt: {
        category: "REDES SOCIAIS & TRÁFEGO",
        services: ["Gestão de Redes Sociais", "Tráfego Pago", "Automação"],
        summary:
          "Gestão de redes sociais, tráfego pago e automação para os espaços de restauração do Grupo Ferreira.",
      },
      en: {
        category: "SOCIAL MEDIA & TRAFFIC",
        services: ["Social Media Management", "Paid Traffic", "Automation"],
        summary: "Social media management, paid traffic and automation for Grupo Ferreira's restaurant venues.",
      },
      es: {
        category: "REDES SOCIALES Y TRÁFICO",
        services: ["Gestión de Redes Sociales", "Tráfico Pago", "Automatización"],
        summary:
          "Gestión de redes sociales, tráfico pago y automatización para los espacios de restauración de Grupo Ferreira.",
      },
    },
  },
  {
    slug: "sillage-eventos",
    client: "Sillage Eventos",
    img: "/assets/work/sillage-eventos/sillage-eventos-01.jpg",
    gallery: [
      "/assets/work/sillage-eventos/sillage-eventos-01.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-02.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-03.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-04.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-05.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-06.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-07.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-08.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-09.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-10.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-11.jpg",
      "/assets/work/sillage-eventos/sillage-eventos-12.jpg",
    ],
    variant: "b",
    year: "2026",
    content: {
      pt: {
        category: "EVENTOS",
        services: [],
        summary: "Cobertura de noites de eventos da Sillage — ambiente, música ao vivo e experiência à mesa.",
        pendingNote: "Mais fotos e o texto final chegam em breve.",
      },
      en: {
        category: "EVENTS",
        services: [],
        summary: "Coverage of Sillage event nights — ambiance, live music and the table experience.",
        pendingNote: "More photos and the final copy are coming soon.",
      },
      es: {
        category: "EVENTOS",
        services: [],
        summary: "Cobertura de noches de eventos de Sillage — ambiente, música en vivo y experiencia en la mesa.",
        pendingNote: "Más fotos y el texto final llegan pronto.",
      },
    },
  },
  {
    slug: "lmo-advogados",
    client: "Lmo Advogados",
    img: "/assets/work/lmo-advogados/lmo-advogados-01.jpg",
    gallery: [
      "/assets/work/lmo-advogados/lmo-advogados-01.jpg",
      "/assets/work/lmo-advogados/lmo-advogados-02.jpg",
      "/assets/work/lmo-advogados/lmo-advogados-03.jpg",
      "/assets/work/lmo-advogados/lmo-advogados-04.jpg",
      "/assets/work/lmo-advogados/lmo-advogados-05.jpg",
    ],
    variant: "c",
    year: "2026",
    content: {
      pt: {
        category: "ADVOCACIA",
        services: [],
        summary: "Secção reservada para o trabalho com a Lmo Advogados.",
        pendingNote: "Texto final a chegar.",
      },
      en: {
        category: "LAW FIRM",
        services: [],
        summary: "Section reserved for the work with Lmo Advogados.",
        pendingNote: "Final copy coming soon.",
      },
      es: {
        category: "ABOGACÍA",
        services: [],
        summary: "Sección reservada para el trabajo con Lmo Advogados.",
        pendingNote: "Texto final por llegar.",
      },
    },
  },
  {
    slug: "supermercado-amanhecer",
    client: "Supermercado Amanhecer",
    img: "/assets/work/supermercado-amanhecer/supermercado-amanhecer-01.jpg",
    gallery: [
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-01.jpg",
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-02.jpg",
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-03.jpg",
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-04.jpg",
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-05.jpg",
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-06.jpg",
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-07.jpg",
      "/assets/work/supermercado-amanhecer/supermercado-amanhecer-08.jpg",
    ],
    variant: "d",
    year: "2026",
    content: {
      pt: {
        category: "RETALHO",
        services: [],
        summary: "Secção reservada para o trabalho com o Supermercado Amanhecer.",
        pendingNote: "Texto final a chegar.",
      },
      en: {
        category: "RETAIL",
        services: [],
        summary: "Section reserved for the work with Supermercado Amanhecer.",
        pendingNote: "Final copy coming soon.",
      },
      es: {
        category: "MINORISTA",
        services: [],
        summary: "Sección reservada para el trabajo con Supermercado Amanhecer.",
        pendingNote: "Texto final por llegar.",
      },
    },
  },
  {
    slug: "clinicaltos",
    client: "ClinicAltos",
    img: "/assets/work/clinicaltos/clinicaltos-02.jpg",
    gallery: [
      "/assets/work/clinicaltos/clinicaltos-01.jpg",
      "/assets/work/clinicaltos/clinicaltos-02.jpg",
      "/assets/work/clinicaltos/clinicaltos-03.jpg",
      "/assets/work/clinicaltos/clinicaltos-04.jpg",
      "/assets/work/clinicaltos/clinicaltos-05.jpg",
      "/assets/work/clinicaltos/clinicaltos-06.jpg",
      "/assets/work/clinicaltos/clinicaltos-07.jpg",
      "/assets/work/clinicaltos/clinicaltos-08.jpg",
      "/assets/work/clinicaltos/clinicaltos-09.jpg",
      "/assets/work/clinicaltos/clinicaltos-10.jpg",
      "/assets/work/clinicaltos/clinicaltos-11.jpg",
    ],
    variant: "a",
    year: "2026",
    content: {
      pt: {
        category: "CLÍNICA DE ESTÉTICA",
        services: [],
        summary: "Secção reservada para o trabalho com a ClinicAltos, clínica de estética.",
        pendingNote: "Texto final a chegar.",
      },
      en: {
        category: "AESTHETIC CLINIC",
        services: [],
        summary: "Section reserved for the work with ClinicAltos, an aesthetic clinic.",
        pendingNote: "Final copy coming soon.",
      },
      es: {
        category: "CLÍNICA DE ESTÉTICA",
        services: [],
        summary: "Sección reservada para el trabajo con ClinicAltos, clínica de estética.",
        pendingNote: "Texto final por llegar.",
      },
    },
  },
];

/** Resolves the full WORK list into the flat, locale-specific shape the
 * homepage teaser and /trabalho page render. */
export function getWorkForLocale(locale: Locale): WorkItem[] {
  return WORK_BASE.map((item) => {
    const c = item.content[locale];
    return {
      slug: item.slug,
      client: item.client,
      img: item.img,
      gallery: item.gallery,
      variant: item.variant,
      year: item.year,
      category: c.category,
      services: c.services,
      summary: c.summary,
      desafio: c.desafio,
      abordagem: c.abordagem,
      resultado: c.resultado,
      pendingNote: c.pendingNote,
    };
  });
}

// Kept for any code that still wants the raw Portuguese list.
export const WORK: WorkItem[] = getWorkForLocale("pt");
