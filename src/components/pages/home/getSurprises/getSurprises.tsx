import Image from "next/image";
import { MainHeadline, NormalTextP } from "@/components/reused/public";

export const GetSurprises = () => (
  <section className={"mt-[60px] text-center max-w-contentWrapper mx-auto"}>
    <MainHeadline text={"Получайте сюрпризы"} />
    <NormalTextP
      text={
        "В некоторых карточках мы спрятали сюрпризы — полезные промокоды, которые точно пригодятся на новогодних каникулах. Найдите их все!"
      }
      mt={8}
    />
    <Image
      src={"/images/illustrations/homePage/surprise.png"}
      alt={"Сюрпризы"}
      width={288}
      height={199}
      className={"w-full h-auto mt-4"}
    />
  </section>
);
