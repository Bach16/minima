import { FC } from "react";
import { Card, Title } from ".";
import { CAText } from "..";

interface Props {
    image:string
    index:string
    title:string
    justify?:string
}

const WideProjects: FC<Props> = ({image,index,title,justify}) => {
  return (
    <div className="h-[20rem] w-[100%] flex justify-center items-center mb-[20rem] ">
      <div className={` ${justify=="rigth"?"flex-row-reverse":""} h-[100%] w-[90%] flex justify-center`}>
        <Card image={image} />
        <div className="w-[15%]" />
        <div className={`${justify=="rigth"?"items-end text-right":""} flex w-[45%] flex-col justify-between h-[60%]`}>
          <Title index={index} title={title} />
          <CAText />
        </div>
      </div>
    </div>
  );
};

export default WideProjects;
