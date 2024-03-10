import React, { FC } from "react";

interface Props {
    text:string
}

const ButtonFooter: FC<Props> = ({text}) => {
  return (
    <div className="bg-[#ffffff] border-[1px] text-[1.1rem] w-[100%] h-[40%] sm:h-[100%] sm:w-[40%] border-[#000000] border-solid flex items-center justify-center">
        <p className="font-semibold text-[#000000]">
            {text}
        </p>
    </div>
  )
}

export default ButtonFooter