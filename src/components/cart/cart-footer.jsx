"use client";
import { useRouter } from "next/navigation";
import { useCartSidebar } from "@/hooks/modal-controllers";
import Button from "../button";

export default function CartFooter({ total }) {
  const router = useRouter();
  const { onClose } = useCartSidebar();

  const handleClick = () => {
    if (document) {
      document.body.style.overflowY = "auto";
      onClose();
      router.push("/checkout");
    }
  };

  return (
    <>
      <table className="w-full border-collapse">
        <tbody>
          <tr className="capitalize border-y-[14px] border-transparent [&>*]:last:text-end">
            <td>Sub total</td>
            <td className="text-end font-bold">৳{(total / 100).toFixed(2)}</td>
          </tr>
          <tr className="capitalize border-y-[14px] border-transparent">
            <td>total</td>
            <td className="text-end font-bold">৳{(total / 100).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <Button
        label="proceed to checkout"
        ariaLabel="proceed to checkout"
        variant="primary"
        icon="arrowRight"
        onClick={handleClick}
        customStyles="w-full mt-2"
      />
    </>
  );
}
