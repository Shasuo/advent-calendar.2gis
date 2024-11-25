import Image from "next/image";
import { MainHeadline, NormalTextP } from "@/components/reused/public";
export const HelloText = () => (
  <section
    className={
      "mt-[60px] max-w-contentWrapper w-full mx-auto relative text-center"
    }
  >
    <Image
      src={"/images/illustrations/homePage/snowflake-helloScreen.png"}
      alt={"Пара недель до нового года"}
      width={64}
      height={71}
      className={"mx-auto"}
    />
    <MainHeadline text={"До Нового года осталась всего пара недель"} mt={8} />
    <NormalTextP
      text={
        "Но волшебство можно почувствовать уже сейчас с нашим адвент-календарём, который подарит новогоднее настроение и сюрпризы."
      }
      mt={16}
    />
  </section>
);
