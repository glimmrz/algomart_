"use client";
import { useState } from "react";
import Link from "next/link";
import Heading from "@/components/heading";
import Icon from "@/components/icon";

export default function FooterGroup({ link }) {
  const [listVisible, setListVisible] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between items-center border-b-[1px] border-mute pb-2 lg:border-b-0 lg:pb-0"
        onClick={() => setListVisible(!listVisible)}
      >
        <Heading title_md={link?.label} />
        <div className="flex lg:hidden">
          <Icon icon={listVisible ? "chevronUp" : "chevronDown"} />
        </div>
      </div>
      <ul
        className={`max-h-0 transition-all duration-300 overflow-hidden lg:max-h-fit ${
          listVisible && "!max-h-[500px]"
        }`}
      >
        {link?.links?.map((item, index) => (
          <li
            className="text-shade capitalize mt-2 transition-colors duration-300 hover:text-theme hover:underline"
            key={index}
          >
            <Link href={item?.href}>
              <span>{item?.label}</span>
            </Link>
          </li>
        ))}

        {link?.label.toLowerCase() === "contact" && (
          <div className="flex gap-4 mt-2">
            <Link
              href="https://twitter.com"
              target="blank"
              aria-label="view twitter profile"
            >
              <Icon size={20} icon="twitter" />
            </Link>
            <Link
              href="https://facebook.com"
              target="blank"
              aria-label="view facebook page"
            >
              <Icon size={20} icon="facebook" />
            </Link>
            <Link
              href="https://instagram.com"
              target="blank"
              aria-label="view instagram profile"
            >
              <Icon size={20} icon="instagram" />
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
}
