import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Work } from "../components/sections/Work";
import { Process } from "../components/sections/Process";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-taurus-lime selection:text-taurus-dark">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <Hero />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
