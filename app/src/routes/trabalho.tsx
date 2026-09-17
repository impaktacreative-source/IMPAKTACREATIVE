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
              {item.img ? (
                <img alt={item.client} className="impakta-case__img" loading="lazy" src={item.img} />
              ) : (
                <div className="impakta-case__placeholder" role="img" aria-label={`${item.client} — fotos a chegar`}>
                  <span>Fotos a chegar</span>
                </div>
              )}
            </div>
            <div className="impakta-case__copy">
              <span className="impakta-case__index">{String(index + 1).padStart(2, "0")}</span>
              <p className="impakta-case__category">{item.category}</p>
              <h2 className="impakta-case__client">
                {item.client}
                <span className="impakta-case__year">{item.year}</span>
              </h2>
              <p className="impakta-case__summary">{item.summary}</p>

              {(item.desafio || item.abordagem || item.resultado) && (
                <dl className="impakta-case__facts">
                  {item.desafio && (
                    <div>
                      <dt>Desafio</dt>
                      <dd>{item.desafio}</dd>
                    </div>
                  )}
                  {item.abordagem && (
                    <div>
                      <dt>Abordagem</dt>
                      <dd>{item.abordagem}</dd>
                    </div>
                  )}
                  {item.resultado && (
                    <div>
                      <dt>Resultado</dt>
                      <dd>{item.resultado}</dd>
                    </div>
                  )}
                </dl>
              )}

              {item.services.length > 0 && (
                <ul className="impakta-case__services">
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              )}

              {item.pendingNote && <p className="impakta-case__pending">{item.pendingNote}</p>}
            </div>

            {item.gallery && item.gallery.length > 1 && (
              <div className="impakta-case__gallery">
                {item.gallery.map((src, i) => (
                  <div className="impakta-case__gallery-item" key={src}>
                    <img
                      alt={`${item.client} — foto ${i + 1}`}
                      className="impakta-case__gallery-img"
                      loading="lazy"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
