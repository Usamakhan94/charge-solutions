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
    <section className="md:py-8 py-6 bg-primary overflow-hidden">
      <Marquee
        minGap={24}
        items={marqueeIems.map((item, index) => (
          <span
            className="text-white text-body pl-4.5 relative isolate before:absolute before:w-2 before:h-2 before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-white"
            key={index + 1}
          >
            {item}
          </span>
        ))}
      />
    </section>
  );
};

export default QualityMarquee;
