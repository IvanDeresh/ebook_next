"use client";
import React from "react";
import FormSignin from "@/app/components/FormSignIn";
import GoogleButton from "@/app/components/GoogleButton";
const page = () => {
  return (
    <div className="flex justify-center text-black items-center h-screen max-container">
      <div className="border-2 w-[500px] h-[600px] rounded-xl shadow-2xl shadow-white  flex flex-col gap-[50px] justify-center items-center">
        <FormSignin />
        <GoogleButton />
      </div>
    </div>
  );
};

export default page;
