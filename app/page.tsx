import Hero from "@/components/sections/Homepage/Hero";
import Partners from "@/components/sections/Homepage/Partners";
import QualityMarquee from "@/components/sections/Homepage/QualityMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <QualityMarquee />
      <Partners />
      <section className="min-h-screen"></section>
    </>
  );
}
