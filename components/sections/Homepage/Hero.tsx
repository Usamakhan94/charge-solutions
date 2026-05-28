import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-50">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-16">
          <div>
            <h1 className=" text-3xl text-white capitalize">
              We <span className="text-accent">solve</span> complex cable
              <span className="text-accent"> Challenges</span>
            </h1>
          </div>
          <div>
            <Image
              src={"/package.png"}
              width={546}
              height={506}
              alt="Package"
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
