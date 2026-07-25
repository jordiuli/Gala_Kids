import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collection from "./components/Collection";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Collection />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
