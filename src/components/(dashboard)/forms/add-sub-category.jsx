"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import { postData } from "@/utils/apiCalls";
import { errorToast, successToast } from "@/utils/helpers";
import { useState } from "react";

export default function AddSubCategory({ subCategories }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      const res = await postData("categories/sub-categories", formData);

      if (res.error) {
        return errorToast(res.response.msg);
      }

      successToast(res.response.msg);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background p-2 rounded-md">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-2 gap-2">
          <Select
            label="select category"
            required
            name="category_name"
            options={subCategories}
            keyName="label"
            keyValue="_id"
          />
          <Input
            label="sub-category name"
            placeholder="e.g. - fruit"
            required
            name="name"
          />
        </div>
        <Button
          label="save"
          icon="apply"
          type="submit"
          customStyles="!w-fit"
          loading={isLoading}
        />
      </form>
    </div>
  );
}
