import Modal from "./modal";
import Button from "@/components/button";
import Heading from "@/components/heading";
import { deleteData } from "@/utils/apiCalls";
import { errorToast, successToast } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteModal({
  isOpen,
  onClose,
  itemName,
  _id,
  requestUrl,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    document.body.style.overflowY = "auto";
    onClose();
  };

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      const res = await deleteData(requestUrl, { _id: _id });

      if (res.error) {
        return errorToast(res.response.msg);
      }

      successToast(res.response.msg);
      router.refresh();
    } catch (err) {
      errorToast("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  const modalBody = (
    <div className="pt-2 pb-2">
      <Heading
        title_md={`are you sure you want to delete "${itemName}"?`}
        customStyles="text-center"
      />
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Button
          label="proceed"
          icon="delete"
          variant="destructive"
          onClick={handleDelete}
          disabled={isLoading}
          loading={isLoading}
        />
        <Button label="go back" onClick={handleClose} disabled={isLoading} />
      </div>
    </div>
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} modalBody={modalBody} />
    </>
  );
}
