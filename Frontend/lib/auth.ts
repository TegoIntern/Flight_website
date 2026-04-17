"use client";

export type UserRole = "employee" | "approver";

export type StoredUser = {
  email?: string;
  name?: string;
  role?: UserRole;
};

// Temporary stand-in for backend role lookup.
// Replace this with the authenticated user payload returned by your API.
const approverEmailAllowlist = [
  "approver@company.com",
  "manager@company.com",
];

export function getStoredUser(): StoredUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedUser = window.localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    const parsedUser = JSON.parse(storedUser) as StoredUser;
    return {
      ...parsedUser,
      role: parsedUser.role === "approver" ? "approver" : "employee",
    };
  } catch {
    return null;
  }
}

export function getUserRole(): UserRole | null {
  return getStoredUser()?.role ?? null;
}

export function isLoggedIn() {
  return !!getStoredUser();
}

export function isApprover() {
  return getUserRole() === "approver";
}

export function saveStoredUser(user: StoredUser) {
  if (typeof window === "undefined") {
    return;
  }

  const nextUser: StoredUser = {
    ...user,
    role: user.role === "approver" ? "approver" : "employee",
  };

  window.localStorage.setItem("user", JSON.stringify(nextUser));
}

export function resolveRoleForEmail(email?: string): UserRole {
  const normalizedEmail = email?.trim().toLowerCase();

  if (!normalizedEmail) {
    return "employee";
  }

  return approverEmailAllowlist.includes(normalizedEmail)
    ? "approver"
    : "employee";
}

export function buildUserFromLogin(email?: string, name?: string): StoredUser {
  return {
    email,
    name,
    role: resolveRoleForEmail(email),
  };
}

export function buildUserFromSignup(email?: string, name?: string): StoredUser {
  return {
    email,
    name,
    role: "employee",
  };
}
