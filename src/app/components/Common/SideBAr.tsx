import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-[#11112B] text-white w-full rounded-xl  md:w-64 flex flex-col" style={{height: "calc(100% - 4.5rem)"}}>
      {/* Menu Options */}
      <ul className="py-2">
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md ">
          <Link href="/">
            <span>Affiliate</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Blog</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Blog</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Blog</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Responsibl Gambling</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Help & Support</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
