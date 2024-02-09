import Image from "next/image";
import { notoSans } from "@/utils/fonts/notoSans";

export default function About() {
  return (
    <div className="pt-10">
      <div className="m-auto flex max-w-screen-xl flex-col items-center  gap-4 px-4 text-center md:flex-row md:justify-between">
        <div className="flex w-full flex-1 justify-center">
          <Image
            src="/about.png"
            alt="About image"
            height="0"
            width="0"
            sizes="100vw"
            className="h-auto w-[20rem] sm:max-w-full md:w-4/5"
          />
        </div>
        <div className={`flex flex-1 flex-col gap-2 ${notoSans.className}`}>
          <p className="w-96 font-medium sm:text-lg md:text-2xl ">
            <span className="text-md font-bold ">MOB CREATIVES</span> is a
            service providing company with specializing in providing digital
            services. We are a group of young passionate IT prodigies..
          </p>
          <a className="w-96 text-sm underline"> More about MOB Creatives</a>
        </div>
      </div>
    </div>
  );
}
