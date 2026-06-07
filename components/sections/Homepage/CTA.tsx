"use client";

import { Button } from "@/components/ui/button";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chevronLeftRef = useRef<HTMLDivElement>(null);
  const chevronRightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = sectionRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });

      const halfWidth = container.offsetWidth / 2;

      tl.fromTo(
        chevronLeftRef.current,
        { x: halfWidth },
        { x: 0, duration: 0.9, ease: "power3.out" },
      ).fromTo(
        chevronRightRef.current,
        { x: -halfWidth },
        { x: 0, duration: 0.9, ease: "power3.out" },
        "<",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="md:py-37.5 sm:py-20 py-10 px-4">
      <div className="container">
        <div className="bg-white/4 border border-white/4 backdrop-blur-[110px] sm:py-41.25 py-16 rounded-[20px] relative isolate overflow-hidden">
          <div
            ref={chevronLeftRef}
            className="absolute -z-10 top-0 left-0 h-full"
          >
            <Image
              className="h-full object-cover"
              src={"/chevron.svg"}
              width={240}
              height={533}
              alt="Chevron Left"
            />
          </div>

          <div
            ref={chevronRightRef}
            className="rotate-180 absolute -z-10 top-0 right-0 h-full"
          >
            <Image
              className="h-full object-cover"
              src={"/chevron.svg"}
              width={240}
              height={533}
              alt="Chevron Right"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-7.5">
            <h2 className="sm:text-3xl text-2xl text-center text-white">
              <TextReveal>
                Secure. <span className="text-accent">Charge.</span> Deploy
              </TextReveal>
            </h2>
            <p className="text-body font-medium text-white">
              Build a mission-ready device ecosystem.
            </p>
            <Button variant="outline" asChild className="uppercase">
              <Link href="/contact">Talk to Engineering</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
