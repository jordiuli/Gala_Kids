import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IMG } from "../assets/images";
import "./Header.css";

// Mateix ordre que t.nav.items a tots els idiomes; null = secció sense pàgina encara
const NAV_HREFS = ["#filosofia", "#inspiracion", "#sobre-nosotros", "#contacto"];

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
        <a href="#" className="logo" onClick={() => setActiveNav(null)}>
          <img src={IMG.logoHorizontal} alt="Gala Kids Books" className="logo-img" />
        </a>

        <nav className="nav">
          {t.nav.items.map((item, i) => (
            <a
              key={item}
              href={NAV_HREFS[i] || "#"}
              className={`nav-link${activeNav === item ? " nav-link--active" : ""}`}
              onClick={(e) => { if (!NAV_HREFS[i]) e.preventDefault(); setActiveNav(item); }}
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

        </div>
      </div>
    </header>
  );
}
