import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { NewsTicker } from "@/components/NewsTicker";
import { CorePillars } from "@/components/CorePillars";
import { FeaturedGames } from "@/components/FeaturedGames";
import { SportsPreview } from "@/components/SportsPreview";

export const LandingPage = () => {
  return (
    <Layout showParticles={true}>
      <Hero />
      <NewsTicker />
      <CorePillars />
      <FeaturedGames />
      <SportsPreview />
    </Layout>
  );
};
