import { PopupWrapper } from "@/components/reused/popupWrapper/popupWrapper";
import {
  MainHeadline,
  NormalTextP,
  YellowButton,
} from "@/components/reused/public";
import { useAtom } from "jotai/index";
import { PreRedirectPopup } from "@/globalState/preRedirectPopup";
import { ActivePopupName } from "@/globalState/popups";
import { PostTask } from "@/scripts/tasks/postTask";
import Image from "next/image";

export const PreTaskPopup = () => {
  const [popupState] = useAtom(PreRedirectPopup);
  const setPopupName = useAtom(ActivePopupName)[1];
  return (
    <PopupWrapper popupName={"pre-redirect-task-popup"}>
      <div className={"text-center mt-2"}>
        {popupState.promo ? (
          <Image
            src={`/images/illustrations/tasksCards/popups/${popupState.promo.image}`}
            alt={popupState.title}
            width={89}
            height={89}
            className={"absolute top-0 left-[50%] -translate-x-1/2 -mt-[35px]"}
          />
        ) : undefined}
        <MainHeadline text={popupState.title} />
        <NormalTextP text={popupState.text} mt={12} />
        {popupState.promo ? (
          <YellowButton
            text={popupState.button.text}
            mt={16}
            onClick={() => setPopupName("will-come-back-when-done-popup")}
          />
        ) : (
          <YellowButton
            text={popupState.button.text}
            mt={16}
            onClick={() => {
              PostTask(
                popupState.button.href,
                popupState.id,
                popupState.token,
                setPopupName,
              );
              setPopupName(() => undefined);
            }}
          />
        )}
        <p
          className={
            "mt-4 font-normal text-xs leading-4 opacity-70 box-border px-3 pt-[14px] pb-[10px] bg-[#013C22] rounded-[16px]"
          }
        >
          Чтобы завтра открылось новое задание, не забудьте нажать кнопку
        </p>
      </div>
    </PopupWrapper>
  );
};
