import { createFileRoute, Link } from "@tanstack/react-router";

import { ImpaktaNav } from "@/components/impakta/impakta-nav";
import { ContactSection } from "@/components/impakta/contact-section";
import { CoverVideoHero } from "@/components/impakta/cover-video-hero";
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

// Founder story, told one moment at a time as the visitor scrolls — each
// line pairs with one of the real candid photos of Priscila, alternating
// sides. Only confirmed real photos of Priscila herself go here — never a
// stand-in, the chef, or food shots (the rest of the /assets/founder library
// is generic restaurant/event photography, not usable in her personal story).
const STORY_MOMENTS = [
  {
    src: "/assets/founder/priscila-03.jpg",
    alt: "Priscila sentada no sofá do estúdio, descalça, a trabalhar no portátil",
    text: "Priscila Figueiredo Silva é quem está à frente da IMPAKTA desde o primeiro dia.",
  },
  {
    src: "/assets/founder/priscila-06.jpg",
    alt: "Priscila a bordo, ao pôr do sol, a filmar com o telemóvel durante um evento",
    text: "Está no terreno tanto quanto na estratégia — a acompanhar de perto cada produção, cada evento.",
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
      <CoverVideoHero
        eyebrow="IMPAKTA Creative"
        intro="Estratégia, criatividade, tecnologia e execução — eventos, redes sociais, automação, aplicativos, IA, produção de conteúdos, tráfego pago e orgânico, formação e assessoria. Tudo debaixo do mesmo teto."
        marquee={SERVICES.map((s) => s.name)}
        title={
          <>
            SOMOS <em>IMPAKTA</em>.
          </>
        }
      />
      <ServicesSection />
      <CeoSection />
      <NumbersSection />
      <WorkSection />
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
              {item.img ? (
                <img alt={item.client} className="impakta-work__img" loading="lazy" src={item.img} />
              ) : (
                <div className="impakta-work__placeholder" role="img" aria-label={`${item.client} — fotos a chegar`}>
                  <span>Fotos a chegar</span>
                </div>
              )}
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

        <div className="impakta-ceo__portrait-wrap">
          <img
            alt="Priscila Figueiredo Silva, fundadora da IMPAKTA Creative, retrato de estúdio"
            className="impakta-ceo__portrait"
            src="/assets/branding/priscila-ceo.jpg"
          />
        </div>

        <StorySection />

        <div className="impakta-ceo__body">
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
      </div>
    </section>
  );
}

// The founder story revealed one moment at a time on scroll — each moment
// mounts its own useReveal() so it fades/slides in independently the instant
// it enters the viewport, alternating photo/text sides as you go.
function StorySection() {
  return (
    <div className="impakta-story">
      {STORY_MOMENTS.map((moment, i) => (
        <StoryMoment key={moment.src} moment={moment} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}

function StoryMoment({
  moment,
  reverse,
}: {
  moment: (typeof STORY_MOMENTS)[number];
  reverse: boolean;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      className={`impakta-story__moment${reverse ? " impakta-story__moment--reverse" : ""}${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <figure className="impakta-story__photo">
        <img alt={moment.alt} className="impakta-story__img" loading="lazy" src={moment.src} />
      </figure>
      <p className="impakta-story__text">{moment.text}</p>
    </div>
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
