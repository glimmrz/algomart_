"use client";
import { useCartSidebar } from "@/hooks/modal-controllers";
import Link from "next/link";
import Icon from "@/components/icon";
import Heading from "@/components/heading";
import Button from "../button";
import Text from "../text";

export default function EmptyCart() {
  const { onClose } = useCartSidebar();

  const handleClose = () => {
    if (document) {
      document.body.style.overflowY = "auto";
      onClose();
    }
  };

  return (
    <div className="h-full relative flex flex-col items-center justify-center gap-2">
      <Heading title="Your cart is empty" />
      <Text customStyles="!text-center">
        Looks like you haven&apos;t added anything to your cart yet.
      </Text>
      <Link href="/shop" className="z-[1]">
        <Button
          icon="arrowRight"
          label="shop now"
          variant="primary"
          ariaLabel="browse all products"
          onClick={handleClose}
        />
      </Link>
      <div className="h-fit absolute top-0 bottom-0 m-auto opacity-10">
        <Icon icon="box" size={200} />
      </div>
    </div>
  );
}
