"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";


const heroImages = [
  {
    name: "Church 1",
    desktop: "/images/hero/church-1-desktop.png",
    mobilePosition: "50% 42%",
  },
  {
    name: "Church 2",
    desktop: "/images/hero/church-2-desktop.png",
    mobilePosition: "50% 36%",
  },
  {
    name: "Church 3",
    desktop: "/images/hero/church-3-desktop.png",
    mobilePosition: "50% 40%",
  },
];
export default function Home() {
  const [isParishInfoOpen, setIsParishInfoOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isSacramentsOpen, setIsSacramentsOpen] = useState(false);
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
<section className="relative min-h-[78vh] overflow-hidden bg-[#f5f1e8] sm:min-h-[82vh] lg:h-screen lg:min-h-[760px]">
{/* Hero images */}
<div className="absolute inset-0 z-0">
  {heroImages.map((image, index) => {
    const mobilePosition =
      index === 0 ? "50% 44%" : index === 1 ? "50% 34%" : "50% 40%";

    return (
      <div key={image.name} className={`hero-slide hero-slide-${index + 1}`}>
        <div
          className="absolute inset-0 bg-cover bg-no-repeat lg:hidden"
          style={{
            backgroundImage: `url(${image.desktop})`,
            backgroundPosition: mobilePosition,
          }}
        />

        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{ backgroundImage: `url(${image.desktop})` }}
        />
      </div>
    );
  })}
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
  <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 text-center sm:px-8 sm:pt-36 lg:px-12 lg:pt-24">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-black drop-shadow-[0_2px_8px_rgba(255,255,255,0.20)] lg:text-lg">
      Clonskeagh • Kilmacud • Mount Merrion
    </p>

    <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
      Trinity of Faith Partnership
    </h1>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
