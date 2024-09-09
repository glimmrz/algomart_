"use client";
import { useRouter } from "next/navigation";
import {
  useCartSidebar,
  useSearchModal,
  useSidebarMenu,
} from "@/hooks/modal-controllers";
import Container from "@/components/wrappers/container";
import Button from "../button";

export default function MobileNav() {
  const router = useRouter();
  const searchModal = useSearchModal();
  const cartSidebar = useCartSidebar();
  const sidebarMenu = useSidebarMenu();

  return (
    <nav className="w-full bg-background border-t-[1px] border-shade sticky bottom-0 left-0 z-[4] md:hidden">
      <Container>
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            ariaLabel="open sidebar menu"
            icon="menu"
            onClick={sidebarMenu.onOpen}
          />
          <Button
            variant="outline"
            ariaLabel="search for products"
            icon="search"
            onClick={searchModal.onOpen}
          />
          <Button
            variant="outline"
            ariaLabel="browse all products"
            icon="shop"
            onClick={() => router.push("/shop")}
          />
          <Button
            variant="outline"
            ariaLabel="view wishlist"
            icon="heart"
            onClick={() => router.push("/user/wishlist")}
          />
          <Button
            variant="outline"
            ariaLabel="view shopping cart"
            icon="cart"
            onClick={cartSidebar.onOpen}
          />
        </div>
      </Container>
    </nav>
  );
}
