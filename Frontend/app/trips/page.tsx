"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import {
  getApprovalRequests,
  type ApprovalRequest,
} from "@/lib/approval-requests";

export default function TripsPage() {
  const [approvedTrips, setApprovedTrips] = useState<ApprovalRequest[]>([]);

  useEffect(() => {
    const syncTrips = () => {
      setApprovedTrips(
        getApprovalRequests().filter((request) => request.status === "Approved"),
      );
    };

    window.addEventListener("approvalchange", syncTrips);
    window.addEventListener("focus", syncTrips);
    syncTrips();

    return () => {
      window.removeEventListener("approvalchange", syncTrips);
      window.removeEventListener("focus", syncTrips);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Sidebar />
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Trips
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Approved itineraries for upcoming travel.
          </h1>
        </section>

        <section className="grid gap-5">
          {approvedTrips.map((trip) => (
            <article
              key={trip.id}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Itinerary Shared
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    {trip.title}
                  </h2>
                  <p className="mt-3 text-lg text-slate-600">{trip.route}</p>
                </div>

                <span className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                  Approved
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Submitted By
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-700">
                    {trip.submittedBy}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Travel Dates
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-700">
                    {trip.travelDates}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Rooms
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-700">
                    {trip.roomRequirement}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Shared
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-700">
                    {trip.itineraryShared ? "Yes" : "No"}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Travelers
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {trip.travelers.map((traveler) => (
                    <span
                      key={traveler}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {traveler}
                    </span>
                  ))}
                </div>
                <p className="mt-5 leading-7 text-slate-600">{trip.reason}</p>
              </div>
            </article>
          ))}

          {approvedTrips.length === 0 && (
            <section className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-8 text-slate-600 shadow-sm">
              Approved itineraries will appear here after requests are reviewed
              and confirmed on the Approvals page.
            </section>
          )}
        </section>
      </div>
    </main>
  );
}
