import "./Inspiracion.css";

const img = (name) => `${import.meta.env.BASE_URL}img/inspiracion/${name}`;

// Textos en castellà (pendent de moure a translations.js pel traductor)
const TEXT = {
  hero: {
    eyebrow: "Inspiración",
    // Cada línia del títol es pinta amb paraules de colors alterns
    title: ["Las mejores tardes", "nunca empiezan", "con una pantalla."],
    lines: [
      "No necesitas grandes planes.",
      "Solo tiempo.",
      "Un lápiz.",
      "Un papel.",
      "Y alguien con quien imaginar.",
    ],
    cta: "Descubrir ideas",
    imageAlt: "Niña construyendo un castillo de cartón en casa",
  },
  ideas: {
    title: "Ideas para esta tarde",
    prep: "5 min de preparación",
    items: [
      { icon: "castle", image: "idea-castillo.webp", title: "Construye un castillo", text: "Convierte una caja de cartón en un castillo lleno de historias." },
      { icon: "book", image: "idea-cuento.webp", title: "Inventa un cuento", text: "Empieza con un dibujo y deja que la imaginación haga el resto." },
      { icon: "binoculars", image: "idea-safari.webp", title: "Haz un safari en casa", text: "Explora cada rincón como si fuera una expedición." },
      { icon: "leaf", image: "idea-herbario.webp", title: "Crea un herbario", text: "Colecciona pequeños tesoros de la naturaleza." },
      { icon: "map", image: "idea-mapa.webp", title: "Diseña un mapa del tesoro", text: "Esconde pistas y vive una aventura." },
      { icon: "cup", image: "idea-cafe.webp", title: "Abre un café de cartón", text: "Una tarde puede convertirse en un pequeño negocio imaginario." },
    ],
  },
  featured: {
    title: ["¿Y si este dinosaurio", "viviera en tu jardín?"],
    text: "Las mejores historias empiezan con una pregunta.",
  },
  families: {
    title: "Inspiración para familias",
    items: [
      { image: "familia-sabado.webp", title: "Un sábado sin prisas", text: "Los mejores recuerdos nacen cuando nadie tiene prisa." },
      { image: "familia-caja.webp", title: "Una caja puede ser un castillo", text: "La imaginación transforma lo cotidiano en extraordinario." },
      { image: "familia-recuerdos.webp", title: "Los mejores recuerdos no llevan batería", text: "Los momentos compartidos siempre duran más." },
    ],
  },
  quotes: {
    title: "Frases que creemos",
    items: [
      { icon: "heart", text: "No hace falta entretener. Hace falta compartir." },
      { icon: "pencil", text: "Cada dibujo es una conversación." },
      { icon: "people", text: "Los niños no recuerdan el juguete. Recuerdan quién estaba allí." },
      { icon: "star", text: "La imaginación necesita tiempo." },
    ],
  },
  download: {
    title: ["Descarga una idea", "para esta tarde"],
    text: "Actividades sencillas para llenar cualquier tarde de imaginación.",
    cta: "Descargar actividad",
    href: "#", // pendent: URL del PDF descarregable
    imageAlt: "Niña coloreando un unicornio junto a un libro Gala Kids",
  },
};

// Imatge del bloc destacat (dinosaure): encara no disponible -> null
const FEATURED_IMAGE = null;

const COLORS = ["red", "blue", "yellow", "green", "purple", "orange", "navy"];

