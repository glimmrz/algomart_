import Block from "@/components/(dashboard)/block";
import AddCategory from "@/components/(dashboard)/forms/add-category";

export default function Page() {
  return (
    <div>
      <Block title="add category"></Block>
      <div className="mt-8">
        <AddCategory />
      </div>
    </div>
  );
}
