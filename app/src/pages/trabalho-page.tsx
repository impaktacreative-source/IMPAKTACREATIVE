import { ImpaktaNav } from "@/components/impakta/impakta-nav";
import { ContactSection } from "@/components/impakta/contact-section";
import { getWorkForLocale } from "@/lib/work-data";
import type { Locale } from "@/lib/i18n/locale";
import { getDictionary } from "@/lib/i18n/dictionary";
import { TRABALHO_ALT_PATHS } from "@/lib/i18n/routes";

export function TrabalhoPage({ locale }: { locale: Locale }) {
  return (
    <main className="impakta-page">
      <ImpaktaNav locale={locale} altPaths={TRABALHO_ALT_PATHS} />
      <TrabalhoHero locale={locale} />
      <TrabalhoList locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}

function TrabalhoHero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section className="impakta-trabalho-hero">
      <div className="impakta-trabalho-hero__inner">
        <p className="impakta-eyebrow">
          <span aria-hidden="true" className="impakta-crosshair" />
          {dict.trabalho.eyebrow}
        </p>
        <h1 className="impakta-trabalho-hero__title">{dict.trabalho.title}</h1>
        <p className="impakta-trabalho-hero__lead">{dict.trabalho.lead}</p>
      </div>
    </section>
  );
}

function TrabalhoList({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const work = getWorkForLocale(locale);
  return (
    <section className="impakta-trabalho-list">
      <div className="impakta-trabalho-list__inner">
        {work.map((item, index) => (
          <article className="impakta-case" id={item.slug} key={item.slug}>
            <div className="impakta-case__media">
              {item.img ? (
                <img alt={item.client} className="impakta-case__img" loading="lazy" src={item.img} />
              ) : (
                <div className="impakta-case__placeholder" role="img" aria-label={`${item.client} — ${dict.work.photosComingSoon}`}>
                  <span>{dict.work.photosComingSoon}</span>
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
                      <dt>{dict.trabalho.desafio}</dt>
                      <dd>{item.desafio}</dd>
                    </div>
                  )}
                  {item.abordagem && (
                    <div>
                      <dt>{dict.trabalho.abordagem}</dt>
                      <dd>{item.abordagem}</dd>
                    </div>
                  )}
                  {item.resultado && (
                    <div>
                      <dt>{dict.trabalho.resultado}</dt>
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
                      alt={dict.trabalho.photoAlt(item.client, i + 1)}
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
