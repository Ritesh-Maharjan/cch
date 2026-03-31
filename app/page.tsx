import AboutUs from "./components/section/AboutUs";
import Hero from "./components/section/Hero";
import VideoPlayer from "./components/ui/VideoPlayer";
import Portfolios from "./components/section/Portfolios";
import Edge from "./components/section/Edge";
import Approach from "./components/section/Approach";
import Contact from "./components/section/Contact";
import { getPortfolios } from "@/lib/wordpress";
import BackgroundSection from "./components/layout/BackgroundSection";

export default async function Home() {
  const portfolios = await getPortfolios();
  const logos = portfolios.map((p) => p.acf.project_logo);

  return (
    <div className="flex overflow-hidden min-h-screen  bg-zinc-50 font-sans">
      <main>
        <BackgroundSection variant="gradient">
          <Hero />
        </BackgroundSection>    
        <AboutUs logos={logos} />
        <div>
          <VideoPlayer src="/video/cch1.mp4" className="w-full shadow-lg" />
        </div>
        <Edge />
        <Approach />
        <Portfolios initialSlides={portfolios} />
        <Contact />
      </main>
    </div>
  );
}
