import { useState } from "react";
import { IMG } from "../../assets/images";
import "./Contacto.css";

const base = import.meta.env.BASE_URL;
const pic = (file) => `${base}img/contacto/${file}`;

const AMAZON_URL =
  "https://www.amazon.es/stores/Gala-Stone/author/B0H6TD32HX?ref=sr_ntt_srch_lnk_13&shoppingPortalEnabled=true";
const PINTEREST_URL = "https://es.pinterest.com/galakids/";
const INSTAGRAM_URL = "#"; // pendent
const CONTACT_EMAIL = ""; // pendent: si s'informa, el formulari obre el client de correu (mailto)

// TODO traductor: textos a translations.js (de moment només castellà)
const T = {
  label: "CONTACTO",
  title: "HABLEMOS",
  subtitle: "Las mejores ideas siempre empiezan con una conversación.",
  text1:
    "Si tienes una pregunta, una propuesta o simplemente quieres saludarnos, estaremos encantados de leerte.",
  text2:
    "En Gala Kids creemos que cada familia tiene una historia diferente y nos encanta formar parte de ella.",
  cta: "Escríbenos",
  formTitleA: "Cuéntanos",
  formTitleB: "cómo podemos ayudarte",
  name: "Nombre",
  email: "Correo electrónico",
  subject: "Asunto",
  message: "Mensaje",
  send: "Enviar mensaje",
  sent: "¡Gracias! Hemos recibido tu mensaje.",
  sideTitle: "Te leemos siempre",
  side1: "Respondemos a todos los mensajes lo antes posible.",
  side2: "Tu mensaje es importante para nosotros y será leído con mucho cariño.",
  otherTitle: "Otras formas de hablar",
  cards: [
    {
      key: "amazon",
      name: "Amazon",
      text: "¿Has comprado uno de nuestros libros? Tu opinión ayuda muchísimo a otras familias.",
      btn: "Ver colección",
      url: AMAZON_URL,
      img: pic("amazon.webp"),
      logo: IMG.amazon,
    },
    {
      key: "pinterest",
      name: "Pinterest",
      text: "Cada semana compartimos ideas nuevas para jugar, crear y aprender juntos.",
      btn: "Inspirarte",
      url: PINTEREST_URL,
      img: pic("pinterest.webp"),
      logo: IMG.pinterest,
    },
    {
      key: "instagram",
      name: "Instagram",
      text: "Descubre el día a día de Gala Kids, novedades y mucho más.",
      btn: "Seguir",
      url: INSTAGRAM_URL,
      img: pic("instagram.webp"),
      logo: IMG.instagram,
    },
  ],
  faqTitle: "Preguntas frecuentes",
  faqs: [
    { icon: "bag", q: "¿Dónde puedo comprar los libros?", a: "Actualmente toda la colección está disponible en Amazon." },
    { icon: "globe", q: "¿En qué idiomas están disponibles?", a: "Español, inglés y francés, con nuevos idiomas en desarrollo." },
    { icon: "smile", q: "¿Qué edades recomendáis?", a: "Principalmente entre los 3 y los 5 años, aunque muchos niños disfrutan los libros durante más tiempo." },
    { icon: "mail", q: "¿Puedo escribir una propuesta?", a: "Por supuesto. Nos encanta descubrir nuevas ideas." },
  ],
  closing: "Cada mensaje que recibimos nos recuerda que detrás de cada libro hay una familia como la tuya.",
};

const TITLE_COLORS = ["#e63946", "#f97316", "#fbbf24", "#16a34a", "#2563eb", "#7c3aed", "#ec4899", "#e05a44"];

const ICONS = {
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  pencil: <><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="m13 7 4 4" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /></>,
  bag: <><path d="M5 8h14l-1 13H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14c2 2.5 6 2.5 8 0" /><circle cx="9" cy="10" r=".6" /><circle cx="15" cy="10" r=".6" /></>,
  send: <><path d="M21 3 3 10l7 3 3 7z" /><path d="m10 13 11-10" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
};

