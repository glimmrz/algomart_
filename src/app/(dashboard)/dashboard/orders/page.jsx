import Block from "@/components/(dashboard)/block";
import Table from "@/components/(dashboard)/table/table";

export default function Page() {
  const tableInfo = {
    tableHeaders: [
      { label: "date", key: "date" },
      {
        label: "order_id",
        key: "order_id",
      },
      {
        label: "customer",
        key: "customer",
      },
      { label: "status", key: "status" },
      {
        lebel: "total",
        key: "total",
      },
      {
        key: "payment_method",
        label: "payment_method",
      },
      {
        label: "status",
        key: "status",
      },
    ],
  };

  return (
    <div>
      <Block title="orders"></Block>

      <Table data={tableInfo} />
    </div>
  );
}
