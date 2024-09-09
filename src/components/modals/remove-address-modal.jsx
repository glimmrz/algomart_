import Modal from "./modal";
import Button from "@/components/button";
import Heading from "@/components/heading";

export default function RemoveAddressModal({ isOpen, onClose }) {
  const handleClose = () => {
    document.body.style.overflowY = "auto";
    onClose();
  };

  const modalBody = (
    <div className="pt-2 pb-2">
      <Heading
        title_md="are you sure you want to remove this address?"
        customStyles="text-center"
      />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Button label="proceed" variant="destructive" onClick={handleClose} />
        <Button label="go back" onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} modalBody={modalBody} />
    </>
  );
}
