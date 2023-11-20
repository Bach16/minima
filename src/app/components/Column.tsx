import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface Props {
    imgs: string[],
    y:any,
    top:any
}

const Column:FC<Props> = ( props ) => {

    const {y,top} = props
  return (
    <motion.div style={{y,"top":top}} className="w-[25%] h-[200%] flex flex-col gap-[2vw] min-w-[150px] sm:min-w-[250px] relative">
      {props.imgs.map((src: string, index: number) => {
        return (
          <div key={index} className="w-[100%] max-h-[350px] h-[150%] relative rounded-lg overflow-hidden">
            <Image className="object-cover"  src={src} fill alt="projects img" />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
