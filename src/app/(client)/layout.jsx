import { getCookie } from "@/utils/cookie";
import Navbar from "@/components/navbar/navbar";
import SearchModal from "@/components/modals/search-modal";
import Footer from "@/components/footer/footer";
import MobileNav from "@/components/navbar/mobile-nav";
import FilterSidebar from "@/components/sidebar/filter-sidebar";
import CartSidebar from "@/components/sidebar/cart-sidebar";
import SidebarMenu from "@/components/sidebar/sidebar-menu";
import Scroll from "@/components/scroll";
import ProductModal from "@/components/modals/product-modal";
import NavLinks from "@/components/navbar/nav-links";

export const metadata = {
  title: "Home | AlgoMart",
  description: "The best marketplace there is.",
};

export default async function RootLayout({ children }) {
  const user = await getCookie("session");

  return (
    <>
      <SidebarMenu />
      <ProductModal />
      <SearchModal />
      <CartSidebar />
      <FilterSidebar />
      <Navbar isLoggedIn={user} />
      <NavLinks />
      {children}
      <Footer />
      <MobileNav />
      <Scroll />
    </>
  );
}
