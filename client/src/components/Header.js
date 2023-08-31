import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const isRecoverPage = location.pathname === "/recover";
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <nav className="px-8   py-2 flex items-center justify-between border border-b-[#bebcbd] sticky top-0 z-10 bg-white">
      <div
        className="nav__logo__input-container flex items-center gap-16
      "
      >
        {!isDashboardPage && (
          <div className="nav__logo-img">
            <Link to="/shop">
              <img src="/images/navbar/Logo.png" alt="euphoria logo" />
            </Link>
          </div>
        )}

        {!isDashboardPage &&
          !isLoginPage &&
          !isSignupPage &&
          !isRecoverPage && (
            <>
              <div className="nav__menu">
                <ul className="flex items-center gap-8">
                  <Link to="/shop" className="text-[#3C4242] font-bold">
                    Shop
                  </Link>
                  <li className="font-medium text-[#807D7E]">Men</li>
                  <Link
                    to="/category/women"
                    className="font-medium text-[#807D7E]"
                  >
                    Women
                  </Link>
                </ul>
              </div>

              <div className="nav__search relative flex items-center justify-center  bg-[#f6f6f6] rounded-lg">
                <input
                  type="text"
                  placeholder="Search"
                  className="  outline-none py-3 font-medium pl-10 pr-4 bg-transparent"
                />

                <img
                  src="/images/navbar/search.svg"
                  alt="search icon"
                  className="w-4 h-4 absolute left-4 object-cover"
                />
              </div>
            </>
          )}
      </div>

      {!isLoginPage && !isSignupPage && !isRecoverPage && (
        <div className="flex items-center gap-3">
          {!isDashboardPage && (
            <>
              <div className="p-3 bg-[#f6f6f6] rounded-lg">
                <img src="/images/navbar/heart.svg" alt="heart" />
              </div>
              <div className="p-3 bg-[#f6f6f6] rounded-lg">
                <img
                  src="/images/navbar/shopping-cart.svg"
                  alt="shopping cart"
                />
              </div>
            </>
          )}
          <div className="p-3 bg-[#f6f6f6] rounded-lg">
            <img src="/images/navbar/user.svg" alt="user" />
          </div>
        </div>
      )}

      {(isSignupPage || isRecoverPage || isLoginPage) && (
        <div className="nav__login__signup-container flex items-center gap-4">
          <Link
            to="/login"
            className="font-roboto border border-[#3C4242] text-[#8a33fd] py-[12px] px-[48px] rounded-lg font-medium hover:bg-[#8a33fd] hover:text-white "
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="font-roboto border border-[#3C4242] text-[#8a33fd] py-[12px] px-[48px] rounded-lg font-medium hover:bg-[#8a33fd] hover:text-white "
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
