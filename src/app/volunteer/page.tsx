"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const parishEmails: Record<string, string> = {
  Clonskeagh: "clonskeaghparish@gmail.com",
  Kilmacud: "kilmacudparishoffice@gmail.com",
  "Mount Merrion": "parishoffice@mountmerrionparish.ie",
  "Not sure": "kilmacudparishoffice@gmail.com",
};

const ministryOptions = [
  "Altar Servers",
  "Baptism Team",
  "Adoration",
  "Bethany Bereavement Support",
  "Music and Choirs",
  "Church Cleaners",
  "Church Grounds & Maintenance",
  "Coffee Dock / Hospitality",
  "Faith Space Group",
  "Family Mass Group",
  "Floral Art / Altar Society",
  "Funeral Ministry",
  "Legion of Mary",
  "Ministers of the Word",
  "Ministers of the Eucharist",
  "Communications Group",
  "Pioneers",
  "St. Joseph’s Young Priests Society",
  "Society of St. Vincent de Paul",
  "Other / Not sure",
];

export default function VolunteerPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedParish, setSelectedParish] = useState("Not sure");
  const [selectedMinistry, setSelectedMinistry] = useState("Other / Not sure");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    const to = parishEmails[selectedParish] || parishEmails["Not sure"];

    const subject = encodeURIComponent(
      `Volunteer enquiry - ${selectedMinistry}`
    );

    const body = encodeURIComponent(
      `Volunteer enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nParish: ${selectedParish}\nArea of interest: ${selectedMinistry}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] text-[#16283a]">
        <section className="border-b border-[#d8d0c0] bg-[#fbfaf5] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a7a20]">
              Trinity of Faith Partnership
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Get Involved in Parish Life
            </h1>

            <div className="mt-6 space-y-5 text-base font-medium leading-8 text-[#1f2f3f] sm:text-lg">
              <p>
                Our parishes are vibrant, welcoming communities, and they thrive
                because of the wonderful people who give their time, energy, and
                heart.
              </p>

              <p>
                Whether you are new to the parish or have been here for years,
                there are many ways you can share your gifts, meet others, and
                feel more connected. From music to ministry, hospitality to
                helping hands, there is something for everyone, no matter your
                age, background, or schedule.
              </p>

              <p>
                You do not need any special experience, just a willing spirit
                and a bit of time. Getting involved is a beautiful way to grow in
                faith, serve others, and truly feel at home in your parish
                community.
              </p>

              <p className="font-semibold">We would love to have you join us.</p>
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-[#E8D33F] bg-[#fff9d8] px-5 py-4 text-sm font-semibold leading-7 text-[#1f2f3f]">
              To get involved in any of the groups or ministries below, please
              contact the relevant parish office.
            </div>

            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="mt-8 inline-flex rounded-full bg-[#24384f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1c2d42]"
            >
              Contact a Parish Office
            </button>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold leading-tight text-[#064660] sm:text-3xl">
              Parish Groups & Ministries
              <span className="block text-xl font-medium sm:text-2xl">
                Clonskeagh, Kilmacud & Mount Merrion
              </span>
            </h2>

            <div className="mt-10 space-y-14">
              <section>
                <h3 className="text-2xl font-semibold text-[#064660]">
                  Serving at Mass
                </h3>

                <div className="mt-6 space-y-9">
                  <Ministry
                    title="Altar Servers"
                    parish="Kilmacud & Mount Merrion"
                  >
                    Open to children aged 9–15 who have made their First Holy
                    Communion. Altar servers assist at weekend and special
                    liturgies. Training can be provided.
                  </Ministry>

                  <Ministry title="Baptism Team" parish="Kilmacud">
                    Volunteers help families prepare for the sacrament and
                    support them on the day of baptism. Volunteers normally meet
                    the family the month before the Baptism, usually on the last
                    Tuesday of the month for Baptisms taking place the following
                    month.
                  </Ministry>

                  <Ministry
                    title="Ministers of the Word"
                    parish="Clonskeagh, Kilmacud & Mount Merrion"
                  >
                    Ministers of the Word read at daily and weekend Masses,
                    including special occasions. New readers are always welcome.
                    Training can be provided and rotas are arranged in advance,
                    taking availability into account.
                  </Ministry>

                  <Ministry
                    title="Ministers of the Eucharist"
                    parish="Clonskeagh, Kilmacud & Mount Merrion"
                  >
                    Ministers of the Eucharist serve during Mass and bring Holy
                    Communion to the housebound. Training and commissioning are
                    provided at specific times throughout the year. Rotas are
                    arranged in advance, taking availability into account.
                  </Ministry>

                  <Ministry
                    title="Funeral Ministry Teams"
                    parish="Kilmacud & Mount Merrion"
                  >
                    These lay teams offer compassionate support and coordination
                    at funerals, working closely with parish clergy. Volunteers
                    can help family members arrange readings, prayers and music,
                    and provide support and guidance beforehand and on the day.
                  </Ministry>
                </div>
              </section>

              <Divider />

              <section>
                <h3 className="text-2xl font-semibold text-[#064660]">
                  Music and Choirs
                </h3>

                <div className="mt-6 space-y-7 leading-7 text-[#1f2f3f]">
                  <div>
                    <h4 className="text-xl font-semibold text-[#064660]">
                      Kilmacud
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        Sunday Choir at 11:30 a.m. Mass — practice at 10:30
                        a.m.
                      </li>
                      <li>
                        Youth Choir at Saturday 6:00 p.m. Mass — musicians and
                        singers welcome, practice at 5:00 p.m.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#064660]">
                      Mount Merrion
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                      <li>
                        Children’s Choir at alternate Saturday 6:00 p.m. Mass,
                        open to all school-age children. Practice is usually at
                        4:30 p.m. before Mass.
                      </li>
                      <li>
                        Lisieux Singers at alternate Saturday 6:00 p.m. Mass,
                        female group aged 18–26. Practice at 5:20 p.m. before
                        Mass.
                      </li>
                      <li>
                        Mount Merrion Singers at alternate Sunday 7:30 p.m.
                        Mass. Practice at 6:30 p.m.
                      </li>
                      <li>
                        Senior Choir at Sunday 10:00 a.m. Mass. Practice at
                        9:15 a.m.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#064660]">
                      Clonskeagh
                    </h4>
                    <p className="mt-3">
                      The choir sings at Sunday Mass, directed by Jacinta
                      Quigley, and is keen to welcome new members.
                    </p>
                  </div>
                </div>
              </section>

              <Divider />

              <section>
                <h3 className="text-2xl font-semibold text-[#064660]">
                  Prayer, Faith and Liturgy
                </h3>

                <div className="mt-6 space-y-9">
                  <Ministry
                    title="Apostolate of Perpetual Eucharistic Adoration"
                    parish="Mount Merrion & Kilmacud"
                  >
                    Parishioners volunteer to spend one regular hour a week in
                    prayer before the Blessed Sacrament. This offers a peaceful,
                    intimate time with Jesus in the Adoration Chapel.
                  </Ministry>

                  <Ministry title="Faith Space Group" parish="Mount Merrion">
                    This group creates liturgical-themed visual installations to
                    inspire reflection based on scripture and Church seasons.
                    The Faith Space draws attention to aspects of the current
                    liturgical season using scriptural references, symbols and
                    visual aids.
                  </Ministry>

                  <Ministry title="Family Mass Group" parish="Mount Merrion">
                    This group organises liturgy and encourages children’s
                    involvement in Masses throughout the year through readings,
                    prayers and gifts. Volunteers are welcome regularly or every
                    now and again.
                  </Ministry>

                  <Ministry
                    title="Legion of Mary"
                    parish="Kilmacud, Mount Merrion & Clonskeagh"
                  >
                    Our Lady of Beauraing Praesidium meets weekly and performs
                    prayer and outreach tasks. Clonskeagh details can be
                    confirmed through the parish office.
                  </Ministry>

                  <Ministry title="Pioneers" parish="Kilmacud">
                    The Pioneers promote sobriety and prayerful living through
                    abstinence from alcohol. The Kilmacud branch has been active
                    since 1917.
                  </Ministry>

                  <Ministry
                    title="St. Joseph’s Young Priests Society"
                    parish="Mount Merrion"
                  >
                    This society supports vocations through prayer and funding
                    of seminarians.
                  </Ministry>
                </div>
              </section>

              <Divider />

              <section>
                <h3 className="text-2xl font-semibold text-[#064660]">
                  Hospitality, Welcome and Church Care
                </h3>

                <div className="mt-6 space-y-9">
                  <Ministry
                    title="Church Cleaners"
                    parish="Clonskeagh, Kilmacud & Mount Merrion"
                  >
                    Help keep our churches clean, welcoming and beautiful with
                    just an hour of your time each week. Kilmacud meets on
                    Wednesdays at 9:00 a.m. Mount Merrion meets on Tuesdays
                    after 10:00 a.m. Mass. Clonskeagh usually meets on a
                    Saturday.
                  </Ministry>

                  <Ministry
                    title="Church Grounds & Maintenance"
                    parish="Clonskeagh, Kilmacud & Mount Merrion"
                  >
                    Friendly teams help keep the church grounds tidy and
                    beautiful. Volunteers help with grass cutting, weeding and
                    general upkeep. Kilmacud meets on Tuesdays at 10:00 a.m.
                    Mount Merrion meets on Tuesdays at 10:15 a.m. Clonskeagh is
                    organised by the sacristan on a regular basis.
                  </Ministry>

                  <Ministry
                    title="Coffee Dock / Hospitality Group"
                    parish="Clonskeagh, Kilmacud & Mount Merrion"
                  >
                    Volunteers help serve tea, coffee and a warm welcome after
                    Mass and special liturgies. Kilmacud Coffee Dock is open
                    after morning Mass in the Parish Centre. Mount Merrion
                    welcomes attendees at special liturgies. Clonskeagh serves
                    tea and biscuits after Mass on a monthly basis.
                  </Ministry>

                  <Ministry
                    title="Floral Art Group & Altar Society"
                    parish="Mount Merrion"
                  >
                    Volunteers care for the altar linen and flowers in the
                    church. This friendly group meets weekly and is always open
                    to new volunteers.
                  </Ministry>

                  <Ministry title="Lending Library" parish="Mount Merrion">
                    This spiritual self-service library is located in the church
                    porch and is open whenever the church is open.
                  </Ministry>
                </div>
              </section>

              <Divider />

              <section>
                <h3 className="text-2xl font-semibold text-[#064660]">
                  Care, Support and Community
                </h3>

                <div className="mt-6 space-y-9">
                  <Ministry
                    title="Bethany Bereavement Support Group"
                    parish="Kilmacud"
                  >
                    Volunteers support people who have been bereaved with
                    one-to-one sessions and monthly group meetings on the last
                    Thursday at 3:00 p.m. in the Kilmacud Parish Centre.
                  </Ministry>

                  <Ministry
                    title="Society of St. Vincent de Paul"
                    parish="Mount Merrion & Clonskeagh"
                  >
                    Confidential support is offered for individuals and families
                    in need, including assistance with food, fuel, education and
                    more. Support lines: 087 163 9052 or 01 838 6990.
                  </Ministry>

                  <Ministry
                    title="Communications Group"
                    parish="Clonskeagh, Kilmacud & Mount Merrion"
                  >
                    This group maintains the parish partnership website and
                    social media channels, helping to keep information updated.
                    New volunteers with digital skills are always welcome.
                  </Ministry>
                </div>
              </section>
            </div>

            <div className="mt-16 rounded-3xl bg-[#24384f] px-6 py-10 text-center text-white sm:px-10">
              <h2 className="text-3xl font-semibold">
                Interested in getting involved?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/85">
                Contact the relevant parish office and someone will help point
                you in the right direction.
              </p>
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#24384f] transition hover:bg-[#f0ebe2]"
              >
                Contact a Parish Office
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b2733]/70 p-4 backdrop-blur-sm">
          <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-[#f5f1e8] p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-semibold text-[#24384f] shadow"
              aria-label="Close contact form"
            >
              ×
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#064660]">
              Volunteer Enquiry
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#111827]">
              Contact a Parish Office
            </h2>

            <p className="mt-3 leading-7 text-[#425466]">
              Choose the parish and ministry you are interested in. This will
              open an email addressed to the relevant parish office.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <Input name="name" label="Name" required />
              <Input name="email" label="Email" type="email" required />
              <Input name="phone" label="Phone" />

              <label className="block">
                <span className="text-sm font-semibold text-[#24384f]">
                  Which parish?
                </span>
                <select
                  value={selectedParish}
                  onChange={(event) => setSelectedParish(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#d8d0c0] bg-white px-4 py-3 text-[#1f2f3f] outline-none focus:border-[#24384f]"
                >
                  {Object.keys(parishEmails).map((parish) => (
                    <option key={parish}>{parish}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#24384f]">
                  Area of interest
                </span>
                <select
                  value={selectedMinistry}
                  onChange={(event) => setSelectedMinistry(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-[#d8d0c0] bg-white px-4 py-3 text-[#1f2f3f] outline-none focus:border-[#24384f]"
                >
                  {ministryOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#24384f]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-[#d8d0c0] bg-white px-4 py-3 text-[#1f2f3f] outline-none focus:border-[#24384f]"
                  placeholder="Tell us briefly how you would like to get involved."
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-[#24384f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2d42]"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function Ministry({
  title,
  parish,
  children,
}: {
  title: string;
  parish: string;
  children: React.ReactNode;
}) {
  return (
    <article className="border-b border-[#d8d0c0] pb-8 last:border-b-0">
      <h4 className="text-xl font-medium leading-snug text-[#064660] sm:text-2xl">
        {title}{" "}
        <span className="text-xl font-normal text-[#064660]/85">
          ({parish})
        </span>
      </h4>
      <p className="mt-3 text-base leading-7 text-[#1f2f3f]">{children}</p>
    </article>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[#d8d0c0]" />;
}

function Input({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#24384f]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-[#d8d0c0] bg-white px-4 py-3 text-[#1f2f3f] outline-none focus:border-[#24384f]"
      />
    </label>
  );
}