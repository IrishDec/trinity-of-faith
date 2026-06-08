import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f4864]/70">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl lg:text-5xl">
              Privacy Notice
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#425466] sm:text-lg">
              Trinity of Faith Parish Partnership
            </p>
          </div>

          <section className="rounded-[32px] bg-white px-6 py-7 shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  1. Your personal data – what is it?
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  Personal data relates to a living individual who can be
                  identified from that data. Identification can be by the
                  information alone or in conjunction with any other information
                  in the data controller’s possession or likely to come into
                  such possession. The processing of personal data is governed
                  by the General Data Protection Regulation, known as the GDPR.
                </p>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  2. Who are we?
                </h2>
                <div className="mt-4 space-y-5 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>
                    The Parishes of Mount Merrion, Kilmacud, and Clonskeagh
                    comprise the Trinity of Faith Parish Partnership in the
                    Dublin Diocese, and are the data controllers in each case.
                    This means they decide how your personal data is processed
                    and for what purposes.
                  </p>

                  <div className="rounded-3xl bg-[#f7f7f7] p-5 ring-1 ring-black/5">
                    <p>
                      <span className="font-semibold text-[#2f4864]">
                        Mount Merrion:
                      </span>{" "}
                      Church of St. Therese, 79 The Rise, Mount Merrion,
                      Blackrock, Co. Dublin
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-[#2f4864]">
                        Kilmacud:
                      </span>{" "}
                      Church of Saint Laurence O’Toole, Lower Kilmacud Road,
                      Stillorgan, Blackrock, Co. Dublin, A94 CY83
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-[#2f4864]">
                        Clonskeagh:
                      </span>{" "}
                      Church of Our Lady of the Miraculous Medal, Bird Ave,
                      Clonskeagh, Dublin 14, D14 VP11
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  3. How do we process your personal data?
                </h2>
                <div className="mt-4 space-y-5 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>
                    Each parish above complies with its obligations under the
                    GDPR by keeping personal data up to date, by storing and
                    destroying it securely, by not collecting or retaining
                    excessive amounts of data, by protecting personal data from
                    loss, misuse, unauthorised access and disclosure, and by
                    ensuring that appropriate technical measures are in place to
                    protect personal data.
                  </p>

                  <p>We use your personal data for the following purposes:</p>

                  <ul className="list-disc space-y-3 pl-6 marker:text-[#2f4864]">
                    <li>
                      To administer records held by us on members of the
                      congregation
                    </li>
                    <li>
                      To fundraise and promote the interests of the parish
                    </li>
                    <li>To manage our employees and volunteers</li>
                    <li>
                      To maintain our own accounts and records, including the
                      processing of donations and tax back applications
                    </li>
                    <li>
                      To inform you of news, events, activities and services
                      running at the parishes above
                    </li>
                    <li>
                      To share your contact details with diocesan offices so
                      they can keep you informed about diocesan news, events,
                      activities and services that may be of interest to you
                    </li>
                  </ul>
                </div>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  4. What is the legal basis for processing your personal data?
                </h2>
                <ul className="mt-4 list-disc space-y-4 pl-6 text-[17px] leading-8 text-[#425466] marker:text-[#2f4864] sm:text-[18px] sm:leading-9">
                  <li>
                    Explicit consent of the data subject so that we can keep you
                    informed about news, events, activities and services,
                    process your donations, and keep you informed about diocesan
                    events
                  </li>
                  <li>
                    Processing is necessary for carrying out obligations under
                    employment, financial, canon law, or other legal
                    requirements
                  </li>
                  <li>
                    Processing is carried out by a not-for-profit body with a
                    religious aim, provided that:
                    <ul className="mt-3 list-disc space-y-3 pl-6 marker:text-[#2f4864]">
                      <li>
                        the processing relates only to members of the
                        congregation or former members, or those who have
                        regular contact with it in connection with those
                        purposes
                      </li>
                      <li>
                        there is no disclosure to a third party without consent
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  5. Sharing your personal data
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  Your personal data will be treated as strictly confidential
                  and will only be shared with other clergy or staff of the
                  parish for purposes connected with the parish. We will only
                  share your data with third parties outside of the parish with
                  your consent.
                </p>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  6. How long do we keep your personal data?
                </h2>
                <div className="mt-4 space-y-5 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>
                    We keep data in accordance with the guidance set out in the
                    guide Administrative Regulations and Guidelines for Parishes
                    for Parish Priests of the Archdiocese of Dublin.
                  </p>
                  <p>
                    Specifically, we retain donation declarations and associated
                    paperwork for up to 6 years after the calendar year to which
                    they relate, and parish registers permanently, including
                    baptisms, marriages, confirmations and, in some instances,
                    burials.
                  </p>
                </div>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  7. Your rights and your personal data
                </h2>
                <div className="mt-4 space-y-5 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>
                    Unless subject to an exemption under the GDPR, you have the
                    following rights with respect to your personal data:
                  </p>

                  <ul className="list-disc space-y-3 pl-6 marker:text-[#2f4864]">
                    <li>
                      The right to request a copy of your personal data held
                      about you by each above-mentioned parish
                    </li>
                    <li>
                      The right to request that each above-mentioned parish
                      corrects any personal data if it is found to be inaccurate
                      or out of date
                    </li>
                    <li>
                      The right to request that your personal data is erased
                      where it is no longer necessary for each above-mentioned
                      parish to retain such data
                    </li>
                    <li>The right to withdraw your consent at any time</li>
                    <li>
                      The right to request that the data controller provide you
                      with your personal data and, where possible, to transmit
                      that data directly to another data controller, known as
                      the right to data portability, where applicable
                    </li>
                    <li>
                      The right, where there is a dispute in relation to the
                      accuracy or processing of your personal data, to request
                      that a restriction is placed on further processing
                    </li>
                    <li>
                      The right to object to the processing of personal data,
                      where applicable
                    </li>
                    <li>
                      The right to lodge a complaint with the Data Protection
                      Commission
                    </li>
                  </ul>
                </div>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  8. Further processing
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  If we wish to use your personal data for a new purpose not
                  covered by this Privacy Notice, we will provide you with a new
                  notice explaining this new use before commencing the
                  processing and setting out the relevant purposes and
                  processing conditions. Where and whenever necessary, we will
                  seek your prior consent to the new processing.
                </p>
              </section>

              <section className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  9. Contact details
                </h2>

                <div className="mt-4 space-y-8 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <div>
                    <p>
                      To exercise all relevant rights, or for queries or
                      complaints, please contact the following parish
                      administrators:
                    </p>

                    <div className="mt-5 rounded-3xl bg-[#f7f7f7] p-5 ring-1 ring-black/5">
                      <p>
                        <span className="font-semibold text-[#2f4864]">
                          Mount Merrion:
                        </span>{" "}
                        01 288 1271
                      </p>
                      <p className="mt-3">
                        <span className="font-semibold text-[#2f4864]">
                          Kilmacud:
                        </span>{" "}
                        01 288 4009
                      </p>
                      <p className="mt-3">
                        <span className="font-semibold text-[#2f4864]">
                          Clonskeagh:
                        </span>{" "}
                        01 283 7948
                      </p>
                    </div>
                  </div>

                  <div>
                    <p>
                      You can contact the Data Protection Commission at:
                    </p>

                    <div className="mt-5 rounded-3xl bg-[#f7f7f7] p-5 ring-1 ring-black/5">
                      <p>Tel: 00353 57 8684800</p>
                      <p className="mt-2">Lo-Call: 1890 252 231</p>
                      <p className="mt-2">Email: info@dataprotection.ie</p>

                      <div className="mt-5">
                        <p className="font-semibold text-[#2f4864]">
                          Postal address:
                        </p>
                        <p className="mt-2">Data Protection Commissioner</p>
                        <p>Canal House</p>
                        <p>Station Road</p>
                        <p>Portarlington</p>
                        <p>R32 AP23</p>
                        <p>Co. Laois</p>
                      </div>

                      <div className="mt-5">
                        <p className="font-semibold text-[#2f4864]">
                          Dublin Office:
                        </p>
                        <p className="mt-2">21 Fitzwilliam Square</p>
                        <p>Dublin 2</p>
                        <p>D02 RD28</p>
                        <p>Ireland</p>
                      </div>
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