"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isParishDropdownOpen, setIsParishDropdownOpen] = useState(false);

  const buttonClass =
    "inline-flex items-center justify-center rounded-full border border-white/40 bg-white/90 px-5 py-2.5 text-sm font-semibold text-[#2f4864] transition hover:bg-white";

  const mobileButtonClass =
    "block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-black/5";

  const dropdownButtonClass =
    "rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]";

  return (
    <header className="bg-[#f5f1e8] px-5 py-5 text-[#2f4864] sm:px-8 lg:px-12">
     <div className="mx-auto max-w-7xl"> 
       <div className="text-center">
  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f4864] sm:text-sm sm:tracking-[0.25em]">
    <a
      href="https://www.clonskeaghparish.ie/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-[#E8D33F]"
    >
      Clonskeagh
    </a>
    <span className="mx-2">•</span>
    <a
      href="https://www.kilmacudparish.ie/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-[#E8D33F]"
    >
      Kilmacud
    </a>
    <span className="mx-2">•</span>
    <a
      href="https://www.mountmerrionparish.ie/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-[#E8D33F]"
    >
      Mount Merrion
    </a>
  </div>

  <a
    href="/"
    className="mt-2 block text-3xl font-semibold leading-tight tracking-tight text-[#2f4864] sm:text-5xl"
  >
    Trinity of Faith Partnership
  </a>
</div>

 <div className="mt-5 flex justify-end sm:hidden">
  <button
    type="button"
    onClick={() => setIsMenuOpen((prev) => !prev)}
    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2f4864] text-2xl font-bold text-white shadow-md transition hover:bg-[#24384f]"
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  >
    {isMenuOpen ? "×" : "☰"}
  </button>
</div>
        {isMenuOpen && (
          <nav className="mt-5 grid gap-3 sm:hidden">
            <a href="/" className={mobileButtonClass}>
              Home
            </a>

            <button
              type="button"
              onClick={() => setIsParishDropdownOpen((prev) => !prev)}
              className={mobileButtonClass}
            >
              Parish Information
            </button>

            {isParishDropdownOpen && (
              <div className="grid gap-2 rounded-3xl bg-white/70 p-3">
                <a href="/about" className={dropdownButtonClass}>
                  About US / Mass times 
                </a>
                 <a href="/news" className={dropdownButtonClass}>
                  Newsletter
                </a>
                <a href="/contact" className={dropdownButtonClass}>
                  Contact
                </a>
                <a href="/fr-joe" className={dropdownButtonClass}>
                  Fr Joe's words 
                </a>
                 <a href="/parish-schools" className={dropdownButtonClass}>
                 Schools located in the Parish 
                </a>
                   <a href="/parish-centres" className={dropdownButtonClass}>
                  Parish Centres 
                </a>
                <a href="/parish-history" className={dropdownButtonClass}>
                  Parish History
                </a>
               <a href="/safeguarding" className={dropdownButtonClass}>
                 Safeguarding
              </a>
              </div>
            )}

           <a href="/volunteer" className={mobileButtonClass}>
             Volunteer
           </a>

            <a href="/sacraments" className={mobileButtonClass}>
              Sacraments
            </a>

            <a href="/donate" className={mobileButtonClass}>
              Donate
            </a>

            <a href="/webcam" className={mobileButtonClass}>
              Webcam
            </a>
          </nav>
        )}

        <nav className="mt-7 hidden flex-wrap justify-center gap-3 sm:flex">
          <a href="/" className={buttonClass}>
            Home
          </a>

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

                <a href="/about" className={dropdownButtonClass}>
                  About Us / Mass times 
                  </a>
                   <a href="/news" className={dropdownButtonClass}>
                  Newsletter
                </a>
                <a href="/contact" className={dropdownButtonClass}>
                  Contact
                </a>
          
                <a href="/fr-joe" className={dropdownButtonClass}>
                  Fr Joe's words 
                </a>
                  <a href="/parish-schools" className={dropdownButtonClass}>
                  Schools located in the Parish 
                </a>
                <a href="/parish-centres" className={dropdownButtonClass}>
                  Parish Centres 
                </a>
                <a href="/parish-history" className={dropdownButtonClass}>
                  Parish History
                </a>
                <a href="/safeguarding" className={dropdownButtonClass}>
                  Safeguarding
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