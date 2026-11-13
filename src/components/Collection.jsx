import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import "./Collection.css";

const BOOKS = [
  { file: "granja.webp", title: "Animales de granja", url: "https://www.amazon.es/dp/B0H59B2QZ8" },
  { file: "vehiculos.webp", title: "Vehículos de trabajo", url: "https://www.amazon.es/dp/B0H59DGRL2" },
  { file: "dinosaurios.webp", title: "Dinosaurios adorables", url: "https://www.amazon.es/dp/B0H58D3KG9" },
  { file: "monster-trucks.webp", title: "Monster Trucks", url: "https://www.amazon.es/dp/B0H59DF8K6" },
  { file: "unicornios.webp", title: "Unicornios adorables", url: "https://www.amazon.es/dp/B0H58SWX4F" },
  { file: "halloween-activity-book.webp", title: "Halloween in Action – Activity Book", url: "https://www.amazon.es/dp/B0HLDYFB84" },
  { file: "halloween-coloring-book.webp", title: "Halloween in Action – Coloring Book", url: "https://www.amazon.es/dp/B0HG893MCB" },
];

const bookSrc = (file) => `${import.meta.env.BASE_URL}img/coleccion/${file}`;

export default function Collection() {
  const { t } = useLanguage();
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
        <a href="https://www.amazon.es/stores/Gala-Stone/author/B0H6TD32HX?ref=sr_ntt_srch_lnk_13&shoppingPortalEnabled=true" className="collection-link" target="_blank" rel="noopener noreferrer">{c.viewAll}</a>
      </div>

      <div className="collection-carousel container">
        <button className="collection-arrow collection-arrow--prev" aria-label={c.prev} onClick={() => scrollBy(-1)}>
          ‹
        </button>
        <ul className="collection-track" ref={trackRef}>
          {BOOKS.map(({ file, title, url }) => (
            <li key={file} className="collection-card">
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="collection-card-link">
                  <img src={bookSrc(file)} alt={title} loading="lazy" />
                </a>
              ) : (
                <img src={bookSrc(file)} alt={title} loading="lazy" />
              )}
            </li>
          ))}
        </ul>
        <button className="collection-arrow collection-arrow--next" aria-label={c.next} onClick={() => scrollBy(1)}>
          ›
        </button>
      </div>
    </section>
  );
}
