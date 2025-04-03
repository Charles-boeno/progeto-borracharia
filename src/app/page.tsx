"use client";

import { Menu } from "@/components/Menu";
import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Menu />
      <Banner />
      <Services />
    </main>
  );
}
