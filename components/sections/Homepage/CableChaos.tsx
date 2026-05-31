"use client";
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

  useGSAP(
    () => {
      const container = containerRef.current;
      const before = beforeRef.current;
      const handle = handleRef.current;
      const glowLine = glowLineRef.current;

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
            end: "top 60%",
            scrub: false,
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
    },
    { scope: containerRef },
  );

  return (
    <section className=" relative isolate">
      <div
        ref={glowLineRef}
        className="absolute -z-10 w-full h-1.25 bg-accent bottom-61.5 pointer-events-none left-0 blur-[2px] shadow-[0_0_38px_5px_rgba(196,255,127,0.5)]"
      />
      <div className="container">
        <div className="max-w-208 mx-auto mb-20 flex flex-col gap-6">
          <h2 className="text-3xl text-center text-white">
            End The <span className="text-accent">Cable Chaos</span>
          </h2>
          <p className="text-white/80 text-body text-center ">
            Charging tablets in the field should never mean tangled cords, dead
            devices, or lost operational time. Our cabinets transform chaotic
            charging stations into organized, secure, networked, mission-ready
            storage systems - instantly.
          </p>
        </div>
        <div className=" bg-secondary rounded-[10px] overflow-hidden p-6.75">
          <div
            ref={containerRef}
            className="relative isolate rounded-[15px] overflow-hidden min-h-123"
          >
            <div className="flex justify-between items-center w-full p-7 absolute top-0 left-0 pointer-events-none z-10">
              <span className="text-white text-body font-sans py-[15px] px-5 rounded-[10px] bg-[#FF383C]">
                BEFORE
              </span>
              <span className="text-white text-body font-sans py-[15px] px-5 rounded-[10px] bg-accent">
                AFTER
              </span>
            </div>

            <Image
              src={"/comparison-images/after-img.png"}
              alt=""
              fill
              className="object-cover"
            />
            <div
              ref={beforeRef}
              className="absolute inset-0 will-change-[clip-path]"
            >
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
              <div className=" bg-primary sm:w-11.5 w-7 sm:h-11.5 h-7 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rotate-45">
                <div className="flex justify-center items-center sm:text-sm text-[12px] text-white w-full h-full -rotate-45">
                  <FaChevronLeft />
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CableChaos;
