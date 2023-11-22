"use client";
import {
  Alumni_Sans,
  Anton,
  Barlow_Condensed,
  Bebas_Neue,
  Oswald,
} from "next/font/google";
import { CAButton, CAText, Column, Navbar } from "./components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion } from "framer-motion";
import useDimension from "./assets/useDimension";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});
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
const images = [
  "/CCLP.png",
  "/aMedida.png",
  "/3.png",
  "/eventoss.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
];

export default function Home() {
  const cont = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: cont,
    offset: ["start end", "end start"],
  });

  console.log(height);

  const y = useTransform(scrollYProgress, [0.2, 1.2], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * (height < 700 ? 2.5 : 3)]
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
    <main className="h-[300rem]   text-[#ffffff]  bg-no-repeat bg-fixed ">
      <div className="min-h-screen">
        <Navbar />
        <div className=" flex flex-col pt-[4rem]  h-[100%] items-center justify-center">
          <div className=" w-[90%] text-[4rem] leading-[4.5rem] sm:text-[9rem] sm:leading-[10rem]">
            <h1
              className={` hidden sm:flex scale-x-200 scale-y-[1.5] ${Alumni.className}`}
            >
              NOSOTROS CREAMOS
            </h1>
            <h1
              className={` sm:hidden scale-x-200 scale-y-[1.5] ${Alumni.className}`}
            >
              NOSOTROS
            </h1>
            <h1
              className={` sm:hidden scale-x-200 scale-y-[1.5] ${Alumni.className}`}
            >
              CREAMOS
            </h1>
            <h1 className={` scale-x-200 scale-y-[1.5] ${Alumni.className}`}>
              LA PAGINA
            </h1>
            <h1 className={` scale-x-200 scale-y-[1.5] ${Alumni.className}`}>
              QUE NECESITAS
            </h1>
          </div>
          <div className=" mt-[2rem] sm:mt-0 sm:absolute sm:right-[4rem] sm:bottom-[10rem]">
            <CAText />
          </div>
        </div>
        <div className="h-[95vh] flex flex-col items-center ">
          <div className="w-[100%] h-[50%]" />
          <div className="h-[30%] relative flex flex-col justify-between items-center z-50">
            <h2 className="sm:w-[55%] w-[90%] text-center font-extrabold sm:leading-[4.5rem] leading-[2rem] text-[2rem] sm:text-[4rem]">
              Diseños creados a la medida de tu negocio
            </h2>
            <p className="sm:w-[45%] w-[80%] text-[0.8rem] sm:text-[1rem]   text-center">
              Unlock your potential with a Membership and get the community,
              coaching, and content your business needs to grow and thrive.
            </p>
          </div>
        </div>
        <div className=" z-0 h-[300vh] absolute w-[100%] top-[53rem] left-[0] bg-gradient-to-tr from-[#000000] via-black to-[#2F2F2F] skew-y-[-15deg]" />
        <div className="flex h-[100vh] sm:h-[175vh] flex-col sm:flex-row w-[100%]">
          <div
            ref={cont}
            className=" h-[100%] w-[100%] sm:w-[50%] overflow-hidden bg-[#131313] flex gap-[2vw] p-[2vw] box-border"
          >
            {/* <Column imgs={[images[2], images[6], images[7]]} y={y} top={"-45%"} />
          <Column
            imgs={[images[3], images[4], images[7]]}
            y={y2}
            top={"-95%"}
          /> */}
            <Column
              key={"1"}
              imgs={[images[4], images[2], images[7]]}
              y={y3}
              top={height < 700 ? "-80%" : "-28%"}
            />
            <Column
              key={"2"}
              imgs={[images[3], images[0], images[4]]}
              y={y4}
              top={height < 700 ? "-162%" : "-75%"}
            />
          </div>
          <div className="h-[100%] hidden sm:flex justify-center items-center w-[50%] overflow-hidden">
            <motion.div
              style={{ y, top: "-40%" }}
              className="h-[12rem] hidden sm:flex w-[100%] relative flex-col justify-between items-center z-50"
            >
              <div className="w-[100%] flex flex-col justify-between items-center">
                <h2 className="w-[80%] text-center font-extrabold leading-[4.5rem] text-[4rem]">
                  Nuestro trabajo
                </h2>
                <p className="w-[45%] text-center">
                  Unlock your potential with a Membership and get the community.
                </p>
              </div>
              <div className="w-[13.5rem]">
                <CAButton content={"Cotiza tu pagina web"} />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-[10rem] sm:hidden mt-[5rem] flex w-[100%] relative flex-col justify-between items-center z-50">
          <div className="w-[95%] flex flex-col justify-between items-center">
            <h2 className="w-[100%]  text-center font-extrabold leading-[2rem] text-[2rem] ">
              Nuestro trabajo
            </h2>
            <p className="w-[100%] text-center">
              Unlock your potential with a Membership and get the community.
            </p>
          </div>
          <div className="w-[13.5rem]">
            <CAButton content={"Cotiza tu pagina web"} />
          </div>
        </div>
      </div>
    </main>
  );
}
