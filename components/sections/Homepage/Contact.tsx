import ContactForm from "@/components/general/ContactForm";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="xl:py-36.5 py-20 px-4 bg-secondary">
      <div className="container grid lg:grid-cols-2 xl:gap-10 lg:gap-0 gap-6  ">
        <div className="flex flex-col xl:gap-14.75 gap-6">
          <div className="flex flex-col xl:gap-6.25 gap-3">
            <h2 className="xl:text-3xl text-xl text-white">
              <TextReveal>
                Ready To <span className="text-accent">Eliminate</span> Charging
                Chaos?
              </TextReveal>
            </h2>
            <p className="text-white/80 text-body font-medium max-w-123.5">
              Tell us about your fleet, your environment, and your timeline. CSI
              will design a solution around your exact requirements.
            </p>
          </div>
          <div className="flex flex-col gap-5 pl-5 border-l border-white/40 lg:max-w-124.25">
            <p className="text-white/40 text-md leading-tight">
              “After months of operating in harsh field conditions, the CSI 2000
              proved itself to be one of the most dependable pieces of equipment
              in our deployment setup. From dusty transport environments to long
              overnight operations, the system handled constant use without a
              single connectivity or charging failure. What stood out most was
              how quickly devices were ready to redeploy — fully charged,
              synced, and connected the moment we pulled them from the cabinet.
              The rugged construction feels purpose-built for military
              operations, with secure docking, reinforced hardware, and reliable
              performance under pressure. In environments where downtime is not
              an option, the CSI 2000 delivered the consistency and durability
              our team depended on every day.”
            </p>
            <div className="flex items-center gap-2.5">
              <Image src={"/user.png"} width={37} height={37} alt="User" />
              <div className="flex flex-col gap-1">
                <h5 className="text-white font-sans font-regular text-md leading-none">
                  Anonymous
                </h5>
                <h5 className="text-white/60 font-sans font-extralight text-md leading-none">
                  Military
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
