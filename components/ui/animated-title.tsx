"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({
  title,
  containerClass,
}: {
  title: string;
  containerClass?: string;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context to manage the animation
    const ctx = gsap.context(() => {
      // Define the timeline for the title animation
      const titleAnimation = gsap.timeline({
        // Configure the scroll trigger for the animation
        scrollTrigger: {
          trigger: containerRef.current, // The element that triggers the animation
          start: "100 bottom", // Animation starts when the element is 100% from the bottom of the viewport
          end: "center bottom", // Animation ends when the element is at the center of the viewport
          toggleActions: "play none none reverse", // Controls the animation's behavior on scroll
        },
      });

      // Define the animation for each word in the title
      titleAnimation.to(
        ".animated-word", // Target elements with the class 'animated-word'
        {
          opacity: 1, // Make the words visible
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)", // Reset any initial transformations
          ease: "power2.inOut", // Easing function for the animation
          stagger: 0.02, // Stagger the animation for each word
        },
        0 // Start the animation at the beginning of the timeline
      );
    }, containerRef);

    // Clean up the animation context on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
