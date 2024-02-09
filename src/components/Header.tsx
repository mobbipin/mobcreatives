import { inter } from "@/utils/fonts/inter";

import { FiAlignRight } from "react-icons/fi";
export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between px-4  md:px-8">
      <p className={`font-bold lg:text-xl ${inter.className}`}>MOB CREATIVES</p>
      <nav>
        <ul className="hidden gap-10 text-sm font-medium sm:flex lg:text-base">
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
