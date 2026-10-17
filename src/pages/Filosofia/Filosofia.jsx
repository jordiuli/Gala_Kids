import "./Filosofia.css";

const img = (name) => `${import.meta.env.BASE_URL}img/filosofia/${name}`;

// Textos en castellà (pendent de moure a translations.js pel traductor)
const VALUES = [
  {
    image: "vaca.png",
    color: "olive",
    title: "Crear sin miedo",
    text: "No existe una forma correcta de colorear. Cada elección, cada trazo y cada color forman parte del aprendizaje.",
  },
  {
    image: "monster-truck.png",
    color: "orange",
    title: "Aprender jugando",
    text: "Mientras colorean, los niños practican la coordinación, la atención, la toma de decisiones y la confianza en sí mismos.",
  },
  {
    image: "dinosaurio.png",
    color: "navy",
    title: "Imaginar más allá de la página",
    text: "Un dibujo puede convertirse en una historia, un juego, una conversación o un recuerdo compartido.",
  },
  {
    image: "cerdito.png",
    color: "red",
    title: "Compartir tiempo de calidad",
    text: "Gala Kids no pretende sustituir la presencia del adulto. Pretende crear momentos para estar juntos de otra manera.",
  },
];

const IDEAS = [
  "Porque una tarde tranquila también puede ser una aventura.",
  "Porque un dibujo puede iniciar una conversación.",
  "Porque una página coloreada puede acabar colgada en una pared durante años.",
  "Y porque, a veces, los recuerdos más importantes empiezan con algo tan sencillo como una caja de lápices y un poco de tiempo.",
];

export default function Filosofia() {
  return (
    <div className="filosofia" id="filosofia">
      <section
        className="filo-hero"
        style={{ backgroundImage: `url(${img("principal.jpg")})` }}
      >
        <div className="filo-hero-content">
          <p className="filo-eyebrow">Nuestra filosofía</p>
          <h1 className="filo-title">
            <span className="filo-navy">Menos pantallas.</span>
            <span className="filo-olive">Más</span>{" "}
            <span className="filo-orange">imaginación.</span>
          </h1>
          <hr className="filo-rule" />
          <p>
            Creemos en una infancia con más lápices sobre la mesa, más historias
            inventadas y más tiempo para crear sin prisas.
          </p>
          <p>
            Gala Kids nace para acompañar esos pequeños momentos en los que un
            niño se concentra, imagina, pregunta, colorea y convierte una página
            en algo completamente suyo.
          </p>
          <p className="filo-handwritten">
            No queremos llenar el tiempo.
            <br />
            Queremos ayudar a que cada niño lo transforme.
          </p>
        </div>
      </section>

      <section className="filo-values">
        <h2 className="filo-section-title">Lo que defendemos</h2>
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
        <blockquote className="filo-quote">
          No hacemos libros para mantener a los niños ocupados.
          <br />
          Los hacemos para que puedan crear, descubrir y sentirse orgullosos de
          lo que son capaces de hacer.
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
