"use client";
import { FooterContainer, Navbar, SimpleProjectContainer } from "../../components";
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
              PROJECTS
            </h2>
            <div className=" font-light text-[3rem] sm:leading-[3.5rem] sm:text-[2.6rem] w-[90%] text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div>
            <div className="w-[100%] h-auto flex justify-center">
              <div className="w-[100%] h-auto grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[15rem] justify-center">
                <div className="h-[28rem] ">
                  <SimpleProjectContainer
                    index={"01"}
                    title="Dulcina"
                    description="Chocolate gifts e-commerce"
                    image={images[1]}
                    bgColor="bg-gradient-to-r from-[#403F3E] to-[#211917]"
                  />
                </div>
                <div className="h-[28rem] ">
                  <SimpleProjectContainer
                    index={"01"}
                    title="Dulcina"
                    description="Chocolate gifts e-commerce"
                    image={images[1]}
                    bgColor="bg-gradient-to-r from-[#403F3E] to-[#211917]"
                  />
                </div>
                <div className="h-[28rem] ">
                  <SimpleProjectContainer
                    index={"01"}
                    title="Dulcina"
                    description="Chocolate gifts e-commerce"
                    image={images[1]}
                    bgColor="bg-gradient-to-r from-[#403F3E] to-[#211917]"
                  />
                </div>
                <div className="h-[28rem] ">
                  <SimpleProjectContainer
                    index={"01"}
                    title="Dulcina"
                    description="Chocolate gifts e-commerce"
                    image={images[1]}
                    bgColor="bg-gradient-to-r from-[#403F3E] to-[#211917]"
                  />
                </div>
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
