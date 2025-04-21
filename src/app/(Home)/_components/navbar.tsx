import Link from "next/link";
import { NavbarItem } from "./navbar-list";

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
    </nav>
  );
};
