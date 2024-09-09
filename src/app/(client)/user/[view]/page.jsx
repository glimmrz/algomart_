import { notFound } from "next/navigation";
import ProfileSidebar from "@/components/profile-sidebar/profile-sidebar";
import Container from "@/components/wrappers/container";
import ProfileSiebarTrigger from "@/components/profile-sidebar/profile-sidebar-trigger";
import Profile from "@/components/views/profile";
import Address from "@/components/views/address/address";
import Wishlist from "@/components/views/wishlist";
import Orders from "@/components/views/orders/orders";

export const metadata = {
  title: "Jane Doe | AlgoMart",
  description: "User profile page.",
};

export default function ProfilePage({ params }) {
  const views = {
    profile: Profile,
    address: Address,
    wishlist: Wishlist,
    orders: Orders,
  };

  const CurrentView = views[params?.view];

  if (!CurrentView) notFound();

  return (
    <Container>
      <div className="lg:flex">
        <ProfileSiebarTrigger />
        <ProfileSidebar />

        <div className="w-full rounded-md">
          <div className="p-0 md:p-2">
            <CurrentView />
          </div>
        </div>
      </div>
    </Container>
  );
}
