import { Fragment } from "react";
import "./Filosofia.css";
import { useLanguage } from "../../context/LanguageContext";

const base = import.meta.env.BASE_URL;
const img = (name) => `${base}img/filosofia/${name}`;

// SilverKids només als claims; s'injecta aquí perquè la ruta respecti BASE_URL ("/Gala_Kids/").
// Fitxer: public/fonts/Silverkids.otf (respectar majúscules: GitHub Pages hi distingeix)
const FONT_FACE = `@font-face {
  font-family: "SilverKids";
  src: url("${base}fonts/Silverkids.otf") format("opentype");
  font-display: swap;
}`;

// Paleta del claim de la home (TITULO.png): --filo-claim-1..7 a Filosofia.css
const CLAIM_COLORS = 7;
const PUNCT = /[.,;:!?¿¡]/;
const claimColor = (n) => `var(--filo-claim-${(n % CLAIM_COLORS) + 1})`;

// Un color per lletra (o per paraula amb byWord), cíclic; puntuació en navy.
// Els spans són aria-hidden: el contenidor porta el text sencer (aria-label o .filo-sr).
function Claim({ text, offset = 0, byWord = false }) {
  let n = offset;
  return text.split(" ").map((word, w) => {
    const wordColor = byWord ? claimColor(n++) : null;
    return (
      <Fragment key={w}>
        {w > 0 && " "}
        <span className="filo-claim-word" aria-hidden="true">
          {[...word].map((c, i) => {
            const color = PUNCT.test(c) ? "var(--filo-claim-7)" : wordColor || claimColor(n++);
            return <span key={i} aria-hidden="true" style={{ color }}>{c}</span>;
          })}
        </span>
      </Fragment>
    );
  });
}

// Dades no traduïbles dels valors; els textos són a translations.js (t.filosofia)
const VALUE_MEDIA = [
  { image: "vaca.png", color: "olive" },
  { image: "monster-truck.png", color: "orange" },
  { image: "dinosaurio.png", color: "navy" },
  { image: "cerdito.png", color: "red" },
];

// Offsets de color del claim: lletres (o paraules) que ja s'han pintat abans
const letterCount = (s) => [...s].filter((c) => c !== " " && !PUNCT.test(c)).length;
const wordCount = (lines) => lines.join(" ").split(" ").filter(Boolean).length;

export default function Filosofia() {
  const { t } = useLanguage();
  const T = t.filosofia;
  const VALUES = T.values.map((v, i) => ({ ...v, ...VALUE_MEDIA[i] }));
  const IDEAS = T.ideas;
  const MANIFESTO = T.manifesto;
  return (
    <div className="filosofia" id="filosofia">
      <style>{FONT_FACE}</style>
      <section
        className="filo-hero"
        style={{ backgroundImage: `url(${img("principal.jpg")})` }}
      >
        <div className="filo-hero-content">
          <p className="filo-eyebrow">{T.eyebrow}</p>
          <h1 className="filo-title filo-claim" aria-label={`${T.title1} ${T.title2}`}>
            <Claim text={T.title1} />
            <br />
            <Claim text={T.title2} offset={letterCount(T.title1)} />
          </h1>
          <hr className="filo-rule" />
          <p>{T.lead1}</p>
          <p>{T.lead2}</p>
          <p className="filo-handwritten">
            {T.hand1}
            <br />
            {T.hand2}
          </p>
        </div>
      </section>

      <section className="filo-values">
        <h2 className="filo-section-title filo-claim" aria-label={T.valuesTitle}>
          <Claim text={T.valuesTitle} />
        </h2>
        <div className="filo-values-grid">
          {VALUES.map((v) => (
            <article key={v.title} className="filo-value">
              <img src={img(v.image)} alt="" className="filo-value-img" loading="lazy" />
              <h3 className={`filo-value-title filo-${v.color}`}>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="filo-manifesto">
        <blockquote className="filo-quote filo-claim">
          <span className="filo-sr">{MANIFESTO.join(" ")}</span>
          {MANIFESTO.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              <Claim text={line} offset={wordCount(MANIFESTO.slice(0, i))} byWord />
            </Fragment>
          ))}
        </blockquote>
        <ul className="filo-ideas">
          {IDEAS.map((idea) => (
            <li key={idea}>
              <span className="filo-star" aria-hidden="true">☆</span>
              {idea}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
