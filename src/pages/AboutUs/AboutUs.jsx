import { Fragment } from "react";
import "./AboutUs.css";
import { useLanguage } from "../../context/LanguageContext";

const base = import.meta.env.BASE_URL;
const img = (file) => `${base}img/about_us/${file}`;

// SilverKids als claims: s'injecta aquí perquè la ruta respecti BASE_URL ("/Gala_Kids/").
// Fitxer: public/fonts/Silverkids.otf (respectar majúscules: GitHub Pages hi distingeix)
const FONT_FACE = `@font-face {
  font-family: "SilverKids";
  src: url("${base}fonts/Silverkids.otf") format("opentype");
  font-display: swap;
}`;

const AMAZON_URL =
  "https://www.amazon.es/stores/Gala-Stone/author/B0H6TD32HX?ref=sr_ntt_srch_lnk_13&shoppingPortalEnabled=true";

// Dades no traduïbles; els textos són a translations.js (t.aboutUs)
const GUIA_IMG = ["guia-01.webp", "guia-02.webp", "guia-03.webp", "guia-04.webp"];
const MISION_ICON = ["bulb", "book", "heart"];
const VALORES_ICON = ["palette", "hand", "heart", "star"];

// TEMPORAL: textos nous (transcrits de l'esbós) pendents que el traductor els passi a t.aboutUs
const NEW_TEXT = {
  missionTitle: "Nuestra misión",
  mission:
    "Fomentar la imaginación, el aprendizaje y los valores a través de libros diseñados para los más pequeños, con ilustraciones entrañables y actividades que despiertan su curiosidad natural.",
  missionAlt: "Vaca, pollito y cerdito de Gala Kids",
  missionItems: [
    { title: "Imaginación sin límites", text: "Historias y actividades que abren la puerta a mundos llenos de posibilidades." },
    { title: "Aprendizaje significativo", text: "Contenidos pensados para estimular habilidades clave de forma divertida." },
    { title: "Momentos que conectan", text: "Libros que invitan a compartir, conversar y crear recuerdos en familia." },
  ],
  valuesTitle: "Nuestros valores",
  values: [
    { title: "Creatividad", text: "Diseñamos experiencias que estimulan la expresión, la imaginación y el juego libre." },
    { title: "Calidad", text: "Cuidamos cada detalle: ilustraciones, contenidos y materiales pensados para durar y acompañar." },
    { title: "Familia", text: "Creemos en el poder del tiempo compartido y en los lazos que se fortalecen leyendo juntos." },
    { title: "Confianza", text: "Acompañamos a los padres con contenidos seguros, adaptados y pensados para cada etapa." },
  ],
};

const ICONS = {
  bulb: (
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
  ),
  pencil: (
    <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1zM14.5 6.5l3 3" />
  ),
  heart: (
    <path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z" />
  ),
  star: (
    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
  ),
  book: (
    <path d="M3 5.5C5.5 4.5 9 4.5 12 6.5c3-2 6.5-2 9-1V19c-2.5-1-6-1-9 1-3-2-6.5-2-9-1zM12 6.5V20" />
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.4 0 2-1 1.6-2.1-.5-1.3.4-2.4 1.7-2.4H18a3 3 0 0 0 3-3c0-5.5-4-10.5-9-10.5z" />
      <circle cx="7.5" cy="11" r="1.2" />
      <circle cx="10" cy="7" r="1.2" />
      <circle cx="15" cy="7.5" r="1.2" />
    </>
  ),
  hand: (
    <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11m0-6.5V4a1.5 1.5 0 0 1 3 0v7m0-5.5a1.5 1.5 0 0 1 3 0V12m0-3.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.5a6 6 0 0 1-4.6-2.2L4.6 15.6a1.6 1.6 0 0 1 2.4-2.1L8 14.5" />
  ),
};

// Paleta del claim de la home (TITULO.png): --about-claim-1..7 a AboutUs.css
const CLAIM_COLORS = 7;

// Pinta cada lletra (o cada paraula, amb byWord) amb un color cíclic de la paleta, com a la home.
// Els spans són aria-hidden: l'element contenidor porta el text sencer (aria-label).
const PUNCT = /[.,;:!?¿¡]/;
const claimColor = (n) => `var(--about-claim-${(n % CLAIM_COLORS) + 1})`;

