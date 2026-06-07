import {
  AeroplaneIcon,
  EnterpriseIcon,
  GlobeIcon,
  MilitaryBadgeIcon,
} from "@/components/ui/icons";
import Pill from "@/components/ui/Pill";
import TextReveal from "@/components/ui/TextReveal";

const Mission = () => {
  const features = [
    {
      icons: <GlobeIcon />,
      title: "Federal",
      desc: "Precision-fit modular docking that organizes devices instantly.",
    },
    {
      icons: <MilitaryBadgeIcon />,
      title: "Military",
      desc: "Integrated locking systems protect assets and control access.",
    },
    {
      icons: <AeroplaneIcon />,
      title: "aerospace",
      desc: "Reliable power delivery ensures devices stay charged and ready",
    },
    {
      icons: <EnterpriseIcon />,
      title: "enterprise",
      desc: "Mission-ready, secured, and fully charged for anything!",
    },
  ];
  return (
    <section className=" md:py-37.5 sm:py-24 py-10 px-4 relative z-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 lg:gap-15 gap-6 sm:pt-7.5 pb-15">
          <div className="flex flex-col gap-7.5">
            <Pill textContent="WHO WE SERVE" />
            <h2 className="sm:text-3xl text-2xl text-white leading-none">
              <TextReveal>
                Mission - Ready <br />
                Across <span className="text-accent"> Industries</span>
              </TextReveal>
            </h2>
            <p className="text-white/80 sm:text-body text-md md:max-w-149">
              From military deployment and federal operations to enterprise
              infrastructure, <span className="text-accent">DOCK-CORE</span>{" "}
              systems deliver secure, mission-ready device operations in the
              world’s most demanding environments.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index + 1}
                className="relative isolate overflow-hidden bg-secondary group xl:py-21.5 py-12 px-9 [corner-shape:bevel] rounded-[40px] flex flex-col gap-4 transition-all"
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
                <p className="text-white/60 sm:text-body text-md">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
