import { useEffect } from "react";
import { About } from "../components/sections/About";
import { ContactForm } from "../components/sections/contact/ContactForm";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Projects } from "../components/sections/projects/Projects";
import { Services } from "../components/sections/Services";
import { useSite, type Page } from "../content/i18n/lang";
import { Legal } from "../components/sections/legal/Legal";

export default function App({ page }: { page: Page }) {
  const site = useSite();

  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    };
    scrollToHash();
    document.fonts?.ready.then(scrollToHash);
    window.addEventListener("load", scrollToHash, { once: true });
    return () => window.removeEventListener("load", scrollToHash);
  }, []);

  return (
    <>
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-5 focus:py-2.5 focus:font-bold focus:text-on-lime"
      >
        {site.skipLabel}
      </a>
      <Header />
      <main id="innehall">
        {page === "legal" ? (
          <Legal />
        ) : (
          <>
            <Hero />
            <Projects />
            <Services />
            <Process />
            <About />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
