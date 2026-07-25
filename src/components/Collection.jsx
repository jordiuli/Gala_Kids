import { useLanguage } from "../context/LanguageContext";
import "./Collection.css";

export default function Collection() {
  const { t } = useLanguage();
  const c = t.collection;

  return (
    <section className="collection" id="coleccion">
      <div className="collection-header container">
        <h2 className="collection-title">
          {c.title}{" "}
          <span className="collection-title-cursive">{c.titleCursive}</span>
          <span className="collection-deco-left"> ✦</span>
          <span className="collection-deco-right">✦ </span>
        </h2>
        <a href="#" className="collection-link">{c.viewAll}</a>
      </div>

      <div className="collection-grid container">
        {c.books.map((book, i) => (
          <div key={i} className="book-card" style={{ backgroundColor: book.bg }}>
            <div className="book-badge">BIG &amp; EASY</div>
            <div className="book-emoji">{book.emoji}</div>
            <h3 className="book-title">
              {book.title.split("\n").map((line, j) => (
                <span key={j}>{line}<br /></span>
              ))}
            </h3>
            <div className="book-label">{c.label}</div>
            <div className="book-age">
              <span>{c.ageLabel}</span><br />
              <span>{c.ageRange}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
