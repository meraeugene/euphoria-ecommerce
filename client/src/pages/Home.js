import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// components
import FirstBanner from "../components/FirstBanner";
import BigSavingZone from "../components/BigSavingZone";
import SecondBanner from "../components/SecondBanner";
import ThirdBanner from "../components/ThirdBanner";

// data
import menCategoryData from "../data/menCategory.json";
import womenCategoryData from "../data/womenCategory.json";
import reviewData from "../data/feedback.json";

const Home = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        className="mySwiper-hero"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/home/img1.webp"
              alt="img1"
              className="block w-full h-[85vh] object-top object-cover"
            />
            <div className="image__info text-left absolute left-[10%] top-[50%] transform -translate-y-1/2 text-white">
              <h2 className="text-3xl font-medium  tracking-[0.157px] mb-6">
                T-Shirt / Tops
              </h2>
              <h1 className="text-8xl font-extrabold tracking-[0.315px] mb-4">
                Summer
              </h1>
              <h1 className="text-8xl font-extrabold tracking-[0.315px] mb-6">
                Value Pack
              </h1>
              <h2 className="text-3xl font-medium tracking-[0.315px] mb-10">
                cool / colorful / comfy
              </h2>
              <button className="bg-white text-[#3C4242] px-[72px] py-4 rounded-lg text-2xl font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/home/img1.webp"
              alt="img1"
              className="block w-full h-[85vh] object-top object-cover"
            />
            <div className="image__info text-left absolute left-[10%] top-[50%] transform -translate-y-1/2 text-white">
              <h2 className="text-3xl font-medium  tracking-[0.157px] mb-6">
                T-Shirt / Tops
              </h2>
              <h1 className="text-8xl font-extrabold tracking-[0.315px] mb-4">
                Summer
              </h1>
              <h1 className="text-8xl font-extrabold tracking-[0.315px] mb-6">
                Value Pack
              </h1>
              <h2 className="text-3xl font-medium tracking-[0.315px] mb-10">
                cool / colorful / comfy
              </h2>
              <button className="bg-white text-[#3C4242] px-[72px] py-4 rounded-lg text-2xl font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <FirstBanner />

      <div className="px-14 pb-32 new-arrival__container">
        <div className=" mb-12 flex items-center gap-6 ">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8a33fd]" />
          <h1 className="text-[34px] text-[#3c4242] font-semibold tracking-[0.68px]">
            New Arrival
          </h1>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper-newArrival"
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            1366: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            2560: {
              slidesPerView: 8,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
          }}
        >
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index} className="border border-black p-4">
              <div className="flex flex-col items-center justify-center h-[330px]">
                <img
                  src="/images/home/placeholder.svg"
                  alt="placeholder"
                  className="w-[260px] h-[250px] object-cover"
                />
                <h3 className="text-xl font-bold text-[#3c4242]">
                  New Arrival Item Title
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <BigSavingZone />

      <SecondBanner />

      <div className="category-men__container px-14 pb-32">
        <div className=" mb-12 flex items-center gap-6 ">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8a33fd]" />
          <h1 className="text-[34px] text-[#3c4242] font-semibold tracking-[0.68px]">
            Categories for Men
          </h1>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-10">
          {menCategoryData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} className="w-full" />

              <div className="flex justify-between items-center">
                <div className="mt-4">
                  <h3 className="text-[#2A2F2F] font-bold  text-xl mb-1">
                    {item.name}
                  </h3>
                  <span className="text-[#7F7F7F] text-base font-medium ">
                    Explore Now!
                  </span>
                </div>
                <img
                  src="/images/menCategory/right-arrow.svg"
                  alt="right arrow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="category-women__container px-14 pb-32">
        <div className=" mb-12 flex items-center gap-6 ">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8a33fd]" />
          <h1 className="text-[34px] text-[#3c4242] font-semibold tracking-[0.68px]">
            Categories for Women
          </h1>
        </div>

        <div className="grid grid-cols-4  gap-10">
          {womenCategoryData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} className="w-full" />

              <div className="flex justify-between items-center">
                <div className="mt-4">
                  <h3 className="text-[#2A2F2F] font-bold  text-xl mb-1">
                    {item.name}
                  </h3>
                  <span className="text-[#7F7F7F] text-base font-medium ">
                    Explore Now!
                  </span>
                </div>
                <img
                  src="/images/menCategory/right-arrow.svg"
                  alt="right arrow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ThirdBanner />

      <div className="category-women__container px-14 pb-32">
        <div className=" mb-12 flex items-center gap-6 ">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8a33fd]" />
          <h1 className="text-[34px] text-[#3c4242] font-semibold tracking-[0.68px]">
            Feedback
          </h1>
        </div>

        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper-review "
          style={{
            "--swiper-pagination-color": "#3C4242",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            1366: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            2560: {
              slidesPerView: 8,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
          }}
        >
          {reviewData.map((item, i) => (
            <SwiperSlide>
              <div
                className="review__card border border-1-[#BEBCBD] py-[23px] px-[15px]
            rounded-[10px] h-[200px] "
              >
                <div className="review__card-header mb-4 flex justify-between items-start ">
                  <div className="flex items-start gap-3 ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[40px] h-[40px] rounded-full object-cover mb-3"
                    />
                    <div>
                      <h1
                        className="text-[16px] font-medium text-[#3c4242]
                      leading-none"
                      >
                        {item.name}
                      </h1>
                      <p>posted a minutes ago..</p>
                    </div>
                  </div>
                  <div className="flex">
                    <img src={item.reviewStar.star} alt="" />
                    <img src={item.reviewStar.star} alt="" />
                    <img src={item.reviewStar.star} alt="" />
                    <img src={item.reviewStar.star_half} alt="" />
                    <img src={item.reviewStar.star_outline} alt="" />
                  </div>
                </div>
                <div className="review__card-body">
                  <p className="text-[#807D7E] text-sm font-normal ">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
