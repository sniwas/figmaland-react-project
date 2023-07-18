import React from "react";

export default function Features() {
  return (
    <>
      <div className="bg-black flex items-center justify-center w-screen pt-28 md:pt-0">
        <div className="block text-center md:w-4/5 xl:pl-4 xl:pr-4">
          <h1 className="block mb-4 pl-16 pr-16 md:pl-20 font-graphik text-5xl font-normal leading-16 tracking-tight  md:pr-20 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80  leading-none  text-white md:text-5xl lg:text-6xl ">
            FEATURES
          </h1>
          <p className="text-white font-graphik  px-12 sm:pl-60 sm:pr-60 xl:pl-80 xl:pr-80 font-normal text-base leading-7 tracking-tight sm:tracking-wider">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>
      </div>
      <div className="bg-black  flex grid-col-2 flex-col m-14  lg:pl-32 lg:pr-32 lg:flex-row justify-center">
        <div className="block md:hidden justify-end">
          <img
            src={require("../photos/features_mobile.png")}
            alt="Image2"
            className="w-fill lg:mt-2 h-auto"
          ></img>
        </div>
        <div className="hidden md:block  justify-end">
          <img
            src={require("../photos/screen2.png")}
            alt="Image2"
            className="w-fit lg:mt-2 h-auto"
          ></img>
        </div>
        <div className="md:w-fill w-fit md:pl-0 pl-5 lg:ml-8 my-8 justify-center lg:mt-24 lg:mr-16 space-y-4">
          <ul className="flex flex-col items-center space-y-16">
            <li className="  text-white font-graphik  items-center">
              <div className="flex flex-row">
                <svg
                  width="32"
                  height="62"
                  viewBox="0 0 32 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6464 32.6089L14.4197 28.8355L6.16636 20.5955C5.52636 19.9555 4.41969 20.1289 4.01969 20.9555C3.07302 22.9422 3.41969 25.3822 5.05969 27.0355L10.6464 32.6089ZM19.6864 30.1955C21.7264 31.1422 24.593 30.4755 26.713 28.3555C29.2597 25.8089 29.753 22.1555 27.793 20.1955C25.8464 18.2489 22.193 18.7289 19.633 21.2755C17.513 23.3955 16.8464 26.2622 17.793 28.3022L5.71302 40.3822C5.46372 40.6315 5.32366 40.9696 5.32366 41.3222C5.32366 41.6748 5.46372 42.0129 5.71302 42.2622C5.96233 42.5115 6.30046 42.6516 6.65302 42.6516C7.00559 42.6516 7.34372 42.5115 7.59302 42.2622L15.8464 34.0355L24.0864 42.2755C24.2098 42.399 24.3563 42.4969 24.5176 42.5637C24.6789 42.6305 24.8518 42.6649 25.0264 42.6649C25.2009 42.6649 25.3738 42.6305 25.5351 42.5637C25.6964 42.4969 25.8429 42.399 25.9664 42.2755C26.0898 42.1521 26.1877 42.0055 26.2545 41.8443C26.3213 41.683 26.3557 41.5101 26.3557 41.3355C26.3557 41.161 26.3213 40.9881 26.2545 40.8268C26.1877 40.6655 26.0898 40.519 25.9664 40.3955L17.7264 32.1555L19.6864 30.1955Z"
                    fill="#02E4C0"
                  />
                </svg>
                <h1 className=" pl-4 text-2xl w-44">
                  A single source of truth
                </h1>
              </div>
              <div>
                <p className="text-white font-graphik  w-72">
                  When you add work to your Slate calendar we automatically
                  calculate useful insights
                </p>
              </div>
            </li>

            <li className=" text-white font-graphik  items-center ">
              <div className="flex flex-row">
                <svg
                  width="34"
                  height="60"
                  viewBox="0 0 34 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5495 28.395C16.0285 30.855 15.811 33.75 14.042 34.92C12.273 36.06 9.634 34.995 8.1405 32.535C6.6615 30.075 6.8935 27.15 8.6625 26.01C10.4315 24.87 13.0705 25.935 14.5495 28.395ZM17 38.625C19.9 38.625 20.625 37.5 20.625 37.5C20.625 37.5 19.9 40.5 17 40.5C14.1 40.5 13.375 37.545 13.375 37.5C13.375 37.5 14.1 38.625 17 38.625ZM25.3375 26.01C27.1065 27.15 27.3385 30.075 25.8595 32.535C24.366 34.995 21.727 36.06 19.958 34.92C18.189 33.75 17.9715 30.855 19.4505 28.395C20.9295 25.935 23.5685 24.87 25.3375 26.01ZM17 42C20.625 42 28.6 34.29 28.6 28.5C28.6 22.71 23.3945 18 17 18C10.6055 18 5.4 22.71 5.4 28.5C5.4 34.29 13.375 42 17 42ZM17 15C24.975 15 31.5 21.06 31.5 28.5C31.5 34.62 23.264 45 17 45C10.736 45 2.5 34.62 2.5 28.5C2.5 21.06 9.025 15 17 15Z"
                    fill="#02E4C0"
                  />
                </svg>
                <h1 className=" pl-4 text-2xl w-20">Intuitive interface</h1>
              </div>
              <p className="text-white font-graphik  w-72">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </li>

            <li className=" text-white font-graphik  items-center">
              <div className="flex flex-row items-center">
                <svg
                  width="42"
                  height="19"
                  viewBox="0 0 42 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.275 4.03437e-05C29.815 4.03437e-05 27.4917 0.988885 25.8346 2.70171L13.825 13.7203C12.7317 14.8504 11.2796 15.4684 9.725 15.4684C6.53042 15.4684 3.91667 12.8021 3.91667 9.50002C3.91667 6.19798 6.53042 3.53163 9.725 3.53163C11.2796 3.53163 12.7317 4.14966 13.8933 5.3504L15.8238 7.1162L18.4375 4.75003L16.2508 2.79C15.3953 1.90238 14.3782 1.19881 13.2581 0.719939C12.1379 0.241065 10.9371 -0.0036143 9.725 4.03437e-05C4.63417 4.03437e-05 0.5 4.27327 0.5 9.50002C0.5 14.7268 4.63417 19 9.725 19C12.185 19 14.5083 18.0112 16.1654 16.2983L28.175 5.27977C29.2683 4.14966 30.7204 3.53163 32.275 3.53163C35.4696 3.53163 38.0833 6.19798 38.0833 9.50002C38.0833 12.8021 35.4696 15.4684 32.275 15.4684C30.7375 15.4684 29.2683 14.8504 28.1067 13.6496L26.125 11.8662L23.5625 14.2324L25.7492 16.21C26.607 17.0932 27.625 17.7927 28.7448 18.2684C29.8646 18.7442 31.0643 18.9868 32.275 18.9823C37.3658 18.9823 41.5 14.7268 41.5 9.50002C41.5 4.20263 37.3658 4.03437e-05 32.275 4.03437e-05Z"
                    fill="#02E4C0"
                  />
                </svg>
                <h1 className=" pl-4 text-2xl">Or with rules</h1>
              </div>
              <p className="text-white font-graphik  pt-4 w-72">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
