// Shared services data — the homepage ServicesSection rows and the
// /servicos/$slug detail route both read from here so they stay in sync.
export interface ServiceItem {
  slug: string;
  name: string;
  statement: string;
  detail: string;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const RAW_SERVICES: Array<Omit<ServiceItem, "slug"> & { slugOverride?: string }> = [
  {
    name: "EVENTOS",
    statement: "Conceção e produção de eventos, do briefing ao dia D.",
    detail:
      "Planeamos e coordenamos eventos corporativos, lançamentos de produto e ativações de marca — logística, fornecedores, timings e produção de conteúdo no local, para que o evento funcione e fique bem registado.",
  },
  {
    name: "GESTÃO DE REDES SOCIAIS",
    slugOverride: "gestao-redes-sociais",
    statement: "Presença online consistente, com calendário e estratégia próprios.",
    detail:
      "Planeamento editorial, criação e publicação de conteúdo, resposta à comunidade e acompanhamento de métricas nas redes sociais da marca — para manter uma presença ativa e coerente com o posicionamento do negócio.",
  },
  {
    name: "AUTOMAÇÃO",
    statement: "Processos e fluxos de trabalho que poupam tempo à equipa.",
    detail:
      "Desenho e implementação de automações — desde o atendimento e a gestão de leads até tarefas internas repetitivas — para reduzir trabalho manual e libertar tempo para o que exige decisão humana.",
  },
  {
    name: "APLICATIVOS",
    statement: "Aplicações web e mobile desenhadas à medida do negócio.",
    detail:
      "Desenvolvimento de aplicações e plataformas digitais, do desenho da experiência à implementação, para negócios que precisam de uma ferramenta própria em vez de uma solução genérica.",
  },
  {
    name: "IA",
    slugOverride: "ia",
    statement: "Inteligência Artificial aplicada à produção criativa e à operação do negócio.",
    detail:
      "Integração de ferramentas de Inteligência Artificial nos processos criativos e operacionais da marca — para acelerar a produção de conteúdo, apoiar decisões e automatizar tarefas, sempre com supervisão humana sobre o resultado final.",
  },
  {
    name: "PRODUÇÃO DE CONTEÚDOS",
    slugOverride: "producao-conteudos",
    statement: "Vídeo, fotografia e captação aérea com equipa própria.",
    detail:
      "Produção de vídeos, fotografia e imagens aéreas com drone — do briefing à edição final — para conteúdo de marca, produto, eventos e redes sociais, sem depender de fornecedores externos.",
  },
  {
    name: "TRÁFEGO PAGO",
    statement: "Campanhas de investimento em Meta, Google e TikTok.",
    detail:
      "Criação, gestão e otimização contínua de campanhas pagas nas principais plataformas, com acompanhamento de desempenho e ajustes regulares para melhorar o retorno do investimento.",
  },
  {
    name: "TRÁFEGO ORGÂNICO",
    statement: "Crescimento sustentado através de conteúdo e SEO.",
    detail:
      "Estratégias de conteúdo, otimização para motores de busca e presença orgânica nas redes sociais, para atrair e reter audiência sem depender exclusivamente de investimento em anúncios.",
  },
  {
    name: "FORMAÇÃO PESSOAL PARA RESTAURANTES",
    slugOverride: "formacao-restaurantes",
    statement: "Capacitação de equipas de sala e atendimento no setor da restauração.",
    detail:
      "Formação prática para equipas de restaurantes — atendimento, apresentação, comunicação com o cliente e boas práticas de serviço — adaptada à realidade e ao ritmo de cada espaço.",
  },
  {
    name: "ASSESSORIA A PEQUENOS E MÉDIOS EMPRESÁRIOS",
    slugOverride: "assessoria-empresarios",
    statement: "Acompanhamento próximo para negócios em crescimento.",
    detail:
      "Aconselhamento em marketing, comunicação e organização digital para pequenos e médios empresários que precisam de um parceiro próximo para estruturar decisões, sem a complexidade de uma grande agência.",
  },
];

export const SERVICES: ServiceItem[] = RAW_SERVICES.map((service) => {
  const { slugOverride, ...rest } = service;
  return {
    ...rest,
    slug: slugOverride ?? slugify(service.name),
  };
});

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
