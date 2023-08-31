import React from "react";

const BigSavingZone = () => {
  const shirtData = [
    {
      color: "blue",
      text: "Hawaiian Shirts",
      desc: "Dress up in summer vibe",
      discount: "UPTO 50% OFF",
      left: "left-[6%]",
      top: "top-[15%] ",
      textAlign: "text-left",
      discountAlign: "text-left",
      textColor: "text-white",
      arrowMargin: "ml-12",
      arrowImg: "arrow",
    },
    {
      color: "pink",
      text: "Printed T-Shirt",
      desc: "New Designs Every Week",
      discount: "UPTO 40% OFF",
      right: "right-[5%]",
      top: "top-[15%] ",
      textAlign: "text-right",
      discountAlign: "text-center",
      textColor: "text-white",
      arrowMargin: "ml-16",
      arrowAuto: "mx-auto",
      maxWidth: "max-w-[120px]",
      arrowImg: "arrow",
    },
    {
      color: "white",
      text: "Cargo Joggers",
      desc: "Move with style & comfort",
      discount: "UPTO 50% OFF",
      right: "right-[5%]",
      top: "top-[15%] ",
      textAlign: "text-left",
      discountAlign: "text-left",
      textColor: "text-[#3c4242]",
      borderColor: "border-black",
      arrowMargin: "ml-12",
      arrowImg: "arrow-black",
    },
    {
      color: "gray",
      text: "Urban Shirts",
      desc: "Live In Comfort",
      discount: "FLAT 60% OFF",
      right: "right-[15%]",
      top: "top-[15%] ",
      textAlign: "text-left",
      discountAlign: "text-left",
      textColor: "text-[#3c4242]",
      borderColor: "border-black",
      arrowMargin: "ml-12",
      headerSize: "text-[32px]",
      descSize: "text-[20px]",
      discountSize: "text-[24px]",
      borderWidth: "border-2",
      arrowImg: "arrow-black",
    },
    {
      color: "skyblue",
      text: "Oversized T-Shirts",
      desc: "Street Style Icon",
      discount: "FLAT 60% OFF",
      right: "right-[7%]",
      top: "top-[15%] ",
      textAlign: "text-left",
      discountAlign: "text-left",
      textColor: "text-[#3c4242]",
      borderColor: "border-black",
      arrowMargin: "ml-12",
      headerSize: "text-[32px]",
      descSize: "text-[20px]",
      discountSize: "text-[24px]",
      borderWidth: "border-2",
      arrowImg: "arrow-black",
    },
  ];

  return (
    <div className="px-14 pb-32">
      <div className=" mb-12 flex items-center gap-6 ">
        <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8a33fd]" />
        <h1 className="text-[34px] text-[#3c4242] font-semibold tracking-[0.68px]">
          Big Saving Zone
        </h1>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        {shirtData.map((shirt, index) => (
          <div className="relative" key={index}>
            <img
              src={`/images/bigSavingZone/${shirt.color}.png`}
              alt={`image${index + 1}`}
              className="object-cover"
            />
            <div
              className={`big-saving-zone__info absolute    ${shirt.left} ${shirt.top} ${shirt.right} ${shirt.textColor}`}
            >
              <h1
                className={`text-[28px] font-semibold tracking-[0.56px] mb-3 ${shirt.textAlign} ${shirt.headerSize} ${shirt.maxWidth}`}
              >
                {shirt.text}
              </h1>
              <h3
                className={`text-sm font-medium mb-3 ${shirt.textAlign} ${shirt.descSize} `}
              >
                {shirt.desc}
              </h3>
              <h2
                className={`font-bold text-lg  ${shirt.discountAlign} ${shirt.discountSize}`}
              >
                {shirt.discount}
              </h2>

              <img
                src={`/images/bigSavingZone/${shirt.arrowImg}.svg`}
                alt="arrow down"
                className={` mt-4 mb-8  ${shirt.arrowMargin}`}
              />

              <button
                className={`px-2 py-2 w-[130px] ${shirt.arrowAuto} flex items-center  justify-center text-base font-medium border  rounded bg-transparent ${shirt.borderColor} ${shirt.borderWidth}`}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigSavingZone;
