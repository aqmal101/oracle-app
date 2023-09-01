import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ArtboardCarousel() {
  return (
    <>
      <Carousel className="w-[575px] h-[190px] items-center">
        <div className="w-[575px] h-[190px] bg-cover bg-[center_top] bg-[url('../assets/Artboard-300x.png')] rounded-md "></div>
        <div className="w-[575px] h-[190px] bg-cover bg-[center_top] bg-[url('../assets/Artboard-300x.png')] rounded-md "></div>
        <div className="w-[575px] h-[190px] bg-cover bg-[center_top] bg-[url('../assets/Artboard-300x.png')] rounded-md "></div>
      </Carousel>
    </>
  );
}

export default ArtboardCarousel;
