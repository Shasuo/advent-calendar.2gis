import { MainHeadline } from "@/components/reused/mainHeadline/mainHeadline";
import { NormalTextP } from "@/components/reused/normalTextP/normalTextP";
import Image from "next/image";
import { MainLinksList } from "@/components/reused/mainLinksList/mainLinksList";
import { YellowButton } from "@/components/reused/yellowButton/yellowButton";
import { SocialGarland } from "@/components/reused/socialGarland/socialGarland";

export const ToClose = () => {
  return (
    <section className={"text-center"}>
      <div className={"max-w-contentWrapper mx-auto"}>
        <MainHeadline text={"Осталось чуть-чуть!"} />
        <NormalTextP
          text={
            "У вас есть ещё время, чтобы поучаствовать в розыгрыше суперподарка"
          }
          mt={8}
        />
        <Image
          src={"/images/illustrations/final/toClose.png"}
          alt={"Осталось чуть-чуть!"}
          width={288}
          height={213}
          className={"w-full h-auto mt-4"}
        />
        <NormalTextP
          text={
            "Вам даже не придётся читать стишок Деду Морозу! Просто выполните оставшиеся задания адвент-календаря до 23:59 26 декабря по московскому времен. Итоги подведём 27 декабря"
          }
          mt={16}
        />
        <YellowButton text={"Играть"} mt={16} href={MainLinksList["tasks"]} />
      </div>
      <SocialGarland mt={60} />
    </section>
  );
};
