import {
  BranchIcon,
  ChargeIcon,
  PhoneIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import Pill from "@/components/ui/Pill";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";

const DockCore = () => {
  const features = [
    {
      icons: <PhoneIcon />,
      title: "Dock",
      desc: "Precision-fit modular docking that organizes devices instantly.",
    },
    {
      icons: <ShieldIcon />,
      title: "secure",
      desc: "Integrated locking systems protect assets and control access.",
    },
    {
      icons: <ChargeIcon />,
      title: "charge",
      desc: "Reliable power delivery ensures devices stay charged and ready",
    },
    {
      icons: <BranchIcon />,
      title: "Deploy",
      desc: "Mission-ready, secured, and fully charged for anything!",
    },
  ];
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
        <div className="grid grid-cols-2 gap-15">
          <Image
            src={"/dock-core.png"}
            width={552}
            height={658}
            alt="DOCK-CORE"
          />
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index + 1}
                className=" relative isolate overflow-hidden bg-secondary group py-21.5 px-9 [corner-shape:bevel] rounded-[40px] flex flex-col gap-4 transition-all"
              >
                <div className="absolute isolate -top-70 group-hover:scale-100 scale-0 transition-transform duration-500 left-1/2 -translate-x-1/2 w-full h-137.5 -z-10 will-change-transform">
                  <div className="absolute max-w-[50%] w-full h-137.5 left-1/2 -translate-x-1/2 bg-radial from-[#019A4A] via-[#8BC34A] to-[#05080B00] rounded-[80%] blur-[150px] -z-30 opacity-60 will-change-transform" />
                  <div className="absolute max-w-[30%] w-full h-25 left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 bg-[#FFFFFF33] rounded-[80%] blur-[100px] -z-20 will-change-transform" />
                  <div className="absolute max-w-[25%] w-full h-5 left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 bg-white rounded-[80%] blur-[10px] -z-10 will-change-transform" />
                </div>
                {feature.icons}
                <h5 className="text-lg uppercase text-white leading-none">
                  {feature.title}
                </h5>
                <p className="text-white/60 text-body">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DockCore;
