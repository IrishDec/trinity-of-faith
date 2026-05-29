"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

type SacramentSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

type SacramentCard = {
  title: string;
  subtitle: string;
  teaser: string;
  hasForm: boolean;
  formLabel?: string;
  formHref?: string;
  sections: SacramentSection[];
};

const sacramentCards: SacramentCard[] = [
  {
    title: "Baptism",
    subtitle: "A welcome into the Christian Family",
    teaser:
      "Baptism welcomes a child into the Christian family and marks the beginning of their spiritual and sacramental life.",
    hasForm: true,
    formLabel: "Start Baptism Request",
    formHref: "/sacraments/baptism",
    sections: [
      {
        heading: "About Baptism",
        body:
          "The sacrament of Baptism is a sacrament of initiation, one of three: Baptism, Holy Communion and Confirmation. It is a time for celebration and joy. It is a special event which not only marks the beginning of a spiritual and sacramental life but also welcomes the child into the parish community.",
      },
      {
        heading: "Baptism Times",
        bullets: [
          "Mount Merrion: 2nd and 4th Saturday of every month.",
          "Kilmacud: 1st Saturday of each month at 11:30am and 3rd Sunday of each month after 11:30am Mass.",
          "Clonskeagh: 1st Sunday of each month during the 10:30am Mass.",
        ],
      },
      {
        heading: "Request Form and Birth Certificate",
        body:
          "Please provide a copy of the child’s original Birth Certificate when submitting a Baptism request.",
      },
      {
        heading: "Baptism Preparation",
        body:
          "Our Parish Baptism Team will help you plan and prepare for your child’s Baptism and will assist the priest at the ceremony. Special arrangements can be made for older children and adults wishing to receive the sacrament of Baptism. Please contact the parish office for more details.",
      },
      {
        heading: "The Ceremony of Baptism",
        body:
          "The ceremony begins with the family being welcomed by the celebrant on behalf of the Church. The priest or deacon asks the parents the name they have given their baby and asks if they accept the undertaking of raising the child in the Christian faith.",
      },
      {
        heading: "Important Signs and Symbols",
        bullets: [
          "The Sign of the Cross: Parents, godparents and the celebrant greet the child by tracing the Sign of the Cross on the child’s forehead. This signifies that the child will belong to Christ.",
          "Proclamation of the Word of God: Reveals the truth of God to all.",
          "Oil of Baptism: A sign of the strength which Christ offers us.",
          "Profession of Faith: Parents recite these on behalf of the candidate, just as their own parents did for them.",
          "Baptismal Water: Consecrated through the power of the Spirit, normally blessed at the Easter Vigil.",
          "Baptism: The essential rite of the sacrament, consisting of a triple pouring of water with the invocation of each person of the Trinity.",
          "Anointing with Sacred Chrism: Signifies the gift of the Holy Spirit and anticipates future Confirmation.",
          "White Garment: The baptised person has put on Christ and is newly clothed in Christ.",
          "Candle: The father or godparent lights a candle from the Paschal Candle as a sign that the baptised person is gifted with the light of Christ.",
        ],
      },
      {
        heading: "Baptismal Certificates",
        body:
          "If you need a Baptismal Certificate, please contact or email the parish office.",
      },
    ],
  },
  {
    title: "First Holy Communion",
    subtitle: "Receiving Communion",
    teaser:
      "Information for families, schools, and parishioners preparing for or receiving Holy Communion.",
    hasForm: false,
    sections: [
      {
        heading: "Communion for the Sick and Housebound",
        body:
          "Ministers of the Eucharist can bring Communion to the sick and housebound. To arrange this, please email the parish office.",
      },
      {
        heading: "First Holy Communion",
        body:
          "Each year about 150 children in our parish partnership prepare to receive First Holy Communion. They participate in the ‘Do This In Memory Of Me’ programme, and schools work with the parish to ensure that children and parents enjoy the experience.",
      },
      {
        heading: "Older Children and Adults",
        body:
          "Most First Communicants are in Second Class of Primary School, but older children and adults can also receive the Sacrament. For more information on the programme, please contact the parish offices.",
      },
    ],
  },
  {
    title: "Reconciliation",
    subtitle: "A Sacrament of Healing",
    teaser:
      "Information about Confession, reconciliation times, and parish availability.",
    hasForm: false,
    sections: [
      {
        heading: "About Reconciliation",
        body: "Reconciliation is one of the Sacraments of healing.",
      },
      {
        heading: "Confession Times",
        bullets: [
          "Kilmacud: Saturdays after the 10:00am Mass and after the 6:00pm Mass. Priests are also available by appointment.",
          "Mount Merrion: Saturdays after 10:00am Mass and after 7:30pm Mass on Sundays.",
          "Clonskeagh: No regular date, but always facilitated on request either before or after Mass.",
        ],
      },
      {
        heading: "Penitential Services",
        body:
          "Penitential Services are arranged for the parish partnership during Lent and Advent.",
      },
    ],
  },
  {
    title: "Confirmation",
    subtitle: "Receiving the Gift of the Holy Spirit",
    teaser:
      "Confirmation is the third Sacrament of initiation and is usually conferred on children in Sixth Class.",
    hasForm: false,
    sections: [
      {
        heading: "About Confirmation",
        body:
          "The Sacrament of Confirmation is the third Sacrament of initiation and is conferred on children in Sixth Class. Through this sacrament the candidates receive the gift of the Holy Spirit.",
      },
      {
        heading: "Christian Witness",
        body:
          "In Confirmation we are called to be witnesses to Christ in the work of building His Kingdom on Earth and in our Christian faith.",
      },
      {
        heading: "Adults and Teenagers",
        body:
          "Adults and teenagers who were not confirmed as children and who would like to receive this sacrament should contact the parish offices.",
      },
    ],
  },
  {
    title: "Marriage",
    subtitle: "Preparing for Marriage",
    teaser:
      "Information on marriage preparation, parish requirements, documents, and civil notification.",
    hasForm: true,
    formLabel: "Start Marriage Enquiry",
    formHref: "/sacraments/marriage",
    sections: [
      {
        heading: "Preparing for Marriage",
        body:
          "Preparing for marriage is an exciting time and we look forward to helping you prepare for your wedding day and your life together as a married couple.",
      },
      {
        heading: "Notice Required",
        body:
          "Four months’ notice of your intention to marry is required, but it is advisable to email the parish office as early as possible to see if your preferred date is available.",
      },
      {
        heading: "You Will Need",
        bullets: [
          "Letter of Freedom to Marry form. A parent or sibling will need to complete this in the presence of a priest.",
          "Participation in a marriage preparation course. These are held at different locations throughout the year and can be booked online.",
          "The prenuptial enquiry form.",
        ],
      },
      {
        heading: "Other Necessary Documents",
        body:
          "Baptism and Confirmation Certificates are required and must be dated within six months of the proposed wedding date.",
      },
      {
        heading: "State Regulations",
        body:
          "The Registrar of Marriages must be notified of your intention to marry, in person, at least three months before the date of the marriage. To notify the registrar, you may book a Marriage Notification appointment online.",
      },
      {
        heading: "Marriage Support",
        body:
          "Accord is the Catholic Marriage Care Service and provides information and support for those preparing for marriage.",
      },
    ],
  },
  {
    title: "Sacrament of the Sick",
    subtitle: "Anointing, Healing and Pastoral Care",
    teaser:
      "Support for those who are ill, housebound, infirm, or in need of healing.",
    hasForm: true,
    formLabel: "Request Support",
    formHref: "/sacraments/pastoral-support",
    sections: [
      {
        heading: "About the Sacrament of the Sick",
        body:
          "This Sacrament of Anointing is celebrated in our partnership twice a year and all are welcome to receive it, especially those who are ill or experience the need for healing in any way.",
      },
      {
        heading: "Available at Any Time",
        body:
          "It is also available at any time to those who are sick or infirm from old age.",
      },
      {
        heading: "Request a Priest Visit or Holy Communion",
        body:
          "If you would like a priest to visit, or would like to receive the Sacrament of the Sick or Holy Communion from a minister of the Eucharist, please contact the parish offices.",
      },
      {
        heading: "Parish Office Contacts",
        bullets: [
          "Mount Merrion: 01 288 1271 — parishoffice@mountmerrion.ie",
          "Kilmacud: 01 288 4009 — kilmacudparishoffice@gmail.com",
          "Clonskeagh: 01 283 7948 — clonskeaghparish@gmail.com",
        ],
      },
    ],
  },
   {
    title: "Holy Orders",
    subtitle: "Priesthood and Religious Life",
    teaser:
      "Information for those who feel drawn to explore a vocation to priesthood or religious life.",
    hasForm: false,
    sections: [
      {
        heading: "Exploring a Vocation",
        body:
          "God continues to call men and women to serve Him in the Priesthood and in Religious Life. If you feel drawn to explore this calling further, please talk to one of our parish partnership team whom you know.",
      },
      {
        heading: "Helpful Websites",
        bullets: ["www.vocationsireland.ie", "www.vocations.ie"],
      },
    ],
  },
];