<div className="relative">
  <button
    type="button"
    onClick={() => setIsParishDropdownOpen((prev) => !prev)}
    className="inline-flex items-center justify-center rounded-full border border-[#2f4864]/20 bg-white px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-[#f0ebe2]"
  >
    Parish Information
  </button>

  {isParishDropdownOpen && (
    <div className="absolute left-1/2 top-full z-[9999] mt-3 flex w-64 -translate-x-1/2 flex-col gap-2 rounded-3xl bg-white/95 p-3 shadow-xl ring-1 ring-black/10 backdrop-blur-md">
      <button
        type="button"
        onClick={() => {
          setIsParishInfoOpen(true);
          setIsParishDropdownOpen(false);
        }}
        className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
      >
        Mass Times
      </button>

      <a href="/about" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        About
      </a>
          <a href="/contact" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
       Contact
      </a>

      <a href="/fr-joe" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Fr Joe
      </a>

      <button
        type="button"
        onClick={() => {
          setIsExploreOpen(true);
          setIsParishDropdownOpen(false);
        }}
        className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]"
      >
        Explore Our Parishes
      </button>

      <a href="/parish-history" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Parish History
      </a>

      <a href="/safeguarding" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Safeguarding
      </a>

      <a href="/appreciation" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/10 transition hover:bg-[#f0ebe2]">
        Appreciation
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

  {/* Fr Joe box - desktop pinned low */}
  <div className="relative z-20 mx-6 mb-8 mt-12 rounded-2xl bg-black/35 p-5 text-center shadow-xl backdrop-blur-sm sm:mx-auto sm:max-w-2xl lg:absolute lg:bottom-[18px] lg:left-1/2 lg:mx-0 lg:mb-0 lg:mt-0 lg:w-[720px] lg:-translate-x-1/2 lg:p-6">
   <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8D33F]">
  A Few Words from Fr Joe
</p>

{latestFrJoeDate && (
  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
    {latestFrJoeDate}
  </p>
)}
{latestFrJoeTeaser && (
  <p className="mt-3 line-clamp-3 whitespace-pre-line text-sm leading-6 text-white/95 sm:text-base sm:leading-7">
    {latestFrJoeTeaser}
  </p>
)}

<a
  href="/fr-joe"
  className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2f4864] transition hover:bg-[#f0ebe2]"
>
  Read more
</a>
  </div>
</section>
      {isParishInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b2733]/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-[#f5f1e8] p-6 shadow-2xl sm:p-8 lg:p-10">
            <button
              type="button"
              onClick={() => setIsParishInfoOpen(false)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-semibold text-[#2f4864] shadow-md transition hover:bg-[#eef2f5]"
              aria-label="Close parish information"
            >
            </button>

            <div className="max-w-3xl pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4864]">
                Parish Information
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl">
                Mass Times Across the Partnership
              </h2>
              <p className="mt-4 text-base leading-7 text-[#425466] sm:text-lg">
                Quick access to the current regular Mass schedule for Clonskeagh,
                Kilmacud, and Mount Merrion.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold text-[#2f4864]">Clonskeagh</h3>
                <div className="mt-5 space-y-4 text-[#425466]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Weekdays</p>
                    <p className="mt-1 text-base">10:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Bank Holidays</p>
                    <p className="mt-1 text-base">11:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Saturday</p>
                    <p className="mt-1 text-base">10:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Saturday Vigil Mass</p>
                    <p className="mt-1 text-base">6:00pm</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Sunday</p>
                    <p className="mt-1 text-base">10:30am</p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold text-[#2f4864]">Kilmacud</h3>
                <div className="mt-5 space-y-4 text-[#425466]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Weekdays</p>
                    <p className="mt-1 text-base">10:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Tuesday</p>
                    <p className="mt-1 text-base">Liturgy with Eucharist</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Bank Holidays</p>
                    <p className="mt-1 text-base">10:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Saturday</p>
                    <p className="mt-1 text-base">10:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Saturday Vigil Mass</p>
                    <p className="mt-1 text-base">6:00pm</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Sunday</p>
                    <p className="mt-1 text-base">11:30am</p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold text-[#2f4864]">Mount Merrion</h3>
                <div className="mt-5 space-y-4 text-[#425466]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Weekdays</p>
                    <p className="mt-1 text-base">10:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Thursday</p>
                    <p className="mt-1 text-base">Liturgy with Eucharist</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Bank Holidays</p>
                    <p className="mt-1 text-base">10:00am</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Saturday</p>
                    <p className="mt-1 text-base">Prayer Service</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f4864]">Sunday</p>
                    <p className="mt-1 text-base">10:00am &amp; 7:30pm</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setIsParishInfoOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isExploreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b2733]/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-[#f5f1e8] p-6 shadow-2xl sm:p-8 lg:p-10">
            <button
              type="button"
              onClick={() => setIsExploreOpen(false)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-semibold text-[#2f4864] shadow-md transition hover:bg-[#eef2f5]"
              aria-label="Close explore parishes"
            >
              ×
            </button>

            <div className="max-w-4xl pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4864]">
                Trinity of Faith Partnership
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl">
                Partnership Team & Parish Contacts
              </h2>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-xl font-semibold text-[#2f4864]">Partnership Team</h3>
              <div className="mt-4 space-y-2 text-[#425466]">
                <p>Fr. Joe Mullan, PP, Moderator</p>
                <p>Fr. Peter Ewaoche Johnson, CC</p>
                <p>Fr. Fergus O’Donoghue, SJ, PC</p>
                <p>Fr. Paddy O’Byrne, AP</p>
                <p>Fr. Brian O’Reilly, AP</p>
                <p>Fr. Ciaran Egan, CC</p>
                <p>Sr. Catherine Greene</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold text-[#2f4864]">Clonskeagh</h3>
                <p className="mt-2 font-medium text-[#425466]">
                  Church of the Miraculous Medal
                </p>
                <div className="mt-5 space-y-3 text-[#425466]">
                  <p><span className="font-semibold text-[#2f4864]">Office:</span> Mon, Wed, Fri, 9:30am to 11:00am</p>
                  <p><span className="font-semibold text-[#2f4864]">Secretary:</span> Sylvia Leonard</p>
                  <p><span className="font-semibold text-[#2f4864]">Tel:</span> 01 283 7948</p>
                  <p><span className="font-semibold text-[#2f4864]">Email:</span> clonskeaghparish@gmail.com</p>
                </div>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold text-[#2f4864]">Kilmacud</h3>
                <p className="mt-2 font-medium text-[#425466]">
                  Church of St Laurence O’Toole
                </p>
                <div className="mt-5 space-y-3 text-[#425466]">
                  <p><span className="font-semibold text-[#2f4864]">Office:</span> Mon to Fri, 9:00am to 12:00 noon</p>
                  <p><span className="font-semibold text-[#2f4864]">Secretary:</span> Christine Mullock</p>
                  <p><span className="font-semibold text-[#2f4864]">Tel:</span> 01 288 4009</p>
                  <p><span className="font-semibold text-[#2f4864]">Email:</span> kilmacudparishoffice@gmail.com</p>
                </div>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-2xl font-semibold text-[#2f4864]">Mount Merrion</h3>
                <p className="mt-2 font-medium text-[#425466]">
                  Church of St Thérése
                </p>
                <div className="mt-5 space-y-3 text-[#425466]">
                  <p><span className="font-semibold text-[#2f4864]">Office:</span> Mon to Fri, 9:30am to 12:30pm</p>
                  <p><span className="font-semibold text-[#2f4864]">Secretary:</span> Vivienne Dempsey</p>
                  <p><span className="font-semibold text-[#2f4864]">Tel:</span> 01 288 1271</p>
                  <p><span className="font-semibold text-[#2f4864]">Email:</span> parishoffice@mountmerrionparish.ie</p>
                  <p><span className="font-semibold text-[#2f4864]">Head Sacristan:</span> Shubert Laxina</p>
                  <p><span className="font-semibold text-[#2f4864]">Community Centre:</span> 01 288 4485</p>
                  <p><span className="font-semibold text-[#2f4864]">Community Centre Email:</span> mmpccinfo@gmail.com</p>
                  <p><span className="font-semibold text-[#2f4864]">SVP Helpline:</span> 01 884 8200</p>
                </div>
              </article>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setIsExploreOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isSacramentsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b2733]/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#f5f1e8] p-6 shadow-2xl sm:p-8 lg:p-10">
            <button
              type="button"
              onClick={() => setIsSacramentsOpen(false)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-semibold text-[#2f4864] shadow-md transition hover:bg-[#eef2f5]"
              aria-label="Close sacraments"
            >
              ×
            </button>

            <div className="max-w-3xl pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4864]">
                Sacraments
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl">
                Sacramental Life in the Partnership
              </h2>
              <p className="mt-4 text-base leading-7 text-[#425466] sm:text-lg">
                Information on Baptism, First Communion, Confirmation, Marriage,
                Reconciliation, and other sacramental moments across Clonskeagh,
                Kilmacud, and Mount Merrion.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-[#2f4864]">Baptism</h3>
                <p className="mt-3 leading-7 text-[#425466]">
                  Families seeking Baptism are welcome to contact the parish office
                  for details on preparation and the next available dates.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-[#2f4864]">First Communion</h3>
                <p className="mt-3 leading-7 text-[#425466]">
                  Information for families and schools preparing children for First
                  Holy Communion can be provided through the parish offices.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-[#2f4864]">Confirmation</h3>
                <p className="mt-3 leading-7 text-[#425466]">
                  Confirmation preparation details, dates, and parish contacts can
                  be requested directly through the partnership offices.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-[#2f4864]">Marriage</h3>
                <p className="mt-3 leading-7 text-[#425466]">
                  Couples planning marriage should contact the parish office as early
                  as possible for guidance on documentation and preparation.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-[#2f4864]">Reconciliation</h3>
                <p className="mt-3 leading-7 text-[#425466]">
                  Reconciliation times and availability can be confirmed through the
                  parish office or newsletter.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-[#2f4864]">Pastoral Support</h3>
                <p className="mt-3 leading-7 text-[#425466]">
                  For funerals, anointing of the sick, or other pastoral needs,
                  please contact the relevant parish office directly.
                </p>
              </article>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setIsSacramentsOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
<footer className="bg-[#24384f] px-6 py-14 text-white sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
 <div className="grid grid-cols-2 gap-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
      <div>
        <h2 className="text-2xl font-semibold">Trinity of Faith Partnership</h2>
        <p className="mt-4 max-w-md leading-7 text-white/80">
          A calm, welcoming footer area for partnership details, parish links,
          contact information, and future updates.
        </p>
      </div>

<div>
  <h3 className="text-lg font-semibold text-[#E8D33F]">Admin</h3>
  <div className="mt-4 space-y-2 text-white/80">
    <a
      href="/fr-joe-admin"
      className="block transition hover:text-[#E8D33F]"
    >
      Weekly message 
    </a>

    <a
      href="/fr-joe"
      className="block transition hover:text-[#E8D33F]"
    >
      Fr Joe Messages
    </a>
  </div>
</div>

      <div>
        <h3 className="text-lg font-semibold text-[#E8D33F]">Column Two</h3>
        <div className="mt-4 space-y-2 text-white/80">
          <p>Placeholder line</p>
          <p>Placeholder line</p>
          <p>Placeholder line</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#E8D33F]">Column Three</h3>
        <div className="mt-4 space-y-2 text-white/80">
          <p>Placeholder line</p>
          <p>Placeholder line</p>
          <p>Placeholder line</p>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-white/15 pt-6 text-sm text-white/60">
      <p>Footer preview only</p>
    </div>
  </div>
</footer>
    </main>
  );
}