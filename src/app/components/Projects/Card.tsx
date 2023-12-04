import Image from "next/image";
import React, { FC } from "react";

interface Props {
  image: string;
  bgColor?: string;
}

const Card: FC<Props> = ({ image, bgColor }) => {
  return (
    <div className={`${bgColor?`h-[22rem] w-[36rem] ${bgColor}` :""}   flex justify-center items-center `}>
      <div className={`${bgColor?`h-[16.5rem] w-[30rem]` :"h-[19rem] w-[34.5rem]"}  relative`}>
        <Image src={image} alt="Project Image" fill />
      </div>
    </div>
  );
};

export default Card;
