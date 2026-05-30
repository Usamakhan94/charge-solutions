"use client";
import Marquee from "@/components/ui/Marquee";

const QualityMarquee = () => {
  const marqueeIems = [
    "CABLE-FREE POGO TECHNOLOGY",
    "MODULAR & SCALABLE",
    "TAA COMPLIANT, CT USA",
    "RUGGED - BUILT FOR THE FIELD",
    "POWER + DATA + VIDEO",
  ];
  return (
    <section className="py-8 bg-primary">
      <Marquee items={marqueeIems} />
    </section>
  );
};

export default QualityMarquee;
