// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";

// interface MarqueeProps {
//   items: React.ReactNode[];
//   speed?: number;
//   gap?: number;
//   className?: string;
//   itemClassName?: string;
// }

// export default function Marquee({
//   items,
//   speed = 80,
//   gap = 40,
//   className = "",
//   itemClassName = "",
// }: MarqueeProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);

//   const x = useRef(0);
//   const width = useRef(0);

//   useLayoutEffect(() => {
//     const track = trackRef.current;
//     const container = containerRef.current;
//     if (!track || !container) return;

//     const measure = () => {
//       width.current = track.scrollWidth / 2;
//     };

//     measure();

//     const ctx = gsap.context(() => {
//       gsap.ticker.add(() => {
//         const delta = gsap.ticker.deltaRatio() * (speed / 60);

//         x.current -= delta;

//         // IMPORTANT FIX:
//         // reset BEFORE visible gap appears
//         if (Math.abs(x.current) >= width.current) {
//           x.current += width.current;
//         }

//         gsap.set(track, {
//           x: x.current,
//         });
//       });
//     });

//     const resizeObserver = new ResizeObserver(() => {
//       measure();
//     });

//     resizeObserver.observe(container);

//     return () => {
//       ctx.revert();
//       resizeObserver.disconnect();
//     };
//   }, [speed]);

//   // 🔥 CRITICAL FIX: auto-fill items so no empty space exists
//   const repeatCount = 6; // ensures overflow even on ultrawide screens
//   const filledItems = Array(repeatCount).fill(items).flat();

//   return (
//     <div ref={containerRef} className={`overflow-hidden w-full ${className}`}>
//       <div
//         ref={trackRef}
//         className="flex w-max will-change-transform"
//         style={{ gap: `${gap}px` }}
//       >
//         {filledItems.map((item, i) => (
//           <div
//             key={i}
//             className={`shrink-0 whitespace-nowrap ${itemClassName}`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: number;
  minGap?: number;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({
  items,
  speed = 100,
  gap = 40,
  minGap = 16,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const singleRef = useRef<HTMLDivElement>(null);

  const x = useRef(0);
  const loopWidth = useRef(0);
  const velocity = useRef(0);
  const direction = useRef(1);
  const rafId = useRef<number>(0);
  const tickerAdded = useRef(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const single = singleRef.current;
    if (!container || !track || !single) return;

    let ctx: gsap.Context | null = null;

    const init = () => {
      // Measure one copy's rendered width (items + their gaps)
      const singleW = single.getBoundingClientRect().width;
      const containerW = container.getBoundingClientRect().width;

      // Compute how many copies needed to always overfill by at least 2×
      // so both forward and backward directions never show empty space.
      // minimum 3 copies: one off-left, one visible, one off-right.
      const copies = Math.max(3, Math.ceil((containerW * 2) / singleW) + 1);

      // The gap between the LAST item of one copy and FIRST of the next
      // must match the gap inside copies. We achieve this by using a single
      // flat flex row — gap is uniform between every sibling.
      // Actual loop width = singleW + one gap (the seam gap).
      // We compute this from the DOM after rendering.
      const computedGap = Math.max(
        minGap,
        Math.min(gap, containerW / items.length),
      );

      // Re-render with the right number of copies and gap
      // We store these on the track via data attrs to avoid a re-render loop
      track.style.setProperty("--marquee-gap", `${computedGap}px`);
      track.dataset.copies = String(copies);
      track.dataset.ready = "0";

      // Force a second rAF so the DOM has the new children
      rafId.current = requestAnimationFrame(() => {
        const children = Array.from(track.children) as HTMLElement[];
        const n = items.length; // items per copy
        if (children.length < n) return;

        // Sum first copy's children widths + n gaps (seam included)
        let w = 0;
        for (let i = 0; i < n; i++) {
          w += children[i].getBoundingClientRect().width;
        }
        w += computedGap * n;
        loopWidth.current = w;

        // Start offset: negative one copy so content is centred/visible
        x.current = -w;
        gsap.set(track, { x: -w });
        track.dataset.ready = "1";
      });
    };

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(init);
    });
    ro.observe(container);
    rafId.current = requestAnimationFrame(init);

    let lastScroll = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      const delta = curr - lastScroll;
      lastScroll = curr;
      velocity.current = gsap.utils.interpolate(velocity.current, delta, 0.2);
      direction.current = delta >= 0 ? 1 : -1;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    ctx = gsap.context(() => {
      gsap.ticker.add(() => {
        if (!loopWidth.current || !track.dataset.ready) return;

        const boost = Math.min(Math.abs(velocity.current) * 25, 300);
        const finalSpeed = speed + boost;
        const delta = gsap.ticker.deltaRatio() * (finalSpeed / 60);

        x.current -= delta * direction.current;

        // Jitter-free modulo — always lands in (-loopWidth, 0]
        const w = loopWidth.current;
        x.current = ((x.current % w) + w) % w;
        if (x.current > 0) x.current -= w;

        gsap.set(track, { x: x.current });
        velocity.current *= 0.92;
      });
    });

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      ctx?.revert();
    };
  }, [speed, gap, minGap, items.length]);

  // Derive copies count for render — default 3, updated by init() via dataset
  // We render a fixed 6 copies upfront; init() will trim via CSS if needed.
  // Simpler: just render enough copies always (6 is safe for any screen).
  const COPIES = 6;
  const repeated = Array.from({ length: COPIES }, () => items).flat();

  return (
    <div ref={containerRef} className={`overflow-hidden w-full ${className}`}>
      {/* Single-copy ghost used only to measure one copy's natural width */}
      <div
        ref={singleRef}
        className="flex w-max absolute opacity-0 pointer-events-none top-0 left-0"
        style={{ gap: `${Math.max(minGap, Math.min(gap, 9999))}px` }}
        aria-hidden
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`shrink-0 whitespace-nowrap ${itemClassName}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ gap: `var(--marquee-gap, ${gap}px)` }}
      >
        {repeated.map((item, i) => (
          <div
            key={i}
            className={`shrink-0 whitespace-nowrap ${itemClassName}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
