import Pill from "@/components/ui/Pill";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";

const DockCore = () => {
  const features = [{ icons: "", title: "", desc: "" }];
  return (
    <section className=" py-37.5 relative z-20">
      <div className="container">
        <Pill textContent="CONNECT. DEPLOY. MISSION-READY" />
        <div className="grid grid-cols-2 gap-15 pt-7.5 pb-15">
          <h2 className="text-3xl text-white">
            <TextReveal>
              Meet <span className="text-accent">DOCK-CORE</span>
            </TextReveal>
          </h2>
          <p className="text-white/80 text-body md:max-w-149">
            DOCK-CORE is CSI’s proprietary device readiness ecosystem engineered
            to eliminate cable chaos and transform how organizations{" "}
            <span className="text-accent">dock, secure, charge,</span> and
            <span className="text-accent"> deploy</span> mission-critical
            devices.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <Image
            src={"/dock-core.png"}
            width={552}
            height={658}
            alt="DOCK-CORE"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary py-21.5 px-9 [corner-shape:bevel] rounded-[32px] flex flex-col gap-4"></div>
            <div className="bg-secondary py-21.5 px-9 [corner-shape:bevel] rounded-[32px]"></div>
            <div className="bg-secondary py-21.5 px-9 [corner-shape:bevel] rounded-[32px]"></div>
            <div className="bg-secondary py-21.5 px-9 [corner-shape:bevel] rounded-[32px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DockCore;
