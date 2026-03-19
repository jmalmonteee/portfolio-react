// src/pages/Work.jsx
import React, { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

/* ---------------- IMAGES ---------------- */
// STELLAR
import stellar1 from "../assets/Websites/stellar1.png";
import stellar2 from "../assets/Websites/stellar2.png";
import stellar3 from "../assets/Websites/stellar3.png";
import stellar4 from "../assets/Websites/stellar4.png";
import stellar5 from "../assets/Websites/stellar5.png";
import stellar6 from "../assets/Websites/stellar6.png";

// ZEPVIAX
import zep1 from "../assets/Websites/zepviax1.png";
import zep2 from "../assets/Websites/zepviax2.png";
import zep3 from "../assets/Websites/zepviax3.png";
import zep4 from "../assets/Websites/zepviax4.png";
import zep5 from "../assets/Websites/zepviax5.png";
import zep6 from "../assets/Websites/zepviax6.png";

// PERSONAL
import per1 from "../assets/Websites/personal1.png";
import per2 from "../assets/Websites/personal2.png";
import per3 from "../assets/Websites/personal3.png";
import per4 from "../assets/Websites/personal4.png";
import per5 from "../assets/Websites/personal5.png";
import per6 from "../assets/Websites/personal6.png";

/* ---------------- PHOTOS ---------------- */
import photo1 from "../assets/Photos/photo1.jpg";
import photo2 from "../assets/Photos/photo2.png";
import photo3 from "../assets/Photos/photo3.jpg";
import photo4 from "../assets/Photos/photo4.mp4";
import photo5 from "../assets/Photos/photo5.jpg";
import photo6 from "../assets/Photos/photo6.mp4";
import photo7 from "../assets/Photos/photo7.mp4";
import photo8 from "../assets/Photos/photo8.jpg";
import photo9 from "../assets/Photos/photo9.png";

/* ---------------- VIDEOS ---------------- */
import realestate1 from "../assets/Videos/realestate1.mp4";
import realestate2 from "../assets/Videos/realestate2.mp4";
import realestate3 from "../assets/Videos/realestate3.mp4";

const STORAGE_LIKES_KEY = "work_likes_v7";

/* ---------------- DATA ---------------- */
const websiteProjects = [
  {
    id: "stellar",
    title: "Stellar Worldwide",
    link: "https://www.stellar-worldwide.com/",
    images: [stellar1, stellar2, stellar3, stellar4, stellar5, stellar6],
    description:
      "Stellar Worldwide is a premium client website that I built with a strong focus on clarity and presentation. I wanted it to feel clean and professional the moment someone lands on it. The layout is simple but intentional, making sure each section is easy to understand without overwhelming the user. I spent time refining spacing, typography, and responsiveness so it works smoothly across different devices. The overall goal was to make it feel modern but still comfortable to browse. This project really helped me improve how I structure real client websites.",
  },
  {
    id: "zepviax",
    title: "Zepviax Wellness",
    link: "https://www.zepviax-wellness.com/",
    images: [zep1, zep2, zep3, zep4, zep5, zep6],
    description:
      "Zepviax Wellness is a landing page project where I focused more on flow and readability. The goal was to guide users naturally from one section to another without confusion. I kept the design soft and clean to match the wellness theme while still making important information stand out. I paid attention to how content is grouped so users don’t feel lost while scrolling. Responsiveness was also important here since most users would likely view it on mobile. This project helped me get better at balancing design and usability at the same time.",
  },
  {
    id: "personal",
    title: "My First React Project",
    link: "#",
    images: [per1, per2, per3, per4, per5, per6],
    description:
      "This was my very first project during my OJT when I was still learning React, Vite, and Tailwind. At that time, I was just trying to understand how everything works together while building something from scratch. I did not get the chance to fully finish this because right after my OJT, I moved straight into working as a Junior Developer. Even though it is incomplete, I decided to include it here because it represents where I started. There were a lot of mistakes and trial and error, but that process helped me improve quickly. Looking back at it now, I am still proud that I managed to build something like this at that stage.",
  },
];

/* ---------------- VIDEOS ---------------- */
const videoItems = [
  // Montage 1-3 (YouTube)
  {
    id: "v1",
    src: "https://www.youtube.com/embed/OOkE3tuNyhQ?autoplay=1&mute=1&loop=1&playlist=OOkE3tuNyhQ",
    label: "Montage Edits",
    initialLikes: 120,
    type: "youtube",
  },
  {
    id: "v2",
    src: "https://www.youtube.com/embed/lf9ufWsD4wg?autoplay=1&mute=1&loop=1&playlist=lf9ufWsD4wg",
    label: "Montage Edits",
    initialLikes: 90,
    type: "youtube",
  },
  {
    id: "v3",
    src: "https://www.youtube.com/embed/o2Pfprue2d4?autoplay=1&mute=1&loop=1&playlist=o2Pfprue2d4",
    label: "Montage Edits",
    initialLikes: 140,
    type: "youtube",
  },
  // Motion Graphics (YouTube)
  {
    id: "v4",
    src: "https://www.youtube.com/embed/RsG2YMnebhw?autoplay=1&mute=1&loop=1&playlist=RsG2YMnebhw",
    label: "Motion Graphics",
    initialLikes: 110,
    type: "youtube",
  },
  // Real Estate 1-3 (local assets)
  { id: "v5", src: realestate1, label: "Real Estate", initialLikes: 200, type: "local" },
  { id: "v6", src: realestate2, label: "Real Estate", initialLikes: 180, type: "local" },
  { id: "v7", src: realestate3, label: "Real Estate", initialLikes: 160, type: "local" },
  // Tutorial (YouTube)
  {
    id: "v8",
    src: "https://www.youtube.com/embed/eFYUP8_anp4?autoplay=1&mute=1&loop=1&playlist=eFYUP8_anp4",
    label: "Tutorial",
    initialLikes: 220,
    type: "youtube",
  },
];

/* ---------------- PHOTOS ---------------- */
const photoItems = [
  { src: photo1, type: "image" },
  { src: photo2, type: "image" },
  { src: photo3, type: "image" },
  { src: photo4, type: "video" },
  { src: photo5, type: "image" },
  { src: photo6, type: "video" },
  { src: photo7, type: "video" },
  { src: photo8, type: "image" },
  { src: photo9, type: "image" },
];

/* ---------------- PAGE ---------------- */
export default function Work() {
  const [tab, setTab] = useState("web");
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_LIKES_KEY) || "{}");
    setLikes(stored);
  }, []);

  const like = (id) => {
    const updated = { ...likes, [id]: likes[id] ? 0 : 1 };
    setLikes(updated);
    localStorage.setItem(STORAGE_LIKES_KEY, JSON.stringify(updated));
  };

  return (
    <section id="projects" className="w-full text-black dark:text-white pt-24 relative z-10">
      <div className="flex justify-center pb-12">
        <div className="flex gap-2 rounded-full px-2 py-2 border border-black/10 bg-white/20 backdrop-blur dark:bg-white/5 dark:border-white/10">
          <Tab active={tab === "web"} onClick={() => setTab("web")}>Websites</Tab>
          <Tab active={tab === "video"} onClick={() => setTab("video")}>Videos</Tab>
          <Tab active={tab === "photo"} onClick={() => setTab("photo")}>Photos</Tab>
        </div>
      </div>

      {tab === "web" && <Websites />}
      {tab === "video" && <Videos likes={likes} like={like} />}
      {tab === "photo" && <Photos />}
    </section>
  );
}

