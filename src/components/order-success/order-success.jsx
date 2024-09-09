import OrderSuccessItem from "./order-success-item";
import OrderSuccessSummary from "./order-success-summary";

export default function OrderSuccess() {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-[2fr_1fr]">
      <div className="rounded-md bg-accent grid gap-2 overflow-auto">
        <OrderSuccessItem />
        <OrderSuccessItem />
        <OrderSuccessItem />
        <OrderSuccessItem />
        <OrderSuccessItem />
        <OrderSuccessItem />
      </div>
      <OrderSuccessSummary />
    </div>
  );
}
