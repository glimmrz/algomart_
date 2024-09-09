"use client";
import InputButton from "@/components/input-with-button";
import Modal from "./modal";
import { useSearchModal } from "@/hooks/modal-controllers";

export default function SearchModal() {
  const { isOpen, onClose } = useSearchModal();

  const modalBody = (
    <InputButton
      buttonLabel="search"
      buttonIcon="search"
      buttonAriaLabel="click to search product"
      inputAriaLabel="search product"
      placeholder="search for products..."
    />
  );

  return (
    <Modal
      modalBody={modalBody}
      isOpen={isOpen}
      onClose={onClose}
      customStyles="!top-[calc(theme(height.navbar)+theme(gap.2))] bottom-auto"
    />
  );
}
