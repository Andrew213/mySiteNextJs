import BackgroundDecor from "@/components/ui/BackgroundDecor";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div data-scroll-container>
      <BackgroundDecor />
      <SmoothScroll />
      <ScrollReveal />
      <div
        data-scroll-section
        className="flex min-h-dvh w-full flex-col bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <Header />
        <Hero />
      </div>
      <main className="inner" data-scroll-section>
        <Services />
        <Projects />
        <Skills />
        <Education />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
