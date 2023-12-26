import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import { FC } from "react";

interface Props {
  icon: object;
  title: string;
  content: string;
}

const AccordionI: FC<Props> = ({ icon, title, content }) => {
  return (
    <>
      <AccordionItem className="border-b-[1px] border-white border-solid">
          <AccordionButton className="flex justify-between items-center h-[7rem]">
            <Box as="span" textAlign="left" className="flex ">
              <Lottie className="w-[3rem] h-[3rem] mr-[2rem]" animationData={icon} />
              <h3 className=" font-normal text-[2rem]"> {title}</h3>
            </Box>
            <AccordionIcon boxSize={50} />
          </AccordionButton>
        <AccordionPanel pb={40}>{content}</AccordionPanel>
      </AccordionItem>
    </>
  );
};
export default AccordionI;
