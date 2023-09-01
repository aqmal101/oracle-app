import React from "react";
import Image from "next/image";
import Pin from "../../assets/pin.svg";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/envelope.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Telegram from "../../assets/telegram.svg";
import Youtube from "../../assets/youtube.svg";
import GooglePlay from "../../assets/GooglePlay.png";
import AppStore from "../../assets/AppStore.png";

function Footer() {
  return (
    <footer className="w-full h-64 bg-teal-700 pt-12 pb-7 py-6 flex flex-col justify-between items-center space-y-10 text-white">
      <div className="flex flex-row space-x-24 justify-around items-start">
        <div className="flex flex-col space-y-1">
          <h1 className="font-bold mb-1">INFO KONTAK</h1>
          <div className="flex flex-row space-x-3">
            <Image src={Pin} height={20} width={20} alt="icon pin" />
            <h1>Jalan xxxx No.xx Kec.xxxx, Kel. xxxx, Kota xxxx</h1>
          </div>
          <div className="flex flex-row space-x-3">
            <Image src={Phone} height={20} width={20} alt="icon phone" />
            <h1>012-3456-7890</h1>
          </div>
          <div className="flex flex-row space-x-3">
            <Image src={Mail} height={20} width={20} alt="icon envelope" />
            <h1>customer.oracle@oracle.com</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">SOCIAL MEDIA</h1>
          <div className="flex flex-row space-x-6 mt-2">
            <Image src={Twitter} height={20} width={20} alt="icon twitter" />
            <Image src={Facebook} height={20} width={20} alt="icon facebook" />
            <Image
              src={Instagram}
              height={20}
              width={20}
              alt="icon instagram"
            />
            <Image src={Telegram} height={20} width={20} alt="icon telegram" />
            <Image src={Youtube} height={20} width={20} alt="icon youtube" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">DOWNLOAD APPS</h1>
          <div className="flex flex-row space-x-3">
            <Image
              src={GooglePlay}
              height={100}
              width={100}
              alt="logo Google Play"
            />
            <Image
              src={AppStore}
              height={100}
              width={100}
              alt="logo App Store"
            />
          </div>
        </div>
      </div>
      <span>Copyright © 2023 Oracle. All rights reserved.</span>
    </footer>
  );
}

export default Footer;
