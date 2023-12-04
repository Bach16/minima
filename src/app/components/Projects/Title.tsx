import React, { FC } from "react";

interface Props {
  index: string;
  title: string;
  description?: string;
}

const Title: FC<Props> = ({ index, title, description }) => {
  return (
    <div>
      <div className="flex text-[1.5rem] font-semibold  " >
        <p className="mr-[1rem]">{index}.</p>
        <p>{title}</p>
      </div>
      {description ? (
        <div className=" text-[1rem] font-extralight  pl-[3.1rem] ">
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Title;
