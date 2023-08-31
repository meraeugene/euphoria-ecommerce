import React from "react";

const ThirdBanner = () => {
  return (
    <div className=" px-14 pb-32 text-center ">
      <div className="bg-[#3C4242] text-white pt-12 pb-16 rounded-xl">
        {" "}
        <h1 className="text-5xl font-extrabold mb-4">Top Brands Deal</h1>
        <h3 className="mb-14 text-[22px] font-normal">
          Up to <span className="text-[#fbd103]">60% </span> off on brands
        </h3>
        <div className="flex items-center justify-center gap-6 ">
          <div className="bg-white h-[85px] w-[180px] flex items-center justify-center rounded-xl">
            <img
              src="/images/thirdBanner/nike.png"
              alt="nike"
              className="w-[100px] object-cover"
            />
          </div>
          <div className="bg-white h-[85px] w-[180px] flex items-center justify-center rounded-xl">
            {" "}
            <img src="/images/thirdBanner/hm.png" alt="h&m" />
          </div>
          <div className="bg-white h-[85px] w-[180px] flex items-center justify-center  rounded-xl">
            {" "}
            <img src="/images/thirdBanner/levis.png" alt="levis" />
          </div>
          <div className="bg-white h-[85px] w-[180px] flex items-center justify-center rounded-xl">
            {" "}
            <img src="/images/thirdBanner/polo.png" alt="polo" />
          </div>
          <div className="bg-white h-[85px] w-[180px] flex items-center justify-center rounded-xl">
            {" "}
            <img src="/images/thirdBanner/puma.png" alt="puma" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
