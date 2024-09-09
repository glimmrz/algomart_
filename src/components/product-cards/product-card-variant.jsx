"use client";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useProductModal } from "@/hooks/modal-controllers";
import { useCheckCart, useCheckWishlist } from "@/hooks/helpers";
import { factorCartPrice } from "@/utils/helpers";
import Image from "next/image";
import Container from "@/components/wrappers/container";
import RatingStars from "@/components/rating/rating-stars";
import Button from "@/components/button";
import Price from "./price";

export default function ProductCardVariant({ product }) {
  const cart = useCart();
  const wishlist = useWishlist();
  const { onOpen } = useProductModal();

  const handleModalOpen = (event) => {
    if (!event.target.closest("button")) {
      onOpen(product);
    }
  };

  // Check if product already in wishlist
  const isInWishlist = useCheckWishlist(product);
  const isInCart = useCheckCart(product);

  return (
    <article
      className="border-[1px] border-transparent rounded-md shadow-rg transition-[colors,box-shadow] duration-300 group hover:shadow-active hover:border-theme_variant"
      title={product?.title}
      onClick={handleModalOpen}
    >
      <Container>
        <div className="relative overflow-hidden">
          <figure className="relative h-[208px] w-full">
            <Image
              src={product?.images && product?.images[0]}
              alt={product?.title}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              fill
              sizes="300px"
            />
          </figure>

          {/* Product Details */}
          <section className="p-2 flex flex-col gap-2">
            <div>
              <Price
                price={product?.price}
                discounted_price={product?.discounted_price}
              />

              <div className="absolute bottom-0 right-0 flex items-center gap-2">
                <Button
                  icon={isInCart ? "apply" : "bag"}
                  ariaLabel="add product to cart"
                  variant="outline"
                  customStyles="!border-0 hover:bg-transparent hover:opacity-50 hover:text-theme"
                  onClick={() =>
                    cart.onAdd({
                      ...product,
                      price: factorCartPrice(
                        product?.discounted_price,
                        product?.price
                      ),
                    })
                  }
                />

                <Button
                  ariaLabel="click to add product to wishlist"
                  icon={isInWishlist ? "heartCross" : "heart"}
                  customStyles="!border-0 hover:bg-transparent hover:opacity-50 hover:text-theme"
                  variant="outline"
                  onClick={
                    !isInWishlist
                      ? () => wishlist.onAdd(product)
                      : () => wishlist.onRemove(product?._id, product?.title)
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 capitalize">
              <h2 className="text-base font-bold line-clamp-1 cursor-pointer transition-colors duration-300">
                {product?.title}
              </h2>
              <RatingStars />
              <span>{product?.weight}</span>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
