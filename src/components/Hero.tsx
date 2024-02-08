import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import { inter } from "@/components/Header";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className="bg-[#EDB5B5] pb-20 pt-9">
      <div className="m-auto grid max-w-screen-xl grid-cols-1 items-center  px-8 sm:grid-cols-2">
        <div className="order-2 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Passionate and committed to creativity
          </h1>
          <p
            className={`${inter.className} text-lg font-medium leading-normal text-gray-700`}
          >
            Elevate | Innovate | Dominate
          </p>
        </div>
        <div className="align-center order-1 flex -rotate-12 justify-center object-cover">
          <Image src="/hero.png" alt="hero image" height={350} width={250} />
        </div>
      </div>
    </div>
  );
}
