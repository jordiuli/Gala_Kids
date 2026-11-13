import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import { AMAZON_STORE, localizedUrl } from "../config/links";
import "./Collection.css";

// url: un text (mateix enllaç per a tots els idiomes) o un objecte per idioma.
// Format i exemple: vegeu src/config/links.js.
const BOOKS = [
  {
    file: "granja.webp", title: "Animales de granja", url: {
      es: "https://www.amazon.es/dp/B0H59B2QZ8",
      en: "https://www.amazon.com/dp/B0H3NWHJDZ",
      fr: "https://www.amazon.fr/dp/B0H86J3HNH",
    }
  },
  {
    file: "vehiculos.webp", title: "Vehículos de trabajo", url: {
      es: "https://www.amazon.es/dp/B0H59DGRL2",
      en: "https://www.amazon.com/dp/B0H3PNCT4W",
      fr: "https://www.amazon.fr/dp/B0H7SYTN6W",
    }
  },
  {
    file: "dinosaurios.webp", title: "Dinosaurios adorables", url: {
      es: "https://www.amazon.es/dp/B0H58D3KG9",
      en: "https://www.amazon.com/dp/B0H3NTFT6M",
      fr: "https://www.amazon.fr/dp/B0H7S9KQ9K",
    }
  },
  {
    file: "monster-trucks.webp", title: "Monster Trucks", url: {
      es: "https://www.amazon.es/dp/B0H59DF8K6",
      en: "https://www.amazon.com/dp/B0H3P4QC58",
      fr: "https://www.amazon.fr/dp/B0H874WRRN",
    }
  },
  {
    file: "unicornios.webp", title: "Unicornios adorables", url: {
      es: "https://www.amazon.es/dp/B0H58SWX4F",
      en: "https://www.amazon.com/dp/", //Falta a amazon
      fr: "https://www.amazon.fr/dp/B0H7RMZ222",
    }
  },
  {
    file: "halloween-activity-book.webp", title: "Halloween in Action – Activity Book", url: {
      es: "https://www.amazon.es/dp/B0HLDYFB84",
      en: "https://www.amazon.com/dp/B0HL6LCB6D",
      fr: "https://www.amazon.fr/dp/B0HG823MNL",
    }
  },
  {
    file: "halloween-coloring-book.webp", title: "Halloween in Action – Coloring Book", url: {
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
          {BOOKS.map(({ file, title, url: urls }) => {
            const url = localizedUrl(urls, lang);
            return (
              <li key={file} className="collection-card">
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="collection-card-link">
                    <img src={bookSrc(file)} alt={title} loading="lazy" />
                  </a>
                ) : (
                  <img src={bookSrc(file)} alt={title} loading="lazy" />
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
