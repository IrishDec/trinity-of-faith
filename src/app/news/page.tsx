import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const newsletterFile = "/Sunday_31st_May_2026.pdf";
const previewImage = "/newsletter-preview.jpg";

const newsletters = [
  {
    parish: "Clonskeagh Parish",
    title: "Weekly Newsletter",
    description: "Latest parish newsletter for Clonskeagh.",
    pdf: "/clonskeagh-newsletter.pdf",
    preview: "/clonskeagh-newsletter.png",
  },
  {
    parish: "Kilmacud Parish",
    title: "Weekly Newsletter",
    description: "Latest parish newsletter for Kilmacud.",
    pdf: "/kilmacud-newsletter.pdf",
    preview: "/kilmacud-newsletter.png",
  },
  {
    parish: "Mount Merrion Parish",
    title: "Weekly Newsletter",
    description: "Latest parish newsletter for Mount Merrion.",
    pdf: "/mount-merrion-newsletter.pdf",
    preview: "/mount-merrion-newsletter.png",
  },
];
export default function NewsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="mt-3 text-3xl font-semibold text-[#2f4864] sm:text-4xl">
              Parish Newsletters
            </h1>
            <p className="mt-4 max-w-3xl text-[17px] leading-8 text-[#425466]">
              View or download the latest weekly newsletter or missalette for each parish.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {newsletters.map((item) => (
              <article
                key={item.parish}
                className="flex h-full flex-col rounded-[32px] border border-[#d8d0c2] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-1 flex-col rounded-[26px] border border-[#e6dfd2] bg-[#fcfbf8] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#70839a]">
                    {item.parish}
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold text-[#2f4864]">
                    {item.title}
                  </h2>

                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block overflow-hidden rounded-[24px] border border-[#ddd3c4] bg-white transition hover:shadow-md"
                  >
                    <img
                      src={item.preview}
                      alt={`${item.parish} newsletter preview`}
                      className="h-[320px] w-full object-cover object-top"
                    />
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#cfd5dd] bg-white px-6 py-3 text-sm font-semibold text-[#2f4864] transition hover:bg-[#f5f1e8]"
                  >
                    View
                  </a>

                  <a
                    href={item.pdf}
                    download
                    className="rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
                  >
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}