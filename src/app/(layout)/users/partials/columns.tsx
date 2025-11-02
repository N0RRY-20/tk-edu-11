"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

import { UserWithRole } from "better-auth/plugins";
import { ArrowUpDown } from "lucide-react";
import UserActions from "./userActions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export const columns: ColumnDef<UserWithRole>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    cell: ({ row }) => {
      const rawRole = row.getValue("role") as string | undefined;
      const roles: string[] = rawRole ? rawRole.split(",") : [];

      return (
        <div className="flex gap-1">
          {roles.map((role) => (
            <Badge variant="secondary" key={role}>
              {capitalize(role)}{" "}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const users = row.original;
      return <UserActions userId={users.id} userName={users.name} />;
    },
  },
];
