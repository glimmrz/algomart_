"use client";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import Container from "@/components/wrappers/container";
import QuantityControl from "@/components/quantity-control";
import Button from "../button";

export default function CartItem({ item }) {
  const { onRemove } = useCart();

  const handleRemoveFromCart = () => {
    onRemove(item?._id, item?.title);
  };

  return (
    <div className="border-[1px] border-shade bg-accent rounded-md">
      <Container>
        <div className="grid grid-cols-[1.5fr_3fr] gap-2">
          <div className="relative">
            <Image
              src={item?.images && item?.images[0]}
              alt={item?.title}
              className="object-contain"
              fill
              sizes="100px"
            />
          </div>
          <div className="relative flex flex-col gap-2">
            <h3 className="capitalize text-base font-bold line-clamp-1">
              {item?.title}
            </h3>
            <p className="capitalize text-base font-bold line-clamp-1">
              ৳{(item?.price / 100).toFixed(2)} x {item?.quantity}
            </p>
            <QuantityControl
              id={item?._id}
              title={item?.title}
              quantity={item?.quantity}
            />

            <Button
              onClick={handleRemoveFromCart}
              icon="close"
              variant="destructive"
              customStyles="rounded-full absolute h-fit right-0 top-0 bottom-0 m-auto !p-2"
              buttonAriaLabel="remove item from cart"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
