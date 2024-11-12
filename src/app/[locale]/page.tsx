"use client";
import { Alumni_Sans, Anton } from "next/font/google";
import {
  Column,
  FooterContainer,
  Navbar,
  TextCAContainer,
  WideProjects,
} from "../../components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion } from "framer-motion";
import useDimension from "../../assets/useDimension";
import { useTranslations } from "next-intl";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
const Alumni = Alumni_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});
const images = ["/CCLP.png", "/DulcinaLanding1.png", "/vangSA.png"];

export default function Home() {
  const t = useTranslations();
  const cont = useRef(null);
  const { height, width } = useDimension();
  const { scrollYProgress } = useScroll({
    target: cont,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.2, 1.2], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.7]);
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * (height < 700 ? 2.5 : 3.1)]
  );

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main className="min-h-[90rem] text-[#ffffff] bg-no-repeat bg-fixed">
        <div className="min-h-screen">
          <Navbar />
          <div className="flex flex-col pt-[4rem] h-[100%] items-center justify-center">
            <div className="w-[90%] text-[3.688rem] leading-[4.2rem] sm:text-[9rem] sm:leading-[10rem]">
              <h1
                className={`hidden sm:flex scale-x-200 scale-y-[1.5] ${Alumni.className}`}
              >
                {t("first-section.heading.1")}
              </h1>
              <h1
                className={` sm:hidden scale-x-200 scale-y-[1.5] ${Alumni.className}`}
                >
                {t("first-section.heading.1m")}
              </h1>
              <h1
                className={` sm:hidden scale-x-200 scale-y-[1.5] ${Alumni.className}`}
                >
                {t("first-section.heading.2m")}
              </h1>
              <h1 className={` scale-x-200 scale-y-[1.5] ${Alumni.className}`}>
                {t("first-section.heading.2")}
              </h1>
              <h1 className={` scale-x-200 scale-y-[1.5] ${Alumni.className}`}>
                {t("first-section.heading.3")}
              </h1>
            </div>
            <div className=" mt-[2rem] flex w-[90%] sm:w-[auto] sm:mt-0 sm:absolute sm:right-[4rem] sm:bottom-[10rem]">
              <TextCAContainer />
            </div>
          </div>
          <div className="w-[100%] h-[10rem] sm:h-[30vh]" />
          
          {/* Galería de imágenes - oculta en mobile */}
          <div className="hidden sm:flex h-[20rem] sm:h-[100rem] overflow-hidden flex-col sm:flex-row w-[100%]">
            <div
              ref={cont}
              className="h-[100%] w-[100%] bg-[#131313] flex gap-[2vw] justify-center"
            >
              <Column
                key={"0"}
                imgs={[images[2], images[1], images[0]]}
                y={width <= 768 ? null : y4}
                top={width <= 768 ? "-30%" : "-75%"}
              />
              <Column
                key={"1"}
                imgs={[images[2], images[0], images[1]]}
                y={width <= 768 ? null : y3}
                top={width <= 768 ? "-20%" : "-95%"}
              />
              <Column
                key={"2"}
                imgs={[images[2], images[1], images[0]]}
                y={width <= 768 ? null : y4}
                top={width <= 768 ? "-10%" : "-75%"}
              />
            </div>
          </div>
          <div className="w-[100%] h-[6rem] sm:h-[0vh]" />
        </div>
      </main>
      <FooterContainer />
    </>
  );
}