// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import Image from "next/image";
// import { useRef, useEffect } from "react";
// import type { Swiper as SwiperType } from "swiper";

// const ProductDetailsSlider = () => {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const isHoveringRef = useRef(false);
//   const deltaAccRef = useRef(0);
//   const THRESHOLD = 50;

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     if (!wrapper) return;

//     const onWheel = (e: WheelEvent) => {
//       if (!isHoveringRef.current || !swiperRef.current) return;

//       const swiper = swiperRef.current;
//       const atStart = swiper.isBeginning && e.deltaY < 0;
//       const atEnd = swiper.isEnd && e.deltaY > 0;

//       if (atStart || atEnd) {
//         deltaAccRef.current = 0;
//         return;
//       }

//       e.preventDefault();

//       deltaAccRef.current += e.deltaY;

//       if (Math.abs(deltaAccRef.current) >= THRESHOLD) {
//         if (deltaAccRef.current > 0) {
//           swiper.slideNext();
//         } else {
//           swiper.slidePrev();
//         }
//         deltaAccRef.current = 0;
//       }
//     };

//     wrapper.addEventListener("wheel", onWheel, { passive: false });
//     return () => wrapper.removeEventListener("wheel", onWheel);
//   }, []);

//   const productSlides = [
//     {
//       image: {
//         src: "/product-slides-images/1.png",
//         width: 292,
//         height: 536,
//         alt: "",
//       },
//       description:
//         "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
//     },
//     {
//       image: {
//         src: "/product-slides-images/1.png",
//         width: 292,
//         height: 536,
//         alt: "",
//       },
//       description:
//         "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
//     },
//     {
//       image: {
//         src: "/product-slides-images/1.png",
//         width: 292,
//         height: 536,
//         alt: "",
//       },
//       description:
//         "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
//     },
//     {
//       image: {
//         src: "/product-slides-images/1.png",
//         width: 292,
//         height: 536,
//         alt: "",
//       },
//       description:
//         "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
//     },
//     {
//       image: {
//         src: "/product-slides-images/1.png",
//         width: 292,
//         height: 536,
//         alt: "",
//       },
//       description:
//         "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
//     },
//   ];

//   return (
//     <section className="bg-secondary">
//       <div className="container">
//         <div
//           ref={wrapperRef}
//           onMouseEnter={() => {
//             isHoveringRef.current = true;
//           }}
//           onMouseLeave={() => {
//             isHoveringRef.current = false;
//             deltaAccRef.current = 0;
//           }}
//         >
//           <Swiper
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             direction="vertical"
//             pagination={{ clickable: true }}
//             modules={[Pagination]}
//             allowTouchMove={true}
//             className="mySwiper h-screen [&_>.swiper-pagination]:left-0! [&_>.swiper-pagination]:right-[unset]! [&_.swiper-pagination-bullet]:bg-white/40! [&_.swiper-pagination-bullet]:w-7! [&_.swiper-pagination-bullet]:h-0.5! [&_.swiper-pagination-bullet]:rounded-full! [&_.swiper-pagination-bullet]:mb-3.75! [&_.swiper-pagination-bullet]:mt-0! [&_.swiper-pagination-bullet]:transition-width! [&_.swiper-pagination-bullet]:duration-300! [&_.swiper-pagination-bullet-active]:bg-accent! [&_.swiper-pagination-bullet-active]:w-13.25!"
//           >
//             {productSlides.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <div className="ml-24 flex items-center gap-15 h-screen">
//                   <Image
//                     src={slide.image.src}
//                     alt={slide.image.alt}
//                     width={slide.image.width}
//                     height={slide.image.height}
//                   />
//                   <p className="text-white/80 text-2xl">{slide.description}</p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetailsSlider;
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productSlides = [
  {
    image: {
      src: "/product-slides-images/1.png",
      width: 292,
      height: 536,
      alt: "",
    },
    description:
      "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
  },
  {
    image: {
      src: "/product-slides-images/1.png",
      width: 292,
      height: 536,
      alt: "",
    },
    description:
      "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
  },
  {
    image: {
      src: "/product-slides-images/1.png",
      width: 292,
      height: 536,
      alt: "",
    },
    description:
      "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
  },
  {
    image: {
      src: "/product-slides-images/1.png",
      width: 292,
      height: 536,
      alt: "",
    },
    description:
      "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
  },
  {
    image: {
      src: "/product-slides-images/1.png",
      width: 292,
      height: 536,
      alt: "",
    },
    description:
      "Built with a ruggedized chassis and industrial-grade components, it is designed to withstand harsh field conditions including vibration, dust, heat, and continuous daily operation.",
  },
];

