"use client";
import Link from "next/link";
import Icon from "@/components/icon";
import { useState } from "react";

export default function DashboardSidebarItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link
        href={item?.href ? item?.href : "#"}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-2 hover:bg-accent hover:text-theme rounded-md transition-colors duration-300 select-none"
      >
        <div className="flex gap-2 items-center">
          <Icon icon={item?.icon} />
          <span className="capitalize">{item?.label}</span>
        </div>
        {item?.children?.length !== 0 && (
          <Icon icon={isOpen ? "chevronUp" : "chevronDown"} />
        )}
      </Link>

      {/* Children */}
      {item?.children?.length !== 0 && isOpen && (
        <div className="flex flex-col ml-12 border-l border-theme border-dashed">
          {item?.children?.map((child, index) => (
            <div
              key={index}
              className="pt-2 pb-2 pr-2 flex items-center gap-2 before:content-[''] before:h-[1px] before:w-4 before:border-t before:border-theme before:border-dashed"
            >
              <Link
                href={`/dashboard/${child?.href}`}
                className="w-full h-full hover:text-theme transition-colors duration-300"
              >
                <span className="capitalize">{child.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
