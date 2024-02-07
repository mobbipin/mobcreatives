import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import { FiAlignRight } from "react-icons/fi";
export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:justify-around h-16 md:px-8">
      <p className={`font-bold lg:text-xl ${inter.className}`}>MOB CREATIVES</p>
      <nav>
        <ul className="hidden text-sm sm:flex gap-10 font-medium lg:text-base">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        <FiAlignRight className="h-10 w-7 sm:hidden" />
      </nav>
    </header>
  );
}
