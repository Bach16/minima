import React, { useRef } from "react";
import { ButtonFooter, SocialItems } from ".";
import { Anton } from "next/font/google";
import { FiInstagram, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import useDimension from "@/assets/useDimension";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IconType } from 'react-icons';

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

interface ContactItemProps {
  Icon: IconType;
  text: string;
}

// Define ContactItem component with types
const ContactItem: React.FC<ContactItemProps> = ({ Icon, text }) => {
  return (
    <div className="flex items-center gap-2 text-black">
      <Icon size={20} />
      <span className="text-sm font-light">{text}</span>
    </div>
  );
};

const FooterContainer: React.FC = () => {
  const t = useTranslations();
  const cont = useRef<HTMLElement>(null);
  const { height } = useDimension();

  const { scrollYProgress } = useScroll({
    target: cont,
    offset: ["start end", "end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * -1.5]);

  return (
    <footer
      ref={cont}
      className="min-h-[50rem] bg-[#ffffff] overflow-hidden mt-[10rem]"
    >
      <div className="flex justify-center w-[100%] absolute max-h-[50rem] overflow-hidden">
        <div className="flex justify-center w-[100%]">
          <motion.div
            style={{ y, top: `-${height / 2}px` }}
            className="h-[170vh] sm:h-[80rem] w-[100%] bg-[#000000] relative z-0 overflow-hidden"
          />
        </div>
      </div>
      <div className="h-[20rem]">
        <div
          className={`flex flex-col items-center font-bold sm:leading-[7rem] leading-[3rem] text-[3rem] sm:text-[7rem] ${anton.className} text-[#fff] relative top-[6.65rem] z-40`}
        >
          <p>{t("footer.question.1")}</p>
          <p>{t("footer.question.2")}</p>
        </div>
      </div>
      <div className="h-[35rem] sm:h-[60rem] flex flex-col justify-evenly items-center relative">
        <div
          className={`flex flex-col text-center justify-center items-center font-bold sm:leading-[7rem] leading-[3rem] text-[3rem] sm:text-[7rem] ${anton.className} text-[#000000]`}
        >
          <p>{t("footer.answer.1")}</p>
          <p>{t("footer.answer.2")}</p>
          <p>{t("footer.answer.3")}</p>
        </div>
        <div className="flex w-[90%] sm:w-[100%] flex-col sm:flex-row h-[10rem] sm:h-[7rem] justify-evenly">
          <Link className="flex w-[90%] sm:w-[100%] flex-col sm:flex-row h-[10rem] sm:h-[7rem] justify-evenly" href={'https://wa.link/o1buwq'}>
            <ButtonFooter text="Escribenos un mensaje" />
          </Link>
          <Link className="flex w-[90%] sm:w-[100%] flex-col sm:flex-row h-[10rem] sm:h-[7rem] justify-evenly" href={'https://wa.link/o1buwq'}>
            <ButtonFooter text="Discutir un proyecto" />
          </Link>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-[90%] sm:w-[60%] justify-items-center">
          <ContactItem Icon={FiPhone} text="+593 99 849 3012" />
          <ContactItem Icon={FiMail} text="minima.studiooo@gmail.com" />
          <ContactItem Icon={FiMapPin} text="Quito, Ecuador" />
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
          <p className="text-[#000000] font-light text-[0.9rem]">
            ©2023 Minima Studio, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;