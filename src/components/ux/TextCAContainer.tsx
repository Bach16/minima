import React from "react";
import { CAButton, CAText } from ".";
import Link from "next/link";

const TextCAContainer = () => {
  return (
      <div className="flex flex-col justify-between h-[12rem]  ">
        <CAText/>
        <div className="w-[15rem]">
          <Link href={'https://wa.link/o1buwq'}>
            <CAButton content="Contactanos" />
          </Link>
        </div>
      </div>
  );
};

export default TextCAContainer;
