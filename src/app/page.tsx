import Image from "next/image";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import {
  Fuel,
  Zap,
  Hourglass,
  Sparkles,
  Droplet,
  TrendingUp,
  Leaf,
  Gauge,
  Car,
  ShieldCheck,
  Mouse,
  ArrowRight,
} from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

// function Callout({
//   label,
//   lineClassName,
// }: {
//   label: string;
//   lineClassName?: string;
// }) {
//   return (
//     <div className="relative">
//       <div
//         className={[
//           "absolute right-full top-1/2 mr-3 h-[2px] w-16 -translate-y-1/2 bg-[#082D7E]/60",
//           lineClassName ?? "",
//         ].join(" ")}
//       />
//       <div className="relative inline-flex items-center bg-[#082D7E] px-4 py-2 text-xs font-semibold text-white shadow-sm">
//         <span>{label}</span>
//         <span className="absolute right-0 top-0 h-full w-1.5 bg-[#FFAA01]" />
//       </div>
//     </div>
//   );
// }

function Callout({
  label,
  size = "md",
  lineWidthClass = "w-16",
}: {
  label: string;
  size?: "sm" | "md";
  lineWidthClass?: string;
}) {
  const box = size === "sm" ? "px-3 py-1.5 text-[10px]" : "px-4 py-2 text-xs";

  return (
    <div className="flex items-center">
      {/* connector line */}
      <div className={`relative h-[2px] ${lineWidthClass} bg-[#082D7E]/60`}>
        <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#082D7E]" />
      </div>

      {/* label box */}
      <div
        className={`relative inline-flex items-center bg-[#082D7E] font-semibold text-white shadow-sm ${box}`}
      >
        {label}
        <span className="absolute right-0 top-0 h-full w-1.5 bg-[#FFAA01]" />
      </div>
    </div>
  );
}

