import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

export default function AboutPage() {
  return (
    <main className="w-full bg-[#F5FAFE] pt-[76px]">
      {/* Hero Banner */}
      <section className="pt-4">
        <Container>
          <Reveal from="down">
            <div className="relative h-[180px] overflow-hidden rounded-[22px] bg-white/40 shadow-sm sm:h-[230px] md:h-[290px] lg:h-[340px]">
              <Image
                src="/maxxon/hero-banner.png"
                alt="Maxxon hero banner"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal from="up" delay={0.05}>
            <h1 className="py-10 text-center text-4xl font-extrabold tracking-tight text-[#082D7E] sm:text-5xl">
              About MAXXON
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="pb-14">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal from="left">
              <div>
                <h2 className="text-[44px] font-extrabold leading-none tracking-tight text-[#082D7E] sm:text-[56px]">
                  WHO WE ARE
                </h2>

                <div className="mt-6 space-y-6 text-[15px] leading-relaxed text-black/75">
                  <p>
                    <span className="font-semibold text-black/80">Maxxon Bangladesh</span> is the
                    official and authorized representative of Maxxon in Bangladesh, delivering
                    premium, high-quality, and environmentally responsible automotive care products
                    to the local market. Our solutions are designed to support complete vehicle
                    care, ensuring protection, efficiency, and long-term performance across all
                    major automotive systems.
                  </p>

                  <p>
                    Powered by advanced engineering and global standards, Maxxon products enhance
                    overall vehicle reliability, reduce wear, improve efficiency, and help
                    minimize environmental impact. From everyday passenger vehicles to commercial
                    fleets and heavy-duty machinery, our formulations are built to perform under
                    real-world conditions while meeting modern sustainability expectations.
                  </p>

                  <p>
                    At Maxxon Bangladesh, we combine technical excellence, trusted performance, and
                    a strong green philosophy to support cleaner mobility and smarter vehicle
                    maintenance. We are committed to providing reliable automotive care solutions
                    that protect vehicles, reduce operational costs, and contribute to a greener,
                    more efficient Bangladesh.
                  </p>
                </div>

                <div className="mt-10">
                  <Link
                    href="/product"
                    className="inline-flex items-center justify-center rounded-full bg-[#FFAA01] px-8 py-3 text-sm font-semibold text-[#082D7E] shadow-sm hover:brightness-95"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal from="right">
              <div className="w-full">
                <div className="overflow-hidden rounded-[14px] bg-white shadow-sm">
                  <Image
                    src="/maxxon/founders.png"
                    alt="Maxxon team"
                    width={1400}
                    height={1000}
                    className="h-auto w-full object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="pb-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal from="left">
              <div>
                <h3 className="text-4xl font-extrabold tracking-tight text-[#082D7E] sm:text-5xl">
                  Our Mission
                </h3>

                <div className="mt-6 max-w-[720px] rounded-2xl bg-[#082D7E] px-6 py-6 text-white shadow-md sm:px-8 sm:py-7">
                  <p className="text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
                    To deliver world-class, premium automotive care solutions that enhance vehicle
                    performance, protect critical systems, and extend vehicle life while promoting
                    environmental responsibility and sustainable mobility in Bangladesh. We are
                    committed to providing trusted products, technical excellence, and long-term
                    value to our customers and partners
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal from="right">
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/maxxon/mission.png"
                  alt="Mission"
                  width={520}
                  height={520}
                  className="h-auto w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="pb-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal from="left">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/maxxon/light.png"
                  alt="Vision"
                  width={520}
                  height={520}
                  className="h-auto w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
                />
              </div>
            </Reveal>

            <Reveal from="right">
              <div className="lg:text-right">
                <h3 className="text-4xl font-extrabold tracking-tight text-[#082D7E] sm:text-5xl">
                  Our Vision
                </h3>

                <div className="mt-6 ml-auto max-w-[720px] rounded-2xl bg-[#082D7E] px-6 py-6 text-white shadow-md sm:px-8 sm:py-7">
                  <p className="text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
                    To become Bangladesh&apos;s most trusted automotive care brand, recognized for
                    innovation, quality, and green technology, driving a future where vehicles
                    operate cleaner, smarter, and more efficiently. We aim to set new benchmarks
                    in total automotive care, delivering globally aligned solutions that meet
                    evolving industry and environmental standards. Through continuous innovation
                    and responsible practices, we envision a greener, more sustainable mobility
                    ecosystem for Bangladesh.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}