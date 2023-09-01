import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Alok from "../../assets/YahahaAlok.png";

function HeroSkinBanner() {
  const dataImage = [Alok, Alok, Alok];
  return (
    <div className="flex flex-col space-y-3">
      {dataImage.map((item, idx) => (
        <div
          key={idx}
          className="h-[90px] w-[520px] rounded-md bg-cover bg-left-top bg-no-repeat bg-[url('../assets/YahahaAlok.png')]"
        >
          <div className="w-full h-full flex flex-col items-end bg-gradient-to-r from-transparent to-teal-800 justify-center px-7 rounded-md text-white">
            <h1 className="text-1xl font-semibold">TELAH HADIR SKIN BARU...</h1>
            <h1 className="text-1xl">www.oracle.app.com</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSkinBanner;
