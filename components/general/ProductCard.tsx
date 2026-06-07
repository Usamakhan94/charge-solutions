"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface ProductFeature {
  label: string;
  value: string;
}

export interface Product {
  title: string;
  desc: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  datasheet: string;
  features: ProductFeature[];
}

interface ProductCardProps {
  products: Product[];
}

export default function ProductCard({ products }: ProductCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (window.innerWidth <= 1023) return;
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const ownTriggers: ScrollTrigger[] = [];

      function killOwnTriggers() {
        ownTriggers.forEach((t) => t.kill());
        ownTriggers.length = 0;
      }

      function buildTriggers() {
        killOwnTriggers();

        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;

          gsap.set(card, { scale: 1, filter: "blur(0px)" });

          const st = ScrollTrigger.create({
            trigger: card,
            start: "center 40%",
            end: "200% center",
            scrub: true,
            animation: gsap.to(card, {
              scale: 0.8,
              filter: "blur(5px)",
              immediateRender: false,
            }),
          });

          ownTriggers.push(st);
        });
      }

      buildTriggers();

      let resizeTimeout: ReturnType<typeof setTimeout>;

      const onResize = () => {
        clearTimeout(resizeTimeout);

        killOwnTriggers();
        cards.forEach((card) => {
          gsap.set(card, { scale: 1, filter: "blur(0px)" });
        });

        resizeTimeout = setTimeout(() => {
          window.scrollTo(0, 0);
          buildTriggers();
          ScrollTrigger.refresh();
        }, 200);
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        clearTimeout(resizeTimeout);
        killOwnTriggers();
      };
    },
    { scope: containerRef, dependencies: [products.length] },
  );

  return (
    <div
      className="flex flex-col sm:gap-14.75 gap-8 sm:mt-20 mt-10"
      ref={containerRef}
    >
      {products.map((product, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="lg:sticky top-10"
          style={{
            zIndex: i + 1,
            willChange: "transform, filter",
            transformStyle: "preserve-3d",
            filter: "blur(0px)",
            transformOrigin: "center center",
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className={`bg-secondary 2xl:p-25 xl:p-10 sm:p-14 p-6 pt-8 flex ${i % 2 == 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"} items-center justify-between lg:gap-16 gap-6 sm:rounded-tl-[64px] rounded-tl-[42px] [corner-shape:bevel]`}
          >
            <div className="flex flex-col xl:gap-20 lg:gap-10 gap-5">
              <div className="flex flex-col lg:gap-7.5 gap-3">
                <h3 className="lg:text-xl text-[1.5625rem] text-white">
                  <span className="text-accent">0{i + 1}</span> {product.title}
                </h3>
                <p className="sm:text-body text-md text-white/60">
                  {product.desc}
                </p>
              </div>

              <div className="border-t border-white/20 lg:pt-12.5 pt-6 flex flex-col sm:gap-5 gap-3">
                {product.features.map((feat) => (
                  <div
                    key={feat.label}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/60 font-sans uppercase sm:text-body text-sm leading-none">
                      {feat.label}
                    </span>
                    <span className="text-white font-sans font-medium uppercase sm:text-body text-sm leading-none">
                      {feat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#D9D9D9] xl:p-11.75 p-4 relative isolate xl:min-w-md md:min-w-[320px] min-w-full flex justify-center items-center h-full min-h-113.25">
              <Image
                src={`/product-line/${product.image.src}`}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
              />
              <Button
                className="absolute bottom-0 left-0 w-full uppercase"
                asChild
              >
                <a href={product.datasheet}>View datasheet</a>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
