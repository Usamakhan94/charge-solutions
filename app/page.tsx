import BrandElevation from "@/components/sections/Homepage/BrandElevation";
import CableChaos from "@/components/sections/Homepage/CableChaos";
import Contact from "@/components/sections/Homepage/Contact";
import CTA from "@/components/sections/Homepage/CTA";
import DockCore from "@/components/sections/Homepage/DockCore";
import Hero from "@/components/sections/Homepage/Hero";
import Mission from "@/components/sections/Homepage/Mission";
import Partners from "@/components/sections/Homepage/Partners";
import ProductDetailsSlider from "@/components/sections/Homepage/ProductDetailsSlider";
import ProductLine from "@/components/sections/Homepage/ProductLine";
import QualityMarquee from "@/components/sections/Homepage/QualityMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <QualityMarquee />
      <Partners />
      <CableChaos />
      <DockCore />
      <ProductLine />
      <ProductDetailsSlider />
      <Mission />
      <BrandElevation />
      <Contact />
      <CTA />
    </>
  );
}
