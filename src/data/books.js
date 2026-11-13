// Llista de llibres: font única per al carrusel (Collection.jsx) i per a les
// dades estructurades de Google (JSON-LD), que vite.config.js genera al build.
// - id: clau de translations.js → collection.items[id] (títol i descripció per idioma)
// - file: portada a public/img/coleccion/
// - age: edat recomanada
// - genre (opcional): per defecte "Libro para colorear"
// - url: una edició per idioma (es → amazon.es, en → amazon.com, fr → amazon.fr)
//   Una línia comentada = l'edició encara no existeix (el carrusel fa servir la d'"es").
export const BOOKS = [
  {
    id: "granja", file: "granja.webp", age: "3-5", url: {
      es: "https://www.amazon.es/dp/B0H59B2QZ8",
      en: "https://www.amazon.com/dp/B0H3NWHJDZ",
      fr: "https://www.amazon.fr/dp/B0H86J3HNH",
    }
  },
  {
    id: "vehiculos", file: "vehiculos.webp", age: "3-5", url: {
      es: "https://www.amazon.es/dp/B0H59DGRL2",
      en: "https://www.amazon.com/dp/B0H3PNCT4W",
      fr: "https://www.amazon.fr/dp/B0H7SYTN6W",
    }
  },
  {
    id: "dinosaurios", file: "dinosaurios.webp", age: "3-5", url: {
      es: "https://www.amazon.es/dp/B0H58D3KG9",
      en: "https://www.amazon.com/dp/B0H3NTFT6M",
      fr: "https://www.amazon.fr/dp/B0H7S9KQ9K",
    }
  },
  {
    id: "monsterTrucks", file: "monster-trucks.webp", age: "3-5", url: {
      es: "https://www.amazon.es/dp/B0H59DF8K6",
      en: "https://www.amazon.com/dp/B0H3P4QC58",
      fr: "https://www.amazon.fr/dp/B0H874WRRN",
    }
  },
  {
    id: "unicornios", file: "unicornios.webp", age: "3-5", url: {
      es: "https://www.amazon.es/dp/B0H58SWX4F",
      //en: "https://www.amazon.com/dp/", //Falta a amazon
      fr: "https://www.amazon.fr/dp/B0H7RMZ222",
    }
  },
  {
    id: "halloweenActivity", genre: "Libro de actividades", file: "halloween-activity-book.webp", age: "4-5", url: {
      es: "https://www.amazon.es/dp/B0HLDYFB84",
      en: "https://www.amazon.com/dp/B0HL6LCB6D",
      //fr: "https://www.amazon.fr/dp/", //Falta activity book en francès
    }
  },
  {
    id: "halloweenColoring", file: "halloween-coloring-book.webp", age: "4-8", url: {
      es: "https://www.amazon.es/dp/B0HG893MCB",
      en: "https://www.amazon.com/dp/B0HG8RKFJS",
      fr: "https://www.amazon.fr/dp/B0HG823MNL",
    }
  },
];
