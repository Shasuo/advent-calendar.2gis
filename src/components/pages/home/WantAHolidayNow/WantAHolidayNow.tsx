import Image from "next/image";
import { YellowButton } from "@/components/reused/public";

export const WantAHolidayNow = () => (
  <section className={"mt-[60px]"}>
    <Image
      src={"/images/illustrations/homePage/superGift.png"}
      alt={"Супер подарок!"}
      width={320}
      height={273}
      className={"w-full h-auto"}
    />
    <div
      className={
        "box-border bg-[#013C22] rounded-[24px] py-8 px-4 mt-[-101px] z-10 relative"
      }
    >
      <p className={"font-semibold text-base leading-5"}>
        Выполните все задания адвент-календаря, получите в приложении 2ГИС
        виртуальную награду «Ёлочка, гори» и шанс выиграть супер подарок!
      </p>
      <YellowButton text={"Уже хочу праздник!"} mt={16} href={"/tasks"} />
    </div>
  </section>
);
