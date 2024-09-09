import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Logo() {
  return (
    <div className="h-[50px] w-[150px] relative select-none">
      <Image src={logo} alt="zeris ecommerce store" fill sizes="150px" />
    </div>
  );
}
