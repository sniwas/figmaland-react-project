import React from "react";

export default function Gallery() {
  return (
    <>
      <div className="bg-black flex items-center justify-center">
        <div className="block text-center mt-20 md:mt-0 md:w-4/5 xl:pl-4 xl:pr-4">
        <h1 className="block mb-4 pl-16 pr-16 md:pl-20 font-graphik text-5xl font-normal leading-16 tracking-tight  md:pr-20 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  leading-none  text-white md:text-5xl lg:text-6xl ">
            Gallery
          </h1>
          <p className="text-white font-graphik  pl-14 pr-14 sm:pl-60 sm:pr-60 xl:pl-80 xl:pr-80 font-normal text-base leading-7 tracking-wide sm:tracking-wider">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
      </div>

      <div className=" hidden md:block max-w-6xl mx-auto px-2 sm:px-2 lg:px-1 lg:py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/gallery1.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/gallery2.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/gallery3.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/gallery4.png")}
                alt="photo"
              ></img>
            </div>
          </div>
        </div>
        </div>

        <div className="block md:hidden max-w-6xl mx-auto px-16 py-16">
        <div className="grid grid-cols-1 justify-center space-y-10">
          <div className="w-full rounded-lg shadow-lg overflow-hidden  justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/mobile1.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-lg overflow-hidden justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/mobile2.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-lg overflow-hidden justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/mobile3.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className="w-full rounded-lg shadow-lg overflow-hidden justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full"
                src={require("../photos/mobile4.png")}
                alt="photo"
              ></img>
            </div>
          </div>
        </div>
        </div>


      

      <div className=" hidden  lg:block max-w-8xl mx-auto pb-10">
        <div className="flex flex-row justify-center space-x-12 ">
          <div className=" rounded-lg shadow-lg overflow-hidden flex  justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto max-w-full"
                src={require("../photos/gallery5.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className=" rounded-lg shadow-lg overflow-hidden flex justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto max-w-full"
                src={require("../photos/gallery6.png")}
                alt="photo"
              ></img>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden flex justify-center items-center">
            <div>
              <img
                className="object-center object-cover h-auto max-w-full"
                src={require("../photos/gallery7.png")}
                alt="photo"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <a
          href="#"
          className=" w-36 justify-center inline-flex items-center border-2 p-3 text-sm font-medium text-center text-white font-graphik  border-white "
        >
          See more
        </a>
      </div>
    </>
  );
}
