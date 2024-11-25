import { Card } from "@/components/pages/tasks/content/taskCards/card/card";
import { NormalTextP } from "@/components/reused/normalTextP/normalTextP";
import { MainHeadline } from "@/components/reused/public";

export const OpenYourCalendar = () => {
  const generalClasses =
    "box-border px-4 py-8 bg-[#013C22] relative z-10 rounded-[24px] text-center";
  return (
    <section>
      <div className={`mt-[60px] ${generalClasses}`}>
        <MainHeadline text={"Открывайте календарь"} />

        <NormalTextP
          text={
            "С 12 по 26 декабря открывайте карточки и выполняйте задания, погружаясь в праздничное настроение."
          }
          mt={8}
        />

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
                toTheTask: {
                  title: "",
                  text: "",
                  button: { text: "", href: "" },
                },
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
                toTheTask: {
                  title: "",
                  text: "",
                  button: { text: "", href: "" },
                },
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
                toTheTask: {
                  title: "",
                  text: "",
                  button: { text: "", href: "" },
                },
                demonstration: true,
              }}
              token={""}
            />
          </div>
        </div>
      </div>
      <div className={generalClasses}>
        <NormalTextP
          text={
            "К адвент-календарю можно вернуться в любое время через баннер на\n" +
            "          главном экране приложения 2ГИС. Кликните — и вы снова здесь!"
          }
        />
        <img
          src={"/images/illustrations/homePage/roadInNewYear.png"}
          alt={"Маршрут на Новый год"}
          width={288}
          height={192}
          className={"w-full h-auto mt-6"}
          loading={"lazy"}
        />
      </div>
    </section>
  );
};
