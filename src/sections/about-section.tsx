import Section from "../components/section";

export default function AboutSection() {
  return (
    <Section title="About Me">
      <div className="text-sm/6.5">
        <p>
          I’m Rakesh Shriwas, Senior Frontend Developer with 8+ years of
          experience, including Angular, ReactJs, Javascript and Typescript,
          specializing in building scalable and user-friendly web applications.
          Skilled in modern frontend technologies, responsive design, and
          performance optimization. Adept at delivering clean, maintainable, and
          high-quality solutions in both startup and enterprise environments.
        </p>
        {/* <p className="mt-5">
          Whether it’s crafting responsive interfaces or developing robust
          backend systems, I aim to deliver solutions that are both reliable and
          impactful.
        </p> */}
      </div>
    </Section>
  );
}
