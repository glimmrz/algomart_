"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import { postData } from "@/utils/apiCalls";
import { errorToast, successToast } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddCoupon({ users }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      const res = await postData("coupons", formData);

      if (res.error) {
        return errorToast(res.response.msg);
      }
      successToast(res.response.msg);
      router.push("/dashboard/coupons");
    } catch (err) {
      errorToast(err.message);
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form action="" className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Select
            label="select user"
            name="user"
            options={users}
            keyName="firstName"
            required
          />
          <Input
            label="enter code"
            placeholder="example24"
            name="code"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input
            label="comission (default is 10%)"
            placeholder="e.g. 10"
            name="comission"
          />
          <Input
            label="user discount (default is 10%)"
            placeholder="e.g. 10"
            name="discount"
          />
        </div>
        <Button
          type="submit"
          label="add code"
          icon="apply"
          loading={isLoading}
        />
      </form>
    </div>
  );
}
