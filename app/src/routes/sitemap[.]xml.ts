import { createFileRoute } from "@tanstack/react-router";

import { LOCALES, localePath } from "@/lib/i18n/locale";
import { getServicesForLocale } from "@/lib/services-data";

// One entry per PT page (home, /trabalho, every /servicos/$slug), each with
// an <xhtml:link rel="alternate" hreflang="..."> per language pointing at
// its EN/ES/PT equivalent — the standard way to tell Google these three
// URLs are the same page in different languages, so it can index each in
// the language it's most relevant for.
const SERVICE_SLUGS = getServicesForLocale("pt").map((s) => s.slug);

const PAGE_PATHS = ["/", "/trabalho", ...SERVICE_SLUGS.map((slug) => `/servicos/${slug}`)];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const today = new Date().toISOString().split("T")[0];

        // Google wants one <url> entry per localized URL (not just the
        // default), each carrying the full set of hreflang alternates
        // including a self-referencing one.
        const urls = PAGE_PATHS.flatMap((path) => {
          const alternates = LOCALES.map(
            (locale) =>
              `    <xhtml:link rel="alternate" hreflang="${locale}" href="${origin}${localePath(locale, path)}" />`,
          ).join("\n");
          return LOCALES.map((locale) =>
            [
              "  <url>",
              `    <loc>${origin}${localePath(locale, path)}</loc>`,
              alternates,
              `    <lastmod>${today}</lastmod>`,
              `    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>`,
              `    <priority>${path === "/" ? "1.0" : "0.7"}</priority>`,
              "  </url>",
            ].join("\n"),
          );
        });

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...urls,
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
