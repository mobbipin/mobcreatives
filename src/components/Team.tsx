import Image from "next/image";
import { notoSans } from "@/utils/fonts/notoSans";

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
    <div className="m-auto mt-28 flex max-w-screen-lg flex-col gap-5 px-4">
      <h2 className={`text-2xl ${notoSans.className} font-bold`}>
        MEET OUR TEAMS
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-10">
        {teams.map((team: Team) => (
          <div
            className="flex flex-col items-center justify-center gap-1"
            key={team.id}
          >
            <Image
              src={team.imgUrl}
              alt="Team Image"
              height={300}
              width={200}
              className="h-60 w-60 rounded-full object-cover"
            />
            <h4 className="text-lg font-bold">{team.name}</h4>
            <p className="text-md">{team.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
