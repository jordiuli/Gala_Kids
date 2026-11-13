// Genera les dades estructurades (JSON-LD) per a Google a partir de BOOKS.
// S'executa al build (vite.config.js), no al navegador.
import { BOOKS } from "./books.js";
import { translations } from "../i18n/translations.js";
import { AMAZON_STORE } from "../config/links.js";

const SITE = "https://www.galakidsbooks.com";
const DEFAULT_GENRE = "Libro para colorear";

// Enllaç net de la botiga d'autora (sense paràmetres de seguiment)
const storeUrl = (url) => {
  const u = new URL(typeof url === "string" ? url : url.es);
  return `${u.origin}${u.pathname}`;
};

export function buildJsonLd() {
  const store = storeUrl(AMAZON_STORE);
  const items = translations.es.collection.items;

  const books = BOOKS.map((book, i) => {
    const title = items[book.id]?.title;
    if (!title) throw new Error(`jsonld: falta collection.items.${book.id} a translations.js (es)`);
    const editions = typeof book.url === "string" ? { es: book.url } : book.url;
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Book",
        name: title,
        author: { "@id": `${SITE}/#gala-stone` },
        genre: book.genre ?? DEFAULT_GENRE,
        typicalAgeRange: book.age,
        image: `${SITE}/img/coleccion/${book.file}`,
        workExample: Object.entries(editions).map(([lang, url]) => ({
          "@type": "Book",
          inLanguage: lang,
          url,
        })),
      },
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Gala Kids Books",
        url: `${SITE}/`,
        logo: `${SITE}/img/LOGO%20HORIZONTAL.png`,
        sameAs: ["https://es.pinterest.com/galakids/", "https://instagram.com/galakidsbooks/", store],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        name: "Gala Kids Books",
        url: `${SITE}/`,
        publisher: { "@id": `${SITE}/#organization` },
      },
      { "@type": "Person", "@id": `${SITE}/#gala-stone`, name: "Gala Stone", url: store },
      { "@type": "ItemList", name: "Colección Gala Kids Books", itemListElement: books },
    ],
  };
}
