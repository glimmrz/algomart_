import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setCurrentPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return currentPosition;
}

export function useCheckCart(product) {
  const { cartItems } = useCart();

  return cartItems?.find((item) => item?._id === product?._id);
}

export function useCheckWishlist(product) {
  const { wishlistItems } = useWishlist();

  return wishlistItems?.find((item) => item?._id === product?._id);
}