export default function SacramentsPage() {
  const [openSacrament, setOpenSacrament] = useState<SacramentCard | null>(
    null
  );

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#2f4864] sm:text-5xl">
              Sacramental Life
            </h1>

            <p className="mt-5 text-base leading-7 text-[#425466] sm:text-lg">
              Choose a sacrament below to read more. Baptism, Marriage and
              Sacrament of the Sick include request forms for the parish office.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:gap-6 lg:grid-cols-3">
            {sacramentCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-7"
              >
                <h2 className="text-2xl font-semibold text-[#2f4864] sm:text-3xl">
                  {card.title}
                </h2>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#2f4864]/70">
                  {card.subtitle}
                </p>

                <p className="mt-4 flex-1 text-base leading-7 text-[#425466]">
                  {card.teaser}
                </p>

                <button
                  type="button"
                  onClick={() => setOpenSacrament(card)}
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f4864] shadow-sm ring-1 ring-[#2f4864]/15 transition hover:bg-[#f0ebe2]"
                >
                  View Details
                </button>

                {card.hasForm && card.formHref && card.formLabel && (
                  <a
                    href={card.formHref}
                    className="mt-3 inline-flex w-full justify-center rounded-full bg-[#2f4864] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f]"
                  >
                    {card.formLabel}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>

      {openSacrament && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b2733]/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[#f5f1e8] p-6 shadow-2xl sm:p-8 lg:p-10">
            <button
              type="button"
              onClick={() => setOpenSacrament(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-semibold text-[#2f4864] shadow-md transition hover:bg-[#eef2f5]"
              aria-label="Close sacrament details"
            >
              ×
            </button>

            <div className="pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4864]/70">
                Sacraments
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl">
                {openSacrament.title}
              </h2>

              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#2f4864]/70">
                {openSacrament.subtitle}
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {openSacrament.sections.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                >
                  <h3 className="text-xl font-semibold text-[#2f4864]">
                    {section.heading}
                  </h3>

                  {section.body && (
                    <p className="mt-3 leading-7 text-[#425466]">
                      {section.body}
                    </p>
                  )}

                  {section.bullets && (
                    <div className="mt-3 space-y-2 text-[#425466]">
                      {section.bullets.map((item) => (
                        <p key={item} className="leading-7">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {openSacrament.hasForm &&
              openSacrament.formHref &&
              openSacrament.formLabel && (
                <a
                  href={openSacrament.formHref}
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-[#2f4864] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24384f] sm:w-fit"
                >
                  {openSacrament.formLabel}
                </a>
              )}
          </div>
        </div>
      )}

      <SiteFooter />
    </>
  );
}