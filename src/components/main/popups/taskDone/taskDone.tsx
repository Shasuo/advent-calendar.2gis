import { PopupWrapper } from "@/components/reused/popupWrapper/popupWrapper";
import Image from "next/image";
import { YellowButton } from "@/components/reused/public";
import { useAtom } from "jotai/index";
import { ActivePopupName } from "@/globalState/popups";

export const TaskDone = () => {
  const setPopupName = useAtom(ActivePopupName)[1];
  return (
    <PopupWrapper popupName={"task-done"}>
      <h3 className={"font-bold text-[35px] text-center leading-[100%]"}>
        Задание выполнено!
      </h3>
      <Image
        src={"/images/illustrations/popups/no-auth.png"}
        alt={"Авторизуйтесь в 2ГИС"}
        width={288}
        height={203}
        className={"w-full h-auto mt-4"}
      />
      <p
        className={
          "mt-2 font-normal text-xs text-center leading-[16px] opacity-70"
        }
      >
        Чтобы завтра открылось новое задание, не забудьте нажать кнопку — так мы
        узнаем, что снежинок у вас хватит на целый сугроб!
      </p>
      <YellowButton
        text={"Хорошо"}
        mt={16}
        onClick={() => setPopupName(() => undefined)}
      />
    </PopupWrapper>
  );
};
