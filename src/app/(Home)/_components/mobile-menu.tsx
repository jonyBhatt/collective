"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface NavbarItems {
  href: string;
  name: ReactNode;
}

interface Props {
  items: NavbarItems[];
}

export const MobileMenu = ({ items }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <Menu size={30} />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-2xl font-Dm-Sans">Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2 flex-1/2">
          {items.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className="w-full p-4 hover:bg-orange-500/30 hover:text-black flex items-center text-base font-medium font-Dm-Sans"
            >
              {item.name}
            </Link>
          ))}
        </ScrollArea>
        <div className="border-t">
          <Link
            href="/sign-in"
            className="w-full p-4 hover:bg-orange-500/30 hover:text-black flex items-center text-base font-medium font-Dm-Sans"
          >
            Log In
          </Link>
          <Link
            href="/sign-in"
            className="w-full p-4 hover:bg-orange-500/30 hover:text-black flex items-center text-base font-medium font-Dm-Sans"
          >
            Get Started
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
