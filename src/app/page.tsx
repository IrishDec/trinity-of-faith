"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import SiteFooter from "@/components/SiteFooter";

const heroImages = [
  {
    name: "Clonskeagh",
    desktop: "/images/hero/church-1-desktop.png",
    mobile: "/images/hero/church-1-mobile-clean.png",
  },
  {
    name: "Kilmacud",
    desktop: "/images/hero/church-2-desktop.png",
    mobile: "/images/hero/church-2-mobile-clean.png",
  },
  {
    name: "Mount Merrion",
    desktop: "/images/hero/church-3-desktop.png",
    mobile: "/images/hero/church-3-mobile-clean.png",
  },
];
export default function Home() {
  const [isParishInfoOpen, setIsParishInfoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isParishDropdownOpen, setIsParishDropdownOpen] = useState(false);
  const [latestFrJoeTeaser, setLatestFrJoeTeaser] = useState("");
  const [latestFrJoeDate, setLatestFrJoeDate] = useState("");


useEffect(() => {
  async function loadLatestFrJoeMessage() {
    const { data, error } = await supabase
      .from("weekly_messages")
      .select("teaser_html, week_start")
      .eq("published", true)
      .order("week_start", { ascending: false })
      .limit(1)
      .maybeSingle();

    console.log("HOME FR JOE:", data, error);

    if (error) {
      return;
    }

    setLatestFrJoeTeaser(data?.teaser_html || "");
    setLatestFrJoeDate(data?.week_start || "");
  }

  loadLatestFrJoeMessage();
}, []);

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1f2f3f]">
    {/* Mobile-only homepage hero */}
<section className="block bg-[#e7f0f3] text-[#1f2f3f] sm:hidden">
  <div className="relative px-5 pt-5">
    <div className="flex items-start justify-between gap-4">
      <Image
        src="/images/logo-light.png"
        alt="Trinity of Faith Partnership logo"
        width={112}
        height={112}
        className="h-20 w-20 rounded-2xl bg-white object-cover shadow-md"
      />

      <button
        type="button"
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2f4864] text-2xl font-bold text-white shadow-md"
        aria-label="Open menu"
      >
        ☰
      </button>
    </div>

    {isMobileMenuOpen && (
  <div className="mt-4 rounded-3xl bg-white p-4 text-sm text-[#2f4864] shadow-xl ring-1 ring-black/10">
    <div className="grid gap-3">
      <a
        href="/"
        className="block rounded-2xl bg-[#f5f1e8] px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-black/5"
      >
        Home
      </a>

      <button
        type="button"
        onClick={() => setIsParishDropdownOpen((prev) => !prev)}
        className="block rounded-2xl bg-[#f5f1e8] px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-black/5"
      >
        Parish Information
      </button>

      {isParishDropdownOpen && (
        <div className="grid gap-2 rounded-3xl bg-white/70 p-3">
          <a
            href="/about"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            About US / Mass times
          </a>

          <a
            href="/news"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            Newsletter
          </a>

          <a
            href="/contact"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            Contact
          </a>

          <a
            href="/fr-joe"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            Fr Joe,s words
          </a>

          <a
            href="/parish-schools"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            Schools located in the Parish
          </a>

          <a
            href="/parish-centres"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            Parish Centres
          </a>

          <a
            href="/parish-history"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            Parish History
          </a>

          <a
            href="/safeguarding"
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
          >
            Safeguarding
          </a>
        </div>
      )}

      <a
        href="/volunteer"
        className="block rounded-2xl bg-[#f5f1e8] px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-black/5"
      >
        Volunteer
      </a>

      <a
        href="/sacraments"
        className="block rounded-2xl bg-[#f5f1e8] px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-black/5"
      >
        Sacraments
      </a>

      <a
        href="/donate"
        className="block rounded-2xl bg-[#f5f1e8] px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-black/5"
      >
        Donate
      </a>

      <a
        href="/webcam"
        className="block rounded-2xl bg-[#f5f1e8] px-4 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-black/5"
      >
        Webcam
      </a>
    </div>
  </div>
)}
  </div>

  <div className="px-5 pb-4 pt-8 text-center">
    <div className="text-[12px] font-bold uppercase leading-7 tracking-[0.18em] text-[#2f4864]">
      <a
        href="https://www.clonskeaghparish.ie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clonskeagh
      </a>
      <span className="mx-2">•</span>
      <a
        href="https://www.kilmacudparish.ie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kilmacud
      </a>
      <span className="mx-2">•</span>
      <a
        href="https://www.mountmerrionparish.ie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mount Merrion
      </a>
    </div>
  </div>