/* ---------------- WEBSITES ---------------- */
function Websites() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-20 space-y-20">
      {websiteProjects.map((site) => (
        <WebsiteProject key={site.id} project={site} />
      ))}
    </div>
  );
}

function WebsiteProject({ project }) {
  const [selected, setSelected] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSelected((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [project.images.length]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 overflow-hidden rounded-xl">
          <img
            src={project.images[selected]}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-[220px] grid grid-cols-3 lg:grid-cols-2 gap-2">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setSelected(i)}
              className={`w-full h-[80px] object-cover rounded cursor-pointer border-2 ${
                selected === i ? "border-[#f0a12b]" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <a href={project.link} target="_blank" className="text-[#f0a12b] underline text-sm">
          Visit Site
        </a>
      </div>

      <p className="text-sm opacity-70 leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}

/* ---------------- PHOTOS ---------------- */
function Photos() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photoItems.map((item, i) =>
        item.type === "video" ? (
          <video
            key={i}
            src={item.src}
            autoPlay
            loop
            muted
            className="w-full aspect-square object-cover"
            playsInline
          />
        ) : (
          <img
            key={i}
            src={item.src}
            className="w-full aspect-square object-cover"
          />
        )
      )}
    </div>
  );
}

/* ---------------- VIDEOS ---------------- */
function Videos({ likes, like }) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {videoItems.map((v) => {
        const isLiked = likes[v.id];

        return (
          <div key={v.id} className="bg-black rounded-3xl overflow-hidden relative">
            <div className="absolute top-3 left-3 z-10 text-xs px-2 py-1 bg-black/60 rounded text-white">
              {v.label}
            </div>

            <div className="relative aspect-[9/16] flex items-center justify-center">
              {v.type === "youtube" ? (
                <iframe
                  src={v.src}
                  title={v.label}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={v.src}
                  className="w-full h-full object-contain"
                  controls
                  controlsList="nodownload"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              <button
                onClick={() => like(v.id)}
                className="absolute right-3 bottom-20 flex flex-col items-center transform transition-all duration-300"
              >
                <Heart
                  size={26}
                  className={`transition-colors duration-300 ${
                    isLiked ? "text-red-600 fill-red-600" : "text-white"
                  }`}
                />
                <p className="text-sm mt-1 text-white">
                  {v.initialLikes + (isLiked ? 1 : 0)}
                </p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- TAB ---------------- */
function Tab({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm ${
        active
          ? "bg-[#f0a12b]/20 text-[#f0a12b]"
          : "text-black/60 dark:text-white/60 hover:text-[#f0a12b]"
      }`}
    >
      {children}
    </button>
  );
}