const SCROLL_PER_SLIDE = 800;

const ProductDetailsSlider = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const slidesWrapperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const slidesWrapper = slidesWrapperRef.current;
    if (!section || !slidesWrapper) return;

    const totalSlides = productSlides.length;
    const totalScrollLength = SCROLL_PER_SLIDE * (totalSlides - 1);

    const ctx = gsap.context(() => {
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        gsap.set(slide, { y: i === 0 ? "0vh" : "100vh" });
      });

      const tl = gsap.timeline({ paused: true });

      productSlides.forEach((_, i) => {
        if (i === 0) return;
        tl.fromTo(
          slideRefs.current[i],
          { y: "100vh" },
          { y: "0vh", duration: 1, ease: "none" },
          i - 1,
        );
        tl.to(
          slideRefs.current[i - 1],
          { y: "-100vh", duration: 1, ease: "none" },
          i - 1,
        );
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalScrollLength}`,
        pin: true,
        anticipatePin: 1,
        refreshPriority: 1,
        snap: {
          snapTo: 1 / (totalSlides - 1),
          duration: { min: 0.3, max: 0.6 },
          delay: 0.05,
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          tl.progress(self.progress);
          const index = Math.min(
            totalSlides - 1,
            Math.round(self.progress * (totalSlides - 1)),
          );
          if (index !== activeIndexRef.current) {
            activeIndexRef.current = index;
            setActiveIndex(index);
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const goToSlide = (index: number) => {
    const totalSlides = productSlides.length;
    const st = ScrollTrigger.getAll().find(
      (t) => t.vars.trigger === sectionRef.current,
    );
    if (!st) return;

    const targetProgress = index / (totalSlides - 1);
    const scrollStart = st.start as number;
    const scrollEnd = st.end as number;
    const targetScrollY =
      scrollStart + (scrollEnd - scrollStart) * targetProgress;

    setActiveIndex(index);
    activeIndexRef.current = index;

    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-secondary h-dvh overflow-hidden relative"
    >
      <div className="hidden md:flex absolute 2xl:left-32 xl:left-20 md:left-10 top-1/2 -translate-y-1/2 z-20 flex-col gap-3">
        {productSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === activeIndex ? "53px" : "28px",
              height: "2px",
              backgroundColor:
                index === activeIndex
                  ? "var(--color-accent, #fff)"
                  : "rgba(255,255,255,0.4)",
              border: "none",
              padding: 0,
              borderRadius: "9999px",
              cursor: "pointer",
              transition: "width 300ms ease, background-color 300ms ease",
            }}
          />
        ))}
      </div>

      <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-row gap-3">
        {productSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              height: index === activeIndex ? "8px" : "8px",
              width: index === activeIndex ? "24px" : "8px",
              backgroundColor:
                index === activeIndex
                  ? "var(--color-accent, #fff)"
                  : "rgba(255,255,255,0.4)",
              border: "none",
              padding: 0,
              borderRadius: "9999px",
              cursor: "pointer",
              transition: "width 300ms ease, background-color 300ms ease",
            }}
          />
        ))}
      </div>

      <div ref={slidesWrapperRef} className="relative w-full h-full">
        {productSlides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="
              absolute inset-0 flex items-center justify-center
              flex-col md:flex-row
              gap-8 md:gap-15
              px-6 md:px-0
              md:pl-32 xl:pl-40 2xl:pl-48
            "
          >
            <div className="flex-shrink-0">
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                width={slide.image.width}
                height={slide.image.height}
                className="
                  w-auto
                  h-48 sm:h-64 md:h-80 lg:h-[536px]
                  object-contain
                "
              />
            </div>
            <p className="text-white/80 text-base sm:text-lg lg:text-2xl max-w-xs sm:max-w-sm lg:max-w-173 text-center md:text-left">
              {slide.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetailsSlider;
