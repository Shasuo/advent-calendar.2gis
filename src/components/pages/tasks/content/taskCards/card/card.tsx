import Image from "next/image";
import { taskCard } from "@/components/pages/tasks/content/taskCards/taskCards";
import { useAtom } from "jotai/index";
import { ActivePopupName } from "@/globalState/popups";
import { PreRedirectPopup } from "@/globalState/preRedirectPopup";
export const Card = ({ data, token }: { data: taskCard; token: string }) => {
  const ToTheTask = data.toTheTask;
  const setPopupName = useAtom(ActivePopupName)[1];
  const setPreRedirectPopup = useAtom(PreRedirectPopup)[1];

  const rootImages = "/images/illustrations/tasksCards";
  return (
    <div
      className={`rounded-[8px] ${data.status === "completed" ? "bg-[#00693B]" : `bg-[#E7E7E7] ${data.status === "notAvailable" ? "inactive" : undefined}`} box-border p-2 overflow-hidden relative ${data.type === "full" ? "h-[140px] w-full col-span-2" : "w-[140px] h-[166px]"}`}
    >
      {data.status === "available" && !data.demonstration ? (
        <div
          className={
            "absolute top-0 left-0 z-30 w-full h-full hover:cursor-pointer"
          }
          onClick={() => {
            setPreRedirectPopup({
              id: data.id,
              title: ToTheTask.title,
              text: ToTheTask.text,
              button: ToTheTask.button,
              promo: data.promotionalCode,
              token: token,
            });
            setPopupName("pre-redirect-task-popup");
          }}
        />
      ) : undefined}

      {data.status === "completed" && !data.demonstration ? (
        <div
          className={
            "absolute top-0 left-0 z-30 w-full h-full hover:cursor-pointer"
          }
          onClick={() => {
            setPopupName("task-done");
            setPreRedirectPopup({
              id: data.id,
              title: ToTheTask.title,
              text: ToTheTask.text,
              button: ToTheTask.button,
              promo: data.promotionalCode,
              token: token,
            });
          }}
        />
      ) : undefined}

      <span
        className={`${data.status === "available" ? "text-white bg-[#00693B] rounded-[2px] px-[6px] w-fit box-border max-h-5 pt-[2px]" : data.status === "completed" ? "text-[#03C46F]" : "text-[#1A1A1A]"} flex h-5 text-[10px] items-center font-semibold`}
      >
        {data.status === "completed"
          ? "Выполнено"
          : data.status === "available"
            ? "Доступно"
            : `Доступно с ${data.activationDate !== "active" ? new Date(data.activationDate).getDate() : undefined} декабря`}
      </span>
      <h3
        className={`${data.status === "available" ? "mt-2" : "mt-[2px]"} max-w-[124px] w-full leading-[16px] text-base font-semibold ${data.status === "completed" ? undefined : "text-[#1A1A1A]"}`}
      >
        {data.title}
      </h3>
      <img
        src={`${rootImages}/${data.image}`}
        alt={"Карточка"}
        width={data.type === "full" ? 148 : 140}
        height={data.type === "full" ? 140 : 95}
        className={`absolute ${data.type === "full" ? "right-0 top-0" : "left-0 bottom-0"}`}
      />
      {data.type === "full" ? (
        <Image
          src={`${rootImages}/confetti.png`}
          alt={"Снежинка"}
          width={140}
          height={46}
          className={"absolute bottom-2 left-0"}
        />
      ) : undefined}
    </div>
  );
};
