"use client";
import { FooterContainer, Navbar, SimpleProjectContainer } from "../components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Anton } from "next/font/google";

const images = ["/CCLP.png", "/DulcinaLanding1.png", "/vangSA.png"];

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const ProjectsPage = () => {
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
      <main className="min-h-[100rem]   text-[#ffffff]  bg-no-repeat bg-fixed ">
        <div className="min-h-[70rem]">
          <Navbar />
          <div className="flex flex-col justify-around items-center h-[50rem] mb-[10rem]">
            <h2
              className={`font-bold text-[3rem] sm:text-[16rem] ${anton.className} text-[#fff] `}
            >
              ABOUT US
            </h2>
            <div className=" font-light text-[3rem] sm:leading-[3.5rem] sm:text-[2.6rem] w-[90%] text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="flex w-[100%] justify-center">
            <div className="flex w-[90%]">
              <div className="flex h-[100%] justify-start">
                <div className="flex flex-col justify-between h-[90%]">
                  <div>
                    <h4>OUR</h4>
                    <h4>SERVICES</h4>
                  </div>
                  <p>
                    FROM DIGITAL STRATEGY, INTERACTIVE DESIGN AND FULL-STACK
                    DEVELOPMENT, OUR COMPLETE RANGE OF EXPERTISE MAKES US KEY
                    PLAYERS IN IMPLEMENTING DIGITAL SOLUTIONS FOR SMALL TO
                    LARGE-SCALE WEB PROJECTS.
                  </p>
                </div>
              </div>
              <div>
                {/* filas */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterContainer />
    </>
  );
};

export default ProjectsPage;
