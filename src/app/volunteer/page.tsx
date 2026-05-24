"use client";

import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const roles = [
  {
    title: "Altar Servers",
    body: [
      "Our altar servers serve at the ceremonies, which take place in our Church. The role is open to boys and girls who have made their First Holy Communion. In particular, we are looking for altar servers for our Saturday evening Family Masses. Safeguarding procedures are in place.",
    ],
  },
  {
    title: "Bethany Bereavement Support Group",
    body: [
      "This Group was established in the Parish in 1997 and is a voluntary Parish-based Ministry that aims to help the bereaved and grieving by offering support and a listening ear.",
      "They provide one-to-one appointments by arrangement. Usually, a group meeting is held on the last Thursday of each month at 3 p.m. in the Parish Centre.",
      "For further information, contact 087-0527764.",
    ],
  },
  {
    title: "Choirs",
    body: [
      "Family Mass Choir",
      "The Choir sings each Saturday at 6 p.m. at the Family Mass. New members and parents are always welcome. If you have a passion for singing and you are in 2nd class in Primary School or older, we’d love to have you join us.",
      "If you’re more into guitar and have been playing for at least one year, come along and give it a try. No auditions are held; just have fun, develop your talent, build confidence, and make new friends.",
      "Practices are usually at 5:15p.m. on Saturdays, followed by Mass at 6 p.m. from Sep. to June. Life gets busy. We don’t expect you every week. Come when you can.",
      "Parish Choir",
      "The Parish Choir sings at 11:30 am Mass every Sunday except during the summer. Currently, rehearsals take place on Sunday mornings at 10:30am. The group is interested in talking to any Parishioner who would like to join the group.",
    ],
  },
  {
    title: "Church Cleaners",
    body: [
      "This Group comprises volunteers who assist with the general care of the Church every week. They usually meet on Wednesday mornings at 9:00 a.m. for approximately one hour. Offers of new help are welcome.",
    ],
  },
  {
    title: "Church Grounds Maintenance",
    body: [
      "Maintenance work is typically conducted weekly from 10:30a.m. to 12:30p.m. approx. on Tuesdays. The grounds are maintained by mowing the grass, weeding, planting, cutting the hedges, edging footpaths and driveways, and keeping the area clean.",
      "Several additional initiatives are currently underway, including rewilding projects. The Stillorgan Man’s Shed joins us once a month.",
    ],
  },
  {
    title: "Coffee Dock",
    body: [
      "The Coffee Dock is in the Parish Centre and is open every morning after Mass. Volunteers run it, and additional volunteers and/or help are welcome, particularly to cover busy periods e.g., during hospitality events.",
    ],
  },
  {
    title: "Do This In Memory of Me (DTIM) Communion Preparation Programme",
    body: [
      "This is a Programme of preparation for First Communion, centred on the Parish celebration of the Sunday Eucharist. The three main Primary Schools in the Parish support this Programme. Home, School and Parish are involved.",
      "The Programme resources are designed to facilitate the active involvement of parents, families, and parishes.",
      "Volunteers are needed to assist and support the Community Preparation Programme, creating a very enjoyable Mass each month that focuses on children preparing for First Communion. Volunteers will work as part of the Parents Planning Team and/or as Programme Coordinators.",
    ],
  },
  {
    title: "Eucharistic Ministers",
    body: [
      "Ministers assist in distributing Communion at weekday or Sunday Masses and may also take Holy Communion to the housebound. Depending on the number of ministers available for each Mass, people typically minister at the Mass they usually attend.",
    ],
  },
  {
    title: "Flower Team",
    body: [
      "This enjoyable Ministry aims to enhance and beautify the Church’s interior. The team consists of three members, but we also welcome new members. There is a flower room beside the Sacristy.",
      "Meetings typically take place every couple of weeks, but more frequently in the run-up to significant events, such as Christmas, Easter, Confirmation, Holy Communion, and occasions when flower displays enhance/reflect the celebratory and spiritual significance of an occasion.",
      "The team meets less frequently during Lent and Advent, when most forms of adornment in the Church are pared back. No training/prior experience in flower arranging is required.",
    ],
  },
  {
    title: "Funeral Team",
    body: [
      "The Funeral Ministry team consists of religious and lay men and women who are trained to provide support and help to a bereaved family when organising a Christian Funeral.",
      "We may speak with the deceased person’s family before the funeral, help them choose readings, and assist the priest and family during the funeral Mass.",
      "Members of the Funeral Ministry team may also lead prayers at the family home or the funeral home before a funeral, as well as in the Church, and offer final prayers at the interment service at a graveside or crematorium.",
      "Funeral Ministry is a nice pastoral opportunity. It adds to the offering of Parish sympathy to the family of the deceased as we welcome them to our Church one last time. It is also a nice way to support the Priests in our Parish. The Parish/Diocese provides training to those interested in this role in our Parish.",
    ],
  },
  {
    title: "Hospitality Weekends",
    body: [
      "Tea, coffee, and biscuits are offered after Masses on the last weekend of each month. Volunteers help set up before Mass, serve tea and coffee, and assist with cleanup afterwards.",
      "There are usually at least three to four volunteers at each Mass, so new volunteers will have experienced people to work alongside. Volunteers are not expected to attend every month. The week before a Hospitality weekend, an email is sent to see who is available.",
      "This is an enjoyable and sociable way to get involved in the Parish.",
    ],
  },
  {
    title: "Legion of Mary",
    body: [
      "The Legion of Mary’s 2021 celebration marked the 100th anniversary of the Legion’s founding. The Legion has grown from 15 people to over 4 million active members and 7 million auxiliary members today in more than 170 countries.",
      "These members meet weekly and carry out an assigned task later in the week.",
      "For more information, please refer to the website https://www.legionofmary.ie/.",
    ],
  },
  {
    title: "Liturgy Group",
    body: [
      "Working with our Parish priests and sisters, the Liturgy Group supports the Parish by planning and organising prayerful liturgical celebrations throughout the year.",
      "In recent years, the Group has supported the annual Remembrance Mass, introduced Lenten retreats, organised the New Year’s Eve service, and provided training and support for other ministries.",
      "We aim to build hope in our Parish through joyful and reverent liturgies. The Group meets every two months.",
    ],
  },
  {
    title: "Weekday Ministers of the Word",
    body: [
      "Readers read once a week. The readings can be made available for practice in advance. Ministers of the Word read once a week every second month.",
      "Other arrangements can be made if a reader is unable to attend. Current readers can offer advice and support, and the Dublin Diocese holds training evenings for Ministers of the Word.",
    ],
  },
  {
    title: "Weekend Ministers of the Word",
    body: [
      "Ministers of the Word play a vital role in our Parish by proclaiming the Word of God during Mass, enhancing the worship experience for the congregation.",
      "Reading at Mass helps facilitate the congregation’s connection with God’s message.",
      "Volunteering for this role provides a unique opportunity for personal spiritual growth, deepening your understanding of Scripture and fostering a greater sense of community and participation.",
      "Ministers of the Liturgy at the 6 p.m. Saturday Mass and the 11:30 Sunday Mass typically serve once every 4-6 weeks. The Group is supportive and accommodating, always welcoming new members.",
      "Training and ongoing support are provided to all new and returning readers, empowering readers to share faith and talents with confidence.",
    ],
  },
  {
    title: "Padre Pio Prayer Group",
    body: [
      "This Group’s purpose is to encourage prayer through Association with Saint Pio. It meets on the third Wednesday of the month for the 10:00 am Mass.",
    ],
  },
  {
    title: "Parish Baptism Team",
    body: [
      "The Parish is looking to get the Baptism Team back up and running. The Baptism Team assists families in preparing for the sacrament of Baptism.",
      "Along with the priest, they guide families through the preparation process, help during the Baptism Ceremony, and provide ongoing support and resources for the families as they continue their faith journey.",
      "It is anticipated that the time commitment for this role would involve being present to assist during the Baptism Ceremony and one meeting per month with families preparing for Baptism.",
    ],
  },
  {
    title: "Parish Finance Committee",
    body: [
      "This Committee is seeking new members with knowledge of finance who can attend 4-6 meetings per year.",
      "This committee advises the Parish on all financial matters, assists in managing Parish finances, prepares budgets, and oversees financial records.",
      "If you are interested in becoming a member, please contact Kevin Galligan, the Chairperson, through the Parish Office.",
    ],
  },
  {
    title: "Parish Pastoral Council",
    body: [
      "The Council is a leadership group within the Parish, where priests, pastoral workers, and lay members collaborate to develop, guide, and support the Parish, helping to build a vibrant Christian community.",
      "If you would like to get involved, please contact the Parish Office.",
    ],
  },
  {
    title: "Parish Youth Forum",
    body: [
      "This group is designed to provide young people between 18 and 40 years of age with an opportunity to voice their ideas, opinions, and needs regarding the development and growth of their faith.",
      "It focuses on issues impacting young people within the Parish and in life.",
      "The Parish is looking for volunteers to support the Youth Forum, such as organising events, assisting with mentoring, and supporting fundraising efforts.",
    ],
  },
  {
    title: "Pioneers Association",
    body: [
      "The Association’s object is to promote sobriety. Members undertake to abstain from alcoholic drinks, recite the Heroic Offering morning and night, and wear the Pioneer Pin.",
      "The Kilmacud Branch was founded in 1917 and is now attached to the Parish Church.",
    ],
  },
  {
    title: "Sacristan",
    body: [
      "The role of Sacristan is a meaningful way to serve the Parish by preparing for and supporting liturgical celebrations.",
      "Sacristans are responsible for the physical elements of Mass, including preparing the altar, maintaining the Sacristy, and ensuring that necessary items are available.",
      "They may also help with tasks such as lighting candles, presenting the Eucharist, and assisting the priest.",
    ],
  },
];

