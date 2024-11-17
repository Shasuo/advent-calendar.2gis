import React, { useEffect, useState } from "react";
import { useAtom } from "jotai/index";
import { ActivePopupName } from "@/globalState/popups";
import Image from "next/image";

export const PopupWrapper = ({
  children,
  popupName,
}: {
  children: React.ReactNode;
  popupName: string;
}) => {
  interface initialPopup {
    state: boolean;
    animate: boolean;
  }
  const [activePopup, setActivePopup] = useAtom(ActivePopupName);
  const [thisPopupState, setThisPopupState] = useState<initialPopup>({
    state: false,
    animate: false,
  });
  useEffect(() => {
    if (activePopup === popupName) {
      setThisPopupState((prevState) => ({ ...prevState, state: true }));
      setTimeout(() => {
        setThisPopupState((prevState) => ({ ...prevState, animate: true }));
      }, 100);
    } else if (thisPopupState.state) {
      setThisPopupState((prevState) => ({ ...prevState, animate: false }));
      setTimeout(() => {
        setThisPopupState((prevState) => ({ ...prevState, state: false }));
      }, 200);
    }
  }, [activePopup]);
  if (thisPopupState.state) {
    return (
      <section
        className={
          "fixed top-0 left-0 w-full z-[60] h-[100vh] backdrop-blur-[1px]"
        }
      >
        <div
          className={`hover:cursor-pointer absolute w-full h-[100vh] z-10 bg-black left-0 top-0 ${thisPopupState.animate ? "opacity-50" : "opacity-0"}`}
          style={{ transition: ".2s" }}
          onClick={() => setActivePopup(() => undefined)}
        />

        <div
          className={`bottom-0 left-[50%] -translate-x-2/4 w-full max-w-[320px] absolute bg-[#00693B] z-20 box-border pt-[52px] px-4 pb-6 ${thisPopupState.animate ? undefined : "translate-y-full"}`}
          style={{ borderRadius: "24px 24px 0 0", transition: ".2s" }}
        >
          <button
            className={
              "absolute right-4 top-4 w-8 h-8 bg-[#013C22] rounded-[8px] flex items-center justify-center"
            }
            onClick={() => setActivePopup(() => undefined)}
          >
            <Image
              src={"/images/illustrations/popups/closer.svg"}
              alt={"Закрыть"}
              width={12.1}
              height={12.1}
            />
          </button>
          {children}
        </div>
      </section>
    );
  }
};
