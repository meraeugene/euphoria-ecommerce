import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Select,
  Textarea,
} from "@chakra-ui/react";

import ImageUploader from "../components/ImageUploader";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="nav__icons  bg-[#fbfbfc] h-[100vh] ">
        <div className=" px-4 py-4">
          <img
            src="/images/dashboard/staff.png"
            alt="staff"
            className="w-[30px] object-cover "
          />
        </div>
        <div className=" px-4 py-4">
          <img
            src="/images/dashboard/bar.png"
            alt="chart"
            className="w-[30px] object-cover"
          />
        </div>
        <div className="px-4 py-4">
          <img
            src="/images/dashboard/dashboard.png"
            alt="dashboard"
            className="w-[30px] object-cover"
          />
        </div>
      </div>

      <div className=" nav__menu w-[17%] py-4 border-t-0 border border-r-[#D2E3E3A1]">
        <h1 className="text-[#05172E] font-semibold mb-6 px-4  text-lg">
          Dashboard
        </h1>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Product Management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>Products View</AccordionPanel>
            <AccordionPanel pb={2}>Add Products</AccordionPanel>
            <AccordionPanel pb={2}>Edit Products</AccordionPanel>
            <AccordionPanel pb={2}>Products Details</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Sales Management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>Something</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Order Management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>Something</AccordionPanel>
          </AccordionItem>
        </Accordion>

        <div className="   text-base">
          <h2 className="border border-r-0 border-l-0 border-t-0 border-b-[#D2E3E3A1] px-4 py-2 ">
            Customer Statics
          </h2>
          <h2 className="border border-r-0 border-l-0 border-t-0 border-b-[#D2E3E3A1] px-4 py-2 ">
            Daily Order
          </h2>
          <h2 className="border border-r-0 border-l-0 border-t-0 border-b-[#D2E3E3A1] px-4 py-2 ">
            Order Details
          </h2>
          <h2 className="border border-r-0 border-l-0 border-t-0 border-b-[#D2E3E3A1] px-4 py-2 ">
            Leaderboards
          </h2>
          <h2 className="border border-r-0 border-l-0 border-t-0 border-b-[#D2E3E3A1] px-4 py-2  ">
            Supplier Management
          </h2>
        </div>

        <div className="px-4 pt-10 flex items-center gap-2">
          <img
            src="/images/dashboard/help.png"
            alt="help"
            className="w-[20px] h-[20px] object-cover"
          />
          <h1>Help</h1>
        </div>
      </div>

      <div className="dashboard__content flex-1 ">
        <div className="dashboad__content-header px-6 py-4 pt-8 pb-6 border border-b-[#D2E3E3A1] border-t-0  border-l-0 border-r-0 ">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Add Products</h1>
              <img
                src="/images/dashboard/help.png"
                alt="help"
                className="w-[20px] h-[20px] object-cover"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="border border-[#D2E3E3A1] border-opacity-90 px-4 py-2 rounded-md">
                Open Documentation
              </button>
              <button className="border border-[#D2E3E3A1] border-opacity-90 px-4 py-2 rounded-md">
                {" "}
                Setup Details
              </button>
              <button className="border border-[#D2E3E3A1] border-opacity-90 px-4 py-[0.6rem] rounded-md">
                <img
                  src="/images/dashboard/3dots.png"
                  alt="3 dots"
                  className="w-[20px] h-[20px] object-cover"
                />
              </button>
            </div>
          </div>
          <p className="text-sm text-[#A1A7B0]">
            When adding products here, do not ignore to fill in all the required
            fields completely and follow the product adding rules. This ensures
            accurate inventory management and a streamlined experience for both
            users and administrators.
          </p>
        </div>

        <div className="dashboard__body mt-8 px-6 pb-12">
          <div className="w-1/2  bg-[#FBFBFC] p-3 rounded">
            <input
              type="search"
              className="border border-[#D2E3E3A1] border-opacity-90 px-4 py-2 rounded-md flex-1 w-full"
              placeholder="Search for product ID, brand, categories or something..."
            />
          </div>

          {/* product name && images */}

          <div className="flex mt-10 gap-10">
            <div className="product__name flex flex-col w-[80%]">
              <div className="input__box flex flex-col">
                <label
                  htmlFor="product-name "
                  className="mb-3 text-base font-bold"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full border border-[#D2E3E3A1] p-2 rounded-md mb-3 "
                />
                <span className="text-sm text-[#828A96]">
                  Do not exceed 20 characters when entering the product name
                </span>
              </div>

              <div className="flex gap-6 mt-6">
                <div className="flex flex-col gap-2 basis-1/2">
                  <label htmlFor="category" className="text-base font-bold">
                    Category
                  </label>
                  <Select>
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="mens-clothing">Men's Clothing</option>
                    <option value="womens-clothing">Women's Clothing</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 basis-1/2">
                  <label htmlFor="category" className="text-base font-bold">
                    Sub-Category
                  </label>
                  <Select>
                    <option value="" disabled>
                      Select sub-category
                    </option>
                    <option value="tops">Tops</option>
                    <option value="printed-tshirts">Printed T-shirts</option>
                    <option value="plain-tshirts">Plain T-shirts</option>
                    <option value="kurti">Kurti</option>
                    <option value="boxers">Boxers</option>
                    <option value="fullsleeve-tshirts">
                      Full sleeve T-shirts
                    </option>
                    <option value="joggers">Joggers</option>
                    <option value="pajamas">Pajamas</option>
                    <option value="jeans">Jeans</option>
                  </Select>
                </div>
              </div>

              <div className="flex gap-6 mt-4">
                <div className="flex flex-col gap-2 basis-1/2">
                  <label htmlFor="category" className="text-base font-bold">
                    Dress Style
                  </label>
                  <Select>
                    <option value="" disabled>
                      Select dress style
                    </option>
                    <option value="classic">Classic</option>
                    <option value="casual">Casual</option>
                    <option value="business">Business</option>
                    <option value="sport">Sport</option>
                    <option value="elegant">Elegant</option>
                    <option value="formal">Formal </option>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 basis-1/2">
                  <label htmlFor="category" className="text-base font-bold">
                    Color
                  </label>
                  <Select>
                    <option value="" disabled>
                      Select color
                    </option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="gray">Gray</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                  </Select>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <label className="text-base font-bold" htmlFor="Description">
                  Description
                </label>
                <Textarea rows={5} />
                <span className="text-sm text-[#828A96]">
                  Do not exceed 100 characters when entering the product
                  description
                </span>
              </div>
            </div>

            {/* product image */}
            <div className="product__image flex flex-col w-full">
              <div className="input__box flex flex-col">
                <h1 className="mb-3 text-base font-bold"> Product Images</h1>

                <div className="grid__container">
                  <div className="grid__container-image1">
                    <ImageUploader imageId={1} />
                  </div>

                  <div className="grid__container-image2">
                    <ImageUploader imageId={2} />
                  </div>

                  <div className="grid__container-image3">
                    <ImageUploader imageId={3} />
                  </div>
                </div>

                <p className="text-sm mt-4 text-[#828A96]">
                  You need to add at least 3 images. Pay attention to the
                  quality of the pictures you add, comply with the background
                  color standards. Pictures must be in certain dimensions.
                  Notice that the product shows all the details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
