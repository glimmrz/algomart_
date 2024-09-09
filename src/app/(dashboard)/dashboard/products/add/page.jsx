import Block from "@/components/(dashboard)/block";
import AddProduct from "@/components/(dashboard)/forms/add-product";
import { getData } from "@/utils/apiCalls";

export default async function Page() {
  const res = await getData("categories");

  return (
    <div>
      <Block title="add product" />

      <div className="mt-8">
        <AddProduct categories={res.response.payload} />
      </div>
    </div>
  );
}
