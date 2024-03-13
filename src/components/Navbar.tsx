import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations();
  return (
    <nav className="flex h-[5rem] justify-center">
      <div className="flex justify-between items-center w-[90%]">
        <Link href={"/"}>
          <Image
            src="/Artboard38.webp"
            width={128.825}
            height={31.08}
            alt="Minima Logo"
          />
        </Link>
        <ul className=" hidden sm:flex font-light w-[25%] justify-between">
          <Link href={"/projects"}>
            <li>{t("navbar.1")}</li>
          </Link>
            <li>{t("navbar.2")}</li>
          <Link href={"/about"}>
            <li>{t("navbar.3")}</li>
          </Link>
        </ul>
        <button className="flex sm:hidden">
          <p>{t("navbar.2")}</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