<div className="relative h-[250px] overflow-hidden">
  {heroImages.map((image, index) => (
    <div key={image.name} className={`hero-slide hero-slide-${index + 1}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image.mobile})` }}
      />
    </div>
  ))}

  <div className="absolute inset-0 bg-black/10" />

  <h1 className="absolute inset-x-5 top-8 text-center text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#FFEA6C] drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]">
    Trinity of Faith
    <br />
    Partnership
  </h1>
</div>

  <div className="px-6 py-7 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f4864]">
      A Few Words from Fr Joe
    </p>

    {latestFrJoeDate && (
      <p className="mt-2 text-sm font-semibold text-[#70839a]">
        {latestFrJoeDate}
      </p>
    )}

    {latestFrJoeTeaser && (
      <p className="mx-auto mt-4 max-w-[30ch] line-clamp-3 whitespace-pre-line text-base leading-7 text-[#1f2f3f]">
        {latestFrJoeTeaser}
      </p>
    )}

    <a
      href="/fr-joe"
      className="mt-5 inline-flex rounded-full bg-[#2f4864] px-6 py-2.5 text-sm font-semibold text-white shadow-sm"
    >
      Read more
    </a>
  </div>
</section>
<section className="relative hidden min-h-[78vh] overflow-hidden bg-[#f5f1e8] sm:block sm:min-h-[82vh] lg:h-screen lg:min-h-[760px]">

