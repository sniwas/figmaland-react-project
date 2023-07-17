import React from "react";

import Screen1 from "../photos/screen1.png";
import Gallery from "../Components/Gallery";
import Contents from "../Components/Contents";
import Features from "../Components/Features";
import Header from "../Components/Header";
import Partners from "../Components/Partners";
import Testimonials from "../Components/Testimonials";
import OpenType from "../Components/OpenType";
import Fotter from "../Components/Fotter";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate=useNavigate();
  return (
    <div className=" bg-black overflow-auto">
      <nav className="block overflow-auto bg-black dark:bg-gray-900 fixed h-full w-full z-20 top-0 md-block:pl-52 md-block:pr-52 left-0 border-b border-gray-200 dark:border-gray-600">
        <Header />
        <div className="bg-black flex items-center justify-center">
          <div className="block text-center md:w-4/5 xl:pl-4 xl:pr-4">
            <h1 className="block mb-4 pl-20 pr-20 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
              Work at the speed of thought
            </h1>
            <p className="text-white pl-14 pr-14 sm:pl-60 sm:pr-60 xl:pl-80 xl:pr-80 font-normal text-base leading-7 tracking-tight sm:tracking-wider">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center p-5 space-y-4 md:space-y-0 md:space-x-4">
          <a href="/signup">
          <button className=" w-40 p-2 pl-5 pr-5 transition-colors duration-700 border-2 border-blue-700 transform bg-blue-700  text-gray-100 text-lg hover:border-4 ">
            Try For Free
          </button>
          </a>
          <button className=" w-40 p-2 pl-5 pr-5 bg-transparent border-2 border-white text-white text-lg transition-colors duration-700 transform  hover:border-4">
            Learn More
          </button>
        </div>
        <div className="flex justify-center bg-black">
          <div className=" bg-black  ">
            <img
              src={Screen1}
              alt="Image1"
              className="lg:w-fit object-center lg:mt-2 max-w-full h-auto"
            ></img>
          </div>
        </div>
        <Features />
        <Contents />
        <Gallery />
        <Partners />
        <Testimonials />
        <OpenType />
        <Fotter/>
      </nav>
    </div>
  );
}
