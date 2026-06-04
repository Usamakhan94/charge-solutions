"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useRef, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

const ProductDetailsSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const deltaAccRef = useRef(0);
  const THRESHOLD = 50;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onWheel = (e: WheelEvent) => {
      if (!isHoveringRef.current || !swiperRef.current) return;

      const swiper = swiperRef.current;
      const atStart = swiper.isBeginning && e.deltaY < 0;
      const atEnd = swiper.isEnd && e.deltaY > 0;

      if (atStart || atEnd) {
        deltaAccRef.current = 0;
        return;
      }

      e.preventDefault();

      deltaAccRef.current += e.deltaY;

      if (Math.abs(deltaAccRef.current) >= THRESHOLD) {
        if (deltaAccRef.current > 0) {
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }
        deltaAccRef.current = 0;
      }
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, []);

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

  return (
    <section className="bg-secondary py-40.5">
      <div className="container">
        <div
          ref={wrapperRef}
          onMouseEnter={() => {
            isHoveringRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveringRef.current = false;
            deltaAccRef.current = 0;
          }}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            direction="vertical"
            pagination={{ clickable: true }}
            modules={[Pagination]}
            allowTouchMove={true}
            className="mySwiper h-134 [&_>.swiper-pagination]:left-0! [&_>.swiper-pagination]:right-[unset]! [&_.swiper-pagination-bullet]:bg-white/40! [&_.swiper-pagination-bullet]:w-7! [&_.swiper-pagination-bullet]:h-0.5! [&_.swiper-pagination-bullet]:rounded-full! [&_.swiper-pagination-bullet]:mb-3.75! [&_.swiper-pagination-bullet]:mt-0! [&_.swiper-pagination-bullet]:transition-width! [&_.swiper-pagination-bullet]:duration-300! [&_.swiper-pagination-bullet-active]:bg-accent! [&_.swiper-pagination-bullet-active]:w-13.25!"
          >
            {productSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="ml-24 flex items-center gap-15 h-full">
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    width={slide.image.width}
                    height={slide.image.height}
                  />
                  <p className="text-white/80 text-2xl">{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSlider;
