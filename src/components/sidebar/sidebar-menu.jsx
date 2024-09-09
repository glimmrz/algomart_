"use client";
import { navLinks } from "@/lib/staticData";
import { useSidebarMenu } from "@/hooks/modal-controllers";
import Link from "next/link";
import Icon from "@/components/icon";
import Sidebar from "./sidebar";

export default function SidebarMenu() {
  const { isOpen, onClose } = useSidebarMenu();

  return (
    <Sidebar isOpen={isOpen} onClose={onClose} sidebarHeader="pages">
      {navLinks.map((item, index) => (
        <Link
          href={item?.slug ? item?.slug : "#"}
          key={index}
          className="button !border-theme_variant border-[1px]"
          onClick={onClose}
        >
          <div className="w-full flex items-center justify-between">
            <span>{item?.label}</span>
            <Icon icon={item?.icon} />
          </div>
        </Link>
      ))}
    </Sidebar>
  );
}
