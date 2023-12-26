"use client";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import { signOut } from "next-auth/react";
export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div className="max-container items-center flex  flex-col ml-[200px] mt-[100px]">
      <div className="flex gap-[150px] flex-row-reverse">
        <div className="flex flex-col gap-[50px] justify-center">
          <h1 className="border-2 w-[200px] h-[50px] flex justify-center items-center rounded-2xl">
            {session?.user?.name}
          </h1>
          <div className="border-2 w-[200px] h-[50px] flex justify-center items-center rounded-2xl">
            {session?.user?.email}
          </div>
        </div>
        <div>
          {session?.user?.image && (
            <img
              className="rounded-full"
              width={200}
              src={
                session?.user?.image ||
                "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
              }
              alt="image"
            />
          )}
        </div>
      </div>
    </div>
  );
}
