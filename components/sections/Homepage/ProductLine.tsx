import ProductCard from "@/components/general/ProductCard";
import { Button } from "@/components/ui/button";
import Pill from "@/components/ui/Pill";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";

const ProductLine = () => {
  const products = [
    {
      title: "CSI 2000",
      desc: "For any POGO-enabled tablet or laptop. Slide in, click, done. No cables. No fumbling. The cabinet handles power and network the moment the device docks. Retro-Fit Kits keep your investment alive when you upgrade your fleet.",
      image: { src: "CSI-2000.png", width: 188, height: 358, alt: "CSI 2000" },
      datasheet: "",
      features: [
        { label: "capacity", value: "7-8 tablets" },
        { label: "access", value: "keypad / rfid" },
        { label: "network", value: "cisco switch opt." },
        { label: "daisy-chain", value: "yes - side lan" },
        { label: "retro-fit", value: "available" },
      ],
    },
    {
      title: "CSI Flex 11 Core",
      desc: "IT-grade drawer cabinets that scale from 11 to 33 devices under one network switch. Pre-wired with USB-C PD, AC, and Cat6e in every drawer. Gang units side by side as your fleet grows. The 3201 rolls — 32+ tablets, casters, LED battery indicators.",
      image: {
        src: "CSI-Flex-11-Core.png",
        width: 214,
        height: 358,
        alt: "CSI Flex 11 Core",
      },
      datasheet: "",
      features: [
        { label: "scale", value: "11-33 drawers" },
        { label: "per drawer", value: "usb-c . ac . rj45" },
        { label: "cooling", value: "thermal auto-fans" },
        { label: "gangable", value: "side-by-side" },
        { label: "compliance", value: "taa . made in usa" },
      ],
    },
    {
      title: "CSI ArmorCore",
      desc: "Take the command post anywhere. 10 POGO-connected tablets. One master laptop. Battery-powered. Fully networked. Zero cables inside. The ArmorCore is what you grab when there's no wall outlet and no time to waste. Stackable for multi-unit ops.",
      image: {
        src: "CSI-ArmorCore.png",
        width: 402,
        height: 194,
        alt: "CSI ArmorCore",
      },
      datasheet: "",
      features: [
        { label: "CAPACITY", value: "10 tablets + laptops" },
        { label: "power", value: "battery backup" },
        { label: "entry", value: "electronic keypad" },
        { label: "cabling", value: "zero infernal" },
        { label: "stack", value: "linkable units" },
      ],
    },
  ];
  return (
    <section className=" md:pb-37.5 sm:pb-20 pb-10 px-4">
      <div className="container">
        <Pill
          textContent="THREE PLATFORMS. EVERY ENVIRONMENT"
          alignment="center"
        />
        <h2 className="sm:text-3xl text-2xl text-center pt-7 text-white">
          <TextReveal>
            Our <span className="text-accent">Product Line</span>
          </TextReveal>
        </h2>
        <ProductCard products={products} />
      </div>
    </section>
  );
};

export default ProductLine;
