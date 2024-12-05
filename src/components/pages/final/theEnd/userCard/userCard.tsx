import Image from "next/image";
import { user } from "@/components/pages/final/theEnd/theEnd";
export const UserCard = ({
  data,
  finalImagesSrc,
}: {
  data: user;
  finalImagesSrc: string;
}) => (
  <div className={"flex items-center justify-between box-border py-[10px]"}>
    <div className={"flex items-center"}>
      <Image
        src={`${finalImagesSrc}/${data.img}`}
        width={44}
        height={44}
        alt={data.name}
      />
      <span className={"block font-normal leading-5 text-sm ml-2"}>
        {data.name}
      </span>
    </div>
    <Image
      src={`${finalImagesSrc}/${data.secondImage}`}
      alt={data.name}
      width={40}
      height={40}
    />
  </div>
);
