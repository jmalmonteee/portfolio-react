// src/pages/Home.jsx
import React from "react";

import HeroPic from "../assets/My_Permanent_1x1.jpg";

// ✅ Web Developer Skills icons (from your folders)
import HTMLIcon from "../assets/Skills/Web_Developer_Skills/HTML.png";
import CSSIcon from "../assets/Skills/Web_Developer_Skills/CSS.png";
import JSIcon from "../assets/Skills/Web_Developer_Skills/Javascript.png";
import ReactIcon from "../assets/Skills/Web_Developer_Skills/React.png";
import ViteIcon from "../assets/Skills/Web_Developer_Skills/Vite.png";
import TailwindIcon from "../assets/Skills/Web_Developer_Skills/Tailwind_CSS.png";
import NodeIcon from "../assets/Skills/Web_Developer_Skills/Nodejs.png";
import XDIcon from "../assets/Skills/Web_Developer_Skills/XD.png";
import FigmaIcon from "../assets/Skills/Web_Developer_Skills/Figma.png";
import SourcetreeIcon from "../assets/Skills/Web_Developer_Skills/Sourcetree.png";
import GitIcon from "../assets/Skills/Web_Developer_Skills/GIT.png";

// ✅ Photo and Video Editor Skills icons (add these PNGs later)
import PremiereIcon from "../assets/Skills/Photo_and_Video_Editor_Skills/Adobe_Premiere_Pro.png";
import DavinciIcon from "../assets/Skills/Photo_and_Video_Editor_Skills/DaVinci_Resolve.png";
import CapcutIcon from "../assets/Skills/Photo_and_Video_Editor_Skills/Capcut_Pro.png";
import AfterEffectsIcon from "../assets/Skills/Photo_and_Video_Editor_Skills/Adobe_After_Effects.png";
import HandbrakeIcon from "../assets/Skills/Photo_and_Video_Editor_Skills/HandBrake.png"; // ✅ NEW
import CanvaIcon from "../assets/Skills/Photo_and_Video_Editor_Skills/Canva.png";
import PhotoshopIcon from "../assets/Skills/Photo_and_Video_Editor_Skills/Photoshop.png";

const webDevSkills = [
  { src: HTMLIcon, title: "HTML" },
  { src: CSSIcon, title: "CSS" },
  { src: JSIcon, title: "Javascript" },
  { src: ReactIcon, title: "React" },
  { src: ViteIcon, title: "Vite" },
  { src: TailwindIcon, title: "Tailwind CSS" },
  { src: NodeIcon, title: "Nodejs" },
  { src: XDIcon, title: "XD" },
  { src: FigmaIcon, title: "Figma" },
  { src: SourcetreeIcon, title: "Sourcetree" },
  { src: GitIcon, title: "GIT" },
];

const editorSkills = [
  { src: PremiereIcon, title: "Adobe Premiere Pro" },
  { src: DavinciIcon, title: "Davinci Resolve" },
  { src: CapcutIcon, title: "Capcut Pro" },
  { src: AfterEffectsIcon, title: "Adobe After Effects" },
  { src: HandbrakeIcon, title: "Handbrake" }, // ✅ ADDED HERE
  { src: CanvaIcon, title: "Canva" },
  { src: PhotoshopIcon, title: "Photoshop" },
];

export default function Home() {
  // ✅ Reusable classes (same for both rows)
  const circleClass = `
    group
    h-12 w-12 sm:h-14 sm:w-14
    rounded-full bg-white
    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
    flex items-center justify-center
    dark:bg-white
    dark:shadow-[0_14px_30px_rgba(0,0,0,0.45)]
    transition-transform duration-300 ease-out
    hover:scale-110
    active:scale-105
    will-change-transform
  `;

  const iconClass = `
    h-6 w-6 sm:h-7 sm:w-7 object-contain
    transition-transform duration-300 ease-out
    group-hover:animate-[skillBounce_420ms_ease-out]
  `;

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen w-full bg-transparent text-black dark:text-white transition-colors duration-500"
    >
      <main className="w-full pt-24 sm:pt-28">
        {/* ✅ Same width as navbar (compressed center layout) */}
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="grid min-h-[65vh] items-center gap-10 md:grid-cols-2 md:gap-12">
            {/* LEFT */}
            <div className="text-center md:text-left">
              <h1 className="text-[22px] sm:text-[26px] font-semibold">
                Hi, I'm Monty
              </h1>

              <p className="mx-auto mt-3 max-w-[520px] text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-black/70 dark:text-white/70 md:mx-0">
                A passionate Web Developer, Video editor and <br />
                Photo editor based in the Philippines. 📍
              </p>

              {/* ✅ Open To Work Pill */}
              <div className="mt-6 flex items-center justify-center md:justify-start">
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full px-4 py-2
                    text-[14px] font-medium
                    bg-emerald-500/15 text-emerald-600
                    border border-emerald-500/30
                    dark:bg-emerald-400/10 dark:text-emerald-400 dark:border-emerald-400/30
                    backdrop-blur-sm
                    transition-all duration-300
                  "
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 dark:bg-emerald-400" />
                  </span>
                  Open to work
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src={HeroPic}
                alt="Profile"
                loading="lazy"
                className="
                  morph-blob
                  h-[220px] w-[220px]
                  sm:h-[280px] sm:w-[280px]
                  md:h-[320px] md:w-[320px]
                  lg:h-[360px] lg:w-[360px]
                  border border-[#f0a12b]/80
                  dark:border-white
                  object-cover
                "
              />
            </div>
          </div>

          {/* ✅ SKILLS (2 rows) */}
          <div className="pb-16 sm:pb-20">
            <div className="flex flex-col items-center justify-center gap-8 sm:gap-10">
              {/* Row 1: Web Developer skills */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-[13px] sm:text-[14px] font-semibold">
                    Web Developer skills
                  </span>
                  <span className="h-5 w-px bg-black/50 dark:bg-white/30" />
                </div>

                <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                  {webDevSkills.map((s) => (
                    <li key={s.title} title={s.title} className={circleClass}>
                      <img
                        src={s.src}
                        alt={s.title}
                        className={iconClass}
                        draggable="false"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Row 2: Photo and Video Editor skills */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-[13px] sm:text-[14px] font-semibold">
                    Photo & Video Editor skills
                  </span>
                  <span className="h-5 w-px bg-black/50 dark:bg-white/30" />
                </div>

                <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                  {editorSkills.map((s) => (
                    <li key={s.title} title={s.title} className={circleClass}>
                      <img
                        src={s.src}
                        alt={s.title}
                        className={iconClass}
                        draggable="false"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ✅ Local keyframes for icon bounce */}
          <style>{`
            @keyframes skillBounce {
              0%   { transform: translateY(0) scale(1); }
              35%  { transform: translateY(-4px) scale(1.03); }
              70%  { transform: translateY(1px) scale(1.01); }
              100% { transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      </main>
    </section>
  );
}