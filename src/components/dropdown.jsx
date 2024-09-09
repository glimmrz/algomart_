"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "./button";
import Icon from "./icon";
import Container from "./wrappers/container";
import DynamicIcon from "./dynamic-icon";

export default function Dropdown({
  content,
  dropdownIcon,
  dropdownSecondaryIcon,
  dropdownLabel,
  ariaLabel,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleClick = (event) => {
    if (isDropdownOpen && !dropdownRef?.current?.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleClick);
    }

    return () => document.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <Button
        secondaryIcon={dropdownSecondaryIcon}
        icon={dropdownIcon}
        label={dropdownLabel}
        ariaLabel={ariaLabel}
        variant="outline"
        onClick={() => setIsDropdownOpen(true)}
      />

      {isDropdownOpen && (
        <div
          className="bg-background absolute right-0 rounded-md mt-2 shadow-rg min-w-[170px] w-max animate-grow"
          ref={dropdownRef}
        >
          <Container>
            <div className="flex flex-col gap-2">
              {/* Dropdown items */}
              {content?.map((item, index) => (
                <Link
                  key={index}
                  href={item?.slug ? item?.slug : "#"}
                  className={`button border-[1px] border-shade w-full hover:shadow-active hover:border-theme_variant hover:text-theme`}
                  tabIndex="0"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(false);
                    item?.action && item?.action();
                  }}
                >
                  <div className="w-full flex items-center justify-between gap-2">
                    {item?.label && <span>{item?.label}</span>}
                    <DynamicIcon name={item?.icon} />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
