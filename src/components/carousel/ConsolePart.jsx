import styles from "./Mobile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nintendo from "../../assets/nintendo-eshop.png";
import PlayStation from "../../assets/PlayStationStore.png";

function ConsolePart() {
  const router = useRouter();
  const dataImage = [
    Nintendo,
    PlayStation,
    Nintendo,
    PlayStation,
    Nintendo,
    PlayStation,
    Nintendo,
    PlayStation,
    Nintendo,
    PlayStation,
    Nintendo,
    PlayStation,
  ];
  return (
    <>
      <div className="px-4 w-full space-y-5 pb-10">
        <span className="text-white text-lg font-bold">CONSOLE</span>

        <div
          className={`${styles["media-scroller"]} ${styles["hidden-scroll"]} space-x-2 h-auto`}
        >
          {dataImage.map((item, idx) => (
            <div
              className="w-56 h-72 rounded-md"
              key={idx}
              onClick={() => router.push(`details/${idx}`)}
            >
              {" "}
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

export default ConsolePart;
