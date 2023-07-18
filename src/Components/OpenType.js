import React from "react";

export default function OpenType() {
  return (
    <>
      <div className="md:p-20 md:pb-20 mx-auto w-full max-w-screen-xl">
        <div className="md:bg-gray-800 md:rounded-2xl md:flex-row flex md:justify-normal justify-center items-center text-center flex-col">
          <div className="flex flex-col justify-center text-center items-center space-y-6 w-1/2">
            <div className=" flex-col md:text-left p-14 md:pl-10 md:pr-10 md:justify-start justify-center items-center text-center space-y-5">
              <h1 className="block md:w-fit w-72 lg:w-80 lg:tracking-wide text-4xl font-normal leading-12 tracking-wide md:text-justify leading-none  text-white font-graphik  md:text-3xl lg:text-4xl ">
              {/* <h1 className="block mb-4 pl-16 pr-16 md:pl-20 font-graphik text-5xl font-normal leading-16 tracking-wide  md:pr-20 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  leading-none  text-white md:text-5xl lg:text-6xl "> */}
                OpenType feature and Variable fonts
              </h1>
              <a
                href="/signup"
                className=" w-36 justify-center inline-flex items-center border-2 p-3 text-sm font-medium text-center text-white font-graphik  border-blue-500 bg-blue-500 "
              >
                Try For Free
              </a>
            </div>
          </div>
          <div className="flex md:w-1/2 justify-center">
            <img
              className="block md:hidden object-center object-cover h-auto w-fill"
              src={require("../photos/opentypefeatures_mobile.png")}
              alt="photo"
            ></img>
            <img
              className="hidden md:block object-center object-cover h-auto w-full"
              src={require("../photos/opentypefeatures.png")}
              alt="photo"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
