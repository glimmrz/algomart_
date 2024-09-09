import Block from "@/components/(dashboard)/block";
import Table from "@/components/(dashboard)/table/table";
import { getData } from "@/utils/apiCalls";

export default async function Page() {
  const res = await getData("categories", 0);

  const tableInfo = {
    tableHeaders: [
      { label: "category name", key: "label" },
      { label: "link", key: "slug" },
      { label: "icon", key: "icon" },
    ],
    tableData: res.response.payload,
  };

  return (
    <div>
      <Block title="categories"></Block>

      <Table data={tableInfo} requestUrl="categories" itemName="label" />
    </div>
  );
}
