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
    <section className=" py-37.5 relative z-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-15">
          <div className="flex flex-col gap-7.5">
            <Pill textContent="WHO WE SERVE" />
            <h2 className="text-3xl text-white leading-none">
              <TextReveal>
                Mission-Ready <br />
                Across <span className="text-accent"> Industries</span>
              </TextReveal>
            </h2>
            <p className="text-white/80 text-body md:max-w-149">
              From military deployment and federal operations to enterprise
              infrastructure, <span className="text-accent">DOCK-CORE</span>{" "}
              systems deliver secure, mission-ready device operations in the
              world’s most demanding environments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index + 1}
                className="bg-secondary py-21.5 px-9 [corner-shape:bevel] rounded-[0px] hover:rounded-[40px] flex flex-col gap-4 transition-all"
              >
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

export default Mission;
