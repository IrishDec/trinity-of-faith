import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { createServerSupabaseClient } from "@/lib/supabaseServer";

const parishCards = [
  {
    key: "clonskeagh",
    parish: "Clonskeagh Parish",
  },
  {
    key: "kilmacud",
    parish: "Kilmacud Parish",
  },
  {
    key: "mount_merrion",
    parish: "Mount Merrion Parish",
  },
];

type NewsletterRow = {
  id: number;
  parish: string;
  week_start: string;
  title: string;
  file_path: string;
  created_at: string;
};

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);

  return new Intl.DateTimeFormat("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default async function NewsPage() {
  const supabase = await createServerSupabaseClient();

  const { data: rows, error } = await supabase
    .from("newsletter_uploads")
    .select("id, parish, week_start, title, file_path, created_at")
    .order("week_start", { ascending: false })
    .order("created_at", { ascending: false });

  const latestByParish = new Map<string, NewsletterRow>();

  for (const row of rows ?? []) {
    if (!latestByParish.has(row.parish)) {
      latestByParish.set(row.parish, row);
    }
  }

  const newsletters = await Promise.all(
    parishCards.map(async (card) => {
      const latest = latestByParish.get(card.key);

      if (!latest) {
        return {
          ...card,
          title: "Weekly Newsletter",
          weekStart: null,
          signedUrl: null,
        };
      }

      const { data: signedFile } = await supabase.storage
        .from("newsletters")
        .createSignedUrl(latest.file_path, 60 * 60);

      return {
        ...card,
        title: latest.title,
        weekStart: latest.week_start,
        signedUrl: signedFile?.signedUrl ?? null,
      };
    })
  );

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

          {error ? (
            <div className="mb-8 rounded-[24px] border border-red-200 bg-white p-5 text-sm text-red-700">
              Could not load newsletters. Please try again later.
            </div>
          ) : null}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {newsletters.map((item) => (
              <article
                key={item.key}
                className="flex h-full flex-col rounded-[32px] border border-[#d8d0c2] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-1 flex-col rounded-[26px] border border-[#e6dfd2] bg-[#fcfbf8] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#70839a]">
                    {item.parish}
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold text-[#2f4864]">
                    {item.title}
                  </h2>

                  {item.weekStart ? (
                    <>
                      <p className="mt-3 text-sm text-[#425466]">
                        Week beginning {formatDate(item.weekStart)}
                      </p>

                      <p className="mt-6 rounded-[22px] border border-[#ddd3c4] bg-white p-5 text-sm leading-7 text-[#425466]">
                        The latest newsletter is ready to view online or download to your device.
                      </p>
                    </>
                  ) : (
                    <p className="mt-6 rounded-[22px] border border-[#ddd3c4] bg-white p-5 text-sm leading-7 text-[#425466]">
                      No newsletter has been uploaded yet.
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  {item.signedUrl ? (
                    <>
                      <a
                        href={item.signedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
                      >
                        Open Newsletter
                      </a>

                      <p className="mt-3 text-sm text-[#70839a]">
                        You can download or print it from the PDF viewer.
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-[#70839a]">
                      No file available yet.
                    </p>
                  )}
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