{/* Hero images */}
<div className="absolute inset-0 z-0">
  {heroImages.map((image, index) => (
    <div key={image.name} className={`hero-slide hero-slide-${index + 1}`}>
      {/* Mobile only */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${image.mobile})` }}
      />

      {/* Desktop only - original desktop behaviour */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{ backgroundImage: `url(${image.desktop})` }}
      />
    </div>
  ))}
</div>
{/* Mobile top buttons */}
<div className="absolute right-4 top-5 z-[9999] flex w-[190px] flex-col gap-2 lg:hidden">
  <button
    type="button"
    onClick={() => setIsParishDropdownOpen((prev) => !prev)}
    className="rounded-full bg-white/95 px-4 py-2.5 text-sm font-bold text-[#2f4864] shadow-lg ring-1 ring-black/10"
  >
    Parish Information
  </button>

  {isParishDropdownOpen && (
    <div className="rounded-3xl bg-[#24384f]/95 p-4 text-sm text-white shadow-xl ring-1 ring-white/20 backdrop-blur-md">
      <h3 className="font-semibold text-[#E8D33F]">
        Parish Information
      </h3>

      <div className="mt-3 space-y-2 text-white/90">
        <a href="/fr-joe" className="block transition hover:text-[#E8D33F]">
          Fr Joe's words 
        </a>

        <a href="/about" className="block transition hover:text-[#E8D33F]">
          About Us
        </a>
         <a href="/news" className="block transition hover:text-[#E8D33F]">
          Newsletter
        </a>
          <a href="/parish-schools" className="block transition hover:text-[#E8D33F]">
          Schools located in the Parish
        </a>
          <a href="/parish-centres" className="block transition hover:text-[#E8D33F]">
          Parish Centres
        </a>
         
        <a href="/parish-history" className="block transition hover:text-[#E8D33F]">
          Parish History
        </a>

        <a href="/safeguarding" className="block transition hover:text-[#E8D33F]">
         Safeguarding
        </a>

        <a href="/contact" className="block transition hover:text-[#E8D33F]">
          Contact
        </a>
      </div>
    </div>
  )}

  <button
    type="button"
    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
    className="rounded-full bg-[#2f4864]/95 px-4 py-2.5 text-center text-sm font-bold text-white shadow-lg ring-1 ring-white/20"
  >
    Menu
  </button>
</div>

  {/* Logo */}
  <div className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8 lg:left-12 lg:top-12">
    <Image
      src="/images/logo-light.png"
      alt="Trinity of Faith Partnership logo"
      width={192}
      height={192}
      className="h-20 w-20 rounded-2xl bg-white object-cover shadow-md sm:h-24 sm:w-24 lg:h-40 lg:w-40"
    />
  </div>
{/* Top hero content */}
<div className="relative z-40 mx-auto max-w-7xl px-6 pt-32 text-center sm:px-8 sm:pt-36 lg:px-12 lg:pt-24">
<div className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2f4864] drop-shadow-[0_2px_8px_rgba(255,255,255,0.20)] sm:text-xs sm:tracking-[0.18em] lg:text-lg lg:tracking-[0.25em]">
  <a
    href="https://www.clonskeaghparish.ie/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#E8D33F]"
  >
    Clonskeagh
  </a>
  <span className="mx-1.5 sm:mx-2">•</span>
  <a
    href="https://www.kilmacudparish.ie/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#E8D33F]"
  >
    Kilmacud
  </a>
  <span className="mx-1.5 sm:mx-2">•</span>
  <a
    href="https://www.mountmerrionparish.ie/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#E8D33F]"
  >
    Mount Merrion
  </a>
</div>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
<div className="relative z-50">
 <button
  type="button"
  onClick={() => setIsParishDropdownOpen((prev) => !prev)}
  className="hidden items-center justify-center rounded-full border border-white/40 bg-white/90 px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-white sm:inline-flex"
>
  Parish Information
</button>

  {isParishDropdownOpen && (
    <div className="absolute left-1/2 top-full z-[9999] mt-3 hidden w-64 -translate-x-1/2 flex-col gap-2 rounded-3xl bg-white/95 p-3 shadow-xl ring-1 ring-black/10 backdrop-blur-md sm:flex">
     
      <a href="/about" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        About  / Mass times
      </a>
        <a href="/contact" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
       Contact
      </a>
       <a href="/news" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
       Newsletter
      </a>

      <a href="/fr-joe" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Fr Joe's words
      </a>
        <a href="/parish-centres" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Parish Centres
      </a>
       <a href="/parish-schools" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
       Schools located in the Parish 
      </a>

      <a href="/parish-history" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Parish History
      </a>

      <a href="/safeguarding" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Safeguarding
      </a>
    </div>
  )}
</div>

      <div className={`${isMobileMenuOpen ? "flex" : "hidden"} flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center lg:flex`}>
      <a
  href="/volunteer"
  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/90 px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-white"
>
  Volunteer
</a>
         <a
         href="/sacraments"
         className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/90 px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-white"
         >
         Sacraments
         </a>

        <a
          href="/donate"
          className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/90 px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-white"
        >
          Donate
        </a>

        <a
          href="/webcam"
          className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/90 px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-white"
        >
          Webcam
        </a>
      </div>
    </div>
  </div>
  <h1 className="mx-auto mt-4 max-w-[340px] text-center text-4xl font-semibold leading-[1.15] tracking-[-0.02em] text-[#FFEA6C] drop-shadow-[0_3px_10px_rgba(0,0,0,0.28)] sm:max-w-none sm:text-6xl sm:leading-[1.05]">
  Trinity of Faith
  <br />
  Partnership
</h1>
{/* Fr Joe box - desktop/tablet glass style */}
<div className="relative z-20 mx-auto mb-8 mt-8 w-[70%] max-w-[440px] rounded-[20px] bg-black/28 px-4 py-3 text-center shadow-xl backdrop-blur-md max-sm:hidden sm:mt-10 sm:w-[62%] sm:px-5 sm:py-4 lg:absolute lg:bottom-[18px] lg:left-1/2 lg:mb-0 lg:mt-0 lg:w-[440px] lg:-translate-x-1/2 lg:px-5 lg:py-4">
  <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.20em] text-[#E8D33F] sm:text-xs sm:tracking-[0.18em]">
    A Few Words from Fr Joe
  </p>

  {latestFrJoeDate && (
    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
      {latestFrJoeDate}
    </p>
  )}

  {latestFrJoeTeaser && (
    <p className="mx-auto mt-3 max-w-[28ch] line-clamp-3 whitespace-pre-line text-[15px] leading-8 text-white/95 sm:max-w-[30ch] sm:text-[16px] sm:leading-8">
      {latestFrJoeTeaser}
    </p>
  )}

  <a
    href="/fr-joe"
    className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2f4864] shadow-sm transition hover:bg-[#f0ebe2]"
  >
    Read more
  </a>
</div>
{/* Fr Joe mobile update inside hero space */}
<div className="relative z-20 mx-auto block px-6 pb-8 pt-4 text-center sm:hidden">
  <div className="mx-auto max-w-[340px]">
    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2f4864]">
      A Few Words from Fr Joe
    </p>

    {latestFrJoeDate && (
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#70839a]">
        {latestFrJoeDate}
      </p>
    )}

    {latestFrJoeTeaser && (
      <p className="mx-auto mt-5 max-w-[30ch] line-clamp-3 whitespace-pre-line text-[17px] leading-8 text-[#1f2f3f]">
        {latestFrJoeTeaser}
      </p>
    )}

    <a
      href="/fr-joe"
      className="mt-6 inline-flex rounded-full bg-[#2f4864] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#24384f]"
    >
      Read more
    </a>
  </div>
</div>
</section>

      <SiteFooter />
    </main>
  );
}