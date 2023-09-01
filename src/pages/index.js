import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSkinBanner from "@/components/heroBanner";
import ArtboardCarousel from "@/components/carousel";
import ConsolePart from "@/components/carousel/ConsolePart";
import GameShop from "@/components/carousel/MobilePart";
import PCPart from "@/components/carousel/PCPart";
import OtherPart from "@/components/carousel/OtherPart";

export default function Home() {
  return (
    <main className="flex h-auto min-h-screen w-full flex-col items-center bg-gray-800 ">
      <div className="sticky top-0 z-10 w-full bg-white">
        <Navbar />
      </div>
      <div className="bg-contain bg-no-repeat bg-[url('../assets/MobileLagend1.png')]">
        <div className="h-screen px-20 w-full flex flex-row items-start justify-between bg-gradient-to-b from-transparent to-gray-800 z-0 pt-24 space-x-10">
          <HeroSkinBanner />
          <ArtboardCarousel />
        </div>
      </div>
      <div className="w-full min-h-screen bg-gray-800 flex flex-col items-start justify-start px-14 space-y-5 pb-12">
        <GameShop />
        <PCPart />
        <ConsolePart />
        <OtherPart />
      </div>
      <Footer />
    </main>
  );
}
