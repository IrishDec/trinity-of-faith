import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const churches = [
  {
    name: "Clonskeagh Parish",
    href: "https://platform.payzone.ie/customer/10042/product-list",
  },
  {
    name: "Kilmacud Parish",
    href: "https://platform.payzone.ie/customer/11190/product-list",
  },
  {
    name: "Mount Merrion Parish",
    href: "https://platform.payzone.ie/customer/11191/product-list",
  },
];

export default function DonatePage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[32px] bg-white px-6 py-10 shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-12 lg:px-10">
            <div className="max-w-3xl">
        
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl lg:text-5xl">
                Please choose your church to donate to
              </h1>

              <p className="mt-4 text-base leading-8 text-[#425466] sm:text-lg">
                Select one of the parish donation pages below.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-3">
              {churches.map((church) => (
                <a
                  key={church.name}
                  href={church.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl bg-[#f7f7f7] px-6 py-8 text-center shadow-sm ring-1 ring-black/5 transition hover:bg-white hover:shadow-md"
                >
                  <h2 className="text-2xl font-semibold text-[#2f4864]">
                    {church.name}
                  </h2>

                  <p className="mt-4 text-base font-medium text-[#425466]">
                    Open donation page
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}