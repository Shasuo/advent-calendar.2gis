import { PopupWrapper } from "@/components/reused/popupWrapper/popupWrapper";
import Image from "next/image";
import { MainHeadline, YellowButton } from "@/components/reused/public";
import { useAtom } from "jotai/index";
import { PreRedirectPopup } from "@/globalState/preRedirectPopup";
import { PostTask } from "@/scripts/tasks/postTask";
import { ActivePopupName } from "@/globalState/popups";

export const WillComebackWhenDone = () => {
  const [popupState] = useAtom(PreRedirectPopup);
  const setPopupName = useAtom(ActivePopupName)[1];
  return (
    <PopupWrapper popupName={"will-come-back-when-done-popup"}>
      <Image
        src={"/images/illustrations/popups/welcome.png"}
        alt={"Не забудьте вернуться"}
        width={288}
        height={203}
        className={"w-full h-auto"}
      />
      <span className={"text-center"}>
        <MainHeadline
          text={"Не забудьте вернуться на лендинг после прохождения задания"}
          mt={16}
        />
      </span>
      <YellowButton
        text={"Хорошо"}
        onClick={() => {
          PostTask(
            popupState.button.href,
            popupState.id,
            popupState.token,
            setPopupName,
          );
          setPopupName(() => undefined);
        }}
        mt={24}
      />
    </PopupWrapper>
  );
};
