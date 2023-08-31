import React from "react";
import { Link } from "react-router-dom";

const Recover = () => {
  return (
    <div className="flex  ">
      <div className="recover__img-container basis-1/2">
        <img
          src="/images/recovery/bg.webp"
          alt="login bg"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="recover__info-container basis-1/2  pt-10 pb-16 px-20 h-screen">
        <h1 className="text-4xl font-semibold mb-2 ">Reset Your Password</h1>
        <h3 className="text-[#676B80] mb-1">
          Enter your email and we'll send you a link to reset your password.
        </h3>
        <span className="text-[#666666CC]">Please check it.</span>

        <form className="mt-8">
          <div className="input__box flex flex-col gap-2 mb-14">
            <label htmlFor="email" className="text-[#3C4242]">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border border-[#8A33FD]  text-[#8A33FD] outline-none rounded-lg py-4 px-5"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="bg-[#8a33fd] rounded-lg text-white p-4 w-[170px]"
            >
              Send
            </button>

            <Link to="/login" className="underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recover;
