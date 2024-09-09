"use client";
import { useState } from "react";
import Icon from "@/components/icon";
import DataCell from "@/components/data-cell";
import Button from "@/components/button";
import TotalCard from "@/components/total-card";
import EditProfileDetailsModal from "@/components/modals/edit-profile-details-modal";
import Heading from "@/components/heading";
import Text from "@/components/text";
import UserDashboardWrapper from "../wrappers/user-dashboard-wrapper";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <UserDashboardWrapper>
        <div>
          <div className="flex justify-between items-center mb-4 md:mb-1">
            <Heading title="jane doe" />
            <Button
              label="edit details"
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              icon="edit"
            />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
            <div className="flex items-center gap-2">
              <Icon icon="location" size={20} />
              <Text>Dhaka, Bangladesh</Text>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="email" size={20} />
              <Text>jane@email.com</Text>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="verified" size={20} />
              <Text>Member since 28 July, 2023</Text>
            </div>
          </div>

          <div className="flex flex-col-reverse mt-4 mb-4 md:grid md:grid-cols-2">
            <div className="pt-2 pb-2 pl-0 pr-0 flex flex-col gap-x-0 gap-y-4 md:gap-y-8">
              <DataCell dataName="gender" dataValue="female" />
              <DataCell dataName="birthdate" dataValue="3 june, 1999" />
              <DataCell dataName="phone number" dataValue="+88-018-73228724" />
              <DataCell
                dataName="address"
                dataValue="549 Sulphur Springs Road, Downers, BD"
              />
            </div>
            <div className="pt-2 pb-2 pl-0 pr-0 flex flex-col gap-x-0 gap-y-4 md:gap-y-8">
              <DataCell dataName="username" dataValue="janedoe99" />
              <DataCell dataName="password" dataValue="*******" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2">
          <TotalCard />
          <TotalCard />
          <TotalCard />
          <TotalCard />
        </div>
      </UserDashboardWrapper>
      <EditProfileDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
