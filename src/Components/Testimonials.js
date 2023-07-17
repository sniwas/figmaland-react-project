import React from "react";
import TestimonialsList from "../Details/TestimonialsList";

export default function Testimonials() {
  const mdViewsItems = TestimonialsList.slice(0, 4); // First four items for LG views
  const smallerViewsItems = TestimonialsList.slice(4);
  return (
    <div className="md:p-20 mb-10">
      <div className="bg-black flex items-center justify-center">
        <div className="block text-center md:w-4/5 xl:pl-4 xl:pr-4">
          <h1 className="block mb-6 pl-20 pr-20 mt-6 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
            Testimonials
          </h1>
        </div>
      </div>
      <div className="hidden md:block mx-auto lg:max-w-7xl mt-3">
        <div className="max-w-7xl mx-auto px-5 mb-3">
          <div className="mt-2 lg:pl-40 lg:pr-40 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {mdViewsItems.map((item) => (
              <li key={item.id}>
                <div className=" mx-auto lg:max-w-7xl mt-3 ">
                  <div className="max-w-7xl mx-auto px-5 mb-3">
                    <div className="mt-6 grid  gap-y-10 gap-x-6  xl:gap-x-8">
                      <div className="max-w-xl bg-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex p-5 items-center flex-row">
                          <img
                            className="w-12 h-12  rounded-full shadow-lg"
                            src={item.image}
                            alt="Bonnie image"
                          />
                          <div className="flex flex-col pl-4">
                            <h5 className="mb-1 text-xl font-medium  text-white">
                              {item.name}
                            </h5>
                            <span className="text-sm text-white ">
                              {item.position}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="mb-3 font-normal text-white">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden mx-auto lg:max-w-7xl mt-3">
        <div className="max-w-7xl mx-auto px-5 mb-3">
          <div className="mt-2 lg:pl-40 lg:pr-40 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {smallerViewsItems.map((item) => (
              <li key={item.id}>
                <div className=" mx-auto lg:max-w-7xl mt-3 ">
                  <div className="max-w-7xl mx-auto px-5 mb-3">
                    <div className="mt-6 grid  gap-y-10 gap-x-6  xl:gap-x-8">
                      <div className="max-w-xl bg-black rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex p-5 items-center flex-row">
                          <img
                            className="w-12 h-12  rounded-full shadow-lg"
                            src={item.image}
                            alt="Bonnie image"
                          />
                          <div className="flex flex-col pl-4">
                            <h5 className="mb-1 text-xl font-medium  text-white">
                              {item.name}
                            </h5>
                            <span className="text-sm text-white ">
                              {item.position}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="mb-3 font-normal text-white">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
