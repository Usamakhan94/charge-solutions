"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TextReveal = ({ children }: { children: ReactNode }) => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const split = new SplitText(textRef.current, {
        type: "words, chars",
        charsClass: "char",
        wordsClass: "word",
      });

      gsap.set(split.words, {
        overflow: "hidden",
        display: "inline-flex",
        verticalAlign: "top",
      });

      gsap.set(split.chars, {
        display: "inline-block",
      });

      gsap.from(split.chars, {
        yPercent: -100,
        rotateZ: -20,
        duration: 0.5,
        stagger: 0.025,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      return () => split.revert();
    },
    { scope: textRef },
  );

  return (
    <span
      ref={textRef}
      className="[&_.char]:leading-[inherit] [&_.word]:leading-[inherit]"
    >
      {children}
    </span>
  );
};

export default TextReveal;
