import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const schoolSections = [
  {
    parish: "Clonskeagh",
    church: "Church of the Miraculous Medal",
    intro:
      "Schools connected with the Clonskeagh parish community will be listed here.",
    schools: [
      {
        name: "School name coming soon",
        type: "Primary / Secondary",
        address: "Address coming soon",
        phone: "Phone coming soon",
        email: "Email coming soon",
        website: "#",
      },
    ],
  },
  {
    parish: "Kilmacud",
    church: "St Laurence O’Toole",
    intro:
      "Schools connected with the Kilmacud parish community will be listed here.",
    schools: [
      {
        name: "School name coming soon",
        type: "Primary / Secondary",
        address: "Address coming soon",
        phone: "Phone coming soon",
        email: "Email coming soon",
        website: "#",
      },
    ],
  },
  {
    parish: "Mount Merrion",
    church: "St Thérèse",
    intro:
      "Schools connected with the Mount Merrion parish community will be listed here.",
    schools: [
      {
        name: "School name coming soon",
        type: "Primary / Secondary",
        address: "Address coming soon",
        phone: "Phone coming soon",
        email: "Email coming soon",
        website: "#",
      },
    ],
  },
];

export default function ParishSchoolsPage() {
 return (
  <>
    <SiteHeader />

    <main className="min-h-screen bg-[#f7f3ea] text-[#24384f]">
      <section className="relative overflow-hidden bg-[#2f4864] px-6 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Parish Life
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Parish Schools
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
            A simple guide to the schools connected with our parish communities
            in Clonskeagh, Kilmacud, and Mount Merrion.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#2f4864]">
              Schools across the Partnership
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              This page will be updated with school names, contact details,
              parish links, and useful information for families.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {schoolSections.map((section) => (
              <section
                key={section.parish}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8"
              >
                <div className="flex flex-col gap-2 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold text-[#2f4864]">
                      {section.parish}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {section.church}
                    </p>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-slate-600">
                    {section.intro}
                  </p>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {section.schools.map((school) => (
                    <article
                      key={`${section.parish}-${school.name}`}
                      className="rounded-2xl border border-slate-200 bg-[#fbfaf7] p-5"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-[#2f4864]">
                            {school.name}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-[#8a6f2a]">
                            {school.type}
                          </p>
                        </div>

                        <a
                         href={school.website}
                        className="inline-flex w-full justify-center rounded-full bg-[#2f4864] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24384f] sm:w-fit"
                        >
                        Website
                        </a>
                      </div>

                      <dl className="mt-5 space-y-3 text-sm text-slate-700">
                        <div>
                          <dt className="font-semibold text-[#2f4864]">
                            Address
                          </dt>
                          <dd className="mt-1">{school.address}</dd>
                        </div>

                        <div>
                          <dt className="font-semibold text-[#2f4864]">
                            Phone
                          </dt>
                          <dd className="mt-1">{school.phone}</dd>
                        </div>

                        <div>
                          <dt className="font-semibold text-[#2f4864]">
                            Email
                          </dt>
                          <dd className="mt-1">{school.email}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </>
  );
}