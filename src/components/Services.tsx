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
    <div className="m-auto flex max-w-screen-lg flex-col gap-5 pt-20">
      <h2 className={`text-3xl ${notoSans.className} font-bold`}>
        OUR SERVICES
      </h2>
      <div className="flex flex-wrap  items-center justify-between gap-10">
        {services.map((service) => (
          <div className="flex w-[30rem] flex-col gap-2" key={service.id}>
            <Image
              src={service.imgUrl}
              alt="service image"
              height={200}
              width={400}
              className="h-72 w-full rounded-lg object-cover"
            />
            <h3 className="text-2xl font-bold">Graphic & Visualization</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet
              eleifend faucibus dictum consequat arcu.
            </p>
            <a className="text-sm underline">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
