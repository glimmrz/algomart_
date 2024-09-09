"use client";
import { memo, useState } from "react";
import DataCell from "@/components/data-cell";
import Button from "@/components/button";
import Container from "@/components/wrappers/container";
import RemoveAddressModal from "@/components/modals/remove-address-modal";
import EditAddressModal from "@/components/modals/edit-address-modal";

function AddressCard() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  return (
    <>
      <EditAddressModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <RemoveAddressModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
      />
      <address className="rounded-md shadow-rg transition-shadow duration-300 hover:shadow-active">
        <Container>
          <h6 className="text-base font-bold">Jenny Swanson</h6>
          <div className="mt-3 mb-3 ml-0 mr-0 flex flex-col gap-4">
            <DataCell
              dataName="address"
              dataValue="8424 James Lane South San Francisco, CA 94080"
            />
            <DataCell dataName="post code" dataValue="1216" />
            <DataCell dataName="phone number" dataValue="+880-1873-228724" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              label="edit"
              onClick={() => setIsEditModalOpen(true)}
              icon="edit"
            />
            <Button
              icon="delete"
              label="remove"
              variant="destructive"
              onClick={() => setIsRemoveModalOpen(true)}
            />
          </div>
        </Container>
      </address>
    </>
  );
}

export default memo(AddressCard);
