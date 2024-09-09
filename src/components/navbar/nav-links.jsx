import Link from "next/link";
import Container from "../wrappers/container";
import { navLinks } from "@/lib/staticData";
import Text from "../text";
import Icon from "../icon";

export default function NavLinks() {
  return (
    <nav className="hidden md:block md:fixed bottom-4 left-0 right-0 m-auto w-4/5 bg-theme_variant text-font border-2 border-theme rounded-md z-[4]">
      <Container>
        <ul className="flex justify-between">
          {navLinks?.map((link, index) => (
            <li
              key={index}
              className="hover:text-theme transition-colors duration-300"
            >
              <Link href={link?.slug} className="flex gap-2 items-center">
                <Icon icon={link?.icon} />
                <Text>{link?.label}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
