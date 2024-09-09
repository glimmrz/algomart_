"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import cover from "@/assets/cover.png";
import profile from "@/assets/1.jpg";
import Container from "../wrappers/container";
import SidebarItem from "./sidebar-item";
import Button from "../button";
import Heading from "../heading";
import { useProfileSidebar } from "@/hooks/modal-controllers";

const sidebarItems = [
  {
    label: "profile",
    link: "profile",
    icon: "user",
  },
  {
    label: "orders",
    link: "orders",
    icon: "box",
  },
  {
    label: "wishlist",
    link: "wishlist",
    icon: "heart",
  },
  {
    label: "address",
    link: "address",
    icon: "location",
  },
];

export default function ProfileSidebar() {
  const pathname = useParams();
  const { isOpen, onClose } = useProfileSidebar();

  return (
    <aside
      className={`w-full h-[100vh] fixed top-0 left-[-1800px] opacity-0 bg-accent rounded-md shadow-rg overflow-hidden transition-all duration-300 z-[5] md:min-w-[theme(width.sidebar)] md:w-sidebar lg:h-fit lg:sticky lg:top-[calc(theme(height.navbar)+theme(gap.2))] lg:opacity-100 lg:z-[3] ${
        isOpen && "left-[0px] opacity-100 shadow-active"
      }`}
    >
      <header className="relative">
        <figure className="relative h-[100px]">
          <Image
            src={cover}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 350px"
          />

          <div className="absolute w-fit bottom-[-45px] left-0 right-0 m-auto">
            <figure className="relative h-[90px] w-[90px] rounded-full overflow-hidden border-[5px] border-background">
              <Image
                src={profile}
                alt=""
                fill
                className="object-contain"
                sizes="80px"
              />
            </figure>
          </div>
        </figure>

        <div className="mt-10 text-center border-b-[1px] border-shade pt-2 pb-2">
          <Heading title="jane doe" />
          <p className="text-base opacity-70">jane@email.com</p>
        </div>

        <Button
          icon="close"
          variant="close"
          customStyles="p-3 rounded-full absolute top-2 right-2 lg:hidden"
          onClick={onClose}
        />
      </header>

      <Container>
        <div className="flex flex-col gap-2">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} item={item} pathname={pathname?.view} />
          ))}
        </div>
      </Container>
    </aside>
  );
}
