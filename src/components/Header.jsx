import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Header.css";

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const AmazonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.67-1.244.78-2.582 1.37-4.012 1.78-1.43.41-2.89.62-4.368.62-3.996 0-7.656-1.07-10.96-3.22-.216-.14-.274-.3-.16-.46zm.88-2.73c.16-.204.322-.24.51-.11 1.14.7 2.248 1.248 3.37 1.632 2.67.9 5.43 1.18 8.3.83 2.52-.31 4.886-1.08 7.072-2.28.232-.13.43-.18.58-.14s.214.16.207.37c-.01.18-.11.37-.28.53-.24.22-.68.56-1.28.99-2.2 1.55-4.73 2.56-7.564 3.04-2.87.48-5.7.3-8.468-.56-1.1-.33-2.18-.78-3.22-1.37-.2-.12-.29-.28-.22-.48.03-.09.08-.18.19-.3z"/>
  </svg>
);

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
          <span className="logo-brand">Gala Kids<span className="logo-star">✦</span></span>
          <span className="logo-sub">— BOOKS —</span>
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
            <a href="#" className="social-icon" aria-label="Pinterest"><PinterestIcon /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="social-icon" aria-label="Amazon"><AmazonIcon /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
