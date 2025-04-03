"use client";

import { Menu } from "@/components/Menu";
import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";
import { LocationMap } from "@/components/Map";
import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Menu />
      <Banner />
      <Services />
      <LocationMap />
      <AboutUs />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
