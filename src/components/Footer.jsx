import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import "./Footer.css";

const SOCIAL = [
  { src: IMG.pinterestBN,  label: "Pinterest" },
  { src: IMG.instagramBN,  label: "Instagram" },
  { src: IMG.amazonBN,     label: "Amazon" },
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={IMG.logoVertical} alt="Gala Kids Books" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">{f.tagline}</p>
        </div>

        {f.cols.slice(0, 3).map((col) => (
          <div key={col.heading} className="footer-col">
            <h4 className="footer-col-heading">{col.heading}</h4>
            <ul className="footer-col-links">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col">
          <h4 className="footer-col-heading">{f.cols[3].heading}</h4>
          <div className="footer-social">
            {SOCIAL.map(({ src, label }) => (
              <a key={label} href="#" className="footer-social-icon" aria-label={label}>
                <img src={src} alt={label} className="footer-social-img" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p className="footer-copy">{f.copy}</p>
        <div className="footer-legal">
          <a href="#" className="footer-legal-link">{f.privacy}</a>
          <span>•</span>
          <a href="#" className="footer-legal-link">{f.terms}</a>
        </div>
      </div>
    </footer>
  );
}
