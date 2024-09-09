import Block from "@/components/(dashboard)/block";
import Table from "@/components/(dashboard)/table/table";
import { getData } from "@/utils/apiCalls";

export default async function Page() {
  const res = await getData("users", 0);

  const tableInfo = {
    tableHeaders: [
      { label: "first name", key: "firstName" },
      { label: "last name", key: "lastName" },
      {
        label: "email",
        key: "email",
      },
      {
        label: "role",
        key: "role",
      },
    ],
    tableData: res.response.payload,
  };

  return (
    <>
      <Block title="users"></Block>

      <Table data={tableInfo} itemName="firstName" requestUrl="users" />
    </>
  );
}
