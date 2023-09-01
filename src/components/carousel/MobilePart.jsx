import styles from "./Mobile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FreeFire from "../../assets/FreeFire.png";
import ArenaOFValor from "../../assets/ArenaOfValor.png";
import MobileLagend from "../../assets/MobileLagend1.png";
import LeagueOfLagend from "../../assets/LeagueOfLagend.png";
import Pabjii from "../../assets/Pabjii.png";

function MobilePart() {
  const router = useRouter();
  const dataImage = [
    ArenaOFValor,
    FreeFire,
    MobileLagend,
    LeagueOfLagend,
    Pabjii,
    ArenaOFValor,
    FreeFire,
    MobileLagend,
    LeagueOfLagend,
    Pabjii,
    ArenaOFValor,
    FreeFire,
    MobileLagend,
    LeagueOfLagend,
    Pabjii,
  ];
  return (
    <>
      <div className="px-4 w-full space-y-5 bg-gray-800 pb-10">
        <span className="text-white text-lg font-bold">MOBILE</span>

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

export default MobilePart;
