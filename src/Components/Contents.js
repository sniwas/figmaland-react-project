import React from "react";

export default function Contents() {
  return (
    <>
      <div className="bg-black flex items-center justify-center">
        <div className="block text-center md:w-4/5 xl:pl-4 xl:pr-4">
          <h1 className="block mb-6 pl-20 pr-20 mt-6 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
            Contents
          </h1>
          <p className="text-white pl-14 pr-14 sm:pl-60 sm:pr-60 xl:pl-80 xl:pr-80 font-normal text-base leading-7 tracking-tight sm:tracking-wider">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-10 p-10 space-y-5 lg:space-y-0">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-2 text-center text-2xl font-medium tracking-tight text-black dark:text-white">
                Work
              </h5>

              <p className="mb-3 text-center pl-10 pr-10 font-normal text-gray-400 dark:text-gray-400">
                Ever wondered if you're too reliant on a client for work? Slate
                helps you identify .
              </p>
              <div className="flex justify-center m-10">
                <a
                  href="/signup"
                  className="justify-center w-36 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign Up
                </a>
              </div>
              <div className=" lg:pt-10">
                <img
                  className="rounded-t-lg"
                  src={require("../photos/MacbookPro.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-2 text-center text-2xl font-medium tracking-tight text-black dark:text-white">
                Design with real data
              </h5>

              <p className="mb-3 text-center pl-10 pr-10 font-normal text-gray-400 dark:text-gray-400">
                Ever wondered if you're too reliant on a client for work? Slate
                helps you identify .
              </p>
              <div className="flex justify-center m-10">
                <a
                  href="/signup"
                  className=" w-36 justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Try For Free
                </a>
              </div>

              <img
                className="rounded-t-lg"
                src={require("../photos/Notifications.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
