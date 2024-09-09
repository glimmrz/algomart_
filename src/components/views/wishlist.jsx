"use client";
import { useWishlist } from "@/hooks/use-wishlist";
import GridView from "@/components/grid-view";
import UserDashboardWrapper from "../wrappers/user-dashboard-wrapper";
import ProductCardVariant from "../product-cards/product-card-variant";
import EmptyItem from "../empty-item";

export default function Wishlist() {
  const wishlist = useWishlist();

  return (
    <UserDashboardWrapper title="wishlist items">
      {wishlist?.wishlistItems?.length === 0 ? (
        <EmptyItem message="Looks like there's in your wishlist. Add some items first." />
      ) : (
        <GridView>
          {wishlist?.wishlistItems?.map((pro, index) => (
            <ProductCardVariant key={index} product={pro} />
          ))}
        </GridView>
      )}
    </UserDashboardWrapper>
  );
}
