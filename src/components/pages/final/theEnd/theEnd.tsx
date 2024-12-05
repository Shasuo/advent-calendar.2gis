import { MainHeadline } from "@/components/reused/mainHeadline/mainHeadline";
import { NormalTextP } from "@/components/reused/normalTextP/normalTextP";
import { UserCard } from "./userCard/userCard";
import Image from "next/image";
import styles from "./theEnd.module.css";

export interface user {
  img: string;
  name: string;
  secondImage: string;
}

export const TheEnd = () => {
  interface usersTypes {
    super: user[];
    normal: user[];
  }

  const finalImagesSrc = "/images/illustrations/final";

  const users: usersTypes = {
    super: [
      {
        img: "userPlaceholder-1.png",
        name: "T*n*e*r*i*k*n*",
        secondImage: "secondUserPlaceholder-1.png",
      },
      {
        img: "userPlaceholder-2.png",
        name: "K*n*t*n*i*k*n*t*n*i*o*o*",
        secondImage: "secondUserPlaceholder-2.png",
      },
      {
        img: "userPlaceholder-3.png",
        name: "K*i*t*n*m*v*",
        secondImage: "secondUserPlaceholder-3.png",
      },
    ],
    normal: [
      {
        img: "userPlaceholder-1.png",
        name: "T*n*e*r*i*k*n*",
        secondImage: "secondUserPlaceholder-3.png",
      },
      {
        img: "userPlaceholder-2.png",
        name: "K*n*t*n*i*k*n*t*n*i*o*o*",
        secondImage: "secondUserPlaceholder-3.png",
      },
      {
        img: "userPlaceholder-3.png",
        name: "K*i*t*n*m*v*",
        secondImage: "secondUserPlaceholder-3.png",
      },
      {
        img: "userPlaceholder-3.png",
        name: "K*i*t*n*m*v*",
        secondImage: "secondUserPlaceholder-3.png",
      },
      {
        img: "userPlaceholder-3.png",
        name: "K*i*t*n*m*v*",
        secondImage: "secondUserPlaceholder-3.png",
      },
      {
        img: "userPlaceholder-4.png",
        name: "M*l*n*k*r*v*",
        secondImage: "secondUserPlaceholder-4.png",
      },
      {
        img: "userPlaceholder-5.png",
        name: "M*l*n*k*r*v*",
        secondImage: "secondUserPlaceholder-4.png",
      },
      {
        img: "userPlaceholder-5.png",
        name: "M*l*n*k*r*v*",
        secondImage: "secondUserPlaceholder-4.png",
      },
      {
        img: "userPlaceholder-5.png",
        name: "M*l*n*k*r*v*",
        secondImage: "secondUserPlaceholder-4.png",
      },
      {
        img: "userPlaceholder-5.png",
        name: "M*l*n*k*r*v*",
        secondImage: "secondUserPlaceholder-4.png",
      },
    ],
  };

  return (
    <section>
      <div className={"max-w-contentWrapper mx-auto"}>
        <div className={"text-center"}>
          <h1 className={"text-[42px] leading-[115%] font-bold"}>
            Встречайте победителей!
          </h1>

          <NormalTextP
            text={
              "Мы уже приготовили хлопушки, чтобы объявить, кому Дед Мороз принесёт под ёлочку подарки от 2ГИС"
            }
            mt={16}
          />
        </div>
        <section className={"mt-8"}>
          <MainHeadline text={"Суперподарки"} />
          <div className={`mt-3 ${styles.usersList}`}>
            {users.super.map((el: user, index: number) => (
              <UserCard data={el} finalImagesSrc={finalImagesSrc} key={index} />
            ))}
          </div>
        </section>
        <section className={"mt-8"}>
          <MainHeadline text={"Подарки"} />
          <div className={`mt-3 ${styles.usersList}`}>
            {users.normal.map((el: user, index: number) => (
              <UserCard data={el} finalImagesSrc={finalImagesSrc} key={index} />
            ))}
          </div>
        </section>
      </div>
      <section
        className={
          "mt-[60px] box-border bg-[#013C22] rounded-[24px] py-8 px-[14.5px] text-center"
        }
      >
        <Image
          src={`${finalImagesSrc}/manadrin.png`}
          alt={"С новым годом!"}
          width={291}
          height={171}
        />
        <MainHeadline text={"С новым годом"} mt={16} />
        <p className={"mt-2 text-xs font-normal leading-4"}>
          Пусть он принесёт вам удачу, успех и множество радостных моментов.
          Желаем тёплых встреч и исполнения всех заветных желаний в 2025 году!
        </p>
      </section>
      <Image
        src={`${finalImagesSrc}/2GIS.png`}
        alt={"2ГИС"}
        width={136}
        height={39}
        className={"mt-[60px] block mx-auto"}
      />
    </section>
  );
};
