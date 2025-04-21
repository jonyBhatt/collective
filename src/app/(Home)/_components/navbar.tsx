import Link from "next/link";
import { NavbarItem } from "./navbar-list";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

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
        <span className="lg:text-5xl text-3xl tablet-screen-font-size font-Dm-Mono font-bold">
          Collective
        </span>
      </Link>
      <NavbarItem items={links} />
      <div className="hidden lg:flex tablet-screen-nav-button">
        <Button
          variant="secondary"
          className="border-l border-b-0 border-t-0 border-r-0 px-12 h-full rounded-none bg-white  hover:bg-orange-400/45 transition-colors text-lg"
        >
          <Link href="/sign-in">Log In</Link>
        </Button>
        <Button
          variant="secondary"
          className="border-l border-b-0 border-t-0 border-r-0 px-12 h-full rounded-none bg-black text-white  hover:bg-orange-400/45 hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
      {/** Mobile menu */}
      <div className="flex lg:hidden items-center pr-8">
        <MobileMenu items={links} />
      </div>
    </nav>
  );
};
