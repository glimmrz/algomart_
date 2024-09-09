"use client";
import { useState } from "react";
import AddressCard from "./address-card";
import Button from "@/components/button";
import UserDashboardWrapper from "@/components/wrappers/user-dashboard-wrapper";
import AddAddressModal from "@/components/modals/add-address-modal";

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AddAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <UserDashboardWrapper title="address book">
        <div>
          <Button
            label="add new address"
            variant="primary"
            icon="plus"
            onClick={() => setIsModalOpen(true)}
          />
          <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
          </div>
        </div>
      </UserDashboardWrapper>
    </>
  );
}
