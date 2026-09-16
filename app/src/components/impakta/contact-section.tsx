import { InstagramIcon, WhatsappIcon } from "@/components/impakta/social-icons";

// Shared footer/contact block rendered at the bottom of every IMPAKTA page
// (home, /trabalho, /servicos/$slug) so contact info + nav anchors stay
// consistent site-wide.
export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section className="impakta-contact" id="contacto">
      <div className="impakta-contact__top">
        <h2 className="impakta-contact__title">
          Vamos criar o próximo impakt<span className="impakta-contact__dot">.</span>
        </h2>
        <a
          className="impakta-contact__cta"
          href="https://wa.me/351936330812"
          rel="noopener noreferrer"
          target="_blank"
        >
          Fala Connosco
        </a>
      </div>

      <div className="impakta-contact__band">
        <div className="impakta-contact__band-inner">
          <div className="impakta-contact__col">
            <p className="impakta-contact__heading">Morada</p>
            <p className="impakta-contact__value">Avenida do Atlântico 16, piso 8, porta 9, 1990-019 Lisboa</p>
          </div>

          <div className="impakta-contact__col">
            <p className="impakta-contact__heading">Email</p>
            <a
              className="impakta-contact__value impakta-contact__value--link"
              href="mailto:impaktacreative@gmail.com"
            >
              impaktacreative@gmail.com
            </a>
          </div>

          <div className="impakta-contact__col">
            <p className="impakta-contact__heading">WhatsApp</p>
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
        <span>© {year} IMPAKTA Creative. Todos os direitos reservados.</span>
        {/* TODO: point to a real privacy policy page once one exists */}
        <a href="#">Política de Privacidade</a>
      </div>
    </section>
  );
}
