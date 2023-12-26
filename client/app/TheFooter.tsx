import React from "react";
import Link from "next/link";
const TheFooter = () => {
  return (
    <div className="text-white  max-container max-xl:block h-[500px] flex  justify-around items-center mt-10 ">
      <div className=" mx-[100px] flex gap-[100px] flex-wrap">
        <div>
          <h3 className="text-[30px]">Our social media</h3>
          <div className="w-[200px] bg-white h-[3px] "></div>
          <ul className="flex flex-col justify-center items-start leading-8 text-[20px] mt-[40px]">
            <Link href="/">Instagram</Link>
            <Link href="/">Telegram</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Facebook</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-[30px]">Our products</h3>
          <div className="w-[200px] bg-white h-[3px] "></div>
          <ul className="flex flex-col justify-center items-start leading-8 text-[20px] mt-[40px]">
            <Link href="/">Solomon hole</Link>
            <Link href="/">Kobzar</Link>
            <Link href="/">Some book</Link>
            <Link href="/">Some book2</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-[30px]">Our partners</h3>
          <div className="w-[200px] bg-white h-[3px] "></div>
          <ul className="flex flex-col justify-center items-start leading-8 text-[20px] mt-[40px]">
            <Link href="/">Empic</Link>
            <Link href="/">Amazon</Link>
            <Link href="/">FamiliLib</Link>
            <Link href="/">Something</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
