import React from "react";

const SecondBanner = () => {
  return (
    <div className="flex px-14 pb-32 ">
      <div className="relative">
        <img
          src="/images/secondBanner/leaves.webp"
          alt="leaves"
          className="object-cover w-full basis-1/2 rounded-tl-xl rounded-bl-xl"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(/images/secondBanner/leaves.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(.3)", // You can adjust the brightness value as needed
          }}
        />
        <div className="info absolute top-1/2 transform -translate-y-1/2 text-white px-14">
          <h1 className="text-[34px] font-extrabold tracking-[0.208px] mb-6">
            WE MADE YOUR EVERYDAY FASHION BETTER!
          </h1>
          <p className="text-xl tracking-[1px] font-ligh mb-10">
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <button className="bg-white text-[#3C4242] text-lg font-semibold py-[12px] px-[44px] rounded-lg">
            Shop Now
          </button>
        </div>
      </div>

      <img
        src="/images/secondBanner/people.png"
        alt="people"
        className="object-cover  w-[50%]  basis-1/2 rounded-tr-xl rounded-br-xl"
      />
    </div>
  );
};

export default SecondBanner;
