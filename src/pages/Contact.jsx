// src/pages/Contact.jsx
import React from "react";

const EMAIL = "jmalmonteee@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative z-10 w-full
        bg-transparent
        text-black dark:text-white
        transition-colors duration-500
      "
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 pt-24 sm:pt-28 pb-20">

        {/* Bottom line with email only */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />

          <a
            href={`mailto:${EMAIL}`}
            className="
              text-[13px] sm:text-[14px]
              font-medium
              text-black/60
              hover:text-[#f0a12b]
              dark:text-white/60
              dark:hover:text-[#f0a12b]
              transition-colors
            "
          >
            {EMAIL}
          </a>

          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

      </div>
    </section>
  );
}
