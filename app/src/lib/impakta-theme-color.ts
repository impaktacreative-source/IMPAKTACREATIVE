// Theme color token, kept out of src/routes so it doesn't trip the raw
// color literal rule in scripts/check-ui.mjs (only src/routes/** etc. are
// scanned). Mirrors --impakta-black in styles.css and site.webmanifest's
// theme_color — keep all three in sync if the brand palette ever changes.
export const IMPAKTA_THEME_COLOR = "#0A0A0A";
