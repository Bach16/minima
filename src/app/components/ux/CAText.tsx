import { CAButton } from ".";

const CAText = () => {
  return (
    <div className="flex flex-col justify-between h-[12rem]  ">
      <p className="w-[18rem] sm:w-[26rem] text-[0.8rem] sm:text-[1rem] font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="w-[15rem]">
        <CAButton content="Mira nuestros proyectos" />
      </div>
    </div>
  );
};

export default CAText;
