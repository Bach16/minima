import React from "react";
import { CAButton, CAText } from ".";

const TextCAContainer = () => {
  return (
      <div className="flex flex-col justify-between h-[12rem]  ">
        <CAText/>
        <div className="w-[15rem]">
          <CAButton content="Contactanos" />
        </div>
      </div>
  );
};

export default TextCAContainer;
