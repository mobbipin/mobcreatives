import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import { inter } from "@/components/Header";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className="h-[32rem] bg-[#EDB5B5] flex items-center w-screen">
      <div className="md:flex md:items-center md:justify-between max-w-[120rem] m-auto">
        <div className="text-[#283050] flex flex-col gap-5">
          <h1
            className={` text-lg  sm:text-xl p-2 md:text-5xl md:w-96 font-semibold leading-tight mt-10 ${notoSans.className}`}
          >
            Passionate and committed to creativity
          </h1>
          <p className={`${inter.className}`}>Elevate | Innovate | Dominate</p>
        </div>
        <Image
          src="/hero.png"
          alt="hero image"
          height={480}
          width={550}
          className="origin-center -rotate-12"
        />
      </div>
    </div>
  );
}
