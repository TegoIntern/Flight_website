import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggeredReveal from "@/components/ui/StaggeredReveal";

const solutions = [
  {
    title: "Corporate Flight Booking",
    description:
      "Book business travel from one central platform with a smoother workflow for employees, managers, and travel coordinators.",
  },
  {
    title: "Ground Transportation",
    description:
      "Connect airport pickups, local rides, and corporate transportation needs without forcing teams to juggle separate tools.",
  },
  {
    title: "Travel Visibility",
    description:
      "Keep plans organized with clearer oversight into traveler movement, trip details, and operational coordination.",
  },
];

const benefits = [
  "One place to manage multiple travel needs",
  "Less manual coordination across teams",
  "A clearer experience for employees on the move",
  "More consistency across business travel workflows",
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 px-6 py-20">
      <ScrollReveal delayMs={0}>
        <section className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-900 shadow-xl">
          <div className="grid gap-10 px-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-14 md:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                Solutions
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Travel tools built for how companies actually move.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                RideTego helps organizations manage business travel with a more
                connected experience across flights, transportation, and trip
                logistics.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/book-flight"
                  className="rounded-2xl bg-red-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-red-700"
                >
                  Explore Booking
                </Link>
                <Link
                  href="/signup"
                  className="rounded-2xl border border-slate-300 px-7 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Start with RideTego
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <ScrollReveal delayMs={140}>
                <div className="rounded-3xl bg-blue-900 p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Unified Experience
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Less tool switching. More control.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delayMs={260}>
                <div className="rounded-3xl bg-white p-7 text-slate-900">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Built For Business
                  </p>
                  <p className="mt-3 text-lg leading-8 text-slate-600">
                    Our solutions are designed around reliability, operational
                    clarity, and a smoother experience for teams handling travel
                    at scale.
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
              What We Offer
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              A focused set of solutions for business travel operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Instead of piecing together disconnected services, teams can use
              RideTego to support core travel needs from one place.
            </p>
          </div>
        </ScrollReveal>

        <StaggeredReveal
          className="mt-12 grid gap-6 md:grid-cols-3"
          baseDelayMs={120}
          stepDelayMs={400}
        >
          {solutions.map((solution) => (
            <div key={solution.title}>
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-1 w-14 rounded-full bg-red-600"></div>
                <h3 className="mt-6 text-2xl font-semibold text-blue-900">
                  {solution.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {solution.description}
                </p>
              </article>
            </div>
          ))}
        </StaggeredReveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal delayMs={100}>
          <div className="rounded-[2rem] bg-blue-900 px-8 py-10 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Why It Matters
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Better travel systems support better business decisions.
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              RideTego is built to reduce friction, improve coordination, and
              create a more dependable travel experience for growing teams.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={180}>
          <div className="rounded-[2rem] border border-blue-100 bg-white px-8 py-10 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Key Benefits
            </p>
            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-base font-medium text-slate-700"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal delayMs={120}>
        <section className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-slate-200 bg-white px-8 py-14 text-center shadow-lg md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Next Step
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Choose a platform that keeps corporate travel moving.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether your team is booking flights, arranging transportation, or
            improving oversight, RideTego gives you a stronger starting point.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-2xl bg-blue-900 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-800"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="rounded-2xl border border-slate-300 px-7 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
