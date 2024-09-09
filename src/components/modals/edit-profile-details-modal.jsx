"use client";
import Modal from "./modal";
import Input from "@/components/input";
import Button from "@/components/button";

export default function EditProfileDetailsModal({ isOpen, onClose }) {
  const modalBody = (
    <form>
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-2">
        <Input placeholder="john186" label="username" />
        <Input type="date" label="birthdate" />
        <Input label="Old passowrd" placeholder="********" type="password" />
        <Input label="new password" placeholder="********" type="password" />
        <Input label="phone number" placeholder="+8801873229876" type="tel" />
      </div>
      <Button
        label="update information"
        variant="primary"
        icon="save"
        type="submit"
      />
    </form>
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalBody={modalBody}
        modalHeader="update profile information"
        modalIcon="close"
      />
    </>
  );
}
