"use client";
import { useCart } from "@/hooks/use-cart";
import Section from "./section";
import CartItem from "./cart/cart-item";
import InputButton from "./input-with-button";

export default function CheckoutSummary() {
  const { cartItems, total } = useCart();

  return (
    <Section title="order summary" sectionStyles="!mt-0">
      <div className="max-h-[450px] overflow-auto grid gap-2 mb-2">
        {cartItems?.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <div className="mt-8">
        <InputButton
          buttonAriaLabel="apply coupon code"
          inputAriaLabel="enter coupon code"
          buttonLabel="apply"
          buttonIcon="save"
          placeholder="BDDH2024"
        />
      </div>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">Sub Total</td>
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">
              ${(total / 100).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">Delivery Charge</td>
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">৳0.00</td>
          </tr>
          <tr>
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">Discount</td>
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">৳0.00</td>
          </tr>
          <tr className="text-3xl">
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">Order total</td>
            <td className="capitalize pt-3 pb-3 pl-0 pr-0">
              ৳{(total / 100).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
