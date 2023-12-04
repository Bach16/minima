"use client"
import { Navbar, SimpleProjectContainer } from "../components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";


const images = ["/CCLP.png", "/DulcinaLanding1.png", "/vangSA.png"];

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
    <main className="h-[300rem]   text-[#ffffff]  bg-no-repeat bg-fixed ">
      <div className="min-h-screen">
        <Navbar/>
        <div>
          <div className="w-[100%] h-auto flex justify-center">
            <div className="w-[100%] h-auto grid grid-cols-2 gap-x-4 gap-y-[15rem] justify-center">
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
  );
};

export default ProjectsPage;
