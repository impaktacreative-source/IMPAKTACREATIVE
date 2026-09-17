// Shared portfolio data — the homepage teaser (WorkSection) and the full
// /trabalho listing page both read from here so the two stay in sync.
export type WorkVariant = "a" | "b" | "c" | "d";

export interface WorkItem {
  slug: string;
  client: string;
  category: string;
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
  services: string[];
  summary: string;
  // desafio/abordagem/resultado are optional on purpose: per the project's
  // portfolio brief, IMPAKTA never invents challenges, approach narratives
  // or results for a client — these are only filled in with real input
  // from Priscila. Until then the case just shows client, services and
  // photos, with `pendingNote` flagging what's still missing.
  desafio?: string;
  abordagem?: string;
  resultado?: string;
  // Short note rendered as a clearly-marked placeholder when a section is
  // still incomplete (more photos or copy coming later).
  pendingNote?: string;
}

export const WORK: WorkItem[] = [
  {
    slug: "aurora-rooftop-bar",
    client: "Aurora Rooftop Bar",
    category: "FOTO & VÍDEO",
    img: "/assets/work/work-aurora.jpg",
    variant: "a",
    year: "2025",
    services: ["Foto & Vídeo", "Direção Criativa", "Social Media"],
    summary: "Produção de conteúdo que transformou um rooftop com vista em destino de fim de semana.",
    desafio: "Um espaço com vista incrível e uma presença digital que não estava à altura.",
    abordagem:
      "Sessões editoriais de produto, ambiente e golden hour, pensadas para feed, stories e para converter em reserva.",
    resultado:
      "Ocupação em noites de semana subiu e a marca passou a ser referência de lifestyle na cidade.",
  },
  {
    slug: "nortemar",
    client: "Nortemar",
    category: "BRANDING",
    img: "/assets/work/work-nortemar.jpg",
    variant: "b",
    year: "2024",
    services: ["Branding", "Direção Criativa", "Foto & Vídeo"],
    summary: "Identidade visual para uma marca de produto do mar com ambição nacional.",
    desafio: "Um produto de qualidade escondido atrás de uma imagem genérica de categoria.",
    abordagem: "Nova identidade, sistema fotográfico e naming consistentes do armazém à prateleira.",
    resultado:
      "Entrada em novas cadeias de retalho, com a marca a liderar a categoria em destaque de linear.",
  },
  {
    slug: "voltra",
    client: "Voltra",
    category: "CAMPANHAS",
    img: "/assets/work/work-voltra.jpg",
    variant: "c",
    year: "2025",
    services: ["Paid Media", "Direção Criativa", "Estratégia"],
    summary: "Campanha performance-first para acelerar aquisição sem perder marca.",
    desafio: "Custo de aquisição a subir e a criatividade a repetir-se em todos os canais.",
    abordagem:
      "Novo território criativo testado em paralelo com um plano de media orientado a dados.",
    resultado: "Redução do custo de aquisição e o melhor trimestre de sempre em novos clientes.",
  },
  {
    slug: "casa-fontes",
    client: "Casa Fontes",
    category: "WEB & DIGITAL",
    img: "/assets/work/work-casa-fontes.jpg",
    variant: "d",
    year: "2024",
    services: ["Web & Digital", "Branding", "Inteligência Artificial"],
    summary: "Website que finalmente representa o nível da experiência Casa Fontes.",
    desafio: "Uma marca premium com um site que não convertia visitas em reservas.",
    abordagem:
      "Design editorial, motor de reservas direto e produção visual acelerada por IA para o catálogo.",
    resultado: "As reservas diretas passaram a superar as feitas por plataformas de terceiros.",
  },
  {
    slug: "grupo-ferreira",
    client: "Grupo Ferreira",
    category: "REDES SOCIAIS & TRÁFEGO",
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
    services: ["Gestão de Redes Sociais", "Tráfego Pago", "Automação"],
    summary:
      "Gestão de redes sociais, tráfego pago e automação para os espaços de restauração do Grupo Ferreira.",
  },
  {
    slug: "sillage-eventos",
    client: "Sillage Eventos",
    category: "EVENTOS",
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
    services: [],
    summary: "Cobertura de noites de eventos da Sillage — ambiente, música ao vivo e experiência à mesa.",
    pendingNote: "Mais fotos e o texto final chegam em breve.",
  },
  {
    slug: "lmo-advogados",
    client: "Lmo Advogados",
    category: "ADVOCACIA",
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
    services: [],
    summary: "Secção reservada para o trabalho com a Lmo Advogados.",
    pendingNote: "Texto final a chegar.",
  },
  {
    slug: "supermercado-amanhecer",
    client: "Supermercado Amanhecer",
    category: "RETALHO",
    img: "/assets/work/supermercado-amanhecer/supermercado-amanhecer-01.jpg",
    gallery: ["/assets/work/supermercado-amanhecer/supermercado-amanhecer-01.jpg"],
    variant: "d",
    year: "2026",
    services: [],
    summary: "Secção reservada para o trabalho com o Supermercado Amanhecer.",
    pendingNote: "Mais fotos e o texto final chegam em breve.",
  },
  {
    slug: "clinicaltos",
    client: "ClinicAltos",
    category: "CLÍNICA DE ESTÉTICA",
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
    services: [],
    summary: "Secção reservada para o trabalho com a ClinicAltos, clínica de estética.",
    pendingNote: "Texto final a chegar.",
  },
];
