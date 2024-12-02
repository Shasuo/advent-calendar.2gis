import { PopupWrapper } from "@/components/reused/popupWrapper/popupWrapper";
import Image from "next/image";
import { MainHeadline, YellowButton } from "@/components/reused/public";
import { useAtom } from "jotai/index";
import { ActivePopupName } from "@/globalState/popups";
import { PreRedirectPopup } from "@/globalState/preRedirectPopup";
import { useState } from "react";
import { ActivePopupName__secondLevel } from "@/globalState/popups_secondlevel";

export const TaskDone = () => {
  const [popupState] = useAtom(PreRedirectPopup);
  const Promo = popupState.promo;

  const setPopupName = useAtom(
    Promo ? ActivePopupName__secondLevel : ActivePopupName,
  )[1];

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    if (Promo) {
      try {
        await navigator.clipboard.writeText(Promo.code);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (error) {
        console.error("Ошибка при копировании промокода:", error);
      }
    }
  };
  return (
    <PopupWrapper popupName={"task-done"}>
      {Promo ? (
        <>
          <div className={"bg-white rounded-[24px] box-border py-6 px-5"}>
            <Image
              src={`/images/illustrations/tasksCards/popups/${Promo.secondImage}`}
              alt={"Задание выполнено!"}
              width={89}
              height={89}
              className={"block mx-auto"}
            />
            <h3
              className={
                "mt-3 text-center text-[#010101] leading-[26px] text-[22px] font-semibold"
              }
            >
              {Promo.title}
            </h3>
            <div
              className={
                "mt-3 rounded-[16px] box-border px-3 pt-[14px] pb-[10px] flex items-center justify-between max-h-[48px]"
              }
              style={{ border: "2px solid #DCDEE3" }}
            >
              <span
                className={
                  "block leading-6 text-base font-normal text-[#1A1A1A]"
                }
              >
                {isCopied ? "Скопировано!" : Promo.code}
              </span>
              <Image
                src={"/images/icons/copy.svg"}
                alt={"Копировать"}
                width={24}
                height={24}
                className={"cursor-pointer"}
                onClick={copyToClipboard}
              />
            </div>
          </div>
          <p
            className={
              "font-normal text-xs leading-4 text-white text-center mt-3"
            }
          >
            {Promo.subtitle}
            <br />
            <span
              className={"underline cursor-pointer"}
              onClick={() => setPopupName("conditions-promoCode-popup")}
            >
              Правила акции
            </span>
          </p>
          <YellowButton
            text={"Скопировать"}
            mt={16}
            onClick={copyToClipboard}
          />
        </>
      ) : (
        <>
          <Image
            src={"/images/illustrations/popups/taskDone.png"}
            alt={"Задание выполнено!"}
            width={288}
            height={203}
            className={"w-full h-auto"}
          />
          <span className={"text-center"}>
            <MainHeadline text={"Задание выполнено!"} mt={16} />
          </span>

          <YellowButton
            text={"Хорошо"}
            mt={16}
            onClick={() => setPopupName(() => undefined)}
          />
        </>
      )}
    </PopupWrapper>
  );
};
