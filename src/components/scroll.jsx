"use client";
import { useScrollPosition } from "@/hooks/helpers";
import { handleScroll } from "@/utils/helpers";
import Icon from "./icon";

export default function Scroll() {
  const position = useScrollPosition();

  if (position < 900) return null;

  return (
    <div
      className="fixed bottom-4 right-4 h-[38px] w-[38px] border-2 border-theme_variant bg-theme rounded-full text-background hidden items-center justify-center z-[4] cursor-pointer md:flex"
      role="button"
      onClick={handleScroll}
    >
      <Icon icon="arrowUp" size={22} />
    </div>
  );
}