function Icon({ name, className = "" }) {
  return (
    <svg className={`ct-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const FIELDS = [
  { name: "name", type: "text", icon: "user", autoComplete: "name" },
  { name: "email", type: "email", icon: "mail", autoComplete: "email" },
  { name: "subject", type: "text", icon: "pencil" },
];

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(() => T.faqs.map(() => true));

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (CONTACT_EMAIL) {
      const body = `${form.message}\n\n${form.name} <${form.email}>`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const toggle = (i) => setOpen(open.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="contacto">
      {/* HERO */}
      <section className="ct-hero">
        <img className="ct-hero__img" src={pic("hero.webp")} alt="" />
        <div className="ct-hero__content">
          <span className="ct-deco ct-deco--star">★</span>
          <p className="ct-hero__label">{T.label}</p>
          <h1 className="ct-hero__title">
            {[...T.title].map((c, i) => (
              <span key={i} style={{ color: TITLE_COLORS[i % TITLE_COLORS.length] }}>{c}</span>
            ))}
            <span className="ct-hero__dot">.</span>
          </h1>
          <p className="ct-hero__subtitle">{T.subtitle}</p>
          <p className="ct-hero__text">{T.text1}</p>
          <p className="ct-hero__text">{T.text2}</p>
          <a href="#ct-form" className="ct-btn ct-btn--solid">
            {T.cta} <Icon name="arrow" />
          </a>
        </div>
      </section>

      {/* FORMULARI */}
      <section className="ct-form-wrap" id="ct-form">
        <form className="ct-form" onSubmit={onSubmit}>
          <h2 className="ct-form__title">
            <span className="ct-rainbow">
              {[...T.formTitleA].map((c, i) => (
                <span key={i} style={{ color: TITLE_COLORS[i % TITLE_COLORS.length] }}>{c}</span>
              ))}
            </span>
            <br />
            {T.formTitleB} <span className="ct-heart">♡</span>
          </h2>

          {FIELDS.map((f) => (
            <label key={f.name} className="ct-field">
              <Icon name={f.icon} />
              <input type={f.type} name={f.name} placeholder={T[f.name]} aria-label={T[f.name]}
                autoComplete={f.autoComplete} value={form[f.name]} onChange={onChange} required />
            </label>
          ))}
          <label className="ct-field ct-field--area">
            <Icon name="chat" />
            <textarea name="message" rows="4" placeholder={T.message} aria-label={T.message}
              value={form.message} onChange={onChange} required />
          </label>

          <button type="submit" className="ct-btn ct-btn--solid ct-btn--wide">
            {T.send} <Icon name="send" />
          </button>
          {sent && <p className="ct-form__ok" role="status">{T.sent}</p>}
        </form>

        <aside className="ct-side">
          <h3 className="ct-serif ct-underline">{T.sideTitle}</h3>
          <p>{T.side1}</p>
          <p>{T.side2}</p>
        </aside>
      </section>

      {/* ALTRES FORMES */}
      <section className="ct-other">
        <h2 className="ct-serif ct-section-title">{T.otherTitle}</h2>
        <div className="ct-cards">
          {T.cards.map((c) => (
            <article key={c.key} className="ct-card">
              <div className="ct-card__media">
                <img src={c.img} alt="" loading="lazy" />
                <span className="ct-card__logo"><img src={c.logo} alt="" /></span>
              </div>
              <div className="ct-card__body">
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="ct-btn ct-btn--outline">
                  {c.btn} <Icon name="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="ct-faq">
        <h2 className="ct-serif ct-section-title ct-underline">{T.faqTitle}</h2>
        <div className="ct-faq__grid">
          {T.faqs.map((f, i) => (
            <div key={i} className={`ct-faq__item ${open[i] ? "is-open" : ""}`}>
              <span className={`ct-faq__icon ct-faq__icon--${f.icon}`}><Icon name={f.icon} /></span>
              <div className="ct-faq__text">
                <button type="button" className="ct-faq__q" onClick={() => toggle(i)} aria-expanded={open[i]}>
                  {f.q}
                </button>
                {open[i] && <p>{f.a}</p>}
              </div>
              <button type="button" className="ct-faq__chev" onClick={() => toggle(i)} aria-label={f.q}>
                <Icon name="chevron" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TANCAMENT */}
      <section className="ct-closing">
        <span className="ct-deco ct-deco--heart">♡</span>
        <p className="ct-serif ct-underline">{T.closing}</p>
      </section>

      <img className="ct-bottom" src={pic("inferior.webp")} alt="" loading="lazy" />
    </div>
  );
}
