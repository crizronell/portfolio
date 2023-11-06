"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NavBarLinks } from "./NavBarLinks";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="sticky top-0 ">
      <nav className=" flex items-center justify-between w-full min-h-[16] shadow-md p-4 ">
        <div className=" text-2xl animate-bounce font-mono">
          <Link href="/">RCV</Link>
        </div>
        <div className=" hidden md:block ">
          <ul className="flex">
            {NavBarLinks.map((item) => (
              <li
                key={item.id}
                className="w-[10rem] flex justify-around text-lg font-serif ">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" cursor-pointer z-20 md:hidden" onClick={onClick}>
          {!toggle ? <CiMenuFries size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </nav>
      <div
        className={`bg-bg w-full fixed top-0 text-xl z-[999999999]" font-mono ${
          toggle
            ? " translate-y-100 ease-in duration-300"
            : "-translate-y-full ease-in-out duration-300"
        }`}>
        <ul className="flex flex-col justify-around items-center h-screen">
          {NavBarLinks.map((item) => (
            <li key={item.id} onClick={onClick}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
