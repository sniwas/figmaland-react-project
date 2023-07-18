import React from "react";

export default function Partners() {
  return (
    <div className="md:p-40 p-20">
      <div className="bg-black flex items-center justify-center">
        <div className="block text-center md:w-4/5 xl:pl-4 xl:pr-4">
          <h1 className="block mb-6 pl-20 pr-20 mt-6 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  text-4xl font-semibold leading-none tracking-tight text-white font-graphik  md:text-5xl lg:text-6xl ">
            Partners
          </h1>
          <p className="text-white font-graphik  pl-14 pr-14 sm:pl-60 sm:pr-60 xl:pl-72 xl:pr-72 font-normal text-base leading-7 tracking-tight sm:tracking-wider">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <div className="p-9">
        <img className=" max-w-2xl hidden object-center object-cover lg:block h-auto"
          src={require("../photos/Brands1.png")}
          alt="photo"
        ></img>
        <img
          className=" w-48 max-w-sm object-center object-cover lg:hidden h-auto "
          src={require("../photos/Brands2.png")}
          alt="photo"
        ></img>
      </div>
      </div>
      <div className="flex justify-center ">
          <a
            href="#"
            className=" w-36 justify-center inline-flex items-center border-2 p-3 text-sm font-medium text-center text-white font-graphik  border-white "
          >
            All Partners
          </a>
        </div>
    </div>
  );
}
