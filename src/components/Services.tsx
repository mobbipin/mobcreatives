import Image from "next/image";
import { notoSans } from "@/components/Hero";

type Service = {
  id: number;

  imgUrl: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Website creation & Designing",
    imgUrl: "/service1.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
  {
    id: 2,
    title: "Graphic & Visualization",
    imgUrl: "/service2.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
  {
    id: 3,
    title: "Broadcasting & Production",
    imgUrl: "/service3.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    imgUrl: "/service4.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
];

export default function Services() {
  return (
    <div className="max-w-screen-lg m-auto flex flex-col gap-5 pt-20">
      <h2 className={`text-3xl ${notoSans.className} font-bold`}>
        OUR SERVICES
      </h2>
      <div className="flex gap-10  flex-wrap items-center justify-between">
        {services.map((service) => (
          <div className="w-[30rem] flex flex-col gap-2" key={service.id}>
            <Image
              src={service.imgUrl}
              alt="service image"
              height={200}
              width={400}
              className="object-cover w-full h-72 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Graphic & Visualization</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet
              eleifend faucibus dictum consequat arcu.
            </p>
            <a className="underline text-sm">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
