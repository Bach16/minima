import { CAButton } from ".";

const CAText = () => {
  return (
    <div className="flex flex-col justify-between h-[12rem]  ">
      <p className="w-[18rem] sm:w-[26rem] text-[0.8rem] sm:text-[1rem] font-light">
        Minima es la agencia que te cautiva, te emociona y te apasiona, es tu
        mundo Telemundo, un mundo de emoción es Telemundo te hace reír te
        apasiona te emociona, es tu mundo Telemundo un mundo de emoción es
        Telemundo
      </p>
      <div className="w-[15rem]">

      <CAButton content="Mira nuestros proyectos"/>
      </div>
    </div>
  );
};

export default CAText;
