"use client";
import { useParams } from "next/navigation";
import { categories, loggedInMenu, userMenu } from "@/lib/staticData";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";
import { useCartSidebar, useSearchModal } from "@/hooks/modal-controllers";
import Link from "next/link";
import Container from "../wrappers/container";
import Logo from "../logo";
import Button from "../button";
import Dropdown from "../dropdown";
import { errorToast, factorText } from "@/utils/helpers";
import { useEffect, useState } from "react";
import { getData } from "@/utils/apiCalls";

export default function Navbar({ isLoggedIn }) {
  const [categoryContent, setCategoryContent] = useState([]);
  const params = useParams();
  const searchModal = useSearchModal();
  const { wishlistItems } = useWishlist();
  const { onOpen } = useCartSidebar();
  const { cartItems } = useCart();

  const totalCartItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  const totalWishlistItems = wishlistItems?.length;

  useEffect(() => {
    const getCategories = async () => {
      const res = await getData("categories");

      if (res.error) {
        return errorToast("Something went wrong. Please try again.");
      }

      setCategoryContent(res.response.payload);
    };

    getCategories();
  }, []);

  return (
    <nav className="h-navbar sticky top-0 left-0 bg-background shadow-rg z-[4]">
      <Container>
        <div className="h-full flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-4">
            <Button
              onClick={searchModal.onOpen}
              icon="search"
              variant="outline"
              customStyles="rounded-full hidden md:block"
              ariaLabel="click to open search bar"
            />

            <Dropdown
              dropdownLabel={
                params?.category
                  ? factorText(params?.category)
                  : categories?.label
              }
              dropdownIcon={categories?.icon}
              dropdownSecondaryIcon={categories?.secondaryIcon}
              ariaLabel={categories?.ariaLabel}
              content={categoryContent}
            />

            {/* Usermenu Dropdown */}
            <div className="hidden md:block">
              {isLoggedIn && (
                <Dropdown
                  dropdownIcon={loggedInMenu?.icon}
                  dropdownSecondaryIcon={loggedInMenu?.secondaryIcon}
                  dropdownLabel={loggedInMenu?.label}
                  ariaLabel={loggedInMenu?.ariaLabel}
                  content={loggedInMenu?.content}
                />
              )}

              {!isLoggedIn && (
                <Dropdown
                  dropdownIcon={userMenu?.icon}
                  dropdownSecondaryIcon={userMenu?.secondaryIcon}
                  dropdownLabel={userMenu?.label}
                  ariaLabel={userMenu?.ariaLabel}
                  content={userMenu?.content}
                />
              )}
            </div>
            {/* Cart and wishlist */}
            <Link href="/user/wishlist" className="hidden md:block">
              <Button
                label={totalWishlistItems}
                secondaryIcon="heart"
                ariaLabel="view cart"
                variant="outline"
              />
            </Link>
            <div className="hidden md:block">
              <Button
                secondaryIcon="cart"
                label={totalCartItems}
                variant="outline"
                onClick={onOpen}
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
