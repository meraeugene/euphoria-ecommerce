import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import React from "react";

const colors = [
  { name: "Purple", color: "#8434E1" },
  { name: "Black", color: "#252525" },
  { name: "Red", color: "#F35528" },
  { name: "Orange", color: "#F16F2B" },
  { name: "Navy", color: "#345EFF" },
  { name: "White", color: "#FFF" },
  { name: "Broom", color: "#D67E3B" },
  { name: "Green", color: "#48BC4E" },
  { name: "Yellow", color: "#FDC761" },
  { name: "Grey", color: "#E4E5E8" },
  { name: "Pink", color: "#E08D9D" },
  { name: "Blue", color: "#3FDEFF" },
];

const sizes = ["XXS", "XL", "XS", "S", "M", "L", "XXL", "3XL", "4XL"];

const dressStyle = [
  "Classic",
  "Casual",
  "Business",
  "Sport",
  "Elegant",
  "Formal (evening)",
];

const AccordionComponent = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem borderBottom={"0"}>
        <h2>
          <AccordionButton p={4} borderBottom={"1px"} borderColor={"#E2E8F0"}>
            <Box as="span" flex="1" textAlign="left">
              Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={4} py={6}>
          <RangeSlider
            aria-label={["min", "max"]}
            colorScheme="purple"
            defaultValue={[10, 30]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} bg={"purple.600"} />
            <RangeSliderThumb index={1} bg={"purple.600"} />
          </RangeSlider>

          <div className="flex items-center gap-6 mt-4 ">
            <input
              type="number"
              className="border border-[#BEBCBD] outline-none w-full rounded-lg text-center"
            />
            <input
              type="number"
              className="border border-[#BEBCBD] outline-none w-full rounded-lg text-center"
            />{" "}
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton p={4} borderBottom={"1px"} borderColor={"#E2E8F0"}>
            <Box as="span" flex="1" textAlign="left">
              Colors
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={4} py={6}>
          <div className="grid grid-cols-4 grid-rows-3 gap-3 ">
            {colors.map((item, index) => (
              <div className="flex flex-col gap-1 items-center" key={index}>
                <div
                  className={`w-[35px] h-[35px] rounded-xl ${
                    item.color === "#FFF" ? "border border-[#b19a9a]" : ""
                  }`}
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-[#8A8989]">{item.name}</span>
              </div>
            ))}
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton p={4} borderBottom={"1px"} borderColor={"#E2E8F0"}>
            <Box as="span" flex="1" textAlign="left">
              Size
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel px={4} py={6}>
          <div className="grid grid-cols-3 grid-rows-3 gap-3 ">
            {sizes.map((item, index) => (
              <div key={index}>
                <div
                  className={`w-full h-[35px] rounded-lg border border-[#BEBCBD] flex items-center justify-center text-sm text-[#3c4242]`}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton p={4} borderBottom={"1px"} borderColor={"#E2E8F0"}>
            <Box as="span" flex="1" textAlign="left">
              Dress Style
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p={0}>
          <div className="flex flex-col gap-4 py-4 px-4 pr-6">
            {dressStyle.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <h3 className="text-base text-[#8a8989]">{item}</h3>
                <img
                  src="/images/productsList/right-icon.svg"
                  alt="right icon"
                />
              </div>
            ))}
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
