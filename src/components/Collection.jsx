import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import { AMAZON_STORE, localizedUrl } from "../config/links";
import { BOOKS } from "../data/books";
import "./Collection.css";

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
