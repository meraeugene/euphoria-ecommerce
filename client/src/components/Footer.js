import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#3C4242] text-white py-20 px-24 pr-36 pb-12">
      <div className="flex gap-20">
        <div className="flex flex-col ">
          <h1 className="mb-8 text-2xl font-bold  tracking-wide">Need Help</h1>
          <div className="font-normal text-lg flex flex-col gap-4">
            <span>Contact Us</span>
            <span>Track Order</span>
            <span>Returns & Refunds</span>
            <span>FAQ's</span>
            <span>Career</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="mb-8 text-2xl font-bold  tracking-wide">Company</h1>
          <div className="font-normal text-lg flex flex-col gap-4">
            <span>About Us</span>
            <span>Euphoria Blog</span>
            <span>Euphoriastan</span>
            <span>Collaboration</span>
            <span>Media</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="mb-8 text-2xl font-bold  tracking-wide">More Info</h1>
          <div className="font-normal text-lg flex flex-col gap-4">
            <span>Term and Conditions</span>
            <span>Privacy Policy</span>
            <span>Shipping Policy</span>
            <span>Sitemap</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="mb-8 text-2xl font-bold  tracking-wide">Location</h1>
          <div className="font-normal text-lg flex flex-col gap-4">
            <span>support@euphoria.in</span>
            <span>Track Order</span>
            <span>Eklingpura Chouraha, Ahmedabad Main Road</span>
            <span>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-20">
        <div className="flex gap-3 w-full">
          <img
            src="/images/footer/fb.svg"
            alt="twitter icon"
            className="object-cover  w-[40px] h-[40px]"
          />
          <img
            src="/images/footer/ig.svg"
            alt="twitter icon"
            className="object-cover w-[40px] h-[40px]"
          />
          <img
            src="/images/footer/twitter.svg"
            alt="twitter icon"
            className="object-cover w-[40px] h-[40px]"
          />
        </div>

        <div className=" flex flex-col gap-2">
          <h1 className="text-2xl font-bold  tracking-wider">
            Download the App
          </h1>
          <div className="flex items-center gap-2">
            <img
              src="/images/footer/gplay.png"
              alt="google play download"
              className="w-[150px] object-cover"
            />
            <img src="/images/footer/appstore.svg" alt="app store  download" />
          </div>
        </div>
      </div>

      <p className="text-center mt-20">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
