import Image from "next/image";
import { MainHeadline, NormalTextP } from "@/components/reused/public";
export const HelloText = () => (
  <section
    className={
      "mt-[60px] max-w-contentWrapper w-full mx-auto relative text-center"
    }
  >
    <Image
      src={"/images/illustrations/homePage/confetti.png"}
      alt={"Пара недель до нового года"}
      width={288}
      height={71}
      className={"mx-auto w-full h-auto"}
    />
    <MainHeadline text={"До Нового года всего пара недель"} mt={16} />
    <NormalTextP
      text={
        "Но волшебство можно почувствовать уже сейчас с нашим адвент-календарём, который подарит новогоднее настроение и сюрпризы."
      }
      mt={16}
    />
  </section>
);
