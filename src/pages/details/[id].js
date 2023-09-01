import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Grid,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Gopay from "../../assets/GopayLogo.png";
import OVO from "../../assets/ovo.png";
import Dana from "../../assets/DanaLogo.png";
import VISA from "../../assets/VisaLogo.png";
import ATMBCA from "../../assets/ATMLogo.png";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const dataImage = [Gopay, OVO, Dana, VISA, ATMBCA];
  const diamondAmount = [
    "5 Diamond",
    "12 Diamond",
    "50 Diamond",
    "70 Diamond",
    "140 Diamond",
    "355 Diamond",
    "720 Diamond",
    "1450 Diamond",
    "2180 Diamond",
    "3640 Diamond",
    "7290 Diamond",
    "36500 Diamond",
  ];

  return (
    <main className="flex h-auto w-full flex-col items-center bg-gray-800 ">
      <div className="sticky top-0 z-10 w-full bg-white">
        <Navbar />
      </div>
      <div className="w-full h-auto bg-contain bg-no-repeat bg-top bg-[url('../assets/wallpaper-free-fire-cyborgs.png')]">
        <div className="w-full flex flex-row justify-between bg-gradient-to-b from-transparent to-gray-800 px-10 space-x-6">
          <div className="w-7/12 h-fit bg-gray-900 text-white text-sm self-start flex flex-col mt-56 py-10 px-5 rounded-lg">
            <div className="flex h-fit w-fit flex-row items-center justify-center rounded-full bg-white px-7 py-5 text-2xl font-bold text-black">
              <span className="text-2xl">{id}</span>
            </div>
            <span className="text-2xl py-2 font-bold">Free Fire</span>
            <span className="text-justify space-y-2">
              <p>
                PERINGATAN: Metode pembayaran DANA hanya tersedia untuk Pengguna
                Aplikasi. Harap pastikan bahwa aplikasi DANA Anda telah
                diperbarui dan memiliki saldo yang mencukupi sebelum melakukan
                top up.
              </p>
              <p>
                Top up diamond FF hanya dalam hitungan detik! Cukup masukan User
                ID Free Fire Anda, pilih jumlah Diamond yang Anda inginkan,
                kemudian selesaikan pembayaran. Setelah pembayaran berhasil
                Diamond FF akan secara langsung ditambahkan ke akun Free Fire
                Anda.
              </p>
              <p>
                Bayarlah menggunakan GoPay, OVO, DANA, hingga Transfer Bank.
                Oracle adalah cara terbaik untuk top up diamond Free Fire secara
                online tanpa kartu kredit. Anda juga dapat mendaftarkan sebagai
                pengguna premium dan mendapatkan diskon yang menarik.
              </p>
            </span>
          </div>
          <div className="w-5/12 space-y-10 flex flex-col items-center my-14">
            <div className="w-full">
              <FormControl className="w-full bg-gray-900 p-5 text-white rounded-lg">
                <FormLabel>
                  <h1 className="capitalize text-xl">Masukkan Game ID</h1>
                </FormLabel>
                <Input
                  type="email"
                  variant="outline"
                  placeholder="Masukkan ID anda"
                  _focus={{ backgroundColor: "white", color: "black" }}
                />
                <FormHelperText>
                  <p className="font-semibold text-gray-300 text-xsm">
                    Untuk menemukan ID Anda, klik pada ikon karakter. User ID
                    tercantum di bawah nama karakter Anda. Contoh: 1234567890.
                  </p>
                </FormHelperText>
              </FormControl>
            </div>
            <div className="w-full bg-gray-900 text-white rounded-md p-5 space-y-4">
              <h1 className="capitalize text-xl font-bold">
                pilih nominal top up
              </h1>
              <Grid
                templateColumns="repeat(3, 6fr)"
                templateRows="repeat(4, 3fr)"
                gap={6}
              >
                {diamondAmount.map((item, idx) => (
                  <Button key={idx}>{item}</Button>
                ))}
              </Grid>
            </div>
            <div className="w-full bg-gray-900 text-white rounded-md p-5 space-y-4 ">
              <h1 className="capitalize text-xl font-bold">
                pilih nominal top up
              </h1>
              <Grid templateRows="repeat(4)" gap={4}>
                {dataImage.map((item, idx) => (
                  <Link key={idx} href={`/details/${id}`}>
                    <div className="bg-white text-black flex flex-row justify-between items-center rounded-lg py-4 px-6">
                      <Image
                        src={item}
                        width="100px"
                        height="50px"
                        alt="Logo Gopay"
                      ></Image>
                      <span
                        style={{
                          fontWeight: item === Dana ? "none" : "500",
                          fontSize: item === Dana ? "smaller" : "none",
                          color: item === Dana ? "gray" : "none",
                        }}
                      >
                        {item === Dana
                          ? "Tidak tersedia untuk denominasi ini"
                          : "Rp 100.000"}
                      </span>
                    </div>
                  </Link>
                ))}
              </Grid>
            </div>
            <Button className="w-2/5">Beli</Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default DetailPage;
