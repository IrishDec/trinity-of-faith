import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#f5f1e8] px-6 py-10 text-[#1f2f3f] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f4864] sm:text-4xl lg:text-5xl">
              About the Trinity of Faith Parish Partnership
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#425466] sm:text-lg">
              A shared journey between Mount Merrion, Kilmacud, and Clonskeagh,
              rooted in faith, community, and hope for the future.
            </p>
          </div>

          <section className="rounded-[32px] bg-white px-6 py-7 shadow-sm ring-1 ring-black/5 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  About the Trinity of Faith Parish Partnership
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  We are delighted to introduce the Trinity of Faith Parish
                  Partnership, a new and exciting collaboration between the
                  parishes of Mount Merrion, Kilmacud, and Clonskeagh all
                  vibrant communities within the Archdiocese of Dublin. This
                  partnership marks a significant step forward as we work
                  together to respond to the needs and hopes of our parishes
                  today and into the future.
                </p>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  What is a Parish Partnership?
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  A parish partnership is a new way of organising and sharing
                  resources, ministries, and mission across neighbouring parish
                  communities. While each parish retains its unique identity and
                  traditions, we are now working more closely together, sharing
                  pastoral leadership, deepening our collaboration, and
                  combining our gifts and strengths to better serve the people
                  of God.
                </p>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  Why is this happening?
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  The Church is responding to changing realities, fewer priests,
                  evolving parish life, and the call for greater lay
                  involvement. Parish partnerships are part of a wider renewal
                  across the Dublin Diocese, recognising that, together, we are
                  stronger and better able to carry out the mission of Christ in
                  a changing world. By building closer bonds between Mount
                  Merrion, Kilmacud, and Clonskeagh, we can support one another,
                  energise our communities, and plan creatively for a
                  sustainable and hope-filled future.
                </p>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <h2 className="text-2xl font-semibold text-[#2f4864]">
                  What does this mean for the future?
                </h2>
                <p className="mt-4 text-[17px] leading-8 text-[#425466] sm:text-[18px] sm:leading-9">
                  The Trinity of Faith Parish Partnership invites all
                  parishioners to a new spirit of cooperation and shared
                  mission. In time, you may notice shared initiatives, joint
                  celebrations, and collaborative pastoral teams. Priests and
                  lay leaders will work together across the three parishes,
                  ensuring that worship, sacramental life, faith formation, and
                  pastoral care continue to flourish. Our vision is rooted in
                  faith, community, and the belief that by journeying together,
                  we can better witness to the Gospel in our time.
                </p>
              </div>

              <div className="border-t border-[#e8e1d4] pt-8">
                <p className="text-[17px] font-medium leading-8 text-[#2f4864] sm:text-[18px] sm:leading-9">
                  We look forward to what lies ahead, trusting that the Holy
                  Spirit is guiding this journey and grateful for the rich faith
                  tradition we share.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}