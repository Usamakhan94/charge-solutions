"use client";

import Marquee from "@/components/ui/Marquee";
import Pill from "@/components/ui/Pill";
import Image from "next/image";

const Partners = () => {
  const partnersLogos = [
    {
      url: "/partners-logos/amaf.svg",
      width: 102,
      height: 80,
      alt: "AMAF Logo",
    },
    {
      url: "/partners-logos/homeland-s.svg",
      width: 102,
      height: 80,
      alt: "Homeland Security Logo",
    },
    {
      url: "/partners-logos/nasa.svg",
      width: 102,
      height: 33,
      alt: "NASA Logo",
    },
    {
      url: "/partners-logos/usarmy.svg",
      width: 102,
      height: 80,
      alt: "US Army Logo",
    },
    {
      url: "/partners-logos/usdef.svg",
      width: 102,
      height: 80,
      alt: "US Defense Logo",
    },
  ];
  return (
    <section className="py-37.5">
      <div className="container">
        <Pill alignment="center" textContent="AUTHORIZED MISSION PARTNERS" />
        <Marquee
          className="[&_>div]:items-center mt-24"
          gap={140}
          minGap={32}
          items={partnersLogos.map((item, index) => (
            <Image
              key={index}
              src={item.url}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          ))}
        />
      </div>
    </section>
  );
};

export default Partners;
