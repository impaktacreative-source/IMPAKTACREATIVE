import { createFileRoute } from "@tanstack/react-router";

import { ImpaktaNav } from "@/components/impakta/impakta-nav";
import { ContactSection } from "@/components/impakta/contact-section";
import { WORK } from "@/lib/work-data";

export const Route = createFileRoute("/trabalho")({
  component: TrabalhoPage,
});

function TrabalhoPage() {
  return (
    <main className="impakta-page">
      <ImpaktaNav />
      <TrabalhoHero />
      <TrabalhoList />
      <ContactSection />
    </main>
  );
}

function TrabalhoHero() {
  return (
    <section className="impakta-trabalho-hero">
      <div className="impakta-trabalho-hero__inner">
        <p className="impakta-eyebrow">
          <span aria-hidden="true" className="impakta-crosshair" />
          Portefólio
        </p>
        <h1 className="impakta-trabalho-hero__title">Trabalho que fez impakto.</h1>
        <p className="impakta-trabalho-hero__lead">
          Uma seleção de projetos onde estratégia, criatividade e execução se juntaram para gerar
          resultado real — não só conteúdo bonito.
        </p>
      </div>
    </section>
  );
}

function TrabalhoList() {
  return (
    <section className="impakta-trabalho-list">
      <div className="impakta-trabalho-list__inner">
        {WORK.map((item, index) => (
          <article className="impakta-case" id={item.slug} key={item.slug}>
            <div className="impakta-case__media">
              <img alt={item.client} className="impakta-case__img" loading="lazy" src={item.img} />
            </div>
            <div className="impakta-case__copy">
              <span className="impakta-case__index">{String(index + 1).padStart(2, "0")}</span>
              <p className="impakta-case__category">{item.category}</p>
              <h2 className="impakta-case__client">
                {item.client}
                <span className="impakta-case__year">{item.year}</span>
              </h2>
              <p className="impakta-case__summary">{item.summary}</p>

              <dl className="impakta-case__facts">
                <div>
                  <dt>Desafio</dt>
                  <dd>{item.desafio}</dd>
                </div>
                <div>
                  <dt>Abordagem</dt>
                  <dd>{item.abordagem}</dd>
                </div>
                <div>
                  <dt>Resultado</dt>
                  <dd>{item.resultado}</dd>
                </div>
              </dl>

              <ul className="impakta-case__services">
                {item.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
