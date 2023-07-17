import React from "react";

export default function OpenType() {
  return (
    <>
      <div className="md:p-20 md:pb-20 mx-auto w-full max-w-screen-xl">
        <div className="md:bg-gray-800 md:rounded-2xl md:flex-row flex md:justify-normal justify-center items-center text-center flex-col">
          <div className="flex flex-col justify-center text-center items-center space-y-6 w-1/2">
            <div className=" flex-col md:text-left md:pl-10 md:pr-10 md:justify-start justify-center items-center text-center space-y-5">
              <h1 className="block md:w-fit lg:w-80 lg:tracking-wide text-2xl  font-normal leading-12 tracking-tight md:text-justify leading-none  text-white md:text-3xl lg:text-4xl dark:text-white">
                OpenType feature and Variable fonts
              </h1>
              <a
                href="/signup"
                className=" w-36 justify-center inline-flex items-center border-2 p-3 text-sm font-medium text-center text-white border-blue-500 bg-blue-500 "
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
