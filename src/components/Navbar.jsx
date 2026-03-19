// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Sun, Moon } from "lucide-react";

import LogoLight from "../assets/Logo.png";
import LogoDark from "../assets/InvertedLogo.png";

const LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const STORAGE_KEY = "theme"; // "light" | "dark"

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;
  return "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);

  const TRACK_W = 74;
  const TRACK_H = 34;
  const INSET = 2;
  const KNOB = 30;
  const INNER_W = TRACK_W - INSET * 2;
  const MAX_X = INNER_W - KNOB;

  const x = useMotionValue(0);
  const isDark = theme === "dark";

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, isDark]);

  useEffect(() => {
    const to = isDark ? MAX_X : 0;
    const controls = animate(x, to, {
      type: "spring",
      stiffness: 650,
      damping: 55,
      restDelta: 0.5,
      restSpeed: 0.5,
      onUpdate: (v) => {
        const clamped = Math.min(Math.max(v, 0), MAX_X);
        if (clamped !== v) x.set(clamped);
      },
    });
    return () => controls.stop();
  }, [isDark, MAX_X, x]);

  const logoSrc = isDark ? LogoDark : LogoLight;

  // ✅ Smooth 1200ms scroll function
  const goTo = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const start = window.pageYOffset;
    const end = el.getBoundingClientRect().top + start - 80; // offset for navbar
    const duration = 1200;
    let startTime = null;

    function scroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress; // easeInOut

      window.scrollTo(0, start + (end - start) * ease);
      if (timeElapsed < duration) requestAnimationFrame(scroll);
    }
    requestAnimationFrame(scroll);
  };

  const setLight = () => setTheme("light");
  const setDark = () => setTheme("dark");
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const onDragEnd = () => {
    const v = x.get();
    if (v > MAX_X / 2) setDark();
    else setLight();
  };

  const pillLink =
    "relative px-3 py-2 text-[14px] font-medium tracking-wide " +
    "text-black/70 hover:text-[#f0a12b] cursor-pointer " +
    "dark:text-white/75 dark:hover:text-[#f0a12b] " +
    "transition-colors";

  return (
    <header className="fixed inset-x-0 top-4 z-[200] px-3 sm:px-6">
      <div className="mx-auto w-full max-w-[1100px]">
        <div
          className="
            flex items-center justify-between gap-4
            rounded-full px-4 py-3 sm:px-5
            border border-black/10
            bg-white/55 backdrop-blur-xl
            shadow-[0_10px_35px_rgba(0,0,0,0.10)]
            dark:border-white/10
            dark:bg-white/10
            dark:shadow-[0_14px_45px_rgba(0,0,0,0.45)]
          "
        >
          <button
            type="button"
            onClick={() => goTo("#home")}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logoSrc}
              alt="Logo"
              className="h-8 w-auto sm:h-9 object-contain"
              draggable="false"
            />
          </button>

          <nav className="hidden sm:flex items-center gap-3">
            {LINKS.map((l) => (
              <button
                key={l.label}
                type="button"
                onClick={() => goTo(l.href)}
                className={pillLink}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="sm:hidden flex items-center gap-2">
              {LINKS.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => goTo(l.href)}
                  className="
                    px-3 py-2 text-[13px] font-medium
                    text-black/70 hover:text-[#f0a12b]
                    dark:text-white/70 dark:hover:text-[#f0a12b]
                    transition-colors
                    cursor-pointer
                  "
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              aria-pressed={isDark}
              className="
                relative h-[34px] w-[74px] rounded-full p-[2px]
                border border-black/10 bg-white shadow-inner
                overflow-hidden
                dark:border-white/10 dark:bg-[#0A0F1F]
              "
            >
              <div className="absolute inset-[2px] rounded-full bg-black/5 dark:bg-white/10" />
              <motion.div
                className="
                  relative z-10 h-[30px] w-[30px] rounded-full
                  grid place-items-center -mt-0.5
                  bg-white
                  shadow-[0_8px_18px_rgba(0,0,0,0.18)]
                  border border-black/10
                  dark:bg-[#0A0F1F]
                  dark:border-white/10
                  dark:shadow-[0_10px_22px_rgba(0,0,0,0.55)]
                "
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: MAX_X }}
                dragElastic={0}
                dragMomentum={false}
                onDragEnd={onDragEnd}
                onDrag={() => {
                  const v = x.get();
                  const clamped = Math.min(Math.max(v, 0), MAX_X);
                  if (clamped !== v) x.set(clamped);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle();
                }}
              >
                {isDark ? (
                  <Moon className="h-4 w-4 text-[#f0a12b]" />
                ) : (
                  <Sun className="h-4 w-4 text-[#f0a12b]" />
                )}
              </motion.div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-[10px]">
                <Sun className="h-4 w-4 text-[#f0a12b]/70" />
                <Moon className="h-4 w-4 text-[#f0a12b]/70" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}