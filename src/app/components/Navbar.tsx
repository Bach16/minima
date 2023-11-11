import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex h-[5rem] justify-center">
      <div className="flex justify-between items-center w-[90%]">
        <Image
          src="/Artboard38.webp"
          width={154.6}
          height={37.3}
          alt="Minima Logo"
        />
        <div className="flex w-[25%] justify-between">
          <p>Proyectos</p>
          <p>Contacto</p>
          <p>Nosotros</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
