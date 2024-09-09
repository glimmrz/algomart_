"use client";
import Link from "next/link";
import Input from "@/components/input";
import Heading from "@/components/heading";
import Button from "../button";
import toast from "react-hot-toast";
import { useState } from "react";
import { postData } from "@/utils/apiCalls";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await postData("login", data);
      if (res.error) {
        return toast.error(res.response.msg);
      }

      await setCookie(
        "session",
        res.response.session_token,
        res.response.expiryTime
      );
      toast.success(res.response.msg);
      router.refresh("/");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Heading title="Welcome back!" customStyles="text-center" />
      <form className="mt-8 flex flex-col gap-4" onSubmit={handleLoginForm}>
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
          label="Passwords"
          ariaLabel="enter your password"
          required
          name="password"
        />
        <Button
          label="sign in"
          ariaLabel="click to sign in."
          icon="login"
          type="submit"
          variant="primary"
          loading={isLoading}
        />
      </form>
      <span className="block text-mute mt-2">
        Don&apos;t have an account?
        <Link
          href="/register"
          className="text-font font-bold hover:underline decoration-1"
        >
          {" "}
          Sign up.
        </Link>
      </span>
    </>
  );
}
