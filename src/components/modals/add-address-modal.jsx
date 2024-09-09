import Input from "@/components/input";
import Button from "@/components/button";
import Select from "@/components/select";
import Modal from "./modal";

export default function AddAddressModal({ isOpen, onClose }) {
  const modalBody = (
    <form>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <Input
          label="street addreess"
          placeholder="18/3, Marine drive, NY"
          required
        />
        <Input label="state/county" placeholder="NY" required />

        <Input label="post code" placeholder="1216" required type="number" />
        <Select
          label="country"
          options={[{ label: "select country" }]}
          required
        />

        <Input
          label="phone number"
          placeholder="+8801873229876"
          required
          type="tel"
        />
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
        modalHeader="add new address"
        modalIcon="close"
        modalBody={modalBody}
      />
    </>
  );
}
