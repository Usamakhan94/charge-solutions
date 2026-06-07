"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const maskRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mask = maskRef.current;
    if (!mask) return;

    let viewportX = 0;
    let viewportY = 0;

    let currentX = 0;
    let currentY = 0;

    const update = () => {
      const rect = mask.getBoundingClientRect();

      const mouseX = viewportX - rect.left;
      const mouseY = viewportY - rect.top;

      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      const size = parseInt(mask.style.maskSize || "20");

      gsap.set(mask, {
        WebkitMaskPosition: `${currentX - size / 2}px ${currentY - size / 2}px`,
        maskPosition: `${currentX - size / 2}px ${currentY - size / 2}px`,
      });

      requestAnimationFrame(update);
    };

    update();

    const handleMove = (e: MouseEvent) => {
      viewportX = e.clientX;
      viewportY = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <main className="min-h-screen relative isolate">
      <div className="absolute w-full h-full top-0 left-0 overflow-x-hidden -z-10">
        <div
          style={{ backgroundImage: "url('/gray-grid.svg')" }}
          className=" absolute -z-20 bg-repeat w-full h-full"
        />
        <div
          ref={maskRef}
          className="absolute isolate w-full h-full -z-10 bg-transparent"
          style={{
            maskSize: "200px",
            WebkitMaskSize: "200px",

            maskPosition: `
      calc(var(--x) - var(--size) / 2) calc(var(--y) - var(--size) / 2),
      center
    `,
            WebkitMaskPosition: `
      calc(var(--x) - var(--size) / 2) calc(var(--y) - var(--size) / 2),
      center
    `,
            maskImage: "url(/cursor.svg)",
            WebkitMaskImage: "url(/cursor.svg)",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <div
            style={{ backgroundImage: "url('/green-grid.svg')" }}
            className=" absolute -z-10 bg-repeat w-full h-full"
          />
        </div>
      </div>
      {children}
    </main>
  );
}
