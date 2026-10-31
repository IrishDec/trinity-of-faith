import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
  { href: "/fr-joe", label: "Fr Joe's Words" },
  { href: "/news", label: "News" },
  { href: "/parish-centres", label: "Parish Centres" },
  { href: "/parish-history", label: "Parish History" },
  { href: "/parish-schools", label: "Parish Schools" },
  { href: "/sacraments", label: "Sacraments" },
  { href: "/sacraments/baptism", label: "Baptism" },
  { href: "/sacraments/marriage", label: "Marriage" },
  { href: "/sacraments/pastoral-support", label: "Pastoral Support" },
  { href: "/safeguarding", label: "Safeguarding" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/webcam", label: "Webcam" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export default function SitemapPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#1f2f3f] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
            <h1 className="text-4xl font-semibold text-[#2f4864]">
              Sitemap
            </h1>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-black/10 px-4 py-3 text-[#2f4864] transition hover:bg-[#f8f6f1]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}