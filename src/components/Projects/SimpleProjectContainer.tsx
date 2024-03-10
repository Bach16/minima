import React, { FC } from "react";
import { Card, Title } from ".";

interface Props {
  image: string;
  bgColor: string;
  index: string;
  title: string;
  description: string;
}

const SimpleProjectContainer: FC<Props> = ({
  image,
  bgColor,
  index,
  title,
  description,
}) => {
  return (
    <div className="h-[100%] w-[100%] flex flex-col justify-between items-center">
      <Card image={image} bgColor={bgColor} />
      <div className="flex w-[82%] justify-start">
        <Title index={index} title={title} description={description} />
      </div>
    </div>
  );
};

export default SimpleProjectContainer;
