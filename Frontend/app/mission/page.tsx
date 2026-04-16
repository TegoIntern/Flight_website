import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggeredReveal from "@/components/ui/StaggeredReveal";

const missionPillars = [
  {
    title: "Simplify Travel",
    description:
      "Give companies one reliable place to manage flights, transportation, and traveler coordination without unnecessary friction.",
  },
  {
    title: "Support Teams",
    description:
      "Help employees move confidently with booking tools that are clear, fast, and built for real business travel needs.",
  },
  {
    title: "Drive Efficiency",
    description:
      "Reduce manual work and improve visibility so organizations can make smarter travel decisions at scale.",
  },
];

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 px-6 py-20">
      <ScrollReveal delayMs={0}>
        <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-blue-900 text-white shadow-2xl">
          <div className="grid gap-10 px-8 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-14 md:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                Our Mission
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Corporate travel should feel organized, efficient, and easy to
                trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                RideTego exists to make business travel simpler for companies and
                smoother for the people moving through it every day. We bring
                flights, transportation, and travel coordination into one focused
                experience.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/signup"
                  className="rounded-2xl bg-red-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-red-700"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="rounded-2xl border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Learn About RideTego
                </Link>
              </div>
            </div>

            <div className="grid gap-4 self-end">
              <ScrollReveal delayMs={120}>
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                    What We Focus On
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    Fewer travel headaches. Better business movement.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delayMs={240}>
                <div className="rounded-3xl bg-white p-6 text-slate-900">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Commitment
                  </p>
                  <p className="mt-3 text-lg leading-8 text-slate-600">
                    We design for reliability, clarity, and speed so travel managers
                    and employees can spend less time navigating logistics and more
                    time getting where they need to go.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="mx-auto mt-20 max-w-6xl">
        <ScrollReveal delayMs={80}>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Mission Pillars
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Built around the needs of modern corporate travel.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our mission is more than a statement. It shapes how we build the
              booking experience, how we connect travel services, and how we help
              organizations stay in control.
            </p>
          </div>
        </ScrollReveal>

        <StaggeredReveal
          className="mt-12 grid gap-6 md:grid-cols-3"
          baseDelayMs={120}
          stepDelayMs={550}
        >
          {missionPillars.map((pillar) => (
            <div key={pillar.title}>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-1 w-14 rounded-full bg-red-600"></div>
                <h3 className="mt-6 text-2xl font-semibold text-blue-900">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            </div>
          ))}
        </StaggeredReveal>
      </section>

      <ScrollReveal delayMs={120}>
        <section className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-blue-100 bg-white px-8 py-14 text-center shadow-lg md:px-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Looking Ahead
            </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
          We&apos;re building a smoother future for business travel.
        </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              As RideTego grows, our mission stays the same: give organizations a
              dependable platform that keeps travel simple, connected, and ready for
              scale.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/book-flight"
                className="rounded-2xl bg-blue-900 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-800"
              >
                Explore Flight Booking
              </Link>
              <Link
                href="/"
                className="rounded-2xl border border-slate-300 px-7 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
