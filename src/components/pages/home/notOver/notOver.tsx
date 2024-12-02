import { MainHeadline } from "@/components/reused/mainHeadline/mainHeadline";
import { NormalTextP } from "@/components/reused/normalTextP/normalTextP";
import Image from "next/image";
import { MainLinksList, YellowButton } from "@/components/reused/public";

export const NotOver = () => (
  <section
    className={
      "mt-[60px] box-border px-4 py-8 bg-[#013C22] rounded-[24px] text-center relative overflow-hidden"
    }
  >
    <div
      className={
        "w-full h-[200px] bg-[#00693B] rounded-[24px] mix-blend-lighten absolute top-[161px] z-0 left-0 opacity-40"
      }
      style={{
        filter: "blur(60px) brightness(1.2)",
      }}
    />
    <MainHeadline text={"Но это ещё не всё!"} />
    <NormalTextP
      text={"Мы подготовили подарки от Отелло и магазина мерча 2ГИС"}
      mt={8}
    />
    <Image
      src={"/images/illustrations/homePage/notOver.png"}
      alt={"Еще не всё!"}
      width={284.05}
      height={194}
      className={"block mx-auto w-[284.05px] mt-6 relative z-10"}
    />
    <NormalTextP
      text={
        "5 наборов для зимних развлечений от 2ГИС и 5 промокодов на Отелло по 10 000 ₽"
      }
      mt={12}
    />
    <YellowButton
      text={"Уже хочу праздник!"}
      mt={24}
      href={MainLinksList["tasks"]}
    />
  </section>
);
