import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import StatsBar from "@/components/home/StatsBar";
import HowWeWork from "@/components/home/HowWeWork";
import EngagementModels from "@/components/home/EngagementModels";
import FooterCTA from "@/components/home/FooterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedProjects />
      <StatsBar />
      <HowWeWork />
      <EngagementModels />
      <FooterCTA />
    </>
  );
}
