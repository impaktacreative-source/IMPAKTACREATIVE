import { InstagramIcon, WhatsappIcon } from "@/components/impakta/social-icons";
import type { Locale } from "@/lib/i18n/locale";
import { getDictionary } from "@/lib/i18n/dictionary";

// Shared footer/contact block rendered at the bottom of every IMPAKTA page
// (home, /trabalho, /servicos/$slug) in all three languages, so contact
// info + nav anchors stay consistent site-wide.
export function ContactSection({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const dict = getDictionary(locale);

  return (
    <section className="impakta-contact" id="contacto">
      <div className="impakta-contact__top">
        <h2 className="impakta-contact__title">
          {dict.contact.title}
          <span className="impakta-contact__dot">.</span>
        </h2>
        <a
          className="impakta-contact__cta"
          href="https://wa.me/351936330812"
          rel="noopener noreferrer"
          target="_blank"
        >
          {dict.contact.cta}
        </a>
      </div>

      <div className="impakta-contact__band">
        <div className="impakta-contact__band-inner">
          <div className="impakta-contact__col">
            <p className="impakta-contact__heading">{dict.contact.addressLabel}</p>
            <p className="impakta-contact__value">{dict.contact.addressValue}</p>
          </div>

          <div className="impakta-contact__col">
            <p className="impakta-contact__heading">{dict.contact.emailLabel}</p>
            <a
              className="impakta-contact__value impakta-contact__value--link"
              href="mailto:impaktacreative@gmail.com"
            >
              impaktacreative@gmail.com
            </a>
          </div>

          <div className="impakta-contact__col">
            <p className="impakta-contact__heading">{dict.contact.whatsappLabel}</p>
            <a
              className="impakta-contact__value impakta-contact__value--link"
              href="https://wa.me/351936330812"
              rel="noopener noreferrer"
              target="_blank"
            >
              936 330 812
            </a>
          </div>

          <div className="impakta-contact__social">
            <a
              aria-label="WhatsApp"
              className="impakta-contact__social-btn"
              href="https://wa.me/351936330812"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsappIcon />
            </a>
            <a
              aria-label="Instagram"
              className="impakta-contact__social-btn"
              href="https://instagram.com/impakta.pt"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="impakta-contact__bottom">
        <span>{dict.contact.rights(year)}</span>
        {/* TODO: point to a real privacy policy page once one exists */}
        <a href="#">{dict.contact.privacy}</a>
      </div>
    </section>
  );
}
