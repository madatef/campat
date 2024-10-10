import { Camp } from "@/components/Camp";
import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <Cta />


    </main>

  );
}
