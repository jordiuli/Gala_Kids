import { useLanguage } from "../context/LanguageContext";
import { colorizeWord } from "../i18n/translations";
import { IMG } from "../assets/images";
import "./Hero.css";

const ColorLetter = ({ letter, color }) => (
  <span className="color-letter" style={{ color }}>{letter}</span>
);

export default function Hero() {
  const { t } = useLanguage();
  const { less, word, more, imagination, cta, imgAlt } = t.hero;
  const letters = colorizeWord(word);

  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <p className="hero-menos">{less}</p>
          <div className="hero-pantallas" aria-label={word}>
            {letters.map((item, i) => (
              <ColorLetter key={i} letter={item.letter} color={item.color} />
            ))}
            <span className="hero-period" style={{ color: "#e63946" }}>.</span>
          </div>
          <p className="hero-mas">{more}</p>
          <p className="hero-imaginacion">{imagination}</p>
          <p className="hero-subtitle">
            {t.hero.subtitleMain}<br />
            <strong>{t.hero.subtitleBold}</strong>
          </p>
          <a href="#coleccion" className="hero-cta">{cta}</a>
        </div>

        <div className="hero-image-area">
          <div className="hero-deco hero-deco--plane">✈</div>
          <div className="hero-deco hero-deco--cloud1">☁</div>
          <div className="hero-deco hero-deco--cloud2">☁</div>
          <div className="hero-deco hero-deco--star1">★</div>
          <div className="hero-deco hero-deco--star2">★</div>
          <div className="hero-deco hero-deco--star3">✦</div>
          <div className="hero-deco hero-deco--rainbow">🌈</div>
          <div className="hero-deco hero-deco--unicorn">🦄</div>
          <div className="hero-deco hero-deco--dino">🦕</div>
          <div className="hero-deco hero-deco--flower1">🌸</div>
          <div className="hero-photo-wrapper">
            <img
              src={IMG.cabecera}
              alt={imgAlt}
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
