import Image from "next/image";
import { notoSans } from "@/utils/fonts/notoSans";

type Work = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

const works: Work[] = [
  {
    id: 1,
    title: "Library System",
    imgUrl: "/work2.jfif",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
  {
    id: 2,
    title: "Medicare",
    imgUrl: "/work3.jfif",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
];

export default function Works() {
  return (
    <div className="m-auto mt-28 flex max-w-screen-lg flex-col gap-5">
      <h2 className={`text-3xl ${notoSans.className} font-bold`}>OUR WORKS</h2>
      <div className="mb-10 flex items-center gap-10">
        <div className="relative aspect-video h-96 flex-1">
          <Image
            src="/work1.jfif"
            alt="work image"
            layout="fill"
            objectFit="cover"
            // className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <p className="mb-3 text-sm">Latest Project</p>
          <h3 className="mb-2 text-2xl font-bold">Banking System</h3>
          <p className={`text-base ${notoSans.className}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            assumenda velit culpa. Voluptates facere non laudantium placeat
            minima sit officia qui alias illum explicabo. Tempora deserunt sunt
            dolores eligendi amet.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-xs">Satisfied Customers</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs">Nation wide Dealers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5">
        {works.map((work: Work) => (
          <div className="flex w-[30rem] flex-col gap-2">
            <Image
              src={work.imgUrl}
              alt="service image"
              height={200}
              width={400}
              className="h-56 rounded-lg object-cover"
            />
            <h3 className="text-2xl font-bold">{work.title}</h3>
            <p>{work.description}</p>
            <a className="text-sm underline">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
