import React from "react";

import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Hero />
      <About />
    </main>
  );
}
