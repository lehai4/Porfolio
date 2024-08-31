import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Home from "@/app/components/Home";
import NoSSRHeader from "@/app/components/NoSSRHeader";
import Project from "@/app/components/Project";
import Skill from "@/app/components/Skill";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <NoSSRHeader />
      <main className="-mt-[80px]">
        <section className="home" id="home">
          <Home />
        </section>
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
    </div>
  );
}
