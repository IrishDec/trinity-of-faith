import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function SafeguardingPage() {
  const contacts = [
    {
      title: "Safeguarding & Child Protection Service, Archdiocese of Dublin",
      number: "",
    },
    {
      title: "Director and Designated Liaison Person: Andrew Fagan",
      number: "01 836 0314",
    },
    {
      title: "Safeguarding & Support Officer: Deirdre Donnelly",
      number: "01 836 0314",
    },
    {
      title: "Tusla office",
      number: "01 2744200",
    },
    {
      title: "HSE (Vulnerable Adults)",
      number: "1850 241850",
    },
    {
      title: "An Garda Siochána: Blackrock",
      number: "01 665 5200",
    },
    {
      title: "The Samaritans Freephone",
      number: "116 123",
    },
    {
      title: "One in Four",
      number: "01 662 4070",
    },
    {
      title: "Faoiseamh (Towards Healing) Helpline Freephone",
      number: "1800 303 416",
    },
    {
      title: "Childline Freephone",
      number: "1800 66 66 66",
    },
  ];

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-5 py-10 text-[#1f2f3f] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[32px] bg-white px-5 py-8 shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="space-y-10">
             <div className="space-y-5">
  <h1 className="text-3xl font-semibold leading-tight text-[#1f2f3f] sm:text-4xl">
    Safeguarding Children and Vulnerable Adults
  </h1>

  <p className="text-[17px] leading-8 text-[#24384f] sm:text-[18px] sm:leading-9">
    The Trinity of Faith Parish Partnership values and encourages
    the participation of children, young people and vulnerable
    adults in all parish activities that enhance their spiritual,
    physical, emotional and social development.
  </p>
</div>

<div className="flex justify-center py-2 sm:py-4">
  <img
    src="/images/safeguarding.jpg"
    alt="Archdiocese of Dublin Child Safeguarding and Protection Service"
    className="h-auto w-full max-w-[760px] object-contain"
  />
</div>

              <div className="space-y-6 text-[17px] leading-8 text-[#24384f] sm:text-[18px] sm:leading-9">
                <p>
                  We recognise the dignity and rights of all children and
                  vulnerable adults and are committed to their protection and
                  support. We will do all in our power to create safe
                  environments to ensure their protection and enable their full
                  participation in the life of the Church and Pastoral
                  Community.
                </p>

                <p>
                  We are committed to protecting children and vulnerable adults
                  who are involved in Church activities in accordance with the
                  guidelines of the Church. Please see the policy documents
                  below. The Archdiocese of Dublin has structures in place to
                  ensure the safety and protection of children and vulnerable
                  adults including the Child Safeguarding and Protection Service
                  (CSPS), the Safeguarding Committee and the Advisory Panel.
                </p>

                <div className="space-y-4">
                  <p>
                    The CSPS promotes the safe care of children and vulnerable
                    adults throughout the Archdiocese by:
                  </p>

                  <ul className="space-y-4 pl-6">
                    <li className="list-disc">
                      Providing training for priests and parish workers and
                      volunteers in safeguarding and protection.
                    </li>
                    <li className="list-disc">
                      Dealing with complaints and concerns about child and
                      vulnerable adult protection matters, reporting to the
                      civil authorities and advising the Archbishop on measures
                      necessary to protect our most vulnerable.
                    </li>
                  </ul>
                </div>
              </div>

              <section className="border-t border-[#e8e1d4] pt-8">
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold text-[#1f2f3f] sm:text-3xl">
                    Our Safeguarding Representatives in the Pastoral Area
                  </h2>

                  <p className="text-[17px] leading-8 text-[#24384f] sm:text-[18px] sm:leading-9">
                    Each parish in the Partnership has Safeguarding
                    Representatives to ensure good practice at parish level. Our
                    Safeguarding Representatives are:
                  </p>

                  <div className="rounded-3xl bg-[#f7f7f7] p-5 ring-1 ring-black/5 sm:p-6">
                    <div className="space-y-3 text-[17px] leading-8 text-[#24384f] sm:text-[18px] sm:leading-9">
                      <p>
                        <span className="font-semibold text-[#2f4864]">
                          Mount Merrion:
                        </span>{" "}
                        Cliona Collins
                      </p>
                      <p>
                        <span className="font-semibold text-[#2f4864]">
                          Kilmacud:
                        </span>{" "}
                        Laurie Mannix & Paula Smith
                      </p>
                      <p>
                        <span className="font-semibold text-[#2f4864]">
                          Clonskeagh:
                        </span>{" "}
                        Maureen Porteous
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold text-[#1f2f3f] sm:text-3xl">
                    Useful Contact Numbers
                  </h2>

                  <div className="rounded-3xl bg-[#f7f7f7] p-5 ring-1 ring-black/5 sm:p-6">
                    <div className="space-y-4">
                      {contacts.map((contact, index) => (
                        <div
                          key={index}
                          className="border-b border-black/5 pb-3 last:border-b-0 last:pb-0"
                        >
                          <p className="text-[17px] font-semibold leading-8 text-[#2f4864] sm:text-[18px] sm:leading-9">
                            {contact.title}
                          </p>
                          {contact.number && (
                            <p className="text-[17px] leading-8 text-[#24384f] sm:text-[18px] sm:leading-9">
                              {contact.number}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}