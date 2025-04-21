"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavbarItemContainerProps {
  href: string;
  name: ReactNode;
  isActive?: boolean;
}

interface Props {
  items: NavbarItemContainerProps[];
}

const NavbarItemContainer = ({
  isActive,
  href,
  name,
}: NavbarItemContainerProps) => {
  return (
    <Button
      className={`bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg font-Dm-Sans font-medium ${
        isActive && "bg-primary text-white hover:bg-black hover:text-white"
      }`}
      variant="outline"
    >
      <Link href={href}>{name}</Link>
    </Button>
  );
};

export const NavbarItem = ({ items }: Props) => {
  const pathname = usePathname();
  const isActive = (item: NavbarItemContainerProps) => pathname === item.href;
  return (
    <div className="items-center gap-4 hidden lg:flex">
      {items.map((items, i) => (
        <NavbarItemContainer
          key={i}
          href={items.href}
          name={items.name}
          isActive={isActive(items)}
        />
      ))}
    </div>
  );
};
