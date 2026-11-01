import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/locale";
import {
  OPEN_COOKIE_BANNER_EVENT,
  getConsent,
  loadMetaPixel,
  setConsent,
  type Consent,
} from "@/lib/cookie-consent";

const COPY: Record<Locale, { text: string; accept: string; decline: string; label: string }> = {
  pt: {
    label: "Cookies",
    text: "Usamos cookies de marketing (Meta Pixel) para medir visitas e melhorar os nossos anúncios. Só são ativados se aceitar.",
    accept: "Aceitar",
    decline: "Recusar",
  },
  en: {
    label: "Cookies",
    text: "We use marketing cookies (Meta Pixel) to measure visits and improve our ads. They are only turned on if you accept.",
    accept: "Accept",
    decline: "Decline",
  },
  es: {
    label: "Cookies",
    text: "Usamos cookies de marketing (Meta Pixel) para medir visitas y mejorar nuestros anuncios. Solo se activan si las acepta.",
    accept: "Aceptar",
    decline: "Rechazar",
  },
};

export function CookieBanner({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const copy = COPY[locale];

  useEffect(() => {
    if (getConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, reopen);
  }, []);

  function choose(value: Consent) {
    const before = getConsent();
    setConsent(value);
    setOpen(false);
    if (value === "granted" && !window.fbq) loadMetaPixel()("track", "PageView");
    // Withdrawing consent after the pixel already loaded: reload so it is gone.
    if (value === "denied" && before === "granted" && window.fbq) window.location.reload();
  }

  if (!open) return null;

  return (
    <div aria-label={copy.label} className="impakta-cookies" role="dialog">
      <p className="impakta-cookies__text">{copy.text}</p>
      <div className="impakta-cookies__actions">
        <button className="impakta-cookies__btn" onClick={() => choose("denied")} type="button">
          {copy.decline}
        </button>
        <button
          className="impakta-cookies__btn impakta-cookies__btn--primary"
          onClick={() => choose("granted")}
          type="button"
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}
