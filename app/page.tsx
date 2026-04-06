import AboutUs from "./components/section/AboutUs";
import Hero from "./components/section/Hero";
import VideoPlayer from "./components/ui/VideoPlayer";
import Portfolios from "./components/section/Portfolios";
import Edge from "./components/section/Edge";
import Approach from "./components/section/Approach";
import Contact from "./components/section/Contact";
import { getPortfolios } from "@/lib/wordpress";
import BackgroundSection from "./components/layout/BackgroundSection";
import HashScroll from "./components/layout/HashScroll";

export default async function Home() {
  const portfolios = await getPortfolios();
  const logos = portfolios.map((p) => p.acf.project_logo);

  return (
    <div className="flex overflow-hidden min-h-screen  bg-zinc-50 font-sans">
      <main>
        <HashScroll />
        <BackgroundSection variant="gradient">
          <Hero />
        </BackgroundSection>    
        <section id="about-us">
          <AboutUs logos={logos} />
        </section>

        <div>
          <VideoPlayer src="/video/cch1.mp4" className="w-full shadow-xl" />
        </div>

        <section id="our-edge">
          <Edge />
        </section>

        <section id="our-approach">
          <Approach />
        </section>

        <section id="portfolio">
          <Portfolios initialSlides={portfolios} />
        </section>

        <section id="contact-us">
          <Contact />
        </section>
      </main>
    </div>
  );
}
