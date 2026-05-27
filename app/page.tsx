import BackgroundDecor from "@/components/ui/BackgroundDecor";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden" data-scroll-container>
      <BackgroundDecor />
      <div
        data-scroll-section
        className="flex min-h-dvh w-full flex-col bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <Header />
        <Hero />
      </div>
      <main className="inner" data-scroll-section>
        <div className="container">123</div>
      </main>
    </div>
  );
}
