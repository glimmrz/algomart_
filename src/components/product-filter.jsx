"use client";
import { useFilterSidebar } from "@/hooks/modal-controllers";
import Button from "./button";

export default function ProductFilter() {
  const { onOpen } = useFilterSidebar();

  return (
    <Button
      icon="filter"
      variant="ghost"
      customStyles="!border-0 !shadow-none"
      onClick={onOpen}
    />
  );
}
