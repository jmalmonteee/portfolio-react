// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 w-full bg-transparent text-black dark:text-white transition-colors duration-500"
    >
      <div className="mx-auto w-full max-w-[900px] px-6 pt-24 sm:pt-28 pb-20 text-center sm:text-left">
        {/* Header */}
        <p className="text-[12px] sm:text-[13px] font-semibold tracking-[0.15em] uppercase text-black/55 dark:text-white/55">
          About Me
        </p>

        <h2 className="mt-2 text-[26px] sm:text-[34px] font-semibold leading-[1.2] tracking-tight">
          Hi, I'm Monty <span className="text-[#f0a12b]">.</span>
        </h2>

        {/* Natural, human-like paragraphs */}
        <p className="mt-6 text-[14px] sm:text-[15px] leading-7 text-black/70 dark:text-white/70">
          I’m a Web Developer and Photo/Video Editor based in the Philippines. I create clean, responsive websites that feel modern and easy to use, and I also produce polished visual content for social media and other digital platforms. I enjoy designing layouts, coding interactive elements, and editing videos and photos in ways that feel smooth and intentional.
        </p>

        <p className="mt-4 text-[14px] sm:text-[15px] leading-7 text-black/70 dark:text-white/70">
          Web development allows me to solve problems with code while keeping aesthetics in mind. I love working with React and Tailwind CSS to build responsive interfaces, implement subtle animations, and ensure that every component looks and behaves exactly how it should. Attention to detail and consistency are important to me, and I always aim for a polished and professional result.
        </p>

        <p className="mt-4 text-[14px] sm:text-[15px] leading-7 text-black/70 dark:text-white/70">
          On the creative side, I enjoy video and photo editing. From crafting social media clips to adjusting colors and fine-tuning visuals, I try to make every piece feel engaging and cohesive. I enjoy experimenting with storytelling, pacing, and visual style to deliver content that stands out.
        </p>

        <p className="mt-4 text-[14px] sm:text-[15px] leading-7 text-black/70 dark:text-white/70">
          I’m always learning new tools and exploring different techniques, whether in development or design. Combining these skills lets me take projects from an idea to a polished, fully-realized product. Above all, I enjoy creating work that feels intentional, functional, and visually appealing.
        </p>
      </div>
    </section>
  );
}