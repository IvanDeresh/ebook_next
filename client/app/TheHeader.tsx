"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Link from "next/link";
const TheHeader = () => {
  const session = useSession();
  const [click, setClick] = useState<boolean>(false);
  return (
    <div className="fixed max-container top-[10px] w-[100vw] flex justify-around items-center mt-10 ">
      <Link
        className="w-[10%] text-white flex justify-center text-[30px] "
        href="/"
      >
        eBook
      </Link>
      <ul className="max-2xl:hidden w-[45%] flex justify-around">
        <Link className="text-white text-[20px]" href="/">
          Home
        </Link>
        <Link className="text-[20px] text-white" href="/pages/book">
          Books
        </Link>
        <Link className="text-[20px] text-white" href="/pages/about">
          About us
        </Link>
      </ul>
      <div className="max-2xl:hidden flex items-center text-white">
        <Link href="/pages/card">
          <ShoppingCartCheckoutIcon />
        </Link>
      </div>

      <ul className="w-[25%] max-2xl:hidden  flex justify-around">
        {session?.data?.user && (
          <div>
            <Image
              width={40}
              height={40}
              src={
                session?.data?.user?.image ||
                "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
              }
              alt="user"
              onClick={() => {
                window.location.href = "/pages/profile";
              }}
              className="rounded-full cursor-pointer"
            />
          </div>
        )}
        {session?.data?.user ? (
          <button
            className="w-[150px] h-[50px] bg-green-500 rounded-full"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign out
          </button>
        ) : (
          <Link
            className="w-[150px] flex justify-center items-center h-[50px] bg-green-500 rounded-full"
            href="/pages/sign-in"
          >
            Sign in
          </Link>
        )}
      </ul>
      <div className="hidden w-[400px] justify-between max-2xl:flex">
        <div className="flex gap-[30px] justify-center items-center ">
          {session?.data?.user && (
            <div>
              <Image
                width={40}
                height={40}
                src={
                  session?.data?.user?.image ||
                  "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                }
                alt="user"
                onClick={() => {
                  window.location.href = "/pages/profile";
                }}
                className="rounded-full cursor-pointer"
              />
            </div>
          )}
          {session?.data?.user ? (
            <button
              className="w-[150px] h-[50px] bg-green-500 rounded-full"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </button>
          ) : (
            <Link
              className="w-[150px] flex justify-center items-center h-[50px] bg-green-500 rounded-full"
              href="/pages/sign-in"
            >
              Sign in
            </Link>
          )}
        </div>
        <div className="flex items-center text-white">
          <Link href="/pages/card">
            <ShoppingCartCheckoutIcon />
          </Link>
        </div>
        <div
          className="hidden max-2xl:flex"
          onClick={() => {
            setClick((prev) => !prev);
          }}
        >
          <MenuIcon className="text-white  text-[50px] cursor-pointer" />
        </div>
      </div>
      {click === true ? (
        <div className="absolute max-2xl:flex max-2xl:flex-col max-2xl:justify-around hidden text-white top-[120px] right-[100px] w-[400px] h-[500px] border-4 border-white rounded-2xl">
          <ul className="max-2xl:flex max-2xl:flex-col  w-[30%] hidden max-2xl:items-center max-2xl:w-[380px] h-[10vh] max-2xl:justify-around">
            <Link className="text-white text-[20px]" href="/">
              Home
            </Link>
            <Link className="text-[20px] text-white" href="/pages/book">
              Books
            </Link>
            <Link className="text-[20px] text-white" href="/pages/about">
              About us
            </Link>
          </ul>
          <ul className="w-full max-2xl:flex  hidden justify-around">
            <Link
              href="/pages/sign-in"
              className="w-[150px] text-white bg-green-500 h-[50px] rounded-full flex justify-center items-center"
            >
              Sign in
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default TheHeader;
