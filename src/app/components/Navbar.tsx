import Image from "next/image";
import React, { FC } from "react";
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className="flex h-[5rem] justify-center">
      <div className="flex justify-between items-center w-[90%]">
        <Image
          src="/Artboard38.webp"
          width={128.825}
          height={31.08}
          alt="Minima Logo"
        />
        <div className=" hidden sm:flex font-light w-[25%] justify-between">
          <p>Proyectos</p>
          <p>Contacto</p>
          <p>Nosotros</p>
        </div>
        <div className="flex sm:hidden">
        <IoIosMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
