import React from "react";
import { ButtonFooter, SocialItems } from ".";
import { Anton } from "next/font/google";
import { FiInstagram } from "react-icons/fi";
import { FaBehance } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const FooterContainer = () => {
  return (
    <footer className="min-h-screen bg-[#ffffff]">
      <div className="h-screen flex flex-col justify-evenly">
        <div
          className={`flex flex-col justify-center items-center font-bold leading-[7rem] text-[7rem] ${anton.className} text-[#000000]`}
        >
          <p>LET{"'"}S TALK</p>
          <p>ABOUT THE NEXT</p>
          <p>BIG THING</p>
        </div>
        <div className="flex w-[100%] h-[7rem] justify-evenly ">
          <ButtonFooter text="Write a message" />
          <ButtonFooter text="Discuss Project" />
        </div>
      </div>
      <div className="flex h-[40vh] w-[100%]">
        <div className="flex w-[100%] h-[3.5rem] justify-evenly">
          <SocialItems name="Behance" Icon={FaBehance} nickname="@minima_studio"/>
          <SocialItems name="Instagram" Icon={FiInstagram} nickname="@minima_studio"/>
          <SocialItems name="Linkedin" Icon={FaLinkedinIn} nickname="@minima_studio"/>
          <SocialItems name="Dribbble" Icon={FaDribbble} nickname="@minima_studio"/>
        </div>
      </div>
      <div className="w-[100%] justify-center h-[4.5rem] flex">
      <div className="w-[87%] flex">
        <p className="text-[#000000] font-light text-[0.9rem] ">©2023 Minima Studio, All Rights Reserved</p>
      </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
