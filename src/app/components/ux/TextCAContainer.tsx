import React from "react";
import { CAButton, CAText } from ".";

const TextCAContainer = () => {
  return (
      <div className="flex flex-col justify-between h-[11rem]  ">
        <CAText/>
        <div className="w-[7.5rem]">
          <CAButton content="Let's talk" />
        </div>
      </div>
  );
};

export default TextCAContainer;
