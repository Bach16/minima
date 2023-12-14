import Image from "next/image";
import React, { FC } from "react";

interface Props {
  image: string;
  bgColor?: string;
}

const Card: FC<Props> = ({ image, bgColor }) => {
  return (
    <div className={`${bgColor?`h-[22rem] w-[36rem] ${bgColor} justify-center` :"justify-center  h-[100%]" }   flex items-start `}>
      <div className={`${bgColor?`sm:h-[16.5rem] sm:w-[30rem]` :"sm:h-[19rem] sm:w-[34.5rem] aspect-video w-[100%]"}  relative`}>
        <Image src={image} alt="Project Image" fill />
      </div>
    </div>
  );
};

export default Card;
