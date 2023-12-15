import React, { useRef } from "react";
import { ButtonFooter, SocialItems } from ".";
import { Anton } from "next/font/google";
import { FiInstagram } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import useDimension from "@/assets/useDimension";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const FooterContainer = () => {
  const cont = useRef(null);
  const { height,width } = useDimension();

  console.log(height);
  

  const { scrollYProgress } = useScroll({
    target: cont,
    offset: ["start end", "end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * -1.5]);

  return (
    <footer ref={cont} className="min-h-[50rem] bg-[#ffffff]  overflow-hidden mt-[10rem]">
      <div className="flex justify-center  w-[100%] absolute max-h-[50rem] overflow-hidden">
        <div className="flex justify-center  w-[100%] ">
          <motion.div
            style={{ y,  top:`-${height/2}px` }}
            className={`h-[170vh] sm:h-[80rem] w-[100%] bg-[#000000] relative z-0 overflow-hidden`}
          />
        </div>
      </div>
      <div className="h-[20rem]  ">
        <div
          className={`flex flex-col  items-center font-bold sm:leading-[7rem] leading-[3rem] text-[3rem] sm:text-[7rem] ${anton.className} text-[#fff] relative top-[6.65rem] z-40`}
        >
{/*           <p>LET{"'"}S TALK</p>           
 */}          <p>READY FOR A</p>
          <p>DIGITAL LEAP?</p>
        </div>
      </div>
      <div className="h-[35rem] sm:h-[60rem] flex flex-col justify-evenly items-center relative">
        <div
          className={`flex flex-col justify-center items-center font-bold sm:leading-[7rem] leading-[3rem] text-[3rem] sm:text-[7rem] ${anton.className} text-[#000000]`}
        >
          <p>LET{"'"}S TALK</p>
          <p>ABOUT THE NEXT</p>
          <p>BIG THING</p>
        </div>
        <div className="flex w-[90%] sm:w-[100%] flex-col sm:flex-row h-[10rem] sm:h-[7rem] justify-evenly ">
          <ButtonFooter text="Write a message" />
          <ButtonFooter text="Discuss Project" />
        </div>
      </div>
      <div className="flex h-[25rem] sm:h-[10rem] w-[100%]">
        <div className="flex flex-col sm:flex-row w-[100%] sm:h-[3.5rem] sm:justify-evenly justify-between items-center">
          <SocialItems
            name="Behance"
            Icon={FaBehance}
            nickname="@minima_studio"
          />
          <SocialItems
            name="Instagram"
            Icon={FiInstagram}
            nickname="@minima_studio"
          />
          <SocialItems
            name="Linkedin"
            Icon={FaLinkedinIn}
            nickname="@minima_studio"
          />
          <SocialItems
            name="Dribbble"
            Icon={FaDribbble}
            nickname="@minima_studio"
          />
        </div>
      </div>
      <div className="w-[100%] justify-center h-[7rem] sm:h-[4rem] items-center flex">
        <div className="sm:w-[87%] w-[90%] flex">
          <p className="text-[#000000] font-light text-[0.9rem] ">
            ©2023 Minima Studio, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
