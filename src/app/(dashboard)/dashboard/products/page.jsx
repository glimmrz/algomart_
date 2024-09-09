import Block from "@/components/(dashboard)/block";
import Table from "@/components/(dashboard)/table/table";
import { getData } from "@/utils/apiCalls";

export default async function Page() {
  const res = await getData("products", 0);
  const products = res.response.payload;

  const tableInfo = {
    tableHeaders: [
      { label: "title", key: "title" },
      { label: "price", key: "price" },
      {
        label: "category",
        key: "category.label",
      },
      {
        label: "discounted price",
        key: "discounted_price",
      },
      {
        key: "stock",
        label: "stock",
      },
      {
        label: "status",
        key: "status",
      },
    ],
    tableData: products,
  };

  return (
    <div>
      <Block title="products"></Block>

      <Table data={tableInfo} requestUrl="products" itemName="title" />
    </div>
  );
}
