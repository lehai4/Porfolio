import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import NoSSRHeader from "@/app/components/NoSSRHeader";
import Project from "@/app/components/Project";
import Skill from "@/app/components/Skill";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="w-full h-full">
      <NoSSRHeader />
      <main>
        <section className="about" id="about">
          <About />
        </section>
        <section className="skill" id="skill">
          <Skill />
        </section>
        <section className="projects" id="projects">
          <Project />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
