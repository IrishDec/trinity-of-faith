import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-12 text-[#1f2f3f] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
            <h1 className="text-4xl font-semibold text-[#2f4864]">
              Cookie Policy
            </h1>

            <div className="mt-8 space-y-6 leading-7 text-[#425466]">
              <p>
                Trinity of Faith Partnership uses a small number of cookies and
                similar technologies to help the website work correctly.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Essential cookies
                </h2>
                <p className="mt-2">
                  Essential cookies may be used for secure staff login,
                  authentication and other functions required for the website
                  to operate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Cookie preference
                </h2>
                <p className="mt-2">
                  The website stores your cookie-banner choice in your browser
                  so that the message does not need to be shown every time you
                  visit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Third-party services
                </h2>
                <p className="mt-2">
                  Some parts of the website may connect to third-party services,
                  such as Instagram, for parish content. Those services may
                  operate under their own privacy and cookie policies when you
                  follow links to their websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Managing cookies
                </h2>
                <p className="mt-2">
                  You can also manage or delete cookies through your browser
                  settings. Blocking essential cookies may affect secure login
                  or other website functions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#2f4864]">
                  Contact
                </h2>
                <p className="mt-2">
                  If you have a question about this policy, please use the
                  contact page on the Trinity of Faith Partnership website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}