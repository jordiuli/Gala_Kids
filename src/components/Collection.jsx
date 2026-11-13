import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import { AMAZON_STORE, localizedUrl } from "../config/links";
import "./Collection.css";

// Títol i descripció de cada llibre: translations.js → collection.items[id].
// url: un text (mateix enllaç per a tots els idiomes) o un objecte per idioma.
// Format i exemple: vegeu src/config/links.js.
const BOOKS = [
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
    id: "halloweenActivity", file: "halloween-activity-book.webp", age: "4-5", url: {
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

const bookSrc = (file) => `${import.meta.env.BASE_URL}img/coleccion/${file}`;

export default function Collection() {
  const { t, lang } = useLanguage();
  const c = t.collection;
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".collection-card");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="collection" id="coleccion">
      <div className="collection-header container">
        <img src={IMG.miColeccion} alt="Mi colección" className="collection-title-img" />
        <a href={localizedUrl(AMAZON_STORE, lang)} className="collection-link" target="_blank" rel="noopener noreferrer">{c.viewAll}</a>
      </div>

      <div className="collection-carousel container">
        <button className="collection-arrow collection-arrow--prev" aria-label={c.prev} onClick={() => scrollBy(-1)}>
          ‹
        </button>
        <ul className="collection-track" ref={trackRef}>
          {BOOKS.map(({ id, file, age, url: urls }) => {
            const url = localizedUrl(urls, lang);
            const { title, desc } = c.items[id];
            const content = (
              <>
                <img src={bookSrc(file)} alt={title} loading="lazy" />
                <div className="collection-card-text">
                  <h3 className="collection-card-title">{title}</h3>
                  <p className="collection-card-meta">
                    <span className="collection-card-age">{c.ageFormat.replace("{age}", age.replace("-", "–"))}</span>
                    {desc}
                  </p>
                </div>
              </>
            );
            return (
              <li key={id} className="collection-card">
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="collection-card-link">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
        <button className="collection-arrow collection-arrow--next" aria-label={c.next} onClick={() => scrollBy(1)}>
          ›
        </button>
      </div>
    </section>
  );
}
