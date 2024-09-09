"use client";
import { useEffect, useState } from "react";
import Button from "../button";
import Container from "../wrappers/container";
import Heading from "../heading";

export default function Sidebar({
  children,
  footer,
  sidebarHeader,
  onClose,
  isOpen,
}) {
  const [showSidebar, setShowSidebar] = useState(isOpen);

  useEffect(() => {
    setShowSidebar(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShowSidebar(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <aside>
      <div
        className="bg-[rgba(0,0,0,0.3)] h-[100vh] w-[100vw] fixed top-0 left-0 z-[5]"
        onClick={handleClose}
      ></div>
      <div
        className={`bg-background h-[100vh] w-[100vw] fixed top-0 right-0 flex flex-col justify-between shadow-active translate-x-[700px] opacity-0 z-[5] transition-all duration-300 md:w-[calc(theme(width.sidebar)+100px)] ${
          showSidebar && "!opacity-100 !translate-x-0"
        }`}
      >
        <header className="border-b-[1px] border-theme_variant">
          <Container>
            <div className="flex items-center justify-between">
              <Heading title_md={sidebarHeader} />
              <Button
                icon="close"
                variant="close"
                customStyles="p-1 rounded-full"
                ariaLabel="close sidebar"
                onClick={handleClose}
              />
            </div>
          </Container>
        </header>
        <main className="flex-grow overflow-auto mb-2 no-scrollbar">
          <Container>
            <div className="w-full h-full flex flex-col gap-2">{children}</div>
          </Container>
        </main>
        {footer && (
          <footer className="border-t-[1px] border-accent bg-accent">
            <Container>{footer}</Container>
          </footer>
        )}
      </div>
    </aside>
  );
}
