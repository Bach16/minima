import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {useTimeZone,useLocale } from "next-intl";

const Navbar = () => {
  const t = useTranslations();
  const lo = useLocale()


  return (
    <nav className="flex h-[5rem] justify-center">
      <div className="flex justify-between items-center w-[90%] text-[0.9rem] sm:text-[1rem]">
        <Link href={`/${lo}`}>
          <Image
            src="/log-d.png"
            width={190}
            height={29.1375}
            alt="Minima Logo"
          />
        </Link>
        <ul className=" hidden sm:flex font-light w-[25%] justify-end">
            <li>{t("navbar.2")}</li>
        </ul>
        <button className="flex sm:hidden">
          <p>{t("navbar.2")}</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
