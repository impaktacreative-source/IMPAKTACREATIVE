import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import type { Locale } from "@/lib/i18n/locale";
import { LOCALE_LABEL, LOCALES } from "@/lib/i18n/locale";
import { getDictionary } from "@/lib/i18n/dictionary";
import { HOME_ALT_PATHS, HOME_TO, TRABALHO_TO } from "@/lib/i18n/routes";

interface ImpaktaNavProps {
  locale: Locale;
  // Equivalent URL of the current page in each locale, for the language
  // switcher. Defaults to each locale's homepage when a page doesn't pass
  // one (kept optional so nothing breaks if a caller forgets it).
  altPaths?: Record<Locale, string>;
}

// Fixed, translucent glass nav shared across every IMPAKTA page (home,
// /trabalho, /servicos/$slug) in all three languages. Stays overlaid on the
// hero video on "/" (and its "/en", "/es" equivalents) and reads fine over
// the white sections it scrolls across everywhere else.
export function ImpaktaNav({ locale, altPaths }: ImpaktaNavProps) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);
  const switcher = altPaths ?? HOME_ALT_PATHS;

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
      <Link className="impakta-nav__logo" onClick={close} to={HOME_TO[locale]}>
        <img alt="IMPAKTA Creative" src="/assets/branding/impakta-logo.png" />
      </Link>

      <div className="impakta-nav__actions">
        <div className="impakta-nav__lang" aria-label="Idioma / Language / Idioma">
          {LOCALES.map((l) => (
            <a
              className={
                l === locale ? "impakta-nav__lang-item impakta-nav__lang-item--active" : "impakta-nav__lang-item"
              }
              href={switcher[l]}
              key={l}
              aria-current={l === locale ? "page" : undefined}
            >
              {LOCALE_LABEL[l]}
            </a>
          ))}
        </div>
        <a className="impakta-nav__cta" href="https://wa.me/351936330812" rel="noopener noreferrer" target="_blank">
          {dict.nav.cta}
        </a>
        <button
          aria-controls="impakta-nav-menu"
          aria-expanded={open}
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          className={open ? "impakta-nav__toggle impakta-nav__toggle--open" : "impakta-nav__toggle"}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="impakta-nav__toggle-bar" />
          <span className="impakta-nav__toggle-bar" />
        </button>
      </div>

      <nav
        aria-label={dict.nav.ariaLabel}
        className={open ? "impakta-nav__menu impakta-nav__menu--open" : "impakta-nav__menu"}
        id="impakta-nav-menu"
      >
        <Link className="impakta-nav__menu-link" onClick={close} to={TRABALHO_TO[locale]}>
          <span className="impakta-nav__menu-index">01</span>
          {dict.nav.menu.trabalho}
        </Link>
        <Link className="impakta-nav__menu-link" hash="servicos" onClick={close} to={HOME_TO[locale]}>
          <span className="impakta-nav__menu-index">02</span>
          {dict.nav.menu.servicos}
        </Link>
        <Link className="impakta-nav__menu-link" hash="ceo" onClick={close} to={HOME_TO[locale]}>
          <span className="impakta-nav__menu-index">03</span>
          {dict.nav.menu.ceo}
        </Link>
        <Link className="impakta-nav__menu-link" hash="contacto" onClick={close} to={HOME_TO[locale]}>
          <span className="impakta-nav__menu-index">04</span>
          {dict.nav.menu.contacto}
        </Link>
      </nav>

      {open ? <button aria-hidden="true" className="impakta-nav__scrim" onClick={close} tabIndex={-1} type="button" /> : null}
    </header>
  );
}
