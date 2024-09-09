import Select from "@/components/select";
import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "./modal";

export default function EditAddressModal({ isOpen, onClose }) {
  const modalBody = (
    <form>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <Input label="street addreess" placeholder="18/3, Marine drive, NY" />
        <Input label="state/county" placeholder="Ohio" />

        <Input label="post code" placeholder="1216" type="number" />
        <Select label="country" options={[{ label: "select country" }]} />

        <Input label="phone number" placeholder="+8801873229876" type="tel" />
      </div>
      <Button
        variant="primary"
        icon="save"
        label="save address"
        type="submit"
      />
    </form>
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalHeader="edit address"
        modalIcon="close"
        modalBody={modalBody}
      />
    </>
  );
}
