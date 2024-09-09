"use client";
import { useProductModal } from "@/hooks/modal-controllers";
import Image from "next/image";
import RatingStars from "@/components/rating/rating-stars";
import Price from "./price";
import Discount from "./discount";

export default function ProductCardSlim({ product }) {
  const { isOpen, onOpen, onClose } = useProductModal();

  const handleModalOpen = () => {
    if (isOpen) {
      onClose();
    }

    setTimeout(() => {
      onOpen(product);
    }, 300);
  };

  return (
    <article
      className="p-1 border-[1px] border-theme_variant rounded-md"
      onClick={handleModalOpen}
      title={product?.title}
    >
      <div className="flex items-center">
        <figure className="relative h-[100px] w-[120px]">
          <Image
            src={product?.images && product?.images[0]}
            alt=""
            fill
            sizes="100px"
            className="object-contain"
          />
        </figure>
        <div className="pt-0 pb-0 pl-1 pr-1 w-full flex flex-col gap-1">
          <h3 className="capitalize font-bold text-base cursor-pointer transition-colors duration-300 hover:text-theme">
            {product?.title}
          </h3>
          <RatingStars />
          <div className="flex items-center justify-between">
            <Price price={22} discounted_price={13} />
            <Discount price={22} discounted_price={13} />
          </div>
        </div>
      </div>
    </article>
  );
}
