import React, { useState } from "react";
import FigmaLogo from "../photos/FigmaLogo";
import { useNavigate } from "react-router-dom";

export default function Header(){
  const [menu, setMenu] =useState(false);

  const navigation=useNavigate();
  const handleLogin=()=>{
      navigation('/login');
  }
  const handleMenu = () => {
    setMenu(!menu);
    
  };
    return(
        <>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  p-4">
          <a href="#" className="flex flex-wrap items-center justify-center">
            <FigmaLogo />
          </a>
          <div className="flex md:order-2 space-x-2 md:space-x-0">
          <button onClick={handleLogin} className=" w-28  pl-5 pr-5 bg-transparent border-2 border-white text-white font-graphik  text-lg transition-colors duration-700 transform  hover:border-4">
            Login
          </button>
     
            <div className=" relative">
            <button
            onClick={handleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded={menu}
            >
              <span className="sr-only">Open Menu</span>
              <svg
                width="44"
                height="27"
                viewBox="0 0 44 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.25H44V4.66667H0V0.25ZM11 11.2917H44V15.7083H11V11.2917ZM24.75 22.3333H44V26.75H24.75V22.3333Z"
                  fill="white"
                />
              </svg>
            </button>
            {menu && (
          <div className="absolute right-0 mt-2 w-48 bg-black rounded-lg shadow-md py-2 z-10">
            <a
              href="/welcome"
              className="block px-4 py-2 text-white font-graphik "
              aria-current="page"
            >
              Home
            </a>
            <a
              href="/welcome"
              className="block px-4 py-2 text-white font-graphik "
            >
              Product
            </a>
            <a
              href="/welcome"
              className="block px-4 py-2 text-white font-graphik "
            >
              About
            </a>
            <a
              href="/welcome"
              className="block px-4 py-2 text-white font-graphik "
            >
              Contact
            </a>
          </div>
        )}
        </div>
          </div>
          
          
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white font-graphik  rounded md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white font-graphik  rounded  md:p-0  "
                >
                  Product
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white font-graphik  rounded  md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white font-graphik  rounded  md:p-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        </>
    )
} 