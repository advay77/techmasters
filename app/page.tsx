import Hero from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { NewsLetterSection } from "@/components/home/news-letter-section";
import { Team } from "@/components/home/team";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutSection />
      <Team />
      <NewsLetterSection />
    </main>
  );
}
