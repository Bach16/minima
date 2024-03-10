import { FC } from "react";
import { BsArrowDownRight } from "react-icons/bs";

interface Props {
  content: string;
}

const CAButton: FC<Props> = (props) => {
  const { content } = props;

  return (
    <button className=" relative flex items-center justify-between w-auto px-[1rem] border-white border-solid border-[1px] h-[2.5rem]">
      <p className="mr-[0.8rem]">{content}</p>
      <BsArrowDownRight />
    </button>
  );
};

export default CAButton;
