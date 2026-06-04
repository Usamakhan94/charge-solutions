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
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      // Track only this component's triggers — never touch other page triggers
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

        // Only reset cards this component owns
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
    <div className="flex flex-col gap-14.75 mt-20" ref={containerRef}>
      {products.map((product, i) => (
        <div
          key={i}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="sticky top-10"
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
            className={`bg-secondary p-25 flex ${i % 2 == 0 ? "flex-row" : "flex-row-reverse"} items-center justify-between gap-16 rounded-tl-[64px] [corner-shape:bevel]`}
          >
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-7.5">
                <h3 className="text-xl text-white">
                  <span className="text-accent">0{i + 1}</span> {product.title}
                </h3>
                <p className="text-body text-white/60">{product.desc}</p>
              </div>

              <div className="border-t border-white/20 pt-12.5 flex flex-col gap-5">
                {product.features.map((feat) => (
                  <div
                    key={feat.label}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/60 font-sans uppercase text-body leading-none">
                      {feat.label}
                    </span>
                    <span className="text-white font-sans font-medium uppercase text-body leading-none">
                      {feat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#D9D9D9] p-11.75 relative isolate min-w-md flex justify-center items-center h-full min-h-113.25">
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
