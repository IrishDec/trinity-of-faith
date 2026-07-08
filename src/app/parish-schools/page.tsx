import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const schoolSections = [
  {
    parish: "Mount Merrion",
    church: "St Thérèse",
    primarySchools: [
      { name: "Scoil San Treasa", website: "https://sstreasa.ie/" },
      { name: "Oatlands", website: "https://www.oatlandsprimaryschool.ie/" },
      { name: "Mount Anville Montessori Junior School", website: "https://mountanvillemjs.ie/" },
      { name: "Gaelscoil Laighean", website: "https://www.gaelscoillaighean.com/" },
    ],
    secondarySchools: [
      { name: "Oatlands", website: "https://oatlands.ie/" },
      { name: "Mount Anville", website: "https://www.mountanville.ie/" },
    ],
  },
  {
    parish: "Kilmacud",
    church: "St Laurence O’Toole",
    primarySchools: [
      { name: "St Laurence’s", website: "https://www.stlaurencesbns.ie/" },
      { name: "St Raphaela’s", website: "https://straphaelasns.ie/" },
      { name: "Mount Anville Primary", website: "https://www.mountanvilleprimaryschool.com/" },
      { name: "The Children’s House", website: "https://childrenshouseprimary.ie/" },
    ],
    secondarySchools: [
      { name: "St Raphaela’s", website: "https://www.straphaelas.ie/" },
      { name: "St Benildus", website: "https://www.stbenilduscollege.com/" },
    ],
  },
  {
    parish: "Clonskeagh",
    church: "Church of the Miraculous Medal",
    primarySchools: [
      { name: "Our Lady’s", website: "https://ourladysclonskeagh.ie/" },
      { name: "St Killian’s", website: "https://www.kilians.com/kindergarten-primary-school/primary-school/" },
    ],
    secondarySchools: [{ name: "St Killian’s", website: "https://www.kilians.com/" }],
  },
];

export default function ParishSchoolsPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f7f3ea] text-[#24384f]">
        <section className="relative overflow-hidden bg-[#2f4864] px-6 py-16 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
             Schools situated in the Parish
            </h1>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
          

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
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="text-xl font-semibold text-[#2f4864]">
                        Primary
                      </h3>

                      <div className="mt-4 space-y-4">
                        {section.primarySchools.map((school) => (
                          <article
                            key={`${section.parish}-${school.name}-primary`}
                            className="rounded-2xl border border-slate-200 bg-[#fbfaf7] p-5"
                          >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="text-lg font-semibold text-[#2f4864]">
                                {school.name}
                              </h4>

                              {school.website !== "#" && (
                                <a
                                  href={school.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-full justify-center rounded-full bg-[#2f4864] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24384f] sm:w-fit"
                                >
                                  Website
                                </a>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#2f4864]">
                        Secondary
                      </h3>

                      <div className="mt-4 space-y-4">
                        {section.secondarySchools.map((school) => (
                          <article
                            key={`${section.parish}-${school.name}-secondary`}
                            className="rounded-2xl border border-slate-200 bg-[#fbfaf7] p-5"
                          >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="text-lg font-semibold text-[#2f4864]">
                                {school.name}
                              </h4>

                              {school.website !== "#" && (
                                <a
                                  href={school.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-full justify-center rounded-full bg-[#2f4864] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#24384f] sm:w-fit"
                                >
                                  Website
                                </a>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
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