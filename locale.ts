// Central definition of the site's supported locales. Portuguese is the
// original/default language and lives at the unprefixed root ("/"); English
// and Spanish live under their own path prefixes ("/en", "/es") so each
// language gets its own indexable URL (recommended for SEO over a
// client-side toggle that doesn't change the URL).
export type Locale = "pt" | "en" | "es";

export const LOCALES: Locale[] = ["pt", "en", "es"];
export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_LABEL: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export const HTML_LANG: Record<Locale, string> = {
  pt: "pt",
  en: "en",
  es: "es",
};

/**
 * Prefixes a root-relative path with the locale, except for the default
 * locale which stays unprefixed. `path` must start with "/".
 *   localePath("pt", "/trabalho") -> "/trabalho"
 *   localePath("en", "/trabalho") -> "/en/trabalho"
 *   localePath("es", "/")         -> "/es"
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

/** Derives the active locale from a pathname (e.g. from the router state). */
export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "pt";
}
