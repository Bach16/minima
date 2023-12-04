"use client";
import {
  Alumni_Sans,
  Anton,
  Barlow_Condensed,
  Bebas_Neue,
  Oswald,
} from "next/font/google";
import {
  ButtonFooter,
  CAButton,
  CAText,
  Card,
  Column,
  FooterContainer,
  Navbar,
  SimpleProjectContainer,
  SocialItems,
  TextCAContainer,
  Title,
  WideProjects,
} from "./components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion } from "framer-motion";
import useDimension from "../assets/useDimension";

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
const images = ["/CCLP.png", "/DulcinaLanding1.png", "/vangSA.png"];

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
            <TextCAContainer />
          </div>
        </div>
        <div className="w-[100%] h-[30vh]" />
        {/*  <div className="h-[95vh] flex flex-col items-center ">
          <div className="h-[30%] relative flex flex-col justify-between items-center z-50">
            <h2 className="sm:w-[55%] w-[90%] text-center font-extrabold sm:leading-[4.5rem] leading-[2rem] text-[2rem] sm:text-[4rem]">
              Diseños creados a la medida de tu negocio
            </h2>
            <p className="sm:w-[45%] w-[80%] text-[0.8rem] sm:text-[1rem]   text-center">
              Unlock your potential with a Membership and get the community,
              coaching, and content your business needs to grow and thrive.
            </p>
          </div>
        </div> */}
        <div className="flex h-[100vh] sm:h-[200vh] overflow-hidden flex-col sm:flex-row w-[100%]">
          <div
            ref={cont}
            className=" h-[100%] w-[100%]  bg-[#131313] flex gap-[2vw] justify-center "
          >
            <Column
              key={"0"}
              imgs={[images[2], images[1], images[0]]}
              y={y4}
              top={"-75%"}
            />
            <Column
              key={"1"}
              imgs={[images[2], images[0], images[1]]}
              y={y3}
              top={"-95%"}
            />
            <Column
              key={"2"}
              imgs={[images[2], images[1], images[0]]}
              y={y4}
              top={"-75%"}
            />
          </div>
        </div>
        <div className="sm:flex justify-center items-center w-[100%] sm:h-[90vh]">
          <div className=" flex w-[90%] h-[55%]">
            <div className=" flex justify-start items-start w-[50%] h-[100%]">
              <p className="text-[#ffffff] font-semibold text-[1.2rem]">
                Featured Projects
              </p>
            </div>
            <div
              className={`flex flex-col relative top-[0rem] left-[5.5rem] font-black text-[#ffffff] text-[9rem] leading-[8.5rem]  ${anton.className}`}
            >
              <p
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth: "0.6px",
                }}
                className={``}
              >
                PROJECTS
              </p>
              <p className="">PROJECTS</p>
              <p
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth: "0.6px",
                }}
                className=""
              >
                PROJECTS
              </p>
            </div>
          </div>
        </div>
        
        <WideProjects image={images[1]} index={"01"} title="Dulcina" />
        <WideProjects image={images[0]} index={"02"} title="Casual Couture" justify="rigth"/>
        
        
      </div>
    </main>
    <FooterContainer/>
  </>
  );
}
