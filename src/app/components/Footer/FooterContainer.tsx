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
  const { height } = useDimension();

  const { scrollYProgress } = useScroll({
    target: cont,
    offset: ["start end", "end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * -1]);

  return (
    <footer ref={cont} className="min-h-screen bg-[#ffffff]  overflow-hidden">
      <div className="flex justify-center  w-[100%] absolute max-h-[71.688rem] overflow-hidden">
        <div className="flex justify-center  w-[100%] ">
          <motion.div
            style={{ y, top: "-60%" }}
            className="h-[75rem] sm:h-[80rem] w-[100%] bg-[#000000] relative  z-40"
          />
        </div>
      </div>
      <div className="h-[5rem] bg-[#ffffff]" />

      <div className="h-[35rem] sm:h-screen flex flex-col justify-evenly items-center ">
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
      <div className="flex h-[25rem] sm:h-[20rem] w-[100%]">
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
      <div className="w-[100%] justify-center h-[7rem] sm:h-[4.5rem] items-center flex">
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
