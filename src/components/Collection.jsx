import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
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

      <div className="collection-img-wrapper container">
        <img
          src={IMG.coleccion}
          alt="Nuestra colección de libros para colorear"
          className="collection-img"
        />
      </div>
    </section>
  );
}
