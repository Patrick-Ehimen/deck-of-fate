import React from "react";

import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Features />
    </main>
  );
}
