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
    <motion.div style={{y,"top":top}} className="w-[25%] h-[100%] flex flex-col gap-[2vw] min-w-[250px] relative">
      {props.imgs.map((src: string, index: number) => {
        return (
          <div className="w-[100%] h-[100%] relative rounded-lg overflow-hidden">
            <Image className="object-cover" key={index} src={src} fill alt="projects img" />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
