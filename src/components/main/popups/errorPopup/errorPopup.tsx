import Image from "next/image";
import { MainHeadline } from "@/components/reused/mainHeadline/mainHeadline";
import { YellowButton } from "@/components/reused/yellowButton/yellowButton";
import { NormalTextP, PopupWrapper } from "@/components/reused/public";
import { useAtom } from "jotai/index";

import { ActivePopupName } from "@/globalState/popups";

export const ErrorPopup = () => {
  const setPopupName = useAtom(ActivePopupName)[1];
  return (
    <PopupWrapper popupName={"error-popup"}>
      <Image
        src={"/images/illustrations/popups/ERROR.png"}
        alt={"Что-то пошло не так"}
        width={288}
        height={202.18}
        className={"w-full h-auto"}
      />
      <span className={"text-center"}>
        <MainHeadline text={"Хо-хо-хо! Кажется, что-то пошло не так"} mt={16} />
        <NormalTextP
          text={
            "Попробуйте перезагрузить страницу или вернуться к заданиям позже"
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
