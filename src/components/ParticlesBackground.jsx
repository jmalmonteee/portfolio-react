// src/components/ParticlesBackground.jsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // detect <html class="dark">
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const update = () => setIsDark(root.classList.contains("dark"));

    const obs = new MutationObserver(update);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });

    update();
    return () => obs.disconnect();
  }, []);

  const options = useMemo(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 640px)").matches;

    const color = "#f0a12b";

    return {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: false,

      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: ["repulse"] }, // only repulse on hover
          onClick: { enable: true, mode: ["repulse"] }, // remove push
          resize: true,
        },
        modes: {
          repulse: {
            distance: isMobile ? 110 : 140,
            duration: 0.75,
            speed: 0.1,
          },
        },
      },

      particles: {
        number: {
          value: isMobile ? 25 : 45,
          density: { enable: true, area: 900 },
        },
        color: { value: color },

        links: {
          enable: true,
          color,
          distance: 165,
          opacity: isDark ? 0.65 : 0.45,
          width: isDark ? 1.35 : 1.2,
        },

        move: {
          enable: true,
          speed: isMobile ? 0.45 : 0.75,
          direction: "none",
          outModes: { default: "out" },
        },

        opacity: { value: isDark ? 0.7 : 0.45 },
        size: { value: { min: 1.6, max: isDark ? 3.8 : 3.5 } },
        shape: { type: "circle" },
        collisions: { enable: false },
      },
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        key={isDark ? "dark" : "light"}
        id={`tsparticles-${isDark ? "dark" : "light"}`}
        init={particlesInit}
        options={options}
        className="h-full w-full"
      />
    </div>
  );
}