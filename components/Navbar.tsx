"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "backdrop-blur-md bg-black/45 border-b border-[#C9A961]/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.28em] text-[#F5F1E8] mix-blend-difference sm:text-xl"
        >
          LA ROSA
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <a
            href="#collection"
            className="smallcaps hidden text-[11px] text-[#F5F1E8]/80 transition-colors duration-500 hover:text-[#C9A961] sm:block"
          >
            The Collection
          </a>
          <a
            href="#collection"
            className="smallcaps hidden text-[11px] text-[#F5F1E8]/80 transition-colors duration-500 hover:text-[#C9A961] md:block"
          >
            Begin
          </a>
        </div>
      </nav>
    </header>
  );
}
