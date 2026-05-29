import { Button } from "@/components/ui/button";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-50">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-16">
          <div className="flex flex-col gap-7.5">
            <div className="flex flex-col gap-5">
              <h1 className=" text-3xl text-white ">
                <TextReveal>
                  <>
                    We <span className="text-accent">Solve</span> Complex Cable
                    <span className="text-accent"> Challenges</span>
                  </>
                </TextReveal>
              </h1>
              <p className="text-body text-white/80 max-w-123.75">
                From cable chaos and lost chargers to secure, mission-ready
                DOCK-CORE systems built for high-demand environments.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/package.png"}
              width={546}
              height={506}
              alt="Package"
              className="ml-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
