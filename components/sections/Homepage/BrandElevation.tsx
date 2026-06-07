"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Button } from "@/components/ui/button";
import { PlayButtonIcon } from "@/components/ui/icons";

const BrandElevation = () => {
  const imageContainer = useRef<HTMLDivElement>(null);
  const mainContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageContainer.current, {
      height: "100vh",
      width: "100%",
      borderRadius: "0px",
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "center center",
        end: "200% bottom",
        scrub: 1,
        pin: true,
      },
    });
  }, {});

  return (
    <section className="relative isolate">
      <div
        ref={mainContainer}
        className="min-h-screen flex justify-center items-center"
      >
        <div
          ref={imageContainer}
          className="rounded-[1.25rem] relative overflow-hidden w-[60%] h-[calc(100vh-80px)] flex justify-center items-center"
        >
          <Image
            src={"/elevate-img.png"}
            className="w-full rounded-[inherit]"
            alt="Banner Image"
            width={1660}
            height={630}
          />
          <Button
            variant="ghost"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-0! sm:w-18.5 w-14 sm:h-18.5 h-14 shadow-none! bg-transparent! [&_svg]:w-full! [&_svg]:h-full!"
          >
            <PlayButtonIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandElevation;
