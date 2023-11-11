import { Alumni_Sans, Anton, Barlow_Condensed, Bebas_Neue, Oswald } from "next/font/google";
import { Navbar } from "./components";

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
export default function Home() {
  return (
    <main className="min-h-screen  text-[#ffffff] ">
      <Navbar />
      <div className="flex flex-col pt-[4rem] h-[100%] items-center justify-center">
        <div className=" w-[90%]">
          <h1
            className={`text-[9rem] leading-[10rem] scale-x-200 scale-y-[1.5] ${Alumni.className}`}
          >
           NOSOTROS "CREAMOS 
          </h1>
          <h1
            className={`text-[9rem] leading-[10rem] scale-x-200 scale-y-[1.5] ${Alumni.className}`}
          >
            LA "PAGINA
          </h1>
          <h1
            className={`text-[9rem] leading-[10rem] scale-x-200 scale-y-[1.5] ${Alumni.className}`}
          >
            QUE "NECESITAS
          </h1>
        </div>
      </div>
    </main>
  );
}
