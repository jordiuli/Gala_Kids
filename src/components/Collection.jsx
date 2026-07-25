import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import "./Collection.css";

const BOOK_IMAGES = [
  IMG.bookUnicornios,
  IMG.bookDinosaurios,
  IMG.bookGranja,
  IMG.bookMonster,
  IMG.bookVehiculos,
];

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
          <div key={i} className="book-card">
            <img
              src={BOOK_IMAGES[i]}
              alt={book.title.replace("\n", " ")}
              className="book-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
