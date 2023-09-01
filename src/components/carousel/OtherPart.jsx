import styles from "./Mobile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OracleTeal from "../../assets/OracleLogoTealM.png";
import GooglePlay from "../../assets/GooglePlayStore.png";
import WifiID from "../../assets/WifiID.png";
import ITunes from "../../assets/ITunes.png";
import Spotify from "../../assets/Spotify.png";

function OtherPart() {
  const router = useRouter();
  const dataImage = [
    OracleTeal,
    GooglePlay,
    WifiID,
    ITunes,
    Spotify,
    OracleTeal,
    GooglePlay,
    WifiID,
    ITunes,
    Spotify,
    OracleTeal,
    GooglePlay,
    WifiID,
    ITunes,
    Spotify,
  ];
  return (
    <>
      <div className="px-4 w-full space-y-5 pb-10">
        <span className="text-white text-lg font-bold">OTHER</span>

        <div
          className={`${styles["media-scroller"]} ${styles["hidden-scroll"]} space-x-2 h-auto`}
        >
          {dataImage.map((item, idx) => (
            <div
              key={idx}
              className="w-56 h-72 rounded-md"
              style={{
                backgroundColor: item === WifiID ? "red" : "white",
              }}
              onClick={() => router.push(`details/${idx + 1}`)}
            >
              <Image
                src={item}
                className="w-full h-full object-contain rounded-md px-2"
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OtherPart;
