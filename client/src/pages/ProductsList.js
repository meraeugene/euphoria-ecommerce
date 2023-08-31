import React from "react";
import AccordionComponent from "../components/AccordionComponent";
import Products from "../data/womenProducts.json";
import TableData from "../data/womenBestClothingPrice.json";

const menuItems = [
  "Tops",
  "Printed T-shirts",
  "Plain T-shirts",
  "Kurti",
  "Boxers",
  "Full sleeve T-shirts",
  "Joggers",
  "Pajamas",
  "Jeans",
];

const ProductList = () => {
  return (
    <>
      <div className="flex px-8">
        <div className="filter__aside border border-t-0  border-l-[#E2E8F0] border-r-[#E2E8F0] w-[25%] h-full">
          <div className="filter__aside-header flex items-center justify-between p-4 border border-l-0 border-t-0 border-r-0 border-b-[#E2E8F0]">
            <h2 className="text-lg text-[#807D7E]">Filter</h2>
            <img src="/images/productsList/filter.svg" alt="filter" />
          </div>

          <div className="filter__aside-menuItems  p-4 pr-6">
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <div className="flex items-center justify-between">
                  <h3 className="text-base text-[#8A8989]" key={index}>
                    {item}
                  </h3>
                  <img
                    src="/images/productsList/right-icon.svg"
                    alt="right icon"
                  />
                </div>
              ))}
            </div>
          </div>

          <AccordionComponent />
        </div>

        <div className="product__grid-container  w-full pl-10 pr-0 py-10">
          <div className="product__grid-header flex items-center justify-between">
            <h1 className="text-[#3F4646] text-[22px] font-semibold">
              Women's Clothing
            </h1>
            <div className="flex items-center gap-6">
              <h1 className="text-[#8A33FD] text-[22px] font-semibold">New</h1>
              <h1 className="text-[#3F4646] text-[22px] font-semibold">
                Recommended
              </h1>
            </div>
          </div>

          <div className="product__grid-content mt-12">
            <div className="grid grid-cols-3 gap-10 grid-rows-4 ">
              {Products.map((item, index) => (
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[370px] object-cover rounded-xl w-full"
                  />
                  <div className="flex justify-between items-center mt-6">
                    <h3 className="text-[#3C4242] text-base font-semibold">
                      {" "}
                      {item.name}
                    </h3>
                    <span className="bg-[#f6f6f6] w-[80px] text-center py-2 rounded-lg text-[#3C4242] text-sm font-bold">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-14">
        <div className=" pl-3 flex items-center gap-3 mb-4">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8a33fd]" />
          <h1 className="text-[34px] text-[#3c4242] font-semibold tracking-[0.68px]">
            Categories for Men
          </h1>
        </div>

        <article className="px-8 pr-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#807D7E] text-xl font-semibold">
              Reexplore Women's Clothing Collection Online at Euphoria
            </h1>
            <p className="text-[#807D7E] text-base font-medium">
              Women's Clothing – Are you searching for the best website to buy
              Clothing for Women online in India? Well, your search for the
              coolest and most stylish womens clothing ends here. From trendy
              Casual Womens Wear Online shopping to premium quality cotton
              women's apparel, Euphoria has closet of Women Collection covered
              with the latest and best designs of Women's Clothing Online.
            </p>
            <p className="text-[#807D7E] text-base font-medium">
              Our collection of clothes for women will make you the trendsetter
              with an iconic resemblance of choice in Womens Wear.{" "}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            {" "}
            <h1 className="text-[#807D7E] text-xl font-semibold">
              One-Stop Destination to Shop Every Clothing for Women: Euphoria
            </h1>
            <p className="text-[#807D7E] text-base font-medium">
              Today, Clothing for Women is gaining more popularity above all.
              This is because gone are the days when women were used to carrying
              uncomfortable fashion. Today, a lady looks prettier when she is in
              Casual Womens Wear which is a comfortable outfit. Concerning this,
              Euphoria has a big fat range of Stylish Women's Clothing that
              would make her the winner wherever she goes.
            </p>
            <p className="text-[#807D7E] text-base font-medium">
              Our collection of clothes for women will make you the trendsetter
              with an iconic resemblance of choice in Womens Wear. It is quite
              evident to say that there are very few Womens Clothing online
              stores where you can buy Western Wear for Women comprising the
              premium material and elegant design that you are always seeking
              for. Basically,
            </p>
            <span className="text-[#807D7E] text-xl font-semibold">
              See more
            </span>
          </div>
        </article>
      </div>

      <div className="pl-11 flex items-center gap-3 mb-4">
        <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8a33fd]" />
        <h1 className="text-[28px] text-[#3c4242] font-semibold tracking-[0.68px]">
          Buy Women's Clothing at Best Price
        </h1>
      </div>
      <div className="px-16 py-14 pt-0">
        <table className="border-collapse w-full mt-8 ">
          <tr className="text-[#3C4242] text-[20px]">
            <th>Women's Clothing</th>
            <th>Best Price</th>
          </tr>
          {TableData.map((item, index) => (
            <tr key={index} className="text-[#807D7E] text-[18px]">
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default ProductList;
