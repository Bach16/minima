import React, { FC } from "react";

interface Props {
  name: string;
  Icon: any;
  nickname: string;
}

const SocialItems: FC<Props> = ({ name, Icon, nickname }) => {
  return (
    <div className=" flex justify-between items-center border-solid border-black border-t h-[5rem] w-[90%] sm:w-[16.5%]">
      <div className="text-[#000000]">
        <p className=" font-semibold text-[1.2rem]">{name}</p>
        <p className=" font-light">{nickname}</p>
      </div>
      <div>
        <div className="flex justify-center items-center  h-[3rem] w-[3rem] bg-[#000000] rounded-[50%] text-[#ffffff]" >
          <Icon className="h-[1.5rem] w-[1.5rem]" />
         </div>
      </div>
    </div>
  );
};

export default SocialItems;
