"use client";
import { Alumni_Sans, Anton } from "next/font/google";
import {
  AccordionI,
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
import { Accordion } from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { TfiStatsUp } from "react-icons/tfi";

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
      <main className="md:min-h-[90rem] text-[#ffffff] bg-no-repeat bg-fixed">
        <div className="min-h-[45rem] md:min-h-screen">
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
          <div className="hidden md:flex w-[100%] h-[10rem] sm:h-[30vh]" />
          
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
        </div>
        <div className="flex w-[100%] mt-52 justify-center">
            <div className="flex sm:flex-row flex-col w-[90%] justify-between">
              <div className="flex h-[100%] justify-start w-[100%] sm:w-[30%]">
                <div className="flex flex-col justify-between h-[16rem]">
                  <div className="font-bold text-[2rem] leading-[2rem]">
                    <h4>NUESTROS</h4>
                    <h4>SERVICIOS</h4>
                  </div>
                  <p className=" font-light text-[0.9rem]">
                    EN MINIMA, LA CREATIVIDAD ES EL MOTOR DE LA AGENCIA. 
                    SE MANIFIESTA A TRAVÉS DE NUESTRO ENFOQUE DE GESTIÓN, PROCESO DE CREACIÓN Y DESARROLLO TECNOLÓGICO. POR ESO CADA PROYECTO WEB ES UINICO, COMO TÚ.
                  </p>
                </div>
              </div>
              <div className="w-[100%] sm:w-[50%]">
                <div className="w-[100%]">
                <Accordion allowToggle className="w-[100%]">
                  <AccordionI
                    icon={CiGlobe}
                    content="Desarrollamos sitios web profesionales y personalizados que reflejan la identidad de tu marca. Nuestras páginas son responsivas, optimizadas para motores de búsqueda (SEO) y diseñadas para ofrecer la mejor experiencia de usuario. Incluimos gestión de contenidos, análisis de tráfico y soporte técnico continuo."
                    title="PÁGINA WEB"
                  />
                  <AccordionI
                    icon={HiOutlineCubeTransparent}
                    content="Creamos tu tienda virtual completa con catálogo de productos, carritos de compra seguros y pasarelas de pago integradas. Implementamos sistemas de gestión de inventario, seguimiento de pedidos y herramientas de marketing digital para impulsar tus ventas en línea. Compatible con múltiples dispositivos y fácil de administrar."
                    title="TIENDA EN LÍNEA"
                  />
                  <AccordionI
                    icon={TfiStatsUp}
                    content="Desarrollamos aplicaciones móviles nativas y multiplataforma que conectan tu negocio con tus clientes. Diseñamos interfaces intuitivas, implementamos funcionalidades avanzadas como notificaciones push, geolocalización y sincronización en la nube. Garantizamos un rendimiento óptimo tanto en iOS como en Android."
                    title="APLICACIONES MÓVIL"
                  />
                </Accordion>
                </div>
                {/* filas */}
              </div>
            </div>
          </div>
      </main>
      <FooterContainer />
    </>
  );
}