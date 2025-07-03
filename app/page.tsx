import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-[#232630] text-[#C1AA90] h-screen snap-y snap-mandatory overflow-y-scroll z-0  ">

      <Header />

      <section id="hero" className="snap-start">
        <Hero/>
      </section>

      <section id="about" className="snap-center">
        <About/>
      </section>

      <section id="experience" className="snap-center">
        <Experience/>
      </section>

      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      <section id="projects" className="snap-start">
        <Projects/>
      </section>

      {/* Contact me */}
      <section id="contact"  className="snap-start">
        <Contact/>
      </section>

      
      
    </div>
  );
}
