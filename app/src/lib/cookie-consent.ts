// Cookie consent (RGPD) for the Meta Pixel. Nothing from Meta is loaded until
// the visitor clicks "Aceitar" in the cookie banner. The choice is kept in
// localStorage; the "Cookies" link in the footer reopens the banner so the
// visitor can change it at any time.

export const META_PIXEL_ID = "1821720102301132";
const STORAGE_KEY = "impakta-cookies";
export const OPEN_COOKIE_BANNER_EVENT = "impakta:open-cookie-banner";

export type Consent = "granted" | "denied";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage blocked: the choice lasts only for this page view */
  }
}

export function isInternalPath(pathname: string) {
  return pathname === "/sistema" || pathname.startsWith("/sistema/");
}

type Fbq = (...args: unknown[]) => void;

// Meta's base pixel code, run only after consent. Returns the fbq function.
export function loadMetaPixel(): Fbq {
  if (window.fbq) return window.fbq;
  /* eslint-disable */
  (function (f: any, b: Document, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  const fbq = window.fbq as unknown as Fbq;
  fbq("init", META_PIXEL_ID);
  return fbq;
}

export function openCookieBanner() {
  window.dispatchEvent(new Event(OPEN_COOKIE_BANNER_EVENT));
}
