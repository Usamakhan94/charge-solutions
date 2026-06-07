import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "../ui/icons";

const Header = () => {
  const navLinks = [
    { label: "Products", link: "#" },
    { label: "Customize", link: "#" },
    { label: "Sectors", link: "#" },
  ];
  return (
    <header className="py-7.5 px-4 absolute top-0 left-0 w-full border-b border-white/10 bg-background z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={"logo.svg"} alt="Logo" width={209} height={43.25} />
          </Link>
          <nav className="lg:flex hidden">
            {navLinks.map((item, index) => (
              <Link
                key={index + 1}
                className="text-body md:text-md text-white hover:text-accent uppercase xl:px-10 px-5 leading-none border-white/10 first:border-r last:border-l"
                href={item.link}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            asChild
            className="uppercase lg:flex hidden "
          >
            <Link href="/contact">Talk to Engineering</Link>
          </Button>
          <Sheet>
            <SheetTrigger className="lg:hidden flex text-white border border-accent [&_svg]:w-full [&_svg]:h-full w-9 h-9 p-2 rounded-[4px]">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="bg-background border-l pt-10 border-white/10 [&_button[data-slot=sheet-close]]:hidden gap-0">
              {/* <SheetHeader> */}
              {/* <SheetTitle >Are you absolutely sure?</SheetTitle> */}
              {/* <SheetDescription></SheetDescription> */}

              {/* </SheetHeader> */}
              {navLinks.map((item, index) => (
                <Link
                  key={index + 1}
                  className="text-body md:text-md text-white hover:text-accent uppercase xl:px-10 px-5 leading-none border-white/10 border-b py-5"
                  href={item.link}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                asChild
                className="uppercase mx-2 mt-4 "
              >
                <Link href="/contact">Talk to Engineering</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>  
      </div>
    </header>
  );
};

export default Header;
