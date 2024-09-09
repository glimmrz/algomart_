"use client";
import Button from "@/components/button";
import Icon from "@/components/icon";
import DeleteModal from "@/components/modals/delete-modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TableRow({ rowData, columns, requestUrl, itemName }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getValue = (row, key) => {
    return key.split(".").reduce((obj, keyPart) => obj && obj[keyPart], row);
  };

  return (
    <tr className="border-b border-shade last-of-type:border-0 hover:bg-accent transition-colors duration-300">
      {columns?.map((column, index) => {
        return (
          <td className="p-3 text-sm max-w-80 w-fit" key={index}>
            {getValue(rowData, column.key)}
          </td>
        );
      })}
      <td className="p-3 text-sm w-32">
        <div className="flex items-center justify-end gap-4">
          {/* <Link
            href={`${pathname}/${rowData._id}`}
            className="hover:text-mute transition-colors duration-300"
          >
            <Icon icon="eye" />
          </Link> */}
          <Link
            href={`${pathname}/edit/${rowData._id}`}
            className="hover:text-mute transition-colors duration-300"
          >
            <Icon icon="edit" />
          </Link>
          <Button
            onClick={() => setIsOpen(true)}
            icon="delete"
            variant="ghost"
            customStyles="!shadow-none hover:!shadow-none hover:!border-transparent !text-destructive !p-0"
          />
          <DeleteModal
            itemName={rowData[itemName]}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            _id={rowData._id}
            requestUrl={requestUrl}
          />
        </div>
      </td>
    </tr>
  );
}
