import Image from "next/image";
import { notoSans } from "@/components/Hero";

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-screen-lg my-0 mx-auto px-12">
        <div className="flex items-center gap-5">
          <Image src="/about.png" alt="About image" height={400} width={400} />
          <div
            className={`flex flex-col gap-4 ${notoSans.className} w-96 text-xl`}
          >
            <p className="font-">
              <span className="text-lg font-bold">MOB CREATIVES</span> is a
              service providing company with specializing in providing digital
              services. We are a group of young passionate IT prodigies..
            </p>
            <a className="underline text-sm">More about MOB Creatives</a>
          </div>
        </div>
      </div>
    </div>
  );
}
