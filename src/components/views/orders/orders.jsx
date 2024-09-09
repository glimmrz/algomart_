import UserDashboardWrapper from "@/components/wrappers/user-dashboard-wrapper";
import OrderCard from "./order-card";

export default function Orders() {
  return (
    <UserDashboardWrapper title="order history">
      <div className="grid gap-4">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </UserDashboardWrapper>
  );
}
