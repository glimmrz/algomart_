"use client";
import { useProfileSidebar } from "@/hooks/modal-controllers";
import Button from "@/components/button";

export default function ProfileSiebarTrigger({ children }) {
  const { onOpen } = useProfileSidebar();

  return (
    <Button
      label="show menu"
      variant="primary"
      customStyles="mb-2 lg:hidden"
      onClick={onOpen}
    />
  );
}
