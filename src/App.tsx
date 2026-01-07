import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import SkillsSection from "./sections/skills-section";
import ThemeButton from "./components/ThemeButton";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <main className="dark:bg-black max-md:px-4 relative">
      <ThemeButton
        theme={theme}
        setTheme={setTheme}
        position={"absolute top-4 right-4"}
      />

      <Toaster />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
