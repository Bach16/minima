import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex h-[5rem] justify-center">
      <div className="flex justify-between items-center w-[90%] text-[0.9rem] sm:text-[1rem]">
        <Link href={"/"}>
          <Image
            src="/Artboard38.webp"
            width={120.7734375}
            height={29.1375}
            alt="Minima Logo"
          />
        </Link>
        <ul className=" hidden sm:flex font-light w-[25%] justify-between">
          <Link href={"/projects"}>
            <li>Projects</li>
          </Link>
          <li>Contact</li>
          <Link href={"/about"}>
            <li>About us</li>
          </Link>
        </ul>
        <button className="flex sm:hidden">
          <p>Contact</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
