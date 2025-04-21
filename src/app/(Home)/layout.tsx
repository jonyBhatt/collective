import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col min-h-dvh">
      <Navbar />
      {children}
    </section>
  );
}
