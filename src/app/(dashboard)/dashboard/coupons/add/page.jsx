import Block from "@/components/(dashboard)/block";
import AddCoupon from "@/components/(dashboard)/forms/add-coupon-code";
import { getData } from "@/utils/apiCalls";

export default async function Page() {
  const res = await getData("register");

  return (
    <div>
      <Block title="add coupon"></Block>

      <div className="mt-8">
        <AddCoupon users={res.response.payload} />
      </div>
    </div>
  );
}
