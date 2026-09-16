import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

// Fixed, translucent glass nav shared across every IMPAKTA page (home,
// /trabalho, /servicos/$slug). Stays overlaid on the hero video on "/" and
// reads fine over the white sections it scrolls across everywhere else.
export function ImpaktaNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the full menu is open + close on Escape.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="impakta-nav">
      <Link className="impakta-nav__logo" onClick={close} to="/">
        <img alt="IMPAKTA Creative" src="/assets/branding/impakta-logo.png" />
      </Link>

      <div className="impakta-nav__actions">
        <a className="impakta-nav__cta" href="https://wa.me/351936330812" rel="noopener noreferrer" target="_blank">
          Fala Connosco
        </a>
        <button
          aria-controls="impakta-nav-menu"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={open ? "impakta-nav__toggle impakta-nav__toggle--open" : "impakta-nav__toggle"}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="impakta-nav__toggle-bar" />
          <span className="impakta-nav__toggle-bar" />
        </button>
      </div>

      <nav
        aria-label="Navegação principal"
        className={open ? "impakta-nav__menu impakta-nav__menu--open" : "impakta-nav__menu"}
        id="impakta-nav-menu"
      >
        <Link className="impakta-nav__menu-link" onClick={close} to="/trabalho">
          <span className="impakta-nav__menu-index">01</span>
          Trabalho
        </Link>
        <Link className="impakta-nav__menu-link" hash="servicos" onClick={close} to="/">
          <span className="impakta-nav__menu-index">02</span>
          Serviços
        </Link>
        <Link className="impakta-nav__menu-link" hash="ceo" onClick={close} to="/">
          <span className="impakta-nav__menu-index">03</span>
          CEO
        </Link>
        <Link className="impakta-nav__menu-link" hash="contacto" onClick={close} to="/">
          <span className="impakta-nav__menu-index">04</span>
          Contacto
        </Link>
      </nav>

      {open ? <button aria-hidden="true" className="impakta-nav__scrim" onClick={close} tabIndex={-1} type="button" /> : null}
    </header>
  );
}
