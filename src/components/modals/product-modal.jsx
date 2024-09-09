"use client";
import { useEffect, useState } from "react";
import { dummyProducts } from "@/lib/staticData";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";
import { useProductModal } from "@/hooks/modal-controllers";
import { useCheckCart, useCheckWishlist } from "@/hooks/helpers";
import { factorCartPrice, factorLink } from "@/utils/helpers";
import Image from "next/image";
import Rating from "@/components/rating/rating";
import GridView from "@/components/grid-view";
import Text from "@/components/text";
import Heading from "@/components/heading";
import Tag from "@/components/category/tag";
import RatingStars from "@/components/rating/rating-stars";
import CustomizeProduct from "@/components/customize-product";
import QuantityControl from "@/components/quantity-control";
import Link from "next/link";
import Section from "@/components/section";
import Button from "@/components/button";
import Review from "@/components/review";
import ProductCardSlim from "@/components/product-cards/product-card-slim";
import Modal from "./modal";
import RichView from "../rich-view";

function ProductModal() {
  const { isOpen, onClose, currentProduct } = useProductModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const wishlist = useWishlist();
  const cart = useCart();

  // Check if product in cart and wishlist
  const isInWishlist = useCheckWishlist(currentProduct);
  const isInCart = useCheckCart(currentProduct);

  const relatedProducts = dummyProducts?.slice(0, 4);

  // Close modal and reset body overflow
  const handleClose = () => {
    if (document.body) {
      document.body.style.overflowY = "auto";
      onClose();
    }
  };

  // Reset selected image index on modal open
  useEffect(() => {
    setCurrentIndex(0);
  }, [isOpen]);

  const modalContent = (
    <>
      <Section sectionStyles="!mt-0">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {/* Product Images */}
          <div className="overflow-hidden h-fit lg:sticky md:top-0">
            <figure className="relative h-[400px] w-full">
              <Image
                fill
                src={
                  currentProduct?.images && currentProduct?.images[currentIndex]
                }
                alt=""
                className="object-contain p-2 transition-opacity duration-300"
                priority
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </figure>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,0.5fr))] gap-2 pt-1 pb-1 overflow-hidden">
              {currentProduct?.images?.map((image, index) => (
                <figure
                  className={`relative h-[100px] border-[1px] border-shade rounded-md cursor-pointer transition-[opacity,border-color] duration-300 hover:opacity-80 hover:border-theme_variant ${
                    currentIndex === index && "!border-theme"
                  }`}
                  key={index}
                >
                  <Image
                    fill
                    src={image}
                    alt=""
                    className="object-contain p-2"
                    onClick={() => setCurrentIndex(index)}
                  />
                </figure>
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="flex flex-col gap-8">
            <div>
              <Heading title={currentProduct?.title} />
              <RatingStars />

              {/* Price section */}
              <div className="flex items-center gap-2">
                {currentProduct?.discounted_price < currentProduct?.price && (
                  <span className="font-bold text-2xl text-inherit mr-1">
                    ৳{(currentProduct?.discounted_price / 100).toFixed(2)}
                  </span>
                )}
                <span
                  className={`text-sm text-mute font-bold line-through ${
                    currentProduct?.discounted_price > currentProduct?.price &&
                    "!text-2xl !text-inherit !no-underline"
                  }`}
                >
                  ৳{(currentProduct?.price / 100).toFixed(2)}
                </span>
              </div>
            </div>
            {/* Product specification */}
            <div>
              {" "}
              <h4 className="grid gap-2 text-xl font-bold capitalize after:content-[''] after:h-[1px] after:w-full after:rounded-md after:bg-shade">
                product specifications
              </h4>
              <ul className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2">
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    weight
                  </span>{" "}
                  {currentProduct?.weight}
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    brand
                  </span>{" "}
                  {currentProduct?.brand}
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    material
                  </span>{" "}
                  {currentProduct?.material}
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    warranty
                  </span>{" "}
                  {currentProduct?.warranty}
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    box type
                  </span>{" "}
                  {currentProduct?.box_type}
                </li>
                <li className="capitalize">
                  <span className="inline-flex font-bold min-w-[100px]">
                    color
                  </span>{" "}
                  {currentProduct?.color}
                </li>
              </ul>
            </div>

            {/* Product Variations */}
            {currentProduct.variants && (
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-2">
                <CustomizeProduct options={currentProduct.variants} />
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid gap-2 md:grid-cols-2">
              {!isInCart && (
                <Button
                  label="add to cart"
                  ariaLabel="add product to shopping cart"
                  icon="bag"
                  variant="primary"
                  onClick={() =>
                    cart.onAdd({
                      ...currentProduct,
                      price: factorCartPrice(
                        currentProduct?.discounted_price,
                        currentProduct?.price
                      ),
                    })
                  }
                />
              )}
              {isInCart && (
                <QuantityControl
                  id={currentProduct?.id}
                  title={currentProduct?.title}
                  quantity={isInCart?.quantity}
                />
              )}
              <Button
                label={
                  !isInWishlist ? "add to wishlist" : "remove from wishlist"
                }
                ariaLabel="add product to wishlist"
                icon={!isInWishlist ? "heart" : "heartCross"}
                variant="ghost"
                onClick={
                  !isInWishlist
                    ? () => wishlist.onAdd(currentProduct)
                    : () =>
                        wishlist.onRemove(
                          currentProduct?._id,
                          currentProduct?.title
                        )
                }
              />
            </div>

            {/* Tags */}
            <div>
              {/* <Heading title="tags" /> */}
              <h4 className="grid gap-2 text-xl font-bold capitalize after:content-[''] after:h-[1px] after:w-full after:rounded-md after:bg-shade">
                tags
              </h4>
              <div className="flex gap-2 flex-wrap mt-2">
                {currentProduct?.tags?.map((tag, index) => (
                  <Link href={`/shop?tag=${factorLink(tag)}`} key={index}>
                    <Tag onClick={handleClose} tag={tag} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Product description */}
      <Section title="description">
        <article>
          {/* <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            obcaecati molestiae necessitatibus qui eum. Nisi, quibusdam. Veniam
            soluta eius iste dolore! Totam itaque quisquam molestiae suscipit
            assumenda ad eveniet esse sit reprehenderit, omnis, vel mollitia
            odio culpa blanditiis incidunt cupiditate sed! Beatae labore
            obcaecati, ipsa repellat vitae, tempore blanditiis voluptas minima
            quaerat nulla molestiae, optio architecto! Blanditiis inventore
            error minima nam amet cupiditate, odio magni veritatis, doloribus
            nostrum sint soluta optio reiciendis. Facilis id dignissimos
            explicabo alias laborum, at atque.
          </Text> */}
          <RichView htmlContent={currentProduct?.description} />
        </article>
      </Section>
      {/* customer reviews */}
      <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-2">
        <Section sectionTitle="reviews" contentStyles="flex flex-col gap-2">
          <Review />
          <Review />
          <Review />
          <Rating />
        </Section>

        <Section
          sectionTitle="related products"
          contentStyles="lg:sticky lg:top-[theme(gap.2)] lg:h-fit"
        >
          <GridView customStyles="md:!grid-cols-2 lg:!grid-cols-1 !mt-0">
            {relatedProducts?.map((product, index) => (
              <ProductCardSlim key={index} product={product} />
            ))}
          </GridView>
        </Section>
      </div>
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      modalBody={modalContent}
      modalIcon="close"
      customStyles="md:!w-[95%] lg:!w-[90%]"
    />
  );
}

export default ProductModal;
