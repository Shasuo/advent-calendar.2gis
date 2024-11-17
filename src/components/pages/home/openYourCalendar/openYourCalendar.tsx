import { Card } from "@/components/pages/tasks/content/taskCards/card/card";

export const OpenYourCalendar = () => (
  <section
    className={
      "mt-[60px] box-border px-4 py-8 bg-[#013C22] relative z-10 rounded-[24px]"
    }
  >
    <h3 className={"font-semibold text-[22px] leading-[28px]"}>
      Открывайте календарь
    </h3>
    <div className={"w-full mt-4 relative"}>
      <div className={"relative z-30"}>
        <Card
          data={{
            id: 2,
            type: "short",
            status: "completed",
            title: "Гирляндное настроение",
            image: "card-2.png",
            activationDate: "active",
            target_task_href: "https://www.google.com/",
            demonstration: true,
          }}
          token={""}
        />
      </div>
      <div className={"absolute z-20 top-0 left-[74px]"}>
        <Card
          data={{
            id: 3,
            type: "short",
            status: "available",
            title: "Праздничный рецепт",
            image: "card-3.png",
            activationDate: "active",
            target_task_href: "https://www.google.com/",
            demonstration: true,
          }}
          token={""}
        />
      </div>
      <div className={"absolute z-10 top-0 right-0"}>
        <Card
          data={{
            id: 4,
            type: "short",
            status: "notAvailable",
            title: "Курс на Великий Устюг",
            image: "card-3.png",
            activationDate: "2024-12-15T00:00:00+03:00",
            target_task_href: "https://www.google.com/",
            demonstration: true,
          }}
          token={""}
        />
      </div>
    </div>
    <p className={"mt-4 leading-[22px] font-normal text-sm"}>
      С 12 по 29 декабря открывайте карточки и выполняйте небольшие задания,
      которые помогут окунуться в дух праздника.
    </p>
    <p className={"font-normal text-xs leading-4 mt-2 text-[#03C46F]"}>
      К адвент-календарю можно вернуться в любой удобный момент. Чтобы его не
      потерять, мы оставили баннер на главном экране в приложении 2ГИС. Кликните
      на него, и вот вы уже здесь
    </p>
  </section>
);
