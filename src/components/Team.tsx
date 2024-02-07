import Image from "next/image";
import { notoSans } from "@/components/Hero";

type Team = {
  id: number;
  imgUrl: string;
  name: string;
  role: string;
};

const teams: Team[] = [
  {
    id: 1,
    name: "Ram Bahadur KC",
    imgUrl:
      "https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png",
    role: "Developer",
  },
  {
    id: 2,
    name: "Ram Bahadur KC",
    imgUrl:
      "https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png",
    role: "Developer",
  },
  {
    id: 3,
    name: "Ram Bahadur KC",
    imgUrl:
      "https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png",
    role: "Developer",
  },
];

export default function Team() {
  return (
    <div className="max-w-screen-lg m-auto pt-20 flex flex-col gap-5">
      <h2 className={`text-3xl ${notoSans.className} font-bold`}>
        MEET OUR TEAMS
      </h2>
      <div className="flex justify-between gap-10 flex-wrap items-center">
        {teams.map((team: Team) => (
          <div
            className="flex flex-col justify-center items-center gap-1"
            key={team.id}
          >
            <Image
              src={team.imgUrl}
              alt="Team Image"
              height={300}
              width={200}
              className="rounded-full w-60 h-60 object-cover"
            />
            <h4 className="text-lg font-bold">{team.name}</h4>
            <p className="text-md">{team.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
