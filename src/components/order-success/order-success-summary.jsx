import Container from "@/components/wrappers/container";
import DataCell from "@/components/data-cell";
import Heading from "@/components/heading";

export default function OrderSuccessSummary() {
  return (
    <div className="bg-accent rounded-md h-fit sticky top-[calc(theme(height.navbar)+theme(gap.2))]">
      <Container>
        <Heading title="order summary" />
        <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
          <DataCell large dataName="subtotal" dataValue="$99.99" />
          <DataCell large dataName="delivery charge" dataValue="$19.99" />
          <DataCell large dataName="discount" dataValue="$5.00" />
          <DataCell large dataName="payment method" dataValue="paypal" />
        </div>
        <DataCell
          large
          dataName="delivery address"
          dataValue="park avenue, NY, 3432, United states"
        />
      </Container>
    </div>
  );
}
