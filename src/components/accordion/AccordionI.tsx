import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Icon,
  } from "@chakra-ui/react";
  import { FC } from "react";
  import { IoStatsChart } from "react-icons/io5";
  
  
  interface Props {
    icon: any;
    title: string;
    content: string;
  }
  
  const AccordionI: FC<Props> = ({ icon = IoStatsChart , title, content }) => {
  
    return (
      <>
        <AccordionItem className="border-b-[1px] border-white border-solid">
          <AccordionButton className="flex justify-between items-center h-[7rem]">
            <Box as="span" textAlign="left" className="flex items-center ">
              <Icon as={icon} boxSize={50} className="mr-[2rem] ml-[1rem] fill-white"/>
              <h3 className=" font-normal text-[1.2rem] sm:text-[2rem]">
                {" "}
                {title}
              </h3>
            </Box>
            <AccordionIcon boxSize={50} />
          </AccordionButton>
          <AccordionPanel pb={40}>{content}</AccordionPanel>
        </AccordionItem>
      </>
    );
  };
  export default AccordionI;