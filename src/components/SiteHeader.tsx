"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [isParishDropdownOpen, setIsParishDropdownOpen] = useState(false);

  const buttonClass =
    "inline-flex items-center justify-center rounded-full border border-white/40 bg-white/90 px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-white";

  const dropdownButtonClass =
    "rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]";

  return (
    <header className="bg-[#f5f1e8] px-6 py-8 text-[#2f4864] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black">
          Clonskeagh • Kilmacud • Mount Merrion
        </p>

        <a
          href="/"
          className="mt-3 text-4xl font-semibold tracking-tight text-[#2f4864] sm:text-5xl"
        >
          Trinity of Faith Partnership
        </a>

        <nav className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsParishDropdownOpen((prev) => !prev)}
              className={buttonClass}
            >
              Parish Information
            </button>

            {isParishDropdownOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 flex w-72 -translate-x-1/2 flex-col gap-2 rounded-3xl bg-white/95 p-3 shadow-xl ring-1 ring-black/10 backdrop-blur-md">
                <a href="/#mass-times" className={dropdownButtonClass}>
                  Mass Times
                </a>

                <a href="/about" className={dropdownButtonClass}>
                  About
                </a>

                <a href="/fr-joe" className={dropdownButtonClass}>
                  Fr Joe
                </a>

                <a href="/parish-history" className={dropdownButtonClass}>
                  Parish History
                </a>

                <a href="/safeguarding" className={dropdownButtonClass}>
                  Safeguarding
                </a>

                <a href="/adoration" className={dropdownButtonClass}>
                  Adoration
                </a>

                <a href="/appreciation" className={dropdownButtonClass}>
                  Appreciation
                </a>
              </div>
            )}
          </div>

          <a href="/volunteer" className={buttonClass}>
            Volunteer
          </a>

          <a href="/sacraments" className={buttonClass}>
            Sacraments
          </a>

          <a href="/donate" className={buttonClass}>
            Donate
          </a>

          <a href="/webcam" className={buttonClass}>
            Webcam
          </a>
        </nav>
      </div>
    </header>
  );
}