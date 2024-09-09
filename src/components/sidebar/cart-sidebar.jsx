"use client";
import { useCart } from "@/hooks/use-cart";
import { useCartSidebar } from "@/hooks/modal-controllers";
import Sidebar from "./sidebar";
import CartItem from "@/components/cart/cart-item";
import EmptyCart from "@/components/cart/empty-cart";
import CartFooter from "../cart/cart-footer";

export default function CartSidebar() {
  const { onClose, isOpen } = useCartSidebar();
  const { cartItems, total } = useCart();

  return (
    <Sidebar
      sidebarHeader="shopping cart"
      onClose={onClose}
      isOpen={isOpen}
      footer={<CartFooter total={total} />}
    >
      {cartItems.length <= 0 && <EmptyCart />}

      {cartItems.length > 0 &&
        cartItems.map((item, index) => <CartItem key={index} item={item} />)}
    </Sidebar>
  );
}
