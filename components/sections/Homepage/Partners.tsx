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
      url: "/partners-logos/usarmy.svg",
      width: 102,
      height: 80,
      alt: "US Army Logo",
    },
    {
      url: "/partners-logos/homeland-s.svg",
      width: 102,
      height: 80,
      alt: "Homeland Security Logo",
    },
    {
      url: "/partners-logos/usdef.svg",
      width: 102,
      height: 80,
      alt: "US Defense Logo",
    },
    {
      url: "/partners-logos/nasa.svg",
      width: 102,
      height: 33,
      alt: "NASA Logo",
    },
  ];
  return (
    <section className="md:py-37.5 sm:py-20 py-10 px-4">
      <div className="container">
        <Pill alignment="center" textContent="AUTHORIZED MISSION PARTNERS" />
        {/* <Marquee
          className="[&_>div]:items-center md:mt-24 sm:mt-18 mt-8"
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
        /> */}
        <div className="max-w-250 flex sm:justify-between justify-center items-center flex-wrap gap-5 mx-auto sm:mt-18 mt-8">
          {partnersLogos.map((item, index) => (
            <Image
              key={index}
              src={item.url}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
