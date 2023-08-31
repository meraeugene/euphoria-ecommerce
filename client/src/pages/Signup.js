import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex  h-full">
      <div className="login__img-container basis-1/2">
        <img
          src="/images/signup/bg.jfif"
          alt="login bg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="login__info-container basis-1/2  pt-10 pb-16 px-20">
        <h1 className="text-4xl font-semibold">Sign Up</h1>
        <div className="login__info__google__github-container flex flex-col gap-6 mt-10 font-medium">
          <button className="border border-[#3C4242] py-4 px-5 text-[#8A33FD] rounded-lg  flex items-center justify-center gap-3">
            <img
              src="/images/login/google.svg"
              alt="github"
              className="object-cover"
            />
            Continue With Google
          </button>
          <button className="border border-[#3C4242] py-4 px-5 text-[#8A33FD] rounded-lg font-medium flex items-center justify-center gap-3">
            <img
              src="/images/login/github.svg"
              alt="github"
              className="object-cover"
            />
            Continue With Github
          </button>
        </div>

        <div className="text-center my-10 flex items-center gap-6">
          <div className="border border-[rgba(102, 102, 102, 0.25)] w-full" />
          <span className="text-[#666]">OR</span>
          <div className="border border-[rgba(102, 102, 102, 0.25)]  w-full" />
        </div>

        <div className="login__info-authentication ">
          <form>
            <div className="flex flex-col gap-8">
              <div className="input__box flex flex-col gap-2 ">
                <label htmlFor="username" className="text-[#3C4242]">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="border border-[#3C4242] rounded-lg py-4 px-5"
                />
              </div>
              <div className="input__box flex flex-col gap-2 ">
                <label htmlFor="email" className="text-[#3C4242]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="border border-[#3C4242] rounded-lg py-4 px-5"
                />
              </div>
              <div className="input__box  flex flex-col gap-2 ">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-[#3C4242]">
                    Password
                  </label>
                  <div className="flex items-center gap-2">
                    <img src="/images/login/hide.svg" alt="" />
                    <span className="text-[#807D7E]">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  name="password"
                  className="border border-[#3C4242] rounded-lg py-4 px-5"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[#807d7e]  font-medium leading-none ">
                  Agree to our Terms of use and Privacy Policy
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[#807d7e]  leading-none font-medium">
                  Subscribe to our monthly newsletter
                </p>
              </div>
            </div>
          </form>
        </div>

        <div className="login__info__signin-container mt-10 flex flex-col gap-3">
          <button className="py-4 px-5 bg-[#8A33FD] text-white w-[167px] rounded-lg ">
            Sign In
          </button>
          <p className="text-[#3C4242]">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Log in
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
