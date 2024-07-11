import Button from "@/components/Button";
import InputField from "@/components/InputField";
import InputPassword from "@/components/InputPassword";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <form>
        <InputField type="text" placeholder="Name" />
        <InputPassword type="password" placeholder="Password" />

        <p className="text-sm font-medium  text-indigo-700 py-2 cursor-pointer ">
          Forgot Password
        </p>
        <Button title={"login"} />

        <p className="font-normal text-sm">
          {" "}
          Don’t have an account?
          <Link
            href={"/onbord/sign-up"}
            className="font-medium text-indigo-700 "
          >
            {" "}
            Sign-up
          </Link>
        </p>
      </form>
    </div>
  );
}
