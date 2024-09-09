"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { postData } from "@/utils/apiCalls";
import { errorToast, successToast } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      const res = await postData("categories", formData);
      if (res.error) {
        return errorToast(res.response.msg);
      }

      successToast(res.response.msg);
      router.push("/dashboard/categories");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background p-2 rounded-md">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input
            label="category name"
            placeholder="e.g. bags"
            name="label"
            required
          />
          <Input
            label="category slug"
            placeholder="e.g. jute-bags"
            name="slug"
            required
          />
          <Input
            label="category icon [ choose from lucide.dev/icons ]"
            placeholder="e.g. briefcase"
            name="icon"
            required
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
