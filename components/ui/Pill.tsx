"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Alignment = "start" | "center" | "end";

const alignmentMap: Record<Alignment, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

const Pill = ({
  textContent,
  alignment = "start",
}: {
  textContent: string;
  alignment?: Alignment;
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        spanRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: spanRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: spanRef },
  );

  return (
    <div className={`flex items-center ${alignmentMap[alignment]}`}>
      <h6 className="sm:text-body text-sm text-accent relative isolate w-fit pb-5">
        {textContent}
        <span
          ref={spanRef}
          className="absolute left-0 bottom-0 h-1 bg-linear-to-r rounded-full from-[#5B901E] to-[#5B901E00]"
          style={{ width: "0%" }}
        />
      </h6>
    </div>
  );
};

export default Pill;
