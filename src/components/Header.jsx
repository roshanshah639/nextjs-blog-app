import Image from "next/image";
import React from "react";
import { assets } from "../../Assets/assets";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="Logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 text-indigo-800 sm:px-6 border border-solid border-indigo-800 rounded shadow-[-7px_7px_0px_#4b0082]">
          Get Started
          <Image src={assets.arrow} alt="Arrow" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-4xl font-medium text-indigo-700 ">
          Latest Blogs
        </h1>
        <p className="mt-8 max-w-[740px] m-auto text-xs sm:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          fugiat odio iusto non quis! Aspernatur, facere atque! Omnis,
          temporibus officia?
        </p>
        <form
          className="flex justify-between max-w-[500px] rounded scale-75 sm:scale-100 mx-auto mt-10 border border-indigo-800 shadow-[-7px_7px_0px_#4b0082]"
          action=""
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          />
          <button className="border-l border-indigo-800 py-4 px-4 sm:px-8 text-indigo-800 active:bg-indigo-800 active:text-white ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
