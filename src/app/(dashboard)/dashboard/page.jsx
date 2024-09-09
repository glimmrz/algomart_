import Block from "@/components/(dashboard)/block";
import EmptyItem from "@/components/empty-item";
import TotalCard from "@/components/total-card";

const summaryData = [
  {
    dataKey: "total revenue",
    dataValue: "৳1818",
    icon: "revenue",
  },
  {
    dataKey: "toal order",
    dataValue: "13",
    icon: "box",
  },
  {
    dataKey: "partner revenue",
    dataValue: "৳139",
    icon: "profit",
  },
  {
    dataKey: "total partners",
    dataValue: "7",
    icon: "partner",
  },
];

const orderData = [
  {
    dataKey: "pending order",
    dataValue: "0",
    icon: "pending",
  },
  {
    dataKey: "processing order",
    dataValue: "2",
    icon: "processing",
  },
  {
    dataKey: "completed order",
    dataValue: "90",
    icon: "complete",
  },
  {
    dataKey: "cancelled order",
    dataValue: "11",
    icon: "cancel",
  },
];

export default function Page() {
  return (
    <div className="grid gap-8">
      {/* Summary */}
      <Block title="summary">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
          {summaryData.map((data, index) => (
            <TotalCard key={index} data={data} />
          ))}
        </div>
      </Block>
      {/* Order Status */}
      <Block title="order status">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
          {orderData.map((data, index) => (
            <TotalCard key={index} data={data} />
          ))}
        </div>
      </Block>
      {/* Recent Orders */}
      <Block title="recent orders">
        <EmptyItem message="looks like there's no data to display." />
      </Block>
      {/* Popular Products */}
      <Block title="popular products">
        <EmptyItem message="looks like there's no data to display." />
      </Block>
    </div>
  );
}
