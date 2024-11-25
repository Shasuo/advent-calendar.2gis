import { MainHeadline } from "@/components/reused/mainHeadline/mainHeadline";
import { NormalTextP } from "@/components/reused/normalTextP/normalTextP";
import Image from "next/image";

export const TheEnd = () => {
  return (
    <section className={"text-center"}>
      <div className={"max-w-contentWrapper mx-auto"}>
        <MainHeadline text={"Встречайте победителя!"} />
        <NormalTextP
          text={
            "Мы уже приготовили хлопушки, чтобы объявить, кому Дед Мороз принесёт под ёлочку суперподарок от 2ГИС."
          }
          mt={8}
        />
        <div className={"block w-fit mx-auto mt-8"}>
          <Image
            src={"/images/illustrations/final/winnerPlaceholder.png"}
            alt={"Победитель"}
            width={52}
            height={52}
            className={"block w-fit mx-auto"}
          />
          <h3 className={"text-base font-semibold leading-4 mt-3"}>
            Игорь Зубарев
          </h3>
          <span
            className={"block text-sm mt-1 font-normal leading-5 opacity-65"}
          >
            Выиграл iPhone 16 Pro
          </span>
        </div>
        <Image
          src={"/images/illustrations/final/finalAwward.png"}
          alt={"Осталось чуть-чуть!"}
          width={266}
          height={209}
          className={"mx-auto block max-w-fit h-auto mt-2"}
        />
      </div>
      <div
        className={"mt-[60px] rounded-[24px] bg-[#013C22] box-border px-4 py-8"}
      >
        <div>
          <Image
            src={"/images/illustrations/final/newYear.png"}
            alt={"С Новым годом!"}
            width={288}
            height={171}
            className={"w-full h-auto"}
          />
          <MainHeadline text={"С Новым годом!"} mt={16} />
          <p className={"mt-2 leading-4 text-xs font-normal"}>
            Пусть новый год принесёт вам удачу, успех и множество радостных
            моментов. Желаем тёплых встреч и исполнения всех заветных желаний
            в 2025 году!
          </p>
        </div>
      </div>
      <div className={"mt-[60px]"}>
        <h1 className={"text-[42px] font-bold leading-[115%]"}>Любим вас!</h1>
        <Image
          src={"/images/illustrations/final/2GIS.png"}
          alt={"2GIS"}
          width={86}
          height={24}
          className={"block mx-auto mt-1"}
        />
      </div>
    </section>
  );
};
