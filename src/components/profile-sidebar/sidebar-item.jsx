import Link from "next/link";
import Button from "@/components/button";
import { useProfileSidebar } from "@/hooks/modal-controllers";

export default function SidebarItem({ item, pathname }) {
  const { onClose } = useProfileSidebar();

  return (
    <Link href={item?.link ? item?.link : "#"}>
      <div
        className={`rounded-md transition-colors duration-300 hover:bg-theme_variant ${
          pathname === item?.link &&
          "bg-theme_variant text-theme border-l-[5px] border-theme"
        }`}
      >
        <Button
          label={item?.label}
          secondaryIcon={item?.icon}
          variant="ghost"
          iconSize={22}
          customStyles="border-0 w-full !justify-start text-inherit"
          onClick={onClose}
        />
      </div>
    </Link>
  );
}
