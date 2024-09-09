import Block from "@/components/(dashboard)/block";
import Table from "@/components/(dashboard)/table/table";
import { getData } from "@/utils/apiCalls";

export default async function Page() {
  const res = await getData("expenses", 0);

  const tableInfo = {
    tableHeaders: [
      { label: "title", key: "title" },
      {
        label: "date",
        key: "date",
      },
      {
        label: "amount",
        key: "amount",
      },
      { label: "status", key: "status" },
    ],
    tableData: res.response.payload,
  };

  return (
    <div>
      <Block title="expenses"></Block>

      <Table data={tableInfo} requestUrl="expenses" itemName="title" />
    </div>
  );
}