function Claim({ text, byWord = false }) {
  let n = 0;
  return text.split(" ").map((word, w) => {
    const wordColor = byWord ? claimColor(n++) : null;
    return (
      <Fragment key={w}>
        {w > 0 && " "}
        <span className="about-claim-word" aria-hidden="true">
          {[...word].map((c, i) => {
            const color = PUNCT.test(c) ? "var(--about-claim-7)" : wordColor || claimColor(n++);
            return <span key={i} aria-hidden="true" style={{ color }}>{c}</span>;
          })}
        </span>
      </Fragment>
    );
  });
}

function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function AboutUs({ ctaHref = AMAZON_URL }) {
  const { t } = useLanguage();
  const T = t.aboutUs;
  const GUIA = T.guide.map((text, i) => ({ img: GUIA_IMG[i], text }));
  return (
    <div className="about">
      <style>{FONT_FACE}</style>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero__text">
          <p className="about-eyebrow">{T.eyebrow}</p>
          <h1 className="about-hero__title" aria-label={T.heroTitle}>
            <Claim text={T.heroTitle} />
          </h1>
          <p className="about-hero__lead">{T.heroLead}</p>
          <Icon name="heart" className="about-hero__heart" />
        </div>
        <div className="about-hero__media">
          <img src={img("hero.webp")} alt={T.heroAlt} />
        </div>
      </section>

      {/* NUESTRA MISIÓN */}
      <section className="about-section about-mission">
        <img
          className="about-mission__animals"
          src={img("vaca.webp")}
          alt={NEW_TEXT.missionAlt}
          loading="lazy"
        />
        <img className="about-mission__pig" src={img("cerdito.webp")} alt="" loading="lazy" />
        <div className="about-mission__text">
          <h2 className="about-h2 about-h2--rays" aria-label={NEW_TEXT.missionTitle}>
            <Claim text={NEW_TEXT.missionTitle} />
          </h2>
          <p>{NEW_TEXT.mission}</p>
        </div>
        <ul className="about-mission__card">
          {NEW_TEXT.missionItems.map((m, i) => (
            <li key={m.title}>
              <Icon name={MISION_ICON[i]} className={`about-mission__icon about-mission__icon--${i + 1}`} />
              <div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* NUESTROS VALORES */}
      <section className="about-section">
        <h2 className="about-h2 about-h2--center about-h2--rays" aria-label={NEW_TEXT.valuesTitle}>
          <Claim text={NEW_TEXT.valuesTitle} />
        </h2>
        <ul className="about-values">
          {NEW_TEXT.values.map((v, i) => (
            <li className="about-values__item" key={v.title}>
              <Icon name={VALORES_ICON[i]} className={`about-values__icon about-values__icon--${i + 1}`} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ¿QUIÉNES SOMOS? */}
      <section className="about-section">
        <div className="about-who">
          <div className="about-who__text">
            <h2 className="about-h2" aria-label={T.whoTitle}><Claim text={T.whoTitle} /></h2>
            {T.who.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <span className="about-who__line" />
          </div>
          <div className="about-who__media">
            <img src={img("quienes-somos.webp")} alt={T.whoAlt} loading="lazy" />
          </div>
        </div>
      </section>

      {/* LO QUE NOS GUÍA CADA DÍA */}
      <section className="about-section">
        <h2 className="about-h2 about-h2--center" aria-label={T.guideTitle}>
          <Claim text={T.guideTitle} />
        </h2>
        <div className="about-guide">
          {GUIA.map((g) => (
            <article className="about-guide__card" key={g.img}>
              <img src={img(g.img)} alt="" loading="lazy" />
              <p>{g.text}</p>
            </article>
          ))}
        </div>
        <p className="about-guide__extra">{T.guideExtra}</p>
      </section>

      {/* CIERRE */}
      <section className="about-section">
        <div className="about-close">
          <Icon name="star" className="about-close__deco about-close__deco--star" />
          <Icon name="heart" className="about-close__deco about-close__deco--heart" />
          <img className="about-close__dino" src={img("dinosaurio.webp")} alt="" loading="lazy" />
          <img className="about-close__cow" src={img("vaca.webp")} alt="" loading="lazy" />
          <h2 className="about-close__title" aria-label={T.closeTitle}>
            <Claim text={T.closeTitle} byWord />
          </h2>
          <p>{T.closeText}</p>
          <a className="about-close__btn" href={ctaHref} target="_blank" rel="noopener noreferrer">
            {T.cta} →
          </a>
        </div>
      </section>
    </div>
  );
}