function Page({
  children,
  page,
  className = "",
}: {
  children: ReactNode;
  page?: string;
  className?: string;
}) {
  return (
    <section
      className={`relative min-h-[780px] overflow-hidden rounded bg-[#fbf7df] px-5 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:min-h-[900px] sm:px-8 sm:py-10 print:min-h-[270mm] print:rounded-none print:shadow-none ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(195,211,61,0.25),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(195,211,61,0.18),transparent_20%)]" />
      <div className="relative z-10">{children}</div>

      {page && (
        <div className="absolute bottom-0 left-0 right-0 flex h-10 items-center bg-[#a9c90a] px-5 text-xs font-semibold text-white sm:px-8">
          <span>{page}</span>
          <span className="mx-2">|</span>
          <span>Volunteer Handbook</span>
        </div>
      )}
    </section>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-7">
      <h3 className="border-b border-[#d9df9c] pb-1 text-xl font-extrabold leading-tight text-[#a5bf22] sm:text-[22px]">
        {title}
      </h3>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-[#2f3a42]">
        {children}
      </div>
    </div>
  );
}

function RoleBlock({ title, body }: { title: string; body: string[] }) {
  return (
    <SectionBlock title={title}>
      {body.map((p, i) => {
        const isSubheading = p === "Family Mass Choir" || p === "Parish Choir";

        return isSubheading ? (
          <p key={i} className="font-bold text-[#557294]">
            {p}
          </p>
        ) : (
          <p key={i}>{p}</p>
        );
      })}
    </SectionBlock>
  );
}

export default function VolunteerPage() {
  return (
    <>
      <div className="print:hidden">
        <SiteHeader />
      </div>

      <main className="bg-[#e8e1d2] px-4 py-8 text-[#24364a] print:bg-white print:px-0 print:py-0">
        <div className="mx-auto mb-6 flex max-w-6xl justify-end print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full bg-[#2f5d46] px-5 py-3 font-bold text-white shadow"
          >
            Print / Save as PDF
          </button>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 print:block">
          <Page>
            <div className="mb-10 inline-block rounded-r-2xl bg-[#2f5d46] px-6 py-3 text-white sm:px-8">
              <h1 className="text-3xl font-extrabold sm:text-4xl">
                Volunteer Handbook
              </h1>
            </div>

            <div className="mt-10 rounded-[2rem] bg-[#eff6c9] p-6 sm:p-8">
              <h2 className="text-3xl font-extrabold leading-tight text-[#966c45] sm:text-4xl">
                Be a part of your Parish Community
              </h2>

              <p className="mt-8 text-2xl font-extrabold text-[#2f5d46] sm:text-3xl">
                All are welcome
              </p>

              <p className="mt-10 text-lg leading-8 text-[#26343d]">
                A handbook of volunteer opportunities in Kilmacud Parish and
                across the Trinity of Faith Partnership.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 text-center text-xs font-bold text-[#4b6534] sm:grid-cols-2">
              {roles.slice(0, 18).map((role) => (
                <div key={role.title} className="rounded-full bg-[#c8df2b] p-3">
                  {role.title}
                </div>
              ))}
            </div>
          </Page>

          <Page page="1">
            <div className="ml-auto max-w-[460px] pt-6">
              <h2 className="mb-8 text-4xl font-extrabold text-[#2f5d46] sm:text-5xl">
                Welcome
              </h2>

              <p className="mb-5 text-lg font-bold leading-7 text-[#2f5d46]">
                This handbook provides an overview of the volunteer
                opportunities available in the Parish.
              </p>

              <div className="space-y-4 text-[15px] leading-7 text-[#26343d]">
                <p>
                  Volunteers are one of Kilmacud Parish’s most significant
                  resources and are an essential part of the Parish’s work and
                  activities. Their time, energy, and talents help and inspire
                  hope and are crucial to our ability to deliver services
                  throughout the Parish.
                </p>

                <p>
                  Many Parish programmes would be unable to carry out their work
                  without volunteers. By engaging Volunteers in Parish work
                  activities, the Parish can expand the efforts of its current
                  and pre-existing staff and volunteer team and reach more
                  Parishioners.
                </p>

                <p className="italic">
                  Volunteer Handbook Edition No. 2 as of 23rd Sep. 2025
                </p>
              </div>

              <SectionBlock title="Thank you to our current Volunteers">
                <p>
                  To our current Volunteers, we would like to express our
                  sincere appreciation for your continued commitment, support,
                  and contributions to the Parish community. Your efforts do not
                  go unnoticed and are deeply valued.
                </p>
              </SectionBlock>

              <SectionBlock title="Invitation to new Volunteers">
                <p>
                  For those considering becoming Volunteers, we invite you to
                  join the Parish volunteering community. It is a wonderful
                  opportunity to use your skills, talents, and kindness.
                </p>
              </SectionBlock>
            </div>
          </Page>

          <Page page="2">
            <SectionBlock title="Questions">
              <p>
                If you have any questions or require clarification on the
                information in this handbook, please get in touch with the
                Kilmacud Parish Office.
              </p>
            </SectionBlock>

            <div className="mt-12 rounded-[28px] bg-[#eff6c9] p-7 text-[15px] leading-7 shadow-sm">
              <p className="font-bold text-[#557294]">
                Contact details are as follows:
              </p>
              <p>Opening hours are usually Monday–Friday 9.00 a.m. - 12 noon</p>
              <p className="mt-4 font-bold text-[#557294]">
                Parish Secretary
              </p>
              <p>Christine Mullock</p>
              <p>Tel. (01) 2884009</p>
              <p>
                <a
                  className="underline"
                  href="mailto:kilmacudparishoffice@gmail.com"
                >
                  kilmacudparishoffice@gmail.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a className="underline" href="https://www.kilmacudparish.ie">
                  www.kilmacudparish.ie
                </a>
              </p>
              <p>Kilmacud Parish - Registered Charity Number (RCN 20016166)</p>
            </div>
          </Page>

          <Page page="3">
            <h2 className="mb-8 max-w-[420px] text-4xl font-extrabold leading-tight text-[#557294] sm:text-5xl">
              A few words from Fr. Joe
            </h2>

            <div className="space-y-4 text-[15px] leading-7 text-[#26343d]">
              <p>Dear Parishioners,</p>
              <p>
                If you volunteer in our Kilmacud Parish, you will join our
                dedicated team of staff and volunteers. Our Parish Team has a
                rich tradition of serving the Parishioners in our community
                across Kilmacud, Stillorgan, Mount Merrion, and Clonskeagh.
              </p>
              <p>
                Each of our three Parishes in the partnership is blessed with
                volunteers who give amazing service to the faith community. We
                all applaud these men and women and pray that they will be
                blessed with this wonderful spirit in the months ahead and carry
                on with this essential work. It is an expression of your
                Baptismal calling and a great gift to the Church.
              </p>
              <p>
                I’m not quite sure why we find it hard to recruit new members to
                the many varied Groups serving this community. I believe our
                existing members would welcome new members, offer support and
                training and modify existing rotas to accommodate the new
                joiners.
              </p>
              <p>
                If you are ready to serve, please step forward. I invite Group
                Leaders to make their contact details available around the
                Church, along with information about the application process, and
                to welcome everyone who expresses an interest. We simply can’t
                have a Parish without people and priests working together in a
                spirit of co-responsibility.
              </p>
              <p>Sincerely,</p>
              <p className="font-bold">
                Fr Joe Mullan,
                <br />
                Parish Priest Mount Merrion, Kilmacud, Clonskeagh<br></br>
              </p>
            </div>
          </Page>

          <Page page="4">
            <SectionBlock title="Do I need prior experience?">
              <p>
                No. Where necessary, support and training will be made available
                to help you.
              </p>
            </SectionBlock>

            <SectionBlock title="What time commitment is required?">
              <p>
                Whether you can commit a lot of time or just a little, there are
                volunteer roles and opportunities available in the Parish.
              </p>
              <p>
                Volunteers who can contribute any amount of time are welcome to
                join. We understand that life can be busy and that people may
                have other commitments preventing them from attending every week
                or month. A volunteer can contribute occasionally, more
                regularly, or on a longer or shorter term.
              </p>
            </SectionBlock>

            <RoleBlock title={roles[0].title} body={roles[0].body} />
            <RoleBlock title={roles[1].title} body={roles[1].body} />
          </Page>

          <Page page="5">
            <RoleBlock title={roles[2].title} body={roles[2].body} />
            <RoleBlock title={roles[3].title} body={roles[3].body} />
            <RoleBlock title={roles[4].title} body={roles[4].body} />
          </Page>

          <Page page="6">
            <RoleBlock title={roles[5].title} body={roles[5].body} />
            <RoleBlock title={roles[6].title} body={roles[6].body} />
            <RoleBlock title={roles[7].title} body={roles[7].body} />
          </Page>

          <Page page="7">
            <RoleBlock title={roles[8].title} body={roles[8].body} />
            <RoleBlock title={roles[9].title} body={roles[9].body} />
          </Page>

          <Page page="8">
            <RoleBlock title={roles[10].title} body={roles[10].body} />
            <RoleBlock title={roles[11].title} body={roles[11].body} />
            <RoleBlock title={roles[12].title} body={roles[12].body} />
            <RoleBlock title={roles[13].title} body={roles[13].body} />
          </Page>

          <Page page="9">
            <RoleBlock title={roles[14].title} body={roles[14].body} />
            <RoleBlock title={roles[15].title} body={roles[15].body} />
            <RoleBlock title={roles[16].title} body={roles[16].body} />
          </Page>

          <Page page="10">
            <RoleBlock title={roles[17].title} body={roles[17].body} />
            <RoleBlock title={roles[18].title} body={roles[18].body} />
            <RoleBlock title={roles[19].title} body={roles[19].body} />
            <RoleBlock title={roles[20].title} body={roles[20].body} />
          </Page>

          <Page page="11">
            <RoleBlock title={roles[21].title} body={roles[21].body} />

            <div className="-mx-5 mt-8 bg-[#2f5d46] px-5 py-5 text-white sm:-mx-8 sm:px-8">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Who should I contact if I am interested?
              </h2>
            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#26343d]">
              <p>
                If you are interested in volunteering, the best way to contact
                us is by email to{" "}
                <a
                  className="font-bold underline"
                  href="mailto:kilmacudparishoffice@gmail.com"
                >
                  kilmacudparishoffice@gmail.com
                </a>
                .
              </p>
              <p>
                You can also contact us in person at the Kilmacud Parish Office,
                which is usually open Monday to Friday from 9:00 am to 12:00
                noon, or reach us by telephone at (01) 2884009.
              </p>
            </div>
          </Page>

          <Page page="12">
            <div className="-mx-5 -mt-8 mb-10 bg-[#2f5d46] px-5 py-6 text-white sm:-mx-8 sm:-mt-10 sm:px-8">
              <h2 className="text-xl font-extrabold leading-tight sm:text-2xl">
                Church of St. Laurence O’Toole, Kilmacud
                <br />
                Confidential Expression of Interest - Volunteers
              </h2>
            </div>

            <form className="space-y-7 text-[15px]">
              {["Name:", "Address:", "Telephone:", "Email:"].map((label) => (
                <label key={label} className="grid gap-2">
                  <span className="font-bold text-[#557294]">{label}</span>
                  <span className="block border-b border-dotted border-[#9aa4a0] pb-5" />
                </label>
              ))}

              <label className="grid gap-2">
                <span className="font-bold text-[#557294]">
                  I would be interested in the following volunteer role(s):
                </span>
                <span className="block border-b border-dotted border-[#9aa4a0] pb-8" />
                <span className="block border-b border-dotted border-[#9aa4a0] pb-8" />
                <span className="block border-b border-dotted border-[#9aa4a0] pb-8" />
              </label>
            </form>

            <div className="mt-16 text-[15px] leading-7">
              <p>
                Please email to{" "}
                <a
                  className="underline"
                  href="mailto:kilmacudparishoffice@gmail.com"
                >
                  kilmacudparishoffice@gmail.com
                </a>
                .
              </p>
              <p>
                Or drop into the parish office Monday - Friday between 9.00am
                and 12.00pm.
              </p>
            </div>
          </Page>
        </div>
      </main>

      <div className="print:hidden">
        <SiteFooter />
      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          body {
            background: white !important;
          }

          main > div:last-child > section {
            page-break-after: always;
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}