const ICONS = {
  castle: <path d="M4 21V9l2-2 2 2v3h2V6l2-3 2 3v6h2V9l2-2 2 2v12H4zm6 0v-4a2 2 0 0 1 4 0v4" />,
  book: <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1V5zm9 1v14" />,
  binoculars: <path d="M6 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm12 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM10 12h4M6 8l2-4h2l1 4m7 0-2-4h-2l-1 4" />,
  leaf: <path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15zm0 0 9-9" />,
  map: <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6zm6-2v14m6-12v14" />,
  cup: <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9zm12 1h2a2 2 0 0 1 0 4h-2M8 3c0 2 2 2 2 4M12 3c0 2 2 2 2 4" />,
  heart: <path d="M12 20s-8-5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z" />,
  pencil: <path d="M4 20l1-5L16 4l4 4L9 19l-5 1zM14 6l4 4" />,
  people: <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-4 3-6 6-6s6 2 6 6m-2-5c1-1 2-1 4-1 3 0 6 2 6 6" />,
  star: <path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.7l6.2-.9L12 3z" />,
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

function Star({ className = "" }) {
  return (
    <svg className={`insp-star ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3 6.3 6.9 1-5 4.8 1.2 6.9L12 17.8 5.9 21l1.2-6.9-5-4.8 6.9-1L12 2z" />
    </svg>
  );
}

function Cloud({ className = "" }) {
  return (
    <svg className={`insp-cloud ${className}`} viewBox="0 0 64 32" aria-hidden="true">
      <path d="M14 28a8 8 0 0 1-1-16 11 11 0 0 1 21-4 9 9 0 0 1 15 5 8 8 0 0 1 1 15H14z" />
    </svg>
  );
}

// Pinta cada paraula d'un color alternant, per imitar el títol multicolor de l'esbós
function ColorTitle({ lines, as: Tag = "h1", className = "" }) {
  let i = 0;
  return (
    <Tag className={`insp-color-title ${className}`}>
      {lines.map((line, li) => (
        <span className="insp-color-title__line" key={li}>
          {line.split(" ").map((word, wi) => (
            <span key={wi} className={`insp-c-${COLORS[i++ % COLORS.length]}`}>
              {word}{" "}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

function SectionTitle({ children, center = false }) {
  return (
    <h2 className={`insp-section-title${center ? " insp-section-title--center" : ""}`}>
      <Star />
      {children}
    </h2>
  );
}

export default function Inspiracion() {
  const { hero, ideas, featured, families, quotes, download } = TEXT;

  return (
    <main className="insp">
      {/* 1. HERO */}
      <section className="insp-hero">
        <div className="insp-hero__content">
          <Star className="insp-hero__star1" />
          <Cloud className="insp-hero__cloud" />
          <p className="insp-eyebrow">{hero.eyebrow}</p>
          <ColorTitle lines={hero.title} />
          <p className="insp-hero__lines">
            {hero.lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
          <a href="#inspiracion" className="insp-btn insp-btn--red" onClick={(e) => { e.preventDefault(); document.getElementById("insp-ideas")?.scrollIntoView({ behavior: "smooth" }); }}>
            {hero.cta} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="insp-hero__media">
          <img src={img("hero.webp")} alt={hero.imageAlt} fetchpriority="high" />
        </div>
        <Star className="insp-hero__star2" />
      </section>

      {/* 2. IDEAS PARA ESTA TARDE */}
      <section className="insp-ideas insp-container" id="insp-ideas">
        <SectionTitle>{ideas.title}</SectionTitle>
        <div className="insp-ideas__grid">
          {ideas.items.map((it, idx) => (
            <article className="insp-card" key={it.title}>
              <div className="insp-card__media">
                <img src={img(it.image)} alt={it.title} loading="lazy" />
                <span className={`insp-card__icon insp-bg-${COLORS[idx % COLORS.length]}`}>
                  <Icon name={it.icon} />
                </span>
              </div>
              <div className="insp-card__body">
                <h3>{it.title}</h3>
                <p className="insp-card__text">{it.text}</p>
                <p className="insp-card__prep">{ideas.prep}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. BLOQUE DESTACADO */}
      <section className="insp-container">
        <div className={`insp-featured${FEATURED_IMAGE ? "" : " insp-featured--noimg"}`}>
          <div className="insp-featured__content">
            <Star className="insp-featured__star1" />
            <ColorTitle lines={featured.title} as="h2" className="insp-featured__title" />
            <p>{featured.text}</p>
            <Cloud className="insp-featured__cloud" />
            <Star className="insp-featured__star2" />
          </div>
          {FEATURED_IMAGE && (
            <div className="insp-featured__media">
              <img src={img(FEATURED_IMAGE)} alt="" loading="lazy" />
            </div>
          )}
        </div>
      </section>

      {/* 4. INSPIRACIÓN PARA FAMILIAS */}
      <section className="insp-families insp-container">
        <SectionTitle center>{families.title}</SectionTitle>
        <div className="insp-families__grid">
          {families.items.map((it) => (
            <article className="insp-family" key={it.title}>
              <img src={img(it.image)} alt="" loading="lazy" />
              <div className="insp-family__overlay">
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. FRASES QUE CREEMOS */}
      <section className="insp-quotes insp-container">
        <SectionTitle center>{quotes.title}</SectionTitle>
        <ul className="insp-quotes__list">
          {quotes.items.map((q, idx) => (
            <li key={q.text} className={`insp-quote insp-c-${["red", "green", "purple", "yellow"][idx]}`}>
              <Icon name={q.icon} />
              <p>{q.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. CTA FINAL */}
      <section className="insp-container">
        <div className="insp-download">
          <div className="insp-download__content">
            <ColorTitle lines={download.title} as="h2" className="insp-download__title" />
            <p>{download.text}</p>
            <a href={download.href} className="insp-btn insp-btn--navy">
              {download.cta} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="insp-download__media">
            <img src={img("cta-descarga.webp")} alt={download.imageAlt} loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
