"use client";
import {
  Alumni_Sans,
  Anton,
} from "next/font/google";
import {
  Column,
  FooterContainer,
  Navbar,
  TextCAContainer,
  WideProjects,
} from "./components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform, motion } from "framer-motion";
import useDimension from "../assets/useDimension";


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
  const { height,width } = useDimension();
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
    
    <main className="min-h-[90rem]   text-[#ffffff]  bg-no-repeat bg-fixed ">
      <div className="min-h-screen">
        <Navbar />
        <div className=" flex flex-col pt-[4rem]  h-[100%] items-center justify-center">
          <div className=" w-[90%] text-[3.7rem] leading-[4.2rem] sm:text-[9rem] sm:leading-[10rem]">
            <h1
              className={` hidden sm:flex scale-x-200 scale-y-[1.5] ${Alumni.className}`}
            >
              JUST A TAILOR-MADE

            </h1>
            <h1
              className={` sm:hidden scale-x-200 scale-y-[1.5] ${Alumni.className}`}
            >
              JUST A
            </h1>
            <h1
              className={` sm:hidden scale-x-200 scale-y-[1.5] ${Alumni.className}`}
            >
              TAILOR-MADE 
            </h1>
            <h1 className={` scale-x-200 scale-y-[1.5] ${Alumni.className}`}>
             WEBSITE
            </h1>
            <h1 className={` scale-x-200 scale-y-[1.5] ${Alumni.className}`}>
              TO YOUR NEEDS
            </h1>
          </div>
          <div className=" mt-[2rem] flex w-[90%] sm:w-[auto] sm:mt-0 sm:absolute sm:right-[4rem] sm:bottom-[11rem]">
            <TextCAContainer />
          </div>
        </div>
        <div className="w-[100%] h-[10rem] sm:h-[30vh]" />
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
        <div className="flex  h-[20rem] sm:h-[100rem] overflow-hidden flex-col sm:flex-row w-[100%]">
          <div
            ref={ cont}
            className=" h-[100%] w-[100%]  bg-[#131313] flex gap-[2vw] justify-center "
          >
            <Column
              key={"0"}
              imgs={[images[2], images[1], images[0]]}
              y={((width <= 768))? null: y4}
              top={(width <= 768)? "-30%":"-75%"}
            />
            <Column
              key={"1"}
              imgs={[images[2], images[0], images[1]]}
              y={(width <= 768)? null:y3}
              top={(width <= 768)? "-20%":"-95%"}
            />
            <Column
              key={"2"}
              imgs={[images[2], images[1], images[0]]}
              y={(width <= 768)? null:y4}
              top={(width <= 768)? "-10%":"-75%"}
            />
          </div>
        </div>
        <div className="w-[100%] h-[6rem] sm:h-[0vh]" />

        <div className="flex justify-center items-center w-[100%] sm:h-[90vh]">
          <div className=" flex w-[100%] relative sm:w-[90%] h-[55%] flex-col items-center sm:flex-row overflow-hidden sm:overflow-visible">
            <div className=" flex justify-center sm:static absolute items-center sm:justify-start sm:items-start w-[100%] sm:w-[50%] h-[100%]">
              <p className="text-[#ffffff]  font-bold sm:font-semibold text-[1.8rem] sm:text-[1.2rem]">
                Featured Projects
              </p>
            </div>
            <div
              className={`flex flex-col items-center sm:relative top-[0rem] left-[5.5rem] font-black text-[#DEDEDE] sm:text-[#ffffff] text-[6.2rem] sm:text-[9rem] leading-[6rem] sm:leading-[8.5rem] ${anton.className}`}
            >
              <p
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth:(width <= 768)? "0.6px":"0.6px",
                }}
                className={``}
              >
                PROJECTS
              </p>
              <p style={(width <= 768)? {
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth: "0.6px",
                }:undefined} className="">PROJECTS</p>
              <p
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStrokeWidth: (width <= 768)? "0.6px": "0.6px",
                }}
                className=""
              >
                PROJECTS
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[6rem] sm:h-[0vh]" />

        
        <WideProjects image={images[1]} index={"01"} title="Dulcina" mb/>
        <WideProjects image={images[0]} index={"02"} title="Casual Couture" justify="rigth" mb={true}/>
        <WideProjects image={images[1]} index={"01"} title="Dulcina" mb={false}/>
        
        
      </div>
    </main>
    <FooterContainer/>
  </>
  );
}
