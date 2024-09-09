"use client";
import Link from "next/link";
import Input from "@/components/input";
import Heading from "@/components/heading";
import Button from "../button";
import { postData } from "@/utils/apiCalls";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Handle register form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const rawData = new FormData(e.target);
    const formData = Object.fromEntries(rawData.entries());

    try {
      const res = await postData("register", formData);

      if (res.error) {
        return toast.error(res.response.msg);
      }

      toast.success(res.response.msg);
      router.push("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading title="Create an account." customStyles="text-center" />
      <form className="mt-8 flex flex-col gap-4" onSubmit={handleRegister}>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="John"
            type="text"
            label="First Name"
            ariaLabel="enter your First Name"
            required
            name="firstName"
          />
          <Input
            placeholder="Doe"
            type="text"
            label="last name"
            ariaLabel="enter your last name"
            required
            name="lastName"
          />
        </div>
        <Input
          placeholder="example@email.com"
          type="email"
          label="Email address"
          ariaLabel="enter your email address"
          required
          name="email"
        />
        <Input
          placeholder="********"
          type="password"
          label="Password"
          ariaLabel="enter your password"
          required
          name="password"
          minLength={8}
        />
        <Input
          placeholder="********"
          type="password"
          label="confirm Password"
          ariaLabel="confirm your password"
          required
          name="confirmPassword"
          minLength={8}
        />
        <Button
          label="register"
          icon="register"
          ariaLabel="click to create account."
          type="submit"
          variant="primary"
          loading={isLoading}
        />
      </form>
      <span className="block text-mute mt-2">
        Already have an account?
        <Link href="/login" className="text-font font-bold hover:underline">
          {" "}
          Login.
        </Link>
      </span>
    </>
  );
}
