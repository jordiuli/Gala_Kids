// Enllaços externs compartits.
// Un enllaç pot ser un text (el mateix per a tots els idiomes) o un objecte per idioma,
// p. ex. { es: "https://www.amazon.es/…", en: "https://www.amazon.com/…", fr: "https://www.amazon.fr/…" }.
// Els idiomes que no hi siguin fan servir l'enllaç d'"es".

export const AMAZON_STORE =
  "https://www.amazon.es/stores/Gala-Stone/author/B0H6TD32HX?ref=sr_ntt_srch_lnk_13&shoppingPortalEnabled=true";

export const localizedUrl = (url, lang) =>
  !url || typeof url === "string" ? url : url[lang] ?? url.es;
