import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ImpaktaNav } from "@/components/impakta/impakta-nav";
import { ContactSection } from "@/components/impakta/contact-section";
import { CoverVideoHero } from "@/components/impakta/cover-video-hero";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const index = SERVICES.findIndex((s) => s.slug === service.slug);
  const other = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="impakta-page">
      <ImpaktaNav />

      {/* Same "vídeo de capa" reel as the homepage hero, compact and looping
          — every service page keeps the branded video running. */}
      <CoverVideoHero
        compact
        eyebrow={`Serviço ${String(index + 1).padStart(2, "0")}`}
        intro={service.statement}
        title={service.name}
      >
        <a className="impakta-contact__cta" href="https://wa.me/351936330812" rel="noopener noreferrer" target="_blank">
          Fala Connosco
        </a>
      </CoverVideoHero>

      <section className="impakta-service-hero">
        <div className="impakta-service-hero__inner">
          <p className="impakta-service-hero__detail">{service.detail}</p>
        </div>
      </section>

      {service.gallery.length ? (
        <section className="impakta-service-gallery">
          <div className="impakta-service-gallery__inner">
            <p className="impakta-eyebrow">
              <span aria-hidden="true" className="impakta-crosshair" />
              Como fica na prática
            </p>
            <div className="impakta-service-gallery__grid">
              {service.gallery.map((item) => (
                <figure className="impakta-service-gallery__item" key={item.src}>
                  {item.kind === "video" ? (
                    <video
                      autoPlay
                      className="impakta-service-gallery__media"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img alt={item.alt} className="impakta-service-gallery__media" loading="lazy" src={item.src} />
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="impakta-service-other">
        <div className="impakta-service-other__inner">
          <p className="impakta-eyebrow">
            <span aria-hidden="true" className="impakta-crosshair" />
            Também fazemos
          </p>
          <div className="impakta-service-other__grid">
            {other.map((s) => (
              <Link className="impakta-service-other__item" key={s.slug} params={{ slug: s.slug }} to="/servicos/$slug">
                <span className="impakta-service-other__name">{s.name}</span>
                <span aria-hidden="true" className="impakta-services__link-arrow">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
