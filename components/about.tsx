"use client";

import React from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { AboutImg } from "@/public/img";
import AnimatedTitle from "./ui/animated-title";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    // Create a GSAP timeline for the clip animation
    const clipAnimation = gsap.timeline({
      // Configure the scroll trigger for the animation
      scrollTrigger: {
        trigger: "#clip", // The element that triggers the animation
        start: "center center", // Animation starts when the element is at the center of the viewport
        end: "+=800 center", // Animation ends 800px after the element is at the center of the viewport
        scrub: 0.5, // Smooth scrubbing for the animation
        pin: true, // Pin the element to the viewport during the animation
        pinSpacing: true, // Adjust the pinning to account for spacing
      },
    });

    // Define the animation for the mask clip path
    clipAnimation.to(".mask-clip-path", {
      width: "100vw", // Set the width to 100% of the viewport width
      height: "100vh", // Set the height to 100% of the viewport height
      borderRadius: 0, // Remove border radius for a sharp edge
    });
  });

  return (
    <main id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <Image
            src={AboutImg}
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
