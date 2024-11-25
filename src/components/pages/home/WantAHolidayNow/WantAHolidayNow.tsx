import Image from "next/image";
import {
  MainHeadline,
  MainLinksList,
  NormalTextP,
  YellowButton,
} from "@/components/reused/public";

export const WantAHolidayNow = () => (
  <section
    className={
      "mt-[60px] box-border bg-[#013C22] rounded-[24px] py-8 px-4 z-10 relative text-center"
    }
  >
    <MainHeadline text={"Выполните все задания"} />
    <NormalTextP
      text={
        "Получите награду «Новогодняя звезда» в 2ГИС и шанс выиграть суперподарок! Победителя выберем случайным образом и объявим 27 декабря на сайте."
      }
      mt={8}
    />
    <Image
      src={"/images/illustrations/homePage/superGift.png"}
      alt={"Новогодняя звезда"}
      width={288}
      height={186}
      className={"w-full h-auto mt-4"}
    />
    <YellowButton
      text={"Уже хочу праздник!"}
      mt={16}
      href={MainLinksList["tasks"]}
    />
  </section>
);
