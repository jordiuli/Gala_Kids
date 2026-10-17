import { useEffect, useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collection from "./components/Collection";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Filosofia from "./pages/Filosofia/Filosofia";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacto from "./pages/Contacto/Contacto";
import Inspiracion from "./pages/Inspiracion/Inspiracion";

const PAGES = {
  "#filosofia": Filosofia,
  "#inspiracion": Inspiracion,
  "#sobre-nosotros": AboutUs,
  "#contacto": Contacto,
};

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash);
      if (PAGES[window.location.hash]) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Page = PAGES[hash];

  return (
    <LanguageProvider>
      <Header />
      <main>
        {Page ? (
          <Page />
        ) : (
          <>
            <Hero />
            <Benefits />
            <Collection />
            <Blog />
            <Newsletter />
          </>
        )}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
