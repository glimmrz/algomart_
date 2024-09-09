import Image from "next/image";
import success from "@/assets/success.png";
import Text from "@/components/text";
import Heading from "@/components/heading";
import Container from "@/components/wrappers/container";
import OrderSuccess from "@/components/order-success/order-success";
import Section from "@/components/section";

export const metadata = {
  title: "Order Successful | AlgoMart",
  description: "Order placed successfully.",
};

export default function OrderSuccessPage() {
  return (
    <Container>
      <Section sectionStyles="!mt-0">
        <div className="pt-4 pb-4 pl-0 pr-0 flex flex-col items-center justify-center gap-2">
          <figure className="mb-2 h-[150px] w-[150px] relative">
            <Image
              src={success}
              alt="order success checkmark"
              className="object-contain"
              sizes="200px"
              fill
            />
          </figure>

          <Heading title="order placed successfully." />
          <Text customStyles="!text-center">
            Your order is success and your order is on the way.
          </Text>
          <Text>Order ID: 1243893465929563</Text>
        </div>
      </Section>
      <Section>
        <OrderSuccess />
      </Section>
    </Container>
  );
}
