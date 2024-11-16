import { YellowButton } from "@/components/reused/yellowButton/yellowButton";

export const Rules = () => {
  const rules: { number: number; text: string }[] = [
    {
      number: 1,
      text: "Участвовать в розыгрыше суперподарка могут авторизованные пользователи 2ГИС из России, которые выполнили все задания адвент-календаря.",
    },
    {
      number: 2,
      text: "Выполнять задания можно с 00:00 12 декабря по 23:59 26 декабря 2024 года по московскому времени. Итоги опубликуем 27 декабря в сторис 2ГИС, телеграм-канале 2ГИС и на этом сайте.",
    },
    {
      number: 3,
      text: "Подарок отправим победителю до 1 марта 2025 года.",
    },
  ];

  return (
    <section className={"mt-[60px] max-w-contentWrapper mx-auto"}>
      <h3 className={"font-semibold text-[22px] leading-7"}>Правила</h3>
      <div className={"mt-4"}>
        {rules.map((el, index) => (
          <div className={"flex items-start mt-3"} key={index}>
            <div
              className={
                "bg-[#FF261D] w-[24px] h-[24px] min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] flex items-center justify-center rounded-[50%] box-border pt-[4px]"
              }
            >
              {el.number}
            </div>
            <p className={"block ml-3 text-xs leading-4 font-normal"}>
              {el.text}
            </p>
          </div>
        ))}
      </div>
      <YellowButton text={"Задать вопрос"} mt={16} />
    </section>
  );
};
