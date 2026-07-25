import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Newsletter.css";

export default function Newsletter() {
  const { t } = useLanguage();
  const n = t.newsletter;
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-inner container">
        <div className="newsletter-plane">✈</div>

        <div className="newsletter-text">
          <h2 className="newsletter-title">
            {n.title}<span className="newsletter-star">✦</span>
          </h2>
          <p className="newsletter-desc">{n.desc}</p>
        </div>

        {sent ? (
          <p className="newsletter-thanks">{n.thanks}</p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder={n.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">{n.btn}</button>
            <span className="newsletter-heart">♡</span>
          </form>
        )}
      </div>
    </section>
  );
}
