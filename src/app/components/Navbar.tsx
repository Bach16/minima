import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex h-[5rem] justify-center">
      <div className="flex justify-between items-center w-[90%]">
        <Link href={"/"}>
          <Image
            src="/Artboard38.webp"
            width={128.825}
            height={31.08}
            alt="Minima Logo"
          />
        </Link>
        <ul className=" hidden sm:flex font-light w-[25%] justify-between">
          <Link href={"/projects"}>
            <li>Proyectos</li>
          </Link>
          <li>Contacto</li>
          <li>Nosotros</li>
        </ul>
        <button className="flex sm:hidden">
          <IoIosMenu className="w-[2rem] h-[2rem]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
