import Image from "next/image";

export default function Customers() {
  return (
    <div className="bg-[#D9D9D940]">
      <div className="m-auto mt-10 max-w-screen-lg py-2">
        <h3 className="mt-5 text-center text-lg font-bold">Our Customers</h3>
        <div className="relative h-32 w-full bg-transparent">
          <Image
            src="/customers.png"
            alt="customers image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
