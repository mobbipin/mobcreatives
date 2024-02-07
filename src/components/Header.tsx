import { FiAlignRight } from "react-icons/fi";
export default function Header() {
  return (
    <header className="bg-[#FFFFFF] h-16 border-solid border-2 flex items-center  justify-between px-4 lg:justify-around">
      <p className="font-bold lg:text-xl">MOB CREATIVES</p>
      <nav>
        <ul className="hidden sm:flex gap-10 font-medium">
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
