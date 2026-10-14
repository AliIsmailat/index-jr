import { About } from "../components/sections/About";
import { ContactForm } from "../components/sections/contact/ContactForm";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Projects } from "../components/sections/projects/Projects";
import { Services } from "../components/sections/Services";
import { useSite } from "../content/i18n/lang";

export default function App() {
  const site = useSite();

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
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
