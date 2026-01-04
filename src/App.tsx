import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import SkillsSection from "./sections/skills-section";

export default function App() {
  return (
    <main className="max-md:px-4">
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
