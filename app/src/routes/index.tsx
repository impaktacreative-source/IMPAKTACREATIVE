import { createFileRoute, Link } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { ImpaktaNav } from "@/components/impakta/impakta-nav";
import { ContactSection } from "@/components/impakta/contact-section";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { WORK } from "@/lib/work-data";
import { SERVICES } from "@/lib/services-data";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const NUMBERS = [
  { value: "74+", label: "CLIENTES", lead: true },
  { value: "210+", label: "PROJETOS", lead: false },
  { value: "340+", label: "CAMPANHAS", lead: false },
  { value: "58", label: "WEBSITES", lead: false },
  { value: "12M+", label: "ALCANCE GERADO", lead: false },
  { value: "96%", label: "CLIENTES QUE FICAM", lead: false },
];

const CEO_PILLARS = [
  "Porque é que acredito que a maioria das marcas falham... antes mesmo de nascer.",
  "Muitas empresas têm um plano de marketing. Poucas têm uma ESTRATÉGIA DE MARCA.",
  "Antes de perguntar: \"Como posso vender mais?\" Eu faria outra pergunta: Porque é que alguém deveria confiar em mim? A resposta a essa pergunta constrói marcas, não campanhas.",
  "Nenhuma estratégia consegue sustentar durante muito tempo uma liderança que ainda não está preparada para o próximo nível.",
];

const CEO_GALLERY = [
  {
    src: "/assets/founder/priscila-02.jpg",
    alt: "Priscila no sofá, a trabalhar no portátil",
    variant: "tall",
  },
  {
    src: "/assets/founder/priscila-03.jpg",
    alt: "Priscila a sorrir, a brincar com o cabelo",
    variant: "square",
  },
  {
    src: "/assets/founder/priscila-04.jpg",
    alt: "Priscila a rir",
    variant: "wide",
  },
  {
    src: "/assets/founder/priscila-05.jpg",
    alt: "Priscila a olhar para um moodboard de branding",
    variant: "wide",
  },
  {
    src: "/assets/founder/priscila-06.jpg",
    alt: "Priscila de óculos, a folhear a revista Creative Work",
    variant: "square",
  },
  {
    src: "/assets/founder/priscila-07.jpg",
    alt: "Priscila de óculos, numa secretária com um jogo de xadrez e uma ampulheta",
    variant: "tall",
  },
];

const BASTIDORES = [
  {
    src: "/assets/founder/bastidores-01.jpg",
    alt: "Still-life de um prato estilizado, fotografado pela equipa",
    label: "Produção",
  },
  {
    src: "/assets/founder/bastidores-02.jpg",
    alt: "Empregado de mesa a servir um prato",
    label: "No terreno",
  },
  {
    src: "/assets/founder/bastidores-03.jpg",
    alt: "Mesa de restaurante preparada para uma sessão fotográfica",
    label: "Bastidores",
  },
  {
    src: "/assets/founder/bastidores-04.jpg",
    alt: "Chef a empratar um prato para fotografia",
    label: "No terreno",
  },
];

const BASTIDORES_VIDEOS = [
  {
    src: "/assets/founder/bastidores-01.mp4",
    index: "01",
    caption: "Fim de tarde de produção, ao largo — nem toda a luz boa acontece em estúdio.",
  },
  {
    src: "/assets/founder/bastidores-02.mp4",
    index: "02",
    caption: "Depois das filmagens, à mesa — a parte do trabalho que não aparece no feed.",
  },
];

function Index() {
  return (
    <main className="impakta-page">
      <ImpaktaNav />
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <NumbersSection />
      <WorkSection />
      <ServicesSection />
      <CeoSection />
      <BastidoresVideoSection />
      <ClientsSection />
      <StatementSection />
      <ContactSection />
    </main>
  );
}

function NumbersSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-numbers impakta-reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="impakta-numbers__inner">
        <p className="impakta-eyebrow">
          <span aria-hidden="true" className="impakta-crosshair" />
          Números
        </p>
        <div className="impakta-numbers__grid">
          {NUMBERS.map((n) => (
            <div className="impakta-numbers__item" key={n.label}>
              <div
                className={
                  n.lead
                    ? "impakta-numbers__value impakta-numbers__value--lead"
                    : "impakta-numbers__value"
                }
              >
                {n.value}
              </div>
              <div className="impakta-numbers__label">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-work impakta-reveal${isVisible ? " is-visible" : ""}`}
      id="trabalho"
      ref={ref}
    >
      <div className="impakta-work__inner">
        <div className="impakta-work__head">
          <div>
            <p className="impakta-eyebrow">
              <span aria-hidden="true" className="impakta-crosshair" />
              Trabalho selecionado
            </p>
            <h2 className="impakta-work__title">Work that made an impakt.</h2>
          </div>
          <Link className="impakta-work__hint" to="/trabalho">
            Ver trabalho
          </Link>
        </div>
        <div className="impakta-work__grid">
          {WORK.map((item) => (
            <Link
              className={`impakta-work__item impakta-work__item--${item.variant}`}
              hash={item.slug}
              key={item.slug}
              to="/trabalho"
            >
              <img alt={item.client} className="impakta-work__img" loading="lazy" src={item.img} />
              <div className="impakta-work__meta">
                <span className="impakta-work__client">{item.client}</span>
                <span className="impakta-work__cat">{item.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-services impakta-reveal${isVisible ? " is-visible" : ""}`}
      id="servicos"
      ref={ref}
    >
      <div className="impakta-services__inner">
        <div className="impakta-services__head">
          <p className="impakta-eyebrow">
            <span aria-hidden="true" className="impakta-crosshair" />O que fazemos
          </p>
          <span aria-hidden="true" className="impakta-services__count">
            {String(SERVICES.length).padStart(2, "0")}
          </span>
        </div>
        <div className="impakta-services__list">
          {SERVICES.map((s, i) => (
            <div className="impakta-services__row" key={s.slug}>
              <span className="impakta-services__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="impakta-services__name">{s.name}</h3>
              <p className="impakta-services__statement">{s.statement}</p>
              <Link className="impakta-services__link" params={{ slug: s.slug }} to="/servicos/$slug">
                Saber mais
                <span aria-hidden="true" className="impakta-services__link-arrow">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CeoSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-ceo impakta-reveal${isVisible ? " is-visible" : ""}`}
      id="ceo"
      ref={ref}
    >
      <div className="impakta-ceo__inner">
        <div className="impakta-ceo__head">
          <p className="impakta-eyebrow">
            <span aria-hidden="true" className="impakta-crosshair" />
            Fundadora
          </p>
          <h2 className="impakta-ceo__name">Priscila Figueiredo Silva</h2>
          <p className="impakta-ceo__role">CEO &amp; Fundadora, IMPAKTA Creative</p>
        </div>

        <div className="impakta-ceo__gallery">
          <div className="impakta-ceo__portrait-wrap">
            <img
              alt="Priscila Figueiredo Silva, fundadora da IMPAKTA Creative, sentada à secretária com o portátil coberto de autocolantes da marca, mãos entrelaçadas, a olhar para a câmara"
              className="impakta-ceo__portrait"
              src="/assets/founder/priscila-portrait.jpg"
            />
          </div>
          <div className="impakta-ceo__mosaic">
            {CEO_GALLERY.map((photo) => (
              <div
                className={`impakta-ceo__mosaic-item impakta-ceo__mosaic-item--${photo.variant}`}
                key={photo.src}
              >
                <img
                  alt={photo.alt}
                  className="impakta-ceo__mosaic-img"
                  loading="lazy"
                  src={photo.src}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="impakta-ceo__body">
          <div className="impakta-ceo__bio">
            <p>
              Priscila Figueiredo Silva tem 28 anos e é a fundadora da IMPAKTA Creative. Há 10 anos
              em Portugal — antes viveu em Espanha —, já passou pelo Porto e pelo Algarve antes de se
              fixar em Lisboa, onde vive atualmente.
            </p>
            <p>
              É ela quem está à frente da IMPAKTA desde o primeiro dia, como empreendedora e
              fundadora, a construir uma forma própria de olhar para marcas: mais interessada em
              perguntas difíceis do que em fórmulas fáceis.
            </p>
            <p>
              Hoje é representada por uma equipa de 7 pessoas, todas a fazer um excelente trabalho —
              e é esse grupo, tanto quanto qualquer estratégia, que continua a dar forma ao que a
              IMPAKTA é.
            </p>
          </div>

          <div className="impakta-ceo__quotes">
            <p className="impakta-eyebrow impakta-eyebrow--on-dark">
              <span aria-hidden="true" className="impakta-crosshair" />
              Na prática
            </p>
            <ul className="impakta-ceo__pillars">
              {CEO_PILLARS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a
              className="impakta-ceo__social"
              href="https://instagram.com/figueiredopri"
              rel="noopener noreferrer"
              target="_blank"
            >
              @figueiredopri
            </a>
          </div>
        </div>

        <div className="impakta-ceo__bastidores">
          <p className="impakta-eyebrow">
            <span aria-hidden="true" className="impakta-crosshair" />
            Registo do dia a dia
          </p>
          <div className="impakta-ceo__bastidores-strip">
            {BASTIDORES.map((photo) => (
              <figure className="impakta-ceo__bastidores-item" key={photo.src}>
                <img
                  alt={photo.alt}
                  className="impakta-ceo__bastidores-img"
                  loading="lazy"
                  src={photo.src}
                />
                <figcaption className="impakta-ceo__bastidores-caption">{photo.label}</figcaption>
              </figure>
            ))}
            <figure
              aria-hidden="true"
              className="impakta-ceo__bastidores-item impakta-ceo__bastidores-item--video"
            >
              {/* Optional decorative clip — purely supporting texture, fails silently if missing. */}
              <video autoPlay className="impakta-ceo__bastidores-video" loop muted playsInline>
                <source src="/assets/founder/bastidores.mp4" type="video/mp4" />
              </video>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function BastidoresVideoSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-bastidores-video impakta-reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="impakta-bastidores-video__inner">
        <div className="impakta-bastidores-video__head">
          <p className="impakta-eyebrow">
            <span aria-hidden="true" className="impakta-crosshair" />
            Bastidores
          </p>
          <h2 className="impakta-bastidores-video__title">No terreno com a IMPAKTA.</h2>
          <p className="impakta-bastidores-video__intro">
            Duas gravações reais de produção — sem guião, sem encenação — para mostrar como é
            trabalhar connosco fora do ecrã.
          </p>
        </div>
        <div className="impakta-bastidores-video__grid">
          {BASTIDORES_VIDEOS.map((video) => (
            <figure className="impakta-bastidores-video__item" key={video.src}>
              <div className="impakta-bastidores-video__frame">
                <span aria-hidden="true" className="impakta-bastidores-video__index">
                  {video.index}
                </span>
                <video className="impakta-bastidores-video__player" controls playsInline preload="metadata">
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
              <figcaption className="impakta-bastidores-video__caption">{video.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      aria-label="Portefólio"
      className={`impakta-portfolio-teaser impakta-reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <span aria-hidden="true" className="impakta-portfolio-teaser__mark">
        +
      </span>
      <div className="impakta-portfolio-teaser__inner">
        <p className="impakta-eyebrow impakta-eyebrow--on-dark">
          <span aria-hidden="true" className="impakta-crosshair" />
          Portefólio
        </p>
        <h2 className="impakta-portfolio-teaser__title">O nosso portefólio está a chegar.</h2>
        <p className="impakta-portfolio-teaser__text">
          Estamos a preparar uma seleção dos projetos que temos vindo a desenvolver — disponível
          brevemente.
        </p>
        <Link className="impakta-portfolio-teaser__cta" to="/trabalho">
          Ver trabalho
          <span aria-hidden="true" className="impakta-portfolio-teaser__cta-arrow">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

function StatementSection() {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-statement impakta-reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <p className="impakta-statement__text">
        Não criamos conteúdo para encher feed
        <span className="impakta-statement__dot">.</span>
      </p>
      <span aria-hidden="true" className="impakta-statement__mark">
        .
      </span>
    </section>
  );
}
