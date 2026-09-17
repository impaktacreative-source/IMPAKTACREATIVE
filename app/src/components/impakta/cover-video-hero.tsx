import type { ReactNode } from "react";

// Shared "vídeo de capa" hero — used at the top of the homepage and reused
// (compact variant) at the top of every /servicos/$slug page so the same
// branded reel is always present, muted, looping, on every service page.
// Kept as a plain <video loop> per mount rather than a cross-route persisted
// layout: simplest, most robust way to guarantee it never fails to loop.
interface CoverVideoHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
  /** Scrolling service-name strip rendered under the intro — the hero's own
   * "falamos logo dos serviços" moment, independent of the full ServicesSection. */
  marquee?: string[];
}

export function CoverVideoHero({ eyebrow, title, intro, children, compact, marquee }: CoverVideoHeroProps) {
  return (
    <section className={compact ? "impakta-cover-hero impakta-cover-hero--compact" : "impakta-cover-hero"}>
      <div aria-hidden="true" className="impakta-cover-hero__media">
        <video
          autoPlay
          className="impakta-cover-hero__video"
          loop
          muted
          playsInline
          poster="/assets/hero/impakta-cover-poster.jpg"
          preload="auto"
        >
          <source src="/assets/hero/impakta-cover.mp4" type="video/mp4" />
        </video>
        <div className="impakta-cover-hero__scrim" />
        <span className="impakta-cover-hero__glow impakta-cover-hero__glow--green" />
        <span className="impakta-cover-hero__glow impakta-cover-hero__glow--pink" />
      </div>

      <div className="impakta-cover-hero__content">
        {eyebrow ? (
          <p className="impakta-eyebrow impakta-eyebrow--on-dark">
            <span aria-hidden="true" className="impakta-crosshair" />
            {eyebrow}
          </p>
        ) : null}
        <h1 className="impakta-cover-hero__title">{title}</h1>
        {intro ? <p className="impakta-cover-hero__intro">{intro}</p> : null}
        {marquee?.length ? (
          <div aria-hidden="true" className="impakta-cover-hero__marquee">
            <div className="impakta-cover-hero__marquee-track">
              {[...marquee, ...marquee].map((item, i) => (
                <span className="impakta-cover-hero__marquee-item" key={`${item}-${i}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
