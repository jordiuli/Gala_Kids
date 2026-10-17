import "./AboutUs.css";

const base = import.meta.env.BASE_URL;
const img = (file) => `${base}img/about_us/${file}`;

const AMAZON_URL =
  "https://www.amazon.es/stores/Gala-Stone/author/B0H6TD32HX?ref=sr_ntt_srch_lnk_13&shoppingPortalEnabled=true";

// Textos en castellà (pendents de passar a translations.js)
const GUIA = [
  { img: "guia-01.webp", text: "La imaginación siempre es más importante que la pantalla." },
  { img: "guia-02.webp", text: "No existe una forma correcta de crear." },
  { img: "guia-03.webp", text: "Un dibujo puede convertirse en una conversación." },
  { img: "guia-04.webp", text: "Los mejores recuerdos nacen compartiendo tiempo." },
];

const PROCESO = [
  { icon: "bulb", text: "Pensamos actividades que despierten la curiosidad." },
  { icon: "pencil", text: "Diseñamos ilustraciones grandes, claras y fáciles de colorear." },
  { icon: "heart", text: "Probamos cada libro pensando en niños de 3 a 5 años." },
  { icon: "star", text: "Cuidamos cada detalle para ofrecer una colección coherente y de calidad." },
];

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
};

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
  return (
    <div className="about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero__text">
          <p className="about-eyebrow">Sobre nosotros</p>
          <h1 className="about-hero__title">
            Libros que <span className="about-accent">inspiran</span> infancia real.
          </h1>
          <p className="about-hero__lead">
            En Gala Kids Books creemos que la infancia merece tiempo, creatividad y
            momentos compartidos. Por eso creamos libros que acompañan a los niños a
            imaginar, aprender y crecer jugando. Cada página nace con el propósito de
            despertar la curiosidad, fortalecer la creatividad y crear recuerdos en
            familia.
          </p>
          <Icon name="heart" className="about-hero__heart" />
        </div>
        <div className="about-hero__media">
          <img src={img("hero.webp")} alt="Niño coloreando un libro de Gala Kids" />
        </div>
      </section>

      {/* ¿QUIÉNES SOMOS? */}
      <section className="about-section">
        <div className="about-who">
          <div className="about-who__text">
            <h2 className="about-h2">¿Quiénes somos?</h2>
            <p>
              Somos un pequeño equipo de soñadores, diseñadores, ilustradores y
              familias que comparte una misma idea: la infancia merece experiencias
              sencillas, creativas y de calidad.
            </p>
            <p>
              No hacemos libros para llenar el tiempo. Creamos herramientas para que
              padres e hijos puedan compartir momentos reales, conversar, imaginar y
              descubrir juntos.
            </p>
            <p>
              Cada ilustración se diseña pensando en las pequeñas manos que la
              colorearán y en las historias que nacerán alrededor de ella.
            </p>
            <span className="about-who__line" />
          </div>
          <div className="about-who__media">
            <img src={img("quienes-somos.webp")} alt="Equipo de Gala Kids dibujando juntos" loading="lazy" />
          </div>
        </div>
      </section>

      {/* LO QUE NOS GUÍA CADA DÍA */}
      <section className="about-section">
        <h2 className="about-h2 about-h2--center">
          Lo que nos <span className="about-script">guía</span> cada día
        </h2>
        <div className="about-guide">
          {GUIA.map((g) => (
            <article className="about-guide__card" key={g.img}>
              <img src={img(g.img)} alt="" loading="lazy" />
              <p>{g.text}</p>
            </article>
          ))}
        </div>
        <p className="about-guide__extra">Cada niño aprende a su ritmo.</p>
      </section>

      {/* NUESTRO PROCESO */}
      <section className="about-section">
        <h2 className="about-h2 about-h2--center about-h2--rays">Nuestro proceso</h2>
        <ol className="about-process">
          {PROCESO.map((p, i) => (
            <li className="about-process__step" key={p.icon}>
              <Icon name={p.icon} className={`about-process__icon about-process__icon--${i + 1}`} />
              <span className="about-process__num">{i + 1}</span>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* NUESTRA PROMESA */}
      <section className="about-section">
        <div className="about-promise">
          <h2 className="about-h2">
            Nuestra <span className="about-script about-script--rainbow">promesa</span>
          </h2>
          <p>
            Queremos que cada libro Gala Kids sea una invitación a apagar las pantallas
            durante un rato y abrir la puerta a la imaginación. Si un dibujo consigue
            convertirse en una historia, una conversación o un recuerdo familiar,
            entonces habrá cumplido su propósito.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="about-section">
        <div className="about-close">
          <Icon name="star" className="about-close__deco about-close__deco--star" />
          <Icon name="heart" className="about-close__deco about-close__deco--heart" />
          <h2 className="about-close__title">Menos pantallas. Más imaginación.</h2>
          <p>Libros para imaginar, crear y crecer en familia.</p>
          <a className="about-close__btn" href={ctaHref} target="_blank" rel="noopener noreferrer">
            Descubrir colección →
          </a>
        </div>
      </section>
    </div>
  );
}
