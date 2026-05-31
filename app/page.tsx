import CableChaos from "@/components/sections/Homepage/CableChaos";
import Hero from "@/components/sections/Homepage/Hero";
import Partners from "@/components/sections/Homepage/Partners";
import QualityMarquee from "@/components/sections/Homepage/QualityMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <QualityMarquee />
      <Partners />
      <CableChaos />
      <section className="min-h-screen"></section>
    </>
  );
}
