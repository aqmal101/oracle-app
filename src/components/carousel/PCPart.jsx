import styles from "./Mobile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PBZepetto from "../../assets/PBZepetto.png";
import PUBGPC from "../../assets/PUBGPC.png";
import Minecraft from "../../assets/Minecraft.png";
import Steam from "../../assets/Steam.png";
import Gamescool from "../../assets/Gemscool.png";

function PCPart() {
  const router = useRouter();
  const dataImage = [
    PBZepetto,
    PUBGPC,
    Minecraft,
    Steam,
    Gamescool,
    PBZepetto,
    PUBGPC,
    Minecraft,
    Steam,
    Gamescool,
    PBZepetto,
    PUBGPC,
    Minecraft,
    Steam,
    Gamescool,
  ];
  return (
    <>
      <div className="px-4 w-full space-y-5 bg-gray-800 pb-10">
        <span className="text-white text-lg font-bold">PC GAMES</span>

        <div
          className={`${styles["media-scroller"]} ${styles["hidden-scroll"]} space-x-2 h-auto`}
        >
          {dataImage.map((item, idx) => (
            <div
              className="w-56 h-72 rounded-md"
              key={idx}
              onClick={() => router.push(`details/${idx + 1}`)}
            >
              <Image
                src={item}
                className="w-full h-full object-cover rounded-md"
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PCPart;
