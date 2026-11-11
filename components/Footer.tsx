"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A961]/15 bg-black px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="font-display text-2xl font-light tracking-[0.28em] text-[#F5F1E8]">
          LA ROSA
        </p>
        <p className="mt-3 font-display text-lg font-light italic tracking-[0.08em] text-[#C9A961]">
          Dinner, drinks and the sunset.
        </p>

        <div className="mt-8 h-px w-24 bg-[#C9A961]/70" />

        <p className="mt-8 text-sm font-light text-[#F5F1E8]/60">
          Book a table on WhatsApp{" "}
          <a
            href="https://wa.me/6287817661749"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A961] transition-colors duration-500 hover:text-[#F5F1E8]"
          >
            +62 878-1766-1749
          </a>
        </p>

        <p className="mt-3 text-sm font-light text-[#F5F1E8]/60">
          Jl. Pantai Batu Bolong, Canggu 80361, Bali — Open every day,
          07:00–24:00
        </p>

        <div className="mt-6 flex items-center gap-6">
          <a
            href="https://www.instagram.com/larosa_canggu_"
            target="_blank"
            rel="noopener noreferrer"
            className="smallcaps text-[11px] text-[#F5F1E8]/70 transition-colors duration-500 hover:text-[#C9A961]"
          >
            Instagram
          </a>
        </div>

        <p className="mt-10 text-xs font-light tracking-[0.14em] text-[#F5F1E8]/40">
          © 2026 LA ROSA — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
