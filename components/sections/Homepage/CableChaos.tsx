"use client";
import TextReveal from "@/components/ui/TextReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

gsap.registerPlugin(Draggable, ScrollTrigger);

const CableChaos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const glowLineRef = useRef<HTMLDivElement>(null);
  const blobWrapperRef = useRef<HTMLDivElement>(null);
  const blobLargeRef = useRef<HTMLDivElement>(null);
  const blobMedRef = useRef<HTMLDivElement>(null);
  const blobSmallRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const before = beforeRef.current;
      const handle = handleRef.current;
      const glowLine = glowLineRef.current;
      const blobWrapper = blobWrapperRef.current;
      const blobLarge = blobLargeRef.current;
      const blobMed = blobMedRef.current;
      const blobSmall = blobSmallRef.current;

      if (!container || !before || !handle) return;
      gsap.fromTo(
        glowLine,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: glowLine,
            start: "top 90%",
            end: "top 10%",
            scrub: false,
            toggleActions: "play reverse play reverse",
          },
        },
      );
      const containerWidth = container.offsetWidth;
      const startX = containerWidth / 2;

      gsap.set(handle, { x: startX });
      gsap.set(before, {
        clipPath: `inset(0 ${containerWidth - startX}px 0 0)`,
      });

      Draggable.create(handle, {
        type: "x",
        bounds: { minX: 0, maxX: containerWidth },
        onDrag: function () {
          const x = this.x;
          gsap.set(before, {
            clipPath: `inset(0 ${containerWidth - x}px 0 0)`,
          });
        },
      });
      const triggerWiggle = () => {
        gsap.to(handle, {
          keyframes: {
            x: [
              startX,
              startX - 30,
              startX + 30,
              startX - 20,
              startX + 20,
              startX - 5,
              startX + 5,
              startX,
            ],
          },
          duration: 2,
          ease: "power1.inOut",
          onUpdate: function () {
            const x = gsap.getProperty(handle, "x") as number;
            gsap.set(before, {
              clipPath: `inset(0 ${containerWidth - x}px 0 0)`,
            });
          },
        });
      };

      ScrollTrigger.create({
        trigger: handle,
        start: "top 90%",
        onEnter: triggerWiggle,
        onEnterBack: triggerWiggle,
      });
      gsap.fromTo(
        blobWrapper,
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blobWrapper,
            start: "top 95%",
            end: "top 40%",
            scrub: 1.5,
          },
        },
      );
      gsap.fromTo(
        blobLarge,
        { yPercent: -18, scale: 0.85, opacity: 0 },
        {
          yPercent: 18,
          scale: 1,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: blobWrapper,
            start: "top 95%",
            end: "bottom 10%",
            scrub: 2,
          },
        },
      );
      gsap.fromTo(
        blobMed,
        { yPercent: -30, opacity: 0 },
        {
          yPercent: 30,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: blobWrapper,
            start: "top 95%",
            end: "bottom 10%",
            scrub: 2.5,
          },
        },
      );
      gsap.fromTo(
        blobSmall,
        { yPercent: -50, opacity: 0 },
        {
          yPercent: 50,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: blobWrapper,
            start: "top 95%",
            end: "bottom 10%",
            scrub: 3,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="relative isolate px-4">
      <div
        ref={glowLineRef}
        className="absolute -z-10 w-full h-1.25 bg-accent xl:bottom-61.5 sm:bottom-52 bottom-32 pointer-events-none left-0 blur-[2px] shadow-[0_0_38px_5px_rgba(196,255,127,0.5)]"
      />
      <div className="container">
        <div className="max-w-208 mx-auto sm:mb-20 mb-10 flex flex-col gap-6">
          <h2 className="sm:text-3xl text-2xl text-center text-white">
            <TextReveal>
              End The <span className="text-accent">Cable Chaos</span>
            </TextReveal>
          </h2>
          <p className="text-white/80 sm:text-body text-md text-center">
            Charging tablets in the field should never mean tangled cords, dead
            devices, or lost operational time. Our cabinets transform chaotic
            charging stations into organized, secure, networked, mission-ready
            storage systems - instantly.
          </p>
        </div>

        <div className="bg-secondary sm:rounded-[10px] rounded-[15px] sm:p-6.75 p-3.75">
          <div
            ref={containerRef}
            className="relative isolate sm:rounded-[15px] rounded-[8px] overflow-hidden xl:min-h-123 sm:min-h-87.5 min-h-62.5"
          >
            <Image
              src={"/comparison-images/after-img.png"}
              alt=""
              fill
              className="object-cover -z-20"
            />
            <span className="absolute top-0 right-0 -z-10 sm:m-7 m-3.5 text-white sm:text-body text-[12px] font-sans sm:py-3.75 py-2.5 sm:px-5 px-3 sm:rounded-[10px] rounded-[6px] bg-accent">
              AFTER
            </span>
            <div
              ref={beforeRef}
              className="absolute inset-0 will-change-[clip-path]"
            >
              <span className="absolute top-0 left-0 z-10 sm:m-7 m-3.5 text-white sm:text-body text-[12px] font-sans sm:py-3.75 py-2.5 sm:px-5 px-3 sm:rounded-[10px] rounded-[6px] bg-[#FF383C]">
                BEFORE
              </span>
              <Image
                src={"/comparison-images/before-img.png"}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div
              ref={handleRef}
              className="absolute top-0 h-full sm:w-4.5 w-2 bg-primary/80 backdrop-blur-sm rounded-[1.25rem] -translate-x-1/2 cursor-ew-resize z-10"
            >
              <div className="bg-primary sm:w-11.5 w-7 sm:h-11.5 h-7 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rotate-45">
                <div className="flex justify-center items-center sm:text-sm text-[12px] text-white w-full h-full -rotate-45">
                  <FaChevronLeft />
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={blobWrapperRef}
          className="absolute isolate -bottom-70 left-1/2 -translate-x-1/2 w-full h-137.5 -z-10 will-change-transform"
        >
          <div
            ref={blobLargeRef}
            className="absolute max-w-[50%] w-full h-137.5 left-1/2 -translate-x-1/2 bg-radial from-[#019A4A] via-[#8BC34A] to-[#05080B00] rounded-[80%] blur-[150px] -z-30 opacity-60 will-change-transform"
          />
          <div
            ref={blobMedRef}
            className="absolute max-w-[30%] w-full h-25 left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 bg-[#FFFFFF33] rounded-[80%] blur-[100px] -z-20 will-change-transform"
          />
          <div
            ref={blobSmallRef}
            className="absolute max-w-[25%] w-full h-5 left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 bg-white rounded-[80%] blur-[10px] -z-10 will-change-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default CableChaos;
