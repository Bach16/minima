"use client";
import {
  AccordionI,
  FooterContainer,
  Navbar,
  SimpleProjectContainer,
} from "../components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Anton } from "next/font/google";

import { Accordion } from "@chakra-ui/react";

import firsticon from "../../assets/icons/system-regular-160-trending-up.json";
import thirdicon from "../../assets/icons/system-regular-720-spinner-half-circles.json";
import secondicon from "../../assets/icons/system-regular-733-spinner-turbine.json";

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
          <div className="flex flex-col justify-around items-center h-[30rem] sm:h-[50rem] mb-[10rem]">
            <h2
              className={`font-bold text-[3rem] sm:text-[16rem] ${anton.className} text-[#fff] `}
            >
              ABOUT US
            </h2>
            <div className=" font-light text-[1.2rem] sm:leading-[3.5rem] sm:text-[2.6rem] w-[90%] text-center">
              <p>
                Driven by teamwork, digital solutions & the people that use
                them. We are a digital creative agency that focuses on the
                results, design and development of digital products for great
                people.
              </p>
            </div>
          </div>
          <div className="flex w-[100%] justify-center">
            <div className="flex sm:flex-row flex-col w-[90%] justify-between">
              <div className="flex h-[100%] justify-start w-[100%] sm:w-[30%]">
                <div className="flex flex-col justify-between h-[20rem]">
                  <div className="font-bold text-[2rem] leading-[2rem]">
                    <h4>OUR</h4>
                    <h4>SERVICES</h4>
                  </div>
                  <p className=" font-light text-[0.9rem]">
                    AT MINIMA, CREATIVITY IS WHAT DRIVES THE AGENCY. IT MANIFESTS
                    ITSELF THROUGH OUR MANAGEMENT APPROACH, CREATION PROCESS AND
                    TECHNOLOGICAL DEVELOPMENT. THIS IS WHY EACH WEB PROJECT IS
                    UINIQUE, JUST LIKE YOU.
                  </p>
                </div>
              </div>
              <div className="w-[100%] sm:w-[50%]">
                <div className="w-[100%]">
                  <Accordion allowToggle className="w-[100%]">
                    <AccordionI
                      icon={thirdicon}
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua."
                      title="TECHNOLOGY"
                    />
                    <AccordionI
                      icon={secondicon}
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      title="DESIGN"
                    />
                    <AccordionI
                      icon={firsticon}
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                      title="PERFORMANCE"
                    />
                  </Accordion>
                </div>
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
