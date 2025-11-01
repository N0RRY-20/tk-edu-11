import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

export const statement = {
  ...defaultStatements,
  project: ["create", "share", "update", "delete", "list ", "read"], // <-- Permissions available for created roles
} as const;

export const ac = createAccessControl(statement);

export const admin = ac.newRole({
  project: ["create", "update", "delete", "list ", "read"],
  ...adminAc.statements,
});

export const guru = ac.newRole({
  project: ["create", "update"],
});

export const walimurid = ac.newRole({
  project: ["read"],
});
