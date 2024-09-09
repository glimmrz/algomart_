"use client";
import { useCallback, useEffect, useState } from "react";
import Container from "../wrappers/container";
import Button from "../button";
import Heading from "../heading";

export default function Modal({
  isOpen,
  onClose,
  modalBody,
  modalHeader,
  modalIcon,
  customStyles = "",
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    document.body.style.overflowY = "auto";

    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div className="h-[100vh] w-full fixed top-0 left-0 z-[5]">
      <div
        className="bg-[rgba(0,0,0,.5)] h-full w-full"
        onClick={handleClose}
      ></div>
      <div
        className={`no-scrollbar absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-fit max-h-full rounded-md bg-background translate-y-24 opacity-0 overflow-y-auto transition-all duration-300 md:w-[550px] md:max-h-[95%] ${
          showModal && "!opacity-100 !translate-y-0"
        } ${customStyles}`}
      >
        {/* Modal Header */}
        {(modalHeader || modalIcon) && (
          <div className="border-b-[1px] border-shade sticky top-0 bg-background z-[5] md:static">
            <Container>
              <div className="flex items-center justify-between">
                <Heading title_md={modalHeader} />
                <Button
                  icon={modalIcon}
                  variant="close"
                  customStyles="rounded-full"
                  ariaLabel="close modal"
                  onClick={handleClose}
                />
              </div>
            </Container>
          </div>
        )}

        {/* Modal Body */}
        <div className="h-fit">
          <Container>{modalBody}</Container>
        </div>
      </div>
    </div>
  );
}
