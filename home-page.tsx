import { Link } from "@tanstack/react-router";

import { ImpaktaNav } from "@/components/impakta/impakta-nav";
import { ContactSection } from "@/components/impakta/contact-section";
import { CoverVideoHero } from "@/components/impakta/cover-video-hero";
import { getWorkForLocale } from "@/lib/work-data";
import { getServicesForLocale } from "@/lib/services-data";
import { useReveal } from "@/hooks/use-reveal";
import type { Locale } from "@/lib/i18n/locale";
import { getDictionary } from "@/lib/i18n/dictionary";
import { HOME_ALT_PATHS, SERVICO_TO, TRABALHO_TO } from "@/lib/i18n/routes";

// Only confirmed real photos of Priscila herself go into the founder story —
// never a stand-in, the chef, or food shots (the rest of the /assets/founder
// library is generic restaurant/event photography, not usable here).
const STORY_PHOTOS = [
  "/assets/founder/priscila-03.jpg",
  "/assets/founder/priscila-06.jpg",
  "/assets/founder/priscila-08.jpg",
  "/assets/founder/priscila-09.jpg",
  "/assets/founder/priscila-10.jpg",
];

const BASTIDORES_VIDEOS = ["/assets/founder/bastidores-01.mp4", "/assets/founder/bastidores-02.mp4"];

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const services = getServicesForLocale(locale);

  return (
    <main className="impakta-page">
      <ImpaktaNav locale={locale} altPaths={HOME_ALT_PATHS} />
      <CoverVideoHero
        eyebrow={dict.hero.eyebrow}
        intro={dict.hero.intro}
        marquee={services.map((s) => s.name)}
        title={
          <>
            {dict.hero.titlePrefix}
            <em>{dict.hero.titleEm}</em>
            {dict.hero.titleSuffix}
          </>
        }
      />
      <ServicesSection locale={locale} />
      <CeoSection locale={locale} />
      <NumbersSection locale={locale} />
      <WorkSection locale={locale} />
      <BastidoresVideoSection locale={locale} />
      <ClientsSection locale={locale} />
      <StatementSection locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}

function NumbersSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-numbers impakta-reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <div className="impakta-numbers__inner">
        <p className="impakta-eyebrow">
          <span aria-hidden="true" className="impakta-crosshair" />
          {dict.numbers.eyebrow}
        </p>
        <div className="impakta-numbers__grid">
          {dict.numbers.items.map((n, i) => (
            <div className="impakta-numbers__item" key={n.label}>
              <div
                className={
                  i === 0
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

function WorkSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const work = getWorkForLocale(locale);
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
              {dict.work.eyebrow}
            </p>
            <h2 className="impakta-work__title">{dict.work.title}</h2>
          </div>
          <Link className="impakta-work__hint" to={TRABALHO_TO[locale]}>
            {dict.work.hint}
          </Link>
        </div>
        <div className="impakta-work__grid">
          {work.map((item) => (
            <Link
              className={`impakta-work__item impakta-work__item--${item.variant}`}
              hash={item.slug}
              key={item.slug}
              to={TRABALHO_TO[locale]}
            >
              {item.img ? (
                <img alt={item.client} className="impakta-work__img" loading="lazy" src={item.img} />
              ) : (
                <div className="impakta-work__placeholder" role="img" aria-label={`${item.client} — ${dict.work.photosComingSoon}`}>
                  <span>{dict.work.photosComingSoon}</span>
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

function ServicesSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const services = getServicesForLocale(locale);
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
            <span aria-hidden="true" className="impakta-crosshair" />
            {dict.services.eyebrow}
          </p>
          <span aria-hidden="true" className="impakta-services__count">
            {String(services.length).padStart(2, "0")}
          </span>
        </div>
        <div className="impakta-services__list">
          {services.map((s, i) => (
            <div className="impakta-services__row" key={s.slug}>
              <span className="impakta-services__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="impakta-services__name">{s.name}</h3>
              <p className="impakta-services__statement">{s.statement}</p>
              <Link className="impakta-services__link" params={{ slug: s.slug }} to={SERVICO_TO[locale]}>
                {dict.services.linkLabel}
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

function CeoSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
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
            {dict.ceo.eyebrow}
          </p>
          <h2 className="impakta-ceo__name">{dict.ceo.name}</h2>
          <p className="impakta-ceo__role">{dict.ceo.role}</p>
        </div>

        <div className="impakta-ceo__portrait-wrap">
          <img alt={dict.ceo.portraitAlt} className="impakta-ceo__portrait" src="/assets/branding/priscila-ceo.jpg" />
        </div>

        <StorySection locale={locale} />

        <div className="impakta-ceo__body">
          <div className="impakta-ceo__quotes">
            <p className="impakta-eyebrow impakta-eyebrow--on-dark">
              <span aria-hidden="true" className="impakta-crosshair" />
              {dict.ceo.naPratica}
            </p>
            <ul className="impakta-ceo__pillars">
              {dict.ceo.pillars.map((line) => (
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
function StorySection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <div className="impakta-story">
      {dict.ceo.storyMoments.map((moment, i) => (
        <StoryMoment key={STORY_PHOTOS[i]} src={STORY_PHOTOS[i]} alt={moment.alt} text={moment.text} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}

function StoryMoment({
  src,
  alt,
  text,
  reverse,
}: {
  src: string;
  alt: string;
  text: string;
  reverse: boolean;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      className={`impakta-story__moment${reverse ? " impakta-story__moment--reverse" : ""}${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <figure className="impakta-story__photo">
        <img alt={alt} className="impakta-story__img" loading="lazy" src={src} />
      </figure>
      <p className="impakta-story__text">{text}</p>
    </div>
  );
}

function BastidoresVideoSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
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
            {dict.bastidores.eyebrow}
          </p>
          <h2 className="impakta-bastidores-video__title">{dict.bastidores.title}</h2>
          <p className="impakta-bastidores-video__intro">{dict.bastidores.intro}</p>
        </div>
        <div className="impakta-bastidores-video__grid">
          {dict.bastidores.videos.map((video, i) => (
            <figure className="impakta-bastidores-video__item" key={BASTIDORES_VIDEOS[i]}>
              <div className="impakta-bastidores-video__frame">
                <span aria-hidden="true" className="impakta-bastidores-video__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <video className="impakta-bastidores-video__player" controls playsInline preload="metadata">
                  <source src={BASTIDORES_VIDEOS[i]} type="video/mp4" />
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

function ClientsSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      aria-label={dict.portfolioTeaser.eyebrow}
      className={`impakta-portfolio-teaser impakta-reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <span aria-hidden="true" className="impakta-portfolio-teaser__mark">
        +
      </span>
      <div className="impakta-portfolio-teaser__inner">
        <p className="impakta-eyebrow impakta-eyebrow--on-dark">
          <span aria-hidden="true" className="impakta-crosshair" />
          {dict.portfolioTeaser.eyebrow}
        </p>
        <h2 className="impakta-portfolio-teaser__title">{dict.portfolioTeaser.title}</h2>
        <p className="impakta-portfolio-teaser__text">{dict.portfolioTeaser.text}</p>
        <Link className="impakta-portfolio-teaser__cta" to={TRABALHO_TO[locale]}>
          {dict.portfolioTeaser.cta}
          <span aria-hidden="true" className="impakta-portfolio-teaser__cta-arrow">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

function StatementSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <section
      className={`impakta-statement impakta-reveal${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <p className="impakta-statement__text">
        {dict.statement.text}
        <span className="impakta-statement__dot">.</span>
      </p>
      <span aria-hidden="true" className="impakta-statement__mark">
        .
      </span>
    </section>
  );
}
