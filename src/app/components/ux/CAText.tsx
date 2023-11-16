import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

const CAText = () => {
  return (
    <div className="flex flex-col justify-between h-[12rem] absolute right-[4rem] bottom-[10rem] ">
      <p className="w-[26rem] font-light">
        Minima es la agencia que te cautiva, te emociona y te apasiona, es tu
        mundo Telemundo, un mundo de emoción es Telemundo te hace reír te
        apasiona te emociona, es tu mundo Telemundo un mundo de emoción es
        Telemundo
      </p>
      <button className="flex items-center justify-between w-[15rem] border-white border-solid border-[1px] h-[2.5rem] px-3">
        Mira nuestros proyectos <BsArrowDownRight />
      </button>
    </div>
  );
};

export default CAText;
