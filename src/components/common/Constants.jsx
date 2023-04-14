export const STAGES = {
  CREATION: "creation",
  APPROVAL: "approval",
  PRODUCTION: "production",
  FINISHING: "finishing",
  ACCOUNT: "account",
  COMPLETED: "completed",
};
export const USER_ROLES = {
  SUPERVISOR: "manufacturer",
  PRODUCTION: "production",
  FINISHING: "finishing",
  ACCOUNT: "account",
  CLIENT: "client",
  ADMIN: "admin",
};

export const PERMISSIONS = {
  CREATE: [USER_ROLES.ADMIN, USER_ROLES.SUPERVISOR],
  CLIENT_VISIBILITY: Object.values(USER_ROLES),
  UPDATE: [USER_ROLES.SUPERVISOR, USER_ROLES.ADMIN],
  SHOW_DASHBOARD: [USER_ROLES.ADMIN],
};

export const STAGES_LIST = Object.keys(STAGES).map((key) => STAGES[key]);

// edit -> admin, design
// view without client details -> cutting, production, account
