"use client";

import { Menu } from "@/components/Menu";
import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";
import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Menu />
      <Banner />
      <Services />
      <Map />
      <AboutUs />
      <Footer />
    </main>
  );
}
