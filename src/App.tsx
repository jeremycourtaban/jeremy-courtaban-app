import "./index.css";
import "./sass/index.scss";
import "./App.css";
import { About } from "./js/components/About";
import { Footer } from "./js/components/Footer";
import { Header } from "./js/components/Header";
import { Procedures } from "./js/components/Procedures";
import { References } from "./js/components/References";
import { ScrollToTop } from "./js/components/ScrollToTop";
import { Skills } from "./js/components/Skills";
import { useScrollToTop } from "./js/hooks/useScrollToTop";
import { WebSites } from "./js/components/WebSites";

export function App() {
  useScrollToTop();

  return (
    <>
      <Header />
      <main className="container">
        <About />
        <WebSites />
        <Procedures />
        <References />
        <Skills />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
