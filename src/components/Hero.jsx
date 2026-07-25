import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();
  const { cta, imgAlt } = t.hero;

  return (
    <section className="hero">
      <div className="hero-container">
        <img src={IMG.cabecera} alt={imgAlt} className="hero-bg" />

        <div className="hero-text">
          <img src={IMG.titulo} alt="Menos pantallas. Más imaginación." className="hero-titulo-img" />
          <p className="hero-subtitle">
            {t.hero.subtitleMain}<br />
            <strong>{t.hero.subtitleBold}</strong>
          </p>
          <a href="#coleccion" className="hero-cta">{cta}</a>
        </div>
      </div>
    </section>
  );
}
