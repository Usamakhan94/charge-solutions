import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  const socialLinks = [
    { title: "", link: "#", icon: <FaFacebook /> },
    { title: "", link: "#", icon: <FaInstagram /> },
    { title: "", link: "#", icon: <FaLinkedin /> },
  ];
  const productLine = [
    { title: "CSI 2000", link: "#" },
    { title: "CSI 2001", link: "#" },
    { title: "CSI 2002", link: "#" },
    { title: "CSI 2003", link: "#" },
    { title: "CSI 2004", link: "#" },
  ];
  const footerMenu = [
    {
      title: "Company",
      children: [
        { title: "About us", link: "#" },
        { title: "Products", link: "#" },
        { title: "FAQ", link: "#" },
        { title: "Blog", link: "#" },
        { title: "Contact", link: "#" },
      ],
    },
    {
      title: "Explore",
      children: [
        { title: "Home", link: "#" },
        { title: "My Account", link: "#" },
        { title: "Sales Agent Portal", link: "#" },
      ],
    },
    {
      title: "Legal",
      children: [
        { title: "Terms & Conditions", link: "#" },
        { title: "Privacy Policy", link: "#" },
      ],
    },
    {
      title: "Contact",
      children: [
        { title: "+1 234 567890", link: "#" },
        { title: "hello@chargesolutionsinc.com", link: "#" },
        { title: "NYC, USA", link: "#" },
      ],
    },
  ];
  return (
    <footer className="bg-background">
      <div className="container">
        <div className="flex flex-col gap-10 pt-15 pb-15 px-4 border-t border-white/10">
          <div className="flex justify-between md:flex-row flex-col gap-4 ">
            <div className="flex flex-col md:gap-10 gap-4">
              <Link href="/">
                <Image src={"logo.svg"} alt="Logo" width={209} height={43.25} />
              </Link>
              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <Link
                    key={index + 1}
                    className="text-white w-11.5 h-11.5 rounded-[8px] border border-white/8 flex justify-center items-center [&_svg]:w-full [&_svg]:h-full p-3.5 relative isolate overflow-hidden group"
                    href={item.link}
                  >
                    <div className="absolute w-full h-full top-0 left-0 group-hover:-translate-x-full transition-transform bg-linear-150 from-[rgba(255,255,255,0.58)] to-transparent opacity-[0.45]" />
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
            <form className="flex flex-col md:gap-6.75 gap-4 md:min-w-108">
              <p className="text-white sm:text-[26px] text-lg leading-none">
                Subscribe to our Newsletter
              </p>
              <label className="relative isolate bg-secondary sm:h-18 h-14 flex p-2.5 ">
                <Input
                  type="email"
                  className="text-white rounded-none shadow-none outline-0 border-0! focus-visible:border-0! focus-visible:ring-0! h-full w-full"
                />
                <Button className="bg-white" variant={"ghost"}>
                  Submit
                </Button>
              </label>
            </form>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap gap-4 max-w-172.75">
              {productLine.map((item, index) => (
                <Link
                  key={index + 1}
                  href={item.link}
                  className="md:py-3.75 py-2.5 md:px-6.25 px-5 text-white md:text-body text-md bg-secondary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="md:flex grid sm:grid-cols-2 items-start justify-between gap-4">
              {footerMenu.map((item, index) => (
                <div key={index + 1}>
                  <h6 className="text-white text-body font-normal! mb-5">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-3">
                    {item.children.map((childItem, index) => (
                      <li key={childItem.title}>
                        <Link
                          className="text-white/60 hover:text-accent/60 lg:text-body text-md"
                          href={childItem.link}
                        >
                          {childItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-radial from-[#5B901E] to-[#86CD33] py-3.75 text-center text-white sm:text-body text-md leading-none">
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
