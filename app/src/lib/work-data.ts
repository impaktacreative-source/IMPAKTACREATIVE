// Shared portfolio data — the homepage teaser (WorkSection) and the full
// /trabalho listing page both read from here so the two stay in sync.
export type WorkVariant = "a" | "b" | "c" | "d";

export interface WorkItem {
  slug: string;
  client: string;
  category: string;
  img: string;
  variant: WorkVariant;
  year: string;
  services: string[];
  summary: string;
  desafio: string;
  abordagem: string;
  resultado: string;
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
];
