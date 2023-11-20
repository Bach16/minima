import { FC } from "react";
import { BsArrowDownRight } from "react-icons/bs";


interface Props {
  content:string
}

const CAButton:FC<Props> = (props) => {
  const {content} = props

  return (
    <button className=" relative flex items-center justify-between w-[100%] border-white border-solid border-[1px] h-[2.5rem] px-3">
      {content} <BsArrowDownRight />
    </button>
  );
};

export default CAButton;
