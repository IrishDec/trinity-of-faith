export default function SiteFooter() {
  return (
    <footer className="bg-[#24384f] px-6 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">
              Trinity of Faith Partnership
            </h2>
            <p className="mt-4 max-w-md leading-7 text-white/80">
              Clonskeagh, Kilmacud, and Mount Merrion working together as one
              parish partnership.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#E8D33F]">
              Parish Information
            </h3>
            <div className="mt-4 space-y-2 text-white/80">
              <a href="/fr-joe" className="block transition hover:text-[#E8D33F]">
                Fr Joe
              </a>
              <a href="/about" className="block transition hover:text-[#E8D33F]">
                About
              </a>
              <a
                href="/parish-history"
                className="block transition hover:text-[#E8D33F]"
              >
                Parish History
              </a>
              <a
                href="/safeguarding"
                className="block transition hover:text-[#E8D33F]"
              >
                Safeguarding
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#E8D33F]">
              Quick Links
            </h3>
            <div className="mt-4 space-y-2 text-white/80">
              <a href="/" className="block transition hover:text-[#E8D33F]">
                Home
              </a>
              <a href="/adoration" className="block transition hover:text-[#E8D33F]">
                Adoration
              </a>
              <a
                href="/appreciation"
                className="block transition hover:text-[#E8D33F]"
              >
                Appreciation
              </a>
              <a
                href="/fr-joe-admin"
                className="block transition hover:text-[#E8D33F]"
              >
                Fr Joe CMS
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-sm text-white/60">
          <p>© Trinity of Faith Partnership</p>
        </div>
      </div>
    </footer>
  );
}