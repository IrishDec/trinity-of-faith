import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);

  return parts.map((part, index) => {
    if (/^https?:\/\/[^\s]+$/.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all text-[#2f4864] underline underline-offset-4 hover:text-[#1f3650]"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

export default function ChildSafeguardingPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl lg:text-5xl">
              Child Safeguarding Statement
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#425466] sm:text-lg">
              Information for parishioners, volunteers, parents, guardians, and
              group coordinators in Mount Merrion Parish.
            </p>
          </div>

          <section className="rounded-[32px] bg-white px-6 py-7 shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="space-y-10">
              <div>
                <p className="text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  The Archdiocese of Dublin recognises and upholds the dignity
                  and rights of all children, is committed to ensuring their
                  safety and well-being and will work in partnership with
                  parents and guardians to do this.
                </p>

                <p className="mt-5 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  The Archdiocese recognises each child as a gift from God, and
                  values and encourages the participation of children in all
                  activities that enhance their spiritual, physical, emotional,
                  intellectual and social development.
                </p>

                <p className="mt-5 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  All diocesan personnel, including clergy, religious, staff and
                  volunteers, have responsibility to safeguard children through
                  promoting their welfare, health and development in a safe and
                  caring environment that supports their best interests and
                  prevents abuse.
                </p>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  Parish Safeguarding Representative
                </h2>
                <div className="mt-5 space-y-3 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>Cliona Collins</p>
                  <p>Cliona is contactable through the Parish Office 01 288 1271</p>
                </div>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  If You Have a Concern About Child Abuse
                </h2>

                <div className="mt-6 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2f4864]">
                      Diocesan Child Safeguarding and Protection Service
                    </h3>
                    <div className="mt-3 space-y-2 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                      <p>Designated Liaison Person: Mr. Andrew Fagan, Director</p>
                      <p>Child Safeguarding and Protection Service</p>
                      <p>Holy Cross Diocesan Centre</p>
                      <p>Clonliffe College</p>
                      <p>Dublin 3</p>
                      <p>Tel. 01 836 0314 Monday to Friday 09:00 to 17:00</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2f4864]">
                      Deputy Designated Liaison Person
                    </h3>
                    <div className="mt-3 space-y-2 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                      <p>Ms. Julie Mc Cullough, Child Protection Officer</p>
                      <p>Child Safeguarding and Protection Service</p>
                      <p>Holy Cross Diocesan Centre</p>
                      <p>Clonliffe College</p>
                      <p>Dublin 3</p>
                      <p>Tel. 01 836 0314 Monday to Friday 09:00 to 17:00</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2f4864]">Tusla</h3>
                    <p className="mt-3 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                      Mr. Gerard Mc Kiernan 01 2744200
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#2f4864]">
                      Local Garda Station
                    </h3>
                    <p className="mt-3 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                      Blackrock 01 6665200
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  Mount Merrion Parish Groups That Work With Children Under 18
                </h2>
                <div className="mt-5 space-y-3 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>Family Mass Group</p>
                  <p>Altar Servers</p>
                  <p>Youth Group</p>
                  <p>Baptismal Team</p>
                </div>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  Code of Conduct for Staff & Volunteers
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  Staff and volunteers in the Archdiocese of Dublin are uniquely
                  placed to act as positive role models to children and young
                  people participating in Church activities. Such participation
                  provides the opportunity to promote the development of
                  self-confidence and enhance the wellbeing of the children and
                  young people with whom we interact. This agreement serves to
                  articulate the expectations of adult behaviour when working
                  with children and young people in the Archdiocese of Dublin.
                  It aims to provide confidence to children and young people,
                  staff, volunteers, and parents that safeguarding children and
                  young people is of paramount importance.
                </p>

                <div className="mt-5 space-y-3 break-words text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>Code of Conduct for Staff & Volunteers 2015</p>
                  <p>
                    {linkify(
                      "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2012/02/Code-of-Conduct-2015.doc"
                    )}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  Guidance and Forms
                </h2>

                <div className="mt-6 space-y-6 break-words text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <div>
                    <p className="font-semibold text-[#2f4864]">
                      Guidance for Designing a Code of Conduct for Children &
                      Young People participating in Parish Activities 2015
                    </p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2012/02/Guidance-for-Designing-a-Code-of-Conduct-for-Children-and-Young-People-participating-in-Parish-Activities-2015.doc"
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#2f4864]">
                      Parish Volunteer Recruitment: Child Safeguarding
                      Requirements 2015
                    </p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2012/02/Parish-Volunteer-Recruitment-Child-Safeguarding-2015.doc"
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#2f4864]">
                      Working Safely with Children & Young People: Use of
                      Information Technology, Guidelines for Archdiocese of
                      Dublin 2015
                    </p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2012/02/Use-of-Information-Technology-Guidance-2015.doc"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  Volunteer Requirements
                </h2>

                <div className="mt-6 space-y-6 break-words text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <div>
                    <p className="font-semibold text-[#2f4864]">
                      Adult Volunteers not working directly with children
                    </p>
                    <p>
                      Are required to complete an Adult Volunteer Declaration
                      Form.
                    </p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2012/02/Adult-Volunteer-Declaration-Form-2015.doc"
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#2f4864]">
                      Adult Volunteers working directly with children
                    </p>
                    <p>
                      Are required to complete an Adult Volunteer Declaration
                      Form.
                    </p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2012/02/Adult-Volunteer-Declaration-Form-2015.doc"
                      )}
                    </p>
                    <p>Undertake the Garda Vetting Process.</p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/2016/06/16/garda-vetting-information/"
                      )}
                    </p>
                    <p>
                      Complete a training course provided by the Dublin Diocese.
                    </p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/category/training-and-development/"
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#2f4864]">
                      Volunteers under 18 years
                    </p>
                    <p>
                      A Parental Child & Medical Consent Form is required to be
                      completed by each under 18 volunteer and their
                      parent/guardian.
                    </p>
                    <p>
                      {linkify(
                        "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2012/02/Parental-Child-Medical-Consent-Form1.doc"
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  Information for Coordinators of Groups With Volunteers Under 18
                </h2>

                <div className="mt-5 space-y-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  <p>
                    1. The names and contact details of the coordinators must be
                    clearly communicated.
                  </p>
                  <p>
                    2. Each group should have a Code of Conduct. Please refer to
                    the guidance for designing a code of conduct for children and
                    young people participating in parish activities.
                  </p>
                  <p>
                    3. The required forms for adult and under 18 volunteers are
                    completed and submitted to the Parish Office for the
                    attention of the Data Coordinator.
                  </p>
                  <p>
                    4. It is required by law that all adult volunteers working
                    directly are Garda Vetted.
                  </p>
                  <p>
                    5. All adult volunteers working directly with children are
                    required to undertake training as provided by the Dublin
                    Diocese.
                  </p>
                  <p>6. The following parish policies and procedures are in place.</p>
                  <p>7. Mount Merrion Child Safeguarding Policies and Procedures.</p>
                  <p>On-Site Activities</p>
                  <p>Off-Site Activities</p>
                  <p>Residential Visits</p>
                  <p>
                    All of the above require the completion of the Under 18s
                    Activity Permission Form.
                  </p>
                  <p>8. Incident / Accident Report Form.</p>
                  <p>
                    {linkify(
                      "http://csps.dublindiocese.ie/wp-content/uploads/sites/3/2011/11/incident_-_accident_reporting_form_22_03_2011.doc"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}