import Hero from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { NewsLetterSection } from "@/components/home/news-letter-section";
import { Team } from "@/components/home/team";
import { EventCarousel } from "@/components/common/events-carousel";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutSection />
      <EventCarousel/>
      <NewsLetterSection />
      <Team />
    </main>
  );
}
