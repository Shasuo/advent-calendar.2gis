import { YellowButton } from "@/components/reused/yellowButton/yellowButton";
import { MainHeadline } from "@/components/reused/mainHeadline/mainHeadline";

export const Rules = () => {
  const rules: { number: number; text: string }[] = [
    {
      number: 1,
      text: "Участвовать в розыгрыше могут авторизованные пользователи 2ГИС из России, которые выполнили все задания с 00:00 12 декабря до 23:59 26 декабря 2024 года (по Москве)",
    },
    {
      number: 2,
      text: "Итоги подведём 27 декабря в сторис, телеграм-канале 2ГИС и на этом сайте. ",
    },
    {
      number: 3,
      text: "Подарок отправим до 1 марта 2025 года.",
    },
  ];

  return (
    <section className={"mt-[60px] max-w-contentWrapper mx-auto"}>
      <MainHeadline text={"Правила"} />
      <div className={"mt-4"}>
        {rules.map((el, index) => (
          <div className={"flex items-start mt-3"} key={index}>
            <div
              className={
                "w-[16px] h-[16px] min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px] flex items-center justify-center text-xs"
              }
            >
              {el.number}.
            </div>
            <p className={"block text-xs leading-4 font-normal"}>{el.text}</p>
          </div>
        ))}
      </div>
      <YellowButton
        text={"Задать вопрос"}
        href={"https://t.me/twogis"}
        mt={32}
        color={"white"}
        bg={"#004F2C"}
      />
    </section>
  );
};
