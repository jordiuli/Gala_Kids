import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import "./Header.css";

const LANGS = [
  { code: "ca", label: "CAT" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [activeNav, setActiveNav] = useState(t.nav.active);

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#" className="logo">
          <img src={IMG.logoHorizontal} alt="Gala Kids Books" className="logo-img" />
        </a>

        <nav className="nav">
          {t.nav.items.map((item) => (
            <a
              key={item}
              href="#"
              className={`nav-link${activeNav === item ? " nav-link--active" : ""}`}
              onClick={(e) => { e.preventDefault(); setActiveNav(item); }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <div className="lang-switcher">
            {LANGS.map(({ code, label }, i) => (
              <span key={code} className="lang-switcher-item">
                <button
                  className={`lang-btn${lang === code ? " lang-btn--active" : ""}`}
                  onClick={() => setLang(code)}
                >
                  {label}
                </button>
                {i < LANGS.length - 1 && <span className="lang-sep">|</span>}
              </span>
            ))}
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Pinterest">
              <img src={IMG.pinterest} alt="Pinterest" className="social-img" />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <img src={IMG.instagram} alt="Instagram" className="social-img" />
            </a>
            <a href="#" className="social-icon" aria-label="Amazon">
              <img src={IMG.amazon} alt="Amazon" className="social-img" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
