import type { Locale } from "./locale";

// Per-locale route literals for TanStack Router's typed <Link to="..."> —
// kept as small literal-union maps (rather than string interpolation) so
// each branch stays a statically known, type-checked route.
export const HOME_TO: Record<Locale, "/" | "/en" | "/es"> = { pt: "/", en: "/en", es: "/es" };

export const TRABALHO_TO: Record<Locale, "/trabalho" | "/en/trabalho" | "/es/trabalho"> = {
  pt: "/trabalho",
  en: "/en/trabalho",
  es: "/es/trabalho",
};

export const SERVICO_TO: Record<Locale, "/servicos/$slug" | "/en/servicos/$slug" | "/es/servicos/$slug"> = {
  pt: "/servicos/$slug",
  en: "/en/servicos/$slug",
  es: "/es/servicos/$slug",
};

/** Alt-path map for the language switcher, keyed by every locale's homepage. */
export const HOME_ALT_PATHS: Record<Locale, string> = { pt: "/", en: "/en", es: "/es" };

/** Alt-path map for the language switcher on /trabalho and its /en, /es equivalents. */
export const TRABALHO_ALT_PATHS: Record<Locale, string> = {
  pt: "/trabalho",
  en: "/en/trabalho",
  es: "/es/trabalho",
};

/** Alt-path map for the language switcher on a /servicos/$slug detail page. */
export function servicoAltPaths(slug: string): Record<Locale, string> {
  return {
    pt: `/servicos/${slug}`,
    en: `/en/servicos/${slug}`,
    es: `/es/servicos/${slug}`,
  };
}
