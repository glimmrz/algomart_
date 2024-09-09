"use client";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useProductModal } from "@/hooks/modal-controllers";
import { useCheckCart, useCheckWishlist } from "@/hooks/helpers";
import { factorCartPrice } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/wrappers/container";
import RatingStars from "@/components/rating/rating-stars";
import Button from "@/components/button";
import Badge from "@/components/badge";
import Price from "./price";

export default function ProductCard({ product }) {
  const { onOpen } = useProductModal();
  const { onAdd } = useCart();
  const wishlist = useWishlist();

  // Update modal product
  const handleModalOpen = (event) => {
    if (!event.target.closest("button") && !event.target.closest("a")) {
      onOpen(product);
    }
  };

  // Add to cart
  const handleAddToCart = () => {
    onAdd({
      ...product,
      price: factorCartPrice(product?.discounted_price, product?.price),
    });
  };

  // Check if product already in wishlist and cart
  const isInWishlist = useCheckWishlist(product);
  const isInCart = useCheckCart(product);

  return (
    <article
      className="overflow-hidden relative border-[1px] border-transparent shadow-rg rounded-md transition-[box-shadow,_colors] duration-300 hover:shadow-active hover:border-theme_variant group"
      title={product?.title}
      onClick={handleModalOpen}
    >
      <Container>
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <figure className="mt-2 mb-2 relative h-[180px] w-full">
            <Image
              src={product?.images ? product?.images[0] : ""}
              alt={product?.title}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              fill
              sizes="300px"
            />
          </figure>
          {/* Product details */}
          <section className="capitalize">
            <Link
              href={`/shop?category=${product?.category?.name}`}
              className="text-sm text-mute"
            >
              {product?.category?.name}
            </Link>
            <h2 className="line-clamp-1 mt-1 text-base font-bold cursor-pointer transition-colors duration-300 hover:text-theme">
              {product?.title}
            </h2>
            {/* Rating */}
            <RatingStars />
            <span className="text-sm">
              <span>by </span>
              <Link
                href={`/shop?brand=${product?.brand}`}
                className="text-theme"
              >
                {product?.brand}
              </Link>
            </span>
            {/* Product Price */}
            <div className="flex items-center justify-between mt-2">
              <Price
                customStyles="text-theme"
                price={product?.price}
                discounted_price={product?.discounted_price}
              />
              <Button
                variant="outline"
                label="add"
                ariaLabel="add to cart"
                icon={isInCart ? "apply" : "cart"}
                onClick={handleAddToCart}
              />
            </div>
          </section>

          {/* Status Icon */}
          <div className="w-full absolute top-0 left-0 flex items-center justify-between">
            <Badge status={product?.status} />
            <Button
              ariaLabel="click to add product to wishlist"
              icon={isInWishlist ? "heartCross" : "heart"}
              customStyles="rounded-full"
              variant="outline"
              onClick={
                !isInWishlist
                  ? () => wishlist.onAdd(product)
                  : () => wishlist.onRemove(product?._id, product?.title)
              }
            />
          </div>
        </div>
      </Container>
    </article>
  );
}