export default function Home() {
  const benefits = [
    {
      title: "Maximize Fuel Savings",
      desc: "Improves fuel efficiency, helping you get better mileage and reduce running costs.",
      Icon: Fuel,
    },
    {
      title: "Smooth Power Delivery",
      desc: "Supports smoother acceleration and more consistent power delivery.",
      Icon: Zap,
    },
    {
      title: "Extend Engine Life",
      desc: "Extends engine life by protecting critical components from premature wear.",
      Icon: Hourglass,
    },
    {
      title: "Deep Clean System",
      desc: "Reduces carbon deposits from valves, pistons, injectors, and the fuel system.",
      Icon: Sparkles,
    },
    {
      title: "Ultimate Lubrication",
      desc: "Enhances fuel lubricity, reducing friction and engine wear.",
      Icon: Droplet,
    },
    {
      title: "Restore Peak Performance",
      desc: "Helps restore engine efficiency and maintain long-term performance.",
      Icon: TrendingUp,
    },
    {
      title: "Eco-Friendly Driving",
      desc: "Lowers exhaust emissions for cleaner engine operation, making it environmentally friendly.",
      Icon: Leaf,
    },
    {
      title: "Optimized Combustion",
      desc: "Improves combustion for smoother and more efficient engine performance.",
      Icon: Gauge,
    },
    {
      title: "Universal Compatibility",
      desc: "Suitable for cars, motorcycles, and light commercial vehicles with petrol or diesel engines.",
      Icon: Car,
    },
    {
      title: "Protect Against Repairs",
      desc: "Protects sensitive engine components, helping prevent costly repairs.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <main className="w-full bg-[#F5FAFE] pt-[76px]">
      <section className="pt-2">
        <Container>
          <Reveal from="down">
            <div className="relative mt-1 h-[180px] overflow-hidden rounded-[22px] bg-white/40 shadow-sm sm:h-[230px] md:h-[290px] lg:h-[340px]">
              <Image
                src="/maxxon/hero-banner.png"
                alt="Hero banner"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="product" className="pb-14 pt-10">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* LEFT */}

            {/* LEFT */}
            <div className="lg:col-span-4">
              <Reveal from="left">
                <div className="flex flex-col items-center">
                  {/* Desktop: bottle + callouts to the right with connector lines */}
                  <div className="hidden lg:flex items-start justify-center gap-4">
                    <div className="w-[280px]">
                      <Image
                        src="/maxxon/bottle.png"
                        alt="Fuel system cleaner bottle"
                        width={560}
                        height={980}
                        className="h-auto w-full"
                      />
                    </div>

                    <div className="pt-12 space-y-6">
                      <Callout
                        label="Improved Fuel Efficiency"
                        lineWidthClass="w-20"
                      />
                      <Callout
                        label="Enhanced Performance"
                        lineWidthClass="w-20"
                      />
                    </div>
                  </div>

                  {/* Mobile/Tablet: bottle with callouts at top-right (not below) */}
                  <div className="relative mx-auto w-[240px] sm:w-[280px] lg:hidden">
                    <Image
                      src="/maxxon/bottle.png"
                      alt="Fuel system cleaner bottle"
                      width={560}
                      height={980}
                      className="h-auto w-full"
                    />

                    <div className="pointer-events-none absolute right-0 top-4 flex flex-col gap-3">
                      <Callout
                        label="Improved Fuel Efficiency"
                        size="sm"
                        lineWidthClass="w-10"
                      />
                      <Callout
                        label="Enhanced Performance"
                        size="sm"
                        lineWidthClass="w-10"
                      />
                    </div>
                  </div>

                  {/* Order button always centered under bottle */}
                  <div className="mt-6 flex justify-center">
                    <a
                      id="order"
                      href="#"
                      className="rounded-full bg-[#FFAA01] px-8 py-3 text-sm font-semibold text-[#082D7E] shadow-sm hover:brightness-95"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8">
              <Reveal from="right">
                <h1 className="text-center text-[28px] font-extrabold leading-tight tracking-tight text-[#082D7E] sm:text-[34px] md:text-[44px] lg:text-[50px]">
                  A Next - Generation
                  <br />
                  Fuel System Cleaner Powered By
                  <br />
                  Polar Nano Technology
                </h1>

                <div className="mt-5 flex justify-center">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#082D7E]/20 bg-white px-4 py-2 shadow-sm">
                    <Gauge size={16} className="text-[#082D7E]" />
                    <Car size={16} className="text-[#FFAA01]" />
                    <Zap size={16} className="text-[#082D7E]" />
                  </div>
                </div>

                <div className="mt-7 flex justify-center">
                  <a
                    href="#benefits"
                    className="group inline-flex w-full max-w-[420px] items-center justify-between rounded-full bg-gradient-to-r from-[#082D7E] to-[#010F2C] px-7 py-4 text-sm font-semibold text-white shadow-md hover:brightness-110"
                  >
                    <span>Explore Benefits</span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl">
                    <Image
                      src="/maxxon/benefits-carousel.png"
                      alt="Benefits carousel"
                      width={1040}
                      height={520}
                      className="h-auto w-full"
                    />
                  </div>
                </div>

                <div className="mt-10 flex justify-center text-[#082D7E]/70">
                  <Mouse size={22} />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-8">
        <Container>
          <Reveal from="up">
            <div className="relative overflow-visible rounded-[32px] bg-gradient-to-r from-[#031A4D] to-[#082D7E] px-6 py-10 shadow-md md:px-10 md:py-12">
              <div className="absolute -top-16 left-6 w-[210px] md:left-10 md:w-[270px] lg:w-[300px]">
                <Image
                  src="/maxxon/about-guy.png"
                  alt="About person"
                  width={600}
                  height={900}
                  className="h-auto w-full"
                />
              </div>

              <div className="md:pl-[290px] lg:pl-[330px]">
                <h2 className="text-center text-2xl font-extrabold text-white md:text-3xl">
                  About Maxxon Fuel System Cleaner
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/85 md:text-[13px]">
                  <p>
                    Maxxon is a next-generation fuel system cleaner developed to
                    go far beyond traditional fuel system cleaner. Designed
                    specifically for cars and motorcycles, Maxxon works at a
                    molecular level to improve how fuel burns inside your
                    engine, delivering cleaner combustion, smoother performance,
                    better mileage and long-term engine protection.
                  </p>
                  <p>
                    Unlike basic fuel system cleaner that offer short-term
                    benefits, Maxxon actively cleans and protects critical
                    engine components. It helps to reduce harmful carbon
                    buildup, and clears deposits from valves, pistons,
                    injectors, and the entire fuel system. By removing these
                    deposits, Maxxon restores engine efficiency and helps
                    maintain optimal performance over time.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal from="left">
              <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
                <Image
                  src="/maxxon/tree.png"
                  alt="Tree"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal from="right">
              <div>
                <h3 className="text-xl font-extrabold text-[#082D7E] md:text-2xl">
                  How Maxxon Fuel System Cleaner Works
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70">
                  Maxxon works at a molecular level to optimize the combustion
                  process inside the engine. Its advanced formulation enhances
                  fuel stability and promotes a more complete and controlled
                  burn, allowing fuel to release energy more efficiently. By
                  improving combustion quality, Maxxon reduces unburned fuel,
                  minimizes carbon formation, and helps maintain cleaner
                  injectors, valves, pistons, and combustion chambers.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
            <Reveal from="left">
              <div>
                <h3 className="text-center text-2xl font-extrabold text-[#082D7E] md:text-3xl">
                  Why Maxxon Works
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-black/70">
                  <p>
                    Maxxon works by enhancing the way fuel interacts with
                    oxygen, allowing the engine to burn volatile carbon
                    compounds more completely than standard fuels. Its advanced
                    formulation adjusts carbon chains at the molecular level,
                    something conventional fuels and additives cannot achieve.
                    This effectively increases the air-to-fuel ratio, promoting
                    more efficient combustion. As a result, existing carbon
                    deposits in engines and boilers are no longer fed additional
                    fuel and gradually break down, detach, and are eliminated
                    over time, keeping your engine cleaner and running more
                    efficiently.
                  </p>
                  <p>
                    Maxxon enhances fuel combustion by enabling oxygen to burn
                    volatile carbon more completely. Its molecular-level action
                    breaks down carbon chains that standard fuels cannot,
                    increasing the air-to-fuel ratio. This not only prevents new
                    carbon buildup but also gradually removes existing deposits,
                    keeping your engine cleaner and performing at its best.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal from="right">
              <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
                <Image
                  src="/maxxon/beach.png"
                  alt="Beach"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <Reveal from="up">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#007C34] to-[#0A5B2C] px-6 py-10 shadow-md md:px-10">
              <div className="absolute -left-6 -top-10 w-[180px] rotate-[-6deg] md:w-[220px]">
                <Image
                  src="/maxxon/leaf.png"
                  alt="Leaf"
                  width={500}
                  height={500}
                  className="h-auto w-full"
                />
              </div>

              <div className="mx-auto max-w-3xl text-center">
                <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                  Cost Savings &amp; Environmental Benefits
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/85">
                  Maxxon improves fuel efficiency by promoting cleaner, more
                  complete combustion, helping reduce fuel consumption and lower
                  running costs over time. By minimizing carbon buildup and
                  unburned fuel, it also helps reduce exhaust emissions and
                  supports cleaner engine operation. This makes Maxxon a green,
                  environmentally friendly solution that saves fuel while
                  reducing overall environmental impact.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="benefits" className="py-10">
        <Container>
          <Reveal from="up">
            <div className="rounded-[28px] bg-[#E9E9E9] px-5 py-10 shadow-sm sm:px-8">
              <div className="flex justify-center">
                <div className="rounded-full bg-white px-7 py-2 text-center text-xl font-extrabold text-[#082D7E] shadow-sm md:text-2xl">
                  Benefits of Maxxon
                </div>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {benefits.map(({ title, desc, Icon }) => (
                  <div
                    key={title}
                    className="bg-white shadow-sm"
                    style={{ borderRadius: 0 }}
                  >
                    <div className="h-1 w-full bg-[#082D7E]" />
                    <div className="p-6">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFAA01] text-[#082D7E]">
                        <Icon size={18} />
                      </div>

                      <h4 className="mt-4 text-sm font-extrabold text-[#082D7E]">
                        {title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-black/70">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal from="left">
              <div className="relative rounded-[22px] border-2 border-[#FFAA01] bg-[#082D7E] px-6 py-10 text-center text-white shadow-md md:px-10">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-b-2xl bg-[#FFAA01] px-10 py-2 text-base font-extrabold text-[#082D7E] shadow-sm">
                  Mixing Ratio
                </div>

                <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-white/90">
                  Using Maxxon is simple and convenient. Add the recommended
                  dose directly to your fuel tank before refueling to ensure
                  proper mixing.
                </p>

                <p className="mx-auto mt-10 max-w-sm text-sm leading-relaxed text-white/90">
                  For optimal results, use 250 ml of Maxxon for upto 55 liters
                  of fuel.
                </p>
              </div>
            </Reveal>

            <Reveal from="right">
              <div className="overflow-hidden rounded-[22px] bg-white shadow-md">
                <Image
                  src="/maxxon/video-thumb.png"
                  alt="Video thumbnail"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-0">
        <Reveal from="up">
          <LogoMarquee />
        </Reveal>
        <div className="h-4 w-full bg-[#082D7E]" />
      </section>

      {/* placeholders for nav anchors that exist in navbar */}
      <div id="reviews" />
      <div id="feeds" />
      <div id="blogs" />
    </main>
  );
}
