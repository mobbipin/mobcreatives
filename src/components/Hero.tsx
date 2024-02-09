import Image from "next/image";
import { inter } from "@/utils/fonts/inter";
import { notoSans } from "@/utils/fonts/notoSans";

// export default function Hero() {
//   return (
//     <div className="bg-[#EDB5B5] pb-12 sm:pt-14">
//       <div className="content-arounds grid-cols-1m m-auto grid max-w-screen-xl items-center  px-8 md:grid-cols-2">
//         <div className="order-2 pt-[-5px] text-center md:order-1 md:text-left">
//           <h1 className="mb-4 text-2xl  font-bold tracking-tight md:w-96 lg:text-5xl">
//             Passionate and committed to creativity
//           </h1>
//           <p
//             className={`${inter.className} text-md font-medium leading-normal text-gray-700 sm:text-lg `}
//           >
//             Elevate | Innovate | Dominate
//           </p>
//         </div>
//         <div className="align-center order-1 mt-[-5px] flex origin-center -rotate-[15deg] justify-center object-cover md:order-2">
//           <Image
//             src="/hero.png"
//             alt="hero image"
//             height="0"
//             width="0"
//             sizes="100vw"
//             objectFit="cover"
//             className="h-auto w-56 p-[-2rem]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Hero() {
  return (
    <div className="flex h-[32rem] w-screen items-center bg-[#EDB5B5]">
      <div className="m-auto max-w-[120rem] md:flex md:items-center md:justify-between">
        <div className="flex flex-col gap-5 text-[#283050]">
          <h1
            className={` mt-10  p-2 text-lg font-semibold leading-tight sm:text-xl md:w-96 md:text-5xl ${notoSans.className}`}
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
