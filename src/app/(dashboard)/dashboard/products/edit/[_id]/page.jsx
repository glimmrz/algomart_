import Block from "@/components/(dashboard)/block";
import EditProduct from "@/components/(dashboard)/forms/edit-product";
import { getData } from "@/utils/apiCalls";

export default async function Page(params) {
  const products = await getData(`products/${params.params._id}`, 0);
  const categories = await getData("categories", 0);

  if (products.error) throw new Error(products.response.msg);
  if (categories.error) throw new Error(categories.response.msg);

  return (
    <div>
      <Block title="edit product"></Block>

      <div className="mt-8">
        <EditProduct
          _id={params.params._id}
          currentProduct={products.response.payload}
          categories={categories.response.payload}
        />
      </div>
    </div>
  );
}
