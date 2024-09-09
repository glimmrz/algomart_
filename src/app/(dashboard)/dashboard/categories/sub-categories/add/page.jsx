import Block from "@/components/(dashboard)/block";
import AddSubCategory from "@/components/(dashboard)/forms/add-sub-category";
import { getData } from "@/utils/apiCalls";

export default async function Page() {
  const res = await getData("categories");

  return (
    <div>
      <Block title="add sub category"></Block>

      <div className="mt-8">
        <AddSubCategory subCategories={res.response.payload} />
      </div>
    </div>
  );
}
