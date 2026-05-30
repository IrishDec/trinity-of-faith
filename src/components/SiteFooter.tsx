export default function SiteFooter() {
  return (
    <footer className="bg-[#2f4864] px-5 py-5 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center text-sm md:flex-row md:justify-between md:text-left">
        
        <div className="leading-relaxed">
          <p className="font-semibold">
            Trinity of Faith Partnership © 2026
          </p>
          <p className="text-white/75">
            Registered Charity Number: <span className="font-medium">[CRN 20016166]</span>
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-white/85">
          <a href="/contact" className="transition hover:text-white hover:underline">
            Contact
          </a>
          <a href="/privacy-policy" className="transition hover:text-white hover:underline">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="transition hover:text-white hover:underline">
            Cookie Policy
          </a>
          <a href="/safeguarding" className="transition hover:text-white hover:underline">
            Safeguarding
          </a>
          <a href="/sitemap" className="transition hover:text-white hover:underline">
            Sitemap
          </a>
        </nav>

        <p className="text-white/75">
          Site by{" "}
          <a
            href="https://heiyudigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white hover:underline"
          >
            Heiyu Digital
          </a>
        </p>
      </div>
    </footer>
  );
}