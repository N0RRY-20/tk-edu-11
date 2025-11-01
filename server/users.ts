import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function getUsers() {
  try {
    const response = await auth.api.listUsers({
      query: {
        limit: 100,
        offset: 0,
        sortBy: "name",
        sortDirection: "desc",
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });
    return response.users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
