import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full flex flex-col-reverse 1000px:flex-row items-center justify-between py-10 px-6 1500px:px-20">
      <div className="relative w-full 1000px:w-1/2 flex flex-col justify-center items-center 1500px:h-[500px] 1100px:h-[400px] h-[50vh]">
        <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg mb-8 animate-pulse"></div>
        <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-lg animate-bounce"></div>
      </div>
      <div className="w-full 1000px:w-1/2 text-center 1000px:text-left">
        <h1 className="text-3xl 1000px:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Enhance Your Learning Journey Today
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Join our community of 40k+ courses and 500K+ students. Find your next
          course now!
        </p>
        <div className="relative w-full max-w-md mx-auto 1000px:mx-0">
          <input
            type="text"
            placeholder="Search Courses..."
            className="w-full py-3 pl-4 pr-10 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 focus:outline-none"
          />
          <BiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
