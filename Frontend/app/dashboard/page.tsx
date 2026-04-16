"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CountUp from "react-countup";
import Sidebar from "@/components/layout/Sidebar";
import {
  getApprovalRequests,
  type ApprovalRequest,
} from "@/lib/approval-requests";

const upcomingTrips = [
  {
    traveler: "Jordan Lee",
    route: "Chicago -> New York",
    date: "Apr 18, 2026",
    status: "Confirmed",
  },
  {
    traveler: "Avery Patel",
    route: "Dallas -> San Francisco",
    date: "Apr 19, 2026",
    status: "Awaiting approval",
  },
  {
    traveler: "Morgan Chen",
    route: "Atlanta -> Seattle",
    date: "Apr 21, 2026",
    status: "Ticketed",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [approvalRequests, setApprovalRequests] = useState<ApprovalRequest[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }

    const syncApprovalRequests = () => {
      setApprovalRequests(getApprovalRequests());
    };

    window.addEventListener("approvalchange", syncApprovalRequests);
    window.addEventListener("focus", syncApprovalRequests);
    syncApprovalRequests();

    return () => {
      window.removeEventListener("approvalchange", syncApprovalRequests);
      window.removeEventListener("focus", syncApprovalRequests);
    };
  }, [router]);

  const pendingApprovals = approvalRequests.filter(
    (request) => request.status !== "Approved",
  );

  const summaryCards = [
    {
      label: "Active Trips",
      value: 24,
      note: "6 departures in the next 72 hours",
    },
    {
      label: "Pending Approvals",
      value: pendingApprovals.length,
      note: "Open requests currently waiting for review",
    },
    {
      label: "Monthly Spend",
      value: 18420,
      prefix: "$",
      separator: ",",
      note: "4% under projected travel budget",
    },
    {
      label: "Traveler Compliance",
      value: 92,
      suffix: "%",
      note: "Up 6% from last month",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <Sidebar />
        <section className="space-y-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
              <article
                key={card.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {card.label}
                </p>
                <p className="mt-4 text-4xl font-bold text-slate-900">
                  <CountUp
                    end={card.value}
                    duration={1.8}
                    separator={card.separator}
                    prefix={card.prefix}
                    suffix={card.suffix}
                  />
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.note}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Upcoming Travel
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Trips that need visibility this week
                  </h2>
                </div>
                <Link
                  href="/trips"
                  className="text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  View all trips
                </Link>
              </div>

              <div className="mt-8 grid gap-4">
                {upcomingTrips.map((trip) => (
                  <div
                    key={`${trip.traveler}-${trip.route}`}
                    className="rounded-2xl border border-slate-200 px-5 py-4"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">
                          {trip.traveler}
                        </p>
                        <p className="mt-1 text-slate-700">{trip.route}</p>
                        <p className="mt-1 text-sm text-slate-500">{trip.date}</p>
                      </div>
                      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                        {trip.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid gap-6">
              <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Approval Queue
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                      Requests waiting on action
                    </h2>
                  </div>
                  <Link
                    href="/approvals"
                    className="text-sm font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    Open approvals
                  </Link>
                </div>

                <div className="mt-8 grid gap-3">
                  {pendingApprovals.map((approval) => (
                    <details
                      key={approval.id}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {approval.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">
                            {approval.route}
                          </p>
                        </div>
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                          {approval.status}
                        </span>
                      </summary>

                      <div className="mt-4 grid gap-4 border-t border-slate-200 pt-4 text-sm text-slate-700">
                        <div className="grid gap-2 md:grid-cols-2">
                          <p>
                            <span className="font-semibold text-slate-900">
                              Submitted by:
                            </span>{" "}
                            {approval.submittedBy}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">
                              Dates:
                            </span>{" "}
                            {approval.travelDates}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">
                              Room needed:
                            </span>{" "}
                            {approval.roomRequirement}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">
                              Travelers:
                            </span>{" "}
                            {approval.travelers.join(", ")}
                          </p>
                        </div>
                        <p className="leading-7 text-slate-600">
                          {approval.reason}
                        </p>
                      </div>
                    </details>
                  ))}

                  {pendingApprovals.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-6 text-sm text-slate-600">
                      No approvals are waiting right now.
                    </div>
                  )}
                </div>
              </section>

              <section className="rounded-[2rem] bg-blue-900 p-8 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Booking Operations
                </p>
                <h2 className="mt-2 text-3xl font-bold">
                  Keep travelers moving without losing oversight.
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-100">
                  Use the booking workspace to search policy-aligned flights,
                  monitor team movement, and act on approvals before they slow
                  down the trip.
                </p>
                <Link
                  href="/book-flight"
                  className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-blue-900 transition hover:bg-slate-100"
                >
                  Open Booking Workspace
                </Link>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
