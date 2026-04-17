"use client";

import { type ApprovalRequest } from "@/lib/approval-requests";
import { type StoredUser } from "@/lib/auth";

function normalizeValue(value?: string) {
  return value?.trim().toLowerCase() ?? "";
}

export function getUserIdentifiers(user: StoredUser | null) {
  if (!user) {
    return [];
  }

  const identifiers = [normalizeValue(user.email), normalizeValue(user.name)].filter(
    Boolean,
  );

  return [...new Set(identifiers)];
}

export function isRequestOwnedByUser(
  request: ApprovalRequest,
  user: StoredUser | null,
) {
  const submittedBy = normalizeValue(request.submittedBy);
  const travelers = request.travelers.map((traveler) => normalizeValue(traveler));
  const identifiers = getUserIdentifiers(user);

  return identifiers.some(
    (identifier) => submittedBy === identifier || travelers.includes(identifier),
  );
}

export function getTripStartDate(request: ApprovalRequest) {
  const startDateLabel = request.travelDates.split(" - ")[0]?.trim();

  if (!startDateLabel) {
    return null;
  }

  const parsedDate = new Date(startDateLabel);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}

export function sortTripsByStartDate(trips: ApprovalRequest[]) {
  return [...trips].sort((left, right) => {
    const leftDate = getTripStartDate(left)?.getTime() ?? Number.MAX_SAFE_INTEGER;
    const rightDate = getTripStartDate(right)?.getTime() ?? Number.MAX_SAFE_INTEGER;

    return leftDate - rightDate;
  });
}
