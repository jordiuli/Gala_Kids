import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import "./Collection.css";

export default function Collection() {
  const { t } = useLanguage();
  const c = t.collection;

  return (
    <section className="collection" id="coleccion">
      <div className="collection-header container">
        <img src={IMG.miColeccion} alt="Mi colección" className="collection-title-img" />
        <a href="https://www.amazon.es/stores/Gala-Stone/author/B0H6TD32HX?ref=sr_ntt_srch_lnk_13&shoppingPortalEnabled=true" className="collection-link" target="_blank" rel="noopener noreferrer">{c.viewAll}</a>
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
