import { Button } from "@/components/ui/button";
import TextReveal from "@/components/ui/TextReveal";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="md:py-50 pb-20 pt-32 px-4">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center 2xl:gap-16 gap-8">
          <div className="flex flex-col gap-7.5">
            <div className="flex flex-col gap-5">
              <h1 className=" sm:text-3xl text-2xl text-white ">
                <TextReveal>
                  <>
                    We <span className="text-accent">Solve</span> Complex Cable
                    <span className="text-accent"> Challenges</span>
                  </>
                </TextReveal>
              </h1>
              <p className="sm:text-body text-md text-white/80 max-w-123.75">
                From cable chaos and lost chargers to secure, mission-ready
                DOCK-CORE systems built for high-demand environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">See How It Works</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/package.png"}
              width={546}
              height={506}
              alt="Package"
              className="lg:ml-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
