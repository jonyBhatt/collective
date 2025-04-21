import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 bg-secondary">{children}</main>
      <Footer />
    </section>
  );
}
