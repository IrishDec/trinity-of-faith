import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const contacts = [
  {
    parish: "Moderator",
    church: "Fr. Joe Mullan, PP, Moderator",
    office: "Direct contact",
    secretary: "",
    phone: "087 232 6254",
    email: "jmullan39@eircom.net",
    buttonLabel: "Email Fr Joe",
  },
  {
    parish: "Clonskeagh",
    church: "Church of the Miraculous Medal",
    office: "Mon, Wed, Fri, 9:30am to 11:00am",
    secretary: "Sylvia Leonard",
    phone: "01 283 7948",
    email: "clonskeaghparish@gmail.com",
    buttonLabel: "Email Clonskeagh",
  },
  {
    parish: "Kilmacud",
    church: "Church of St Laurence O’Toole",
    office: "Mon to Fri, 9:00am to 12:00 noon",
    secretary: "Christine Mullock",
    phone: "01 288 4009",
    email: "kilmacudparishoffice@gmail.com",
    buttonLabel: "Email Kilmacud",
  },
  {
    parish: "Mount Merrion",
    church: "Church of St Thérèse",
    office: "Mon to Fri, 9:30am to 12:30pm",
    secretary: "Vivienne Dempsey",
    phone: "01 288 1271",
    email: "parishoffice@mountmerrionparish.ie",
    buttonLabel: "Email Mount Merrion",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f4864]/70">
              Contact
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#2f4864] sm:text-5xl">
              Parish Offices
            </h1>

            <p className="mt-5 text-base leading-7 text-[#425466] sm:text-lg">
              Please contact the relevant parish office for Mass cards,
              certificates, parish records, sacramental enquiries, bookings, and
              general parish information.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contacts.map((contact) => (
              <article
                key={contact.church}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f4864]/70">
                  {contact.parish}
                </p>

                <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#2f4864]">
                  {contact.church}
                </h2>

                <div className="mt-5 flex-1 space-y-3 text-[#425466]">
                  <p>
                    <span className="font-semibold text-[#2f4864]">Office:</span>{" "}
                    {contact.office}
                  </p>

                  {contact.secretary && (
                    <p>
                      <span className="font-semibold text-[#2f4864]">
                        Secretary:
                      </span>{" "}
                      {contact.secretary}
                    </p>
                  )}

                  <p>
                    <span className="font-semibold text-[#2f4864]">Tel:</span>{" "}
                    <a
                      href={`tel:${contact.phone.replaceAll(" ", "")}`}
                      className="hover:text-[#2f4864]"
                    >
                      {contact.phone}
                    </a>
                  </p>

                  <p>
                    <span className="font-semibold text-[#2f4864]">Email:</span>{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-words hover:text-[#2f4864]"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-6 inline-flex w-fit rounded-full bg-[#2f4864] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
                >
                  {contact.buttonLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}