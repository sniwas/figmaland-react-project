import React from "react";
import Gallery from "../Components/Gallery";
import Contents from "../Components/Contents";
import Features from "../Components/Features";
import Header from "../Components/Header";
import Partners from "../Components/Partners";
import Testimonials from "../Components/Testimonials";
import OpenType from "../Components/OpenType";
import Fotter from "../Components/Fotter";
import Intro from "../Components/Intro";

export default function WelcomeScreen() {
  return (
    
    <div className=" bg-black overflow-auto">
      <nav className="block overflow-auto bg-black  fixed h-full w-full z-20 top-0 md-block:pl-52 md-block:pr-52 left-0 border-b border-gray-200 ">
        <Header />
        <Intro/>
        <Features/>
        <Contents/>
        <Gallery/>
        <Partners/>
        <Testimonials/>
        <OpenType/>
        <Fotter/>
      </nav>
    </div>
  );
}
