import {
  MainHeadline,
  NormalTextP,
  PopupWrapper,
  YellowButton,
} from "@/components/reused/public";
import Image from "next/image";
import { useAtom } from "jotai/index";
import { ActivePopupName } from "@/globalState/popups";

export const ThreeDaysLeft = () => {
  const setPopupName = useAtom(ActivePopupName)[1];
  return (
    <PopupWrapper popupName={"three-days-left-popup"}>
      <Image
        src={"/images/illustrations/popups/tree.png"}
        alt={"Осталось 3 дня"}
        width={288}
        height={171}
        className={"w-full h-auto"}
      />
      <span className={"text-center"}>
        <MainHeadline text={"Вжух — и 3 дня!"} mt={16} />
        <NormalTextP
          text={
            "До конца «Маршрута в Новый год» всего 3 дня, но вы ещё успеете открыть все окошки, собрать подарки и поучаствовать в розыгрыше суперприза! Мы с Дедом Морозом в вас верим!"
          }
          mt={8}
        />
      </span>

      <YellowButton
        text={"Хорошо"}
        mt={16}
        onClick={() => setPopupName(() => undefined)}
      />
    </PopupWrapper>
  );
};
