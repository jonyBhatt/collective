import Link from "next/link";
import { NavbarItem } from "./navbar-list";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className="text-5xl font-Dm-Mono font-bold">Collective</span>
      </Link>
      <NavbarItem items={links} />
      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l border-b-0 border-t-0 border-r-0 px-12 h-full rounded-none bg-white  hover:bg-orange-400/45 transition-colors text-lg"
        >
          Log In
        </Button>
        <Button
          variant="secondary"
          className="border-l border-b-0 border-t-0 border-r-0 px-12 h-full rounded-none bg-black text-white  hover:bg-orange-400/45 hover:text-black transition-colors text-lg"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};
