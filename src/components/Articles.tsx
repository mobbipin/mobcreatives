import Image from "next/image";
import { notoSans } from "@/utils/fonts/notoSans";

type Blog = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Is Banking system good?",
    imgUrl: "/article1.jfif",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
  {
    id: 2,
    title: "What is a blog",
    imgUrl: "/article2.jfif",
    description:
      "Lorem ipsum dolor sit amet consectetur. Et etiam mattis nunc amet eleifend faucibus dictum consequat arcu.",
  },
];

export default function Articles() {
  return (
    <div className="m-auto mt-28 flex max-w-screen-lg flex-col gap-5">
      <h2 className={`text-3xl ${notoSans.className} font-bold`}>
        SOME USEFUL ARTICLES
      </h2>

      <div className="flex flex-wrap items-center justify-between gap-5">
        {blogs.map((blog: Blog) => (
          <div className="flex w-[30rem] flex-col gap-2">
            <Image
              src={blog.imgUrl}
              alt="service image"
              height={200}
              width={400}
              className="h-56 rounded-lg object-cover"
            />
            <h3 className="text-2xl font-bold">{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
