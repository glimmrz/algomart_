"use client";
import Input from "@/components/input";
import Editor from "../editor";
import Button from "@/components/button";
import { useState } from "react";
import { postData } from "@/utils/apiCalls";
import { errorToast, successToast } from "@/utils/helpers";
import toast from "react-hot-toast";

export default function AddExpense() {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      const res = await postData("expenses", {
        ...formData,
        details: description,
      });
      if (res.error) {
        return toast.error(res.response.msg);
      }
      successToast(res.response.msg);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background p-2 rounded-md">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="title"
          placeholder="e.g. sim card"
          required
          name="title"
        />
        <div className="flex gap-2">
          <Input
            label="date"
            placeholder="select date"
            type="date"
            required
            name="date"
          />
          <Input
            label="amount"
            placeholder="e.g. 999"
            type="number"
            min={0}
            required
            name="amount"
          />
        </div>
        <Editor
          content={description}
          setContent={setDescription}
          label="details"
          required
          placeholder="details of expenses"
        />
        <Button type="submit" label="save" icon="apply" loading={isLoading} />
      </form>
    </div>
  );
}
