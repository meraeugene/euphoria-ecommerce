import React from "react";

const FirstBanner = () => {
  return (
    <div className="flex items-center justify-center gap-4  py-24 w-full">
      <div className="relative ">
        <img
          src="/images/firstBanner/orange.jpg"
          alt="flower dress"
          className="object-cover w-full  "
        />
        <div className="firstbanner__info absolute top-1/2 transform -translate-y-1/2 left-[5%] text-white tracking-[0.251px]">
          <h3 className="text-lg font-extrabold mb-6">Low Price</h3>
          <h1 className="text-4xl font-extrabold mb-4">High Coziness</h1>
          <p className="text-base font-medium tracking-[0.251px]">
            UPTO 50% OFF
          </p>
          <h2 className="underline text-xl mt-8">Explore Items</h2>
        </div>
      </div>

      <div className="relative">
        <img
          src="/images/firstBanner/purple.jpg"
          alt="flower dress"
          className="object-cover object-right w-full"
        />
        <div className="firstbanner__info absolute top-1/2 transform -translate-y-1/2 left-[5%] text-white">
          <h3 className="text-lg font-extrabold tracking-[0.251px] mb-6">
            Beyoung Presents
          </h3>
          <h1 className="text-4xl font-extrabold mb-2">Breezy Summer</h1>
          <h1 className="text-4xl font-extrabold mb-4">Style</h1>
          <p className="text-base tracking-[0.251px] font-medium">
            UPTO 50% OFF
          </p>
          <h2 className="font-extrabold text-xl underline mt-8">
            Explore Items
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
