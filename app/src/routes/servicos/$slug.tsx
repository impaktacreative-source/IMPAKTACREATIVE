import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ImpaktaNav } from "@/components/impakta/impakta-nav";
import { ContactSection } from "@/components/impakta/contact-section";
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
      <section className="impakta-service-hero">
        <div className="impakta-service-hero__inner">
          <p className="impakta-eyebrow">
            <span aria-hidden="true" className="impakta-crosshair" />
            Serviço {String(index + 1).padStart(2, "0")}
          </p>
          <h1 className="impakta-service-hero__title">{service.name}</h1>
          <p className="impakta-service-hero__statement">{service.statement}</p>
          <p className="impakta-service-hero__detail">{service.detail}</p>
          <a className="impakta-contact__cta" href="https://wa.me/351936330812" rel="noopener noreferrer" target="_blank">
            Fala Connosco
          </a>
        </div>
      </section>

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
