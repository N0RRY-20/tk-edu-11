export const dynamic = "force-dynamic";

import NotFoundPage from "@/components/404";
import { getUsers } from "../../../../server/users";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function DemoPage() {
  const data = await getUsers();
  if (!data) {
    return <NotFoundPage />;
  }
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
