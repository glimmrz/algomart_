import Image from "next/image";
import Container from "../wrappers/container";
import Text from "../text";
import Heading from "../heading";
import FooterGroup from "./footer-group";
import payment from "@/assets/payment.png";

export default function Footer() {
  const footerLinks = [
    {
      label: "Top categories",
      links: [
        {
          href: "",
          label: "appearals",
        },
        {
          href: "",
          label: "grocery",
        },
        {
          href: "",
          label: "bakery",
        },
        {
          href: "",
          label: "furniture",
        },
        {
          href: "",
          label: "electronics",
        },
      ],
    },
    {
      label: "account",
      links: [
        {
          href: "/login",
          label: "sign in",
        },
        {
          href: "/register",
          label: "sign up",
        },
        {
          href: "/user/wishlist",
          label: "wishlist",
        },
        {
          href: "/user/profile",
          label: "profile",
        },
        {
          href: "/user/orders",
          label: "orders",
        },
      ],
    },
    {
      label: "company",
      links: [
        {
          href: "/shop",
          label: "shop",
        },
        {
          href: "/user/profile",
          label: "about us",
        },
        {
          href: "/user/orders",
          label: "contact us",
        },
        {
          href: "/faq",
          label: "frequently asked questions",
        },
      ],
    },
    {
      label: "contact",
      links: [
        {
          href: "/contact-us",
          label: "send us a message",
        },
      ],
    },
  ];

  return (
    <footer className="bg-font">
      <Container>
        <div>
          <div className="grid gap-4 text-background lg:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))]">
            {/* Group */}
            <div>
              <Heading title_md="about us" customStyles="!mb-2" />
              <Text customStyles="!leading-5 text-shade">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                incidunt laborum aliquid aliquam ea, vero quidem sequi
              </Text>
            </div>

            {footerLinks?.map((link, index) => (
              <FooterGroup key={index} link={link} />
            ))}
          </div>
        </div>
      </Container>
      <div className="bg-background">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <span className="first-letter:capitalize">
              copyright &copy; 2024 <b>ALGOMART</b> all rights reserved.
            </span>
            <Image src={payment} alt="supported payment methods" />
          </div>
        </Container>
      </div>
    </footer>
  );
}
