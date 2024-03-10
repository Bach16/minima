import { FC } from "react";
import { Card, Title } from ".";
import { CAText } from "..";

interface Props {
    image:string
    index:string
    title:string
    justify?:string
    mb?:boolean
}

const WideProjects: FC<Props> = ({image,index,title,justify,mb}) => {
  return (
    <div className={`h-[20rem] w-[100%] flex justify-center items-center  ${mb==true ? "mb-[7rem] sm:mb-[20rem]":"" } `}>
      <div className={` ${justify=="rigth"?"sm:flex-row-reverse":"sm:flex-row"} h-[100%] w-[90%] flex justify-center flex-col`}>
        <Card image={image} />
        <div className="w-[15%]" />
        <div className={`${justify=="rigth"?"sm:items-end sm:text-right":""} flex sm:w-[45%] flex-col justify-between h-[50%]`}>
          <Title index={index} title={title} /> 
          <CAText />
        </div>
      </div>
    </div>
  );
};

export default WideProjects;
