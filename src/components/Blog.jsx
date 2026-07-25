import { useLanguage } from "../context/LanguageContext";
import "./Blog.css";

export default function Blog() {
  const { t } = useLanguage();
  const b = t.blog;

  return (
    <section className="blog">
      <div className="blog-inner container">
        <h2 className="blog-title">
          {b.titlePrefix}{" "}
          <span className="blog-title-cursive">{b.titleCursive}</span>{" "}
          {b.titleSuffix}
        </h2>

        <div className="blog-grid">
          {b.posts.map((post, i) => (
            <article key={i} className="blog-card">
              <div className="blog-card-img-wrapper">
                <img src={post.img} alt={post.title} className="blog-card-img" />
              </div>
              <div className="blog-card-body">
                <span className="blog-card-category" style={{ color: post.categoryColor }}>
                  {post.category}
                </span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-desc">{post.desc}</p>
                <a href="#" className="blog-card-link">{b.readMore}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
