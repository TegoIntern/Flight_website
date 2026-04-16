"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import {
  getApprovalRequests,
  updateApprovalRequest,
  type ApprovalRequest,
} from "@/lib/approval-requests";

function toTravelerString(travelers: string[]) {
  return travelers.join(", ");
}

export default function ApprovalsPage() {
  const [approvals, setApprovals] = useState<ApprovalRequest[]>([]);

  useEffect(() => {
    const syncApprovals = () => {
      setApprovals(getApprovalRequests());
    };

    window.addEventListener("approvalchange", syncApprovals);
    window.addEventListener("focus", syncApprovals);
    syncApprovals();

    return () => {
      window.removeEventListener("approvalchange", syncApprovals);
      window.removeEventListener("focus", syncApprovals);
    };
  }, []);

  const handleFieldChange = (
    id: string,
    field:
      | "title"
      | "fromLocation"
      | "toLocation"
      | "travelDates"
      | "roomRequirement"
      | "reason",
    value: string,
  ) => {
    setApprovals((current) =>
      current.map((approval) =>
        approval.id === id ? { ...approval, [field]: value } : approval,
      ),
    );
  };

  const handleTravelerChange = (id: string, value: string) => {
    const travelers = value
      .split(",")
      .map((traveler) => traveler.trim())
      .filter(Boolean);

    setApprovals((current) =>
      current.map((approval) =>
        approval.id === id ? { ...approval, travelers } : approval,
      ),
    );
  };

  const handleSave = (approval: ApprovalRequest) => {
    updateApprovalRequest(approval.id, approval);
  };

  const handleStatusChange = (
    approval: ApprovalRequest,
    status: ApprovalRequest["status"],
  ) => {
    updateApprovalRequest(approval.id, {
      ...approval,
      status,
      itineraryShared: status === "Approved",
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Sidebar />

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Approvals
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Review travel requests waiting on approval.
          </h1>
        </section>

        <section className="grid gap-5">
          {approvals.map((approval) => (
            <article
              key={approval.id}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                    {approval.status}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    {approval.title}
                  </h2>
                  <p className="mt-3 text-lg text-slate-600">
                    {approval.route}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleSave(approval)}
                    className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => handleStatusChange(approval, "Approved")}
                    className="rounded-2xl bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() =>
                      handleStatusChange(approval, "Changes Requested")
                    }
                    className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Request Changes
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Trip title
                  </span>
                  <input
                    value={approval.title}
                    onChange={(event) =>
                      handleFieldChange(approval.id, "title", event.target.value)
                    }
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Submitted by
                  </span>
                  <input
                    value={approval.submittedBy}
                    readOnly
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600 outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Leaving from
                  </span>
                  <input
                    value={approval.fromLocation}
                    onChange={(event) =>
                      handleFieldChange(
                        approval.id,
                        "fromLocation",
                        event.target.value,
                      )
                    }
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Going to
                  </span>
                  <input
                    value={approval.toLocation}
                    onChange={(event) =>
                      handleFieldChange(
                        approval.id,
                        "toLocation",
                        event.target.value,
                      )
                    }
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Travel dates
                  </span>
                  <input
                    value={approval.travelDates}
                    onChange={(event) =>
                      handleFieldChange(
                        approval.id,
                        "travelDates",
                        event.target.value,
                      )
                    }
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Rooms needed
                  </span>
                  <input
                    value={approval.roomRequirement}
                    onChange={(event) =>
                      handleFieldChange(
                        approval.id,
                        "roomRequirement",
                        event.target.value,
                      )
                    }
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none"
                  />
                </label>
              </div>

              <div className="mt-8 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Travelers
                  </span>
                  <input
                    value={toTravelerString(approval.travelers)}
                    onChange={(event) =>
                      handleTravelerChange(approval.id, event.target.value)
                    }
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Request details
                  </span>
                  <textarea
                    value={approval.reason}
                    onChange={(event) =>
                      handleFieldChange(approval.id, "reason", event.target.value)
                    }
                    rows={4}
                    className="resize-none rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none"
                  />
                </label>
              </div>

              {approval.itineraryShared && (
                <p className="mt-6 text-sm font-medium text-green-700">
                  Approved itinerary is now available in Trips for the traveler.
                </p>
              )}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
